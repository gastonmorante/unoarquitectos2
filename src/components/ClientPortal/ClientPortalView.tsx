import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Compass, 
  Camera, 
  ChevronDown,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowLeft,
  FileText,
  FolderOpen,
  ExternalLink
} from "lucide-react";
import { ClientProject, Tour360Folder } from "../../types/clientPortal";
import CloudPanoViewer from "./CloudPanoViewer";
import PhotoReportsGrid from "./PhotoReportsGrid";
import DigitalLogbookTimeline from "./DigitalLogbookTimeline";
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
  onClose,
}: ClientPortalViewProps) {
  const [viewMode, setViewMode] = useState<"all" | "bitacora" | "360" | "photos">("all");
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showProjectSwitcher, setShowProjectSwitcher] = useState(false);

  // Synchronized active tour and date state
  const [tours, setTours] = useState<Tour360Folder[]>(currentProject.cloudpanoTours);
  const [selectedTourId, setSelectedTourId] = useState<string>(
    currentProject.cloudpanoTours[0]?.id || "tour-arrecifes-05sep2026"
  );

  // Strictly position the window at the top (y = 0) on initial mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const t = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 40);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setTours(currentProject.cloudpanoTours);
    if (currentProject.cloudpanoTours[0]?.id) {
      setSelectedTourId(currentProject.cloudpanoTours[0].id);
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

  const whatsappMessage = encodeURIComponent(
    `Hola Arq. Angel Cereceda, consulto sobre el avance de obra de ${currentProject.propertyName} (${currentProject.location}) - Levantamiento del ${activeDate} (${activeProgress}% Avance). Quisiera coordinar una sesión de revisión técnica.`
  );

  return (
    <div 
      id="client-portal-root"
      className="min-h-screen w-full bg-background text-gris-texto font-sans flex flex-col selection:bg-teal-uno selection:text-white texture-overlay"
    >
      {/* 1. LUXURY EXECUTIVE TOP NAVBAR (MATCHING media_1788670102280.png) */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-arena-calida/30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-ethereal">
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2.5 cursor-pointer group"
            title="Volver a la página principal de UNO Arquitectos"
          >
            <Logo showText={true} iconSize={32} theme="adaptive" textSize="text-xs sm:text-sm font-semibold tracking-wider" />
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-arena-calida/15 text-arena-calida text-[10px] font-label-caps uppercase tracking-widest border border-arena-calida/30 font-semibold group-hover:bg-teal-uno group-hover:text-white transition-colors">
              Área Clientes
            </span>
          </button>

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

        {/* TOP ACTIONS: CERRAR Y VOLVER AL INICIO */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="px-4 sm:px-5 py-2 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-xs font-label-caps uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            title="Cerrar y volver al inicio de la página principal"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar y volver al inicio</span>
            <span className="sm:hidden">Inicio</span>
          </button>
        </div>
      </header>

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

              {/* GOOGLE DRIVE REPOSITORIES QUICK ACCESS PILLS */}
              {(currentProject.bitacoraFotograficaUrl || currentProject.bitacoraDigitalUrl) && (
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  {currentProject.bitacoraFotograficaUrl && (
                    <a
                      href={currentProject.bitacoraFotograficaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/90 hover:bg-teal-uno hover:text-white text-teal-uno border border-arena-calida/40 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer group"
                      title="Abrir carpeta 02 Bitácora Fotográfica en Google Drive"
                    >
                      <Camera className="w-3.5 h-3.5 text-arena-calida group-hover:text-white transition-colors" />
                      <span>02 Bitácora Fotográfica</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </a>
                  )}

                  {currentProject.bitacoraDigitalUrl && (
                    <a
                      href={currentProject.bitacoraDigitalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-teal-uno/10 hover:bg-teal-uno hover:text-white text-teal-uno border border-teal-uno/30 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer group"
                      title="Abrir carpeta 03 Bitácora Digital en Google Drive"
                    >
                      <FileText className="w-3.5 h-3.5 text-arena-calida group-hover:text-white transition-colors" />
                      <span>03 Bitácora Digital</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </a>
                  )}

                  {currentProject.masterDriveFolderUrl && (
                    <a
                      href={currentProject.masterDriveFolderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-white/70 hover:bg-arena-calida hover:text-white text-gris-texto border border-arena-calida/30 rounded-full text-[11px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs cursor-pointer font-medium group"
                      title="Abrir carpeta maestra de obra en Google Drive"
                    >
                      <FolderOpen className="w-3.5 h-3.5 text-teal-uno group-hover:text-white transition-colors" />
                      <span>Drive Maestro</span>
                    </a>
                  )}
                </div>
              )}
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

              {/* RESIDENT ARCHITECT CONTACT CARD (WHATSAPP ONLY) */}
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

                {/* DIRECT WHATSAPP ACTION BUTTON */}
                <div className="pt-1">
                  <a
                    href={`https://wa.me/${currentProject.director.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Contactar por WhatsApp</span>
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
            <div className="flex flex-wrap items-center gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-arena-calida/30 shadow-xs self-start sm:self-auto">
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
              {currentProject.digitalLogbook && currentProject.digitalLogbook.length > 0 && (
                <button
                  onClick={() => setViewMode("bitacora")}
                  className={`px-4 py-2 rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    viewMode === "bitacora"
                      ? "bg-teal-uno text-white shadow-sm"
                      : "text-gris-texto hover:text-teal-uno"
                  }`}
                >
                  Bitácora Digital
                </button>
              )}
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
        {/* VIEW MODE 1: FICHA COMPLETA (BITÁCORA DIGITAL + FOTOS 360 + FOTOS ENCUADRADAS) */}
        {viewMode === "all" && (
          <div className="space-y-14">
            {/* PART 1: BITÁCORA DIGITAL DE SUPERVISIÓN TÉCNICA (RESUMEN CRONOLÓGICO) */}
            {currentProject.digitalLogbook && currentProject.digitalLogbook.length > 0 && (
              <section id="bitacora-digital" className="space-y-5 text-left">
                <DigitalLogbookTimeline
                  entries={currentProject.digitalLogbook}
                  bitacoraFotograficaUrl={currentProject.bitacoraFotograficaUrl}
                  bitacoraDigitalUrl={currentProject.bitacoraDigitalUrl}
                  masterDriveFolderUrl={currentProject.masterDriveFolderUrl}
                  selectedDate={activeDate}
                  onSelectDate={handleSelectPeriod}
                  onJumpTo360={() => setViewMode("360")}
                  onJumpToPhotos={() => setViewMode("photos")}
                />
              </section>
            )}

            {/* PART 2: GALERÍA DE FOTOS 360° */}
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

            {/* PART 3: GALERÍA DE FOTOS ENCUADRADAS */}
            <section id="galeria-hd" className="space-y-5 text-left">
              <PhotoReportsGrid
                photoReports={currentProject.photoReports}
                selectedPeriod={activeDate}
                onSelectPeriod={handleSelectPeriod}
              />
            </section>
          </div>
        )}

        {/* VIEW MODE: SOLO BITÁCORA DIGITAL */}
        {viewMode === "bitacora" && currentProject.digitalLogbook && (
          <motion.div
            key="view-bitacora"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-5 text-left"
          >
            <DigitalLogbookTimeline
              entries={currentProject.digitalLogbook}
              bitacoraFotograficaUrl={currentProject.bitacoraFotograficaUrl}
              bitacoraDigitalUrl={currentProject.bitacoraDigitalUrl}
              masterDriveFolderUrl={currentProject.masterDriveFolderUrl}
              selectedDate={activeDate}
              onSelectDate={handleSelectPeriod}
              onJumpTo360={() => setViewMode("360")}
              onJumpToPhotos={() => setViewMode("photos")}
            />
          </motion.div>
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
            />
          </motion.div>
        )}
      </main>

      {/* 5. FOOTER PROTOCOL */}
      <footer className="bg-surface-container-low border-t border-arena-calida/20 py-8 px-4 sm:px-8 text-center text-xs text-gris-texto font-label-caps uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 text-teal-uno hover:text-arena-calida font-bold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Página Principal</span>
        </button>
        <span className="text-arena-calida font-semibold">UNO Arquitectos • Playa del Carmen & Tulum, Quintana Roo, México</span>
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

      {/* 7. GEMINI AI TECHNICAL CONSULTANT MODAL */}
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
