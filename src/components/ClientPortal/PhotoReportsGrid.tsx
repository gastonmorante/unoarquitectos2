import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  MapPin, 
  Maximize2
} from "lucide-react";
import { PhotoReport } from "../../types/clientPortal";

interface PhotoReportsGridProps {
  photoReports: PhotoReport[];
  selectedPeriod?: string;
  onSelectPeriod?: (period: string) => void;
  onOpenAiAssistant?: () => void;
}

export default function PhotoReportsGrid({
  photoReports,
  selectedPeriod: externalSelectedPeriod,
  onSelectPeriod,
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

  // Get WebP optimized url if available
  const getWebpUrl = (url: string) => {
    if (!url) return "";
    if (url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".png")) {
      const base = url.substring(0, url.lastIndexOf("."));
      return `${base}.webp`;
    }
    return url;
  };

  return (
    <div className="space-y-8 font-sans text-left">
      {/* SECTION HEADER (CLEANED) */}
      <div className="border-b border-arena-calida/20 pb-5">
        <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
          <Camera className="w-4 h-4 text-teal-uno" />
          <span>Bitácora Fotográfica Oficial</span>
        </div>
        <h3 className="font-headline-md text-2xl sm:text-3xl text-teal-uno uppercase font-semibold mt-1">
          Galería de Fotos Encuadradas
        </h3>
        <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-2xl mt-1 leading-relaxed">
          Fotografía técnica con reframe arquitectónico a 2 puntos de fuga y corrección de perspectiva rectilinear, clasificada por fechas de supervisión. Formato WebP ultra ligero y alta fidelidad.
        </p>
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

              return (
                <button
                  key={per}
                  onClick={() => {
                    setSelectedPeriod(per);
                    if (onSelectPeriod) onSelectPeriod(per);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-label-caps uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-teal-uno text-white font-bold shadow-xs"
                      : "bg-surface-container-low text-gris-texto hover:bg-white border border-arena-calida/30"
                  }`}
                >
                  <span>{per}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white font-mono"
                        : "bg-surface-container-highest text-gris-texto/70 font-mono"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: Specialty / Category Filter Pills */}
        <div className="space-y-2 pt-3 border-t border-arena-calida/20">
          <span className="text-[11px] font-label-caps uppercase tracking-wider text-arena-calida font-semibold block">
            Especialidad Constructiva:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? "bg-arena-calida text-white font-bold shadow-xs"
                      : "bg-surface-container-low text-gris-texto hover:bg-white border border-arena-calida/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* PHOTOS GRID */}
      {filteredPhotos.length === 0 ? (
        <div className="bg-white/60 backdrop-blur-md border border-arena-calida/30 rounded-3xl p-12 text-center space-y-3">
          <Camera className="w-10 h-10 text-arena-calida mx-auto opacity-60" />
          <p className="text-sm font-semibold text-teal-uno">
            No se encontraron fotografías para los filtros seleccionados.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("Todas");
              setSelectedPeriod("Todos");
            }}
            className="text-xs font-label-caps uppercase tracking-wider text-arena-calida font-bold hover:underline cursor-pointer"
          >
            Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
              onClick={() => {
                setLightboxIndex(idx);
                setZoomLevel(1);
              }}
              className="group bg-white/80 backdrop-blur-md border border-arena-calida/30 rounded-3xl overflow-hidden shadow-ethereal hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-foundation-gray">
                <picture className="w-full h-full block">
                  <source srcSet={getWebpUrl(photo.imageUrl)} type="image/webp" />
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </picture>

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 bg-teal-uno/90 backdrop-blur-md text-white text-[10px] font-label-caps uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-md border border-white/20">
                  {photo.category}
                </div>

                {/* Top Right: Zoom hint */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Overlay Gradient with Date & Location */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex items-end justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-arena-calida" />
                    {photo.date}
                  </span>
                  <span className="flex items-center gap-1 font-medium truncate max-w-[140px]">
                    <MapPin className="w-3.5 h-3.5 text-arena-calida shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </span>
                </div>
              </div>

              {/* Technical Description Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h4 className="font-headline-md text-sm sm:text-base font-semibold text-teal-uno uppercase line-clamp-1 group-hover:text-arena-calida transition-colors">
                    {photo.title}
                  </h4>
                  <p className="font-body-md text-xs text-gris-texto line-clamp-2 leading-relaxed">
                    {photo.technicalNote}
                  </p>
                </div>

                <div className="pt-3 border-t border-arena-calida/20 flex items-center justify-between text-[11px] text-arena-calida font-label-caps uppercase tracking-wider font-semibold">
                  <span>Dictamen Técnico Verificado</span>
                  <span className="text-teal-uno group-hover:translate-x-1 transition-transform">
                    Ampliar Fotografía →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 text-white select-none animate-fadeIn"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setLightboxIndex(null);
                setZoomLevel(1);
              }
            }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-arena-calida">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
                <span className="text-xs font-label-caps uppercase tracking-wider text-white/80 hidden sm:inline">
                  {activePhoto.period} • {activePhoto.category}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.5, 3))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer"
                  title="Acercar zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.5, 1))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer"
                  title="Alejar zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer"
                  title="Restablecer zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    setZoomLevel(1);
                  }}
                  className="p-2 bg-white/20 hover:bg-red-500 rounded-full transition cursor-pointer ml-2"
                  title="Cerrar visor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image with Zoom and Navigation Arrows */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
              {/* Prev Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
                  setZoomLevel(1);
                }}
                className="absolute left-2 sm:left-4 p-3 bg-black/60 hover:bg-teal-uno text-white rounded-full transition-all z-20 cursor-pointer shadow-lg"
                title="Fotografía anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="max-w-6xl max-h-[75vh] flex items-center justify-center overflow-hidden">
                <picture className="max-w-full max-h-[75vh] block">
                  <source srcSet={getWebpUrl(activePhoto.imageUrl)} type="image/webp" />
                  <img
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="max-w-full max-h-[75vh] object-contain transition-transform duration-200 rounded-lg shadow-2xl"
                  />
                </picture>
              </div>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
                  setZoomLevel(1);
                }}
                className="absolute right-2 sm:right-4 p-3 bg-black/60 hover:bg-teal-uno text-white rounded-full transition-all z-20 cursor-pointer shadow-lg"
                title="Fotografía siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details Footer */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-4xl mx-auto w-full text-left space-y-1.5 z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="font-headline-md text-base sm:text-lg uppercase text-arena-calida font-semibold">
                  {activePhoto.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-white/70 font-mono">
                  <span>{activePhoto.location}</span>
                  <span>•</span>
                  <span>{activePhoto.date}</span>
                </div>
              </div>
              <p className="font-body-md text-xs sm:text-sm text-white/80 leading-relaxed">
                {activePhoto.technicalNote}
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
