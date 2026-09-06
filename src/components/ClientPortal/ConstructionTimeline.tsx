import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  FileCheck2, 
  Hammer, 
  Award,
  Layers
} from "lucide-react";
import { ConstructionPhase, PhaseStatus } from "../../types/clientPortal";

interface ConstructionTimelineProps {
  phases: ConstructionPhase[];
  globalProgress: number;
  currentPhaseName: string;
}

export default function ConstructionTimeline({
  phases,
  globalProgress,
  currentPhaseName,
}: ConstructionTimelineProps) {
  const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(
    phases.find((p) => p.status === "in_progress")?.id || phases[0]?.id || null
  );

  const completedCount = phases.filter((p) => p.status === "completed").length;
  const inProgressCount = phases.filter((p) => p.status === "in_progress").length;
  const scheduledCount = phases.filter((p) => p.status === "scheduled").length;

  const toggleExpand = (id: string) => {
    setExpandedPhaseId((prev) => (prev === id ? null : id));
  };

  const getStatusBadge = (status: PhaseStatus) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" /> Completado
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 animate-pulse">
            <Clock className="w-3 h-3" /> En Ejecución
          </span>
        );
      case "scheduled":
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
            <Calendar className="w-3 h-3" /> Programado
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 font-sans text-left">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#c2a275]/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]">
            <Hammer className="w-4 h-4 text-teal-uno" />
            <span>Planificación y Rigor Constructivo</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1 tracking-tight">
            Cronograma de Ejecución por Fases
          </h3>
          <p className="text-xs sm:text-sm text-[#e4ded5]/70 max-w-2xl mt-1 leading-relaxed">
            Monitoreo en tiempo real del programa de obra contractual con dictámenes técnicos de supervisión firmados por la dirección de obra.
          </p>
        </div>

        {/* SUMMARY BADGES */}
        <div className="flex items-center gap-2 text-xs">
          <div className="px-3 py-2 bg-[#141418] border border-emerald-500/20 rounded-xs text-center">
            <div className="font-serif text-base font-bold text-emerald-400">{completedCount}</div>
            <div className="text-[9px] font-label-caps uppercase tracking-wider text-zinc-400">Completadas</div>
          </div>
          <div className="px-3 py-2 bg-[#141418] border border-amber-500/20 rounded-xs text-center">
            <div className="font-serif text-base font-bold text-amber-300">{inProgressCount}</div>
            <div className="text-[9px] font-label-caps uppercase tracking-wider text-zinc-400">En Proceso</div>
          </div>
          <div className="px-3 py-2 bg-[#141418] border border-zinc-700 rounded-xs text-center">
            <div className="font-serif text-base font-bold text-zinc-400">{scheduledCount}</div>
            <div className="text-[9px] font-label-caps uppercase tracking-wider text-zinc-400">Por Iniciar</div>
          </div>
        </div>
      </div>

      {/* GLOBAL PROGRESS STATUS STRIP */}
      <div className="bg-[#141418] border border-[#c2a275]/25 p-5 rounded-xs space-y-3 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div>
            <span className="text-[10px] font-label-caps uppercase text-[#c2a275] tracking-wider block">
              Etapa Constructiva Actual
            </span>
            <span className="text-white font-medium sm:text-sm">{currentPhaseName}</span>
          </div>
          <div className="flex items-baseline gap-1.5 self-end sm:self-auto">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-teal-uno">{globalProgress}%</span>
            <span className="text-[10px] font-label-caps uppercase tracking-widest text-[#e4ded5]/60">Avance Físico Global</span>
          </div>
        </div>

        {/* Global Multi-segmented Bar */}
        <div className="h-3 w-full bg-black/60 rounded-full overflow-hidden p-0.5 border border-white/5 flex gap-0.5">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`h-full rounded-full transition-all duration-700 ${
                phase.status === "completed"
                  ? "bg-gradient-to-r from-teal-uno to-emerald-400"
                  : phase.status === "in_progress"
                  ? "bg-gradient-to-r from-amber-400 to-[#c2a275] animate-pulse"
                  : "bg-zinc-800"
              }`}
              style={{ width: `${100 / phases.length}%` }}
              title={`${phase.title}: ${phase.progress}%`}
            />
          ))}
        </div>
      </div>

      {/* PHASES ACCORDION LIST */}
      <div className="space-y-3">
        {phases.map((phase, idx) => {
          const isExpanded = expandedPhaseId === phase.id;
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`border rounded-xs transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "bg-[#191922] border-[#c2a275]/50 shadow-md"
                  : "bg-[#141418] border-[#c2a275]/15 hover:border-[#c2a275]/35 hover:bg-[#181820]"
              }`}
            >
              {/* ACCORDION HEADER */}
              <button
                onClick={() => toggleExpand(phase.id)}
                className="w-full p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold flex-shrink-0 border ${
                      phase.status === "completed"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                        : phase.status === "in_progress"
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-zinc-800 text-zinc-400 border-zinc-700"
                    }`}
                  >
                    {phase.status === "completed" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <span>{phase.order}</span>
                    )}
                  </div>

                  <div className="space-y-0.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-white">
                        {phase.title}
                      </h4>
                      {getStatusBadge(phase.status)}
                    </div>
                    <div className="text-[11px] text-[#e4ded5]/60 flex items-center gap-2">
                      <span>Plazo contractual: {phase.targetDates}</span>
                      {phase.completionDate && (
                        <span className="text-emerald-400/80">• Concluido el {phase.completionDate}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* PROGRESS BAR IN HEADER */}
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:w-48 self-stretch sm:self-center">
                  <div className="w-28 sm:w-32 bg-black/60 h-2 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${phase.progress}%` }}
                      transition={{ duration: 0.8 }}
                      className={`h-full rounded-full ${
                        phase.status === "completed"
                          ? "bg-emerald-400"
                          : phase.status === "in_progress"
                          ? "bg-amber-400"
                          : "bg-zinc-700"
                      }`}
                    />
                  </div>
                  <span className="font-mono text-xs font-semibold text-white w-10 text-right">
                    {phase.progress}%
                  </span>
                  <div className="text-[#c2a275] p-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* EXPANDED TECHNICAL DETAILS */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[#c2a275]/15 bg-black/30 space-y-4 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Dictamen de Supervisión */}
                    <div className="p-3.5 bg-[#141418] border border-[#c2a275]/20 rounded-xs space-y-2">
                      <div className="flex items-center gap-1.5 text-[#c2a275] font-label-caps uppercase text-[11px] tracking-wider font-semibold">
                        <FileCheck2 className="w-4 h-4 text-teal-uno" />
                        <span>Dictamen de Supervisión Técnica</span>
                      </div>
                      <p className="text-[#e4ded5]/85 text-xs leading-relaxed italic">
                        "{phase.supervisionNotes}"
                      </p>
                    </div>

                    {/* Firma & Responsable */}
                    <div className="p-3.5 bg-[#141418] border border-[#c2a275]/20 rounded-xs space-y-2">
                      <div className="flex items-center gap-1.5 text-[#c2a275] font-label-caps uppercase text-[11px] tracking-wider font-semibold">
                        <ShieldCheck className="w-4 h-4 text-teal-uno" />
                        <span>Inspector Responsable</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-white font-medium">{phase.inspectedBy}</div>
                        <div className="text-[10px] text-zinc-400 font-label-caps uppercase tracking-wider">
                          Supervisión Oficial de Calidad Estructural UNO Arquitectos
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

