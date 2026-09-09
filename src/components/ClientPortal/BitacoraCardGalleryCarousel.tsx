import React, { useState, useEffect, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  ExternalLink, 
  Camera, 
  Sparkles, 
  Image as ImageIcon,
  ZoomIn,
  Download
} from "lucide-react";
import { BitacoraPhoto } from "../../types/clientPortal";

interface BitacoraCardGalleryCarouselProps {
  photos?: BitacoraPhoto[];
  folderDriveUrl?: string;
  weekTitle: string;
  weekDate: string;
  entryNumber?: string;
  isOpenFullscreen?: boolean;
  onCloseFullscreen?: () => void;
}

export default function BitacoraCardGalleryCarousel({
  photos = [],
  folderDriveUrl,
  weekTitle,
  weekDate,
  entryNumber,
  isOpenFullscreen = false,
  onCloseFullscreen
}: BitacoraCardGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(isOpenFullscreen);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpenFullscreen) {
      setIsFullscreen(true);
    }
  }, [isOpenFullscreen]);

  const totalPhotos = photos.length;

  const nextSlide = useCallback(() => {
    if (totalPhotos === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
    setIsLoaded(false);
  }, [totalPhotos]);

  const prevSlide = useCallback(() => {
    if (totalPhotos === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
    setIsLoaded(false);
  }, [totalPhotos]);

  // Keyboard navigation for fullscreen
  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") {
        setIsFullscreen(false);
        if (onCloseFullscreen) onCloseFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, nextSlide, prevSlide, onCloseFullscreen]);

  if (totalPhotos === 0) {
    return (
      <div className="p-4 rounded-2xl bg-surface-variant/30 border border-arena-calida/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gris-texto">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-arena-calida" />
          <span>Evidencia fotográfica archivada en Google Drive</span>
        </div>
        {folderDriveUrl && (
          <a
            href={folderDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-white hover:bg-teal-uno hover:text-white border border-arena-calida/30 rounded-full text-[11px] font-label-caps uppercase flex items-center gap-1.5 transition-colors font-bold text-teal-uno"
          >
            <span>Ver Carpeta en Drive</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    );
  }

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div className="space-y-3">
      {/* SECTION TITLE & BADGE */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-bold flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-teal-uno" />
          Evidencia Fotográfica de la Semana ({totalPhotos} Fotos)
        </span>
        <div className="flex items-center gap-2 text-[10px] font-mono text-gris-texto/70">
          <span>{currentIndex + 1} / {totalPhotos}</span>
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="p-1 rounded-md hover:bg-teal-uno/10 text-teal-uno hover:text-teal-uno transition-colors cursor-pointer flex items-center gap-1 font-label-caps uppercase font-semibold text-[10px]"
            title="Ver en pantalla completa"
          >
            <Maximize2 className="w-3 h-3" />
            <span className="hidden sm:inline">Ampliar</span>
          </button>
        </div>
      </div>

      {/* EMBEDDED CAROUSEL VIEWPORT */}
      <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-arena-calida/30 shadow-xs aspect-[16/10] sm:aspect-[16/9] group">
        {/* Active Image */}
        <img
          src={currentPhoto.url}
          alt={currentPhoto.caption || `Foto ${currentIndex + 1}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onClick={() => setIsFullscreen(true)}
          className={`w-full h-full object-cover sm:object-contain transition-all duration-300 cursor-zoom-in ${
            isLoaded ? "opacity-100 scale-100" : "opacity-40 scale-98 blur-xs"
          }`}
        />

        {/* TOP OVERLAYS: BADGES */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/10 shadow-xs">
            Foto {currentIndex + 1} de {totalPhotos}
          </span>

          {currentPhoto.driveUrl && (
            <a
              href={currentPhoto.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-2.5 py-1 rounded-full bg-stone-900/80 hover:bg-teal-uno backdrop-blur-md text-white text-[10px] font-label-caps uppercase font-bold border border-white/10 shadow-xs flex items-center gap-1 pointer-events-auto transition-colors"
              title="Abrir imagen original en Google Drive"
            >
              <span>Drive Original</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>

        {/* BOTTOM OVERLAY: CAPTION */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-3 pt-6 flex items-end justify-between gap-2 pointer-events-none">
          <p className="text-white/95 text-[11px] sm:text-xs font-sans font-medium line-clamp-1">
            {currentPhoto.caption || `Registro fotográfico en sitio • ${weekDate}`}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(true);
            }}
            className="px-2 py-1 rounded-md bg-white/20 hover:bg-white text-white hover:text-stone-950 text-[10px] font-label-caps uppercase font-bold backdrop-blur-md transition-colors pointer-events-auto flex items-center gap-1 flex-shrink-0 cursor-pointer"
          >
            <ZoomIn className="w-3 h-3" />
            <span>Ver Completa</span>
          </button>
        </div>

        {/* NAVIGATION CHEVRONS */}
        {totalPhotos > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-900/70 hover:bg-teal-uno text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer shadow-md"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-900/70 hover:bg-teal-uno text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer shadow-md"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* THUMBNAIL STRIP */}
      {totalPhotos > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-arena-calida/40">
          {photos.map((p, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={p.id || idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsLoaded(false);
                }}
                className={`relative flex-shrink-0 w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                  isActive
                    ? "border-teal-uno ring-2 ring-teal-uno shadow-xs scale-105"
                    : "border-arena-calida/30 opacity-60 hover:opacity-100 hover:border-teal-uno/50"
                }`}
              >
                <img
                  src={p.url}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-teal-uno/10" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => {
            setIsFullscreen(false);
            if (onCloseFullscreen) onCloseFullscreen();
          }}
        >
          {/* TOP HEADER */}
          <div 
            className="flex items-center justify-between text-white border-b border-white/10 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                {entryNumber && (
                  <span className="px-2 py-0.5 rounded bg-teal-uno/30 text-teal-200 font-mono text-[10px] font-bold border border-teal-uno/40">
                    {entryNumber}
                  </span>
                )}
                <span className="text-xs font-label-caps uppercase text-arena-calida tracking-wider font-bold">
                  {weekDate}
                </span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-xs font-mono text-white/70 font-semibold">
                  Foto {currentIndex + 1} de {totalPhotos}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-headline-md uppercase text-white font-semibold">
                {weekTitle}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {currentPhoto.driveUrl && (
                <a
                  href={currentPhoto.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-teal-uno text-white text-xs font-label-caps uppercase font-bold flex items-center gap-1.5 transition-colors border border-white/15 cursor-pointer"
                  title="Abrir imagen original en Google Drive"
                >
                  <span>Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {folderDriveUrl && (
                <a
                  href={folderDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-arena-calida/20 hover:bg-arena-calida text-arena-calida hover:text-white text-xs font-label-caps uppercase font-bold flex items-center gap-1.5 transition-colors border border-arena-calida/30 cursor-pointer hidden sm:flex"
                  title="Abrir carpeta semanal completa en Google Drive"
                >
                  <Camera className="w-3 h-3" />
                  <span>Carpeta Drive</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsFullscreen(false);
                  if (onCloseFullscreen) onCloseFullscreen();
                }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Cerrar (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MAIN HIGH-RES IMAGE VIEWPORT */}
          <div 
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.url}
              alt={currentPhoto.caption || `Foto ${currentIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl transition-transform duration-200 select-none"
            />

            {/* LIGHTBOX CHEVRONS */}
            {totalPhotos > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-teal-uno text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-teal-uno text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* BOTTOM CAPTION & THUMBNAILS IN LIGHTBOX */}
          <div 
            className="border-t border-white/10 pt-3 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white/90">
              <p className="text-xs sm:text-sm font-sans font-medium text-center sm:text-left">
                {currentPhoto.caption || `Registro fotográfico en sitio • ${weekDate}`}
              </p>
              <span className="text-[11px] font-mono text-white/50 text-center sm:text-right">
                Usa las flechas del teclado (← / →) o desliza para navegar
              </span>
            </div>

            {/* Thumbnails in Lightbox */}
            {totalPhotos > 1 && (
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 max-w-4xl mx-auto scrollbar-thin scrollbar-thumb-white/20">
                {photos.map((p, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={p.id || idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative flex-shrink-0 w-12 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        isActive
                          ? "border-teal-uno ring-2 ring-teal-uno shadow-md scale-105"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={p.url}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
