import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import { Lock, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Filosofia from './components/Filosofia';
import Metrics from './components/Metrics';
import Servicios from './components/Servicios';
import Faqs from './components/Faqs';
import Contacto from './components/Contacto';
import CookieBanner from './components/CookieBanner';
import Logo from './components/Logo';
import { LanguageProvider } from './context/LanguageContext';
import { ContentProvider, useSiteContent } from './context/ContentContext';
import { ClientProject } from './types/clientPortal';
import { defaultClientProjects } from './data/defaultClientProjects';

const Portfolio = lazy(() => import('./components/Portfolio'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const LegalNotice = lazy(() => import('./components/LegalNotice'));
const AIConsultant = lazy(() => import('./components/AIConsultant'));
const ClientPortalModal = lazy(() => import('./components/ClientPortal/ClientPortalModal'));
const ClientPortalView = lazy(() => import('./components/ClientPortal/ClientPortalView'));

function MainApp() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);
  const [activeClientProject, setActiveClientProject] = useState<ClientProject | null>(null);
  const [clientProjects, setClientProjects] = useState<ClientProject[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("uno_client_projects_v2");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return defaultClientProjects;
  });

  const { isAuthenticated } = useSiteContent();

  // Listen to hash changes (e.g. #admin, #clientes, #portal) and custom events
  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined") {
        if (window.location.hash === "#admin" || window.location.search.includes("admin=true")) {
          setShowAdmin(true);
        }

        if (
          window.location.hash === "#clientes" ||
          window.location.hash === "#portal" ||
          window.location.search.includes("portal=true") ||
          window.location.search.includes("cliente=true")
        ) {
          handleOpenClientPortal();
        }
      }
    };

    const handleOpenClientPortal = () => {
      // Reload projects if updated in admin
      let currentList = defaultClientProjects;
      const saved = localStorage.getItem("uno_client_projects_v2");
      if (saved) {
        try {
          currentList = JSON.parse(saved);
          setClientProjects(currentList);
        } catch {}
      }

      // Check if there is an active session
      const savedSession = localStorage.getItem("uno_client_portal_session");
      if (savedSession) {
        try {
          const parsed = JSON.parse(savedSession);
          const found = currentList.find((p) => p.id === parsed.projectId);
          if (found) {
            setActiveClientProject(found);
            setShowClientModal(false);
            return;
          }
        } catch {}
      }
      setShowClientModal(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        setShowAdmin((prev) => !prev);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-client-portal", handleOpenClientPortal);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-client-portal", handleOpenClientPortal);
    };
  }, []);

  const openLegalModal = (tab: "privacy" | "terms") => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-legal", { detail: { tab } }));
    }
  };

  const handleCloseAdmin = () => {
    setShowAdmin(false);
    if (window.location.hash === "#admin") {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  const handleClientLoginSuccess = (project: ClientProject) => {
    setActiveClientProject(project);
    setShowClientModal(false);
  };

  const handleCloseClientPortal = () => {
    setShowClientModal(false);
    setActiveClientProject(null);
    if (window.location.hash === "#clientes" || window.location.hash === "#portal") {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  const handleLogoutClient = () => {
    localStorage.removeItem("uno_client_portal_session");
    setActiveClientProject(null);
    setShowClientModal(false);
  };

  return (
    <>
      {/* ADMIN DASHBOARD OR LOGIN OVERLAY */}
      <AnimatePresence>
        {showAdmin && (
          <Suspense fallback={null}>
            {isAuthenticated ? (
              <AdminDashboard onClose={handleCloseAdmin} />
            ) : (
              <AdminLogin onClose={handleCloseAdmin} />
            )}
          </Suspense>
        )}
      </AnimatePresence>

      {/* CLIENT PORTAL LOGIN MODAL */}
      <AnimatePresence>
        {showClientModal && !activeClientProject && (
          <Suspense fallback={null}>
            <ClientPortalModal
              projects={clientProjects}
              onLoginSuccess={handleClientLoginSuccess}
              onClose={() => setShowClientModal(false)}
            />
          </Suspense>
        )}
      </AnimatePresence>

      {/* CLIENT PORTAL EXECUTIVE DASHBOARD VIEW */}
      <AnimatePresence>
        {activeClientProject && (
          <Suspense fallback={null}>
            <ClientPortalView
              currentProject={activeClientProject}
              allProjects={clientProjects}
              onSelectProject={(p) => setActiveClientProject(p)}
              onLogout={handleLogoutClient}
              onClose={handleCloseClientPortal}
            />
          </Suspense>
        )}
      </AnimatePresence>

      <div id="app-root" className="min-h-screen w-full overflow-x-hidden bg-background text-gris-texto selection:bg-arena-calida selection:text-white font-sans transition-colors duration-300 texture-overlay">
        <Navbar />
        <main id="main-content" className="w-full overflow-x-hidden">
          <section id="filosofia">
            <Filosofia />
          </section>
          <Metrics />
          <section id="servicios">
            <Servicios />
          </section>
          <section id="portfolio">
            <Suspense fallback={null}>
              <Portfolio />
            </Suspense>
          </section>
          <section id="faqs">
            <Faqs />
          </section>
          <section id="consulta-ia" className="relative z-10">
            <Suspense fallback={null}>
              <AIConsultant />
            </Suspense>
          </section>
          <section id="contacto">
            <Contacto />
          </section>
        </main>

        {/* STICH ARCHITECTURAL FOOTER */}
        <footer id="main-footer" className="w-full pt-12 sm:pt-16 md:pt-section-padding pb-8 sm:pb-12 bg-background border-t border-arena-calida/20 texture-overlay font-sans text-left overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="md:col-span-4 mb-6 sm:mb-8 md:mb-0">
              <a className="block mb-4 sm:mb-6 opacity-90 hover:opacity-100 transition-opacity" href="/" aria-label="UNO Arquitectos - Inicio">
                <Logo showText={true} iconSize={32} textSize="text-base sm:text-lg" />
              </a>
              <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-xs leading-relaxed">
                Arquitectura Contemporánea Tropical. Diseñando espacios con rigor técnico, sofisticación contenida y materiales honestos.
              </p>
            </div>
            
            <div className="md:col-span-2 md:col-start-7 mb-6 sm:mb-8 md:mb-0">
              <h5 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-3 sm:mb-4 uppercase tracking-widest font-semibold">Santuario</h5>
              <ul className="space-y-1 font-label-caps text-xs sm:text-label-caps">
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-2 min-h-[36px] flex items-center" href="#proyectos">Colección</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-2 min-h-[36px] flex items-center" href="#filosofia">Esencia</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-2 min-h-[36px] flex items-center" href="#contacto">Diálogo</a></li>
                <li>
                  <button 
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(new CustomEvent("open-client-portal"));
                      }
                    }} 
                    className="text-[#c2a275] hover:text-white transition-colors duration-300 uppercase cursor-pointer text-left inline-flex items-center gap-1.5 py-2 min-h-[36px]"
                    title="Seguimiento de Obra y Recorridos 360°"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c2a275]" /> Área Clientes
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-2 mb-6 sm:mb-8 md:mb-0">
              <h5 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-3 sm:mb-4 uppercase tracking-widest font-semibold">Resonancia</h5>
              <ul className="space-y-1 font-label-caps text-xs sm:text-label-caps">
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-2 min-h-[36px] flex items-center" href="https://www.instagram.com/unoarquitectos" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-2 min-h-[36px] flex items-center" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-2 min-h-[36px] flex items-center" href="https://www.linkedin.com/company/unoarquitectos" target="_blank" rel="noopener noreferrer">Journal</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h5 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-3 sm:mb-4 uppercase tracking-widest font-semibold">Acuerdos</h5>
              <ul className="space-y-1 font-label-caps text-xs sm:text-label-caps">
                <li>
                  <button onClick={() => openLegalModal("terms")} className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left py-2 min-h-[36px] flex items-center">
                    Esencia Legal
                  </button>
                </li>
                <li>
                  <button onClick={() => openLegalModal("privacy")} className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left py-2 min-h-[36px] flex items-center">
                    Resguardo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowAdmin(true)} 
                    className="text-zinc-400 hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left inline-flex items-center gap-1.5 py-2 min-h-[36px]"
                    title="Panel de Administración"
                    aria-label="Panel de Administración CMS"
                  >
                    <Lock className="w-3 h-3 text-teal-uno" /> Admin CMS
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-arena-calida/20 text-center md:text-left gap-3">
            <p className="font-label-caps text-[10px] sm:text-xs text-gris-texto/70 uppercase tracking-widest">
              © {new Date().getFullYear()} UNO ARQUITECTOS. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
              <span className="font-label-caps text-[10px] sm:text-xs text-arena-calida uppercase tracking-widest font-semibold">
                DISEÑO CONSCIENTE
              </span>
              <span className="text-arena-calida/40 hidden sm:inline">•</span>
              <span className="font-label-caps text-[10px] sm:text-xs text-gris-texto/80 uppercase tracking-wider">
                Development por <span className="text-teal-uno font-semibold">Negocioup</span>
              </span>
            </div>
          </div>
        </footer>

        {/* GLOBAL LEGAL COMPLIANCE & COOKIE CONSENT MODULES */}
        <Suspense fallback={null}>
          <LegalNotice />
        </Suspense>
        <CookieBanner />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ContentProvider>
        <MainApp />
      </ContentProvider>
    </LanguageProvider>
  );
}
