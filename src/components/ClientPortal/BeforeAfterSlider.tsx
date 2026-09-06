import React, { useState, useRef, useEffect } from "react";
import { 
  SplitSquareVertical, 
  ArrowLeftRight
} from "lucide-react";
import { BeforeAfterItem } from "../../types/clientPortal";

interface BeforeAfterSliderProps {
  items: BeforeAfterItem[];
  propertyName?: string;
}

export default function BeforeAfterSlider({
  items,
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
                {it.zone}
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
          alt={`Estado Actual - ${activeItem.title}`}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-teal-uno/90 backdrop-blur-md text-white text-xs font-label-caps font-bold px-3 py-1.5 rounded-full shadow-md z-10 border border-white/20">
          Avance Reciente: {activeItem.afterDate}
        </div>

        {/* BEFORE IMAGE (CLIPPED ON TOP) */}
        <div
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={activeItem.beforeImage}
            alt={`Estado Previo - ${activeItem.title}`}
            className="absolute inset-0 w-full h-full object-cover max-w-none select-none pointer-events-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}
          />
          <div className="absolute top-4 left-4 bg-terracota-uno/90 backdrop-blur-md text-white text-xs font-label-caps font-bold px-3 py-1.5 rounded-full shadow-md z-10 border border-white/20">
            Fase Previa: {activeItem.beforeDate}
          </div>
        </div>

        {/* DIVIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center -ml-0.5 z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-teal-uno text-white shadow-xl flex items-center justify-center border-2 border-white">
            <ArrowLeftRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>

      {/* DESCRIPTION FOOTER */}
      <div className="bg-surface-container-lowest border border-arena-calida/20 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
        <p className="text-gris-texto leading-relaxed">
          <span className="font-semibold text-teal-uno">Zona: {activeItem.zone} — </span>
          {activeItem.description}
        </p>
        <span className="text-xs text-arena-calida font-label-caps uppercase tracking-wider whitespace-nowrap bg-white px-3 py-1.5 rounded-full border border-arena-calida/30 shadow-xs self-start sm:self-auto">
          Arrastra para comparar
        </span>
      </div>
    </div>
  );
}
