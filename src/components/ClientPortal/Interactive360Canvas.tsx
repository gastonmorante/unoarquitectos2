import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Compass, 
  Layers, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw,
  Sparkles,
  Smartphone,
  Footprints,
  MapPin,
  CheckCircle2,
  Navigation
} from "lucide-react";
import { Scene360Item } from "../../types/clientPortal";

interface Interactive360CanvasProps {
  scenes: Scene360Item[];
  dateTitle: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

interface Hotspot2D {
  sceneIndex: number;
  title: string;
  roomName: string;
  type: "forward" | "backward" | "zone";
  screenX: number;
  screenY: number;
  visible: boolean;
  headingText: string;
}

// Robust WebGL Support Detection
function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function Interactive360Canvas({
  scenes,
  dateTitle,
  isFullscreen,
  onToggleFullscreen,
}: Interactive360CanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Tour Modes
  const [autoRotate, setAutoRotate] = useState(false);
  const autoRotateRef = useRef(false);
  const [isGuidedTour, setIsGuidedTour] = useState(false);
  const [isGyroActive, setIsGyroActive] = useState(false);
  const [showSceneList, setShowSceneList] = useState(true);
  const [showRoomDrawer, setShowRoomDrawer] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  // Compass Heading State
  const [currentHeading, setCurrentHeading] = useState(0);

  // 3D Hotspots Screen Positions State
  const [hotspots2D, setHotspots2D] = useState<Hotspot2D[]>([]);

  // 2D Fallback Pan State
  const [panX, setPanX] = useState(50);
  const [zoom2D, setZoom2D] = useState(1);
  const isDragging2D = useRef(false);
  const startX2D = useRef(0);
  const startPanX2D = useRef(50);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereMeshRef = useRef<THREE.Mesh | null>(null);
  const textureLoaderRef = useRef<THREE.TextureLoader | null>(null);

  // Interaction coordinates for 3D
  const isUserInteractingRef = useRef(false);
  const onPointerDownPointerXRef = useRef(0);
  const onPointerDownPointerYRef = useRef(0);
  const onPointerDownLonRef = useRef(0);
  const onPointerDownLatRef = useRef(0);
  const lonRef = useRef(180);
  const latRef = useRef(0);
  const phiRef = useRef(0);
  const thetaRef = useRef(0);

  const safeScenes = Array.isArray(scenes) && scenes.length > 0 ? scenes : [
    {
      id: "fallback-scene",
      title: "Punto 360° Principal",
      equirectangularUrl: "/client-portal/arrecifes/360-equirect/2026-09-05/scene_050926_01.jpg",
      thumbnailUrl: "/client-portal/arrecifes/360-equirect/2026-09-05/scene_050926_01.jpg",
      roomName: "Vestíbulo Principal"
    }
  ];

  const activeScene = safeScenes[activeSceneIndex] || safeScenes[0];

  // Auto-rotate toggle
  const handleToggleAutoRotate = () => {
    setAutoRotate((prev) => {
      const next = !prev;
      autoRotateRef.current = next;
      if (isGuidedTour && !next) setIsGuidedTour(false);
      return next;
    });
  };

  // Guided Tour Mode (Auto Teleports every 8s)
  const handleToggleGuidedTour = () => {
    setIsGuidedTour((prev) => {
      const next = !prev;
      if (next) {
        setAutoRotate(true);
        autoRotateRef.current = true;
      }
      return next;
    });
  };

  useEffect(() => {
    if (!isGuidedTour) return;
    const interval = setInterval(() => {
      handleTeleportToScene((activeSceneIndex + 1) % safeScenes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isGuidedTour, activeSceneIndex, safeScenes.length]);

  // Mobile Gyroscope / Device Orientation Toggle
  const handleToggleGyro = async () => {
    if (isGyroActive) {
      setIsGyroActive(false);
      return;
    }
    if (
      typeof window !== "undefined" &&
      typeof (window as any).DeviceOrientationEvent !== "undefined" &&
      typeof (window as any).DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        const res = await (window as any).DeviceOrientationEvent.requestPermission();
        if (res === "granted") {
          setIsGyroActive(true);
        }
      } catch (err) {
        console.warn("Gyro permission denied:", err);
      }
    } else {
      setIsGyroActive(true);
    }
  };

  useEffect(() => {
    if (!isGyroActive) return;
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.alpha !== null && e.beta !== null) {
        lonRef.current = (360 - e.alpha) % 360;
        latRef.current = THREE.MathUtils.clamp(e.beta - 90, -75, 75);
      }
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [isGyroActive]);

  // Reset angle when scenes or index changes
  useEffect(() => {
    lonRef.current = 180;
    latRef.current = 0;
  }, [scenes, activeSceneIndex]);

  // Teleport Scene Transition with Smooth FOV Animation
  const handleTeleportToScene = (targetIdx: number) => {
    if (targetIdx === activeSceneIndex || targetIdx < 0 || targetIdx >= safeScenes.length) return;
    setIsTransitioning(true);
    if (cameraRef.current) {
      cameraRef.current.fov = 50; // Camera push zoom effect
      cameraRef.current.updateProjectionMatrix();
    }
    setTimeout(() => {
      setActiveSceneIndex(targetIdx);
      if (cameraRef.current) {
        cameraRef.current.fov = 75; // Restore normal wide-angle FOV
        cameraRef.current.updateProjectionMatrix();
      }
      setTimeout(() => setIsTransitioning(false), 300);
    }, 250);
  };

  // Texture loading helper
  const loadTexture = useCallback((url: string) => {
    if (!url || !sphereMeshRef.current) return;
    setIsLoading(true);

    if (!textureLoaderRef.current) {
      textureLoaderRef.current = new THREE.TextureLoader();
    }

    let isSubscribed = true;
    const fallbackTimer = setTimeout(() => {
      if (isSubscribed) setIsLoading(false);
    }, 2000);

    textureLoaderRef.current.load(
      url,
      (texture) => {
        if (!isSubscribed) {
          texture.dispose();
          return;
        }
        clearTimeout(fallbackTimer);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        if (sphereMeshRef.current) {
          const mat = sphereMeshRef.current.material as THREE.MeshBasicMaterial;
          if (mat.map) {
            mat.map.dispose();
          }
          mat.color.setHex(0xffffff);
          mat.map = texture;
          mat.needsUpdate = true;
        }
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.warn("Could not load equirectangular texture, using fallback preview:", err);
        if (isSubscribed) {
          clearTimeout(fallbackTimer);
          setIsLoading(false);
        }
      }
    );

    return () => {
      isSubscribed = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    if (!checkWebGLSupport()) {
      setWebGLSupported(false);
      setIsLoading(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;
    const vec3 = new THREE.Vector3();

    try {
      const width = container.clientWidth || window.innerWidth || 360;
      const height = container.clientHeight || 480;
      const aspect = (width > 0 && height > 0) ? width / height : 16 / 9;

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(75, aspect, 1, 1100);
      cameraRef.current = camera;

      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);

      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      sphereMeshRef.current = mesh;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      rendererRef.current = renderer;

      // Safely attach canvas
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // Load active texture
      if (activeScene?.equirectangularUrl) {
        loadTexture(activeScene.equirectangularUrl);
      }

      // Animation Loop with 3D Hotspot Screen Projections
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (autoRotateRef.current && !isUserInteractingRef.current) {
          lonRef.current += 0.16;
        }

        latRef.current = Math.max(-85, Math.min(85, latRef.current));
        phiRef.current = THREE.MathUtils.degToRad(90 - latRef.current);
        thetaRef.current = THREE.MathUtils.degToRad(lonRef.current);

        const targetX = 500 * Math.sin(phiRef.current) * Math.cos(thetaRef.current);
        const targetY = 500 * Math.cos(phiRef.current);
        const targetZ = 500 * Math.sin(phiRef.current) * Math.sin(thetaRef.current);

        if (cameraRef.current && rendererRef.current && sceneRef.current) {
          cameraRef.current.lookAt(targetX, targetY, targetZ);
          rendererRef.current.render(sceneRef.current, cameraRef.current);

          // Update real-time compass heading
          const normalizedLon = ((lonRef.current % 360) + 360) % 360;
          setCurrentHeading(Math.round(normalizedLon));

          // Project 3D Hotspots to 2D Screen Coordinates
          const cW = container.clientWidth || 600;
          const cH = container.clientHeight || 450;
          
          if (safeScenes.length > 1) {
            const nextIdx = (activeSceneIndex + 1) % safeScenes.length;
            const prevIdx = (activeSceneIndex - 1 + safeScenes.length) % safeScenes.length;
            const nextSceneObj = safeScenes[nextIdx];
            const prevSceneObj = safeScenes[prevIdx];

            // Forward Hotspot (Yaw +35°, Pitch -14°)
            const forwardYaw = 180 + 35;
            const forwardPitch = -14;
            const phiF = THREE.MathUtils.degToRad(90 - forwardPitch);
            const thetaF = THREE.MathUtils.degToRad(forwardYaw);
            vec3.set(450 * Math.sin(phiF) * Math.cos(thetaF), 450 * Math.cos(phiF), 450 * Math.sin(phiF) * Math.sin(thetaF));
            vec3.project(cameraRef.current);

            const isForwardInFront = vec3.z < 1;
            const forwardX = (vec3.x * 0.5 + 0.5) * cW;
            const forwardY = (-(vec3.y * 0.5) + 0.5) * cH;
            const isForwardVisible = isForwardInFront && forwardX >= 30 && forwardX <= cW - 30 && forwardY >= 40 && forwardY <= cH - 60;

            // Backward Hotspot (Yaw -145°, Pitch -14°)
            const backwardYaw = 180 - 145;
            const backwardPitch = -14;
            const phiB = THREE.MathUtils.degToRad(90 - backwardPitch);
            const thetaB = THREE.MathUtils.degToRad(backwardYaw);
            vec3.set(450 * Math.sin(phiB) * Math.cos(thetaB), 450 * Math.cos(phiB), 450 * Math.sin(phiB) * Math.sin(thetaB));
            vec3.project(cameraRef.current);

            const isBackwardInFront = vec3.z < 1;
            const backwardX = (vec3.x * 0.5 + 0.5) * cW;
            const backwardY = (-(vec3.y * 0.5) + 0.5) * cH;
            const isBackwardVisible = isBackwardInFront && backwardX >= 30 && backwardX <= cW - 30 && backwardY >= 40 && backwardY <= cH - 60;

            const newHotspots: Hotspot2D[] = [
              {
                sceneIndex: nextIdx,
                title: nextSceneObj.title,
                roomName: nextSceneObj.roomName || `Punto #${nextIdx + 1}`,
                type: "forward",
                screenX: forwardX,
                screenY: forwardY,
                visible: isForwardVisible,
                headingText: "Avanzar a"
              },
              {
                sceneIndex: prevIdx,
                title: prevSceneObj.title,
                roomName: prevSceneObj.roomName || `Punto #${prevIdx + 1}`,
                type: "backward",
                screenX: backwardX,
                screenY: backwardY,
                visible: isBackwardVisible,
                headingText: "Volver a"
              }
            ];

            // Key Zone Hotspot (if more than 3 scenes)
            if (safeScenes.length >= 4) {
              const zoneIdx = (activeSceneIndex + 3) % safeScenes.length;
              const zoneSceneObj = safeScenes[zoneIdx];
              const zoneYaw = 180 + 130;
              const zonePitch = -10;
              const phiZ = THREE.MathUtils.degToRad(90 - zonePitch);
              const thetaZ = THREE.MathUtils.degToRad(zoneYaw);
              vec3.set(450 * Math.sin(phiZ) * Math.cos(thetaZ), 450 * Math.cos(phiZ), 450 * Math.sin(phiZ) * Math.sin(thetaZ));
              vec3.project(cameraRef.current);

              const isZoneInFront = vec3.z < 1;
              const zoneX = (vec3.x * 0.5 + 0.5) * cW;
              const zoneY = (-(vec3.y * 0.5) + 0.5) * cH;
              const isZoneVisible = isZoneInFront && zoneX >= 30 && zoneX <= cW - 30 && zoneY >= 40 && zoneY <= cH - 60;

              newHotspots.push({
                sceneIndex: zoneIdx,
                title: zoneSceneObj.title,
                roomName: zoneSceneObj.roomName || `Zona #${zoneIdx + 1}`,
                type: "zone",
                screenX: zoneX,
                screenY: zoneY,
                visible: isZoneVisible,
                headingText: "Explorar"
              });
            }

            setHotspots2D(newHotspots);
          }
        }
      };

      animate();

      // Resize Handler
      const handleResize = () => {
        if (!container || !cameraRef.current || !rendererRef.current) return;
        const newW = container.clientWidth || window.innerWidth || 360;
        const newH = container.clientHeight || 480;
        if (newW > 0 && newH > 0) {
          cameraRef.current.aspect = newW / newH;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newW, newH);
        }
      };

      window.addEventListener("resize", handleResize);

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => {
          handleResize();
        });
        resizeObserver.observe(container);
      }
    } catch (err) {
      console.warn("WebGL initialization failed, switching to 2D panorama:", err);
      setWebGLSupported(false);
      setIsLoading(false);
    }

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (renderer) {
        try {
          renderer.dispose();
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        } catch {}
      }
    };
  }, [safeScenes, activeSceneIndex]);

