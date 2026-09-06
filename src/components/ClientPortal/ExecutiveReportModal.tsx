import { useRef } from "react";
import { motion } from "motion/react";
import { 
  Printer, 
  X, 
  ShieldCheck, 
  FileText
} from "lucide-react";
import { ClientProject } from "../../types/clientPortal";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md overflow-y-auto font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-background border border-arena-calida/40 rounded-3xl max-w-4xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-left text-gris-texto texture-overlay"
      >
        {/* TOP MODAL TOOLBAR */}
        <div className="p-4 bg-surface-container-low border-b border-arena-calida/30 flex items-center justify-between text-gris-texto print:hidden">
          <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-wider text-arena-calida font-semibold">
            <FileText className="w-4 h-4 text-teal-uno" />
            <span>Dictamen Técnico de Avance Físico & Calidad</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer shadow-ethereal transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gris-texto hover:text-teal-uno rounded-full hover:bg-arena-calida/10 cursor-pointer transition-colors"
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
              <div className="text-2xl font-sans font-bold tracking-tight text-zinc-900">
                UNO ARQUITECTOS
              </div>
              <div className="text-[10px] font-label-caps uppercase tracking-widest text-zinc-600 mt-0.5 font-semibold">
                Estudio Boutique de Arquitectura & Construcción • Riviera Maya
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">
                Plaza Palmeras, Playa del Carmen & Taller Tulum, Quintana Roo
              </div>
            </div>

            <div className="text-left sm:text-right space-y-0.5">
              <span className="inline-block px-3 py-1 bg-zinc-900 text-white text-[10px] font-mono uppercase tracking-wider font-bold rounded-full">
                DICTAMEN OFICIAL #UNO-{project.id.toUpperCase().slice(0, 4)}-2026
              </span>
              <div className="text-[11px] text-zinc-600 font-medium">Fecha de Emisión: {reportDate}</div>
              <div className="text-[10px] text-zinc-500 font-mono">Folio de Supervisión: DIR-TEC-2026-V8</div>
            </div>
          </div>

          {/* PROJECT EXECUTIVE SUMMARY BOX */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <div>
              <span className="text-[9px] font-label-caps uppercase text-zinc-500 block font-semibold">Propiedad</span>
              <strong className="text-xs sm:text-sm text-zinc-900 font-sans block">{project.propertyName}</strong>
            </div>
            <div>
              <span className="text-[9px] font-label-caps uppercase text-zinc-500 block font-semibold">Propietario</span>
              <strong className="text-xs sm:text-sm text-zinc-900 font-sans block">{project.clientName}</strong>
            </div>
            <div>
              <span className="text-[9px] font-label-caps uppercase text-zinc-500 block font-semibold">Ubicación</span>
              <strong className="text-xs sm:text-sm text-zinc-900 font-sans block">{project.location}</strong>
            </div>
            <div>
              <span className="text-[9px] font-label-caps uppercase text-zinc-500 block font-semibold">Avance Global</span>
              <strong className="text-xs sm:text-sm text-[#00A3A3] font-bold block">{project.globalProgress}% Certificado</strong>
            </div>
          </div>

          {/* SUMMARY OF TECHNICAL INSPECTIONS */}
          <div className="space-y-4">
            <h4 className="text-xs font-label-caps uppercase tracking-wider text-zinc-900 font-bold border-b border-zinc-200 pb-1.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00A3A3]" />
              1. Resumen Ejecutivo de Dictámenes de Supervisión
            </h4>
            
            <div className="space-y-3 text-xs leading-relaxed text-zinc-700">
              <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-zinc-900">
                  <span>Dictamen de Acabados Arquitectónicos Nobles (05 Septiembre 2026)</span>
                  <span className="text-[#00A3A3] font-mono">72% Físico</span>
                </div>
                <p>
                  Aplicación artesanal de pasta de Chukum tradicional maya en muros de 6.40m y alberca cenote. Colocación de mármol Santo Tomás 1.20x2.40m con junta de 1.5mm y carpinterías finas de madera tropical de Tzalam curada al 10% de humedad.
                </p>
              </div>

              <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-zinc-900">
                  <span>Dictamen de Instalaciones MEP & Confort Bioclimático (27 Agosto 2026)</span>
                  <span className="text-[#00A3A3] font-mono">52% Físico</span>
                </div>
                <p>
                  Prueba hidrostática superada a 7.0 kg/cm² (100 PSI) durante 72h con cero fugas. Red Daikin VRF oculta en plafones de 3.40m y domótica Lutron HomeWorks QSX con escenas de iluminación cálida en 2700K.
                </p>
              </div>
            </div>
          </div>

          {/* METRICS & PARAMETRIC DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border border-zinc-200 rounded-xl space-y-2">
              <h5 className="text-[11px] font-label-caps uppercase text-zinc-900 font-bold">Datos Físicos del Inmueble</h5>
              <ul className="text-xs space-y-1 text-zinc-600">
                <li>• Superficie Construida: <strong>{project.totalArea}</strong></li>
                <li>• Superficie de Terreno: <strong>1,150.00 m²</strong></li>
                <li>• Altura Máxima Vestíbulo: <strong>6.40 m libre</strong></li>
                <li>• Capacidad de Vaso Alberca: <strong>48.00 m² Chukum</strong></li>
              </ul>
            </div>

            <div className="p-4 border border-zinc-200 rounded-xl space-y-2">
              <h5 className="text-[11px] font-label-caps uppercase text-zinc-900 font-bold">Respaldo Estructural & Calidad</h5>
              <ul className="text-xs space-y-1 text-zinc-600">
                <li>• Georradar (GPR): <strong>12.0m sin cavernas</strong></li>
                <li>• Concreto Estructural: <strong>f'c = 250 kg/cm²</strong></li>
                <li>• Resistencia a Viento: <strong>Huracán Cat. 5 (&gt;280 km/h)</strong></li>
                <li>• Cancelería: <strong>Eurovent 12mm laminado</strong></li>
              </ul>
            </div>
          </div>

          {/* SIGNATURE SECTION */}
          <div className="pt-8 border-t-2 border-zinc-900 grid grid-cols-2 gap-8 text-center text-xs">
            <div className="space-y-1">
              <div className="h-12 flex items-end justify-center font-serif italic text-zinc-500">
                Angel Cereceda
              </div>
              <div className="border-t border-zinc-400 pt-1 font-bold text-zinc-900">
                {project.director.name}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-label-caps font-semibold">
                {project.director.role} • Céd. Prof. 8492049
              </div>
            </div>

            <div className="space-y-1">
              <div className="h-12 flex items-end justify-center font-serif italic text-zinc-400">
                Supervisión de Obra
              </div>
              <div className="border-t border-zinc-400 pt-1 font-bold text-zinc-900">
                Dirección Responsable de Obra (DRO)
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-label-caps font-semibold">
                Colegio de Arquitectos de la Riviera Maya
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
