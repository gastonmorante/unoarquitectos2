import React from "react";
import { Trees, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Filosofia() {
  const { t } = useLanguage();

  return (
    <section id="filosofia" className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low relative texture-overlay border-b border-arena-calida/20 font-sans">
      <div className="max-w-container-max mx-auto">
        
        {/* Brand Purpose Level 0 Hero Block */}
        <div className="mb-20 text-center max-w-4xl mx-auto border-b border-arena-calida/30 pb-16 reveal-on-scroll is-visible">
          <span className="font-label-caps text-label-caps text-arena-calida uppercase tracking-widest block mb-4">
            Nuestra Esencia
          </span>
          <h2 className="font-serif-quote text-serif-quote italic text-gris-texto leading-snug">
            "{t("filosofia.purpose") || "Materializamos espacios que suman — a quien los habita, a quien los construye, al lugar que los recibe y a la comunidad que los rodea."}"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          
          {/* Left Column: Philosophy Text */}
          <div className="md:col-span-5 md:col-start-2 text-left reveal-on-scroll is-visible">
            <h2 className="font-label-caps text-label-caps text-arena-calida mb-8 flex items-center gap-6 uppercase tracking-widest">
              <span className="w-16 h-[1px] bg-arena-calida"></span>
              Nuestra Esencia
            </h2>
            
            <h3 className="font-headline-xl text-headline-xl text-teal-uno mb-8 leading-tight uppercase">
              ARQUITECTURA CONTEMPORÁNEA TROPICAL
            </h3>

            <div className="space-y-6 font-body-md text-body-md text-gris-texto leading-relaxed mb-10">
              <p className="font-body-lg text-body-lg text-gris-texto leading-relaxed">
                Concebimos cada proyecto con una sofisticación contenida y un rigor técnico innegociable. Empleamos materiales honestos —concreto aparente, madera de Tzalam y Chukum natural— combinados a través de una construcción con criterio para lograr una integración armoniosa y duradera con el sitio.
              </p>
              <p>
                Nuestra arquitectura respeta el entorno y las condiciones climáticas del trópico, logrando espacios eficientes y de alta calidad espacial mediante soluciones formales y materiales precisos.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-arena-calida/30 pt-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno">
                    <Trees className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider">
                    Sostenibilidad
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  Estrategias bioclimáticas reales, no eslóganes decorativos.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno">
                    <HeartHandshake className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider">
                    Transparencia
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  Presupuestos paramétricos claros desde el primer día.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno">
                    <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider">
                    Ingeniería
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  Cimentación calculada para suelo kárstico y sismos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Soft Rotated Architectural Frame */}
          <div className="md:col-span-5 md:col-start-8 mt-16 md:mt-0 relative reveal-on-scroll is-visible" style={{ transitionDelay: "200ms" }}>
            <div className="absolute -inset-4 bg-arena-calida/15 rounded-2xl -z-10 transform rotate-2 transition-transform hover:rotate-0 duration-700 pointer-events-none"></div>
            <img 
              alt="Interior of a spiritual architectural space, boho-minimalist style." 
              className="w-full h-auto object-cover aspect-[3/4] rounded-xl shadow-ethereal" 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&h=1400&q=95"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
