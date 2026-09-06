import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Ruler, 
  UserCheck, 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText, 
  LogOut, 
  Compass, 
  Hammer, 
  Camera, 
  SplitSquareVertical, 
  ShieldCheck, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  Award,
  RotateCcw
} from "lucide-react";
import { ClientProject, Tour360Folder, ProgressMilestone } from "../../types/clientPortal";
import CloudPanoViewer from "./CloudPanoViewer";
import ConstructionTimeline from "./ConstructionTimeline";
import PhotoReportsGrid from "./PhotoReportsGrid";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ExecutiveReportModal from "./ExecutiveReportModal";
import ConstructionCalendar from "./ConstructionCalendar";
import Logo from "../Logo";

interface ClientPortalViewProps {
  currentProject: ClientProject;
  allProjects: ClientProject[];
  onSelectProject: (project: ClientProject) => void;
  onLogout: () => void;
  onClose: () => void;
}

export default function ClientPortalView({
  currentProject,
  allProjects,
  onSelectProject,
  onLogout,
  onClose,
}: ClientPortalViewProps) {
  const [activeTab, setActiveTab] = useState<"calendar" | "360" | "timeline" | "photos" | "beforeAfter">("360");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showProjectSwitcher, setShowProjectSwitcher] = useState(false);

  // Default to the latest progress milestone (most recent date)
  const [selectedMilestone, setSelectedMilestone] = useState<ProgressMilestone>(() => {
    const list = currentProject.milestones || [];
    return list.find((m) => m.isLatest) || list[list.length - 1] || {
      id: "ms-default",
      dateStr: "2026-09-05",
      displayDate: "05 Septiembre 2026",
      month: "Septiembre",
      monthIndex: 1,
      day: 5,
      progress: currentProject.globalProgress,
      phaseName: currentProject.currentPhaseName,
      title: "Avance Más Reciente Registrado",
      summary: "Levantamiento de supervisión técnica de acabados.",
      supervisionNotes: "Dictamen de supervisión técnica al día.",
      isLatest: true,
    };
  });

  // Local state for tours to enable in-memory updates
  const [tours, setTours] = useState<Tour360Folder[]>(currentProject.cloudpanoTours);

  useEffect(() => {
    setTours(currentProject.cloudpanoTours);
    const list = currentProject.milestones || [];
    const latest = list.find((m) => m.isLatest) || list[list.length - 1];
    if (latest) setSelectedMilestone(latest);
  }, [currentProject]);

  const handleUpdateTour = (tourId: string, updated: Partial<Tour360Folder>) => {
    setTours((prev) =>
      prev.map((t) => (t.id === tourId ? { ...t, ...updated } : t))
    );
  };

  const activeProgress = selectedMilestone ? selectedMilestone.progress : currentProject.globalProgress;
  const activePhase = selectedMilestone ? selectedMilestone.phaseName : currentProject.currentPhaseName;
  const isViewingHistorical = selectedMilestone && !selectedMilestone.isLatest;

  const whatsappMessage = encodeURIComponent(
    `Hola Arq. Angel Cereceda, consulto sobre el avance de obra de ${currentProject.propertyName} (${currentProject.location}) con respecto a la fecha ${selectedMilestone?.displayDate || "actual"}. Quisiera coordinar una sesión de revisión técnica.`
  );

  const handleResetToLatest = () => {
    const list = currentProject.milestones || [];
    const latest = list.find((m) => m.isLatest) || list[list.length - 1];
    if (latest) setSelectedMilestone(latest);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0e0e10] text-[#e4ded5] overflow-y-auto font-sans flex flex-col selection:bg-teal-uno selection:text-white">
      {/* 1. LUXURY EXECUTIVE TOP NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#141418]/95 backdrop-blur-md border-b border-[#c2a275]/25 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <Logo showText={true} iconSize={28} textSize="text-sm sm:text-base" />
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno text-[10px] font-label-caps uppercase tracking-wider border border-teal-uno/30 font-semibold">
              Área Clientes
            </span>
          </div>

          {/* PROJECT SWITCHER DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setShowProjectSwitcher(!showProjectSwitcher)}
              className="px-3.5 py-1.5 bg-[#1f1f28] hover:bg-[#282834] text-white border border-[#c2a275]/30 rounded-xs text-xs font-serif flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <Building2 className="w-3.5 h-3.5 text-[#c2a275]" />
              <span className="font-semibold">{currentProject.propertyName}</span>
              <ChevronDown className="w-3 h-3 text-zinc-400" />
            </button>

            {/* Dropdown Menu */}
            {showProjectSwitcher && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#141418] border border-[#c2a275]/40 rounded-xs shadow-2xl z-50 p-1 space-y-1">
                <div className="p-2 text-[10px] font-label-caps uppercase text-zinc-400 tracking-wider border-b border-white/5">
                  Cambiar de Propiedad
                </div>
                {allProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p);
                      setTours(p.cloudpanoTours);
                      setShowProjectSwitcher(false);
                    }}
                    className={`w-full p-2.5 text-left rounded-xs text-xs font-serif transition-colors flex items-center justify-between cursor-pointer ${
                      p.id === currentProject.id
                        ? "bg-teal-uno/20 text-teal-uno font-bold"
                        : "text-[#e4ded5] hover:bg-white/5"
                    }`}
                  >
                    <span>{p.propertyName}</span>
                    <span className="text-[10px] font-mono text-zinc-400">({p.globalProgress}%)</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* TOP ACTIONS */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setShowReportModal(true)}
            className="px-3.5 sm:px-4 py-2 bg-teal-uno hover:bg-[#008f8f] text-white rounded-xs text-[11px] sm:text-xs font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            title="Generar e imprimir informe de supervisión en PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Generar Dictamen PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>

          <button
            onClick={onLogout}
            className="px-3 py-2 bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-300 border border-white/10 hover:border-red-500/30 rounded-xs text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Cerrar sesión"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Cerrar Sesión</span>
          </button>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 rounded-xs transition-colors cursor-pointer"
            title="Salir al sitio web principal"
          >
            ✕
          </button>
        </div>
      </header>

      {/* HISTORICAL VIEW ALERT BANNER IF NOT LATEST */}
      {isViewingHistorical && (
        <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-200 font-sans">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>
              Consultando hito histórico del <strong>{selectedMilestone.displayDate}</strong> ({selectedMilestone.progress}% de avance).
            </span>
          </div>
          <button
            onClick={handleResetToLatest}
            className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/40 text-amber-100 border border-amber-500/40 rounded-xs text-[10px] font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3 text-teal-uno" />
            <span>Volver al Avance Más Reciente (05 Sep 2026 - 68%)</span>
          </button>
        </div>
      )}

      {/* 2. EXECUTIVE HERO & RESIDENT ARCHITECT BANNER */}
      <section className="bg-gradient-to-b from-[#141418] via-[#101014] to-[#0e0e10] border-b border-[#c2a275]/20 px-4 sm:px-8 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* LEFT: Project Executive Information */}
            <div className="lg:col-span-7 space-y-3 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#c2a275]/15 text-[#c2a275] border border-[#c2a275]/30 text-[10px] font-label-caps uppercase tracking-widest font-bold">
                  {currentProject.typology}
                </span>
                <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-teal-uno" />
                  {currentProject.location}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno border border-teal-uno/30 text-[10px] font-mono">
                  Ciclo de Obra: Ago — Dic 2026
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                {currentProject.propertyName}
              </h1>

              <p className="text-xs sm:text-sm text-[#e4ded5]/70 max-w-xl leading-relaxed">
                Supervisión técnica de obra para <strong className="text-white font-medium">{currentProject.clientName}</strong>. Registro oficial de avances, dictámenes de calidad y bitácora interactiva de Agosto a Diciembre 2026.
              </p>

              {/* METADATA PILLS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#181820] border border-[#c2a275]/20 rounded-xs">
                  <span className="text-[10px] font-label-caps uppercase text-[#c2a275] block">Superficie Total</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">{currentProject.totalArea}</span>
                </div>
                <div className="p-3 bg-[#181820] border border-[#c2a275]/20 rounded-xs">
                  <span className="text-[10px] font-label-caps uppercase text-[#c2a275] block">Inicio Contractual</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">{currentProject.startDate}</span>
                </div>
                <div className="p-3 bg-[#181820] border border-[#c2a275]/20 rounded-xs col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-label-caps uppercase text-[#c2a275] block">Entrega Estimada</span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400">{currentProject.estimatedDelivery}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Progress Radial Gauge & Architect Card */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* RADIAL PROGRESS GAUGE */}
              <div className="bg-[#181822] border border-[#c2a275]/30 p-5 rounded-xs flex items-center justify-between gap-4 shadow-xl">
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-label-caps uppercase tracking-widest text-[#c2a275]">
                      {selectedMilestone?.isLatest ? "Último Avance Registrado" : "Avance Fecha Seleccionada"}
                    </span>
                    {selectedMilestone?.isLatest && (
                      <span className="px-1.5 py-0.2 rounded-full bg-teal-uno text-[9px] text-white font-mono font-bold">
                        MÁS RECIENTE
                      </span>
                    )}
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white flex items-baseline gap-1">
                    <span>{activeProgress}</span>
                    <span className="text-lg text-teal-uno font-sans font-normal">%</span>
                  </div>
                  <span className="text-[11px] text-[#e4ded5]/70 block line-clamp-1">
                    {activePhase}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 block">
                    Fecha del Registro: {selectedMilestone?.displayDate}
                  </span>
                </div>

                {/* Animated Radial Circle */}
                <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-black/60"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-teal-uno"
                      strokeDasharray={`${activeProgress}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <Award className="w-6 h-6 text-[#c2a275] absolute" />
                </div>
              </div>

              {/* RESIDENT ARCHITECT CONTACT CARD */}
              <div className="bg-[#181822] border border-[#c2a275]/30 p-5 rounded-xs space-y-3 shadow-xl text-left">
                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
                  <span className="text-[10px] font-label-caps uppercase tracking-wider text-[#c2a275]">
                    Director de Obra Asignado
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    En Supervisión
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-teal-uno/20 border border-teal-uno/40 flex items-center justify-center text-teal-uno font-serif font-bold text-sm flex-shrink-0 overflow-hidden">
                    {currentProject.director.photo ? (
                      <img
                        src={currentProject.director.photo}
                        alt={currentProject.director.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>AC</span>
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-sm font-semibold text-white">
                      {currentProject.director.name}
                    </h4>
                    <p className="text-[10px] text-zinc-400 font-label-caps uppercase">
                      {currentProject.director.role}
                    </p>
                  </div>
                </div>

                {/* DIRECT WHATSAPP & PHONE ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://wa.me/${currentProject.director.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${currentProject.director.phone.replace(/[^0-9+]/g, "")}`}
                    className="py-2 px-3 bg-white/5 hover:bg-white/10 text-[#e4ded5] border border-white/10 rounded-xs text-[11px] font-label-caps uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c2a275]" />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE WORK CALENDAR (AUGUST TO DECEMBER) */}
      <section className="bg-[#0e0e10] border-b border-[#c2a275]/20 px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <ConstructionCalendar
            milestones={currentProject.milestones || []}
            selectedMilestone={selectedMilestone}
            onSelectMilestone={(m) => setSelectedMilestone(m)}
            onViewTour={() => setActiveTab("360")}
            onViewPhotos={() => setActiveTab("photos")}
          />
        </div>
      </section>

      {/* 3. LUXURY TABS NAVIGATION */}
      <section className="bg-[#141418] border-b border-[#c2a275]/25 sticky top-[57px] sm:top-[61px] z-30 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-2">
          <button
            onClick={() => setActiveTab("360")}
            className={`px-4 sm:px-6 py-2.5 font-label-caps text-xs uppercase tracking-wider font-semibold rounded-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0 ${
              activeTab === "360"
                ? "bg-teal-uno text-white shadow-lg shadow-teal-uno/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Recorrido 360° CloudPano</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 font-mono">
              {tours.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-4 sm:px-6 py-2.5 font-label-caps text-xs uppercase tracking-wider font-semibold rounded-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0 ${
              activeTab === "timeline"
                ? "bg-teal-uno text-white shadow-lg shadow-teal-uno/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Hammer className="w-4 h-4" />
            <span>Cronograma de Fases</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 font-mono">8</span>
          </button>

          <button
            onClick={() => setActiveTab("photos")}
            className={`px-4 sm:px-6 py-2.5 font-label-caps text-xs uppercase tracking-wider font-semibold rounded-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0 ${
              activeTab === "photos"
                ? "bg-teal-uno text-white shadow-lg shadow-teal-uno/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Bitácora Fotográfica</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 font-mono">
              {currentProject.photoReports.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("beforeAfter")}
            className={`px-4 sm:px-6 py-2.5 font-label-caps text-xs uppercase tracking-wider font-semibold rounded-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0 ${
              activeTab === "beforeAfter"
                ? "bg-teal-uno text-white shadow-lg shadow-teal-uno/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <SplitSquareVertical className="w-4 h-4" />
            <span>Antes vs. Estado Actual</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 font-mono">
              {currentProject.beforeAfterComparisons.length}
            </span>
          </button>
        </div>
      </section>

      {/* 4. MAIN TAB CONTENT PANELS */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <AnimatePresence mode="wait">
          {activeTab === "360" && (
            <motion.div
              key="360"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <CloudPanoViewer
                tours={tours}
                propertyName={currentProject.propertyName}
                selectedTourId={selectedMilestone?.tourId}
                onUpdateTour={handleUpdateTour}
              />
            </motion.div>
          )}

          {activeTab === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ConstructionTimeline
                phases={currentProject.phases}
                globalProgress={activeProgress}
                currentPhaseName={activePhase}
              />
            </motion.div>
          )}

          {activeTab === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <PhotoReportsGrid
                photoReports={currentProject.photoReports}
                propertyName={currentProject.propertyName}
              />
            </motion.div>
          )}

          {activeTab === "beforeAfter" && (
            <motion.div
              key="beforeAfter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <BeforeAfterSlider
                items={currentProject.beforeAfterComparisons}
                propertyName={currentProject.propertyName}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 5. FOOTER PROTOCOL */}
      <footer className="bg-[#0a0a0c] border-t border-[#c2a275]/20 py-6 px-4 sm:px-8 text-center text-xs text-zinc-500 font-label-caps uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>UNO Arquitectos • Portal de Clientes Privado v2.2</span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowReportModal(true)}
            className="text-[#c2a275] hover:text-white transition-colors cursor-pointer"
          >
            Dictamen PDF
          </button>
          <span>•</span>
          <span>Playa del Carmen & Tulum, México</span>
        </div>
      </footer>

      {/* 6. EXECUTIVE REPORT MODAL (PDF / PRINT) */}
      <AnimatePresence>
        {showReportModal && (
          <ExecutiveReportModal
            project={currentProject}
            onClose={() => setShowReportModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

