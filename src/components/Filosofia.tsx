import { Trees, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Filosofia() {
  const { t, language } = useLanguage();

  return (
    <section id="filosofia" className="py-section-padding px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low relative texture-overlay border-b border-arena-calida/20 font-sans overflow-hidden">
      <div className="max-w-container-max mx-auto">
        
        {/* Brand Purpose Level 0 Hero Block */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-4xl mx-auto border-b border-arena-calida/30 pb-10 sm:pb-14 md:pb-16 reveal-on-scroll is-visible">
          <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-widest block mb-3 sm:mb-4 font-semibold">
            Nuestra Esencia
          </span>
          <h2 className="font-serif-quote text-serif-quote italic text-gris-texto leading-snug px-2">
            "{t("filosofia.purpose") || "Materializamos espacios que suman — a quien los habita, a quien los construye, al lugar que los recibe y a la comunidad que los rodea."}"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 items-center">
          
          {/* Left Column: Philosophy Text */}
          <div className="md:col-span-6 lg:col-span-5 md:col-start-1 lg:col-start-2 text-left reveal-on-scroll is-visible">
            <h2 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-4 sm:mb-6 flex items-center gap-4 sm:gap-6 uppercase tracking-widest font-semibold">
              <span className="w-10 sm:w-16 h-[1px] bg-arena-calida"></span>
              Nuestra Esencia
            </h2>
            
            <h3 className="font-headline-xl text-headline-xl text-teal-uno mb-6 sm:mb-8 leading-tight uppercase font-semibold">
              ARQUITECTURA CONTEMPORÁNEA TROPICAL
            </h3>

            <div className="space-y-4 sm:space-y-6 font-body-md text-body-md text-gris-texto leading-relaxed mb-8 sm:mb-10">
              <p>
                Concebimos cada proyecto con una sofisticación contenida y un rigor técnico innegociable. Empleamos materiales honestos —concreto aparente, madera de Tzalam y Chukum natural— combinados a través de una construcción con criterio para lograr una integración armoniosa y duradera con el sitio.
              </p>
              <p>
                Nuestra arquitectura respeta el entorno y las condiciones climáticas del trópico, logrando espacios eficientes y de alta calidad espacial mediante soluciones formales y materiales precisos.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 border-t border-arena-calida/30 pt-6 sm:pt-8">
              <div className="bg-white/30 sm:bg-transparent p-4 sm:p-0 rounded-xl border border-arena-calida/15 sm:border-none">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno flex-shrink-0">
                    <Trees className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider font-semibold">
                    Sostenibilidad
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  Estrategias bioclimáticas reales, no eslóganes decorativos.
                </p>
              </div>

              <div className="bg-white/30 sm:bg-transparent p-4 sm:p-0 rounded-xl border border-arena-calida/15 sm:border-none">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno flex-shrink-0">
                    <HeartHandshake className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider font-semibold">
                    Transparencia
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  Presupuestos paramétricos claros desde el primer día.
                </p>
              </div>

              <div className="bg-white/30 sm:bg-transparent p-4 sm:p-0 rounded-xl border border-arena-calida/15 sm:border-none">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider font-semibold">
                    Ingeniería
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  Cimentación calculada para suelo kárstico y sismos.
                </p>
              </div>
            </div>

            {/* Leadership & E-E-A-T Authority Block */}
            <div className="mt-8 p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-arena-calida/30 shadow-sm text-left">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="material-symbols-outlined text-teal-uno text-[22px]">verified</span>
                <div>
                  <h4 className="font-label-caps text-xs sm:text-label-caps uppercase text-teal-uno font-semibold tracking-wider">
                    {language === "es" ? "Dirección Técnica & Trayectoria" : "Technical Leadership & Track Record"}
                  </h4>
                  <p className="font-body-md text-[11px] sm:text-xs text-arena-calida font-medium">
                    Arq. Angel Cereceda • Fundador & Director General
                  </p>
                </div>
              </div>
              <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                {language === "es" 
                  ? "Más de 20 años liderando desarrollo y gestión técnica en Riviera Maya y CDMX. Máster en Project Management (Universidad Europea de Madrid) y Máster en Desarrollo Sostenible. Experiencia técnica directiva en obras de escala internacional como Papaya Playa Project, Inmobilia Mayaliah (25,000 m²) y Selina."
                  : "Over 20 years leading real estate development and technical management in the Riviera Maya and Mexico City. Master's in Project Management (Universidad Europea de Madrid) and Master's in Sustainable Development. Prior technical leadership in international projects including Papaya Playa Project, Inmobilia Mayaliah (25,000 m²), and Selina."}
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Frame */}
          <div className="md:col-span-6 lg:col-span-5 md:col-start-7 lg:col-start-8 relative reveal-on-scroll is-visible max-w-md mx-auto md:max-w-none w-full" style={{ transitionDelay: "200ms" }}>
            <div className="absolute -inset-2 sm:-inset-4 bg-arena-calida/15 rounded-2xl -z-10 transform rotate-1 sm:rotate-2 transition-transform hover:rotate-0 duration-700 pointer-events-none"></div>
            <img 
              alt="Filosofía y diseño arquitectónico contemporáneo tropical en Riviera Maya - UNO Arquitectos" 
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] rounded-xl shadow-ethereal" 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&h=1400&q=95"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
