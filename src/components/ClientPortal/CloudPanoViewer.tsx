import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  FolderOpen, 
  ExternalLink, 
  Code2, 
  Check, 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  Eye, 
  Info,
  Calendar,
  Sparkles,
  Layers,
  Globe,
  Settings2
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
  onUpdateTour,
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
  const [viewerSource, setViewerSource] = useState<"interactive" | "cloudpano">("interactive");
  const [showEmbedEditor, setShowEmbedEditor] = useState(false);
  const [editEmbedCode, setEditEmbedCode] = useState("");
  const [editFolderUrl, setEditFolderUrl] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const activeTour = tours.find((t) => t.id === selectedTourId) || tours[0];

  const handleOpenEditor = () => {
    if (activeTour) {
      setEditEmbedCode(activeTour.embedCode);
      setEditFolderUrl(activeTour.folderUrl || "");
      setEditNotes(activeTour.notes || "");
      setShowEmbedEditor(true);
    }
  };

  const handleSaveEmbedCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTour && onUpdateTour) {
      onUpdateTour(activeTour.id, {
        embedCode: editEmbedCode.trim(),
        folderUrl: editFolderUrl.trim(),
        notes: editNotes.trim(),
      });
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        setShowEmbedEditor(false);
      }, 1500);
    }
  };

  const toggleFullscreen = () => {
    if (!viewerContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewerContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Helper to extract iframe src from raw string, CloudPano script tags, or direct URLs
  const getIframeSrc = (code: string) => {
    if (!code) return "";
    const cleanCode = code.trim();

    // 1. Check for CloudPano data-short attribute in script/div
    const shortMatch = cleanCode.match(/data-short=["']([^"']+)["']/i);
    if (shortMatch && shortMatch[1]) {
      return `https://app.cloudpano.com/tours/${shortMatch[1]}`;
    }

    // 2. Check for CloudPano div id
    const divIdMatch = cleanCode.match(/<div\s+id=["']([a-zA-Z0-9_-]+)["']/i);
    if (divIdMatch && divIdMatch[1] && cleanCode.includes("cloudpano")) {
      return `https://app.cloudpano.com/tours/${divIdMatch[1]}`;
    }

    // 3. Check for standard iframe src="..."
    const srcMatch = cleanCode.match(/src=["']([^"']+)["']/i);
    if (srcMatch && srcMatch[1]) {
      if (!srcMatch[1].includes("shareScript.js")) {
        return srcMatch[1];
      }
    }

    // 4. Check for direct CloudPano tour link inside string
    const tourUrlMatch = cleanCode.match(/https?:\/\/app\.cloudpano\.com\/tours\/([a-zA-Z0-9_-]+)/i);
    if (tourUrlMatch) {
      return tourUrlMatch[0];
    }

    // 5. Direct URL
    if (cleanCode.startsWith("http://") || cleanCode.startsWith("https://")) {
      return cleanCode;
    }

    // 6. Direct ID
    if (/^[a-zA-Z0-9_-]{6,20}$/.test(cleanCode)) {
      return `https://app.cloudpano.com/tours/${cleanCode}`;
    }

    return "";
  };

  const iframeSrc = getIframeSrc(activeTour?.embedCode || "");
  const hasScenes = Boolean(activeTour?.scenes && activeTour.scenes.length > 0);

  return (
    <div className="space-y-6 font-sans text-left">
      {/* FOLDER SELECTION BY DATE */}
      {!hideTourSelector && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-[#e4ded5]/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c2a275]" />
              Carpetas de Levantamiento por Fecha ({tours.length} Registros)
            </span>
            <span className="text-[11px] text-teal-uno">Fidelidad 100% Levantamiento de Obra</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tours.map((tour) => {
              const isSelected = tour.id === selectedTourId;
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
                      {tour.progress}% Avance
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

      {/* ACTIVE TOUR CONTROL & ENGINE SWITCHER BAR */}
      {activeTour && (
        <div className="bg-[#141418] border border-[#c2a275]/20 p-4 rounded-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-xs bg-[#c2a275]/15 text-[#c2a275] font-label-caps uppercase text-[10px] tracking-wider border border-[#c2a275]/30 font-bold">
                {activeTour.date}
              </span>
              <span className="text-white font-medium">{activeTour.title}</span>
            </div>
            {activeTour.notes && (
              <p className="text-[#e4ded5]/70 text-[11px] leading-relaxed max-w-3xl">
                <strong className="text-[#c2a275] font-normal">Dictamen de Levantamiento:</strong> {activeTour.notes}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 self-start md:self-auto">
            {/* Engine Switcher */}
            {hasScenes && (
              <div className="flex items-center bg-[#101014] p-0.5 rounded-xs border border-[#c2a275]/30">
                <button
                  onClick={() => setViewerSource("interactive")}
                  className={`px-3 py-1 rounded-xs text-[10px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewerSource === "interactive"
                      ? "bg-teal-uno text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="Visor 360° esférico con las escenas reales de esta fecha"
                >
                  <Globe className="w-3 h-3" />
                  <span>360° Real ({activeTour.scenes?.length} Puntos)</span>
                </button>
                <button
                  onClick={() => setViewerSource("cloudpano")}
                  className={`px-3 py-1 rounded-xs text-[10px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewerSource === "cloudpano"
                      ? "bg-teal-uno text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="Recorrido CloudPano"
                >
                  <Compass className="w-3 h-3" />
                  <span>CloudPano</span>
                </button>
              </div>
            )}

            <button
              onClick={handleOpenEditor}
              className="p-2 rounded-xs bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 cursor-pointer transition-colors"
              title="Configurar código CloudPano o enlaces"
            >
              <Settings2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 360 VIEWER CONTAINER */}
      {viewerSource === "interactive" && hasScenes ? (
        <Interactive360Canvas
          scenes={activeTour.scenes!}
          dateTitle={activeTour.date}
          phaseName={activeTour.phaseName}
          notes={activeTour.notes}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      ) : (
        <div
          ref={viewerContainerRef}
          className={`relative w-full rounded-xs overflow-hidden border border-[#c2a275]/30 bg-[#0a0a0c] shadow-2xl ${
            isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none" : "h-[450px] sm:h-[550px] md:h-[620px]"
          }`}
        >
          {iframeSrc ? (
            <iframe
              key={`cp-${activeTour?.id || activeTour?.date}`}
              src={iframeSrc}
              title={`Recorrido Virtual CloudPano - ${propertyName} (${activeTour?.date})`}
              className="w-full h-full border-0"
              allowFullScreen
              allow="accelerometer; gyroscope; magnetometer; vr; xr-spatial-tracking"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#101014]">
              <Compass className="w-12 h-12 text-teal-uno animate-spin-slow" />
              <h4 className="text-white font-serif text-base font-semibold">
                Recorrido CloudPano no configurado para esta fecha
              </h4>
              <p className="text-xs text-zinc-400 max-w-md">
                Haz clic en el botón de configuración o visualiza el Visor 360° Real para explorar las escenas de {activeTour?.date}.
              </p>
              <button
                onClick={() => setViewerSource("interactive")}
                className="px-4 py-2 bg-teal-uno text-white text-xs font-label-caps uppercase tracking-wider rounded-xs cursor-pointer"
              >
                Ver Visor 360° Real de Obra
              </button>
            </div>
          )}
        </div>
      )}

      {/* CLOUDPANO EMBED CODE MODAL EDITOR */}
      <AnimatePresence>
        {showEmbedEditor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#141418] border border-[#c2a275]/40 p-6 sm:p-8 rounded-xs max-w-2xl w-full shadow-2xl space-y-5 text-left relative"
            >
              <div className="flex items-center justify-between border-b border-[#c2a275]/20 pb-4">
                <div className="flex items-center gap-2 text-[#c2a275]">
                  <Code2 className="w-5 h-5 text-teal-uno" />
                  <h4 className="font-serif text-xl text-white">
                    Código de Inserción CloudPano 360° • {activeTour?.date}
                  </h4>
                </div>
                <button
                  onClick={() => setShowEmbedEditor(false)}
                  className="text-zinc-400 hover:text-white text-xs uppercase font-label-caps cursor-pointer"
                >
                  Cerrar ✕
                </button>
              </div>

              <form onSubmit={handleSaveEmbedCode} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase font-label-caps text-[#c2a275] mb-1.5">
                    Código iframe o URL de CloudPano
                  </label>
                  <textarea
                    rows={4}
                    value={editEmbedCode}
                    onChange={(e) => setEditEmbedCode(e.target.value)}
                    placeholder='<iframe src="https://app.cloudpano.com/tours/..." width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
                    className="w-full bg-black/50 border border-[#c2a275]/30 p-3 rounded-xs text-xs font-mono text-[#e4ded5] focus:border-teal-uno focus:outline-none focus:ring-1 focus:ring-teal-uno"
                  />
                  <p className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1">
                    <Info className="w-3 h-3 text-[#c2a275]" />
                    Pega el código HTML completo proporcionado por CloudPano o la URL directa de la escena para {activeTour?.date}.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase font-label-caps text-[#c2a275] mb-1.5">
                      Enlace a Carpeta en la Nube (Drive / Cloud)
                    </label>
                    <input
                      type="url"
                      value={editFolderUrl}
                      onChange={(e) => setEditFolderUrl(e.target.value)}
                      placeholder="https://drive.google.com/drive/folders/..."
                      className="w-full bg-black/50 border border-[#c2a275]/30 px-3 py-2 rounded-xs text-xs text-[#e4ded5] focus:border-teal-uno focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-label-caps text-[#c2a275] mb-1.5">
                      Fecha del Levantamiento
                    </label>
                    <input
                      type="text"
                      disabled
                      value={activeTour?.date || "Fecha actual"}
                      className="w-full bg-black/30 border border-white/10 px-3 py-2 rounded-xs text-xs text-zinc-400 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-label-caps text-[#c2a275] mb-1.5">
                    Notas Técnicas del Levantamiento
                  </label>
                  <textarea
                    rows={2}
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Descripción técnica del avance capturado en este recorrido..."
                    className="w-full bg-black/50 border border-[#c2a275]/30 p-3 rounded-xs text-xs text-[#e4ded5] focus:border-teal-uno focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#c2a275]/20">
                  <button
                    type="button"
                    onClick={() => setShowEmbedEditor(false)}
                    className="px-4 py-2 text-xs font-label-caps uppercase text-zinc-400 hover:text-white cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-teal-uno hover:bg-[#008f8f] text-white rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
                  >
                    {saveSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>¡Guardado con Éxito!</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Guardar & Aplicar Tour</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
