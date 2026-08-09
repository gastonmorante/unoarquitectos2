import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Servicios() {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <section id="servicios" className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-variant relative texture-overlay border-b border-arena-calida/20 font-sans">
      {/* Decorative organic elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arena-calida/30 to-transparent"></div>
      
      <div className="max-w-container-max mx-auto text-center mb-20 reveal-on-scroll is-visible">
        <h2 className="font-label-caps text-label-caps text-teal-uno mb-6 flex items-center justify-center gap-6 uppercase tracking-widest">
          <span className="w-16 h-[1px] bg-teal-uno inline-block"></span>
          {isEs ? "Nuestras Prácticas" : "Our Practices"}
          <span className="w-16 h-[1px] bg-teal-uno inline-block"></span>
        </h2>
        <h3 className="font-headline-xl text-headline-xl text-teal-uno uppercase">
          {isEs ? "DISCIPLINAS DEL ESPACIO" : "SPATIAL DISCIPLINES"}
        </h3>
      </div>

      <div className="max-w-container-max mx-auto">
        {/* Top Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Phase 01 */}
          <div className="flex flex-col items-center text-center p-12 bg-white/40 backdrop-blur-md rounded-3xl border border-arena-calida/20 shadow-ethereal hover:-translate-y-2 transition-all duration-500 reveal-on-scroll is-visible group">
            <div className="w-20 h-20 mb-8 flex items-center justify-center bg-arena-calida/10 rounded-full text-arena-calida group-hover:bg-teal-uno group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-[36px] font-thin">all_inclusive</span>
            </div>
            <span className="font-label-caps text-[12px] text-arena-calida mb-4 uppercase tracking-widest font-semibold">
              {isEs ? "Fase 01" : "Phase 01"}
            </span>
            <h4 className="font-headline-md text-headline-md text-teal-uno mb-4 uppercase leading-snug">
              {isEs ? "Diseño Arquitectónico" : "Architectural Design"}
            </h4>
            <p className="font-body-md text-body-md text-gris-texto leading-relaxed">
              {isEs 
                ? "Rigor técnico y espacial. Diseñamos con un profundo análisis del clima y el contexto, asegurando que cada estructura responda funcionalmente de manera óptima a su entorno."
                : "Technical and spatial rigor. We design with deep climate and context analysis, ensuring optimal functional harmony with the surrounding environment."}
            </p>
          </div>

          {/* Phase 02 */}
          <div className="flex flex-col items-center text-center p-12 bg-white/40 backdrop-blur-md rounded-3xl border border-arena-calida/20 shadow-ethereal hover:-translate-y-2 transition-all duration-500 reveal-on-scroll is-visible group" style={{ transitionDelay: "100ms" }}>
            <div className="w-20 h-20 mb-8 flex items-center justify-center bg-arena-calida/10 rounded-full text-arena-calida group-hover:bg-teal-uno group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-[36px] font-thin">architecture</span>
            </div>
            <span className="font-label-caps text-[12px] text-arena-calida mb-4 uppercase tracking-widest font-semibold">
              {isEs ? "Fase 02" : "Phase 02"}
            </span>
            <h4 className="font-headline-md text-headline-md text-teal-uno mb-4 uppercase leading-snug">
              {isEs ? "Proyecto Ejecutivo & Ingeniería" : "Executive Project & Engineering"}
            </h4>
            <p className="font-body-md text-body-md text-gris-texto leading-relaxed">
              {isEs 
                ? "Memorias de cálculo kárstico, planos constructivos de alta precisión y especificaciones técnicas para evitar cualquier sobrecosto en obra."
                : "Karstic structural calculations, high-precision construction blueprints, and rigorous technical specs to eliminate unexpected project costs."}
            </p>
          </div>

          {/* Phase 03 */}
          <div className="flex flex-col items-center text-center p-12 bg-white/40 backdrop-blur-md rounded-3xl border border-arena-calida/20 shadow-ethereal hover:-translate-y-2 transition-all duration-500 reveal-on-scroll is-visible group" style={{ transitionDelay: "200ms" }}>
            <div className="w-20 h-20 mb-8 flex items-center justify-center bg-teal-uno rounded-full text-white shadow-sm">
              <span className="material-symbols-outlined text-[36px] font-thin">spa</span>
            </div>
            <span className="font-label-caps text-[12px] text-arena-calida mb-4 uppercase tracking-widest font-semibold">
              {isEs ? "Fase 03" : "Phase 03"}
            </span>
            <h4 className="font-headline-md text-headline-md text-teal-uno mb-4 uppercase leading-snug">
              {isEs ? "Interiorismo Sensorial" : "Sensory Interior Design"}
            </h4>
            <p className="font-body-md text-body-md text-gris-texto leading-relaxed">
              {isEs 
                ? "Selección meticulosa de materiales honestos y acabados continuos de Chukum. Desarrollamos atmósferas que transmiten sofisticación contenida en cada detalle."
                : "Meticulous selection of honest materials and continuous Chukum finishes. We craft atmospheres that convey restrained sophistication in every detail."}
            </p>
          </div>
        </div>

        {/* Bottom Row: 2 Columns Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Phase 04 */}
          <div className="flex flex-col items-center text-center p-12 bg-white/40 backdrop-blur-md rounded-3xl border border-arena-calida/20 shadow-ethereal hover:-translate-y-2 transition-all duration-500 reveal-on-scroll is-visible group" style={{ transitionDelay: "300ms" }}>
            <div className="w-20 h-20 mb-8 flex items-center justify-center bg-arena-calida/10 rounded-full text-arena-calida group-hover:bg-teal-uno group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-[36px] font-thin">construction</span>
            </div>
            <span className="font-label-caps text-[12px] text-arena-calida mb-4 uppercase tracking-widest font-semibold">
              {isEs ? "Fase 04" : "Phase 04"}
            </span>
            <h4 className="font-headline-md text-headline-md text-teal-uno mb-4 uppercase leading-snug">
              {isEs ? "Gerencia & Construcción" : "Management & Construction"}
            </h4>
            <p className="font-body-md text-body-md text-gris-texto leading-relaxed">
              {isEs 
                ? "Supervisión técnica de obra 360°, control de cambios riguroso y mano de obra certificada con trazabilidad completa para clientes e inversionistas."
                : "360° technical site supervision, strict change control, and certified artisan craftsmanship with end-to-end milestone traceability."}
            </p>
          </div>

          {/* Phase 05 */}
          <div className="flex flex-col items-center text-center p-12 bg-white/40 backdrop-blur-md rounded-3xl border border-arena-calida/20 shadow-ethereal hover:-translate-y-2 transition-all duration-500 reveal-on-scroll is-visible group" style={{ transitionDelay: "400ms" }}>
            <div className="w-20 h-20 mb-8 flex items-center justify-center bg-arena-calida/10 rounded-full text-arena-calida group-hover:bg-teal-uno group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-[36px] font-thin">visibility</span>
            </div>
            <span className="font-label-caps text-[12px] text-arena-calida mb-4 uppercase tracking-widest font-semibold">
              {isEs ? "Fase 05" : "Phase 05"}
            </span>
            <h4 className="font-headline-md text-headline-md text-teal-uno mb-4 uppercase leading-snug">
              {isEs ? "Visualización Espacial" : "Spatial Visualization"}
            </h4>
            <p className="font-body-md text-body-md text-gris-texto leading-relaxed">
              {isEs 
                ? "Representación arquitectónica inmersiva. Traducimos nuestras propuestas volumétricas en visualizaciones técnicas y renders de alta fidelidad."
                : "Immersive architectural representation. We translate our volumetric proposals into high-fidelity renders and spatial technical visualizations."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
