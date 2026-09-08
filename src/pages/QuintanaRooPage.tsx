import React, { useEffect } from "react";
import { ShieldCheck, Ruler, Clock, Building2, ArrowRight, CheckCircle2, MapPin, Award, Gem } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Contacto from "../components/Contacto";
import Metrics from "../components/Metrics";

export default function QuintanaRooPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    // Dynamic SEO Metadata for Quintana Roo dedicated page
    const pageTitle = isEs
      ? "Arquitectos en Quintana Roo & Riviera Maya | Construcción Llave en Mano"
      : "Architects in Quintana Roo & Riviera Maya | Turnkey Construction Studio";

    const pageDesc = isEs
      ? "Estudio integral de arquitectura y construcción llave en mano en Quintana Roo: Playa del Carmen, Tulum, Cancún. Más de 20 años de experiencia técnica, certidumbre financiera y supervisión 360°."
      : "Full-service architecture and turnkey design-build studio in Quintana Roo: Playa del Carmen, Tulum, Cancun. Over 20 years of technical expertise and 360° client portal supervision.";

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [language, isEs]);

  const regionalProjects = [
    {
      title: "Residencia 7 Cielos (Playa del Carmen)",
      category: isEs ? "Residencial Frente al Mar" : "Oceanfront Residential",
      desc: isEs 
        ? "Acabados continuos en Chukum natural pulido, carpinterías monumentales en madera de Tzalam certificada, alberca infinity y cancelerías de grado marino anti-huracán."
        : "Seamless natural polished Chukum plaster, monumental Tzalam hardwood millwork, infinity ocean-view pool, and marine-grade hurricane glazing.",
      image: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
      location: "Playa del Carmen"
    },
    {
      title: "Cafetería & Espresso Bar Lavazza (Riviera Maya)",
      category: isEs ? "Comercial & Hospitality" : "Commercial & Hospitality",
      desc: isEs 
        ? "Diseño y ejecución integral combinando estética europea contemporánea, duelas en roble claro, cubierta sólida antibacteriana y estación barista optimizada."
        : "Turnkey design and build merging contemporary European aesthetics, fluted light oak wood, antibacterial solid surfacing, and high-efficiency barista workflow.",
      image: "/projects/lavazza/lavazza-facade.jpg",
      location: "Plaza Comercial"
    },
    {
      title: "Papaya Playa Project (Tulum / Q. Roo)",
      category: isEs ? "Boutique Eco-Hospitality" : "Boutique Eco-Hospitality",
      desc: isEs 
        ? "Bóvedas bioclimáticas de ferrocemento y Chukum, pasarelas elevadas en madera de Zapote para preservar el suelo kárstico y arquitectura sensorial."
        : "Bioclimatic ferrocement and Chukum vaults, elevated Zapote boardwalks preserving fragile karst ecology, and sensory architectural design.",
      image: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
      location: "Tulum"
    }
  ];

  const pillars = [
    {
      icon: <Building2 className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Modelo Llave en Mano Integral" : "Turnkey Design-Build Model",
      desc: isEs 
        ? "Un solo interlocutor para diseño arquitectónico, proyecto ejecutivo, cálculo de ingenierías, permisos y construcción final amueblada."
        : "Single-source accountability covering conceptual design, structural calculations, permits, construction, and final interior delivery."
    },
    {
      icon: <Clock className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Presupuestos Cerrados & Puntualidad" : "Guaranteed Budgets & Timelines",
      desc: isEs 
        ? "Presupuestos paramétricos sin cargos ocultos ni sobrecostos imprevistos, respaldados por contratos con cronograma de entregas por fases."
        : "Fixed parametric bill of quantities with zero hidden fees, backed by milestone-based contractual guarantees."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Supervisión 360° a Distancia" : "Remote 360° Supervision",
      desc: isEs 
        ? "Portal Privado para clientes e inversionistas internacionales con recorridos virtuales 360°, reportes fotográficos de alta definición y trazabilidad financiera."
        : "Dedicated Client Portal for overseas investors featuring weekly 360° virtual jobsite scans, high-resolution photo logs, and transparent budget tracking."
    },
    {
      icon: <Ruler className="w-5 h-5 text-teal-uno" />,
      title: isEs ? "Resistencia Marina & Huracanes" : "Hurricane & Coastal Engineering",
      desc: isEs 
        ? "Ingeniería adaptada a las cargas dinámicas de vientos ciclónicos del Caribe, salinidad marina y cimentaciones sobre roca caliza."
        : "Structural calculations engineered for Caribbean hurricane winds, coastal salt air resistance, and porous limestone geology."
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
          {isEs ? "Arquitectos en Quintana Roo" : "Architects in Quintana Roo"}
        </span>
      </div>

      {/* HERO SECTION DEDICATED TO QUINTANA ROO */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-widest block mb-3 sm:mb-4 font-semibold">
              {isEs ? "Playa del Carmen • Tulum • Cancún • Riviera Maya" : "Playa del Carmen • Tulum • Cancun • Riviera Maya"}
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-uno uppercase leading-tight font-semibold mb-6">
              {isEs ? "ARQUITECTOS EN QUINTANA ROO" : "ARCHITECTS IN QUINTANA ROO"}
            </h1>
            <p className="font-serif-quote text-lg sm:text-xl italic text-gris-texto/90 mb-6 leading-relaxed">
              {isEs
                ? "Diseño con sentido. Construcción con criterio. Transformamos su visión en obras tangibles, seguras y de alta plusvalía en el Caribe Mexicano."
                : "Design with purpose. Construction with criteria. Turning architectural visions into high-yield, resilient landmarks across the Mexican Caribbean."}
            </p>
            <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed mb-8">
              {isEs
                ? "Con oficinas centrales en Playa del Carmen y taller en el corredor Tulum – Macario Gómez, en UNO Arquitectos integramos arquitectura contemporánea, ingenierías especializadas y construcción llave en mano bajo una sola dirección técnica."
                : "Headquartered in Playa del Carmen with fabrication facilities along the Tulum corridor, UNO Arquitectos integrates contemporary tropical design, structural engineering, and turnkey construction under one trusted roof."}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto-qroo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-uno text-white font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:bg-arena-calida transition-colors font-semibold shadow-ethereal"
              >
                {isEs ? "Iniciar Consulta Técnica" : "Start Technical Inquiry"} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proyectos-qroo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-arena-calida text-gris-texto font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:border-teal-uno hover:text-teal-uno transition-colors font-semibold"
              >
                {isEs ? "Explorar Portafolio Regional" : "Explore Regional Portfolio"}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-arena-calida/30">
              <img
                src="/hero-luxury-villa.webp"
                alt="Estudio de Arquitectura en Quintana Roo - UNO Arquitectos"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="font-label-caps text-[10px] uppercase tracking-wider bg-teal-uno px-2.5 py-1 rounded-full font-semibold">
                  Quintana Roo
                </span>
                <p className="font-headline-md text-base sm:text-lg font-semibold mt-1">Residencia 7 Cielos</p>
                <p className="font-body-md text-xs text-white/80">Playa del Carmen • Construcción Llave en Mano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <Metrics />

      {/* PILLARS OF EXCELLENCE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Rigor Técnico y Financiero" : "Technical & Financial Rigor"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "NUESTRA METODOLOGÍA DE CONSTRUCCIÓN" : "OUR CONSTRUCTION METHODOLOGY"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((p, i) => (
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

      {/* REGIONAL PROJECTS SHOWCASE */}
      <section id="proyectos-qroo" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
                {isEs ? "Obras Destacadas" : "Featured Works"}
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
                {isEs ? "PROYECTOS EN QUINTANA ROO" : "PROJECTS IN QUINTANA ROO"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regionalProjects.map((item, idx) => (
              <div key={idx} className="bg-surface-container-low rounded-2xl overflow-hidden border border-arena-calida/30 shadow-sm text-left flex flex-col group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label-caps uppercase font-semibold text-teal-uno">
                    {item.location}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-lg font-semibold text-teal-uno mb-1">
                      {item.title}
                    </h3>
                    <p className="font-label-caps text-xs text-arena-calida uppercase font-semibold mb-3">
                      {item.category}
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

      {/* CONTACT FORM */}
      <div id="contacto-qroo">
        <Contacto />
      </div>
    </div>
  );
}
