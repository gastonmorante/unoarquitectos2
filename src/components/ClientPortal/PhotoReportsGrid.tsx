import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  MapPin, 
  Tag, 
  FileText,
  SlidersHorizontal,
  Maximize2,
  FolderOpen,
  ExternalLink
} from "lucide-react";
import { PhotoReport, PhotoCategory } from "../../types/clientPortal";

interface PhotoReportsGridProps {
  photoReports: PhotoReport[];
  propertyName: string;
  selectedPeriod?: string;
  onSelectPeriod?: (period: string) => void;
  onOpenAiAssistant?: () => void;
}

export default function PhotoReportsGrid({
  photoReports,
  propertyName,
  selectedPeriod: externalSelectedPeriod,
  onSelectPeriod,
  onOpenAiAssistant,
}: PhotoReportsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    externalSelectedPeriod || "Todos"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    if (externalSelectedPeriod) {
      setSelectedPeriod(externalSelectedPeriod);
    }
  }, [externalSelectedPeriod]);

  const getDriveUrlForPeriod = (period: string) => {
    if (period === "05 Septiembre 2026") {
      return "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link";
    }
    if (period === "27 Agosto 2026" || period === "28 Agosto 2026") {
      return "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link";
    }
    return "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing";
  };

  const currentDriveUrl = getDriveUrlForPeriod(selectedPeriod);

  // Extract unique categories and periods
  const rawCategories = Array.from(new Set(photoReports.map((p) => p.category)));
  const categories: string[] = ["Todas", ...rawCategories];
  const dynamicPeriods = Array.from(new Set(photoReports.map((p) => p.period)));
  const periods: string[] = ["Todos", ...dynamicPeriods];

  // Filter photos
  const filteredPhotos = photoReports.filter((p) => {
    const matchCat = selectedCategory === "Todas" || p.category === selectedCategory;
    const matchPer = selectedPeriod === "Todos" || p.period === selectedPeriod;
    return matchCat && matchPer;
  });

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
        setZoomLevel(1);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
        setZoomLevel(1);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
        setZoomLevel(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <div className="space-y-8 font-sans text-left">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-arena-calida/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
            <Camera className="w-4 h-4 text-teal-uno" />
            <span>Bitácora Fotográfica Oficial</span>
          </div>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-teal-uno uppercase font-semibold mt-1">
            Galería de Fotos Encuadradas
          </h3>
          <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-2xl mt-1 leading-relaxed">
            Fotografía técnica con reframe arquitectónico a 2 puntos de fuga y corrección de perspectiva rectilinear, clasificada por fechas de supervisión.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {onOpenAiAssistant && (
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-1.5 text-xs text-white bg-teal-uno hover:bg-arena-calida font-label-caps uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full border border-teal-uno/40 transition-all shadow-ethereal cursor-pointer active:scale-95"
              title="Preguntar a la IA Gemini sobre los avances y detalles de obra"
            >
              <Sparkles className="w-3.5 h-3.5 text-arena-calida" />
              <span>Consultar IA de Obra</span>
            </button>
          )}

          <a
            href={currentDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-teal-uno bg-white/80 hover:bg-white px-4 py-2.5 rounded-full border border-arena-calida/40 font-label-caps uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer"
            title="Abrir carpeta compartida en Google Drive"
          >
            <FolderOpen className="w-3.5 h-3.5 text-teal-uno" />
            <span>
              {selectedPeriod === "Todos" ? "Descargar en Drive" : `Drive (${selectedPeriod.slice(0, 6)})`}
            </span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <div className="flex items-center gap-2 text-xs text-arena-calida bg-arena-calida/15 px-4 py-2.5 rounded-full border border-arena-calida/30 font-label-caps uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-teal-uno" />
            <span>{filteredPhotos.length} Fotos Verificadas</span>
          </div>
        </div>
      </div>

      {/* DATES & SPECIALTY FILTER TOOLBAR */}
      <div className="bg-white/80 backdrop-blur-md border border-arena-calida/30 p-6 rounded-3xl space-y-4 shadow-ethereal">
        {/* Row 1: Date Filter Pills */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-label-caps uppercase tracking-wider text-arena-calida font-semibold">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-uno" />
              Filtrar por Fecha de Avance:
            </span>
            {selectedPeriod !== "Todos" && (
              <button
                onClick={() => {
                  setSelectedPeriod("Todos");
                  if (onSelectPeriod) onSelectPeriod("Todos");
                }}
                className="text-teal-uno hover:underline cursor-pointer font-semibold"
              >
                Ver todas las fechas
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {periods.map((per) => {
              const count = per === "Todos" 
                ? photoReports.length 
                : photoReports.filter((p) => p.period === per).length;
              const isSelected = selectedPeriod === per;
              const isLatest = per === "05 Septiembre 2026";

              return (
                <button
                  key={per}
                  onClick={() => {
                    setSelectedPeriod(per);
                    if (onSelectPeriod) onSelectPeriod(per);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-label-caps uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-teal-uno text-white font-bold shadow-md shadow-teal-uno/20 border border-teal-uno"
                      : "bg-surface-container-low/70 text-gris-texto hover:bg-white hover:text-teal-uno border border-arena-calida/30"
                  }`}
                >
                  <span>{per}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isSelected ? "bg-black/20 text-white" : "bg-arena-calida/20 text-arena-calida font-bold"
                  }`}>
                    {count}
                  </span>
                  {isLatest && !isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-uno animate-pulse" title="Último avance" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: Specialty / Category Filter Pills */}
        <div className="pt-3 border-t border-arena-calida/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider mr-1 hidden sm:inline font-semibold">
              Especialidad:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-arena-calida text-white font-bold shadow-xs border border-arena-calida"
                    : "bg-white/60 text-gris-texto hover:bg-white hover:text-teal-uno border border-arena-calida/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-[11px] font-mono text-gris-texto/60">
            Mostrando {filteredPhotos.length} de {photoReports.length} registros
          </span>
        </div>
      </div>

      {/* PHOTOS GRID */}
      {filteredPhotos.length === 0 ? (
        <div className="p-12 text-center bg-white/70 backdrop-blur-md border border-arena-calida/30 rounded-3xl space-y-3 shadow-ethereal">
          <Camera className="w-10 h-10 text-arena-calida mx-auto" />
          <p className="font-headline-md text-base text-teal-uno uppercase font-semibold">No se encontraron fotografías con estos filtros.</p>
          <button
            onClick={() => {
              setSelectedCategory("Todas");
              setSelectedPeriod("Todos");
            }}
            className="text-xs text-teal-uno hover:underline font-label-caps uppercase tracking-wider cursor-pointer font-semibold"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => {
                setLightboxIndex(idx);
                setZoomLevel(1);
              }}
              className="group bg-white/80 backdrop-blur-md border border-arena-calida/30 rounded-3xl overflow-hidden hover:border-teal-uno hover:shadow-ethereal transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container-low">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-teal-uno border border-arena-calida/30 text-[10px] font-label-caps uppercase tracking-wider font-semibold shadow-sm">
                    {photo.category}
                  </span>

                  {photo.isReframed360 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/90 backdrop-blur-md text-white text-[9px] font-label-caps uppercase tracking-wider flex items-center gap-1 shadow-sm font-semibold">
                      <Sparkles className="w-2.5 h-2.5" /> Reframe 360°
                    </span>
                  )}
                </div>

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-teal-uno/20 backdrop-blur-[2px]">
                  <div className="px-4 py-2 bg-white/95 text-teal-uno text-xs font-label-caps uppercase tracking-wider font-bold rounded-full flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-uno" /> Ampliar Fotografía
                  </div>
                </div>

                {/* Bottom Date Pill */}
                <div className="absolute bottom-3.5 left-3.5 z-10 text-[10px] text-white font-label-caps uppercase tracking-wider flex items-center gap-1.5 drop-shadow-md font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-arena-calida" />
                  <span>{photo.date}</span>
                </div>
              </div>

              {/* Photo Information Card */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white/40">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-teal-uno font-label-caps uppercase tracking-wider mb-1 font-semibold">
                    <MapPin className="w-3 h-3 text-teal-uno" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                  <h4 className="font-headline-md text-sm sm:text-base text-teal-uno uppercase font-semibold line-clamp-1 group-hover:text-arena-calida transition-colors">
                    {photo.title}
                  </h4>
                </div>

                <p className="font-body-md text-xs text-gris-texto line-clamp-2 leading-relaxed italic border-t border-arena-calida/20 pt-2.5">
                  "{photo.technicalNote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* FULLSCREEN INTERACTIVE LIGHTBOX */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-8 select-none font-sans">
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white border-b border-white/15 pb-3">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 bg-arena-calida/20 text-arena-calida border border-arena-calida/40 rounded-full font-label-caps uppercase text-[10px] tracking-wider font-semibold">
                  {activePhoto.category}
                </span>
                <span className="text-white font-headline-md uppercase tracking-wider sm:text-sm truncate max-w-xs sm:max-w-md">
                  {activePhoto.title}
                </span>
              </div>

              {/* Zoom Controls & Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.3))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer transition-colors"
                  title="Acercar zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(1, z - 0.3))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer transition-colors"
                  title="Alejar zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer transition-colors"
                  title="Restablecer zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    setZoomLevel(1);
                  }}
                  className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-300 border border-red-500/30 rounded-full cursor-pointer transition-colors ml-2"
                  title="Cerrar lightbox (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
                setZoomLevel(1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 bg-black/60 hover:bg-teal-uno text-white border border-white/20 rounded-full cursor-pointer transition-all shadow-2xl"
              title="Foto anterior (Flecha izquierda)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => {
                setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
                setZoomLevel(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 bg-black/60 hover:bg-teal-uno text-white border border-white/20 rounded-full cursor-pointer transition-all shadow-2xl"
              title="Siguiente foto (Flecha derecha)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Canvas with Zoom Pan */}
            <div className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center overflow-hidden">
              <motion.img
                key={activePhoto.id}
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                transition={{ duration: 0.2 }}
                className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl transition-transform duration-200"
              />
            </div>

            {/* Bottom Technical Note Overlay */}
            <div className="absolute bottom-6 left-4 right-4 z-20 bg-background/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-arena-calida/30 max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-left shadow-2xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-arena-calida font-label-caps uppercase text-[10px] tracking-wider font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-teal-uno" />
                  <span>{activePhoto.location}</span>
                  <span>•</span>
                  <Calendar className="w-3.5 h-3.5 text-arena-calida" />
                  <span>{activePhoto.date}</span>
                </div>
                <p className="text-gris-texto text-xs leading-relaxed italic font-body-md">
                  "{activePhoto.technicalNote}"
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <span className="text-[10px] text-gris-texto/60 font-mono block">
                  {lightboxIndex + 1} de {filteredPhotos.length}
                </span>
                {activePhoto.isReframed360 && (
                  <span className="text-[10px] text-teal-uno font-label-caps uppercase tracking-wider font-semibold">
                    Reframe 360° Verificado
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
