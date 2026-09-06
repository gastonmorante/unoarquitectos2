import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Compass, 
  RotateCcw,
  CalendarCheck
} from 'lucide-react';
import { ProgressMilestone } from '../../types/clientPortal';

interface ConstructionCalendarProps {
  milestones: ProgressMilestone[];
  selectedMilestone: ProgressMilestone;
  onSelectMilestone: (milestone: ProgressMilestone) => void;
  onViewTour?: () => void;
  onViewPhotos?: () => void;
}

// 2026 Monthly calendar configurations (August to December)
const MONTHS_CONFIG = [
  { name: 'Agosto', year: 2026, monthIndex: 0, daysCount: 31, startDayOffset: 5, label: 'Agosto 2026', status: 'completed' },
  { name: 'Septiembre', year: 2026, monthIndex: 1, daysCount: 30, startDayOffset: 1, label: 'Septiembre 2026', status: 'current' },
  { name: 'Octubre', year: 2026, monthIndex: 2, daysCount: 31, startDayOffset: 3, label: 'Octubre 2026', status: 'upcoming' },
  { name: 'Noviembre', year: 2026, monthIndex: 3, daysCount: 30, startDayOffset: 6, label: 'Noviembre 2026', status: 'upcoming' },
  { name: 'Diciembre', year: 2026, monthIndex: 4, daysCount: 31, startDayOffset: 1, label: 'Diciembre 2026', status: 'upcoming' },
];

const WEEKDAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

