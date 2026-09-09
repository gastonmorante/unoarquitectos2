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
  RotateCcw
} from "lucide-react";
import { Scene360Item } from "../../types/clientPortal";

interface Interactive360CanvasProps {
  scenes: Scene360Item[];
  dateTitle: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
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
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const autoRotateRef = useRef(false);
  const [showSceneList, setShowSceneList] = useState(true);
  const [webGLSupported, setWebGLSupported] = useState(true);

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
      roomName: "Vista General"
    }
  ];

  const activeScene = safeScenes[activeSceneIndex] || safeScenes[0];

  const handleToggleAutoRotate = () => {
    setAutoRotate((prev) => {
      const next = !prev;
      autoRotateRef.current = next;
      return next;
    });
  };

  // Reset angle when scenes or index changes
  useEffect(() => {
    lonRef.current = 180;
    latRef.current = 0;
  }, [scenes, activeSceneIndex]);

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

      // Animation Loop
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
  }, []);

  // Update texture when active scene changes
  useEffect(() => {
    if (webGLSupported && activeScene?.equirectangularUrl) {
      loadTexture(activeScene.equirectangularUrl);
    }
  }, [activeScene?.equirectangularUrl, webGLSupported, loadTexture]);

  // Pointer / Drag Controls for 3D
  const handlePointerDown = (e: React.PointerEvent) => {
    isUserInteractingRef.current = true;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    onPointerDownPointerXRef.current = e.clientX;
    onPointerDownPointerYRef.current = e.clientY;
    onPointerDownLonRef.current = lonRef.current;
    onPointerDownLatRef.current = latRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isUserInteractingRef.current) return;
    const factor = 0.15 * (cameraRef.current ? cameraRef.current.fov / 75 : 1);
    lonRef.current = (onPointerDownPointerXRef.current - e.clientX) * factor + onPointerDownLonRef.current;
    latRef.current = (e.clientY - onPointerDownPointerYRef.current) * factor + onPointerDownLatRef.current;
  };

  const handlePointerUp = (e?: React.PointerEvent) => {
    isUserInteractingRef.current = false;
    if (e) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
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
    setActiveSceneIndex((prev) => (prev > 0 ? prev - 1 : safeScenes.length - 1));
  };

  const handleNextScene = () => {
    setActiveSceneIndex((prev) => (prev < safeScenes.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border border-arena-calida/30 bg-surface-container-low shadow-ethereal select-none font-sans ${
        isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none" : "h-[480px] sm:h-[580px] md:h-[640px]"
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

      {/* LOADING SPINNER OVERLAY */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/70 backdrop-blur-xs pointer-events-none">
          <div className="w-10 h-10 border-2 border-teal-uno border-t-transparent rounded-full animate-spin mb-3" />
          <span className="text-xs font-label-caps uppercase tracking-wider text-teal-uno font-semibold">
            Cargando Escena Esférica 360° HD...
          </span>
          <span className="text-[10px] text-gris-texto/70 mt-1 font-mono">
            {dateTitle} • {activeScene?.title}
          </span>
        </div>
      )}

      {/* TOP OVERLAY BAR (HUD) */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-3 pointer-events-none">
        {/* Left: Active Scene & Date Info */}
        <div className="bg-background/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-arena-calida/30 shadow-lg pointer-events-auto flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-teal-uno animate-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-label-caps uppercase text-arena-calida font-bold tracking-wider">
                {dateTitle}
              </span>
              <span className="text-[9px] font-mono px-2 py-0.2 bg-teal-uno/15 text-teal-uno rounded-full border border-teal-uno/30 font-bold">
                Punto {activeSceneIndex + 1} de {safeScenes.length}
              </span>
            </div>
            <h4 className="font-headline-md text-xs sm:text-sm font-semibold text-teal-uno uppercase truncate max-w-xs sm:max-w-sm">
              {activeScene?.title || `Escena 360° ${activeSceneIndex + 1}`}
            </h4>
          </div>
        </div>

        {/* Right: Quick Controls Toolbar */}
        <div className="flex items-center gap-1.5 bg-background/90 backdrop-blur-md p-1.5 rounded-full border border-arena-calida/30 shadow-lg pointer-events-auto">
          {webGLSupported && (
            <button
              onClick={handleToggleAutoRotate}
              className={`p-2 rounded-full text-xs transition-colors cursor-pointer ${
                autoRotate
                  ? "bg-teal-uno text-white font-bold shadow-xs"
                  : "text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20"
              }`}
              title={autoRotate ? "Pausar autorrotación" : "Activar autorrotación 360°"}
            >
              {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          )}

          <button
            onClick={() => handleZoom("in")}
            className="p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer"
            title="Acercar (Zoom In)"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => handleZoom("out")}
            className="p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer"
            title="Alejar (Zoom Out)"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleResetView}
            className="p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer text-[10px] font-label-caps uppercase"
            title="Centrar vista"
          >
            {webGLSupported ? <Compass className="w-3.5 h-3.5 text-arena-calida" /> : <RotateCcw className="w-3.5 h-3.5 text-arena-calida" />}
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-full text-gris-texto hover:text-teal-uno hover:bg-arena-calida/20 transition-colors cursor-pointer"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* BOTTOM SCENE SELECTOR CAROUSEL STRIP */}
      {safeScenes.length > 1 && (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-2">
          {/* Collapse/Expand scenes button */}
          <div className="flex items-center justify-between pointer-events-none">
            <button
              onClick={() => setShowSceneList(!showSceneList)}
              className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-arena-calida/30 text-xs font-label-caps uppercase text-arena-calida hover:text-teal-uno transition-colors cursor-pointer pointer-events-auto flex items-center gap-2 shadow-md font-semibold"
            >
              <Layers className="w-3.5 h-3.5 text-teal-uno" />
              <span>{showSceneList ? "Ocultar Puntos 360°" : `Ver ${safeScenes.length} Puntos 360°`}</span>
            </button>

            {/* Prev / Next Scene Arrows */}
            <div className="flex items-center gap-1.5 pointer-events-auto">
              <button
                onClick={handlePrevScene}
                className="p-2 bg-background/90 hover:bg-teal-uno text-gris-texto hover:text-white rounded-full border border-arena-calida/30 cursor-pointer transition-colors shadow-md"
                title="Punto anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextScene}
                className="p-2 bg-background/90 hover:bg-teal-uno text-gris-texto hover:text-white rounded-full border border-arena-calida/30 cursor-pointer transition-colors shadow-md"
                title="Punto siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Thumbnails Bar */}
          {showSceneList && (
            <div className="bg-background/90 backdrop-blur-md p-2.5 rounded-2xl border border-arena-calida/30 flex items-center gap-2.5 overflow-x-auto no-scrollbar shadow-2xl">
              {safeScenes.map((scene, idx) => {
                const isActive = idx === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setActiveSceneIndex(idx)}
                    className={`flex-shrink-0 group relative rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      isActive
                        ? "border-teal-uno ring-2 ring-teal-uno/60 scale-105 shadow-md"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-white leading-none drop-shadow-md">
                        #{idx + 1}
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
