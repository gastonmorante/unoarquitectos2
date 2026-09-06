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
  Layers
} from "lucide-react";
import { Tour360Folder } from "../../types/clientPortal";

interface CloudPanoViewerProps {
  tours: Tour360Folder[];
  propertyName: string;
  selectedTourId?: string;
  onUpdateTour?: (tourId: string, updated: Partial<Tour360Folder>) => void;
  onAddTour?: (newTour: Tour360Folder) => void;
}

export default function CloudPanoViewer({
  tours,
  propertyName,
  selectedTourId: externalSelectedTourId,
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
  const [showEmbedEditor, setShowEmbedEditor] = useState(false);
  const [editEmbedCode, setEditEmbedCode] = useState("");
  const [editFolderUrl, setEditFolderUrl] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Panorama drag simulation state for interactive fallback
  const [panX, setPanX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
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

  // Helper to extract iframe src from raw string or return direct URL
  const getIframeSrc = (code: string) => {
    if (!code) return "";
    const match = code.match(/src=["']([^"']+)["']/);
    if (match && match[1]) return match[1];
    if (code.startsWith("http://") || code.startsWith("https://")) return code;
    return "";
  };

  const iframeSrc = getIframeSrc(activeTour?.embedCode || "");

  // Drag interaction for 360 panoramic simulation fallback
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = (e.clientX - startX) * 0.2;
    setPanX((prev) => (prev - delta + 100) % 100);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-6 font-sans text-left">
      {/* SECTION HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-[#c2a275]/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]">
            <Compass className="w-4 h-4 animate-spin-slow text-teal-uno" />
            <span>Supervisión Inmersiva 360°</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1 tracking-tight">
            Recorridos Virtuales CloudPano
          </h3>
          <p className="text-xs sm:text-sm text-[#e4ded5]/70 max-w-2xl mt-1 leading-relaxed">
            Inspecciona cada detalle estructural, alturas y acabados de <strong className="text-white font-medium">{propertyName}</strong> en 360 grados por fecha de entrega.
          </p>
        </div>

        {/* TOP CONTROLS & EDITOR BUTTON */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleOpenEditor}
            className="px-4 py-2.5 bg-[#1a1a20] hover:bg-[#252530] text-[#c2a275] border border-[#c2a275]/30 rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 shadow-xs cursor-pointer active:scale-95"
            title="Editar código de inserción CloudPano"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Código de Inserción</span>
          </button>

          {activeTour?.folderUrl && (
            <a
              href={activeTour.folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-teal-uno/15 hover:bg-teal-uno/25 text-teal-uno border border-teal-uno/30 rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Carpeta de Entrega</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          )}
        </div>
      </div>

      {/* FOLDER SELECTION BY DATE */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-[#e4ded5]/60">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#c2a275]" />
            Carpetas de Levantamiento por Fecha ({tours.length} Registros)
          </span>
          <span className="text-[11px] text-teal-uno">Fidelidad 100% Levantamiento de Obra</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {tours.map((tour) => {
            const isSelected = tour.id === selectedTourId;
            return (
              <button
                key={tour.id}
                onClick={() => setSelectedTourId(tour.id)}
                className={`p-4 rounded-xs border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "bg-[#1f1f28] border-[#c2a275] shadow-lg shadow-[#c2a275]/5"
                    : "bg-[#141418] border-[#c2a275]/15 hover:border-[#c2a275]/40 hover:bg-[#1a1a22]"
                }`}
              >
                {/* Active Indicator Bar */}
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

      {/* ACTIVE TOUR METADATA BANNER */}
      {activeTour && (
        <div className="bg-[#141418] border border-[#c2a275]/20 p-4 rounded-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-xs bg-[#c2a275]/15 text-[#c2a275] font-label-caps uppercase text-[10px] tracking-wider border border-[#c2a275]/30">
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

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xs bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 cursor-pointer transition-colors"
              title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* 360 VIEWER CANVAS CONTAINER */}
      <div
        ref={viewerContainerRef}
        className={`relative w-full rounded-xs overflow-hidden border border-[#c2a275]/30 bg-[#0a0a0c] shadow-2xl ${
          isFullscreen ? "h-screen" : "h-[450px] sm:h-[550px] md:h-[620px]"
        }`}
      >
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title={`Recorrido Virtual 360 - ${propertyName} (${activeTour?.date})`}
            className="w-full h-full border-0"
            allowFullScreen
            allow="accelerometer; gyroscope; magnetometer; vr; xr-spatial-tracking"
            loading="lazy"
          />
        ) : (
          /* INTERACTIVE PANORAMA SIMULATOR FALLBACK */
          <div
            className="w-full h-full relative cursor-grab active:cursor-grabbing select-none overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Background Panorama Image with dynamic Pan */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
              style={{
                backgroundImage: `url(${activeTour?.thumbnail || "/projects/residencial/alux-7cielos-master-jungle-view.jpg"})`,
                backgroundPosition: `${panX}% center`,
                backgroundSize: "cover",
                transform: "scale(1.05)",
                filter: "brightness(0.95) contrast(1.05)",
              }}
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Interactive Compass & Pan Guides */}
            <div className="absolute top-6 left-6 z-10 bg-black/70 backdrop-blur-md px-3 py-2 rounded-xs border border-[#c2a275]/30 text-white text-xs font-label-caps uppercase tracking-wider flex items-center gap-2 pointer-events-none">
              <RotateCw className="w-3.5 h-3.5 text-teal-uno animate-spin-slow" />
              <span>Arrastra para rotar 360°</span>
            </div>

            <div className="absolute bottom-6 left-6 z-10 bg-black/80 backdrop-blur-md p-4 rounded-xs border border-[#c2a275]/30 max-w-md pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-label-caps uppercase text-[#c2a275] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-uno" />
                <span>Vista Panorámica de Alta Fidelidad</span>
              </div>
              <h4 className="text-white font-serif text-sm sm:text-base font-semibold">
                {activeTour?.title || propertyName}
              </h4>
              <p className="text-[11px] text-[#e4ded5]/70 mt-1 line-clamp-2">
                {activeTour?.notes || "Inspección de avance físico y calidad de acabados arquitectónicos en Riviera Maya."}
              </p>
            </div>

            <div className="absolute bottom-6 right-6 z-10">
              <button
                onClick={handleOpenEditor}
                className="px-3.5 py-2 bg-black/80 backdrop-blur-md hover:bg-black text-[#c2a275] hover:text-white border border-[#c2a275]/40 rounded-xs text-[11px] font-label-caps uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Insertar Tour CloudPano Oficial</span>
              </button>
            </div>
          </div>
        )}
      </div>

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
                    Código de Inserción CloudPano 360°
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
                    Pega el código HTML completo proporcionado por CloudPano o la URL directa de la escena.
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

