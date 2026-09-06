import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Phone, 
  MessageSquare, 
  FileText, 
  LogOut, 
  Compass, 
  Camera, 
  ChevronDown,
  Sparkles,
  Award,
  CheckCircle2,
  X
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
  const portalContainerRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"all" | "360" | "photos">("all");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showProjectSwitcher, setShowProjectSwitcher] = useState(false);

  // Synchronized active tour and date state
  const [tours, setTours] = useState<Tour360Folder[]>(currentProject.cloudpanoTours);
  const [selectedTourId, setSelectedTourId] = useState<string>(
    currentProject.cloudpanoTours[0]?.id || "tour-arrecifes-05sep2026"
  );

  // On mount and project change, ensure screen is positioned at the top
  useEffect(() => {
    if (portalContainerRef.current) {
      portalContainerRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    setTours(currentProject.cloudpanoTours);
    if (currentProject.cloudpanoTours[0]?.id) {
      setSelectedTourId(currentProject.cloudpanoTours[0].id);
    }
    if (portalContainerRef.current) {
      portalContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentProject]);

  const activeTour = tours.find((t) => t.id === selectedTourId) || tours[0];
  const activeDate = activeTour?.date || "05 Septiembre 2026";
  const activeProgress = activeTour?.progress || currentProject.globalProgress;
  const activePhase = activeTour?.phaseName || currentProject.currentPhaseName;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el && portalContainerRef.current) {
      const topOffset = el.offsetTop - 80;
      portalContainerRef.current.scrollTo({ top: Math.max(0, topOffset), behavior: "smooth" });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectTour = (tourId: string) => {
    setSelectedTourId(tourId);
    setTimeout(() => {
      scrollToSection("seccion-galeria-activa");
    }, 150);
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

  const whatsappMessage = encodeURIComponent(
    `Hola Arq. Angel Cereceda, consulto sobre el avance de obra de ${currentProject.propertyName} (${currentProject.location}) - Levantamiento del ${activeDate} (${activeProgress}% Avance). Quisiera coordinar una sesión de revisión técnica.`
  );

  return (
    <div 
      ref={portalContainerRef}
      id="client-portal-root"
      className="fixed inset-0 z-50 bg-background text-gris-texto overflow-y-auto font-sans flex flex-col selection:bg-teal-uno selection:text-white texture-overlay scroll-smooth"
    >
      {/* 1. LUXURY EXECUTIVE TOP NAVBAR */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-arena-calida/30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-ethereal">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2.5">
            <Logo showText={true} iconSize={32} theme="adaptive" textSize="text-xs sm:text-sm font-semibold tracking-wider" />
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-arena-calida/15 text-arena-calida text-[10px] font-label-caps uppercase tracking-widest border border-arena-calida/30 font-semibold">
              Área Clientes
            </span>
          </div>

          {/* PROJECT SWITCHER DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setShowProjectSwitcher(!showProjectSwitcher)}
              className="px-3.5 py-1.5 bg-white/80 hover:bg-white text-gris-texto border border-arena-calida/40 rounded-full text-xs font-label-caps uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-xs"
            >
              <Building2 className="w-3.5 h-3.5 text-teal-uno" />
              <span className="font-semibold">{currentProject.propertyName}</span>
              <ChevronDown className="w-3 h-3 text-gris-texto/60" />
            </button>

            {/* Dropdown Menu */}
            {showProjectSwitcher && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-arena-calida/30 rounded-2xl shadow-2xl z-50 p-2 space-y-1">
                <div className="p-2 text-[10px] font-label-caps uppercase text-arena-calida tracking-widest border-b border-arena-calida/20 font-semibold">
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
                    className={`w-full p-2.5 text-left rounded-xl text-xs font-sans transition-colors flex items-center justify-between cursor-pointer ${
                      p.id === currentProject.id
                        ? "bg-teal-uno/10 text-teal-uno font-bold"
                        : "text-gris-texto hover:bg-arena-calida/10"
                    }`}
                  >
                    <span className="font-medium">{p.propertyName}</span>
                    <span className="text-[10px] font-mono text-arena-calida">({p.globalProgress}%)</span>
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
            className="px-3.5 sm:px-4 py-2 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-[11px] sm:text-xs font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 shadow-ethereal cursor-pointer active:scale-95"
            title="Abrir Asesor Técnico con Inteligencia Artificial Gemini"
          >
            <Sparkles className="w-3.5 h-3.5 text-arena-calida" />
            <span className="hidden sm:inline">IA Gemini • Asesor</span>
            <span className="sm:hidden">IA Gemini</span>
          </button>

          <button
            onClick={() => setShowReportModal(true)}
            className="px-3.5 sm:px-4 py-2 bg-white/80 hover:bg-white text-teal-uno border border-arena-calida/40 rounded-full text-[11px] sm:text-xs font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
            title="Generar e imprimir informe de supervisión en PDF"
          >
            <FileText className="w-3.5 h-3.5 text-teal-uno" />
            <span className="hidden sm:inline">Dictamen PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>

          <button
            onClick={onLogout}
            className="px-3.5 py-2 bg-surface-container-low hover:bg-red-50 text-gris-texto hover:text-red-600 border border-arena-calida/30 rounded-full text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Cerrar sesión"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Cerrar Sesión</span>
          </button>

          <button
            onClick={onClose}
            className="text-gris-texto hover:text-teal-uno p-2 rounded-full hover:bg-arena-calida/10 transition-colors cursor-pointer"
            title="Salir al sitio web principal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* QUICK JUMP SECTION SUB-NAV */}
      <div className="bg-surface-container-lowest/90 backdrop-blur-md border-b border-arena-calida/20 px-4 sm:px-8 py-2.5 flex items-center justify-between gap-3 overflow-x-auto shadow-xs sticky top-[57px] z-30">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <span className="text-[10px] font-label-caps uppercase tracking-widest text-arena-calida font-bold whitespace-nowrap mr-1 hidden md:inline-block">
            Navegación:
          </span>
          <button
            onClick={() => scrollToSection("resumen-ejecutivo")}
            className="px-3 py-1 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold text-gris-texto hover:text-teal-uno hover:bg-white border border-arena-calida/20 transition whitespace-nowrap cursor-pointer"
          >
            🏛️ Resumen General
          </button>
          <button
            onClick={() => scrollToSection("fichas-avance")}
            className="px-3 py-1 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold text-gris-texto hover:text-teal-uno hover:bg-white border border-arena-calida/20 transition whitespace-nowrap cursor-pointer"
          >
            📅 Fichas de Obra
          </button>
          <button
            onClick={() => {
              setViewMode("360");
              scrollToSection("seccion-galeria-activa");
            }}
            className="px-3 py-1 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold text-teal-uno bg-white/80 hover:bg-white border border-teal-uno/30 transition whitespace-nowrap cursor-pointer font-bold"
          >
            🔄 Visor 360°
          </button>
          <button
            onClick={() => {
              setViewMode("photos");
              scrollToSection("seccion-galeria-activa");
            }}
            className="px-3 py-1 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold text-gris-texto hover:text-teal-uno hover:bg-white border border-arena-calida/20 transition whitespace-nowrap cursor-pointer"
          >
            📷 Galería HD
          </button>
          <button
            onClick={() => scrollToSection("contacto-director")}
            className="px-3 py-1 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold text-gris-texto hover:text-teal-uno hover:bg-white border border-arena-calida/20 transition whitespace-nowrap cursor-pointer ml-auto"
          >
            👤 Director de Obra
          </button>
        </div>
      </div>

      {/* 2. EXECUTIVE HERO & RESIDENT ARCHITECT BANNER */}
      <section id="resumen-ejecutivo" className="bg-surface-container-low/60 border-b border-arena-calida/20 px-4 sm:px-8 py-10 sm:py-14 relative texture-overlay overflow-hidden">
        {/* Decorative Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arena-calida/40 to-transparent"></div>

        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: Project Executive Information */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="w-8 sm:w-12 h-[1px] bg-arena-calida inline-block"></span>
                <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-uno" />
                  {currentProject.location}
                </span>
              </div>

              <h1 className="font-headline-xl text-headline-xl text-teal-uno uppercase font-semibold leading-tight">
                {currentProject.propertyName}
              </h1>

              <p className="font-body-md text-body-md text-gris-texto max-w-xl leading-relaxed">
                Supervisión técnica de obra para <strong className="text-teal-uno font-semibold">{currentProject.clientName}</strong>. Registro oficial de avances, dictámenes de calidad y bitácora de obra con galería de fotos 360° y reportes fotográficos periódicos.
              </p>

              {/* METADATA PILLS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 bg-white/70 backdrop-blur-md border border-arena-calida/30 rounded-2xl shadow-xs">
                  <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mb-1">
                    Superficie Total
                  </span>
                  <span className="font-headline-md text-xs sm:text-sm font-semibold text-gris-texto block">
                    {currentProject.totalArea}
                  </span>
                </div>
                <div className="p-4 bg-white/70 backdrop-blur-md border border-arena-calida/30 rounded-2xl shadow-xs">
                  <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mb-1">
                    Inicio Contractual
                  </span>
                  <span className="font-headline-md text-xs sm:text-sm font-semibold text-gris-texto block">
                    {currentProject.startDate}
                  </span>
                </div>
                <div className="p-4 bg-white/70 backdrop-blur-md border border-arena-calida/30 rounded-2xl shadow-xs col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mb-1">
                    Entrega Estimada
                  </span>
                  <span className="font-headline-md text-xs sm:text-sm font-semibold text-teal-uno block">
                    {currentProject.estimatedDelivery}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Dynamic Progress Radial Gauge & Architect Card */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {/* RADIAL PROGRESS GAUGE (DYNAMIC TO SELECTED DATE) */}
              <div className="bg-white/80 backdrop-blur-md border border-arena-calida/30 p-6 rounded-3xl shadow-ethereal flex items-center justify-between gap-4 transition-all duration-300">
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
                      Avance Seleccionado
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno text-[9px] font-mono font-bold border border-teal-uno/30">
                      {activeDate.toUpperCase()}
                    </span>
                  </div>
                  <div className="font-headline-xl text-3xl sm:text-4xl font-bold text-teal-uno flex items-baseline gap-1">
                    <motion.span
                      key={activeProgress}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeProgress}
                    </motion.span>
                    <span className="text-lg text-arena-calida font-sans font-medium">%</span>
                  </div>
                  <span className="text-xs text-gris-texto font-medium block line-clamp-1">
                    {activePhase}
                  </span>
                  <span className="text-[10px] font-mono text-gris-texto/60 block">
                    Levantamiento Oficial: {activeDate}
                  </span>
                </div>

                {/* Animated Radial Circle */}
                <div className="relative w-22 h-22 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-foundation-gray/40"
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
                  <Award className="w-7 h-7 text-arena-calida absolute" />
                </div>
              </div>

              {/* RESIDENT ARCHITECT CONTACT CARD */}
              <div id="contacto-director" className="bg-white/80 backdrop-blur-md border border-arena-calida/30 p-6 rounded-3xl space-y-4 shadow-ethereal text-left">
                <div className="flex items-center justify-between gap-2 border-b border-arena-calida/20 pb-3">
                  <span className="text-[10px] font-label-caps uppercase tracking-wider text-arena-calida font-semibold">
                    Director de Obra Asignado
                  </span>
                  <span className="text-[10px] text-teal-uno font-label-caps uppercase font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-uno animate-ping" />
                    En Supervisión
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-arena-calida/20 border border-arena-calida/40 flex items-center justify-center text-teal-uno font-sans font-bold text-sm flex-shrink-0 overflow-hidden shadow-xs">
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
                    <h4 className="font-headline-md text-sm sm:text-base font-semibold text-teal-uno uppercase">
                      {currentProject.director.name}
                    </h4>
                    <p className="text-[11px] text-arena-calida font-label-caps uppercase tracking-wider font-semibold">
                      {currentProject.director.role}
                    </p>
                  </div>
                </div>

                {/* DIRECT WHATSAPP & PHONE ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={`https://wa.me/${currentProject.director.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${currentProject.director.phone.replace(/[^0-9+]/g, "")}`}
                    className="py-2.5 px-4 bg-white/80 hover:bg-white text-gris-texto border border-arena-calida/40 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-arena-calida" />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE PROGRESS SELECTOR CARDS (FICHAS DE AVANCE) */}
      <section id="fichas-avance" className="bg-surface-variant/40 border-b border-arena-calida/20 px-4 sm:px-8 py-8 sm:py-10 texture-overlay">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
                <Calendar className="w-4 h-4 text-teal-uno" />
                <span>Seleccionar Ficha de Avance de Obra</span>
              </div>
              <p className="font-body-md text-xs sm:text-sm text-gris-texto mt-1">
                Al seleccionar una fecha se sincroniza la Galería de Fotos 360° y la Galería de Fotos Encuadradas.
              </p>
            </div>

            {/* VIEW MODE TOGGLE BUTTONS */}
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-arena-calida/30 shadow-xs self-start sm:self-auto">
              <button
                onClick={() => setViewMode("all")}
                className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  viewMode === "all"
                    ? "bg-teal-uno text-white shadow-sm"
                    : "text-gris-texto hover:text-teal-uno"
                }`}
              >
                Ficha Completa
              </button>
              <button
                onClick={() => setViewMode("360")}
                className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  viewMode === "360"
                    ? "bg-teal-uno text-white shadow-sm"
                    : "text-gris-texto hover:text-teal-uno"
                }`}
              >
                Fotos 360°
              </button>
              <button
                onClick={() => setViewMode("photos")}
                className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  viewMode === "photos"
                    ? "bg-teal-uno text-white shadow-sm"
                    : "text-gris-texto hover:text-teal-uno"
                }`}
              >
                Fotos Encuadradas
              </button>
            </div>
          </div>

          {/* DATE SELECTOR CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tours.map((tour) => {
              const isSelected = tour.id === selectedTourId;
              const photoCount = currentProject.photoReports.filter((p) => p.period === tour.date).length;
              const scene360Count = tour.scenes?.length || 0;
              const isFirst = tour.id === tours[0].id;

              return (
                <button
                  key={tour.id}
                  onClick={() => handleSelectTour(tour.id)}
                  className={`p-6 rounded-3xl border text-left transition-all duration-500 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-white/95 backdrop-blur-md border-teal-uno shadow-ethereal ring-2 ring-teal-uno/40 -translate-y-1"
                      : "bg-white/70 backdrop-blur-md border-arena-calida/30 hover:border-teal-uno/60 hover:shadow-ethereal hover:-translate-y-1"
                  }`}
                >
                  {/* Top Active Indicator Strip */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-uno via-arena-calida to-teal-uno" />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`font-label-caps text-xs uppercase tracking-wider font-bold ${
                        isSelected ? "text-teal-uno" : "text-gris-texto"
                      }`}>
                        {tour.date}
                      </span>
                      {isFirst && (
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno border border-teal-uno/30 text-[9px] font-label-caps uppercase font-bold">
                          Último Avance
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-arena-calida/15 text-arena-calida border border-arena-calida/30">
                      {tour.progress}% Avance
                    </span>
                  </div>

                  <h4 className="font-headline-md text-base sm:text-lg uppercase text-teal-uno font-semibold group-hover:text-arena-calida transition-colors line-clamp-1">
                    {tour.title}
                  </h4>

                  <p className="font-body-md text-xs sm:text-sm text-gris-texto mt-1.5 line-clamp-2 leading-relaxed">
                    {tour.notes}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-gris-texto/70 mt-4 pt-3.5 border-t border-arena-calida/20 font-label-caps uppercase">
                    <span className="flex items-center gap-1.5 text-teal-uno font-semibold">
                      <Compass className="w-3.5 h-3.5" />
                      {scene360Count} Fotos 360°
                    </span>
                    <span className="flex items-center gap-1.5 text-arena-calida font-semibold">
                      <Camera className="w-3.5 h-3.5" />
                      {photoCount} Fotos Encuadradas
                    </span>
                    {isSelected && (
                      <span className="ml-auto text-teal-uno flex items-center gap-1 font-bold">
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
      <main id="seccion-galeria-activa" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-12">
        {/* VIEW MODE 1: FICHA COMPLETA (FOTOS 360 + FOTOS ENCUADRADAS) */}
        {viewMode === "all" && (
          <div className="space-y-14">
            {/* PART 1: GALERÍA DE FOTOS 360° */}
            <section id="visor-360" className="space-y-5 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-arena-calida/20 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
                    <Compass className="w-4 h-4 text-teal-uno" />
                    <span>Recorridos & Puntos 360°</span>
                  </div>
                  <h3 className="font-headline-md text-xl sm:text-2xl text-teal-uno uppercase font-semibold mt-1">
                    Galería de Fotos 360° Inmersiva • {activeDate}
                  </h3>
                </div>
                <span className="text-xs font-label-caps uppercase text-arena-calida font-semibold bg-arena-calida/15 px-3 py-1 rounded-full border border-arena-calida/30 self-start sm:self-auto">
                  {activeTour?.scenes?.length || 0} Puntos Esféricos
                </span>
              </div>

              <CloudPanoViewer
                tours={tours}
                selectedTourId={selectedTourId}
                hideTourSelector={true}
                onSelectTourId={handleSelectTour}
                onUpdateTour={handleUpdateTour}
              />
            </section>

            {/* PART 2: GALERÍA DE FOTOS ENCUADRADAS */}
            <section id="galeria-hd" className="space-y-5 text-left">
              <PhotoReportsGrid
                photoReports={currentProject.photoReports}
                selectedPeriod={activeDate}
                onSelectPeriod={handleSelectPeriod}
                onOpenAiAssistant={() => setShowAIAssistant(true)}
              />
            </section>
          </div>
        )}

        {/* VIEW MODE 2: SOLO FOTOS 360° */}
        {viewMode === "360" && (
          <motion.div
            key={`360-${selectedTourId}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-5 text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-arena-calida/20 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-arena-calida font-semibold">
                  <Compass className="w-4 h-4 text-teal-uno" />
                  <span>Recorridos & Puntos 360°</span>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-teal-uno uppercase font-semibold mt-1">
                  Visor Esférico Inmersivo 360° • {activeDate}
                </h3>
              </div>
              <span className="text-xs font-label-caps uppercase text-arena-calida font-semibold bg-arena-calida/15 px-3 py-1 rounded-full border border-arena-calida/30 self-start sm:self-auto">
                {activeTour?.scenes?.length || 0} Puntos Esféricos
              </span>
            </div>

            <CloudPanoViewer
              tours={tours}
              selectedTourId={selectedTourId}
              hideTourSelector={true}
              onSelectTourId={handleSelectTour}
              onUpdateTour={handleUpdateTour}
            />
          </motion.div>
        )}

        {/* VIEW MODE 3: SOLO FOTOS ENCUADRADAS */}
        {viewMode === "photos" && (
          <motion.div
            key={`photos-${selectedTourId}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-5 text-left"
          >
            <PhotoReportsGrid
              photoReports={currentProject.photoReports}
              selectedPeriod={activeDate}
              onSelectPeriod={handleSelectPeriod}
              onOpenAiAssistant={() => setShowAIAssistant(true)}
            />
          </motion.div>
        )}
      </main>

      {/* 5. FOOTER PROTOCOL */}
      <footer className="bg-surface-container-low border-t border-arena-calida/20 py-8 px-4 sm:px-8 text-center text-xs text-gris-texto font-label-caps uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>UNO Arquitectos • Portal de Clientes Privado v2.2</span>
        <span className="text-arena-calida font-semibold">Playa del Carmen & Tulum, Quintana Roo, México</span>
      </footer>

      {/* 6. FLOATING ACTION BUTTON FOR GEMINI AI CONSULTANT */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowAIAssistant(true)}
          className="group relative flex items-center gap-3 px-5 py-3.5 bg-teal-uno hover:bg-arena-calida text-white font-label-caps text-xs uppercase tracking-wider rounded-full shadow-2xl shadow-teal-uno/25 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/40 cursor-pointer"
          title="Consultar al Asesor de Obra con Inteligencia Artificial Gemini"
        >
          <div className="w-8 h-8 rounded-full bg-white text-teal-uno flex items-center justify-center flex-shrink-0 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <span className="block text-[9px] font-sans font-semibold tracking-widest uppercase opacity-90">Asesor de Obra</span>
            <span className="block text-xs font-semibold tracking-wide">IA Gemini</span>
          </div>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-arena-calida rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-arena-calida rounded-full border-2 border-white" />
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
