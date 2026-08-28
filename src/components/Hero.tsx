import { useLanguage } from "../context/LanguageContext";
import { useSiteContent } from "../context/ContentContext";
import { UnoIsotype } from "./Logo";

export default function Hero() {
  const { language, t } = useLanguage();
  const { content } = useSiteContent();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const btn1 = language === "es" ? "Iniciar Diálogo" : language === "en" ? "Start Dialogue" : language === "it" ? "Inizia Dialogo" : "Commencer Dialogue";
  const btn2 = language === "es" ? "Sentir los Espacios" : language === "en" ? "Experience Spaces" : language === "it" ? "Sentire gli Spazi" : "Ressentir les Espaces";

  return (
    <header
      id="inicio"
      className="relative w-full min-h-[92vh] md:min-h-[720px] flex items-center justify-center overflow-hidden bg-background py-20 px-4 sm:px-6 md:px-margin-desktop"
    >
      {/* Ambient Animated Luxury Aura (Pure GPU CSS - Zero Main Thread Blocking) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(200,184,154,0.22)_0%,rgba(0,158,155,0.08)_40%,transparent_70%)] animate-[pulse_12s_ease-in-out_infinite_alternate]"></div>
      </div>

      {/* Boho-Chic Luxury Architecture Photo Overlay */}
      <div className="absolute inset-0 z-[1] opacity-60 mix-blend-overlay">
        <img
          alt="Arquitectura Contemporánea Tropical - Villa de Lujo en Riviera Maya por UNO Arquitectos"
          className="w-full h-full object-cover object-center scale-105 transform origin-center animate-[pulse_30s_ease-in-out_infinite_alternate]"
          src="/hero-luxury-villa.webp"
          width={1280}
          height={853}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Warm Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(rgba(200, 184, 154, 0.2) 0%, rgba(200, 184, 154, 0.4) 100%)" }}
      ></div>

      {/* Glassmorphism Central Card */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-24 p-6 sm:p-10 md:p-16 lg:p-20 bg-white/55 backdrop-blur-md rounded-3xl border border-white/50 shadow-ethereal reveal-on-scroll is-visible overflow-hidden">
        
        {/* Architectural Watermark Logo - Centered at 80% of card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <UnoIsotype
            size="100%"
            color="#00A3A3"
            cubeColor="#FFFFFF"
            strokeColor="#00A3A3"
            className="w-[80%] max-w-[540px] aspect-square opacity-[0.09]"
          />
        </div>

        <div className="relative z-10">
          <span className="font-label-caps text-[11px] sm:text-xs md:text-label-caps text-arena-calida uppercase tracking-[0.2em] sm:tracking-[0.25em] block mb-3 sm:mb-4 font-semibold">
            {(language === "es" ? content?.hero?.taglineEs : content?.hero?.taglineEn) || t("hero.tagline") || "Arquitectura que pertenece. Espacios que perduran."}
          </span>

          <h1 
            className="font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-uno mb-4 sm:mb-6 tracking-tight font-semibold"
            style={{ textShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px" }}
          >
            {(language === "es" ? content?.hero?.headingEs : content?.hero?.headingEn) || "UNO ARQUITECTOS"}
          </h1>

          <p className="font-body-md sm:font-body-lg text-sm sm:text-base md:text-body-lg text-gris-texto mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            {(language === "es" ? content?.hero?.subheadingEs : content?.hero?.subheadingEn) || t("hero.subheading") || "Servicios integrales de diseño y construcción llave en mano en Riviera Maya desde 2017."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => scrollToSection("contacto")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-teal-uno text-white font-label-caps text-xs sm:text-label-caps uppercase hover:bg-arena-calida transition-all duration-500 rounded-full shadow-ethereal cursor-pointer"
            >
              {(language === "es" ? content?.hero?.ctaTextEs : content?.hero?.ctaTextEn) || btn1}
            </button>

            <button
              onClick={() => scrollToSection("proyectos")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 border border-teal-uno text-teal-uno font-label-caps text-xs sm:text-label-caps uppercase hover:bg-teal-uno hover:text-white transition-all duration-500 rounded-full cursor-pointer"
            >
              {btn2}
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_downward</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
