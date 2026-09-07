import { useState, useEffect, lazy, Suspense } from 'react';
import { Lock, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

type PageRoute = "home" | "clientes" | "admin";

function MainApp() {
  const [pageRoute, setPageRoute] = useState<PageRoute>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (path === "/clientes" || path === "/portal" || hash === "#clientes" || hash === "#portal" || search.includes("portal=true") || search.includes("cliente=true")) {
        return "clientes";
      }
      if (path === "/admin" || hash === "#admin" || search.includes("admin=true")) {
        return "admin";
      }
    }
    return "home";
  });

  const [activeClientProject, setActiveClientProject] = useState<ClientProject | null>(() => {
    if (typeof window !== "undefined") {
      const savedSession = localStorage.getItem("uno_client_portal_session");
      if (savedSession) {
        try {
          const parsed = JSON.parse(savedSession);
          return defaultClientProjects.find((p) => p.id === parsed.projectId) || defaultClientProjects[0];
        } catch {}
      }
    }
    return null;
  });

  const [clientProjects, setClientProjects] = useState<ClientProject[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("uno_client_projects_v4");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return defaultClientProjects;
  });

  const { isAuthenticated } = useSiteContent();

  // Ensure window is strictly positioned at the very top on route change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 30);
    return () => clearTimeout(timer);
  }, [pageRoute, activeClientProject]);


  // Dynamic SEO meta tags and Page title management (Protects Google & Meta from penalty)
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (pageRoute === "clientes") {
      document.title = "Área Privada de Clientes • UNO Arquitectos | Supervisión 360°";
      if (metaRobots) {
        metaRobots.setAttribute("content", "noindex, nofollow, noarchive");
      }
    } else if (pageRoute === "admin") {
      document.title = "Panel de Administración CMS • UNO Arquitectos";
      if (metaRobots) {
        metaRobots.setAttribute("content", "noindex, nofollow, noarchive");
      }
    } else {
      document.title = "UNO Arquitectos | Arquitectura que pertenece. Espacios que perduran.";
      if (metaRobots) {
        metaRobots.setAttribute("content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
      }
    }
  }, [pageRoute]);

  // Listen to browser navigation (back/forward), hash changes, and custom events
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname.toLowerCase();
        const hash = window.location.hash.toLowerCase();
        const search = window.location.search.toLowerCase();
        if (path === "/clientes" || path === "/portal" || hash === "#clientes" || hash === "#portal" || search.includes("portal=true") || search.includes("cliente=true")) {
          setPageRoute("clientes");
        } else if (path === "/admin" || hash === "#admin" || search.includes("admin=true")) {
          setPageRoute("admin");
        } else {
          setPageRoute("home");
        }
      }
    };

    const handleOpenClientPortal = () => {
      // Reload projects if updated in admin
      let currentList = defaultClientProjects;
      const saved = localStorage.getItem("uno_client_projects_v4");
      if (saved) {
        try {
          currentList = JSON.parse(saved);
          setClientProjects(currentList);
        } catch {}
      }

      const savedSession = localStorage.getItem("uno_client_portal_session");
      if (savedSession) {
        try {
          const parsed = JSON.parse(savedSession);
          const found = currentList.find((p) => p.id === parsed.projectId);
          if (found) {
            setActiveClientProject(found);
          }
        } catch {}
      }

      setPageRoute("clientes");
      if (typeof window !== "undefined") {
        window.history.pushState({}, "", "/clientes");
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        setPageRoute((prev) => (prev === "admin" ? "home" : "admin"));
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-client-portal", handleOpenClientPortal);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
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
    setPageRoute("home");
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClientLoginSuccess = (project: ClientProject) => {
    setActiveClientProject(project);
    setPageRoute("clientes");
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "/clientes");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const handleCloseClientPortal = () => {
    setPageRoute("home");
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogoutClient = () => {
    localStorage.removeItem("uno_client_portal_session");
    setActiveClientProject(null);
  };

  // 1. DEDICATED ADMIN ROUTE
  if (pageRoute === "admin") {
    return (
      <Suspense fallback={null}>
        {isAuthenticated ? (
          <AdminDashboard onClose={handleCloseAdmin} />
        ) : (
          <AdminLogin onClose={handleCloseAdmin} />
        )}
      </Suspense>
    );
  }

  // 2. DEDICATED INDEPENDENT CLIENT PORTAL PAGE ROUTE (/clientes)
  if (pageRoute === "clientes") {
    return (
      <Suspense fallback={null}>
        {activeClientProject ? (
          <ClientPortalView
            currentProject={activeClientProject}
            allProjects={clientProjects}
            onSelectProject={(p) => setActiveClientProject(p)}
            onLogout={handleLogoutClient}
            onClose={handleCloseClientPortal}
          />
        ) : (
          <ClientPortalModal
            projects={clientProjects}
            onLoginSuccess={handleClientLoginSuccess}
            onClose={handleCloseClientPortal}
          />
        )}
      </Suspense>
    );
  }

  // 3. MAIN LANDING PAGE ROUTE (/)
  return (
    <div id="app-root" className="min-h-screen w-full overflow-x-hidden bg-background text-gris-texto selection:bg-arena-calida selection:text-white font-sans transition-colors duration-300 texture-overlay">
      <Navbar />
      <main id="main-content" className="w-full overflow-x-hidden">
        <Hero />
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

      {/* ARCHITECTURAL FOOTER */}
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
                      window.history.pushState({}, "", "/clientes");
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
                  onClick={() => {
                    setPageRoute("admin");
                    if (typeof window !== "undefined") {
                      window.history.pushState({}, "", "/admin");
                    }
                  }} 
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
