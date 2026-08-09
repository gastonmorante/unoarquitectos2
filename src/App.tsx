import React, { useState, useEffect } from 'react';
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

      <div id="app-root" className="min-h-screen bg-background text-gris-texto selection:bg-arena-calida selection:text-white font-sans transition-colors duration-300 texture-overlay">
        <Navbar />
        <main id="main-content">
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
        <footer id="main-footer" className="w-full pt-section-padding pb-12 bg-background border-t border-arena-calida/20 texture-overlay font-sans text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20">
            <div className="md:col-span-4 mb-10 md:mb-0">
              <a className="block mb-6 opacity-90 hover:opacity-100 transition-opacity" href="#">
                <Logo showText={true} iconSize={36} textSize="text-lg" />
              </a>
              <p className="font-body-md text-body-md text-gris-texto max-w-xs leading-relaxed">
                Arquitectura Contemporánea Tropical. Diseñando espacios con rigor técnico, sofisticación contenida y materiales honestos.
              </p>
            </div>
            
            <div className="md:col-span-2 md:col-start-7 mb-10 md:mb-0">
              <h5 className="font-label-caps text-label-caps text-arena-calida mb-8 uppercase tracking-widest font-semibold">Santuario</h5>
              <ul className="space-y-5 font-label-caps text-label-caps">
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="#proyectos">Colección</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="#filosofia">Esencia</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="#contacto">Diálogo</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h5 className="font-label-caps text-label-caps text-arena-calida mb-8 uppercase tracking-widest font-semibold">Resonancia</h5>
              <ul className="space-y-5 font-label-caps text-label-caps">
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="https://www.instagram.com/unoarquitectos" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <li><a className="text-gris-texto hover:text-teal-uno transition-colors duration-300 uppercase block" href="https://www.linkedin.com/company/unoarquitectos" target="_blank" rel="noopener noreferrer">Journal</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h5 className="font-label-caps text-label-caps text-arena-calida mb-8 uppercase tracking-widest font-semibold">Acuerdos</h5>
              <ul className="space-y-5 font-label-caps text-label-caps">
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

          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-t border-arena-calida/20">
            <p className="font-label-caps text-label-caps text-gris-texto/70 uppercase tracking-widest text-xs">
              © {new Date().getFullYear()} UNO ARQUITECTOS. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <p className="font-label-caps text-label-caps text-arena-calida mt-4 md:mt-0 uppercase tracking-widest text-xs font-semibold">
              DISEÑO CONSCIENTE
            </p>
          </div>
        </footer>

        {/* GLOBAL LEGAL COMPLIANCE & COOKIE CONSENT MODULES */}
        <LegalNotice />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}
