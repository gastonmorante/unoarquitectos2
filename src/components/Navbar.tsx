import React, { useState, useEffect } from "react";
import { Compass, Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md h-20 border-arena-calida/40 shadow-ethereal text-gris-texto"
          : "bg-background/80 backdrop-blur-md h-24 border-arena-calida/20 text-gris-texto"
      }`}
    >
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* LEFT GROUP: LANGUAGE SELECTOR & LOGO */}
        <div className="flex items-center gap-4 md:gap-6">
          <LanguageSelector isScrolled={isScrolled} theme="adaptive" />
          
          <div 
            onClick={() => scrollToSection("inicio")}
            className="cursor-pointer group block transition-opacity hover:opacity-80"
          >
            <Logo 
              isScrolled={isScrolled} 
              theme="adaptive" 
              iconSize={34} 
              textSize="text-sm sm:text-base md:text-lg lg:text-xl" 
            />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <button
            onClick={() => scrollToSection("proyectos")}
            className="font-label-caps text-label-caps text-gris-texto hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("filosofia")}
            className="font-label-caps text-label-caps text-gris-texto hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer"
          >
            Esencia
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="font-label-caps text-label-caps text-gris-texto hover:text-arena-calida transition-colors duration-300 uppercase cursor-pointer"
          >
            Estudio
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
            {t("nav.planner")}
          </button>
        </div>

        {/* CTA Pill Button */}
        <button
          onClick={() => scrollToSection("contacto")}
          className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-arena-calida/10 text-teal-uno border border-arena-calida/50 font-label-caps text-label-caps uppercase hover:bg-arena-calida hover:text-white transition-all duration-500 rounded-full cursor-pointer shadow-xs"
        >
          Iniciar Diálogo
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-teal-uno p-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <span className="material-symbols-outlined text-[28px]">menu</span>}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-background border-b border-arena-calida/30 py-8 px-8 flex flex-col space-y-5 animate-fadeIn z-40 shadow-xl text-gris-texto font-sans">
          <button
            onClick={() => scrollToSection("proyectos")}
            className="text-left font-label-caps text-label-caps uppercase text-gris-texto hover:text-arena-calida transition-colors"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("filosofia")}
            className="text-left font-label-caps text-label-caps uppercase text-gris-texto hover:text-arena-calida transition-colors"
          >
            Esencia
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-left font-label-caps text-label-caps uppercase text-gris-texto hover:text-arena-calida transition-colors"
          >
            Estudio
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-left font-label-caps text-label-caps uppercase text-gris-texto hover:text-arena-calida transition-colors"
          >
            FAQs
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent("open-ai-chat"));
            }}
            className="text-left font-label-caps text-label-caps uppercase font-medium text-teal-uno flex items-center gap-2"
          >
            <Compass className="w-4 h-4 animate-spin-slow" />
            {t("nav.planner")}
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-center bg-arena-calida/20 border border-arena-calida text-teal-uno hover:bg-arena-calida hover:text-white py-3.5 px-6 font-label-caps text-label-caps uppercase rounded-full transition-all"
          >
            Iniciar Diálogo
          </button>
        </div>
      )}
    </nav>
  );
}
