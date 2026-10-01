import React, { useState, useEffect, useMemo, useRef } from "react";
import { 
  FileText, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Microscope, 
  HardHat, 
  ExternalLink, 
  Compass, 
  Camera, 
  FolderOpen,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Download,
  Filter,
  Layers,
  History,
  X
} from "lucide-react";
import { DigitalLogbookEntry } from "../../types/clientPortal";
import BitacoraCardGalleryCarousel from "./BitacoraCardGalleryCarousel";

interface DigitalLogbookTimelineProps {
  entries: DigitalLogbookEntry[];
  bitacoraFotograficaUrl?: string;
  bitacoraDigitalUrl?: string;
  masterDriveFolderUrl?: string;
  selectedDate?: string;
  onSelectDate?: (date: string) => void;
  onJumpTo360?: () => void;
  onJumpToPhotos?: () => void;
}

export default function DigitalLogbookTimeline({
  entries,
  bitacoraFotograficaUrl = "https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link",
  bitacoraDigitalUrl = "https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link",
  masterDriveFolderUrl = "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing",
  selectedDate,
  onSelectDate,
  onJumpTo360,
  onJumpToPhotos,
}: DigitalLogbookTimelineProps) {
  const [fullscreenCarouselEntryId, setFullscreenCarouselEntryId] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const validEntries = useMemo(() => {
    return (Array.isArray(entries) ? entries : []).filter(
      (e) => e && e.id && typeof e.entryNumber === "string" && e.entryNumber.trim().length > 0 && e.phaseTitle
    );
  }, [entries]);

  // Default to the latest registered entry (last item in chronological array)
  const [selectedEntryIndex, setSelectedEntryIndex] = useState<number>(() => {
    return Math.max(0, validEntries.length - 1);
  });

  // Synchronize when parent selectedDate changes
  useEffect(() => {
    if (!selectedDate || validEntries.length === 0) return;
    const matchIdx = validEntries.findIndex(
      (e) => e.date === selectedDate || selectedDate.includes(e.date) || e.date.includes(selectedDate)
    );
    if (matchIdx !== -1) {
      setSelectedEntryIndex(matchIdx);
    }
  }, [selectedDate, validEntries]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const latestIndex = Math.max(0, validEntries.length - 1);
  const activeEntry = validEntries[selectedEntryIndex] || validEntries[latestIndex];
  const isLatest = selectedEntryIndex === latestIndex;

  const handleSelectEntry = (index: number) => {
    if (index >= 0 && index < validEntries.length) {
      setSelectedEntryIndex(index);
      setShowDropdown(false);
      const targetEntry = validEntries[index];
      if (targetEntry && onSelectDate) {
        onSelectDate(targetEntry.date);
      }
    }
  };

  const handlePrev = () => {
    if (selectedEntryIndex > 0) {
      handleSelectEntry(selectedEntryIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedEntryIndex < validEntries.length - 1) {
      handleSelectEntry(selectedEntryIndex + 1);
    }
  };

  if (!activeEntry) {
    return null;
  }

  const isCompleted = activeEntry.status === "completed";
  const isProjected = activeEntry.status === "projected";

  return (
    <div className="space-y-6 font-sans text-left">
      {/* 1. TOP EXECUTIVE REPOSITORY BANNER */}
      <div className="bg-gradient-to-br from-white/95 via-surface-container-low/90 to-white/90 backdrop-blur-xl border border-arena-calida/40 p-6 sm:p-8 rounded-3xl shadow-ethereal space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-uno animate-pulse" />
              <span className="text-[11px] font-label-caps uppercase tracking-widest text-arena-calida font-bold">
                Bitácora Digital Oficial & Archivo de Documentos
              </span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl text-teal-uno uppercase font-bold tracking-tight">
              Trazabilidad Técnica de Obra & Fichas Semanales
            </h3>
            <p className="text-xs sm:text-sm text-gris-texto font-body-md max-w-2xl leading-relaxed">
              Registro continuo de bitácoras de obra civil en formato PDF oficial, dictámenes de supervisión técnica, control de cuadrilla en sitio y galería de fotos sincronizada por fecha.
            </p>
          </div>

          {/* DUAL CLOUD REPOSITORY BUTTONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            {/* LINK 1: BITÁCORA FOTOGRÁFICA */}
            <a
              href={bitacoraFotograficaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white hover:bg-teal-uno hover:text-white text-teal-uno border border-teal-uno/30 hover:border-teal-uno rounded-2xl text-xs font-label-caps uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all shadow-xs hover:shadow-md cursor-pointer group"
              title="Abrir carpeta oficial de fotos en Google Drive"
            >
              <Camera className="w-4 h-4 text-arena-calida group-hover:text-white transition-colors" />
              <span>02 Bitácora Fotográfica</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            </a>

            {/* LINK 2: BITÁCORA DIGITAL */}
            <a
              href={bitacoraDigitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-teal-uno hover:bg-arena-calida text-white rounded-2xl text-xs font-label-caps uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg cursor-pointer group"
              title="Abrir carpeta oficial de bitácora técnica digital en Google Drive"
            >
              <FileText className="w-4 h-4 text-arena-calida group-hover:text-white transition-colors" />
              <span>03 Bitácora Digital ({validEntries.length} PDFs)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-arena-calida/20">
          <div className="p-3.5 bg-surface-variant/30 rounded-2xl border border-arena-calida/20">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida font-semibold block mb-0.5">
              Total de Fichas
            </span>
            <span className="font-headline-md text-sm sm:text-base font-bold text-teal-uno block">
              {validEntries.length} Documentos PDF
            </span>
          </div>
          <div className="p-3.5 bg-surface-variant/30 rounded-2xl border border-arena-calida/20">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida font-semibold block mb-0.5">
              Rango Cronológico
            </span>
            <span className="font-headline-md text-xs sm:text-sm font-bold text-teal-uno block truncate">
              {validEntries[0]?.date || "Abril"} → {validEntries[validEntries.length - 1]?.date || "Septiembre"}
            </span>
          </div>
          <div className="p-3.5 bg-surface-variant/30 rounded-2xl border border-arena-calida/20">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida font-semibold block mb-0.5">
              Ensayes & Calidad
            </span>
            <span className="font-headline-md text-sm sm:text-base font-bold text-emerald-700 block flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 inline" /> 100% Aprobados
            </span>
          </div>
          <div className="p-3.5 bg-surface-variant/30 rounded-2xl border border-arena-calida/20">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida font-semibold block mb-0.5">
              Dirección de Obra
            </span>
            <span className="font-headline-md text-sm sm:text-base font-bold text-teal-uno block truncate">
              Arq. Angel Cereceda
            </span>
          </div>
        </div>
      </div>

      {/* 2. COMPACT & CLEAN DATE / FOLIO SELECTOR BAR */}
      <div className="relative z-30 bg-white/95 backdrop-blur-xl border border-arena-calida/30 p-4 sm:p-5 rounded-3xl shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* LEFT: CUSTOM DROPDOWN SELECTOR FOR THE ACTIVE BITÁCORA */}
          <div className="relative z-40 flex-1" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full sm:w-auto min-w-[280px] md:min-w-[360px] px-4 py-3 bg-surface-container-low/90 hover:bg-surface-container-low border border-arena-calida/40 hover:border-teal-uno rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition-all shadow-2xs group text-left"
            >
              <div className="flex items-center gap-3 truncate">
                <div className="w-9 h-9 rounded-xl bg-teal-uno/15 border border-teal-uno/30 flex items-center justify-center text-teal-uno flex-shrink-0 font-bold font-mono text-xs">
                  {activeEntry.progress}%
                </div>
                <div className="truncate space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-teal-uno">
                      {activeEntry.entryNumber}
                    </span>
                    <span className="text-[11px] font-label-caps uppercase tracking-wider text-gris-texto font-bold">
                      {activeEntry.date}
                    </span>
                    {isLatest && (
                      <span className="px-2 py-0.5 rounded-full bg-teal-uno text-white text-[8px] font-mono font-bold uppercase tracking-wider">
                        ÚLTIMA
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gris-texto/80 truncate font-medium">
                    {activeEntry.phaseTitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-arena-calida group-hover:text-teal-uno transition-colors flex-shrink-0">
                <span className="text-[10px] font-label-caps uppercase tracking-wider hidden lg:inline font-semibold">
                  Cambiar Fecha
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
              </div>
            </button>

            {/* DROPDOWN MENU WITH ALL 18 BITÁCORAS (SORTED REVERSE CHRONOLOGICAL) */}
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-[420px] max-h-[380px] overflow-y-auto bg-white/98 backdrop-blur-2xl border border-arena-calida/40 rounded-2xl shadow-2xl z-50 p-2 space-y-1 text-left ring-1 ring-black/5">
                <div className="px-3 py-2 text-[10px] font-label-caps uppercase text-arena-calida tracking-widest border-b border-arena-calida/20 font-bold flex items-center justify-between">
                  <span>Seleccionar Ficha de Bitácora ({validEntries.length} Disponibles)</span>
                  <span className="text-gris-texto/60">Recientes primero</span>
                </div>

                {validEntries
                  .map((entry, originalIdx) => ({ entry, originalIdx }))
                  .reverse()
                  .map(({ entry, originalIdx }) => {
                    const isSelected = originalIdx === selectedEntryIndex;
                    const isLatestEntry = originalIdx === latestIndex;

                    return (
                      <button
                        key={entry.id}
                        type="button"
                        onClick={() => handleSelectEntry(originalIdx)}
                        className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          isSelected
                            ? "bg-teal-uno text-white font-bold shadow-xs"
                            : "hover:bg-surface-container-low text-gris-texto"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0 ${
                            isSelected ? "bg-white/20 text-white" : "bg-arena-calida/20 text-teal-uno"
                          }`}>
                            {entry.progress}%
                          </span>
                          <div className="truncate">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-mono font-bold">{entry.entryNumber}</span>
                              <span className="text-[11px] opacity-90">• {entry.date}</span>
                              {isLatestEntry && (
                                <span className={`px-1.5 py-0.2 rounded text-[8px] font-mono uppercase font-bold ${
                                  isSelected ? "bg-white text-teal-uno" : "bg-teal-uno/15 text-teal-uno"
                                }`}>
                                  Última
                                </span>
                              )}
                            </div>
                            <p className={`text-[10px] truncate ${isSelected ? "text-white/90" : "text-gris-texto/70"}`}>
                              {entry.phaseTitle}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
              </div>
            )}
          </div>

          {/* RIGHT: NAVIGATION BUTTONS (PREV / NEXT / GO TO LATEST) */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Quick jump to latest if not on latest */}
            {!isLatest && (
              <button
                type="button"
                onClick={() => handleSelectEntry(latestIndex)}
                className="px-3 py-2 bg-teal-uno/15 hover:bg-teal-uno hover:text-white text-teal-uno border border-teal-uno/30 rounded-xl text-[11px] font-label-caps uppercase tracking-wider font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
                title="Volver a la bitácora más reciente"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ver Última (S36)</span>
              </button>
            )}

            <button
              type="button"
              onClick={handlePrev}
              disabled={selectedEntryIndex === 0}
              className="px-3 py-2 bg-white hover:bg-surface-container-low disabled:opacity-40 disabled:hover:bg-white text-gris-texto border border-arena-calida/30 rounded-xl text-xs font-label-caps uppercase font-bold transition-all cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 shadow-2xs"
              title="Ver bitácora de la semana anterior"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <span className="px-2.5 py-1 bg-surface-variant/40 rounded-lg text-[10px] font-mono text-arena-calida font-bold">
              {selectedEntryIndex + 1} / {validEntries.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={selectedEntryIndex === latestIndex}
              className="px-3 py-2 bg-white hover:bg-surface-container-low disabled:opacity-40 disabled:hover:bg-white text-gris-texto border border-arena-calida/30 rounded-xl text-xs font-label-caps uppercase font-bold transition-all cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 shadow-2xs"
              title="Ver bitácora de la siguiente semana"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. THE SINGLE ACTIVE BITÁCORA CARD (CLEAN & COMPLETE) */}
      <div
        key={activeEntry.id}
        className="relative z-10 rounded-3xl border border-teal-uno/40 bg-white/95 backdrop-blur-xl shadow-ethereal overflow-hidden transition-all duration-300 ring-1 ring-teal-uno/20"
      >
        {/* TOP ACCENT STRIPE */}
        {isLatest && (
          <div className="w-full h-1.5 bg-gradient-to-r from-teal-uno via-arena-calida to-teal-uno" />
        )}

        {/* HEADER SUMMARY ROW */}
        <div className="p-6 sm:p-8 border-b border-arena-calida/20 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              {/* Progress Square */}
              <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 font-mono shadow-xs ${
                isCompleted 
                  ? "bg-teal-uno text-white" 
                  : "bg-arena-calida/20 text-arena-calida border border-arena-calida/30"
              }`}>
                <span className="text-base font-bold leading-none">{activeEntry.progress}%</span>
                <span className="text-[8px] uppercase tracking-wider mt-0.5 opacity-90 font-sans">Avance</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-arena-calida/15 text-arena-calida text-[11px] font-mono font-bold border border-arena-calida/30 uppercase">
                    {activeEntry.entryNumber}
                  </span>
                  <span className="text-xs sm:text-sm font-label-caps uppercase tracking-wider font-bold text-gris-texto flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-uno" />
                    {activeEntry.date}
                  </span>
                  {isLatest && (
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno text-[10px] font-label-caps uppercase font-bold border border-teal-uno/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> ÚLTIMA REGISTRADA
                    </span>
                  )}
                  {isCompleted && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-label-caps uppercase font-bold border border-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Dictamen Aprobado
                    </span>
                  )}
                  {activeEntry.scenes360Count && activeEntry.scenes360Count > 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/10 text-teal-uno text-[10px] font-label-caps uppercase font-bold border border-teal-uno/20 flex items-center gap-1">
                      <Compass className="w-3 h-3" /> {activeEntry.scenes360Count} Puntos 360°
                    </span>
                  )}
                </div>

                <h4 className="font-headline-md text-lg sm:text-2xl uppercase text-teal-uno font-bold tracking-tight">
                  {activeEntry.phaseTitle}
                </h4>
              </div>
            </div>

            {/* DIRECT PDF BUTTON IN HEADER */}
            {activeEntry.pdfDriveUrl && (
              <a
                href={activeEntry.pdfDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-xs font-label-caps uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer font-bold self-start md:self-center flex-shrink-0"
                title="Abrir PDF oficial de esta bitácora en Google Drive"
              >
                <FileText className="w-4 h-4" />
                <span>Abrir PDF Oficial</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            )}
          </div>
        </div>

        {/* FULL CONTENT DETAIL BODY */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
          
          {/* TOUR 360 & LEVANTAMIENTO TÉCNICO HIGHLIGHT (IF PRESENT) */}
          {activeEntry.tourInfo && (
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white via-surface-container-low/90 to-white/95 border border-teal-uno/40 shadow-xs relative overflow-hidden space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold text-teal-uno flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    Levantamiento 360° Sincronizado ({activeEntry.tourInfo.date})
                  </span>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-arena-calida/15 text-arena-calida border border-arena-calida/30">
                  {activeEntry.tourInfo.progress}% Avance
                </span>
              </div>

              <h5 className="font-headline-md text-base sm:text-lg uppercase text-teal-uno font-semibold">
                {activeEntry.tourInfo.title}
              </h5>

              <p className="font-body-md text-xs sm:text-sm text-gris-texto leading-relaxed">
                {activeEntry.tourInfo.notes}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3.5 border-t border-arena-calida/20 text-[11px] font-label-caps uppercase">
                {onJumpTo360 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectDate) onSelectDate(activeEntry.tourInfo!.date);
                      onJumpTo360();
                    }}
                    className="px-4 py-2 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-xs font-label-caps uppercase font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95"
                    title="Explorar puntos esféricos en el Visor 360° situado arriba"
                  >
                    <Compass className="w-4 h-4 animate-spin-slow" />
                    <span>Ver en Visor 360° ({activeEntry.tourInfo.scenes360Count} Puntos HD)</span>
                  </button>
                )}

                {activeEntry.tourInfo.encuadradasCount && (
                  <span className="flex items-center gap-1.5 text-arena-calida font-semibold">
                    <Camera className="w-3.5 h-3.5" />
                    <span>{activeEntry.tourInfo.encuadradasCount} FOTOS ENCUADRADAS</span>
                  </span>
                )}

                {activeEntry.tourInfo.folderUrl && (
                  <a
                    href={activeEntry.tourInfo.folderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1.5 text-teal-uno hover:text-arena-calida font-bold transition-colors cursor-pointer"
                    title="Abrir carpeta de recorrido 360° en Google Drive"
                  >
                    <FolderOpen className="w-3.5 h-3.5 text-arena-calida" />
                    <span>Carpeta 360° Drive</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* EXECUTIVE SUMMARY */}
          <div className="p-5 rounded-2xl bg-surface-container-low/80 border border-arena-calida/25 space-y-2">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-bold block flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-teal-uno" />
              Resumen Oficial de Bitácora de Obra
            </span>
            <p className="text-gris-texto font-body-md leading-relaxed text-xs sm:text-sm">
              {activeEntry.executiveSummary}
            </p>
          </div>

          {/* TECHNICAL DICTUM */}
          <div className="p-5 rounded-2xl bg-teal-uno/5 border border-teal-uno/20 space-y-2">
            <span className="text-[10px] font-label-caps uppercase text-teal-uno tracking-wider font-bold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> Dictamen Técnico de Supervisión
            </span>
            <p className="text-gris-texto font-body-md leading-relaxed text-xs sm:text-sm">
              {activeEntry.technicalDictum}
            </p>
          </div>

          {/* LAB TESTS & QUALITY CONTROL */}
          {activeEntry.labTestsAndQuality && activeEntry.labTestsAndQuality.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-bold flex items-center gap-1.5">
                <Microscope className="w-3.5 h-3.5 text-teal-uno" />
                Pruebas de Calidad & Controles en Sitio
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeEntry.labTestsAndQuality.map((test, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-3.5 bg-white/80 border border-arena-calida/30 rounded-xl flex items-start gap-2.5 text-xs text-gris-texto shadow-2xs font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* KEY MILESTONES */}
          {activeEntry.keyMilestones && activeEntry.keyMilestones.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-uno" />
                Hitos Constructivos Ejecutados
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeEntry.keyMilestones.map((km, kIdx) => (
                  <li
                    key={kIdx}
                    className="p-3 bg-surface-variant/40 rounded-xl border border-arena-calida/20 text-xs text-gris-texto flex items-center gap-2 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal-uno flex-shrink-0" />
                    <span>{km}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. EMBEDDED PHOTO GALLERY & CAROUSEL FOR THIS WEEK */}
          {activeEntry.photos && activeEntry.photos.length > 0 && (
            <div className="pt-2">
              <BitacoraCardGalleryCarousel
                photos={activeEntry.photos}
                folderDriveUrl={activeEntry.photographicLogUrl}
                weekTitle={activeEntry.phaseTitle}
                weekDate={activeEntry.date}
                entryNumber={activeEntry.entryNumber}
                isOpenFullscreen={fullscreenCarouselEntryId === activeEntry.id}
                onCloseFullscreen={() => setFullscreenCarouselEntryId("")}
              />
            </div>
          )}

          {/* METADATA FOOTER: PERSONNEL & QUICK ACTIONS */}
          <div className="pt-5 border-t border-arena-calida/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 text-[11px] text-gris-texto/80 font-sans">
              <div className="flex items-center gap-1.5">
                <HardHat className="w-3.5 h-3.5 text-teal-uno" />
                <span><strong>Cuadrilla en Sitio:</strong> {activeEntry.personnelOnSite}</span>
              </div>
              <div className="text-[10px] text-arena-calida font-label-caps uppercase font-semibold">
                Supervisado por: {activeEntry.inspectedBy}
              </div>
              {activeEntry.pdfFileName && (
                <div className="text-[10px] text-gris-texto/60 font-mono">
                  Documento: {activeEntry.pdfFileName}
                </div>
              )}
            </div>

            {/* QUICK ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
              {/* 1. DIRECT OFFICIAL PDF */}
              {activeEntry.pdfDriveUrl && (
                <a
                  href={activeEntry.pdfDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold"
                  title="Abrir PDF oficial de esta bitácora en Google Drive"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver PDF Oficial</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              )}

              {/* 2. DIRECT WEEKLY PHOTO EVIDENCE FOLDER */}
              {activeEntry.photographicLogUrl && (
                <a
                  href={activeEntry.photographicLogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white hover:bg-arena-calida hover:text-white text-gris-texto border border-arena-calida/50 rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold group/btn"
                  title={`Abrir carpeta de fotos de evidencia (${activeEntry.photosCount || 0} fotos) en Google Drive`}
                >
                  <Camera className="w-3.5 h-3.5 text-arena-calida group-hover/btn:text-white" />
                  <span>Fotos en Drive ({activeEntry.photosCount || 0})</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}

              {/* 3. CAROUSEL JUMP / FULLSCREEN MODAL */}
              {activeEntry.photos && activeEntry.photos.length > 0 && (
                <button
                  type="button"
                  onClick={() => setFullscreenCarouselEntryId(activeEntry.id)}
                  className="px-4 py-2 bg-arena-calida hover:bg-teal-uno text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold"
                  title="Ver carrusel ampliado de fotografías"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ver en Carrusel ({activeEntry.photos.length})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
