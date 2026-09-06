import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  SplitSquareVertical, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Layers, 
  ArrowLeftRight,
  Info
} from "lucide-react";
import { BeforeAfterItem } from "../../types/clientPortal";

interface BeforeAfterSliderProps {
  items: BeforeAfterItem[];
  propertyName: string;
}

export default function BeforeAfterSlider({
  items,
  propertyName,
}: BeforeAfterSliderProps) {
  const [activeItemId, setActiveItemId] = useState<string>(items[0]?.id || "");
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = items.find((i) => i.id === activeItemId) || items[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging]);

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-6 font-sans text-left">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#c2a275]/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]">
            <SplitSquareVertical className="w-4 h-4 text-teal-uno" />
            <span>Transformación Constructiva</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1 tracking-tight">
            Evolución: Antes vs. Estado Actual
          </h3>
          <p className="text-xs sm:text-sm text-[#e4ded5]/70 max-w-2xl mt-1 leading-relaxed">
            Compara visualmente la evolución de <strong className="text-white font-medium">{propertyName}</strong> desde la etapa estructural en obra negra hasta los acabados sensoriales terminados.
          </p>
        </div>

        {/* SCENE SELECTOR TABS */}
        <div className="flex flex-wrap items-center gap-2">
          {items.map((item) => {
            const isSelected = item.id === activeItemId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemId(item.id);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-2 rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-teal-uno text-white shadow-md"
                    : "bg-[#141418] text-[#e4ded5]/70 border border-[#c2a275]/20 hover:bg-[#1f1f28] hover:text-white"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* METADATA STRIP */}
      {activeItem && (
        <div className="bg-[#141418] border border-[#c2a275]/20 p-4 rounded-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-teal-uno font-label-caps uppercase text-[10px] tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {activeItem.zone}
              </span>
              <span className="text-white font-serif sm:text-sm font-medium">
                {activeItem.title}
              </span>
            </div>
            <p className="text-[#e4ded5]/75 text-xs leading-relaxed max-w-3xl">
              {activeItem.description}
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-label-caps uppercase tracking-wider flex-shrink-0">
            <span className="text-zinc-400">
              <strong className="text-amber-300 font-medium">Antes:</strong> {activeItem.beforeDate}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400">
              <strong className="text-white font-medium">Actual:</strong> {activeItem.afterDate}
            </span>
          </div>
        </div>
      )}

      {/* INTERACTIVE COMPARISON SLIDER */}
      {activeItem && (
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-xs overflow-hidden border border-[#c2a275]/30 bg-black select-none shadow-2xl cursor-ew-resize group"
        >
          {/* AFTER IMAGE (FULL WIDTH BACKGROUND) */}
          <img
            src={activeItem.afterImage}
            alt={`Estado Actual - ${activeItem.title}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE IMAGE (CLIPPED ON TOP) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={activeItem.beforeImage}
              alt={`Antes - ${activeItem.title}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                maxWidth: "none",
              }}
            />
          </div>

          {/* SLIDER DIVIDER LINE & DRAG HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-teal-uno via-[#c2a275] to-teal-uno z-20 pointer-events-none shadow-[0_0_15px_rgba(194,162,117,0.8)]"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            {/* Center Circular Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#141418] border-2 border-[#c2a275] text-[#c2a275] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <ArrowLeftRight className="w-4 h-4 text-teal-uno" />
            </div>
          </div>

          {/* FLOATING LABELS */}
          <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/10 text-white text-[10px] font-label-caps uppercase tracking-wider pointer-events-none">
            <span className="text-amber-300 font-bold mr-1">Antes:</span>
            <span>{activeItem.beforeDate}</span>
          </div>

          <div className="absolute top-4 right-4 z-10 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xs border border-teal-uno/40 text-white text-[10px] font-label-caps uppercase tracking-wider pointer-events-none">
            <span className="text-teal-uno font-bold mr-1">Estado Actual:</span>
            <span>{activeItem.afterDate}</span>
          </div>

          {/* BOTTOM INSTRUCTION */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/75 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-white/80 text-[10px] font-label-caps uppercase tracking-wider pointer-events-none flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <ArrowLeftRight className="w-3 h-3 text-[#c2a275]" />
            <span>Desliza para comparar evolución</span>
          </div>
        </div>
      )}
    </div>
  );
}

