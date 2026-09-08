import React, { useEffect } from "react";
import { Trees, ShieldCheck, Zap, Droplets, Compass, ArrowRight, CheckCircle2, MapPin, Building2, Layers } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Contacto from "../components/Contacto";
import Logo from "../components/Logo";

export default function TulumPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    // Dynamic SEO Metadata for Tulum dedicated page
    const pageTitle = isEs 
      ? "Arquitectos en Tulum | Estudio Boutique de Arquitectura y Construcción Llave en Mano"
      : "Architects in Tulum | Boutique Architecture & Turnkey Construction Studio";
    
    const pageDesc = isEs
      ? "Estudio boutique de arquitectura y construcción sustentable en Tulum. Especialistas en cimentaciones en suelo kárstico, acabados en Chukum, proyectos off-grid y gestoría de licencias."
      : "Boutique architecture and sustainable turnkey construction studio in Tulum. Specialists in karstic soil foundations, Chukum plaster, off-grid projects, and local building permits.";

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [language, isEs]);

  const projectsInTulum = [
    {
      title: "Papaya Playa Project (Tulum)",
      subtitle: isEs ? "Boutique Hospitality & Santuario Holístico" : "Boutique Hospitality & Holistic Sanctuary",
      desc: isEs 
        ? "Bóvedas catenarias monumentales esculpidas en ferrocemento y Chukum natural, pasarelas elevadas en madera dura de Zapote sobre suelo kárstico y celosías en fibras vegetales de henequén."
        : "Monumental catenary ferrocement vaults finished in natural Chukum, elevated Zapote timber boardwalks, and handcrafted henequen rope screens filtering coastal breeze.",
      image: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
      tag: "Hospitality"
    },
    {
      title: "Santuario Ka'an (Selva de Tulum)",
      subtitle: isEs ? "Residencia 100% Off-The-Grid Autosuficiente" : "100% Off-The-Grid Autonomous Estate",
      desc: isEs 
        ? "Micro-red solar fotovoltaica con banco de baterías de litio LFP, muros monolíticos de tierra compactada (tapial), captación pluvial de 60,000L con esterilización UV-C y huella de carbono neutra."
        : "Isolated 18 kWp solar micro-grid with LFP lithium storage, 40 cm monolithic rammed earth walls, 60,000L rainwater harvesting with UV-C purification, and zero noise footprint.",
      image: "/projects/offgrid/offgrid-villa-cenote.jpg",
      tag: "Off-Grid"
    },
    {
      title: "Villas Alux & 7 Cielos (Tulum / Riviera Maya)",
      subtitle: isEs ? "Residencias Boutique de Ultra-Lujo" : "Ultra-Luxury Boutique Residences",
      desc: isEs 
        ? "Albercas infinity continuas en Chukum, carpintería monumental en Parota y Tzalam sólida, cancelería de cristal templado anti-huracán y salones de concepto abierto con vistas a la selva."
        : "Seamless natural Chukum plunge pools, solid certified Parota and Tzalam millwork, hurricane-resistant panoramic glazing, and open-concept indoor-outdoor spaces.",
      image: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
      tag: "Residencial"
    }
  ];

  const tulumPillars = [
    {
      icon: <Layers className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Mecánica de Suelo Kárstico" : "Karstic Soil Engineering",
      desc: isEs 
        ? "Estudios geofísicos con Tomografía de Resistividad Eléctrica (TRE) y cimentaciones sobre micropilotes para construir con total seguridad sobre cenotes y cavernas."
        : "Geophysical Electrical Resistivity Tomography (ERT) and deep micro-piling engineered to safely anchor structures over subterranean cave systems."
    },
    {
      icon: <Droplets className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Chukum Natural & Maderas Nobles" : "Natural Chukum & Noble Woods",
      desc: isEs 
        ? "Muros y albercas en Chukum continuo que reducen la temperatura interior hasta 4°C y carpintería técnica en Tzalam y Parota tratadas contra humedad tropical."
        : "Monolithic Chukum plaster lowering indoor temperatures by up to 4°C, paired with marine-treated native Tzalam and Parota hardwoods."
    },
    {
      icon: <Zap className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Sistemas Off-The-Grid" : "Off-The-Grid Systems",
      desc: isEs 
        ? "Generación solar fotovoltaica con almacenamiento en litio, captación pluvial con purificación UV-C y humedales de fitorremediación para aguas grises."
        : "Smart solar micro-grids with lithium battery banks, closed-loop rainwater harvesting with UV-C filtration, and constructed wetlands."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Gestoría y Licencias en Tulum" : "Tulum Permitting & Legal Feasibility",
      desc: isEs 
        ? "Tramitación de licencias municipales de construcción, licencias ambientales (MIA), uso de suelo y apego estricto a las densidades de la zona."
        : "Agile municipal building licenses, environmental impact statements (MIA), land-use compliance, and local zoning adherence."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-background text-gris-texto font-sans texture-overlay overflow-x-hidden pt-20 md:pt-24">
      {/* BREADCRUMB NAVIGATION */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-4 text-xs font-label-caps text-gris-texto/70 flex items-center gap-2">
        <a href="/" className="hover:text-teal-uno transition-colors">
          {isEs ? "Inicio" : "Home"}
        </a>
        <span>/</span>
        <span className="text-teal-uno font-semibold">
          {isEs ? "Arquitectos en Tulum" : "Architects in Tulum"}
        </span>
      </div>

      {/* HERO SECTION DEDICATED TO TULUM */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-widest block mb-3 sm:mb-4 font-semibold">
              {isEs ? "Estudio Boutique en Tulum & Riviera Maya" : "Boutique Studio in Tulum & Riviera Maya"}
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-uno uppercase leading-tight font-semibold mb-6">
              {isEs ? "ARQUITECTOS EN TULUM" : "ARCHITECTS IN TULUM"}
            </h1>
            <p className="font-serif-quote text-lg sm:text-xl italic text-gris-texto/90 mb-6 leading-relaxed">
              {isEs 
                ? "Arquitectura contemporánea tropical que dialoga con la selva virgen. Construcción llave en mano con rigor técnico, ingeniería kárstica y sofisticación contenida."
                : "Contemporary tropical architecture rooted in the virgin jungle. Turnkey construction engineered for karstic soil, environmental resilience, and understated luxury."}
            </p>
            <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed mb-8">
              {isEs
                ? "Con base en la Riviera Maya y dirigidos por el Arq. Angel Cereceda (20+ años de trayectoria), en UNO Arquitectos acompañamos a inversionistas y propietarios en el diseño y ejecución integral de residencias boutique, villas privadas y desarrollos eco-hospitality en Tulum."
                : "Based in the Riviera Maya and led by Arch. Angel Cereceda (20+ years of track record), UNO Arquitectos guides international investors and landowners through end-to-end design, permitting, and turnkey construction across Tulum."}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto-tulum"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-uno text-white font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:bg-arena-calida transition-colors font-semibold shadow-ethereal"
              >
                {isEs ? "Planificar Mi Proyecto en Tulum" : "Plan My Tulum Project"} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proyectos-tulum"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-arena-calida text-gris-texto font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:border-teal-uno hover:text-teal-uno transition-colors font-semibold"
              >
                {isEs ? "Ver Obras en Tulum" : "Explore Tulum Works"}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-arena-calida/30">
              <img
                src="/projects/offgrid/offgrid-villa-cenote.jpg"
                alt="Arquitectura Boutique en Tulum - UNO Arquitectos"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="font-label-caps text-[10px] uppercase tracking-wider bg-teal-uno px-2.5 py-1 rounded-full font-semibold">
                  Tulum Off-Grid
                </span>
                <p className="font-headline-md text-base sm:text-lg font-semibold mt-1">Santuario Ka'an</p>
                <p className="font-body-md text-xs text-white/80">Residencia 100% autosuficiente en la selva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE PILLARS IN TULUM */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Especialización Técnica Local" : "Local Technical Specialization"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "¿POR QUÉ CONSTRUIR CON UNO ARQUITECTOS EN TULUM?" : "WHY BUILD WITH UNO ARQUITECTOS IN TULUM?"}
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gris-texto mt-4 leading-relaxed">
              {isEs
                ? "Tulum impone retos geotécnicos, climáticos y normativos únicos. Nuestro estudio domina cada variable para garantizar construcciones duraderas, seguras y en presupuesto."
                : "Tulum presents unique geotechnical, climatic, and regulatory challenges. Our firm masters every factor to deliver durable, code-compliant, on-budget architecture."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {tulumPillars.map((p, i) => (
              <div key={i} className="bg-white/80 border border-arena-calida/30 rounded-2xl p-6 sm:p-8 text-left shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-teal-uno/10 flex items-center justify-center mb-5 border border-teal-uno/20">
                  {p.icon}
                </div>
                <h3 className="font-headline-md text-base sm:text-lg font-semibold text-teal-uno uppercase mb-2">
                  {p.title}
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-gris-texto leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TULUM PROJECTS SHOWCASE */}
      <section id="proyectos-tulum" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
                {isEs ? "Portafolio en la Zona" : "Local Portfolio"}
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
                {isEs ? "PROYECTOS EMBLEMÁTICOS EN TULUM" : "FLAGSHIP PROJECTS IN TULUM"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsInTulum.map((item, idx) => (
              <div key={idx} className="bg-surface-container-low rounded-2xl overflow-hidden border border-arena-calida/30 shadow-sm text-left flex flex-col group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label-caps uppercase font-semibold text-teal-uno">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-lg font-semibold text-teal-uno mb-1">
                      {item.title}
                    </h3>
                    <p className="font-label-caps text-xs text-arena-calida uppercase font-semibold mb-3">
                      {item.subtitle}
                    </p>
                    <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM ANCHOR */}
      <div id="contacto-tulum">
        <Contacto />
      </div>
    </div>
  );
}
