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
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold bg-emerald-500/15 text-emerald-600 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" /> Completado
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold bg-teal-uno/15 text-teal-uno border border-teal-uno/30 animate-pulse">
            <Clock className="w-3 h-3" /> En Ejecución
          </span>
        );
      case "scheduled":
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-medium bg-surface-container-low text-gris-texto/60 border border-arena-calida/20">
            <Calendar className="w-3 h-3" /> Programado
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 font-sans text-left">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-arena-calida/20 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
            <Hammer className="w-4 h-4 text-teal-uno" />
            <span>Planificación y Rigor Constructivo</span>
          </div>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-teal-uno uppercase font-semibold mt-1">
            Cronograma de Ejecución por Fases
          </h3>
          <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-2xl mt-1 leading-relaxed">
            Monitoreo en tiempo real del programa de obra contractual con dictámenes técnicos de supervisión firmados por la dirección de obra.
          </p>
        </div>

        {/* SUMMARY BADGES */}
        <div className="flex items-center gap-2 text-xs">
          <div className="px-3.5 py-2 bg-white/80 border border-emerald-500/20 rounded-2xl text-center shadow-xs">
            <div className="font-headline-md text-base font-bold text-emerald-600">{completedCount}</div>
            <div className="text-[9px] font-label-caps uppercase tracking-wider text-gris-texto/60 font-semibold">Completadas</div>
          </div>
          <div className="px-3.5 py-2 bg-white/80 border border-teal-uno/30 rounded-2xl text-center shadow-xs">
            <div className="font-headline-md text-base font-bold text-teal-uno">{inProgressCount}</div>
            <div className="text-[9px] font-label-caps uppercase tracking-wider text-gris-texto/60 font-semibold">En Proceso</div>
          </div>
          <div className="px-3.5 py-2 bg-white/80 border border-arena-calida/30 rounded-2xl text-center shadow-xs">
            <div className="font-headline-md text-base font-bold text-arena-calida">{scheduledCount}</div>
            <div className="text-[9px] font-label-caps uppercase tracking-wider text-gris-texto/60 font-semibold">Por Iniciar</div>
          </div>
        </div>
      </div>

      {/* GLOBAL PROGRESS STATUS STRIP */}
      <div className="bg-white/80 backdrop-blur-md border border-arena-calida/30 p-6 rounded-3xl space-y-4 shadow-ethereal">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div>
            <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider block font-semibold">
              Etapa Constructiva Actual
            </span>
            <span className="font-headline-md text-sm sm:text-base font-semibold text-teal-uno uppercase">{currentPhaseName}</span>
          </div>
          <div className="flex items-baseline gap-1.5 self-end sm:self-auto">
            <span className="font-headline-xl text-2xl sm:text-3xl font-bold text-teal-uno">{globalProgress}%</span>
            <span className="text-[10px] font-label-caps uppercase tracking-widest text-arena-calida font-semibold">Avance Físico Global</span>
          </div>
        </div>

        {/* Global Multi-segmented Bar */}
        <div className="h-3 w-full bg-surface-container-low rounded-full overflow-hidden p-0.5 border border-arena-calida/30 flex gap-1">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`h-full rounded-full transition-all duration-700 ${
                phase.status === "completed"
                  ? "bg-gradient-to-r from-teal-uno to-emerald-400"
                  : phase.status === "in_progress"
                  ? "bg-gradient-to-r from-teal-uno to-arena-calida animate-pulse"
                  : "bg-surface-container-high"
              }`}
              style={{ width: `${100 / phases.length}%` }}
              title={`${phase.title}: ${phase.progress}%`}
            />
          ))}
        </div>
      </div>

      {/* PHASES ACCORDION LIST */}
      <div className="space-y-3.5">
        {phases.map((phase, idx) => {
          const isExpanded = expandedPhaseId === phase.id;
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`border rounded-3xl transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "bg-white/95 border-teal-uno shadow-ethereal ring-1 ring-teal-uno/30"
                  : "bg-white/70 border-arena-calida/30 hover:border-teal-uno/50 hover:shadow-xs"
              }`}
            >
              {/* ACCORDION HEADER */}
              <button
                onClick={() => toggleExpand(phase.id)}
                className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-teal-uno/15 text-teal-uno flex items-center justify-center font-bold text-xs flex-shrink-0 font-label-caps">
                    0{idx + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      {getStatusBadge(phase.status)}
                      <span className="text-[11px] font-mono text-gris-texto/60">{phase.period}</span>
                    </div>
                    <h4 className="font-headline-md text-sm sm:text-base font-semibold text-teal-uno uppercase truncate">
                      {phase.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-headline-md text-sm sm:text-base font-bold text-teal-uno">{phase.progress}%</span>
                  <div className="p-1.5 rounded-full bg-surface-container-low text-gris-texto">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* ACCORDION BODY */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-arena-calida/20 space-y-4 text-xs">
                  <p className="text-gris-texto leading-relaxed font-body-md text-sm">
                    {phase.description}
                  </p>

                  {/* Tasks Checklist */}
                  <div className="space-y-2 bg-surface-container-low/60 p-4 rounded-2xl border border-arena-calida/20">
                    <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mb-2">
                      Conceptos de Obra Verificados:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-center gap-2 text-gris-texto">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-uno flex-shrink-0" />
                          <span className="font-sans text-xs">{task}</span>
                        </div>
                      ))}
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
