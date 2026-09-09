import { useState, useEffect, lazy, Suspense } from "react";
import { 
  Calendar, 
  Layers,
  FolderOpen,
  Compass
} from "lucide-react";
import { Tour360Folder } from "../../types/clientPortal";

const Interactive360Canvas = lazy(() => import("./Interactive360Canvas"));

interface CloudPanoViewerProps {
  tours: Tour360Folder[];
  selectedTourId?: string;
  hideTourSelector?: boolean;
  onSelectTourId?: (tourId: string) => void;
  onUpdateTour?: (tourId: string, updated: Partial<Tour360Folder>) => void;
  onAddTour?: (newTour: Tour360Folder) => void;
}

export default function CloudPanoViewer({
  tours = [],
  selectedTourId: externalSelectedTourId,
  hideTourSelector = false,
  onSelectTourId,
}: CloudPanoViewerProps) {
  const safeTours = Array.isArray(tours) && tours.length > 0 ? tours : [];
  const [selectedTourId, setSelectedTourId] = useState<string>(
    externalSelectedTourId || safeTours[0]?.id || ""
  );

  useEffect(() => {
    if (externalSelectedTourId) {
      setSelectedTourId(externalSelectedTourId);
    }
  }, [externalSelectedTourId]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeTour = safeTours.find((t) => t.id === selectedTourId) || safeTours[0];

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div className="space-y-6 font-sans text-left">
      {/* FOLDER SELECTION BY DATE (IF SHOWN) */}
      {!hideTourSelector && safeTours.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-arena-calida font-semibold">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-uno" />
              Levantamientos 360° por Fecha ({safeTours.length} Registros)
            </span>
            <span className="text-[11px] text-teal-uno font-sans font-medium">Fidelidad 100% Levantamiento de Obra</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safeTours.map((tour) => {
              const isSelected = tour.id === selectedTourId;
              const sceneCount = tour.scenes?.length || 0;
              return (
                <button
                  key={tour.id}
                  onClick={() => {
                    setSelectedTourId(tour.id);
                    if (onSelectTourId) onSelectTourId(tour.id);
                  }}
                  className={`p-5 rounded-3xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-white/95 border-teal-uno shadow-ethereal ring-2 ring-teal-uno/40"
                      : "bg-white/70 border-arena-calida/30 hover:border-teal-uno/60 hover:shadow-ethereal"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-uno via-arena-calida to-teal-uno" />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-label-caps text-xs uppercase tracking-wider font-bold text-teal-uno">
                      {tour.date}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-arena-calida/15 text-arena-calida border border-arena-calida/30 font-bold">
                      {sceneCount} Puntos 360°
                    </span>
                  </div>

                  <h4 className="font-headline-md text-sm font-semibold text-teal-uno line-clamp-1 group-hover:text-arena-calida transition-colors uppercase">
                    {tour.title}
                  </h4>

                  <div className="flex items-center gap-1.5 text-[11px] text-gris-texto/70 mt-2.5 font-label-caps uppercase font-medium">
                    <Layers className="w-3.5 h-3.5 text-teal-uno" />
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
        <div className="bg-white/80 backdrop-blur-md border border-arena-calida/30 p-5 rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs shadow-ethereal">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-arena-calida/15 text-arena-calida font-label-caps uppercase text-[10px] tracking-wider border border-arena-calida/30 font-bold">
                {activeTour.date}
              </span>
              <span className="font-headline-md text-sm sm:text-base text-teal-uno uppercase font-semibold">{activeTour.title}</span>
            </div>
            {activeTour.notes && (
              <p className="text-gris-texto text-xs leading-relaxed max-w-3xl font-body-md">
                <strong className="text-teal-uno font-semibold">Dictamen de Supervisión 360°:</strong> {activeTour.notes}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 self-start md:self-auto">
            {activeTour.folderUrl && (
              <a
                href={activeTour.folderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-white/90 hover:bg-teal-uno hover:text-white text-gris-texto border border-arena-calida/40 rounded-full text-xs font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-medium"
                title="Abrir carpeta oficial con archivos 360° en Google Drive"
              >
                <FolderOpen className="w-3.5 h-3.5 text-teal-uno" />
                <span>Carpeta en Drive</span>
              </a>
            )}
            <span className="text-xs font-label-caps uppercase font-semibold text-teal-uno bg-teal-uno/15 px-3.5 py-1.5 rounded-full border border-teal-uno/30">
              {activeTour.scenes?.length || 0} Puntos Esféricos HD
            </span>
          </div>
        </div>
      )}

      {/* 360 INTERACTIVE SPHERE VIEWER WITH LIGHTWEIGHT SUSPENSE FALLBACK */}
      {activeTour?.scenes && activeTour.scenes.length > 0 ? (
        <Suspense
          fallback={
            <div className="h-[480px] sm:h-[580px] md:h-[640px] rounded-3xl border border-arena-calida/30 bg-surface-container-low flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-ethereal">
              <div className="w-12 h-12 rounded-full bg-teal-uno/15 border border-teal-uno/30 flex items-center justify-center text-teal-uno animate-pulse">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-label-caps uppercase tracking-wider text-teal-uno font-bold block">
                  Iniciando Visor 360° Inmersivo
                </span>
                <p className="text-[11px] text-arena-calida font-mono">
                  {activeTour.date} • {activeTour.scenes.length} Puntos Esféricos HD
                </p>
              </div>
            </div>
          }
        >
          <Interactive360Canvas
            scenes={activeTour.scenes}
            dateTitle={activeTour.date}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
          />
        </Suspense>
      ) : (
        <div className="h-[450px] flex items-center justify-center bg-white/60 border border-arena-calida/30 rounded-3xl text-xs text-gris-texto font-medium shadow-ethereal">
          No hay escenas 360° cargadas para este levantamiento.
        </div>
      )}
    </div>
  );
}
