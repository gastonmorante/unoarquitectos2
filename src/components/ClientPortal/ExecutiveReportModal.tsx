import React, { useRef } from "react";
import { motion } from "motion/react";
import { 
  Printer, 
  Download, 
  X, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  MapPin, 
  UserCheck, 
  FileText,
  Award
} from "lucide-react";
import { ClientProject } from "../../types/clientPortal";
import Logo from "../Logo";

interface ExecutiveReportModalProps {
  project: ClientProject;
  onClose: () => void;
}

export default function ExecutiveReportModal({
  project,
  onClose,
}: ExecutiveReportModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const reportDate = new Date().toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-[#141418] border border-[#c2a275]/40 rounded-xs max-w-4xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-left"
      >
        {/* TOP MODAL TOOLBAR */}
        <div className="p-4 bg-[#0e0e10] border-b border-[#c2a275]/25 flex items-center justify-between text-white print:hidden">
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-wider text-[#c2a275]">
            <FileText className="w-4 h-4 text-teal-uno" />
            <span>Dictamen Técnico de Avance Físico & Calidad</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-teal-uno hover:bg-[#008f8f] text-white rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-xs cursor-pointer transition-colors"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE DOCUMENT BODY */}
        <div
          ref={printRef}
          className="p-6 sm:p-10 overflow-y-auto bg-white text-zinc-900 space-y-6 print:p-0 print:m-0 print:text-black font-sans"
        >
          {/* LETTERHEAD HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-zinc-900 pb-6">
            <div>
              <div className="text-2xl font-serif font-bold tracking-tight text-zinc-900">
                UNO ARQUITECTOS
              </div>
              <div className="text-[10px] font-label-caps uppercase tracking-widest text-zinc-600 mt-0.5">
                Estudio Boutique de Arquitectura & Construcción • Riviera Maya
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">
                Plaza Palmeras, Playa del Carmen & Taller Tulum, Quintana Roo
              </div>
            </div>

            <div className="text-left sm:text-right space-y-0.5">
              <span className="inline-block px-2.5 py-0.5 bg-zinc-900 text-white text-[10px] font-mono uppercase tracking-wider font-bold">
                DICTAMEN OFICIAL #UNO-{project.id.toUpperCase().slice(0, 4)}-2026
              </span>
              <div className="text-[11px] text-zinc-600 font-medium">Fecha de Emisión: {reportDate}</div>
              <div className="text-[10px] text-zinc-500 font-mono">Folio de Supervisión: DIR-TEC-2026-V8</div>
            </div>
          </div>

          {/* PROJECT EXECUTIVE SUMMARY BOX */}
          <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-xs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[10px] font-label-caps uppercase text-zinc-500 block">Obra / Proyecto</span>
              <strong className="text-zinc-900 font-serif text-sm block">{project.propertyName}</strong>
              <span className="text-[11px] text-zinc-600">{project.typology}</span>
            </div>

            <div>
              <span className="text-[10px] font-label-caps uppercase text-zinc-500 block">Propietario / Cliente</span>
              <strong className="text-zinc-900 block text-xs">{project.clientName}</strong>
              <span className="text-[11px] text-zinc-600">{project.location}</span>
            </div>

            <div>
              <span className="text-[10px] font-label-caps uppercase text-zinc-500 block">Superficie & Plazos</span>
              <strong className="text-zinc-900 block text-xs">{project.totalArea}</strong>
              <span className="text-[10px] text-zinc-600">Entrega: {project.estimatedDelivery}</span>
            </div>

            <div className="bg-zinc-900 text-white p-3 rounded-xs text-center flex flex-col justify-center">
              <span className="text-[9px] font-label-caps uppercase tracking-widest text-teal-300">Avance Físico Global</span>
              <span className="font-serif text-2xl font-bold text-white">{project.globalProgress}%</span>
              <span className="text-[9px] text-zinc-300 truncate">{project.currentPhaseName}</span>
            </div>
          </div>

          {/* PHASES PROGRESS TABLE */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-zinc-900 border-b border-zinc-200 pb-1">
              Desglose de Fases Constructivas & Dictámenes de Supervisión
            </h4>

            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-zinc-100 text-zinc-700 font-label-caps uppercase text-[10px] tracking-wider border-b border-zinc-300">
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">Fase Constructiva</th>
                  <th className="py-2 px-3">Plazo</th>
                  <th className="py-2 px-3 text-center">Avance</th>
                  <th className="py-2 px-3">Estado</th>
                  <th className="py-2 px-3">Dictamen de Calidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {project.phases.map((phase) => (
                  <tr key={phase.id} className="hover:bg-zinc-50/50">
                    <td className="py-2.5 px-3 font-mono font-bold text-zinc-500">{phase.order}</td>
                    <td className="py-2.5 px-3 font-medium text-zinc-900">{phase.title}</td>
                    <td className="py-2.5 px-3 text-zinc-600 text-[11px] whitespace-nowrap">{phase.targetDates}</td>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-zinc-900">{phase.progress}%</td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[9px] font-label-caps uppercase font-bold ${
                          phase.status === "completed"
                            ? "bg-emerald-100 text-emerald-800"
                            : phase.status === "in_progress"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        {phase.status === "completed" ? "Completado" : phase.status === "in_progress" ? "En Proceso" : "Programado"}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-zinc-600 max-w-xs leading-relaxed italic">
                      "{phase.supervisionNotes}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* OFFICIAL SIGNATURE AND CERTIFICATION BLOCK */}
          <div className="pt-8 border-t border-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-label-caps uppercase text-[11px] font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Garantía de Calidad & Estructura Kárstica</span>
              </div>
              <p className="text-[11px] text-zinc-600 leading-relaxed">
                Este dictamen certifica que la ejecución de obra cumple con las normativas vigentes en Quintana Roo, pruebas hidrostáticas presurizadas, prospección geofísica GPR y dosificación de resinas naturales de Chukum y maderas de Tzalam con tratamiento hidrófugo de poro abierto.
              </p>
            </div>

            <div className="border border-zinc-200 p-4 rounded-xs text-center space-y-3 bg-zinc-50">
              <div className="h-12 flex items-end justify-center">
                <span className="font-serif italic text-lg text-zinc-800 border-b border-zinc-800 px-6 pb-1">
                  Arq. Angel Cereceda
                </span>
              </div>
              <div>
                <strong className="text-zinc-900 block text-xs">Arq. Angel Cereceda</strong>
                <span className="text-[10px] text-zinc-600 block">Director General & Responsable de Supervisión</span>
                <span className="text-[9px] text-zinc-500 font-mono">Céd. Prof. 4892019 • Máster Project Management UEM</span>
              </div>
            </div>
          </div>

          {/* FOOTER NOTICE */}
          <div className="pt-4 border-t border-zinc-200 text-center text-[9px] text-zinc-400 font-label-caps uppercase tracking-wider">
            UNO Arquitectos Mx • Todos los derechos reservados • Documento confidencial emitido para el propietario de {project.propertyName}.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

