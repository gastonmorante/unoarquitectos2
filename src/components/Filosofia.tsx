import { Trees, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSiteContent } from "../context/ContentContext";

export default function Filosofia() {
  const { t, language } = useLanguage();
  const { content } = useSiteContent();

  return (
    <section id="filosofia" className="py-section-padding px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low relative texture-overlay border-b border-arena-calida/20 font-sans overflow-hidden cv-auto">
      <div id="nosotros" className="relative -top-24 pointer-events-none" />
      <div className="max-w-container-max mx-auto">
        
        {/* Brand Purpose Level 0 Hero Block */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-4xl mx-auto border-b border-arena-calida/30 pb-10 sm:pb-14 md:pb-16 reveal-on-scroll is-visible">
          <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-widest block mb-3 sm:mb-4 font-semibold">
            {t("filosofia.tagline") || "Nuestra Esencia"}
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
              {t("filosofia.tagline") || "Nuestra Esencia"}
            </h2>
            
            <h3 className="font-headline-xl text-headline-xl text-teal-uno mb-6 sm:mb-8 leading-tight uppercase font-semibold">
              {t("filosofia.heading") || "ARQUITECTURA CONTEMPORÁNEA TROPICAL"}
            </h3>

            <div className="space-y-4 sm:space-y-6 font-body-md text-body-md text-gris-texto leading-relaxed mb-8 sm:mb-10">
              <p>
                {t("filosofia.p1") || "Concebimos cada proyecto con una sofisticación contenida y un rigor técnico innegociable. Empleamos materiales honestos —concreto aparente, madera de Tzalam y Chukum natural— combinados a través de una construcción con criterio."}
              </p>
              <p>
                {t("filosofia.p2") || "Nuestra arquitectura respeta el entorno y las condiciones climáticas del trópico, logrando espacios eficientes y de alta calidad espacial mediante soluciones formales y materiales precisos."}
              </p>
              <p>
                {t("filosofia.p3") || "Ofrecemos certidumbre total mediante presupuestos paramétricos transparentes desde el primer día, cálculo de ingeniería estructural sobre suelo kárstico y gestoría técnica de permisos en Tulum, Cancún y Playa del Carmen."}
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
                    {t("filosofia.valSust") || "Sostenibilidad"}
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  {t("filosofia.valSustDesc") || "Estrategias bioclimáticas reales, no eslóganes decorativos."}
                </p>
              </div>

              <div className="bg-white/30 sm:bg-transparent p-4 sm:p-0 rounded-xl border border-arena-calida/15 sm:border-none">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno flex-shrink-0">
                    <HeartHandshake className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider font-semibold">
                    {t("filosofia.valIng") || "Transparencia"}
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  {t("filosofia.valIngDesc") || "Presupuestos paramétricos claros desde el primer día."}
                </p>
              </div>

              <div className="bg-white/30 sm:bg-transparent p-4 sm:p-0 rounded-xl border border-arena-calida/15 sm:border-none">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arena-calida/20 flex items-center justify-center text-teal-uno flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="font-label-caps text-xs uppercase text-teal-uno tracking-wider font-semibold">
                    {t("filosofia.valIntegr") || "Ingeniería"}
                  </h4>
                </div>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                  {t("filosofia.valIntegrDesc") || "Cimentación calculada para suelo kárstico y sismos."}
                </p>
              </div>
            </div>

            {/* Leadership & E-E-A-T Authority Block */}
            <div className="mt-8 p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-arena-calida/30 shadow-sm text-left">
              <div className="flex items-center gap-3 mb-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-uno flex-shrink-0" />
                <div>
                  <h4 className="font-label-caps text-xs sm:text-label-caps uppercase text-teal-uno font-semibold tracking-wider">
                    {language === "es" ? "Dirección Técnica & Trayectoria" : language === "en" ? "Technical Leadership & Track Record" : language === "it" ? "Leadership Tecnica & Esperienza" : "Leadership Technique & Expérience"}
                  </h4>
                  <p className="font-body-md text-[11px] sm:text-xs text-arena-calida font-medium">
                    {content?.filosofia?.author || "Arq. Angel Cereceda"} • {content?.filosofia?.authorRole || "Fundador & Director General"}
                  </p>
                </div>
              </div>
              <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                {language === "es" 
                  ? "Más de 20 años liderando desarrollo y gestión técnica en Riviera Maya. Máster en Project Management (Universidad Europea de Madrid) y Máster en Desarrollo Sostenible. Experiencia técnica directiva en obras de escala internacional como Papaya Playa Project, Inmobilia Mayaliah (25,000 m²) y Selina."
                  : language === "en"
                  ? "Over 20 years leading real estate development and technical management in the Riviera Maya. Master's in Project Management (Universidad Europea de Madrid) and Master's in Sustainable Development. Prior technical leadership in international projects including Papaya Playa Project, Inmobilia Mayaliah (25,000 m²), and Selina."
                  : language === "it"
                  ? "Oltre 20 anni di leadership nello sviluppo immobiliare e nella gestione tecnica nella Riviera Maya. Master in Project Management (Universidad Europea de Madrid) e Master in Sviluppo Sostenibile. Esperienza tecnica direttiva in progetti iconici come Papaya Playa Project e Inmobilia Mayaliah (25.000 m²)."
                  : "Plus de 20 ans d'expérience dans le développement immobilier et la gestion technique dans la Riviera Maya. Master en Project Management (Universidad Europea de Madrid) et Master en Développement Durable. Direction technique sur des projets emblématiques tels que Papaya Playa Project et Inmobilia Mayaliah (25 000 m²)."}
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Frame */}
          <div className="md:col-span-6 lg:col-span-5 md:col-start-7 lg:col-start-8 relative reveal-on-scroll is-visible max-w-md mx-auto md:max-w-none w-full" style={{ transitionDelay: "200ms" }}>
            <div className="absolute -inset-2 sm:-inset-4 bg-arena-calida/15 rounded-2xl -z-10 transform rotate-1 sm:rotate-2 transition-transform hover:rotate-0 duration-700 pointer-events-none"></div>
            <img 
              alt="Filosofía y diseño arquitectónico contemporáneo tropical en Riviera Maya - UNO Arquitectos" 
              className="w-full h-auto object-cover aspect-[3/4] rounded-xl shadow-ethereal" 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=800&q=80"
              width={600}
              height={800}
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
