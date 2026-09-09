import { useState, useEffect, lazy, Suspense } from 'react';
import { Lock, ShieldCheck, MapPin, BookOpen, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filosofia from './components/Filosofia';
import Metrics from './components/Metrics';
import Servicios from './components/Servicios';
import Faqs from './components/Faqs';
import Contacto from './components/Contacto';
import CookieBanner from './components/CookieBanner';
import Logo from './components/Logo';
import { LanguageProvider, useLanguage, extractLangAndPath } from './context/LanguageContext';
import { ContentProvider, useSiteContent } from './context/ContentContext';
import { ClientProject } from './types/clientPortal';
import { defaultClientProjects } from './data/defaultClientProjects';

const Portfolio = lazy(() => import('./components/Portfolio'));
const TulumPage = lazy(() => import('./pages/TulumPage'));
const QuintanaRooPage = lazy(() => import('./pages/QuintanaRooPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const LegalNotice = lazy(() => import('./components/LegalNotice'));
const AIConsultant = lazy(() => import('./components/AIConsultant'));
const ClientPortalModal = lazy(() => import('./components/ClientPortal/ClientPortalModal'));
const ClientPortalView = lazy(() => import('./components/ClientPortal/ClientPortalView'));

export type RouteState = 
  | { name: "home" }
  | { name: "tulum" }
  | { name: "quintana-roo" }
  | { name: "blog" }
  | { name: "blog-post"; slug: string }
  | { name: "clientes" }
  | { name: "admin" };

function parseRoute(): RouteState {
  if (typeof window === "undefined") return { name: "home" };
  const pathname = window.location.pathname;
  const { purePath } = extractLangAndPath(pathname);
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  if (purePath === "/clientes" || purePath === "/portal" || hash === "#clientes" || hash === "#portal" || search.includes("portal=true")) {
    return { name: "clientes" };
  }
  if (purePath === "/admin" || hash === "#admin" || search.includes("admin=true")) {
    return { name: "admin" };
  }
  if (purePath === "/arquitectos-en-tulum" || purePath === "/arquitectos-en-tulum/") {
    return { name: "tulum" };
  }
  if (purePath === "/arquitectos-en-quintana-roo" || purePath === "/arquitectos-en-quintana-roo/") {
    return { name: "quintana-roo" };
  }
  if (purePath === "/blog" || purePath === "/blog/") {
    return { name: "blog" };
  }
  if (purePath.startsWith("/blog/")) {
    const slug = purePath.replace("/blog/", "").replace(/\/+$/, "");
    if (slug) {
      return { name: "blog-post", slug };
    }
  }

  return { name: "home" };
}

function mergeProjectsWithDefaults(savedList: ClientProject[] = []): ClientProject[] {
  if (!Array.isArray(savedList) || savedList.length === 0) return defaultClientProjects;
  return defaultClientProjects.map((def) => {
    const custom = savedList.find((p) => p.id === def.id);
    if (!custom) return def;
    return {
      ...def,
      ...custom,
      digitalLogbook: def.digitalLogbook || custom.digitalLogbook,
      bitacoraFotograficaUrl: def.bitacoraFotograficaUrl || custom.bitacoraFotograficaUrl,
      bitacoraDigitalUrl: def.bitacoraDigitalUrl || custom.bitacoraDigitalUrl,
      masterDriveFolderUrl: def.masterDriveFolderUrl || custom.masterDriveFolderUrl,
      cloudpanoTours: (def.cloudpanoTours?.length || 0) >= (custom.cloudpanoTours?.length || 0) ? def.cloudpanoTours : custom.cloudpanoTours,
      photoReports: (def.photoReports?.length || 0) >= (custom.photoReports?.length || 0) ? def.photoReports : custom.photoReports,
    };
  }).concat(
    savedList.filter((p) => !defaultClientProjects.some((def) => def.id === p.id))
  );
}

function MainApp() {
  const [route, setRoute] = useState<RouteState>(parseRoute);
  const { language, formatUrl } = useLanguage();
  const isEs = language === "es";

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
          return mergeProjectsWithDefaults(JSON.parse(saved));
        } catch {}
      }
    }
    return defaultClientProjects;
  });

  const { isAuthenticated } = useSiteContent();

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [route, activeClientProject]);

  // Route listener for history popstate / back / forward / pushState
  useEffect(() => {
    const handleNavigation = () => {
      setRoute(parseRoute());
    };

    const handleOpenClientPortal = () => {
      let currentList = defaultClientProjects;
      const saved = localStorage.getItem("uno_client_projects_v4");
      if (saved) {
        try {
          currentList = mergeProjectsWithDefaults(JSON.parse(saved));
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

      setRoute({ name: "clientes" });
      if (typeof window !== "undefined") {
        window.history.pushState({}, "", "/clientes");
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        setRoute((prev) => (prev.name === "admin" ? { name: "home" } : { name: "admin" }));
      }
    };

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("hashchange", handleNavigation);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-client-portal", handleOpenClientPortal);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("hashchange", handleNavigation);
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
    setRoute({ name: "home" });
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", formatUrl("/"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClientLoginSuccess = (project: ClientProject) => {
    setActiveClientProject(project);
    setRoute({ name: "clientes" });
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "/clientes");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const handleCloseClientPortal = () => {
    setRoute({ name: "home" });
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", formatUrl("/"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogoutClient = () => {
    localStorage.removeItem("uno_client_portal_session");
    setActiveClientProject(null);
  };

  const navigateTo = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const targetUrl = formatUrl(path);
    window.history.pushState({}, "", targetUrl);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // 1. ADMIN ROUTE
  if (route.name === "admin") {
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

  // 2. CLIENT PORTAL ROUTE (/clientes)
  if (route.name === "clientes") {
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

  // 3. MULTI-PAGE APPLICATION VIEWPORT
  return (
    <div id="app-root" className="min-h-screen w-full overflow-x-hidden bg-background text-gris-texto selection:bg-arena-calida selection:text-white font-sans transition-colors duration-300 texture-overlay">
      <Navbar />

      {/* DYNAMIC PAGE COMPONENT ROUTING */}
      <main id="main-content" className="w-full overflow-x-hidden">
        {route.name === "tulum" && (
          <Suspense fallback={<div className="min-h-screen pt-32 text-center font-label-caps text-xs text-teal-uno">Cargando Tulum...</div>}>
            <TulumPage />
          </Suspense>
        )}

        {route.name === "quintana-roo" && (
          <Suspense fallback={<div className="min-h-screen pt-32 text-center font-label-caps text-xs text-teal-uno">Cargando Quintana Roo...</div>}>
            <QuintanaRooPage />
          </Suspense>
        )}

        {route.name === "blog" && (
          <Suspense fallback={<div className="min-h-screen pt-32 text-center font-label-caps text-xs text-teal-uno">Cargando Blog...</div>}>
            <BlogListPage />
          </Suspense>
        )}

        {route.name === "blog-post" && (
          <Suspense fallback={<div className="min-h-screen pt-32 text-center font-label-caps text-xs text-teal-uno">Cargando Artículo...</div>}>
            <BlogPostPage slug={route.slug} />
          </Suspense>
        )}

        {route.name === "home" && (
          <>
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
          </>
        )}
      </main>

      {/* ARCHITECTURAL MULTI-PAGE FOOTER */}
      <footer id="main-footer" className="w-full pt-12 sm:pt-16 md:pt-section-padding pb-8 sm:pb-12 bg-background border-t border-arena-calida/20 texture-overlay font-sans text-left overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="md:col-span-4 mb-6 sm:mb-8 md:mb-0">
            <a 
              className="block mb-4 sm:mb-6 opacity-90 hover:opacity-100 transition-opacity" 
              href={formatUrl("/")} 
              onClick={(e) => navigateTo(e, "/")}
              aria-label="UNO Arquitectos - Inicio"
            >
              <Logo showText={true} iconSize={32} textSize="text-base sm:text-lg" />
            </a>
            <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-xs leading-relaxed mb-4">
              Arquitectura Contemporánea Tropical. Diseñando espacios con rigor técnico, sofisticación contenida y materiales honestos en Tulum y la Riviera Maya.
            </p>
            <div className="flex gap-2 font-label-caps text-[11px] text-teal-uno font-semibold">
              <span>Playa del Carmen</span> • <span>Tulum</span> • <span>Cancún</span>
            </div>
          </div>
          
          {/* COL 1: SECTIONS & PAGES */}
          <div className="md:col-span-3 md:col-start-6 mb-6 sm:mb-8 md:mb-0">
            <h3 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-3 sm:mb-4 uppercase tracking-widest font-semibold">
              Destinos & Páginas
            </h3>
            <ul className="space-y-1 font-label-caps text-xs sm:text-label-caps">
              <li>
                <a 
                  className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-1.5 flex items-center gap-1.5" 
                  href={formatUrl("/arquitectos-en-tulum")}
                  onClick={(e) => navigateTo(e, "/arquitectos-en-tulum")}
                >
                  <MapPin className="w-3 h-3 text-teal-uno" /> Arquitectos en Tulum
                </a>
              </li>
              <li>
                <a 
                  className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-1.5 flex items-center gap-1.5" 
                  href={formatUrl("/arquitectos-en-quintana-roo")}
                  onClick={(e) => navigateTo(e, "/arquitectos-en-quintana-roo")}
                >
                  <MapPin className="w-3 h-3 text-arena-calida" /> Arquitectos en Q. Roo
                </a>
              </li>
              <li>
                <a 
                  className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-1.5 flex items-center gap-1.5" 
                  href={formatUrl("/blog")}
                  onClick={(e) => navigateTo(e, "/blog")}
                >
                  <BookOpen className="w-3 h-3 text-teal-uno" /> Blog & Journal
                </a>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.history.pushState({}, "", "/clientes");
                      window.dispatchEvent(new CustomEvent("open-client-portal"));
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    }
                  }} 
                  className="text-[#c2a275] hover:text-white transition-colors duration-300 uppercase cursor-pointer text-left inline-flex items-center gap-1.5 py-1.5"
                  title="Seguimiento de Obra y Recorridos 360°"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c2a275]" /> Área Clientes 360°
                </button>
              </li>
            </ul>
          </div>
          
          {/* COL 2: SOCIAL & REPUTATION */}
          <div className="md:col-span-2 mb-6 sm:mb-8 md:mb-0">
            <h3 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-3 sm:mb-4 uppercase tracking-widest font-semibold">
              Resonancia
            </h3>
            <ul className="space-y-1 font-label-caps text-xs sm:text-label-caps">
              <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-1.5" href="https://www.instagram.com/unoarquitectos" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-1.5" href="https://www.linkedin.com/company/unoarquitectos" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block py-1.5" href="https://www.google.com/maps/place/UNO+Arquitectos+Mx/@20.6718486,-87.0504611,17z/data=!3m1!4b1!4m6!3m5!1s0x8f4e43859b311239:0x1a9cb6da851ff691!8m2!3d20.6718486!4d-87.0504611!16s%2Fg%2F11r_t7kdfg" target="_blank" rel="noopener noreferrer">Google Maps</a></li>
            </ul>
          </div>
          
          {/* COL 3: LEGAL & ADMIN */}
          <div className="md:col-span-2">
            <h3 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-3 sm:mb-4 uppercase tracking-widest font-semibold">
              Acuerdos
            </h3>
            <ul className="space-y-1 font-label-caps text-xs sm:text-label-caps">
              <li>
                <button onClick={() => openLegalModal("terms")} className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left py-1.5 flex items-center">
                  Esencia Legal
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal("privacy")} className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left py-1.5 flex items-center">
                  Privacidad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setRoute({ name: "admin" });
                    if (typeof window !== "undefined") {
                      window.history.pushState({}, "", "/admin");
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    }
                  }} 
                  className="text-zinc-400 hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left inline-flex items-center gap-1.5 py-1.5"
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

      {/* FLOATING DIRECT WHATSAPP ACTION BUTTON (RIGHT SIDE) */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center font-sans">
        <a
          href={`https://wa.me/5219842108420?text=${encodeURIComponent(
            language === "es"
              ? "Hola UNO Arquitectos, me interesa recibir información y asesoría técnica para un proyecto de arquitectura y construcción en la Riviera Maya."
              : language === "it"
              ? "Buongiorno UNO Arquitectos, desidero ricevere informazioni e consulenza tecnica per un progetto nella Riviera Maya."
              : language === "fr"
              ? "Bonjour UNO Arquitectos, je souhaite recevoir des informations et des conseils techniques pour un projet dans la Riviera Maya."
              : "Hello UNO Arquitectos, I am interested in receiving information and technical advice for an architecture and construction project in the Riviera Maya."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isEs ? "Contactar por WhatsApp a UNO Arquitectos" : "Contact UNO Arquitectos via WhatsApp"}
          className="group relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-w-[50px] min-h-[50px] sm:min-w-[56px] sm:min-h-[56px] border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 cursor-pointer"
        >
          <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          
          {/* Elegant Tooltip on Desktop Hover */}
          <span className="absolute right-16 bg-white/95 text-gris-texto border border-arena-calida/40 text-[11px] font-label-caps uppercase tracking-wider py-1.5 px-3 rounded-full whitespace-nowrap shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden sm:block backdrop-blur-md">
            {language === "es" ? "WhatsApp Directo" : "Direct WhatsApp"}
          </span>
          
          <span className="absolute top-0 right-0 w-3 h-3 bg-teal-uno border-2 border-white rounded-full"></span>
        </a>
      </div>

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
