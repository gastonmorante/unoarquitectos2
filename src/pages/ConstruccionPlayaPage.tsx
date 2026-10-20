import { useEffect } from "react";
import { Building2, ShieldCheck, Clock, FileCheck, Layers, ArrowRight, Eye, Smartphone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DiagnosticLeadForm from "../components/DiagnosticLeadForm";
import Contacto from "../components/Contacto";

export default function ConstruccionPlayaPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    const pageTitle = isEs
      ? "Construcción Llave en Mano en Playa del Carmen | UNO"
      : "Turnkey Construction in Playa del Carmen | UNO Design-Build";

    const pageDesc = isEs
      ? "Construcción llave en mano en Playa del Carmen: contratos a precio cerrado, catálogo paramétrico, ingeniería kárstica y supervisión 360° remota."
      : "Turnkey construction in Playa del Carmen: guaranteed fixed-price contracts, parametric budgeting, karstic engineering, and 360° remote supervision.";

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    // Schema.org Structured Data
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "playa-turnkey-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["GeneralContractor", "ArchitecturalFirm"],
      "name": "UNO Arquitectos - Construcción Llave en Mano en Playa del Carmen",
      "alternateName": "UNO Arquitectos Mx",
      "url": "https://unoarquitectos.com/construccion-llave-en-mano-playa-del-carmen",
      "logo": "https://unoarquitectos.com/hero-luxury-villa.webp",
      "image": "https://unoarquitectos.com/projects/residencial/alux-7cielos-ocean-pool.jpg",
      "description": pageDesc,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plaza Palmeras, Av. 10 Norte",
        "addressLocality": "Playa del Carmen",
        "addressRegion": "Quintana Roo",
        "postalCode": "77710",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.6718486,
        "longitude": -87.0504611
      },
      "areaServed": [
        { "@type": "City", "name": "Playa del Carmen" },
        { "@type": "AdministrativeArea", "name": "Riviera Maya" },
        { "@type": "AdministrativeArea", "name": "Solidaridad" },
        { "@type": "State", "name": "Quintana Roo" }
      ],
      "telephone": "+529842108420",
      "priceRange": "$$$$"
    });
    document.head.appendChild(schemaScript);

    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      const el = document.getElementById("playa-turnkey-schema");
      if (el) el.remove();
    };
  }, [language, isEs]);

  const turnkeyPillars = [
    {
      icon: <Building2 className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Responsabilidad Única (Design-Build)" : "Single-Source Accountability",
      desc: isEs 
        ? "Eliminamos la fricción habitual entre arquitecto y contratista. Un solo interlocutor asume la responsabilidad legal y técnica desde el trazo inicial hasta la entrega de llaves."
        : "We eliminate finger-pointing between designer and builder. One accountable team handles conceptual design, structural calculations, permits, and final delivery."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Catálogo Paramétrico & Cero Sobrecostos" : "Parametric Cost Control & Fixed Price",
      desc: isEs 
        ? "Presupuestos cerrados con precios unitarios auditados para Quintana Roo. Protegemos tu inversión de sobrecostos imprevistos y variaciones inflacionarias durante la obra."
        : "Locked contractual pricing with audited itemized bill-of-quantities for Quintana Roo, protecting your capital from unexpected changes and inflationary spikes."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Supervisión Remota 360° para Foráneos" : "360° Remote Supervision for Overseas Clients",
      desc: isEs 
        ? "Portal privado con recorridos virtuales inmersivos 360°, bitácora fotográfica semanal certificada y trazabilidad de avance físico-financiero desde cualquier país."
        : "Dedicated Client Portal featuring weekly 360° virtual jobsite scans, high-resolution certified photo logs, and financial traceability from anywhere worldwide."
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Ingeniería en Suelo Kárstico & Clima Marino" : "Karst Engineering & Marine Durability",
      desc: isEs 
        ? "Cálculo estructural sismorresistente con concreto impermeable de grado marino, zapatas ancladas a roca caliza y cancelería anti-huracán probada para vientos de 250+ km/h."
        : "Structural marine-grade engineering, concrete with corrosion inhibitors anchored to limestone, and category-5 hurricane glazing."
    }
  ];

  const turnkeyProjects = [
    {
      title: "Residencia 7 Cielos",
      location: "Playa del Carmen, Q. Roo",
      tag: "Residencial Frente al Mar",
      desc: isEs
        ? "Obra llave en mano ejecutada en 12 meses: alberca infinity continua en Chukum, cancelería marina anti-huracán y carpintería artesanal en madera de Tzalam."
        : "Turnkey oceanfront villa delivered in 12 months: seamless Chukum infinity pool, marine-grade hurricane glazing, and certified Tzalam hardwood millwork.",
      image: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
      alt: "construccion llave en mano en playa del carmen - residencia 7 cielos frente al mar"
    },
    {
      title: "Casa Tzalam",
      location: "Playacar, Playa del Carmen",
      tag: "Villa Residencial Privada",
      desc: isEs
        ? "Construcción integral de 580 m² con losas nervadas de claro continuo, cimentación sobre roca kárstica y climatización bioclimática pasiva."
        : "580 sqm turnkey build with wide-span waffle slabs, deep bedrock anchoring, and passive tropical climate zoning.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      alt: "construccion llave en mano en playa del carmen - villa contemporanea en playacar"
    },
    {
      title: "Espresso Bar Lavazza",
      location: "Playa del Carmen Comercial",
      tag: "Comercial & Hospitality",
      desc: isEs
        ? "Diseño y adecuación comercial express con acabados antibacterianos, duela de roble claro, cancelería embutida y entrega con licencia de funcionamiento."
        : "Turnkey retail & cafe buildout delivered with full municipal licensing, custom light oak millwork, and high-performance workflow layout.",
      image: "/projects/lavazza/lavazza-facade.jpg",
      alt: "construccion comercial llave en mano en playa del carmen - local lavazza"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-background text-gris-texto font-sans texture-overlay overflow-x-hidden pt-20 md:pt-24">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-4 text-xs font-label-caps text-gris-texto/70 flex items-center gap-2">
        <a href="/" className="hover:text-teal-uno transition-colors">
          {isEs ? "Inicio" : "Home"}
        </a>
        <span>/</span>
        <span className="text-teal-uno font-semibold">
          {isEs ? "Construcción Llave en Mano en Playa del Carmen" : "Turnkey Construction in Playa del Carmen"}
        </span>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-12 md:py-20 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-uno/10 border border-teal-uno/25 text-teal-uno text-[11px] font-label-caps uppercase tracking-wider font-semibold mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>{isEs ? "Certeza Contractual • Cero Sobrecostos" : "Contractual Certainty • Zero Cost Overruns"}</span>
            </div>

            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-teal-uno uppercase leading-tight font-semibold mb-6">
              {isEs 
                ? "Construcción Llave en Mano en Playa del Carmen | Design-Build con Certeza Contractual" 
                : "Turnkey Construction in Playa del Carmen | Design-Build with Contractual Certainty"}
            </h1>

            <p className="font-serif-quote text-lg sm:text-xl italic text-gris-texto/90 mb-6 leading-relaxed border-l-2 border-arena-calida pl-4">
              {isEs
                ? "Un solo interlocutor desde el primer boceto arquitectónico hasta la entrega de llaves. Presupuestos cerrados, ingeniería en suelo kárstico y supervisión 360° para inversionistas que construyen a distancia."
                : "Single-source accountability from architectural blueprints to key handover. Fixed budgets, karst soil engineering, and 360° remote supervision for overseas owners."}
            </p>

            <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed mb-8">
              {isEs
                ? "Con oficinas centrales en Plaza Palmeras (Playa del Carmen) y más de 70 obras entregadas, en UNO Arquitectos convertimos la inversión inmobiliaria en un proceso predecible, transparente y libre de contingencias."
                : "Based in Playa del Carmen with over 70 delivered estates across Quintana Roo, UNO Arquitectos transforms residential and commercial construction into a predictable, transparent journey."}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#diagnostico-playa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-uno text-white font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:bg-arena-calida transition-colors font-semibold shadow-ethereal"
              >
                <span>{isEs ? "Cotizar Proyecto Llave en Mano" : "Get Turnkey Estimate"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#obras-playa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-arena-calida text-gris-texto font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:border-teal-uno hover:text-teal-uno transition-colors font-semibold"
              >
                <span>{isEs ? "Ver Obras en Playa del Carmen" : "View Playa del Carmen Projects"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-arena-calida/30">
              <img
                src="/projects/residencial/alux-7cielos-ocean-pool.jpg"
                alt="construccion llave en mano en playa del carmen - alberca chukum y diseno contemporaneo frente al mar"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="font-label-caps text-[10px] uppercase tracking-wider bg-teal-uno px-2.5 py-1 rounded-full font-semibold">
                  Playa del Carmen
                </span>
                <p className="font-headline-md text-base sm:text-lg font-semibold mt-1">Residencia 7 Cielos</p>
                <p className="font-body-md text-xs text-white/80">Ejecución integral llave en mano con acabados en Chukum</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PILARES DEL MODELO LLAVE EN MANO */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "El Estándar Design-Build de UNO Arquitectos" : "The UNO Design-Build Standard"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "¿Por Qué el Modelo Llave en Mano Protege tu Capital?" : "Why Turnkey Construction Protects Your Investment"}
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gris-texto mt-4 leading-relaxed">
              {isEs
                ? "Construir en la Riviera Maya desde otra ciudad o país suele ser sinónimo de demoras y desvíos presupuestarios si no existe una dirección unificada. Nuestro modelo asegura cada centavo invertido."
                : "Building from afar in the Riviera Maya often results in costly delays without single-source accountability. Our model protects every dollar through transparent milestones."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {turnkeyPillars.map((item, idx) => (
              <div key={idx} className="bg-white/90 border border-arena-calida/30 rounded-2xl p-6 sm:p-8 text-left shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-teal-uno/10 flex items-center justify-center mb-5 border border-teal-uno/20">
                  {item.icon}
                </div>
                <h3 className="font-headline-md text-lg sm:text-xl font-semibold text-teal-uno uppercase mb-2">
                  {item.title}
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-gris-texto leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS EN PLAYA DEL CARMEN */}
      <section id="obras-playa" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Proyectos Entregados" : "Delivered Works"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "Obras Llave en Mano en Playa del Carmen" : "Turnkey Projects in Playa del Carmen"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {turnkeyProjects.map((p, idx) => (
              <div key={idx} className="bg-surface-container-low rounded-2xl overflow-hidden border border-arena-calida/30 shadow-sm flex flex-col group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label-caps uppercase font-semibold text-teal-uno">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-lg font-semibold text-teal-uno mb-1">
                      {p.title}
                    </h3>
                    <p className="font-label-caps text-xs text-arena-calida uppercase font-semibold mb-3">
                      {p.location}
                    </p>
                    <p className="font-body-md text-xs text-gris-texto leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO CRO */}
      <section id="diagnostico-playa" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <DiagnosticLeadForm
            title={isEs ? "Agenda una sesión de análisis de tu proyecto de construcción en Playa del Carmen" : "Schedule a project consultation for your build in Playa del Carmen"}
            subtitle={isEs 
              ? "Revisión técnica de predio, catálogo paramétrico estimado y plan de ejecución llave en mano con el Arq. Ángel Cereceda." 
              : "Technical lot review, estimated parametric budget, and turnkey execution roadmap with Arch. Ángel Cereceda."}
            defaultLocation="Playa del Carmen"
            pageContext="Construccion Llave en Mano Playa del Carmen"
          />
        </div>
      </section>

      {/* INFORMACIÓN DE OFICINAS Y CONTACTO */}
      <Contacto />
    </div>
  );
}
