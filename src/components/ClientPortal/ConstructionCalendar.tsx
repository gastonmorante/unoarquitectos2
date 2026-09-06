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
    <div className="bg-white/80 backdrop-blur-md border border-arena-calida/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-ethereal relative overflow-hidden texture-overlay font-sans">
      {/* HEADER WITH CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-arena-calida/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
            <CalendarIcon className="w-4 h-4 text-teal-uno" />
            <span>Calendario Oficial de Obra</span>
          </div>
          <h3 className="font-headline-md text-xl sm:text-2xl text-teal-uno uppercase font-semibold mt-1">
            {currentMonthData.label}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevMonth}
            disabled={activeMonthIndex === 0}
            className="p-2 rounded-full bg-surface-container-low hover:bg-white text-gris-texto disabled:opacity-30 border border-arena-calida/30 cursor-pointer shadow-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-label-caps uppercase tracking-wider text-teal-uno font-bold px-2">
            {currentMonthData.name}
          </span>
          <button
            onClick={handleNextMonth}
            disabled={activeMonthIndex === MONTHS_CONFIG.length - 1}
            className="p-2 rounded-full bg-surface-container-low hover:bg-white text-gris-texto disabled:opacity-30 border border-arena-calida/30 cursor-pointer shadow-xs transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* HISTORICAL WARNING BANNER IF APPLICABLE */}
      {isViewingHistorical && (
        <div className="bg-arena-calida/15 border border-arena-calida/40 p-3.5 rounded-2xl flex items-center justify-between gap-3 text-xs">
          <span className="text-arena-calida font-semibold">
            Consultando registro histórico del {selectedMilestone.date} ({selectedMilestone.progress}% avance).
          </span>
          <button
            onClick={handleResetToLatest}
            className="px-3 py-1 bg-teal-uno text-white rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold shadow-xs hover:bg-arena-calida cursor-pointer transition-colors"
          >
            Volver al último avance
          </button>
        </div>
      )}

      {/* CALENDAR GRID */}
      <div className="space-y-2">
        <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-label-caps uppercase text-arena-calida font-bold py-1">
          {WEEKDAYS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
          {Array.from({ length: currentMonthData.startDayOffset }).map((_, i) => (
            <div key={`empty-${i}`} className="h-14 rounded-2xl bg-surface-container-low/30 border border-transparent opacity-40" />
          ))}

          {Array.from({ length: currentMonthData.daysCount }).map((_, i) => {
            const dayNum = i + 1;
            const milestone = milestones.find(
              (m) => m.monthIndex === activeMonthIndex && m.day === dayNum
            );
            const isSelected = selectedMilestone && milestone && selectedMilestone.id === milestone.id;

            return (
              <div
                key={`day-${dayNum}`}
                onClick={() => milestone && handleMilestoneClick(milestone)}
                className={`h-14 rounded-2xl p-1.5 flex flex-col justify-between border transition-all ${
                  milestone
                    ? isSelected
                      ? 'bg-teal-uno text-white border-teal-uno shadow-md ring-2 ring-teal-uno/40 cursor-pointer font-bold'
                      : 'bg-white/90 border-teal-uno/40 text-teal-uno hover:border-teal-uno hover:shadow-xs cursor-pointer font-semibold'
                    : 'bg-surface-container-low/50 border-arena-calida/20 text-gris-texto/60'
                }`}
              >
                <div className="flex justify-between items-center text-[10px]">
                  <span>{dayNum}</span>
                  {milestone?.isLatest && (
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-teal-uno'} animate-ping`} />
                  )}
                </div>
                {milestone && (
                  <div className={`text-[9px] font-mono text-center rounded-full py-0.5 ${
                    isSelected ? 'bg-black/20 text-white' : 'bg-arena-calida/20 text-arena-calida font-bold'
                  }`}>
                    {milestone.progress}%
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
