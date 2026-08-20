import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filosofia from './components/Filosofia';
import Metrics from './components/Metrics';
import Servicios from './components/Servicios';
import Portfolio from './components/Portfolio';
import Faqs from './components/Faqs';
import AIConsultant from './components/AIConsultant';
import Contacto from './components/Contacto';
import Preloader from './components/Preloader';
import LegalNotice from './components/LegalNotice';
import CookieBanner from './components/CookieBanner';
import Logo from './components/Logo';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const openLegalModal = (tab: "privacy" | "terms") => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-legal", { detail: { tab } }));
    }
  };

  return (
    <LanguageProvider>
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div id="app-root" className="min-h-screen w-full overflow-x-hidden bg-background text-gris-texto selection:bg-arena-calida selection:text-white font-sans transition-colors duration-300 texture-overlay">
        <Navbar />
        <main id="main-content" className="w-full overflow-x-hidden">
          <section id="inicio">
            <Hero />
          </section>
          <section id="filosofia">
            <Filosofia />
          </section>
          <Metrics />
          <section id="servicios">
            <Servicios />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="faqs">
            <Faqs />
          </section>
          <section id="consulta-ia" className="relative z-10">
            <AIConsultant />
          </section>
          <section id="contacto">
            <Contacto />
          </section>
        </main>

        {/* STICH ARCHITECTURAL FOOTER */}
        <footer id="main-footer" className="w-full pt-12 sm:pt-16 md:pt-section-padding pb-8 sm:pb-12 bg-background border-t border-arena-calida/20 texture-overlay font-sans text-left overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="md:col-span-4 mb-6 sm:mb-8 md:mb-0">
              <a className="block mb-4 sm:mb-6 opacity-90 hover:opacity-100 transition-opacity" href="#">
                <Logo showText={true} iconSize={32} textSize="text-base sm:text-lg" />
              </a>
              <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-xs leading-relaxed">
                Arquitectura Contemporánea Tropical. Diseñando espacios con rigor técnico, sofisticación contenida y materiales honestos.
              </p>
            </div>
            
            <div className="md:col-span-2 md:col-start-7 mb-6 sm:mb-8 md:mb-0">
              <h5 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-4 sm:mb-6 uppercase tracking-widest font-semibold">Santuario</h5>
              <ul className="space-y-3 sm:space-y-4 font-label-caps text-xs sm:text-label-caps">
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="#proyectos">Colección</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="#filosofia">Esencia</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="#contacto">Diálogo</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2 mb-6 sm:mb-8 md:mb-0">
              <h5 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-4 sm:mb-6 uppercase tracking-widest font-semibold">Resonancia</h5>
              <ul className="space-y-3 sm:space-y-4 font-label-caps text-xs sm:text-label-caps">
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="https://www.instagram.com/unoarquitectos" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="https://www.linkedin.com/company/unoarquitectos" target="_blank" rel="noopener noreferrer">Journal</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h5 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-4 sm:mb-6 uppercase tracking-widest font-semibold">Acuerdos</h5>
              <ul className="space-y-3 sm:space-y-4 font-label-caps text-xs sm:text-label-caps">
                <li>
                  <button onClick={() => openLegalModal("terms")} className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left">
                    Esencia Legal
                  </button>
                </li>
                <li>
                  <button onClick={() => openLegalModal("privacy")} className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase cursor-pointer text-left">
                    Resguardo
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
        <LegalNotice />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}
