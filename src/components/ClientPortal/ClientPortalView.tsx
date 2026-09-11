import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  MapPin, 
  MessageSquare, 
  Compass, 
  Camera, 
  ChevronDown, 
  Sparkles, 
  Award, 
  ArrowLeft, 
  FileText, 
  FolderOpen, 
  ExternalLink,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Ruler,
  Wind,
  Zap,
  Droplets
} from "lucide-react";
import { ClientProject, Tour360Folder } from "../../types/clientPortal";
import { defaultClientProjects } from "../../data/defaultClientProjects";
import CloudPanoViewer from "./CloudPanoViewer";
import DigitalLogbookTimeline from "./DigitalLogbookTimeline";
import ClientAIAssistantModal from "./ClientAIAssistantModal";
import Logo from "../Logo";
import PortalErrorBoundary from "../PortalErrorBoundary";

interface ClientPortalViewProps {
  currentProject: ClientProject;
  allProjects: ClientProject[];
  onSelectProject: (project: ClientProject) => void;
  onLogout: () => void;
  onClose: () => void;
}

export default function ClientPortalView({
  currentProject,
  allProjects = defaultClientProjects,
  onSelectProject,
  onClose,
}: ClientPortalViewProps) {
  const safeProject = currentProject || defaultClientProjects[0];
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showProjectSwitcher, setShowProjectSwitcher] = useState(false);

  // Synchronized active tour and date state
  const safeTours = Array.isArray(safeProject.cloudpanoTours) && safeProject.cloudpanoTours.length > 0
    ? safeProject.cloudpanoTours
    : (defaultClientProjects[0].cloudpanoTours || []);

  const [tours, setTours] = useState<Tour360Folder[]>(safeTours);
  const [selectedTourId, setSelectedTourId] = useState<string>(
    safeTours[0]?.id || "tour-arrecifes-05sep2026"
  );

  // Strictly position the window at the top (y = 0) on initial mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const updatedTours = Array.isArray(safeProject.cloudpanoTours) && safeProject.cloudpanoTours.length > 0
      ? safeProject.cloudpanoTours
      : (defaultClientProjects[0].cloudpanoTours || []);
    setTours(updatedTours);
    if (updatedTours[0]?.id) {
      setSelectedTourId(updatedTours[0].id);
    }
  }, [safeProject]);

  const activeTour = tours.find((t) => t.id === selectedTourId) || tours[0] || {
    id: "tour-arrecifes-05sep2026",
    date: "05 Septiembre 2026",
    title: safeProject.propertyName,
    phaseName: safeProject.currentPhaseName,
    progress: safeProject.globalProgress,
    notes: "",
    scenes: []
  };

  const activeDate = activeTour?.date || "05 Septiembre 2026";
  const activeProgress = activeTour?.progress || safeProject.globalProgress || 72;
  const activePhase = activeTour?.phaseName || safeProject.currentPhaseName || "Fase 4: Acabados";

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

  const director = safeProject.director || defaultClientProjects[0].director;
  const whatsappNumber = director.whatsapp || "5219842108420";
  const whatsappMessage = encodeURIComponent(
    `Hola Arq. Angel Cereceda, consulto sobre el avance de obra de ${safeProject.propertyName} (${safeProject.location}) - Levantamiento del ${activeDate} (${activeProgress}% Avance). Quisiera coordinar una sesión de revisión técnica.`
  );

  const safePhotoReports = Array.isArray(safeProject.photoReports) ? safeProject.photoReports : [];
  const safeLogbook = Array.isArray(safeProject.digitalLogbook) ? safeProject.digitalLogbook : [];

  return (
    <PortalErrorBoundary fallbackTitle="Error al cargar la visualización del proyecto">
      <div 
        id="client-portal-root"
        className="min-h-screen w-full bg-background text-gris-texto font-sans flex flex-col selection:bg-teal-uno selection:text-white texture-overlay"
      >
        {/* 1. LUXURY EXECUTIVE TOP NAVBAR */}
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
                <span className="font-semibold">{safeProject.propertyName}</span>
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
                        setTours(p.cloudpanoTours || []);
                        setShowProjectSwitcher(false);
                      }}
                      className={`w-full p-2.5 text-left rounded-xl text-xs font-sans transition-colors flex items-center justify-between cursor-pointer ${
                        p.id === safeProject.id
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

        {/* 2. EXECUTIVE HERO & TECHNICAL INFOGRAPHIC */}
        <section id="resumen-ejecutivo" className="bg-surface-container-low/60 border-b border-arena-calida/20 px-4 sm:px-8 py-10 sm:py-14 relative texture-overlay overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arena-calida/40 to-transparent"></div>

          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT: Project Executive Information & Director Contact */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-8 sm:w-12 h-[1px] bg-arena-calida inline-block"></span>
                  <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-uno" />
                    {safeProject.location}
                  </span>
                </div>

                <h1 className="font-headline-xl text-headline-xl text-teal-uno uppercase font-semibold leading-tight">
                  {safeProject.propertyName}
                </h1>

                <p className="font-body-md text-body-md text-gris-texto max-w-xl leading-relaxed">
                  Supervisión técnica de obra para <strong className="text-teal-uno font-semibold">{safeProject.clientName}</strong>. Registro oficial de avances, dictámenes de calidad y bitácora de obra con galería de fotos 360° y reportes periódicos de supervisión.
                </p>

                {/* METADATA PILLS GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 bg-white/80 backdrop-blur-md border border-arena-calida/30 rounded-2xl shadow-xs">
                    <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mb-1">
                      Superficie Total
                    </span>
                    <span className="font-headline-md text-xs sm:text-sm font-semibold text-gris-texto block">
                      {safeProject.totalArea}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/80 backdrop-blur-md border border-arena-calida/30 rounded-2xl shadow-xs">
                    <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mb-1">
                      Inicio Contractual
                    </span>
                    <span className="font-headline-md text-xs sm:text-sm font-semibold text-gris-texto block">
                      {safeProject.startDate || "01 Abril 2026"}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/80 backdrop-blur-md border border-arena-calida/30 rounded-2xl shadow-xs col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mb-1">
                      Entrega Estimada
                    </span>
                    <span className="font-headline-md text-xs sm:text-sm font-semibold text-teal-uno block">
                      {safeProject.estimatedDelivery}
                    </span>
                  </div>
                </div>

                {/* RESIDENT ARCHITECT CONTACT CARD (PLACED DIRECTLY ON LEFT, REPLACING DRIVE BUTTONS) */}
                <div id="contacto-director" className="pt-2">
                  <div className="bg-white/90 backdrop-blur-md border border-arena-calida/30 p-5 rounded-2xl space-y-3.5 shadow-sm text-left">
                    <div className="flex items-center justify-between gap-2 border-b border-arena-calida/20 pb-2.5">
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
                        {director.photo ? (
                          <img
                            src={director.photo}
                            alt={director.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span>AC</span>
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-headline-md text-sm sm:text-base font-semibold text-teal-uno uppercase">
                          {director.name}
                        </h4>
                        <p className="text-[11px] text-arena-calida font-label-caps uppercase tracking-wider font-semibold">
                          {director.role}
                        </p>
                        {director.credentials && (
                          <p className="text-[10px] text-gris-texto/70 font-mono">
                            {director.credentials.replace(/\|\s*20\+\s*años de experiencia/gi, "").trim()}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* DIRECT WHATSAPP ACTION BUTTON */}
                    <div className="pt-1">
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-[11px] font-label-caps uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Contactar por WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: High-Impact Architectural Infographic & Official Documentation */}
              <div className="lg:col-span-7 space-y-4">
                {/* INFOGRAPHIC MAIN CONTAINER */}
                <div className="bg-gradient-to-br from-white/95 via-surface-container-low/90 to-white/95 backdrop-blur-xl border border-arena-calida/40 p-5 sm:p-6 rounded-3xl shadow-ethereal space-y-5 text-left">
                  
                  {/* 1. INFOGRAPHIC HEADER */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-arena-calida/25 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno text-[9px] font-mono font-bold border border-teal-uno/30 uppercase tracking-widest">
                          INFOGRAFÍA TÉCNICA OFICIAL
                        </span>
                        <span className="text-[10px] text-arena-calida font-mono font-bold">
                          PROYECTO ARRECIFES
                        </span>
                      </div>
                      <h3 className="font-headline-md text-base sm:text-lg font-bold text-teal-uno uppercase tracking-wide">
                        Dictamen Estructural & Especificaciones
                      </h3>
                    </div>
                    
                    {/* GLOBAL PROGRESS BADGE */}
                    <div className="flex items-center gap-3 bg-teal-uno/10 border border-teal-uno/25 px-4 py-2 rounded-2xl self-start sm:self-auto">
                      <div className="text-right">
                        <span className="text-[9px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block">
                          Avance Total
                        </span>
                        <span className="text-xs font-semibold text-teal-uno block">
                          En Cronograma
                        </span>
                      </div>
                      <div className="font-headline-xl text-2xl sm:text-3xl font-bold text-teal-uno flex items-baseline">
                        <span>{safeProject.globalProgress || 63}</span>
                        <span className="text-xs text-arena-calida font-sans font-medium">%</span>
                      </div>
                    </div>
                  </div>

                  {/* 2. INFOGRAPHIC METRIC TILES GRID */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 bg-white/80 border border-arena-calida/30 rounded-xl text-center shadow-2xs">
                      <span className="text-base sm:text-lg font-bold text-teal-uno font-headline-md block">720 m²</span>
                      <span className="text-[9px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mt-0.5">Superficie Total</span>
                    </div>
                    <div className="p-3 bg-white/80 border border-arena-calida/30 rounded-xl text-center shadow-2xs">
                      <span className="text-base sm:text-lg font-bold text-teal-uno font-headline-md block">6.40 m</span>
                      <span className="text-[9px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mt-0.5">Doble Altura</span>
                    </div>
                    <div className="p-3 bg-white/80 border border-arena-calida/30 rounded-xl text-center shadow-2xs">
                      <span className="text-base sm:text-lg font-bold text-teal-uno font-headline-md block">f'c 250-300</span>
                      <span className="text-[9px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mt-0.5">Concreto Marino</span>
                    </div>
                    <div className="p-3 bg-white/80 border border-arena-calida/30 rounded-xl text-center shadow-2xs">
                      <span className="text-base sm:text-lg font-bold text-teal-uno font-headline-md block">Cat. 5</span>
                      <span className="text-[9px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block mt-0.5">Antihuracán</span>
                    </div>
                  </div>

                  {/* 3. FOUR CORE TECHNICAL PILLARS */}
                  <div className="space-y-2.5 text-xs">
                    {/* Pillar 1: Estructura & Cimentación */}
                    <div className="p-3.5 bg-surface-container-low/80 border border-arena-calida/25 rounded-2xl space-y-1.5 transition-all hover:bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-teal-uno font-bold text-xs uppercase tracking-wide">
                          <Layers className="w-4 h-4 text-arena-calida flex-shrink-0" />
                          <span>1. Cimentación Kárstica & Estructura</span>
                        </div>
                        <span className="text-[9px] font-mono font-semibold text-teal-uno bg-teal-uno/10 px-2 py-0.5 rounded-md">
                          GPR 12m • f'c 250-300
                        </span>
                      </div>
                      <p className="text-[11px] text-gris-texto/90 leading-relaxed pl-6">
                        Zapatas aisladas y losa de rigidez sobre roca kárstica verificada por georradar GPR. Concreto hidráulico con aditivo hidrófugo integral anti-salinidad y acero Grado 42 sismorresistente.
                      </p>
                    </div>

                    {/* Pillar 2: Acabados Nobles */}
                    <div className="p-3.5 bg-surface-container-low/80 border border-arena-calida/25 rounded-2xl space-y-1.5 transition-all hover:bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-teal-uno font-bold text-xs uppercase tracking-wide">
                          <Sparkles className="w-4 h-4 text-arena-calida flex-shrink-0" />
                          <span>2. Revestimientos Nobles & Acabados</span>
                        </div>
                        <span className="text-[9px] font-mono font-semibold text-teal-uno bg-teal-uno/10 px-2 py-0.5 rounded-md">
                          Chukum • Travertino
                        </span>
                      </div>
                      <p className="text-[11px] text-gris-texto/90 leading-relaxed pl-6">
                        Pasta artesanal de Chukum natural sellado a 2 manos en muros y plafones de 6.40m; placas de Mármol Travertino Santo Tomás (1.20x2.40m) y carpintería maciza en Tzalam y Parota.
                      </p>
                    </div>

                    {/* Pillar 3: Ingenierías & Confort */}
                    <div className="p-3.5 bg-surface-container-low/80 border border-arena-calida/25 rounded-2xl space-y-1.5 transition-all hover:bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-teal-uno font-bold text-xs uppercase tracking-wide">
                          <Zap className="w-4 h-4 text-arena-calida flex-shrink-0" />
                          <span>3. Ingenierías, Climatización & Domótica</span>
                        </div>
                        <span className="text-[9px] font-mono font-semibold text-teal-uno bg-teal-uno/10 px-2 py-0.5 rounded-md">
                          VRF Inverter • UV
                        </span>
                      </div>
                      <p className="text-[11px] text-gris-texto/90 leading-relaxed pl-6">
                        Presión constante hidroneumática con esterilización UV y descalcificador, climatización centralizada VRF Inverter oculta y canalizaciones listas para domótica e iluminación cálida 2700K.
                      </p>
                    </div>

                    {/* Pillar 4: Control de Calidad */}
                    <div className="p-3.5 bg-surface-container-low/80 border border-arena-calida/25 rounded-2xl space-y-1.5 transition-all hover:bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-teal-uno font-bold text-xs uppercase tracking-wide">
                          <ShieldCheck className="w-4 h-4 text-teal-uno flex-shrink-0" />
                          <span>4. Normativa Costera & Certificación</span>
                        </div>
                        <span className="text-[9px] font-mono font-semibold text-teal-uno bg-teal-uno/10 px-2 py-0.5 rounded-md">
                          RCDF / NMX
                        </span>
                      </div>
                      <p className="text-[11px] text-gris-texto/90 leading-relaxed pl-6">
                        Supervisión residente continua bajo normativas de construcción costera de Quintana Roo con pruebas de revenimiento en sitio y ensayos certificados de compresión en laboratorio.
                      </p>
                    </div>
                  </div>

                  {/* 4. OFFICIAL GOOGLE DRIVE DOCUMENT BUTTONS */}
                  <div className="pt-2 border-t border-arena-calida/25 space-y-2">
                    <span className="text-[10px] font-label-caps uppercase text-arena-calida tracking-wider font-semibold block">
                      Documentación Oficial de Consulta (Memorias & Catálogo)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <a
                        href="https://drive.google.com/file/d/1996CkVYgWRCUHdvQVUC9OhPnoyYUpxXK/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white hover:bg-teal-uno hover:text-white text-teal-uno border border-arena-calida/40 rounded-xl text-[10px] font-label-caps uppercase tracking-wider font-bold flex items-center justify-between transition-all shadow-xs group cursor-pointer active:scale-95"
                        title="Abrir Especificaciones Técnicas Oficiales en Google Drive"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-arena-calida group-hover:text-white flex-shrink-0 transition-colors" />
                          <span className="truncate">Especificaciones Técnicas</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0 ml-1.5" />
                      </a>

                      <a
                        href="https://drive.google.com/file/d/1wsVn6tyRU5ZPhua6QKLi5Oc_UMvaCXEh/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white hover:bg-teal-uno hover:text-white text-teal-uno border border-arena-calida/40 rounded-xl text-[10px] font-label-caps uppercase tracking-wider font-bold flex items-center justify-between transition-all shadow-xs group cursor-pointer active:scale-95"
                        title="Abrir Memoria Descriptiva Oficial de Obra en Google Drive"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-arena-calida group-hover:text-white flex-shrink-0 transition-colors" />
                          <span className="truncate">Memoria Descriptiva</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 flex-shrink-0 ml-1.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MAIN PROGRESS & DIGITAL LOGBOOK CONTENT */}
        <main id="seccion-galeria-activa" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-14">
          {/* PART 1: BITÁCORA DIGITAL DE SUPERVISIÓN TÉCNICA (CON TODAS LAS FOTOS, REENMARCADAS Y DOCUMENTOS OFICIALES) */}
          {safeLogbook.length > 0 && (
            <section id="bitacora-digital" className="space-y-5 text-left">
              <DigitalLogbookTimeline
                entries={safeLogbook}
                bitacoraFotograficaUrl={safeProject.bitacoraFotograficaUrl}
                bitacoraDigitalUrl={safeProject.bitacoraDigitalUrl}
                masterDriveFolderUrl={safeProject.masterDriveFolderUrl}
                selectedDate={activeDate}
                onSelectDate={handleSelectPeriod}
                onJumpTo360={() => {
                  const el = document.getElementById("visor-360");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </section>
          )}

          {/* PART 2: VISOR INTERACTIVO DE FOTOS & RECORRIDOS 360° */}
          <section id="visor-360" className="space-y-5 text-left">
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
              hideTourSelector={false}
              onSelectTourId={handleSelectTour}
              onUpdateTour={handleUpdateTour}
            />
          </section>
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
              project={safeProject}
              onClose={() => setShowAIAssistant(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </PortalErrorBoundary>
  );
}
