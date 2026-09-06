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
  ShieldCheck, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  Award,
  RotateCcw,
  Layers,
  FolderOpen,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import { ClientProject, Tour360Folder } from "../../types/clientPortal";
import CloudPanoViewer from "./CloudPanoViewer";
import PhotoReportsGrid from "./PhotoReportsGrid";
import ExecutiveReportModal from "./ExecutiveReportModal";
import ClientAIAssistantModal from "./ClientAIAssistantModal";
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
  const [viewMode, setViewMode] = useState<"all" | "360" | "photos">("all");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showProjectSwitcher, setShowProjectSwitcher] = useState(false);

  // Synchronized active tour and date state
  const [tours, setTours] = useState<Tour360Folder[]>(currentProject.cloudpanoTours);
  const [selectedTourId, setSelectedTourId] = useState<string>(
    currentProject.cloudpanoTours[0]?.id || "tour-arrecifes-05sep2026"
  );

  useEffect(() => {
    setTours(currentProject.cloudpanoTours);
    if (currentProject.cloudpanoTours[0]?.id) {
      setSelectedTourId(currentProject.cloudpanoTours[0].id);
    }
  }, [currentProject]);

  const activeTour = tours.find((t) => t.id === selectedTourId) || tours[0];
  const activeDate = activeTour?.date || "05 Septiembre 2026";
  const activeProgress = activeTour?.progress || currentProject.globalProgress;
  const activePhase = activeTour?.phaseName || currentProject.currentPhaseName;

  const handleSelectTour = (tourId: string) => {
    setSelectedTourId(tourId);
  };

  const handleSelectPeriod = (period: string) => {
    if (period === "Todos") return;
    const matchingTour = tours.find(
      (t) => t.date === period || period.includes(t.date) || t.date.includes(period)
    );
    if (matchingTour) {
      setSelectedTourId(matchingTour.id);
    }
  };

  const handleUpdateTour = (tourId: string, updated: Partial<Tour360Folder>) => {
    setTours((prev) =>
      prev.map((t) => (t.id === tourId ? { ...t, ...updated } : t))
    );
  };

  const getDriveUrlForDate = (date: string) => {
    if (date.includes("05") || date.includes("Septiembre")) {
      return "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link";
    }
    if (date.includes("27") || date.includes("28") || date.includes("Agosto")) {
      return "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link";
    }
    return "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing";
  };

  const currentDriveUrl = activeTour?.folderUrl || getDriveUrlForDate(activeDate);

  const whatsappMessage = encodeURIComponent(
    `Hola Arq. Angel Cereceda, consulto sobre el avance de obra de ${currentProject.propertyName} (${currentProject.location}) - Levantamiento del ${activeDate} (${activeProgress}% Avance). Quisiera coordinar una sesión de revisión técnica.`
  );

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
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowAIAssistant(true)}
            className="px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-uno via-[#009e9e] to-teal-uno hover:brightness-110 text-white rounded-xs text-[11px] sm:text-xs font-label-caps uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-teal-uno/20 cursor-pointer active:scale-95 border border-teal-uno/50 animate-pulse-subtle"
            title="Abrir Asesor Técnico con Inteligencia Artificial Gemini 3.6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c2a275]" />
            <span className="hidden sm:inline">IA Gemini • Asesor de Obra</span>
            <span className="sm:hidden">IA Gemini</span>
          </button>

          <button
            onClick={() => setShowReportModal(true)}
            className="px-3 sm:px-4 py-2 bg-[#1f1f28] hover:bg-[#282834] text-[#e4ded5] border border-[#c2a275]/30 rounded-xs text-[11px] sm:text-xs font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 shadow-md cursor-pointer active:scale-95"
            title="Generar e imprimir informe de supervisión en PDF"
          >
            <FileText className="w-3.5 h-3.5 text-teal-uno" />
            <span className="hidden sm:inline">Dictamen PDF</span>
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

      {/* 2. EXECUTIVE HERO & RESIDENT ARCHITECT BANNER */}
      <section className="bg-gradient-to-b from-[#141418] via-[#101014] to-[#0e0e10] border-b border-[#c2a275]/20 px-4 sm:px-8 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* LEFT: Project Executive Information */}
            <div className="lg:col-span-7 space-y-3 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-teal-uno" />
                  {currentProject.location}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                {currentProject.propertyName}
              </h1>

              <p className="text-xs sm:text-sm text-[#e4ded5]/70 max-w-xl leading-relaxed">
                Supervisión técnica de obra para <strong className="text-white font-medium">{currentProject.clientName}</strong>. Registro oficial de avances, dictámenes de calidad y bitácora de obra con tours 360° y reportes fotográficos de Agosto a Diciembre 2026.
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

            {/* RIGHT: Dynamic Progress Radial Gauge & Architect Card */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* RADIAL PROGRESS GAUGE (DYNAMIC TO SELECTED DATE) */}
              <div className="bg-[#181822] border border-[#c2a275]/30 p-5 rounded-xs flex items-center justify-between gap-4 shadow-xl transition-all duration-300">
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-label-caps uppercase tracking-widest text-[#c2a275]">
                      Avance Seleccionado
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-uno text-[9px] text-white font-mono font-bold">
                      {activeDate.toUpperCase()}
                    </span>
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white flex items-baseline gap-1">
                    <motion.span
                      key={activeProgress}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeProgress}
                    </motion.span>
                    <span className="text-lg text-teal-uno font-sans font-normal">%</span>
                  </div>
                  <span className="text-[11px] text-[#e4ded5]/70 block line-clamp-1">
                    {activePhase}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 block">
                    Levantamiento Oficial: {activeDate}
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
                      className="text-teal-uno transition-all duration-700 ease-out"
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

      {/* 3. EXECUTIVE PROGRESS SELECTOR CARDS (FICHAS DE AVANCE) */}
      <section className="bg-[#141418] border-b border-[#c2a275]/25 px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]">
                <Calendar className="w-4 h-4 text-teal-uno" />
                <span>Seleccionar Ficha de Avance de Obra</span>
              </div>
              <p className="text-xs text-[#e4ded5]/70 mt-0.5">
                Al seleccionar una fecha se sincroniza el Recorrido 360° CloudPano, la Bitácora Fotográfica y las métricas de obra.
              </p>
            </div>

            {/* VIEW MODE TOGGLE BUTTONS */}
            <div className="flex items-center gap-1 bg-[#101014] p-1 rounded-xs border border-[#c2a275]/20 self-start sm:self-auto">
              <button
                onClick={() => setViewMode("all")}
                className={`px-3 py-1.5 rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  viewMode === "all"
                    ? "bg-teal-uno text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Ficha Completa (360° + Fotos)
              </button>
              <button
                onClick={() => setViewMode("360")}
                className={`px-3 py-1.5 rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  viewMode === "360"
                    ? "bg-teal-uno text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Solo 360°
              </button>
              <button
                onClick={() => setViewMode("photos")}
                className={`px-3 py-1.5 rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  viewMode === "photos"
                    ? "bg-teal-uno text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Solo Fotos
              </button>
            </div>
          </div>

          {/* DATE SELECTOR CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tours.map((tour) => {
              const isSelected = tour.id === selectedTourId;
              const photoCount = currentProject.photoReports.filter((p) => p.period === tour.date).length;
              const isFirst = tour.id === tours[0].id;

              return (
                <button
                  key={tour.id}
                  onClick={() => handleSelectTour(tour.id)}
                  className={`p-4 sm:p-5 rounded-xs border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-[#1f1f2a] border-[#c2a275] shadow-2xl shadow-[#c2a275]/10 ring-1 ring-[#c2a275]/60"
                      : "bg-[#141418] border-[#c2a275]/20 hover:border-[#c2a275]/50 hover:bg-[#191922]"
                  }`}
                >
                  {/* Top Active Indicator Strip */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-uno via-[#c2a275] to-teal-uno" />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-label-caps text-xs uppercase tracking-wider font-bold ${
                        isSelected ? "text-[#c2a275]" : "text-white"
                      }`}>
                        {tour.date}
                      </span>
                      {isFirst && (
                        <span className="px-2 py-0.5 rounded-full bg-teal-uno/20 text-teal-uno border border-teal-uno/40 text-[9px] font-label-caps uppercase font-bold">
                          Último Avance
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/60 text-teal-uno border border-teal-uno/30">
                      {tour.progress}% Avance
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-serif font-semibold text-white group-hover:text-[#c2a275] transition-colors line-clamp-1">
                    {tour.title}
                  </h4>

                  <p className="text-[11px] text-[#e4ded5]/70 mt-1 line-clamp-2 leading-relaxed">
                    {tour.notes}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] text-zinc-400 mt-3 pt-2.5 border-t border-white/5 font-label-caps uppercase">
                    <span className="flex items-center gap-1.5 text-teal-uno font-medium">
                      <Compass className="w-3.5 h-3.5" />
                      Tour 360° CloudPano
                    </span>
                    <span className="flex items-center gap-1.5 text-[#c2a275] font-medium">
                      <Camera className="w-3.5 h-3.5" />
                      {photoCount} Fotos Reencuadradas
                    </span>
                    {isSelected && (
                      <span className="ml-auto text-emerald-400 flex items-center gap-1 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Ficha Activa
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MAIN SYNCHRONIZED PROGRESS CONTENT */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-10">
        {/* ACTIVE FICHA HEADER & ACTION BAR */}
        <div className="bg-[#141418] border border-[#c2a275]/30 p-5 rounded-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#c2a275]/15 text-[#c2a275] font-label-caps uppercase text-[11px] tracking-wider border border-[#c2a275]/30 font-bold">
                {activeDate}
              </span>
              <span className="text-white font-serif text-base sm:text-lg font-semibold">
                {activeTour?.title}
              </span>
            </div>
            <p className="text-xs text-[#e4ded5]/80 leading-relaxed max-w-3xl">
              <strong className="text-[#c2a275] font-normal">Supervisión Técnica:</strong> {activeTour?.notes}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
            <button
              onClick={() => setShowAIAssistant(true)}
              className="flex items-center gap-1.5 text-xs text-black bg-gradient-to-r from-[#c2a275] to-[#e4ded5] hover:brightness-110 font-bold px-4 py-2.5 rounded-xs border border-[#c2a275]/50 transition-all shadow-md cursor-pointer active:scale-95"
              title="Preguntar a la IA Gemini sobre este avance específico"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span className="font-label-caps uppercase text-[11px] tracking-wider">
                Consultar IA de Obra
              </span>
            </button>

            <a
              href={currentDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#c2a275] bg-[#1f1f28] hover:bg-[#282834] hover:text-white px-4 py-2.5 rounded-xs border border-[#c2a275]/40 transition-colors shadow-xs cursor-pointer font-semibold"
              title="Descargar fotos y archivos de este avance en Google Drive"
            >
              <FolderOpen className="w-3.5 h-3.5 text-teal-uno" />
              <span className="font-label-caps uppercase text-[11px] tracking-wider">
                Drive ({activeDate.slice(0, 6)})
              </span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* VIEW MODE 1: FICHA COMPLETA (360 + FOTOS) */}
        {viewMode === "all" && (
          <div className="space-y-12">
            {/* PART 1: 360 CLOUDPANO VIEWER */}
            <section className="space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-[#c2a275]/20 pb-3">
                <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]">
                  <Compass className="w-4 h-4 text-teal-uno" />
                  <h3 className="font-serif text-xl sm:text-2xl text-white normal-case">
                    Recorrido Virtual 360° CloudPano • {activeDate}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-teal-uno hidden sm:inline">
                  Inspección Inmersiva en Vivo
                </span>
              </div>

              <CloudPanoViewer
                tours={tours}
                propertyName={currentProject.propertyName}
                selectedTourId={selectedTourId}
                hideTourSelector={true}
                onSelectTourId={handleSelectTour}
                onUpdateTour={handleUpdateTour}
              />
            </section>

            {/* PART 2: BITÁCORA FOTOGRÁFICA */}
            <section className="space-y-4 text-left">
              <PhotoReportsGrid
                photoReports={currentProject.photoReports}
                propertyName={currentProject.propertyName}
                selectedPeriod={activeDate}
                onSelectPeriod={handleSelectPeriod}
                onOpenAiAssistant={() => setShowAIAssistant(true)}
              />
            </section>
          </div>
        )}

        {/* VIEW MODE 2: SOLO RECORRIDO 360 */}
        {viewMode === "360" && (
          <motion.div
            key={`360-${selectedTourId}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <CloudPanoViewer
              tours={tours}
              propertyName={currentProject.propertyName}
              selectedTourId={selectedTourId}
              hideTourSelector={true}
              onSelectTourId={handleSelectTour}
              onUpdateTour={handleUpdateTour}
            />
          </motion.div>
        )}

        {/* VIEW MODE 3: SOLO BITÁCORA FOTOGRÁFICA */}
        {viewMode === "photos" && (
          <motion.div
            key={`photos-${selectedTourId}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <PhotoReportsGrid
              photoReports={currentProject.photoReports}
              propertyName={currentProject.propertyName}
              selectedPeriod={activeDate}
              onSelectPeriod={handleSelectPeriod}
              onOpenAiAssistant={() => setShowAIAssistant(true)}
            />
          </motion.div>
        )}
      </main>

      {/* 5. FOOTER PROTOCOL */}
      <footer className="bg-[#0a0a0c] border-t border-[#c2a275]/20 py-6 px-4 sm:px-8 text-center text-xs text-zinc-500 font-label-caps uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>UNO Arquitectos • Portal de Clientes Privado v2.2</span>
        <span>Playa del Carmen & Tulum, México</span>
      </footer>

      {/* 6. FLOATING ACTION BUTTON FOR GEMINI AI CONSULTANT */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowAIAssistant(true)}
          className="group relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#c2a275] via-[#d4b98c] to-[#c2a275] text-black font-serif font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl shadow-[#c2a275]/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/50 cursor-pointer"
          title="Consultar al Asesor de Obra con Inteligencia Artificial Gemini"
        >
          <div className="w-8 h-8 rounded-full bg-black/90 text-[#c2a275] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <span className="block text-[9px] font-sans font-bold tracking-widest uppercase opacity-80">Asesor de Obra</span>
            <span className="block text-xs font-serif font-bold tracking-wide">IA Gemini</span>
          </div>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-uno rounded-full border-2 border-black animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-uno rounded-full border-2 border-black" />
        </button>
      </div>

      {/* 7. EXECUTIVE REPORT MODAL (PDF / PRINT) */}
      <AnimatePresence>
        {showReportModal && (
          <ExecutiveReportModal
            project={currentProject}
            onClose={() => setShowReportModal(false)}
          />
        )}
      </AnimatePresence>

      {/* 8. GEMINI AI TECHNICAL CONSULTANT MODAL */}
      <AnimatePresence>
        {showAIAssistant && (
          <ClientAIAssistantModal
            project={currentProject}
            onClose={() => setShowAIAssistant(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}


