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
}

export default function PhotoReportsGrid({
  photoReports,
  propertyName,
}: PhotoReportsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const driveFolderUrl = "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing";

  // Extract unique categories and periods
  const categories: string[] = ["Todas", "Acabados", "Estructura", "Interiores", "Alberca", "Instalaciones", "Fachada"];
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
    <div className="space-y-6 font-sans text-left">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#c2a275]/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]">
            <Camera className="w-4 h-4 text-teal-uno" />
            <span>Bitácora Fotográfica Oficial</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1 tracking-tight">
            Reportes Fotográficos Periódicos
          </h3>
          <p className="text-xs sm:text-sm text-[#e4ded5]/70 max-w-2xl mt-1 leading-relaxed">
            Fotografía técnica con reframe arquitectónico a 2 puntos de fuga y corrección de perspectiva rectilinear, clasificada por fechas de supervisión.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={driveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#c2a275] bg-[#141418] hover:bg-[#1f1f28] hover:text-white px-3.5 py-2 rounded-xs border border-[#c2a275]/30 transition-colors shadow-xs cursor-pointer"
            title="Abrir carpeta compartida en Google Drive"
          >
            <FolderOpen className="w-3.5 h-3.5 text-teal-uno" />
            <span className="font-label-caps uppercase text-[11px] tracking-wider">
              Descargar en Drive
            </span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <div className="flex items-center gap-2 text-xs text-white bg-teal-uno/20 px-3.5 py-2 rounded-xs border border-teal-uno/40">
            <Sparkles className="w-3.5 h-3.5 text-teal-uno" />
            <span className="font-label-caps uppercase text-[11px] tracking-wider">
              {filteredPhotos.length} Fotos Verificadas
            </span>
          </div>
        </div>
      </div>

      {/* DATES & SPECIALTY FILTER TOOLBAR */}
      <div className="bg-[#141418] border border-[#c2a275]/20 p-4 rounded-xs space-y-3.5">
        {/* Row 1: Date Filter Pills */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-label-caps uppercase tracking-wider text-[#c2a275]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-teal-uno" />
              Filtrar por Fecha de Avance:
            </span>
            {selectedPeriod !== "Todos" && (
              <button
                onClick={() => setSelectedPeriod("Todos")}
                className="text-teal-uno hover:underline cursor-pointer"
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
                  onClick={() => setSelectedPeriod(per)}
                  className={`px-3.5 py-2 rounded-xs text-xs font-label-caps uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-teal-uno text-white font-bold shadow-md shadow-teal-uno/15 border border-teal-uno"
                      : "bg-[#1b1b22] text-[#e4ded5]/80 hover:bg-[#242430] hover:text-white border border-white/5"
                  }`}
                >
                  <span>{per}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-black/30 text-white" : "bg-black/40 text-teal-uno"
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
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-label-caps uppercase text-[#c2a275] tracking-wider mr-1 hidden sm:inline">
              Especialidad:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-xs text-[10px] font-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#c2a275] text-black font-bold shadow-xs"
                    : "bg-white/5 text-[#e4ded5]/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-[10px] font-mono text-zinc-400">
            Mostrando {filteredPhotos.length} de {photoReports.length} registros
          </span>
        </div>
      </div>

      {/* PHOTOS GRID */}
      {filteredPhotos.length === 0 ? (
        <div className="p-12 text-center bg-[#141418] border border-[#c2a275]/15 rounded-xs space-y-2">
          <Camera className="w-8 h-8 text-zinc-500 mx-auto" />
          <p className="text-white text-sm font-medium">No se encontraron fotografías con estos filtros.</p>
          <button
            onClick={() => {
              setSelectedCategory("Todas");
              setSelectedPeriod("Todos");
            }}
            className="text-xs text-teal-uno hover:underline font-label-caps uppercase tracking-wider cursor-pointer"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              className="group bg-[#141418] border border-[#c2a275]/20 rounded-xs overflow-hidden hover:border-[#c2a275]/60 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                  <span className="px-2.5 py-1 rounded-xs bg-black/80 backdrop-blur-md text-[#c2a275] border border-[#c2a275]/30 text-[10px] font-label-caps uppercase tracking-wider font-semibold">
                    {photo.category}
                  </span>

                  {photo.isReframed360 && (
                    <span className="px-2 py-0.5 rounded-xs bg-teal-uno/90 backdrop-blur-md text-white text-[9px] font-label-caps uppercase tracking-wider flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" /> Reframe 360°
                    </span>
                  )}
                </div>

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="px-3.5 py-2 bg-white/90 text-black text-xs font-label-caps uppercase tracking-wider font-bold rounded-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" /> Ampliar Fotografía
                  </div>
                </div>

                {/* Bottom Date Pill */}
                <div className="absolute bottom-3 left-3 z-10 text-[10px] text-white/90 font-label-caps uppercase tracking-wider flex items-center gap-1 drop-shadow-md">
                  <Calendar className="w-3 h-3 text-[#c2a275]" />
                  <span>{photo.date}</span>
                </div>
              </div>

              {/* Photo Information Card */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="flex items-center gap-1 text-[10px] text-teal-uno font-label-caps uppercase tracking-wider mb-1">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                  <h4 className="font-serif text-sm text-white font-medium line-clamp-1 group-hover:text-[#c2a275] transition-colors">
                    {photo.title}
                  </h4>
                </div>

                <p className="text-[11px] text-[#e4ded5]/70 line-clamp-2 leading-relaxed italic border-t border-white/5 pt-2">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6 select-none font-sans">
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white border-b border-white/10 pb-3">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 bg-[#c2a275]/20 text-[#c2a275] border border-[#c2a275]/40 rounded-xs font-label-caps uppercase text-[10px] tracking-wider">
                  {activePhoto.category}
                </span>
                <span className="text-[#e4ded5]/80 font-serif sm:text-sm truncate max-w-xs sm:max-w-md">
                  {activePhoto.title}
                </span>
              </div>

              {/* Zoom Controls & Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.3))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-xs text-white cursor-pointer transition-colors"
                  title="Acercar zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(1, z - 0.3))}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-xs text-white cursor-pointer transition-colors"
                  title="Alejar zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-xs text-white cursor-pointer transition-colors"
                  title="Restablecer zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    setZoomLevel(1);
                  }}
                  className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-300 border border-red-500/30 rounded-xs cursor-pointer transition-colors ml-2"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black text-[#c2a275] hover:text-white border border-white/15 rounded-full cursor-pointer transition-all shadow-2xl"
              title="Foto anterior (Flecha izquierda)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => {
                setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
                setZoomLevel(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black text-[#c2a275] hover:text-white border border-white/15 rounded-full cursor-pointer transition-all shadow-2xl"
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
                className="max-h-[72vh] max-w-full object-contain rounded-xs shadow-2xl transition-transform duration-200"
              />
            </div>

            {/* Bottom Technical Note Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/85 backdrop-blur-md p-4 sm:p-5 rounded-xs border border-[#c2a275]/30 max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#c2a275] font-label-caps uppercase text-[10px] tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-teal-uno" />
                  <span>{activePhoto.location}</span>
                  <span>•</span>
                  <Calendar className="w-3.5 h-3.5 text-[#c2a275]" />
                  <span>{activePhoto.date}</span>
                </div>
                <p className="text-[#e4ded5] text-xs leading-relaxed italic">
                  "{activePhoto.technicalNote}"
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <span className="text-[10px] text-zinc-400 font-mono block">
                  {lightboxIndex + 1} de {filteredPhotos.length}
                </span>
                {activePhoto.isReframed360 && (
                  <span className="text-[10px] text-teal-uno font-label-caps uppercase tracking-wider">
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

