import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CookieBanner() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("uno_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 15000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleAccept = () => {
    localStorage.setItem("uno_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleOpenPrivacy = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-legal", { detail: { tab: "privacy" } }));
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-20 right-4 left-4 sm:right-6 sm:left-auto sm:max-w-md z-40 bg-white text-gris-texto border border-gris-piedra p-5 rounded-xs shadow-2xl font-sans"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-teal-uno">
              <Cookie className="w-5 h-5" />
              <h4 className="font-label-caps text-xs font-semibold uppercase tracking-wider text-teal-uno">
                {isEs ? "Privacidad & Cookies" : "Privacy & Cookie Preferences"}
              </h4>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gris-texto hover:text-teal-uno transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 -mt-2"
              aria-label="Cerrar aviso de cookies / Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="font-body-md text-xs text-gris-texto leading-relaxed mb-4 text-left">
            {isEs
              ? "Utilizamos cookies y tecnologías esenciales para mejorar su experiencia de navegación, optimizar el rendimiento del Asesor IA y garantizar la seguridad según nuestro Aviso de Privacidad."
              : "We use cookies and essential technologies to enhance your browsing experience, optimize AI Advisor performance, and maintain security under our Privacy Notice."}
          </p>

          <div className="flex items-center justify-between gap-3 border-t border-gris-piedra pt-3 font-label-caps">
            <button
              onClick={handleOpenPrivacy}
              className="text-[11px] text-gris-texto hover:text-teal-uno underline transition-colors cursor-pointer flex items-center gap-1.5 min-h-[44px] py-2 px-1"
            >
              <ShieldCheck className="w-4 h-4 text-teal-uno" />
              {isEs ? "Aviso de Privacidad" : "Privacy Notice"}
            </button>

            <button
              onClick={handleAccept}
              className="px-5 py-2.5 min-h-[44px] bg-teal-uno hover:opacity-90 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center"
            >
              {isEs ? "Aceptar" : "Accept All"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
