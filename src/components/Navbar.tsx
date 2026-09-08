import { useState, useEffect } from "react";
import { Compass, X, Menu, ShieldCheck, BookOpen, MapPin } from "lucide-react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t, formatUrl } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateOrScroll = (target: string) => {
    setIsMobileMenuOpen(false);
    if (typeof window === "undefined") return;

    const isHash = target.startsWith("#");
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
    const isHome = currentPath === "/" || currentPath === `/${language}`;

    if (isHash) {
      const id = target.replace("#", "");
      if (isHome) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      const targetHomeUrl = isEs ? `/${target}` : `/${language}/${target}`;
      window.history.pushState({}, "", targetHomeUrl);
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    // Subpage route navigation
    const targetUrl = formatUrl(target);
    window.history.pushState({}, "", targetUrl);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleOpenClientPortal = () => {
    setIsMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "/clientes");
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("open-client-portal"));
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md h-18 sm:h-20 border-arena-calida/40 shadow-ethereal text-gris-texto"
          : "bg-background/85 backdrop-blur-md h-18 sm:h-20 md:h-24 border-arena-calida/20 text-gris-texto"
      }`}
    >
      <div className="flex justify-between items-center h-full px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* LEFT GROUP: LANGUAGE SELECTOR & LOGO */}
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6">
          <LanguageSelector isScrolled={isScrolled} theme="adaptive" />
          
          <a 
            href={formatUrl("/")}
            onClick={(e) => {
              e.preventDefault();
              navigateOrScroll("/");
            }}
            className="cursor-pointer group flex items-center transition-opacity hover:opacity-85"
            aria-label="UNO Arquitectos - Inicio"
            title="UNO Arquitectos"
          >
            <Logo 
              isScrolled={isScrolled} 
              theme="adaptive" 
              iconSize={56}
              showText={false}
            />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          <button
            onClick={() => navigateOrScroll("/arquitectos-en-tulum")}
            aria-label="Ir a la sección de Arquitectos en Tulum"
            className="font-label-caps text-xs xl:text-label-caps text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
          >
            Tulum
          </button>
          <button
            onClick={() => navigateOrScroll("/arquitectos-en-quintana-roo")}
            aria-label="Ir a la sección de Arquitectos en Quintana Roo"
            className="font-label-caps text-xs xl:text-label-caps text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
          >
            Riviera Maya
          </button>
          <button
            onClick={() => navigateOrScroll("/blog")}
            aria-label="Ir al Blog y Journal de Arquitectura"
            className="font-label-caps text-xs xl:text-label-caps text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
          >
            Blog
          </button>
          <button
            onClick={() => navigateOrScroll("#proyectos")}
            aria-label="Ver Portafolio de proyectos residenciales"
            className="font-label-caps text-xs xl:text-label-caps text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
          >
            {t("nav.portfolio") || "Portafolio"}
          </button>
          <button
            onClick={() => navigateOrScroll("#servicios")}
            aria-label="Ver Servicios de arquitectura y construcción"
            className="font-label-caps text-xs xl:text-label-caps text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
          >
            {t("nav.servicios") || "Servicios"}
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-ai-chat"))}
            aria-label="Abrir Asesor Inteligente de Arquitectura"
            className="font-label-caps text-xs xl:text-label-caps text-teal-uno hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer flex items-center gap-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
          >
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-teal-uno" aria-hidden="true" />
            {t("nav.planner") || "Asesor IA"}
          </button>
          <button
            onClick={handleOpenClientPortal}
            aria-label="Acceder al Portal de Clientes y Recorridos 360"
            className="font-label-caps text-xs xl:text-label-caps text-[#c2a275] hover:text-white bg-[#c2a275]/10 hover:bg-[#c2a275]/25 border border-[#c2a275]/40 px-3 py-1.5 rounded-full transition-all duration-300 uppercase cursor-pointer flex items-center gap-1.5 font-semibold shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c2a275] focus-visible:ring-offset-2"
            title="Portal de Seguimiento de Obra y Recorridos 360°"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#c2a275]" aria-hidden="true" />
            Área Clientes
          </button>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigateOrScroll("#contacto")}
          aria-label="Iniciar Diálogo y Contactar al Estudio"
          className="hidden md:inline-flex items-center justify-center px-5 lg:px-7 py-2.5 bg-arena-calida/10 text-teal-uno border border-arena-calida/50 font-label-caps text-xs uppercase hover:bg-arena-calida hover:text-white transition-all duration-500 rounded-full cursor-pointer shadow-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
        >
          {isEs ? "Iniciar Diálogo" : "Contact Studio"}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-drawer"
          aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          className="lg:hidden text-teal-uno p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg hover:bg-arena-calida/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden fixed top-[72px] sm:top-[80px] left-0 w-full bg-background/98 backdrop-blur-xl border-b border-arena-calida/30 py-6 px-6 flex flex-col space-y-3 shadow-2xl text-gris-texto font-sans animate-fadeIn z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          <button
            onClick={() => navigateOrScroll("/arquitectos-en-tulum")}
            aria-label="Ir a Arquitectos en Tulum"
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2.5 min-h-[44px] border-b border-arena-calida/15 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno"
          >
            <span>Arquitectos en Tulum</span>
            <MapPin className="w-4 h-4 text-teal-uno" aria-hidden="true" />
          </button>
          <button
            onClick={() => navigateOrScroll("/arquitectos-en-quintana-roo")}
            aria-label="Ir a Arquitectos en Quintana Roo"
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2.5 min-h-[44px] border-b border-arena-calida/15 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno"
          >
            <span>Arquitectos en Quintana Roo</span>
            <MapPin className="w-4 h-4 text-arena-calida" aria-hidden="true" />
          </button>
          <button
            onClick={() => navigateOrScroll("/blog")}
            aria-label="Ir al Blog y Journal de Arquitectura"
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2.5 min-h-[44px] border-b border-arena-calida/15 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno"
          >
            <span>Blog & Journal de Arquitectura</span>
            <BookOpen className="w-4 h-4 text-teal-uno" aria-hidden="true" />
          </button>
          <button
            onClick={() => navigateOrScroll("#proyectos")}
            aria-label="Ir a Portafolio y Colección"
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2.5 min-h-[44px] border-b border-arena-calida/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno"
          >
            {t("nav.portfolio") || "Portafolio"} & Colección
          </button>
          <button
            onClick={() => navigateOrScroll("#servicios")}
            aria-label="Ir a Servicios Técnicos"
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2.5 min-h-[44px] border-b border-arena-calida/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno"
          >
            {t("nav.servicios") || "Servicios"} Técnicos
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent("open-ai-chat"));
            }}
            aria-label="Abrir Asesor Inteligente de Arquitectura"
            className="text-left font-label-caps text-xs uppercase text-teal-uno font-semibold py-2.5 min-h-[44px] border-b border-arena-calida/15 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno"
          >
            <Compass className="w-4 h-4 text-teal-uno animate-spin-slow" aria-hidden="true" />
            {t("nav.planner") || "Asesor IA & Estudio de Factibilidad"}
          </button>
          <button
            onClick={handleOpenClientPortal}
            aria-label="Abrir Área de Clientes"
            className="text-left font-label-caps text-xs uppercase text-[#c2a275] font-semibold py-2.5 min-h-[44px] border-b border-arena-calida/15 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c2a275]"
          >
            <ShieldCheck className="w-4 h-4 text-[#c2a275]" aria-hidden="true" />
            Área Clientes (Seguimiento 360°)
          </button>
          <div className="pt-2">
            <button
              onClick={() => navigateOrScroll("#contacto")}
              aria-label="Iniciar Diálogo de Contacto"
              className="w-full text-center py-3.5 min-h-[48px] bg-teal-uno text-white rounded-full font-label-caps text-xs uppercase font-semibold tracking-wider hover:bg-arena-calida transition-colors shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2"
            >
              {isEs ? "Iniciar Diálogo" : "Contact Studio"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