  // Update texture when active scene changes
  useEffect(() => {
    if (webGLSupported && activeScene?.equirectangularUrl) {
      loadTexture(activeScene.equirectangularUrl);
    }
  }, [activeScene?.equirectangularUrl, webGLSupported, loadTexture]);

  // Multi-touch tracking for pinch-to-zoom
  const activePointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const prevPinchDistRef = useRef<number | null>(null);

  // Pointer / Drag Controls for 3D
  const handlePointerDown = (e: React.PointerEvent) => {
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    activePointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointersRef.current.size === 1) {
      isUserInteractingRef.current = true;
      onPointerDownPointerXRef.current = e.clientX;
      onPointerDownPointerYRef.current = e.clientY;
      onPointerDownLonRef.current = lonRef.current;
      onPointerDownLatRef.current = latRef.current;
    } else if (activePointersRef.current.size === 2) {
      isUserInteractingRef.current = false;
      const pts = Array.from(activePointersRef.current.values());
      prevPinchDistRef.current = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!activePointersRef.current.has(e.pointerId)) return;
    activePointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Dual-touch Pinch to Zoom
    if (activePointersRef.current.size === 2) {
      const pts = Array.from(activePointersRef.current.values());
      const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (prevPinchDistRef.current !== null && cameraRef.current) {
        const delta = (currentDist - prevPinchDistRef.current) * 0.15;
        const fov = cameraRef.current.fov - delta;
        cameraRef.current.fov = THREE.MathUtils.clamp(fov, 35, 95);
        cameraRef.current.updateProjectionMatrix();
      }
      prevPinchDistRef.current = currentDist;
      return;
    }

