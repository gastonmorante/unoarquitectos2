import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  Camera, 
  Calendar, 
  FolderOpen, 
  FileText, 
  ExternalLink, 
  Compass, 
  Tag, 
  MapPin, 
  Award, 
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { PhotoReport } from "../../types/clientPortal";

interface BitacoraCarouselProps {
  photoReports: PhotoReport[];
  selectedPeriod?: string;
  bitacoraFotograficaUrl?: string;
  bitacoraDigitalUrl?: string;
  onSelectPeriod?: (period: string) => void;
  onJumpTo360?: () => void;
}

export default function BitacoraCarousel({
  photoReports,
  selectedPeriod,
  bitacoraFotograficaUrl = "https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link",
  bitacoraDigitalUrl = "https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link",
  onSelectPeriod,
  onJumpTo360,
}: BitacoraCarouselProps) {
  // Filter list by unique periods
  const periods = ["Todos", ...Array.from(new Set(photoReports.map((p) => p.period)))];
  const [activeFilter, setActiveFilter] = useState<string>(selectedPeriod || "Todos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Sync external period
  useEffect(() => {
    if (selectedPeriod && periods.includes(selectedPeriod)) {
      setActiveFilter(selectedPeriod);
      setCurrentIndex(0);
    }
  }, [selectedPeriod]);

  // Filtered photos
  const filteredPhotos = activeFilter === "Todos" 
    ? photoReports 
    : photoReports.filter((p) => p.period === activeFilter);

  const activePhoto = filteredPhotos[currentIndex] || filteredPhotos[0];

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && filteredPhotos.length > 1) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredPhotos.length, isFullscreen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  if (!filteredPhotos || filteredPhotos.length === 0) {
    return (
      <div className="p-8 text-center bg-white/70 rounded-3xl border border-arena-calida/30 text-xs text-gris-texto">
        No se encontraron fotografías para el periodo seleccionado.
      </div>
    );
  }

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
    <div className={`space-y-6 font-sans text-left transition-all duration-300 ${
      isFullscreen ? "fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl p-4 sm:p-8 flex flex-col justify-between overflow-y-auto" : ""
    }`}>
      {/* 1. CAROUSEL TOP BAR: TITLE, FILTERS & DRIVE ACCESS */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-arena-calida/20 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
            <Camera className="w-4 h-4 text-teal-uno" />
            <span>Galería Fotográfica Cronológica de Bitácora</span>
          </div>
          <h3 className="font-headline-md text-xl sm:text-2xl text-teal-uno uppercase font-bold mt-1">
            Carrusel de Supervisión de Obra • {activeFilter === "Todos" ? "Todos los Levantamientos" : activeFilter}
          </h3>
        </div>

        {/* DRIVE CLOUD ACTIONS */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={bitacoraFotograficaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/90 hover:bg-teal-uno hover:text-white text-teal-uno border border-arena-calida/40 rounded-full text-xs font-label-caps uppercase tracking-wider font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer group"
            title="Abrir 02 Bitácora Fotográfica en Google Drive"
          >
            <Camera className="w-3.5 h-3.5 text-arena-calida group-hover:text-white" />
            <span>02 Bitácora Fotográfica</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <a
            href={bitacoraDigitalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-uno/10 hover:bg-teal-uno hover:text-white text-teal-uno border border-teal-uno/30 rounded-full text-xs font-label-caps uppercase tracking-wider font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer group"
            title="Abrir 03 Bitácora Digital en Google Drive"
          >
            <FileText className="w-3.5 h-3.5 text-arena-calida group-hover:text-white" />
            <span>03 Bitácora Digital</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* 2. PERIOD SELECTOR PILLS */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <span className="text-[10px] font-label-caps uppercase text-arena-calida font-semibold flex-shrink-0 mr-1 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-teal-uno" /> Periodo:
        </span>
        {periods.map((p) => {
          const isSelected = activeFilter === p;
          const count = p === "Todos" ? photoReports.length : photoReports.filter(pr => pr.period === p).length;
          return (
            <button
              key={p}
              onClick={() => {
                setActiveFilter(p);
                setCurrentIndex(0);
                if (onSelectPeriod) onSelectPeriod(p);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-label-caps uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex-shrink-0 flex items-center gap-1.5 font-semibold ${
                isSelected
                  ? "bg-teal-uno text-white shadow-sm"
                  : "bg-white/80 hover:bg-arena-calida/20 text-gris-texto border border-arena-calida/30"
              }`}
            >
              <span>{p}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? "bg-white/20 text-white" : "bg-arena-calida/15 text-arena-calida"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN CAROUSEL DISPLAY CONTAINER */}
      <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-arena-calida/30 shadow-2xl aspect-[16/10] sm:aspect-[16/9] max-h-[640px] flex items-center justify-center group">
        <AnimatePresence mode="wait">
          {activePhoto && (
            <motion.div
              key={activePhoto.id || currentIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* PICTURE ELEMENT WITH WEBP OPTIMIZATION & JPG FALLBACK */}
              <picture className="w-full h-full block">
                <source srcSet={getWebpUrl(activePhoto.imageUrl)} type="image/webp" />
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700"
                />
              </picture>

              {/* TOP-LEFT TAGS & BADGES */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-[10px] font-label-caps uppercase tracking-wider font-bold">
                  {activePhoto.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-uno/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-label-caps uppercase tracking-wider font-bold">
                  {activePhoto.category}
                </span>
                {activePhoto.isReframed360 && (
                  <span className="px-3 py-1 rounded-full bg-arena-calida/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-label-caps uppercase tracking-wider font-bold flex items-center gap-1">
                    <Compass className="w-3 h-3" /> Reframe 360° HD
                  </span>
                )}
              </div>

              {/* TOP-RIGHT CONTROLS: PLAY/PAUSE & FULLSCREEN */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer shadow-md"
                  title={isPlaying ? "Pausar reproducción automática" : "Reproducir carrusel automáticamente"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer shadow-md"
                  title={isFullscreen ? "Salir de pantalla completa" : "Ver en pantalla completa"}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>

              {/* BOTTOM INFORMATION OVERLAY */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 sm:p-8 pt-16 text-white space-y-2 text-left">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-arena-calida text-xs font-label-caps uppercase tracking-wider font-bold">
                    <MapPin className="w-3.5 h-3.5 text-arena-calida" />
                    <span>{activePhoto.location}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold">
                    {currentIndex + 1} / {filteredPhotos.length}
                  </span>
                </div>

                <h4 className="font-headline-md text-base sm:text-xl font-bold uppercase tracking-tight text-white line-clamp-1">
                  {activePhoto.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-200 font-body-md leading-relaxed line-clamp-2 sm:line-clamp-3 max-w-4xl">
                  <strong className="text-arena-calida font-semibold">Dictamen Técnico:</strong> {activePhoto.technicalNote}
                </p>

                {/* DIRECT ACTION BUTTONS IN OVERLAY */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <a
                    href={bitacoraFotograficaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-white/20 hover:bg-white text-white hover:text-teal-uno backdrop-blur-md rounded-full text-[11px] font-label-caps uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 border border-white/30 cursor-pointer"
                  >
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Descargar en Google Drive</span>
                  </a>

                  {onJumpTo360 && (
                    <button
                      onClick={onJumpTo360}
                      className="px-3.5 py-1.5 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Ver Punto en 360°</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LEFT & RIGHT ARROWS */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-black/40 hover:bg-teal-uno text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-xl hover:scale-110 active:scale-95"
          aria-label="Fotografía anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-black/40 hover:bg-teal-uno text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-xl hover:scale-110 active:scale-95"
          aria-label="Fotografía siguiente"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 4. BOTTOM THUMBNAIL TRACK STRIP */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-label-caps uppercase tracking-wider text-arena-calida font-semibold px-1">
          <span>Selección Rápida de Fotografías ({filteredPhotos.length} Tomas)</span>
          <span className="font-mono text-gris-texto">{currentIndex + 1} de {filteredPhotos.length}</span>
        </div>

        <div
          ref={thumbnailContainerRef}
          className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar"
        >
          {filteredPhotos.map((photo, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={photo.id || idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-teal-uno ring-2 ring-teal-uno/40 scale-105 shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100 hover:border-arena-calida"
                }`}
              >
                <picture className="w-full h-full block">
                  <source srcSet={getWebpUrl(photo.imageUrl)} type="image/webp" />
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
                <div className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-white font-mono text-center truncate px-1 py-0.5">
                  #{idx + 1}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
