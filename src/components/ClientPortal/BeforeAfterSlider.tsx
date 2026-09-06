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

  if (!activeItem) return null;

  return (
    <div className="bg-white/80 backdrop-blur-md border border-arena-calida/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-ethereal texture-overlay font-sans">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-arena-calida/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
            <SplitSquareVertical className="w-4 h-4 text-teal-uno" />
            <span>Comparativa de Evolución Constructiva</span>
          </div>
          <h3 className="font-headline-md text-xl sm:text-2xl text-teal-uno uppercase font-semibold mt-1">
            {activeItem.title}
          </h3>
        </div>

        {/* COMPARISON ITEM SELECTOR PILLS */}
        {items.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => {
                  setActiveItemId(it.id);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                  it.id === activeItemId
                    ? "bg-teal-uno text-white font-bold shadow-xs"
                    : "bg-surface-container-low text-gris-texto hover:bg-white border border-arena-calida/30"
                }`}
              >
                {it.location}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SLIDER CONTAINER */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-arena-calida/30 shadow-lg"
      >
        {/* AFTER IMAGE (UNDERNEATH) */}
        <img
          src={activeItem.afterImage}
          alt={activeItem.afterDate}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE IMAGE (CLIPPED ON TOP) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={activeItem.beforeImage}
            alt={activeItem.beforeDate}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current?.clientWidth || "100%" }}
          />
        </div>

        {/* DRAG HANDLE DIVIDER */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-teal-uno text-white flex items-center justify-center shadow-xl border-2 border-white">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>

        {/* FLOATING DATE BADGES */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-white text-[10px] font-label-caps uppercase tracking-wider font-semibold border border-white/20">
          Antes: {activeItem.beforeDate}
        </div>
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-white text-[10px] font-label-caps uppercase tracking-wider font-semibold border border-white/20">
          Avance: {activeItem.afterDate}
        </div>
      </div>

      {/* TECHNICAL DESCRIPTION */}
      <p className="text-xs sm:text-sm text-gris-texto font-body-md leading-relaxed border-t border-arena-calida/20 pt-4">
        {activeItem.description}
      </p>
    </div>
  );
}
