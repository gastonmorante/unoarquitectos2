import React, { useState, useEffect } from "react";
import { 
  Compass, 
  Calendar, 
  Layers
} from "lucide-react";
import { Tour360Folder } from "../../types/clientPortal";
import Interactive360Canvas from "./Interactive360Canvas";

interface CloudPanoViewerProps {
  tours: Tour360Folder[];
  propertyName: string;
  selectedTourId?: string;
  hideTourSelector?: boolean;
  onSelectTourId?: (tourId: string) => void;
  onUpdateTour?: (tourId: string, updated: Partial<Tour360Folder>) => void;
  onAddTour?: (newTour: Tour360Folder) => void;
}

export default function CloudPanoViewer({
  tours,
  propertyName,
  selectedTourId: externalSelectedTourId,
  hideTourSelector = false,
  onSelectTourId,
}: CloudPanoViewerProps) {
  const [selectedTourId, setSelectedTourId] = useState<string>(
    externalSelectedTourId || tours[0]?.id || ""
  );

  useEffect(() => {
    if (externalSelectedTourId) {
      setSelectedTourId(externalSelectedTourId);
    }
  }, [externalSelectedTourId]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeTour = tours.find((t) => t.id === selectedTourId) || tours[0];

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div className="space-y-6 font-sans text-left">
      {/* FOLDER SELECTION BY DATE */}
      {!hideTourSelector && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-[#e4ded5]/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c2a275]" />
              Levantamientos 360° por Fecha ({tours.length} Registros)
            </span>
            <span className="text-[11px] text-teal-uno">Fidelidad 100% Levantamiento de Obra</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tours.map((tour) => {
              const isSelected = tour.id === selectedTourId;
              const sceneCount = tour.scenes?.length || 0;
              return (
                <button
                  key={tour.id}
                  onClick={() => {
                    setSelectedTourId(tour.id);
                    if (onSelectTourId) onSelectTourId(tour.id);
                  }}
                  className={`p-4 rounded-xs border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-[#1f1f28] border-[#c2a275] shadow-lg shadow-[#c2a275]/5"
                      : "bg-[#141418] border-[#c2a275]/15 hover:border-[#c2a275]/40 hover:bg-[#1a1a22]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-uno via-[#c2a275] to-teal-uno" />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-label-caps text-[11px] uppercase tracking-wider font-bold text-[#c2a275]">
                      {tour.date}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-teal-uno border border-teal-uno/30">
                      {sceneCount} Puntos 360°
                    </span>
                  </div>

                  <h4 className="text-xs font-medium text-white line-clamp-1 group-hover:text-[#c2a275] transition-colors">
                    {tour.title}
                  </h4>

                  <div className="flex items-center gap-1.5 text-[10px] text-[#e4ded5]/50 mt-2 font-label-caps uppercase">
                    <Layers className="w-3 h-3 text-teal-uno" />
                    <span className="truncate">{tour.phaseName}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ACTIVE TOUR METADATA BANNER */}
      {activeTour && (
        <div className="bg-[#141418] border border-[#c2a275]/20 p-4 rounded-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#c2a275]/15 text-[#c2a275] font-label-caps uppercase text-[10px] tracking-wider border border-[#c2a275]/30 font-bold">
                {activeTour.date}
              </span>
              <span className="text-white font-medium">{activeTour.title}</span>
            </div>
            {activeTour.notes && (
              <p className="text-[#e4ded5]/70 text-[11px] leading-relaxed max-w-3xl">
                <strong className="text-[#c2a275] font-normal">Dictamen de Supervisión 360°:</strong> {activeTour.notes}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 self-start md:self-auto">
            <span className="text-[10px] font-mono text-teal-uno bg-teal-uno/15 px-2.5 py-1 rounded-xs border border-teal-uno/30">
              {activeTour.scenes?.length || 0} Puntos Esféricos HD
            </span>
          </div>
        </div>
      )}

      {/* 360 INTERACTIVE SPHERE VIEWER */}
      {activeTour?.scenes && activeTour.scenes.length > 0 ? (
        <Interactive360Canvas
          scenes={activeTour.scenes}
          dateTitle={activeTour.date}
          phaseName={activeTour.phaseName}
          notes={activeTour.notes}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      ) : (
        <div className="h-[450px] flex items-center justify-center bg-[#101014] border border-white/10 rounded-xs text-xs text-zinc-400">
          No hay escenas 360° cargadas para este levantamiento.
        </div>
      )}
    </div>
  );
}
