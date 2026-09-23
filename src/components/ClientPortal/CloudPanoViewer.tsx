import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { 
  Calendar, 
  Layers,
  FolderOpen,
  Compass,
  Menu,
  History,
  ChevronDown,
  Check
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
  const [showHistoryMenu, setShowHistoryMenu] = useState(false);
  const historyMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (externalSelectedTourId) {
      setSelectedTourId(externalSelectedTourId);
    }
  }, [externalSelectedTourId]);

  // Handle click outside to close the hamburger dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (historyMenuRef.current && !historyMenuRef.current.contains(event.target as Node)) {
        setShowHistoryMenu(false);
      }
    }
    if (showHistoryMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHistoryMenu]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeTour = safeTours.find((t) => t.id === selectedTourId) || safeTours[0];

  // Most recent 2 tours are displayed prominently as the 2 primary cards
  const primaryTours = safeTours.slice(0, 2);
  const olderTours = safeTours.slice(2);
  const isOlderTourSelected = olderTours.some((t) => t.id === selectedTourId);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div className="space-y-6 font-sans text-left">
      {/* FOLDER SELECTION BY DATE (IF SHOWN) */}
      {!hideTourSelector && safeTours.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-label-caps uppercase tracking-wider text-arena-calida font-semibold">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-uno" />
              Levantamientos 360° por Fecha ({safeTours.length} Registros)
            </span>

            {/* HAMBURGER / HISTORY MENU SELECTOR BUTTON */}
            {olderTours.length > 0 && (
              <div className="relative" ref={historyMenuRef}>
                <button
                  type="button"
                  onClick={() => setShowHistoryMenu((prev) => !prev)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-label-caps uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                    isOlderTourSelected
                      ? "bg-teal-uno text-white border border-teal-uno shadow-md font-bold"
                      : "bg-white/85 hover:bg-white text-gris-texto hover:text-teal-uno border border-arena-calida/40 font-medium"
                  }`}
                  title="Abrir selector de fechas anteriores y archivo histórico 360°"
                  aria-expanded={showHistoryMenu}
                >
                  <Menu className="w-3.5 h-3.5 text-arena-calida group-hover:text-teal-uno" />
                  <span>
                    {isOlderTourSelected
                      ? `Historial: ${activeTour.date}`
                      : `Fechas Anteriores (${olderTours.length})`}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showHistoryMenu ? "rotate-180" : ""}`} />
                </button>

                {/* DROPDOWN MENU */}
                {showHistoryMenu && (
                  <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white/95 backdrop-blur-xl border border-arena-calida/30 rounded-2xl shadow-2xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 text-left">
                    <div className="p-2 text-[10px] font-label-caps uppercase text-arena-calida tracking-widest border-b border-arena-calida/20 font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <History className="w-3 h-3 text-teal-uno" />
                        Historial de Levantamientos
                      </span>
                      <span className="text-[9px] font-mono text-gris-texto/70">{safeTours.length} Fechas</span>
                    </div>

                    <div className="max-h-60 overflow-y-auto space-y-1 py-1 pr-1">
                      {safeTours.map((tour, index) => {
                        const isSelected = tour.id === selectedTourId;
                        const isPrimary = index < 2;
                        return (
                          <button
                            key={tour.id}
                            type="button"
                            onClick={() => {
                              setSelectedTourId(tour.id);
                              if (onSelectTourId) onSelectTourId(tour.id);
                              setShowHistoryMenu(false);
                            }}
                            className={`w-full p-2.5 text-left rounded-xl transition-all flex items-center justify-between gap-2 cursor-pointer ${
                              isSelected
                                ? "bg-teal-uno/15 text-teal-uno font-bold border border-teal-uno/30 shadow-xs"
                                : "text-gris-texto hover:bg-arena-calida/10"
                            }`}
                          >
                            <div className="space-y-0.5 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-label-caps text-xs uppercase font-bold text-teal-uno">
                                  {tour.date}
                                </span>
                                {isPrimary ? (
                                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-teal-uno/10 text-teal-uno font-semibold">
                                    {index === 0 ? "Más Reciente" : "Reciente"}
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-arena-calida/15 text-arena-calida font-semibold">
                                    Histórico
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gris-texto/80 truncate font-sans">
                                {tour.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 flex-shrink-0 text-[10px] font-mono">
                              <span className="px-2 py-0.5 rounded-full bg-arena-calida/15 text-arena-calida font-bold">
                                {tour.progress}%
                              </span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-teal-uno ml-0.5" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* TWO PRIMARY CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {primaryTours.map((tour, index) => {
              const isSelected = tour.id === selectedTourId;
              const sceneCount = tour.scenes?.length || 0;
              const isLatest = index === 0;
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
                    <div className="flex items-center gap-2">
                      <span className="font-label-caps text-xs uppercase tracking-wider font-bold text-teal-uno">
                        {tour.date}
                      </span>
                      {isLatest && (
                        <span className="text-[9px] font-label-caps uppercase px-2 py-0.5 rounded-full bg-teal-uno text-white font-bold tracking-wider">
                          Más Reciente
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-arena-calida/15 text-arena-calida border border-arena-calida/30 font-bold">
                      {sceneCount} Puntos 360°
                    </span>
                  </div>

                  <h4 className="font-headline-md text-sm font-semibold text-teal-uno line-clamp-1 group-hover:text-arena-calida transition-colors uppercase">
                    {tour.title}
                  </h4>

                  <div className="flex items-center justify-between gap-2 text-[11px] text-gris-texto/70 mt-2.5 font-label-caps uppercase font-medium">
                    <div className="flex items-center gap-1.5 truncate">
                      <Layers className="w-3.5 h-3.5 text-teal-uno flex-shrink-0" />
                      <span className="truncate">{tour.phaseName}</span>
                    </div>
                    <span className="font-mono text-[10px] text-arena-calida font-bold flex-shrink-0">
                      {tour.progress}% Avance
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE HISTORICAL TOUR HIGHLIGHT (IF AN OLDER TOUR IS SELECTED VIA HAMBURGER) */}
          {isOlderTourSelected && (
            <div className="p-4 rounded-3xl bg-teal-uno/5 border-2 border-teal-uno/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-teal-uno text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <History className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-xs uppercase font-bold text-teal-uno">
                      Levantamiento Histórico Activo: {activeTour.date}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-arena-calida/20 text-arena-calida font-bold">
                      {activeTour.scenes?.length || 0} Puntos 360°
                    </span>
                  </div>
                  <p className="text-xs text-gris-texto font-medium truncate">
                    {activeTour.title} • <span className="text-arena-calida font-semibold">{activeTour.phaseName} ({activeTour.progress}% Avance)</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (safeTours[0]) {
                    setSelectedTourId(safeTours[0].id);
                    if (onSelectTourId) onSelectTourId(safeTours[0].id);
                  }
                }}
                className="px-3.5 py-1.5 bg-white hover:bg-teal-uno hover:text-white text-teal-uno border border-teal-uno/30 rounded-full text-[11px] font-label-caps uppercase font-bold tracking-wider transition-all self-start sm:self-auto cursor-pointer shadow-2xs"
              >
                Volver a {safeTours[0]?.date || "Más Reciente"}
              </button>
            </div>
          )}
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
