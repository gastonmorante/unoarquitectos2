import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Compass, 
  Layers, 
  Play, 
  Pause, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info
} from "lucide-react";
import { Scene360Item } from "../../types/clientPortal";

interface Interactive360CanvasProps {
  scenes: Scene360Item[];
  dateTitle: string;
  phaseName: string;
  notes?: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function Interactive360Canvas({
  scenes,
  dateTitle,
  phaseName,
  notes,
  isFullscreen,
  onToggleFullscreen,
}: Interactive360CanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const [showSceneList, setShowSceneList] = useState(true);

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
  const targetFovRef = useRef(75);

  const activeScene = scenes[activeSceneIndex] || scenes[0];

  // Reset to first scene when date/scenes list changes
  useEffect(() => {
    setActiveSceneIndex(0);
    lonRef.current = 0;
    latRef.current = 0;
  }, [scenes]);

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    camera.target = new THREE.Vector3(0, 0, 0);
    cameraRef.current = camera;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    // Invert geometry so faces point inward
    geometry.scale(-1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
      color: 0x111115,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    sphereMeshRef.current = mesh;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    const loader = new THREE.TextureLoader();
    textureLoaderRef.current = loader;

    // Clear previous children
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotate && !isUserInteractingRef.current) {
        lonRef.current += 0.08;
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

  // Load active scene texture into sphere
  useEffect(() => {
    if (!activeScene?.equirectangularUrl || !textureLoaderRef.current || !sphereMeshRef.current) return;

    setIsLoading(true);

    textureLoaderRef.current.load(
      activeScene.equirectangularUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        if (sphereMeshRef.current) {
          const mat = sphereMeshRef.current.material as THREE.MeshBasicMaterial;
          if (mat.map) mat.map.dispose();
          mat.map = texture;
          mat.needsUpdate = true;
        }
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading 360 equirectangular texture:", error);
        setIsLoading(false);
      }
    );
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
    targetFovRef.current = cameraRef.current.fov;
  };

  const handleZoom = (direction: "in" | "out") => {
    if (!cameraRef.current) return;
    const delta = direction === "in" ? -10 : 10;
    cameraRef.current.fov = THREE.MathUtils.clamp(cameraRef.current.fov + delta, 35, 95);
    cameraRef.current.updateProjectionMatrix();
  };

  const handleResetView = () => {
    lonRef.current = 0;
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
      className={`relative w-full rounded-xs overflow-hidden border border-[#c2a275]/30 bg-[#0a0a0c] shadow-2xl select-none font-sans ${
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
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs pointer-events-none">
          <div className="w-10 h-10 border-2 border-teal-uno border-t-transparent rounded-full animate-spin mb-3" />
          <span className="text-xs font-label-caps uppercase tracking-wider text-white">
            Cargando Escena Esférica 360° HD...
          </span>
          <span className="text-[10px] text-zinc-400 mt-1 font-mono">
            {dateTitle} • {activeScene?.title}
          </span>
        </div>
      )}

      {/* TOP OVERLAY BAR (HUD) */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-3 pointer-events-none">
        {/* Left: Active Scene & Date Info */}
        <div className="bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xs border border-[#c2a275]/30 shadow-lg pointer-events-auto flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-label-caps uppercase text-[#c2a275] font-bold tracking-wider">
                {dateTitle}
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-teal-uno/20 text-teal-uno rounded-full border border-teal-uno/30">
                Punto {activeSceneIndex + 1} de {scenes.length}
              </span>
            </div>
            <h4 className="text-xs font-semibold text-white truncate max-w-xs sm:max-w-sm">
              {activeScene?.title || `Escena 360° ${activeSceneIndex + 1}`}
            </h4>
          </div>
        </div>

        {/* Right: Quick Controls Toolbar */}
        <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-xs border border-[#c2a275]/30 shadow-lg pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-2 rounded-xs text-xs transition-colors cursor-pointer ${
              autoRotate
                ? "bg-teal-uno text-white font-bold"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
            }`}
            title={autoRotate ? "Pausar autorrotación" : "Activar autorrotación 360°"}
          >
            {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => handleZoom("in")}
            className="p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Acercar (Zoom In)"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => handleZoom("out")}
            className="p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Alejar (Zoom Out)"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleResetView}
            className="p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer text-[10px] font-label-caps uppercase"
            title="Centrar vista"
          >
            <Compass className="w-3.5 h-3.5 text-[#c2a275]" />
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
              className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xs border border-[#c2a275]/30 text-[10px] font-label-caps uppercase text-[#c2a275] hover:text-white transition-colors cursor-pointer pointer-events-auto flex items-center gap-1.5 shadow-md"
            >
              <Layers className="w-3 h-3 text-teal-uno" />
              <span>{showSceneList ? "Ocultar Puntos 360°" : `Ver ${scenes.length} Puntos 360°`}</span>
            </button>

            {/* Prev / Next Scene Arrows */}
            <div className="flex items-center gap-1 pointer-events-auto">
              <button
                onClick={handlePrevScene}
                className="p-2 bg-black/80 hover:bg-black text-white rounded-xs border border-[#c2a275]/30 cursor-pointer transition-colors"
                title="Punto anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextScene}
                className="p-2 bg-black/80 hover:bg-black text-white rounded-xs border border-[#c2a275]/30 cursor-pointer transition-colors"
                title="Punto siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Thumbnails Bar */}
          {showSceneList && (
            <div className="bg-black/85 backdrop-blur-md p-2 rounded-xs border border-[#c2a275]/30 flex items-center gap-2 overflow-x-auto no-scrollbar shadow-2xl">
              {scenes.map((scene, idx) => {
                const isActive = idx === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setActiveSceneIndex(idx)}
                    className={`flex-shrink-0 group relative rounded-xs overflow-hidden border transition-all cursor-pointer ${
                      isActive
                        ? "border-[#c2a275] ring-2 ring-teal-uno/60 scale-102"
                        : "border-white/10 hover:border-[#c2a275]/50 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="w-20 h-13 sm:w-24 sm:h-16 relative bg-zinc-900">
                      {scene.thumbnailUrl ? (
                        <img
                          src={scene.thumbnailUrl}
                          alt={scene.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                          360°
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-1 left-1.5 text-[9px] font-mono font-bold text-white leading-none drop-shadow-md">
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
