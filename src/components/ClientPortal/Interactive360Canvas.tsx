import React, { useEffect, useRef, useState } from "react";
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
  ChevronRight 
} from "lucide-react";
import { Scene360Item } from "../../types/clientPortal";

interface Interactive360CanvasProps {
  scenes: Scene360Item[];
  dateTitle: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function Interactive360Canvas({
  scenes,
  dateTitle,
  isFullscreen,
  onToggleFullscreen,
}: Interactive360CanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const autoRotateRef = useRef(false);
  const [showSceneList, setShowSceneList] = useState(true);

  // Toggle auto-rotation and sync ref immediately
  const handleToggleAutoRotate = () => {
    setAutoRotate((prev) => {
      const next = !prev;
      autoRotateRef.current = next;
      return next;
    });
  };

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereMeshRef = useRef<THREE.Mesh | null>(null);
  const textureLoaderRef = useRef<THREE.TextureLoader | null>(null);

  // Interaction coordinates
  const isUserInteractingRef = useRef(false);
  const onPointerDownPointerXRef = useRef(0);
  const onPointerDownPointerYRef = useRef(0);
  const onPointerDownLonRef = useRef(0);
  const onPointerDownLatRef = useRef(0);
  const lonRef = useRef(0);
  const latRef = useRef(0);
  const phiRef = useRef(0);
  const thetaRef = useRef(0);

  const activeScene = scenes[activeSceneIndex] || scenes[0];

  // Reset to first scene when date/scenes list changes
  useEffect(() => {
    setActiveSceneIndex(0);
    lonRef.current = 180;
    latRef.current = 0;
  }, [scenes]);

  // Reset angle when changing active scene
  useEffect(() => {
    lonRef.current = 180;
    latRef.current = 0;
  }, [activeSceneIndex]);

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    cameraRef.current = camera;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    // Invert geometry so faces point inward
    geometry.scale(-1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    sphereMeshRef.current = mesh;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    const loader = new THREE.TextureLoader();
    textureLoaderRef.current = loader;

    // Load initial scene texture immediately once mesh is created
    if (activeScene?.equirectangularUrl) {
      setIsLoading(true);
      loader.load(
        activeScene.equirectangularUrl,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.generateMipmaps = false;

          const mat = mesh.material as THREE.MeshBasicMaterial;
          if (mat.map) mat.map.dispose();
          mat.color.setHex(0xffffff);
          mat.map = texture;
          mat.needsUpdate = true;
          setIsLoading(false);
        },
        undefined,
        () => {
          setIsLoading(false);
        }
      );
    }

    // Clear previous children
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    let animationFrameId: number;

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

      if (cameraRef.current) {
        cameraRef.current.lookAt(targetX, targetY, targetZ);
        renderer.render(scene, cameraRef.current);
      }
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight;
      cameraRef.current.aspect = newW / newH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // Load active scene texture into sphere when activeScene changes
  useEffect(() => {
    if (!activeScene?.equirectangularUrl || !sphereMeshRef.current) return;

    setIsLoading(true);

    const loader = textureLoaderRef.current || new THREE.TextureLoader();
    textureLoaderRef.current = loader;

    let isMounted = true;
    const safetyTimer = setTimeout(() => {
      if (isMounted) setIsLoading(false);
    }, 1500);

    loader.load(
      activeScene.equirectangularUrl,
      (texture) => {
        if (!isMounted) return;
        clearTimeout(safetyTimer);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        if (sphereMeshRef.current) {
          const mat = sphereMeshRef.current.material as THREE.MeshBasicMaterial;
          if (mat.map) mat.map.dispose();
          mat.color.setHex(0xffffff);
          mat.map = texture;
          mat.needsUpdate = true;
        }
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading 360 equirectangular texture:", error);
        if (isMounted) {
          clearTimeout(safetyTimer);
          setIsLoading(false);
        }
      }
    );

    return () => {
      isMounted = false;
      clearTimeout(safetyTimer);
    };
  }, [activeScene?.equirectangularUrl]);

  // Pointer / Drag Controls
  const handlePointerDown = (e: React.PointerEvent) => {
    isUserInteractingRef.current = true;
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

  const handlePointerUp = () => {
    isUserInteractingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!cameraRef.current) return;
    const fov = cameraRef.current.fov + e.deltaY * 0.05;
    cameraRef.current.fov = THREE.MathUtils.clamp(fov, 35, 95);
    cameraRef.current.updateProjectionMatrix();
  };

  const handleZoom = (direction: "in" | "out") => {
    if (!cameraRef.current) return;
    const delta = direction === "in" ? -10 : 10;
    cameraRef.current.fov = THREE.MathUtils.clamp(cameraRef.current.fov + delta, 35, 95);
    cameraRef.current.updateProjectionMatrix();
  };

  const handleResetView = () => {
    lonRef.current = 180;
    latRef.current = 0;
    if (cameraRef.current) {
      cameraRef.current.fov = 75;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  const handlePrevScene = () => {
    setActiveSceneIndex((prev) => (prev > 0 ? prev - 1 : scenes.length - 1));
  };

  const handleNextScene = () => {
    setActiveSceneIndex((prev) => (prev < scenes.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border border-arena-calida/30 bg-surface-container-low shadow-ethereal select-none font-sans ${
        isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none" : "h-[480px] sm:h-[580px] md:h-[640px]"
      }`}
    >
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
      />

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
                Punto {activeSceneIndex + 1} de {scenes.length}
              </span>
            </div>
            <h4 className="font-headline-md text-xs sm:text-sm font-semibold text-teal-uno uppercase truncate max-w-xs sm:max-w-sm">
              {activeScene?.title || `Escena 360° ${activeSceneIndex + 1}`}
            </h4>
          </div>
        </div>

        {/* Right: Quick Controls Toolbar */}
        <div className="flex items-center gap-1.5 bg-background/90 backdrop-blur-md p-1.5 rounded-full border border-arena-calida/30 shadow-lg pointer-events-auto">
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
            <Compass className="w-3.5 h-3.5 text-arena-calida" />
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
      {scenes.length > 1 && (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-2">
          {/* Collapse/Expand scenes button */}
          <div className="flex items-center justify-between pointer-events-none">
            <button
              onClick={() => setShowSceneList(!showSceneList)}
              className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-arena-calida/30 text-xs font-label-caps uppercase text-arena-calida hover:text-teal-uno transition-colors cursor-pointer pointer-events-auto flex items-center gap-2 shadow-md font-semibold"
            >
              <Layers className="w-3.5 h-3.5 text-teal-uno" />
              <span>{showSceneList ? "Ocultar Puntos 360°" : `Ver ${scenes.length} Puntos 360°`}</span>
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
              {scenes.map((scene, idx) => {
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
