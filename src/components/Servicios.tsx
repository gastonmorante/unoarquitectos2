import { useLanguage } from "../context/LanguageContext";
import { Compass, DraftingCompass, Sparkles, HardHat, Eye, FileSpreadsheet } from "lucide-react";

export default function Servicios() {
  const { language } = useLanguage();
  const lang = ["es", "en", "it", "fr"].includes(language) ? language : "es";

  const labels = {
    tagline: {
      es: "Nuestras Prácticas",
      en: "Our Practices",
      it: "Le Nostre Pratiche",
      fr: "Nos Pratiques"
    },
    heading: {
      es: "DISCIPLINAS DEL ESPACIO",
      en: "SPATIAL DISCIPLINES",
      it: "DISCIPLINE DELLO SPAZIO",
      fr: "DISCIPLINES DE L'ESPACE"
    },
    phasePrefix: {
      es: "Fase",
      en: "Phase",
      it: "Fase",
      fr: "Phase"
    },
    phases: [
      {
        num: "01",
        icon: Compass,
        title: {
          es: "Diseño Arquitectónico",
          en: "Architectural Design",
          it: "Progettazione Architettonica",
          fr: "Conception Architecturale"
        },
        desc: {
          es: "Rigor técnico y espacial. Diseñamos con un profundo análisis del clima y el contexto, asegurando que cada estructura responda funcionalmente de manera óptima a su entorno.",
          en: "Technical and spatial rigor. We design with deep climate and context analysis, ensuring optimal functional harmony with the surrounding environment.",
          it: "Rigore tecnico e spaziale. Progettiamo con una profonda analisi del clima e del contesto, garantendo che ogni struttura risponda in modo ottimale all'ambiente.",
          fr: "Rigueur technique et spatiale. Nous concevons avec une analyse approfondie du climat et du contexte, garantissant une harmonie fonctionnelle optimale avec l'environnement."
        }
      },
      {
        num: "02",
        icon: DraftingCompass,
        title: {
          es: "Proyecto Ejecutivo & Ingeniería",
          en: "Executive Project & Engineering",
          it: "Progetto Esecutivo & Ingegneria",
          fr: "Projet Exécutif & Ingénierie"
        },
        desc: {
          es: "Memorias de cálculo kárstico, planos constructivos de alta precisión y especificaciones técnicas para evitar cualquier sobrecosto en obra.",
          en: "Karstic structural calculations, high-precision construction blueprints, and rigorous technical specs to eliminate unexpected project costs.",
          it: "Calcoli strutturali per terreno carsico, piante esecutive ad alta precisione e specifiche tecniche per eliminare ogni extra-costo in cantiere.",
          fr: "Calculs structurels sur sol karstique, plans d'exécution haute précision et spécifications techniques pour éliminer tout surcoût sur chantier."
        }
      },
      {
        num: "03",
        icon: Sparkles,
        title: {
          es: "Interiorismo Sensorial",
          en: "Sensory Interior Design",
          it: "Interior Design Sensoriale",
          fr: "Architecture d'Intérieur Sensorielle"
        },
        desc: {
          es: "Selección meticulosa de materiales honestos y acabados continuos de Chukum. Desarrollamos atmósferas que transmiten sofisticación contenida en cada detalle.",
          en: "Meticulous selection of honest materials and continuous Chukum finishes. We craft atmospheres that convey restrained sophistication in every detail.",
          it: "Selezione meticolosa di materiali nobili e finiture continue in Chukum. Creiamo atmosfere che trasmettono sobria eleganza in ogni dettaglio.",
          fr: "Sélection méticuleuse de matériaux nobles et finitions continues en Chukum. Nous concevons des atmosphères alliant élégance sobre et bien-être tropical."
        }
      },
      {
        num: "04",
        icon: HardHat,
        title: {
          es: "Gerencia & Construcción",
          en: "Management & Construction",
          it: "Direzione Lavori & Costruzione",
          fr: "Direction de Chantier & Construction"
        },
        desc: {
          es: "Supervisión técnica de obra 360°, control de cambios riguroso y mano de obra certificada con trazabilidad completa para clientes e inversionistas.",
          en: "360° technical site supervision, strict change control, and certified artisan craftsmanship with end-to-end milestone traceability.",
          it: "Supervisione tecnica di cantiere a 360°, rigoroso controllo delle varianti e maestranze qualificate con tracciabilità completa per gli investitori.",
          fr: "Supervision technique à 360°, contrôle rigoureux des délais et artisans qualifiés avec traçabilité complète pour les investisseurs."
        }
      },
      {
        num: "05",
        icon: Eye,
        title: {
          es: "Visualización Espacial",
          en: "Spatial Visualization",
          it: "Visualizzazione Spaziale",
          fr: "Visualisation Spatiale"
        },
        desc: {
          es: "Representación arquitectónica inmersiva. Traducimos nuestras propuestas volumétricas en visualizaciones técnicas y renders de alta fidelidad.",
          en: "Immersive architectural representation. We translate our volumetric proposals into high-fidelity renders and spatial technical visualizations.",
          it: "Rappresentazione architettonica immersiva. Traduciamo le proposte volumetriche in render e visualizzazioni tecniche ad altissima fedeltà.",
          fr: "Représentation architecturale immersive. Nous traduisons nos propositions volumétriques en rendus 3D et visualisations techniques haute fidélité."
        }
      },
      {
        num: "06",
        icon: FileSpreadsheet,
        title: {
          es: "Ingeniería de Costos & Permisos",
          en: "Cost Engineering & Permitting",
          it: "Ingegneria dei Costi & Permessi",
          fr: "Ingénierie des Coûts & Permis"
        },
        desc: {
          es: "Presupuestos paramétricos desglosados para certidumbre financiera total. Tramitación integral de licencias de construcción, manifiestos ambientales (MIA) y viabilidad jurídica en Quintana Roo.",
          en: "Detailed parametric budgeting for complete financial certainty. Comprehensive processing of municipal building permits, environmental filings (MIA), and legal zoning compliance across Quintana Roo.",
          it: "Budget parametrici dettagliati per una totale certezza finanziaria. Gestione completa di permessi di costruire municipali e autorizzazioni ambientali a Quintana Roo.",
          fr: "Budgets paramétriques détaillés pour une certitude financière totale. Gestion intégrale des permis de construire et études d'impact environnemental (MIA) dans le Quintana Roo."
        }
      }
    ]
  };

  return (
    <section id="servicios" className="py-section-padding px-4 sm:px-6 md:px-margin-desktop bg-surface-variant relative texture-overlay border-b border-arena-calida/20 font-sans overflow-hidden cv-auto">
      {/* Decorative organic elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arena-calida/30 to-transparent"></div>
      
      <div className="max-w-container-max mx-auto text-center mb-12 sm:mb-16 md:mb-20 reveal-on-scroll is-visible">
        <h2 className="font-label-caps text-xs sm:text-label-caps text-teal-uno mb-4 sm:mb-6 flex items-center justify-center gap-3 sm:gap-6 uppercase tracking-widest font-semibold">
          <span className="w-8 sm:w-16 h-[1px] bg-teal-uno inline-block"></span>
          {labels.tagline[lang as keyof typeof labels.tagline]}
          <span className="w-8 sm:w-16 h-[1px] bg-teal-uno inline-block"></span>
        </h2>
        <h3 className="font-headline-xl text-headline-xl text-teal-uno uppercase font-semibold">
          {labels.heading[lang as keyof typeof labels.heading]}
        </h3>
      </div>

      <div className="max-w-container-max mx-auto">
        {/* Symmetrical 3x2 Grid (6 Disciplines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {labels.phases.map((phase, idx) => {
            const Icon = phase.icon;
            const prefix = labels.phasePrefix[lang as keyof typeof labels.phasePrefix];
            const title = phase.title[lang as keyof typeof phase.title];
            const desc = phase.desc[lang as keyof typeof phase.desc];

            return (
              <div 
                key={phase.num} 
                className="flex flex-col items-center text-center p-6 sm:p-8 md:p-10 bg-white/50 backdrop-blur-md rounded-3xl border border-arena-calida/20 shadow-ethereal hover:-translate-y-2 transition-all duration-500 reveal-on-scroll is-visible group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-5 sm:mb-8 flex items-center justify-center bg-arena-calida/10 rounded-full text-arena-calida group-hover:bg-teal-uno group-hover:text-white transition-all duration-500">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 stroke-[1.5]" />
                </div>
                <span className="font-label-caps text-[11px] sm:text-[12px] text-arena-calida mb-3 sm:mb-4 uppercase tracking-widest font-semibold">
                  {prefix} {phase.num}
                </span>
                <h4 className="font-headline-md text-headline-md text-teal-uno mb-3 sm:mb-4 uppercase leading-snug font-semibold">
                  {title}
                </h4>
                <p className="font-body-md text-body-md text-gris-texto leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