    // Single-touch / Mouse drag rotation
    if (!isUserInteractingRef.current) return;
    const factor = 0.15 * (cameraRef.current ? cameraRef.current.fov / 75 : 1);
    lonRef.current = (onPointerDownPointerXRef.current - e.clientX) * factor + onPointerDownLonRef.current;
    latRef.current = (e.clientY - onPointerDownPointerYRef.current) * factor + onPointerDownLatRef.current;
  };

  const handlePointerUp = (e?: React.PointerEvent) => {
    if (e) {
      activePointersRef.current.delete(e.pointerId);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    } else {
      activePointersRef.current.clear();
    }
    if (activePointersRef.current.size < 2) {
      prevPinchDistRef.current = null;
    }
    if (activePointersRef.current.size === 1) {
      const remaining = Array.from(activePointersRef.current.values())[0];
      isUserInteractingRef.current = true;
      onPointerDownPointerXRef.current = remaining.x;
      onPointerDownPointerYRef.current = remaining.y;
      onPointerDownLonRef.current = lonRef.current;
      onPointerDownLatRef.current = latRef.current;
    } else {
      isUserInteractingRef.current = false;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!cameraRef.current) return;
    const fov = cameraRef.current.fov + e.deltaY * 0.05;
    cameraRef.current.fov = THREE.MathUtils.clamp(fov, 35, 95);
    cameraRef.current.updateProjectionMatrix();
  };

  const handleZoom = (direction: "in" | "out") => {
    if (webGLSupported && cameraRef.current) {
      const delta = direction === "in" ? -10 : 10;
      cameraRef.current.fov = THREE.MathUtils.clamp(cameraRef.current.fov + delta, 35, 95);
      cameraRef.current.updateProjectionMatrix();
    } else {
      setZoom2D((z) => (direction === "in" ? Math.min(z + 0.25, 2.5) : Math.max(z - 0.25, 1)));
    }
  };

  const handleResetView = () => {
    lonRef.current = 180;
    latRef.current = 0;
    if (cameraRef.current) {
      cameraRef.current.fov = 75;
      cameraRef.current.updateProjectionMatrix();
    }
    setPanX(50);
    setZoom2D(1);
  };

  // 2D Pan handlers for non-WebGL fallback
  const handle2DPointerDown = (e: React.PointerEvent) => {
    isDragging2D.current = true;
    startX2D.current = e.clientX;
    startPanX2D.current = panX;
  };

  const handle2DPointerMove = (e: React.PointerEvent) => {
    if (!isDragging2D.current) return;
    const dx = e.clientX - startX2D.current;
    const deltaPercent = (dx / (mountRef.current?.clientWidth || 600)) * 50;
    setPanX(Math.max(0, Math.min(100, startPanX2D.current - deltaPercent)));
  };

  const handle2DPointerUp = () => {
    isDragging2D.current = false;
  };

  const handlePrevScene = () => {
    handleTeleportToScene(activeSceneIndex > 0 ? activeSceneIndex - 1 : safeScenes.length - 1);
  };

  const handleNextScene = () => {
    handleTeleportToScene(activeSceneIndex < safeScenes.length - 1 ? activeSceneIndex + 1 : 0);
  };

  // Cardinal direction helper
  const getCardinalDirection = (deg: number) => {
    const d = deg % 360;
    if (d >= 337.5 || d < 22.5) return "Norte 0°";
    if (d >= 22.5 && d < 67.5) return "Noreste 45°";
    if (d >= 67.5 && d < 112.5) return "Este 90°";
    if (d >= 112.5 && d < 157.5) return "Sureste 135°";
    if (d >= 157.5 && d < 202.5) return "Sur 180°";
    if (d >= 202.5 && d < 247.5) return "Suroeste 225°";
    if (d >= 247.5 && d < 292.5) return "Oeste 270°";
    return "Noroeste 315°";
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden border border-arena-calida/30 bg-surface-container-low shadow-ethereal select-none font-sans ${
        isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none" : "h-[480px] sm:h-[580px] md:h-[660px]"
      }`}
    >
      {/* 3D WebGL Canvas Viewport */}
      {webGLSupported ? (
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onWheel={handleWheel}
        />
      ) : (
        /* 2D PANORAMIC FALLBACK VIEW */
        <div
          ref={mountRef}
          onPointerDown={handle2DPointerDown}
          onPointerMove={handle2DPointerMove}
          onPointerUp={handle2DPointerUp}
          onPointerLeave={handle2DPointerUp}
          className="w-full h-full relative overflow-hidden bg-black cursor-grab active:cursor-grabbing"
        >
          <img
            src={activeScene?.equirectangularUrl || activeScene?.thumbnailUrl}
            alt={activeScene?.title || "Vista 360°"}
            style={{
              objectPosition: `${panX}% center`,
              transform: `scale(${zoom2D})`,
            }}
            className="w-full h-full object-cover transition-transform duration-100"
            draggable={false}
          />
        </div>
      )}

      {/* 3D INTERACTIVE TELEPORT HOTSPOTS OVERLAY */}
      {webGLSupported && !isLoading && (
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {hotspots2D.map((hp) => {
            if (!hp.visible) return null;
            return (
              <button
                key={`${hp.type}-${hp.sceneIndex}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTeleportToScene(hp.sceneIndex);
                }}
                style={{
                  transform: `translate(${hp.screenX}px, ${hp.screenY}px) translate(-50%, -50%)`,
                }}
                className="absolute pointer-events-auto group cursor-pointer flex flex-col items-center transition-transform hover:scale-110 active:scale-95 focus:outline-none"
                title={`${hp.headingText}: ${hp.title}`}
              >
                {/* Pulsing Hotspot Radar Core */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-10 h-10 rounded-full bg-teal-uno/40 animate-ping pointer-events-none" />
                  <span className="absolute w-7 h-7 rounded-full bg-arena-calida/60 animate-pulse pointer-events-none" />
                  <div className="w-9 h-9 rounded-full bg-teal-uno hover:bg-arena-calida text-white flex items-center justify-center shadow-2xl border-2 border-white transition-colors duration-200">
                    {hp.type === "forward" ? (
                      <Footprints className="w-4 h-4 text-white" />
                    ) : hp.type === "backward" ? (
                      <RotateCcw className="w-4 h-4 text-white" />
                    ) : (
                      <Navigation className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>

                {/* Hotspot Floating Tooltip Tag */}
                <div className="mt-1.5 px-3 py-1 bg-stone-950/85 backdrop-blur-md rounded-full border border-white/20 text-white shadow-xl flex items-center gap-1.5 whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-teal-uno transition-all">
                  <span className="text-[9px] font-label-caps uppercase text-arena-calida group-hover:text-white font-bold">
                    {hp.headingText}
                  </span>
                  <span className="text-[10px] font-sans font-semibold">
                    {hp.roomName}
                  </span>
                  <ChevronRight className="w-3 h-3 text-white/70" />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* TRANSITION OVERLAY (SMOOTH TELEPORT RUSH) */}
      {isTransitioning && (
        <div className="absolute inset-0 z-25 bg-black/40 backdrop-blur-xs pointer-events-none transition-opacity duration-200 animate-fadeIn" />
      )}

      {/* LOADING SPINNER OVERLAY */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/75 backdrop-blur-xs pointer-events-none">
          <div className="w-12 h-12 border-3 border-teal-uno border-t-transparent rounded-full animate-spin mb-3 shadow-lg" />
          <span className="text-xs font-label-caps uppercase tracking-wider text-teal-uno font-bold">
            Cargando Tour Virtual 360° Inmersivo...
          </span>
          <span className="text-[10px] text-gris-texto/80 mt-1 font-mono">
            {dateTitle} • {activeScene?.roomName || activeScene?.title}
          </span>
        </div>
      )}

      {/* TOP OVERLAY BAR (HUD) */}
      <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
        {/* Left: Active Scene & Zone Switcher Trigger */}
        <div className="bg-background/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-arena-calida/40 shadow-xl pointer-events-auto flex items-center gap-2.5 sm:gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-uno animate-pulse flex-shrink-0" />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[9px] sm:text-[10px] font-label-caps uppercase text-arena-calida font-bold tracking-wider truncate">
                {dateTitle}
              </span>
              <button
                type="button"
                onClick={() => setShowRoomDrawer(!showRoomDrawer)}
                className="text-[8px] sm:text-[9px] font-mono px-2 py-0.5 bg-teal-uno/15 text-teal-uno hover:bg-teal-uno hover:text-white rounded-full border border-teal-uno/30 font-bold flex-shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                title="Ver lista de zonas de la residencia"
              >
                <span>Punto {activeSceneIndex + 1}/{safeScenes.length}</span>
                <Layers className="w-2.5 h-2.5" />
              </button>
            </div>
            <h4 className="font-headline-md text-xs sm:text-sm font-bold text-teal-uno uppercase truncate max-w-[130px] xs:max-w-[190px] sm:max-w-xs md:max-w-md">
              {activeScene?.roomName ? `${activeScene.roomName} • ${activeScene.title}` : activeScene?.title}
            </h4>
          </div>
        </div>

        {/* Right: Quick Controls Toolbar */}
        <div className="flex items-center gap-1 sm:gap-1.5 bg-background/95 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-arena-calida/40 shadow-xl pointer-events-auto flex-shrink-0">
          {/* 1. Guided Tour Play */}
          <button
            onClick={handleToggleGuidedTour}
            className={`p-1.5 sm:p-2 rounded-full text-xs transition-colors cursor-pointer flex items-center gap-1 font-label-caps uppercase font-bold ${
              isGuidedTour
                ? "bg-teal-uno text-white shadow-xs"
                : "text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20"
            }`}
            title={isGuidedTour ? "Detener Tour Guiado" : "Iniciar Tour Virtual Guiado Automático"}
          >
            {isGuidedTour ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden md:inline text-[10px] pr-1">Auto Tour</span>
          </button>

          {/* 2. Mobile Gyroscope VR Sensor */}
          <button
            onClick={handleToggleGyro}
            className={`p-1.5 sm:p-2 rounded-full text-xs transition-colors cursor-pointer ${
              isGyroActive
                ? "bg-arena-calida text-white shadow-xs"
                : "text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20"
            }`}
            title={isGyroActive ? "Desactivar sensor de movimiento" : "Activar sensor de movimiento / Giroscopio 360°"}
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>

          {/* 3. Zoom Controls */}
          <button
            onClick={() => handleZoom("in")}
            className="p-1.5 sm:p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer hidden xs:inline-flex"
            title="Acercar (Zoom In)"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => handleZoom("out")}
            className="p-1.5 sm:p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer hidden xs:inline-flex"
            title="Alejar (Zoom Out)"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          {/* 4. Compass / Reset Heading */}
          <button
            onClick={handleResetView}
            className="p-1.5 sm:p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer text-[10px] font-label-caps uppercase flex items-center gap-1"
            title={`Orientación: ${getCardinalDirection(currentHeading)} (Clic para centrar)`}
          >
            <Compass 
              className="w-3.5 h-3.5 text-arena-calida transition-transform duration-100" 
              style={{ transform: `rotate(${-currentHeading}deg)` }}
            />
          </button>

          {/* 5. Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 sm:p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* ARCHITECTURAL ROOMS DRAWER (POPUP LIST OF ALL 19 SPOTS) */}
      {showRoomDrawer && (
        <div className="absolute top-18 left-3 sm:left-4 z-30 w-72 sm:w-80 max-h-[60vh] bg-white/95 backdrop-blur-xl border border-arena-calida/40 rounded-3xl shadow-2xl p-3 flex flex-col overflow-hidden animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-arena-calida/20 px-2">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida font-bold tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-teal-uno" />
              Zonas de la Residencia ({safeScenes.length})
            </span>
            <button
              onClick={() => setShowRoomDrawer(false)}
              className="text-xs text-gris-texto hover:text-teal-uno font-bold px-1.5 py-0.5"
            >
              ✕
            </button>
          </div>

          <div className="overflow-y-auto space-y-1 pt-2 pr-1 scrollbar-thin scrollbar-thumb-arena-calida/40">
            {safeScenes.map((sc, idx) => {
              const isCurr = idx === activeSceneIndex;
              return (
                <button
                  key={`drawer-${sc.id}`}
                  onClick={() => {
                    handleTeleportToScene(idx);
                    setShowRoomDrawer(false);
                  }}
                  className={`w-full p-2.5 rounded-2xl text-left text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                    isCurr
                      ? "bg-teal-uno text-white font-bold shadow-xs"
                      : "text-gris-texto hover:bg-teal-uno/10 hover:text-teal-uno"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[9px] flex-shrink-0 font-bold ${
                      isCurr ? "bg-white text-teal-uno" : "bg-arena-calida/20 text-arena-calida"
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="truncate">{sc.roomName || sc.title}</span>
                  </div>
                  {isCurr && <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* BOTTOM SCENE SELECTOR CAROUSEL STRIP */}
      {safeScenes.length > 1 && (
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 flex flex-col gap-2 pointer-events-none">
          {/* Collapse/Expand scenes button & Quick Step Arrows */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowSceneList(!showSceneList)}
              className="bg-background/95 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-arena-calida/40 text-[11px] font-label-caps uppercase text-arena-calida hover:text-teal-uno transition-colors cursor-pointer pointer-events-auto flex items-center gap-2 shadow-lg font-bold"
            >
              <Layers className="w-3.5 h-3.5 text-teal-uno" />
              <span>{showSceneList ? "Ocultar Puntos 360°" : `Explorar ${safeScenes.length} Puntos 360°`}</span>
            </button>

            {/* Prev / Next Scene Arrows */}
            <div className="flex items-center gap-1.5 pointer-events-auto">
              <button
                onClick={handlePrevScene}
                className="p-2 bg-background/95 hover:bg-teal-uno text-gris-texto hover:text-white rounded-full border border-arena-calida/40 cursor-pointer transition-colors shadow-lg"
                title="Punto 360° anterior"
                aria-label="Punto 360 anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextScene}
                className="p-2 bg-background/95 hover:bg-teal-uno text-gris-texto hover:text-white rounded-full border border-arena-calida/40 cursor-pointer transition-colors shadow-lg"
                title="Punto 360° siguiente"
                aria-label="Punto 360 siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Thumbnails Bar */}
          {showSceneList && (
            <div className="bg-background/95 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border border-arena-calida/40 flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar shadow-2xl pointer-events-auto touch-pan-x">
              {safeScenes.map((scene, idx) => {
                const isActive = idx === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    onClick={() => handleTeleportToScene(idx)}
                    className={`flex-shrink-0 group relative rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      isActive
                        ? "border-teal-uno ring-2 ring-teal-uno/70 scale-105 shadow-md"
                        : "border-arena-calida/30 hover:border-teal-uno/60 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="w-20 h-13 sm:w-24 sm:h-16 relative bg-surface-container-low">
                      {scene.thumbnailUrl || scene.equirectangularUrl ? (
                        <img
                          src={scene.thumbnailUrl || scene.equirectangularUrl}
                          alt={scene.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-teal-uno font-mono font-bold">
                          360°
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-1 left-1.5 text-[8px] sm:text-[9px] font-mono font-bold text-white leading-none drop-shadow-md">
                        #{idx + 1} {scene.roomName?.split(" ")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
