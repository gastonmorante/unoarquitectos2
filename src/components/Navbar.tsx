import { useState, useEffect } from "react";
import { Compass, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inicio");
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
        <div className="hidden md:flex items-center gap-7 lg:gap-10">
          <button
            onClick={() => scrollToSection("proyectos")}
            className="font-label-caps text-label-caps text-gris-texto hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer"
          >
            {t("nav.portfolio") || "Portafolio"}
          </button>
          <button
            onClick={() => scrollToSection("filosofia")}
            className="font-label-caps text-label-caps text-gris-texto hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer"
          >
            {t("nav.filosofia") || "Filosofía"}
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="font-label-caps text-label-caps text-gris-texto hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer"
          >
            {t("nav.servicios") || "Servicios"}
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="font-label-caps text-label-caps text-gris-texto hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer"
          >
            FAQs
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-ai-chat"))}
            className="font-label-caps text-label-caps text-teal-uno hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-teal-uno" />
            {t("nav.planner") || "Asesor IA"}
          </button>
        </div>

        {/* CTA Pill Button */}
        <button
          onClick={() => scrollToSection("contacto")}
          className="hidden md:inline-flex items-center justify-center px-7 lg:px-8 py-2.5 lg:py-3 bg-arena-calida/10 text-teal-uno border border-arena-calida/50 font-label-caps text-xs lg:text-label-caps uppercase hover:bg-arena-calida hover:text-white transition-all duration-500 rounded-full cursor-pointer shadow-xs font-semibold"
        >
          Iniciar Diálogo
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-teal-uno p-2 min-w-[48px] min-h-[48px] flex items-center justify-center focus:outline-none cursor-pointer rounded-lg hover:bg-arena-calida/10 transition-colors"
          aria-label="Abrir menú de navegación / Open menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <span className="material-symbols-outlined text-[26px]">menu</span>}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] sm:top-[80px] left-0 w-full bg-background/98 backdrop-blur-xl border-b border-arena-calida/30 py-6 px-6 flex flex-col space-y-4 shadow-2xl text-gris-texto font-sans animate-fadeIn z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          <button
            onClick={() => scrollToSection("proyectos")}
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2 border-b border-arena-calida/15"
          >
            {t("nav.portfolio") || "Portafolio"} & Tipologías
          </button>
          <button
            onClick={() => scrollToSection("filosofia")}
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2 border-b border-arena-calida/15"
          >
            {t("nav.filosofia") || "Filosofía"} Arquitectónica
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2 border-b border-arena-calida/15"
          >
            {t("nav.servicios") || "Servicios"} & Disciplinas
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-left font-label-caps text-xs uppercase text-gris-texto hover:text-teal-uno transition-colors py-2 border-b border-arena-calida/15"
          >
            Preguntas Frecuentes (FAQs)
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent("open-ai-chat"));
            }}
            className="text-left font-label-caps text-xs uppercase font-semibold text-teal-uno flex items-center gap-2 py-2 border-b border-arena-calida/15"
          >
            <Compass className="w-4 h-4 animate-spin-slow" />
            {t("nav.planner") || "Asesor IA"}
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-center bg-teal-uno text-white hover:bg-arena-calida py-3.5 px-6 font-label-caps text-xs uppercase rounded-full transition-all shadow-ethereal mt-2 font-semibold"
          >
            Iniciar Diálogo
          </button>
        </div>
      )}
    </nav>
  );
}
