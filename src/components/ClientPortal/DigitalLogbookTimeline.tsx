import React, { useState } from "react";
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
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Download,
  Filter
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
  onJumpToCarousel?: () => void;
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
  onJumpToCarousel,
}: DigitalLogbookTimelineProps) {
  const [expandedEntryId, setExpandedEntryId] = useState<string>(
    entries.find(e => e.date === selectedDate)?.id || entries[entries.length - 1]?.id || entries[0]?.id || ""
  );
  const [fullscreenCarouselEntryId, setFullscreenCarouselEntryId] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  const availableMonths = Array.from(new Set(entries.map(e => e.month))).filter(Boolean);

  const filteredEntries = selectedMonth === "all" 
    ? entries 
    : entries.filter(e => e.month === selectedMonth);

  return (
    <div className="space-y-8 font-sans text-left">
      {/* 1. TOP EXECUTIVE REPOSITORY BANNER (UNITING BOTH DRIVE LINKS) */}
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
              <span>03 Bitácora Digital ({entries.length} PDFs)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-arena-calida/20">
          <div className="p-3.5 bg-surface-variant/30 rounded-2xl border border-arena-calida/20">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida font-semibold block mb-0.5">
              Fichas de Bitácora
            </span>
            <span className="font-headline-md text-sm sm:text-base font-bold text-teal-uno block">
              {entries.length} Documentos PDF
            </span>
          </div>
          <div className="p-3.5 bg-surface-variant/30 rounded-2xl border border-arena-calida/20">
            <span className="text-[10px] font-label-caps uppercase text-arena-calida font-semibold block mb-0.5">
              Rango Cronológico
            </span>
            <span className="font-headline-md text-xs sm:text-sm font-bold text-teal-uno block truncate">
              {entries[0]?.date || "Abril"} → {entries[entries.length - 1]?.date || "Septiembre"}
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

      {/* 2. MONTH FILTER BAR & HEADER */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-label-caps uppercase tracking-wider text-arena-calida font-semibold px-1">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-uno" />
            Cronología de Documentos de Bitácora ({filteredEntries.length} Fichas)
          </span>
          
          {/* MONTH FILTER PILLS */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
            <button
              onClick={() => setSelectedMonth("all")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedMonth === "all"
                  ? "bg-teal-uno text-white shadow-xs"
                  : "bg-white/80 text-gris-texto hover:text-teal-uno border border-arena-calida/30"
              }`}
            >
              Todos ({entries.length})
            </button>
            {availableMonths.map((m) => {
              const count = entries.filter(e => e.month === m).length;
              return (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    selectedMonth === m
                      ? "bg-teal-uno text-white shadow-xs"
                      : "bg-white/80 text-gris-texto hover:text-teal-uno border border-arena-calida/30"
                  }`}
                >
                  {m.split(" ")[0]} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. CHRONOLOGICAL LIST OF ACCORDION CARDS */}
        <div className="space-y-4">
          {filteredEntries.map((entry) => {
            const isExpanded = expandedEntryId === entry.id;
            const isCompleted = entry.status === "completed";
            const isProjected = entry.status === "projected";

            return (
              <div
                key={entry.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-white/95 backdrop-blur-md border-teal-uno shadow-ethereal ring-2 ring-teal-uno/30"
                    : "bg-white/75 backdrop-blur-md border-arena-calida/30 hover:border-teal-uno/60 hover:shadow-xs"
                }`}
              >
                {/* HEADER ROW (CLICKABLE ACCORDION) */}
                <button
                  onClick={() => {
                    setExpandedEntryId(isExpanded ? "" : entry.id);
                    if (onSelectDate) onSelectDate(entry.date);
                  }}
                  className="w-full p-5 sm:p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    {/* Progress Circle or Status Icon */}
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold ${
                      isCompleted 
                        ? "bg-teal-uno/15 text-teal-uno border border-teal-uno/30" 
                        : "bg-arena-calida/15 text-arena-calida border border-arena-calida/30"
                    }`}>
                      {entry.progress}%
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-arena-calida/15 text-arena-calida text-[10px] font-mono font-bold border border-arena-calida/30 uppercase">
                          {entry.entryNumber}
                        </span>
                        <span className="text-xs font-label-caps uppercase tracking-wider font-bold text-gris-texto">
                          {entry.date}
                        </span>
                        {isCompleted && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-label-caps uppercase font-bold border border-emerald-300 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Dictamen Aprobado
                          </span>
                        )}
                        {isProjected && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-label-caps uppercase font-bold border border-amber-300 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Hito Proyectado
                          </span>
                        )}
                        {entry.scenes360Count && entry.scenes360Count > 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-teal-uno/10 text-teal-uno text-[9px] font-label-caps uppercase font-bold border border-teal-uno/20 flex items-center gap-1">
                            <Compass className="w-3 h-3" /> {entry.scenes360Count} Puntos 360°
                          </span>
                        )}
                      </div>
                      <h4 className="font-headline-md text-base sm:text-lg uppercase text-teal-uno font-semibold group-hover:text-arena-calida transition-colors">
                        {entry.phaseTitle}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center">
                    <span className="text-xs text-teal-uno font-label-caps uppercase font-semibold hidden sm:inline">
                      {isExpanded ? "Ocultar Detalle" : "Ver Ficha de Bitácora"}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-gris-texto transition-transform duration-300 ${
                      isExpanded ? "rotate-90 bg-teal-uno text-white" : "group-hover:bg-arena-calida/20"
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* EXPANDED TECHNICAL DETAIL BODY */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-arena-calida/20 space-y-6 text-xs sm:text-sm">
                    {/* EXECUTIVE SUMMARY */}
                    <div className="p-4 rounded-2xl bg-surface-container-low/80 border border-arena-calida/25 space-y-1.5">
                      <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-bold block">
                        Resumen Oficial de Bitácora de Obra
                      </span>
                      <p className="text-gris-texto font-body-md leading-relaxed text-xs sm:text-sm">
                        {entry.executiveSummary}
                      </p>
                    </div>

                    {/* TECHNICAL DICTUM */}
                    <div className="p-4 rounded-2xl bg-teal-uno/5 border border-teal-uno/20 space-y-1.5">
                      <span className="text-[10px] font-label-caps uppercase text-teal-uno tracking-wider font-bold flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" /> Dictamen Técnico de Supervisión
                      </span>
                      <p className="text-gris-texto font-body-md leading-relaxed text-xs sm:text-sm">
                        {entry.technicalDictum}
                      </p>
                    </div>

                    {/* LAB TESTS & QUALITY CONTROL */}
                    {entry.labTestsAndQuality && entry.labTestsAndQuality.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-bold flex items-center gap-1.5">
                          <Microscope className="w-3.5 h-3.5 text-teal-uno" />
                          Pruebas de Calidad & Controles en Sitio
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {entry.labTestsAndQuality.map((test, tIdx) => (
                            <div
                              key={tIdx}
                              className="p-3 bg-white/80 border border-arena-calida/30 rounded-xl flex items-start gap-2 text-xs text-gris-texto shadow-2xs font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{test}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* KEY MILESTONES */}
                    {entry.keyMilestones && entry.keyMilestones.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-bold">
                          Hitos Constructivos Ejecutados
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {entry.keyMilestones.map((km, kIdx) => (
                            <li
                              key={kIdx}
                              className="p-3 bg-surface-variant/40 rounded-xl border border-arena-calida/20 text-xs text-gris-texto flex items-center gap-2 font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-uno flex-shrink-0" />
                              <span>{km}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 5. EMBEDDED PHOTO GALLERY & CAROUSEL FOR THIS WEEK */}
                    {entry.photos && entry.photos.length > 0 && (
                      <div className="pt-2">
                        <BitacoraCardGalleryCarousel
                          photos={entry.photos}
                          folderDriveUrl={entry.photographicLogUrl}
                          weekTitle={entry.phaseTitle}
                          weekDate={entry.date}
                          entryNumber={entry.entryNumber}
                          isOpenFullscreen={fullscreenCarouselEntryId === entry.id}
                          onCloseFullscreen={() => setFullscreenCarouselEntryId("")}
                        />
                      </div>
                    )}

                    {/* METADATA FOOTER: PERSONNEL & ACTIONS */}
                    <div className="pt-4 border-t border-arena-calida/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1 text-[11px] text-gris-texto/80 font-sans">
                        <div className="flex items-center gap-1.5">
                          <HardHat className="w-3.5 h-3.5 text-teal-uno" />
                          <span><strong>Cuadrilla en Sitio:</strong> {entry.personnelOnSite}</span>
                        </div>
                        <div className="text-[10px] text-arena-calida font-label-caps uppercase font-semibold">
                          Supervisado por: {entry.inspectedBy}
                        </div>
                        {entry.pdfFileName && (
                          <div className="text-[10px] text-gris-texto/60 font-mono">
                            Documento: {entry.pdfFileName}
                          </div>
                        )}
                      </div>

                      {/* QUICK ACTION BUTTONS */}
                      <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                        {/* 1. DIRECT OFFICIAL PDF DOCUMENT LINK */}
                        {entry.pdfDriveUrl && (
                          <a
                            href={entry.pdfDriveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold"
                            title="Abrir PDF oficial de esta bitácora en Google Drive"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Ver PDF Oficial</span>
                            <ExternalLink className="w-3 h-3 opacity-80" />
                          </a>
                        )}

                        {/* 2. DIRECT WEEKLY PHOTO EVIDENCE FOLDER IN DRIVE */}
                        {entry.photographicLogUrl && (
                          <a
                            href={entry.photographicLogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 bg-white hover:bg-arena-calida hover:text-white text-gris-texto border border-arena-calida/50 rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold group/btn"
                            title={`Abrir carpeta de fotos de evidencia (${entry.photosCount || 0} fotos) en Google Drive`}
                          >
                            <Camera className="w-3.5 h-3.5 text-arena-calida group-hover/btn:text-white" />
                            <span>Fotos en Drive ({entry.photosCount || 0})</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>
                        )}

                        {/* 3. VIRTUAL 360 TOUR JUMP */}
                        {entry.scenes360Count && entry.scenes360Count > 0 && onJumpTo360 && (
                          <button
                            type="button"
                            onClick={onJumpTo360}
                            className="px-3.5 py-1.5 bg-teal-uno/15 hover:bg-teal-uno hover:text-white text-teal-uno border border-teal-uno/30 rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold"
                          >
                            <Compass className="w-3.5 h-3.5" />
                            <span>Ver en 360° ({entry.scenes360Count})</span>
                          </button>
                        )}

                        {/* 4. CAROUSEL JUMP / FULLSCREEN MODAL */}
                        {entry.photos && entry.photos.length > 0 ? (
                          <button
                            type="button"
                            onClick={() => setFullscreenCarouselEntryId(entry.id)}
                            className="px-3.5 py-1.5 bg-arena-calida hover:bg-teal-uno text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold"
                            title="Ver carrusel ampliado de fotografías"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Ver en Carrusel ({entry.photos.length})</span>
                          </button>
                        ) : onJumpToCarousel ? (
                          <button
                            type="button"
                            onClick={onJumpToCarousel}
                            className="px-3.5 py-1.5 bg-arena-calida/15 hover:bg-arena-calida hover:text-white text-arena-calida border border-arena-calida/40 rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-bold"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Ver en Carrusel</span>
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