export default function ConstructionCalendar({
  milestones,
  selectedMilestone,
  onSelectMilestone,
  onViewTour,
  onViewPhotos,
}: ConstructionCalendarProps) {
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(() => {
    return selectedMilestone ? selectedMilestone.monthIndex : 1;
  });

  const latestMilestone = milestones.find((m) => m.isLatest) || milestones[milestones.length - 1];
  const isViewingHistorical = selectedMilestone && !selectedMilestone.isLatest;

  const currentMonthData = MONTHS_CONFIG[activeMonthIndex] || MONTHS_CONFIG[1];

  const handlePrevMonth = () => {
    if (activeMonthIndex > 0) setActiveMonthIndex(activeMonthIndex - 1);
  };

  const handleNextMonth = () => {
    if (activeMonthIndex < MONTHS_CONFIG.length - 1) setActiveMonthIndex(activeMonthIndex + 1);
  };

  const handleMilestoneClick = (milestone: ProgressMilestone) => {
    onSelectMilestone(milestone);
    setActiveMonthIndex(milestone.monthIndex);
  };

  const handleResetToLatest = () => {
    if (latestMilestone) {
      onSelectMilestone(latestMilestone);
      setActiveMonthIndex(latestMilestone.monthIndex);
    }
  };

  return (
    <div className="bg-[#141418] border border-[#c2a275]/30 rounded-xs p-5 sm:p-7 space-y-6 text-left shadow-2xl relative overflow-hidden">
      {/* TOP HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#c2a275]/20 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#c2a275] text-[11px] font-label-caps uppercase tracking-widest font-semibold">
            <CalendarCheck className="w-4 h-4 text-teal-uno" />
            <span>Calendario Oficial de Obra • Ciclo Único Agosto — Diciembre 2026</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white">
            Línea de Tiempo & Registro de Avances
          </h3>
          <p className="text-xs text-[#e4ded5]/70 max-w-2xl">
            La obra comprende de <strong className="text-white font-medium">Agosto a Diciembre de 2026</strong>. Seleccione cualquier marcador en los días con supervisión técnica para consultar los avances anteriores o regrese al hito más reciente.
          </p>
        </div>

        {/* QUICK BUTTON: RETURN TO LATEST */}
        <div className="flex items-center gap-2">
          {isViewingHistorical ? (
            <button
              onClick={handleResetToLatest}
              className="px-4 py-2 bg-gradient-to-r from-teal-uno to-[#008f8f] hover:from-[#008f8f] hover:to-teal-uno text-white rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg transition-all cursor-pointer animate-pulse"
              title="Volver a ver el avance más reciente"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver Avance Más Reciente (Hoy)</span>
            </button>
          ) : (
            <div className="px-3.5 py-1.5 bg-teal-uno/15 border border-teal-uno/40 text-teal-uno rounded-full text-xs font-label-caps uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-uno animate-ping" />
              <span>Visualizando Último Avance ({selectedMilestone?.progress}%)</span>
            </div>
          )}
        </div>
      </div>

      {/* MONTH TABS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
        {MONTHS_CONFIG.map((m, idx) => {
          const countInMonth = milestones.filter((milestone) => milestone.monthIndex === idx).length;
          const isSelectedMonth = activeMonthIndex === idx;
          const isCurrentExecuting = m.name === 'Septiembre';

          return (
            <button
              key={m.name}
              onClick={() => setActiveMonthIndex(idx)}
              className={`px-3.5 sm:px-4 py-2 rounded-xs text-xs font-serif transition-all flex items-center gap-2 cursor-pointer relative ${
                isSelectedMonth
                  ? 'bg-[#c2a275]/20 text-[#c2a275] border border-[#c2a275]/60 font-bold shadow-md'
                  : 'bg-[#1f1f28] text-zinc-400 hover:text-white border border-transparent hover:border-white/10'
              }`}
            >
              <span>{m.name} 2026</span>
              {countInMonth > 0 && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isSelectedMonth ? 'bg-teal-uno text-white font-bold' : 'bg-white/10 text-zinc-300'
                }`}>
                  {countInMonth} {countInMonth === 1 ? 'hito' : 'hitos'}
                </span>
              )}
              {isCurrentExecuting && (
                <span className="w-1.5 h-1.5 rounded-full bg-teal-uno absolute top-1.5 right-1.5 animate-ping" />
              )}
            </button>
          );
        })}
      </div>

      {/* MAIN CALENDAR GRID & ACTIVE MILESTONE CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: INTERACTIVE MONTH GRID (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0e0e10]/80 border border-white/10 rounded-xs p-4 sm:p-5 space-y-4">
          {/* MONTH CONTROLS */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevMonth}
              disabled={activeMonthIndex === 0}
              className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed rounded-xs hover:bg-white/5 transition-colors cursor-pointer"
              title="Mes anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h4 className="font-serif text-base sm:text-lg text-white font-semibold">
                {currentMonthData.label}
              </h4>
              <span className="text-[10px] font-label-caps uppercase text-[#c2a275] tracking-wider">
                {currentMonthData.status === 'completed' && 'Fase de Cimentación & Estructura Concluida'}
                {currentMonthData.status === 'current' && 'Avance Actual en Ejecución de Acabados'}
                {currentMonthData.status === 'upcoming' && 'Fase Programada según Cronograma'}
              </span>
            </div>

            <button
              onClick={handleNextMonth}
              disabled={activeMonthIndex === MONTHS_CONFIG.length - 1}
              className="p-1.5 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed rounded-xs hover:bg-white/5 transition-colors cursor-pointer"
              title="Siguiente mes"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* WEEKDAYS HEADER */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEKDAYS.map((d) => (
              <div key={d} className="text-[11px] font-label-caps uppercase text-zinc-400 py-1 font-semibold">
                {d}
              </div>
            ))}
          </div>

          {/* DAYS MATRIX */}
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: currentMonthData.startDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[44px] rounded-xs bg-transparent" />
            ))}

            {Array.from({ length: currentMonthData.daysCount }).map((_, i) => {
              const dayNum = i + 1;
              const milestoneOnDay = milestones.find(
                (m) => m.monthIndex === activeMonthIndex && m.day === dayNum
              );
              const isSelected = selectedMilestone && selectedMilestone.monthIndex === activeMonthIndex && selectedMilestone.day === dayNum;
              const isLatest = milestoneOnDay?.isLatest;
              const isProjected = milestoneOnDay?.isProjected;

              return (
                <div
                  key={`day-${dayNum}`}
                  onClick={() => milestoneOnDay && handleMilestoneClick(milestoneOnDay)}
                  className={`min-h-[50px] sm:min-h-[56px] p-1.5 rounded-xs border transition-all flex flex-col justify-between relative ${
                    milestoneOnDay
                      ? isSelected
                        ? 'bg-[#c2a275]/25 border-[#c2a275] text-white shadow-lg cursor-pointer ring-2 ring-[#c2a275]/40'
                        : 'bg-[#1a1a24] hover:bg-[#252532] border-teal-uno/60 text-white cursor-pointer hover:border-teal-uno'
                      : 'bg-[#121217]/50 border-white/5 text-zinc-400 select-none'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-medium ${
                      isSelected ? 'text-[#c2a275] font-bold' : milestoneOnDay ? 'text-white' : 'text-zinc-400'
                    }`}>
                      {dayNum}
                    </span>

                    {milestoneOnDay && (
                      <span className="flex h-2 w-2 relative">
                        {isLatest && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-uno opacity-75" />
                        )}
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          isLatest ? 'bg-teal-uno' : isProjected ? 'bg-amber-500' : 'bg-[#c2a275]'
                        }`} />
                      </span>
                    )}
                  </div>

                  {milestoneOnDay && (
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold ${
                          isLatest ? 'text-teal-uno' : 'text-[#c2a275]'
                        }`}>
                          {milestoneOnDay.progress}%
                        </span>
                        <Camera className="w-2.5 h-2.5 text-zinc-400" />
                      </div>
                      <div className="text-[9px] truncate font-sans text-zinc-300 hidden sm:block">
                        {isLatest ? 'Último' : milestoneOnDay.title.split(' ')[0]}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* LEGEND */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[10px] font-label-caps uppercase text-zinc-400 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-uno" />
              <span>Último Avance Registrado (Más Reciente)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#c2a275]" />
              <span>Avance Histórico Validado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Hito Futuro Programado</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SELECTED MILESTONE CARD (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-[#1a1a24] to-[#121218] border border-[#c2a275]/40 rounded-xs p-5 sm:p-6 space-y-4">
          <div className="space-y-4">
            {/* BADGE: SELECTED MILESTONE STATUS */}
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold border ${
                selectedMilestone?.isLatest
                  ? 'bg-teal-uno/20 text-teal-uno border-teal-uno/40'
                  : selectedMilestone?.isProjected
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-[#c2a275]/20 text-[#c2a275] border-[#c2a275]/40'
              }`}>
                {selectedMilestone?.isLatest ? '★ Hito Activo Más Reciente' : selectedMilestone?.isProjected ? 'Hito Programado' : 'Hito Histórico de Supervisión'}
              </span>

              <span className="font-mono text-sm text-white font-bold">
                {selectedMilestone?.displayDate}
              </span>
            </div>

            {/* TITLE & PROGRESS */}
            <div className="space-y-1">
              <span className="text-[11px] font-label-caps uppercase text-teal-uno tracking-wider">
                {selectedMilestone?.phaseName}
              </span>
              <h4 className="font-serif text-lg sm:text-xl text-white">
                {selectedMilestone?.title}
              </h4>
            </div>

            {/* PROGRESS GAUGE BAR */}
            <div className="space-y-1.5 bg-black/40 p-3 rounded-xs border border-white/5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Progreso Registrado en esta Fecha:</span>
                <span className="font-mono text-base font-bold text-teal-uno">{selectedMilestone?.progress}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedMilestone?.progress}%` }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-teal-uno to-[#c2a275] h-full"
                />
              </div>
            </div>

            {/* SUMMARY & SUPERVISION NOTES */}
            <div className="space-y-2 text-xs text-[#e4ded5]/80 leading-relaxed">
              <p className="border-l-2 border-[#c2a275] pl-3 py-0.5 italic">
                "{selectedMilestone?.summary}"
              </p>
              {selectedMilestone?.supervisionNotes && (
                <div className="bg-black/30 p-2.5 rounded-xs border border-white/5 text-[11px] space-y-1">
                  <span className="text-[#c2a275] font-semibold block uppercase text-[10px]">
                    Dictamen de Residencia Técnica:
                  </span>
                  <p className="text-zinc-300">
                    {selectedMilestone?.supervisionNotes}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ACTION BUTTONS: VIEW 360 TOUR & PHOTOS FOR THIS DATE */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={onViewTour}
                className="py-2.5 px-3 bg-teal-uno/20 hover:bg-teal-uno/30 text-teal-uno border border-teal-uno/40 hover:border-teal-uno rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Tour 360° Fecha</span>
              </button>

              <button
                onClick={onViewPhotos}
                className="py-2.5 px-3 bg-[#c2a275]/20 hover:bg-[#c2a275]/30 text-[#c2a275] border border-[#c2a275]/40 hover:border-[#c2a275] rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Fotos del Hito</span>
              </button>
            </div>

            {isViewingHistorical && (
              <button
                onClick={handleResetToLatest}
                className="w-full py-2 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white rounded-xs text-[10px] font-label-caps uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 text-teal-uno" />
                <span>Regresar al Avance Más Reciente (05 Sep 2026 - 68%)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* HORIZONTAL CHRONOLOGICAL MILESTONE STRIP */}
      <div className="border-t border-white/10 pt-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-label-caps uppercase text-[#c2a275] tracking-wider font-semibold">
            Registro Cronológico de Hitos (Agosto — Diciembre 2026):
          </span>
          <span className="text-[10px] text-zinc-400">
            Haga clic en cualquier marcador para navegar a los avances anteriores
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {milestones.map((m) => {
            const isSelected = selectedMilestone?.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => handleMilestoneClick(m)}
                className={`p-2.5 rounded-xs border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 relative ${
                  isSelected
                    ? 'bg-[#c2a275]/20 border-[#c2a275] text-white shadow-md ring-1 ring-[#c2a275]'
                    : m.isLatest
                    ? 'bg-teal-uno/10 border-teal-uno/50 text-teal-uno hover:bg-teal-uno/20'
                    : m.isProjected
                    ? 'bg-white/5 border-white/10 text-zinc-400 hover:border-amber-500/40 hover:text-zinc-200 opacity-75'
                    : 'bg-[#1b1b24] border-white/10 text-[#e4ded5] hover:border-[#c2a275]/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-[#c2a275] font-bold' : 'text-zinc-400'}>
                    {m.day} {m.month.substring(0, 3)}
                  </span>
                  <span className={`font-bold ${
                    isSelected ? 'text-white' : m.isLatest ? 'text-teal-uno' : 'text-[#c2a275]'
                  }`}>
                    {m.progress}%
                  </span>
                </div>
                <div className="text-[11px] font-serif line-clamp-1 text-white">
                  {m.title}
                </div>
                {m.isLatest && (
                  <span className="text-[8px] font-label-caps uppercase bg-teal-uno text-white px-1.5 py-0.2 rounded-full w-fit">
                    Más Reciente
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
