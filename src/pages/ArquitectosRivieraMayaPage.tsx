import { useEffect } from "react";
import { Compass, ShieldCheck, Award, Building2, Layers, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DiagnosticLeadForm from "../components/DiagnosticLeadForm";
import Contacto from "../components/Contacto";
import Metrics from "../components/Metrics";

export default function ArquitectosRivieraMayaPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    const pageTitle = isEs
      ? "Arquitectos en Riviera Maya | Tulum, Playa del Carmen & Cancún"
      : "Architects in Riviera Maya | Tulum, Playa del Carmen & Cancun";

    const pageDesc = isEs
      ? "Firma boutique de arquitectos en Riviera Maya. Diseño y construcción llave en mano para residencias y desarrollos en Tulum, Playa del Carmen y Cancún."
      : "Boutique architecture and turnkey construction firm in Riviera Maya. High-end residential and commercial design across Tulum, Playa del Carmen, and Cancun.";

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    // Schema.org Structured Data
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "riviera-maya-architects-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["ArchitecturalFirm", "GeneralContractor"],
      "name": "UNO Arquitectos - Arquitectos en Riviera Maya",
      "alternateName": "UNO Arquitectos Mx",
      "url": "https://unoarquitectos.com/arquitectos-riviera-maya",
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
        { "@type": "AdministrativeArea", "name": "Riviera Maya" },
        { "@type": "City", "name": "Playa del Carmen" },
        { "@type": "City", "name": "Tulum" },
        { "@type": "City", "name": "Cancún" },
        { "@type": "City", "name": "Puerto Morelos" },
        { "@type": "State", "name": "Quintana Roo" }
      ],
      "telephone": "+529842108420",
      "priceRange": "$$$$"
    });
    document.head.appendChild(schemaScript);

    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      const el = document.getElementById("riviera-maya-architects-schema");
      if (el) el.remove();
    };
  }, [language, isEs]);

  const regionalPillars = [
    {
      icon: <Compass className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Articulación Logística en Todo el Corredor" : "Corridor-Wide Logistical Strength",
      desc: isEs 
        ? "Operamos con oficinas centrales en Playa del Carmen y taller propio en Tulum. Esta doble presencia permite supervisar simultáneamente obras en Cancún, Puerto Morelos, Akumal y Tulum con cuadrillas locales especializadas."
        : "Headquartered in Playa del Carmen with our own workshop in Tulum. This dual hub enables continuous supervision across Cancun, Puerto Morelos, Akumal, and Tulum with specialized regional crews."
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Ingeniería Antihuracán & Suelo Kárstico" : "Hurricane-Grade & Karst Engineering",
      desc: isEs 
        ? "Cálculo estructural eólico para soportar huracanes categoría 5 (vientos de 280+ km/h), cancelerías con cristales laminados de impacto y cimentaciones sobre micropilotes que protegen cenotes subterráneos."
        : "Seismic and wind engineering rated for category-5 hurricanes (280+ km/h), laminated impact glazing, and micro-piling systems preserving fragile underground caverns and cenotes."
    },
    {
      icon: <Building2 className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Certeza Contractual Llave en Mano" : "Turnkey Contractual Guarantee",
      desc: isEs 
        ? "Gestionamos trámites de licencias municipales, Manifestaciones de Impacto Ambiental (MIA), cálculo ejecutivo, compras de materiales y ejecución de obra civil con un contrato a precio alzado cerrado."
        : "We handle municipal permits, environmental impact statements (MIA), MEP calculations, material procurement, and general construction backed by guaranteed fixed-price contracts."
    },
    {
      icon: <Award className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "20+ Años y Más de 70 Proyectos Entregados" : "20+ Years & 70+ Completed Projects",
      desc: isEs 
        ? "Fundados y dirigidos por el Arq. Ángel Cereceda, combinamos dos décadas de experiencia tangible en el Caribe Mexicano, garantizando arquitectura contemporánea de alto valor patrimonial."
        : "Founded and led by Principal Architect Ángel Cereceda, offering two decades of proven building history in the Mexican Caribbean with enduring architectural sophistication."
    }
  ];

  const regionalProjects = [
    {
      title: "Casa Coral",
      location: "Cancún / Riviera Maya",
      tag: "Residencial de Ultra-Lujo",
      desc: isEs 
        ? "920 m² de arquitectura marina: cimentación profunda de pilotes sobre roca calcárea, alberca volada con vistas al Caribe y cancelería térmica Low-E anti-huracán."
        : "920 sqm oceanfront residence: deep piling foundation into limestone bedrock, cantilevered infinity pool, and hurricane-proof low-E thermal glazing.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      alt: "arquitectos en riviera maya - casa coral frente al mar cancun"
    },
    {
      title: "Residencia 7 Cielos",
      location: "Playa del Carmen",
      tag: "Residencial Boutique Frente al Mar",
      desc: isEs 
        ? "Residencia unifamiliar con estuco artesanal de Chukum, maderas nobles de Tzalam y climatización pasiva para amortiguar el calor tropical."
        : "Coastal estate featuring handcrafted Mayan Chukum plaster, solid Tzalam hardwoods, and passive bioclimatic cooling.",
      image: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
      alt: "arquitectos en riviera maya - residencia 7 cielos playa del carmen"
    },
    {
      title: "Papaya Playa Project",
      location: "Tulum",
      tag: "Eco-Hospitality Internacional",
      desc: isEs 
        ? "Desarrollo boutique icónico con bóvedas continuas de ferrocemento y Chukum, pasarelas de Zapote y respeto absoluto a la vegetación virgen."
        : "Iconic hospitality landmark with ferrocement catenary vaults, elevated Zapote walkways, and zero-compromise environmental sensitivity.",
      image: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
      alt: "arquitectos en riviera maya - papaya playa project tulum"
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
          {isEs ? "Arquitectos en Riviera Maya" : "Architects in Riviera Maya"}
        </span>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-12 md:py-20 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-uno/10 border border-teal-uno/25 text-teal-uno text-[11px] font-label-caps uppercase tracking-wider font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isEs ? "Tulum • Playa del Carmen • Cancún" : "Tulum • Playa del Carmen • Cancun"}</span>
            </div>

            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-teal-uno uppercase leading-tight font-semibold mb-6">
              {isEs 
                ? "Arquitectos en Riviera Maya | Firma de Arquitectura y Construcción" 
                : "Architects in Riviera Maya | Architecture & Construction Firm"}
            </h1>

            <p className="font-serif-quote text-lg sm:text-xl italic text-gris-texto/90 mb-6 leading-relaxed border-l-2 border-arena-calida pl-4">
              {isEs
                ? "Diseño con sentido, construcción con criterio. Materializamos residencias boutique y proyectos comerciales de alta plusvalía en el Caribe mexicano con rigor técnico y certeza legal."
                : "Meaningful design, disciplined construction. We craft boutique residential and commercial developments across the Mexican Caribbean with technical precision."}
            </p>

            <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed mb-8">
              {isEs
                ? "Como firma integral con más de 20 años en Quintana Roo, UNO Arquitectos articula cada proyecto desde el análisis normativo de uso de suelo hasta la ejecución de obra civil amueblada, respaldado por supervisión 360° en tiempo real."
                : "With two decades of proven experience in Quintana Roo, UNO Arquitectos oversees every stage from land feasibility and permitting to turnkey interior delivery, backed by real-time 360° remote jobsite monitoring."}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#diagnostico-riviera"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-uno text-white font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:bg-arena-calida transition-colors font-semibold shadow-ethereal"
              >
                <span>{isEs ? "Solicitar Diagnóstico Técnico Regional" : "Request Regional Feasibility Review"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#obras-riviera"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-arena-calida text-gris-texto font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:border-teal-uno hover:text-teal-uno transition-colors font-semibold"
              >
                <span>{isEs ? "Ver Obras en Riviera Maya" : "View Riviera Maya Portfolio"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-arena-calida/30">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
                alt="arquitectos en riviera maya - casa coral residencia de lujo frente al mar caribe"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="font-label-caps text-[10px] uppercase tracking-wider bg-teal-uno px-2.5 py-1 rounded-full font-semibold">
                  Cancún / Riviera Maya
                </span>
                <p className="font-headline-md text-base sm:text-lg font-semibold mt-1">Casa Coral</p>
                <p className="font-body-md text-xs text-white/80">Ingeniería marina y arquitectura contemporánea tropical</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* METRICS STRIP */}
      <Metrics />

      {/* PILARES REGIONALES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Capacidad Operativa y Cobertura" : "Operational Strength & Regional Reach"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "Por Qué Elegir a UNO Arquitectos en Riviera Maya" : "Why Choose UNO Arquitectos Across the Riviera Maya"}
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gris-texto mt-4 leading-relaxed">
              {isEs
                ? "Coordinamos proyectos de alta complejidad técnica y constructiva a lo largo de todo el corredor de Quintana Roo con supervisión directa y rigor artesanal."
                : "We execute complex architectural and construction projects across Quintana Roo with relentless engineering precision and artisan excellence."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {regionalPillars.map((item, idx) => (
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

      {/* OBRAS EN RIVIERA MAYA */}
      <section id="obras-riviera" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Portafolio Regional" : "Regional Portfolio"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "Obras de Alta Gama en Quintana Roo" : "High-End Architecture in Quintana Roo"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {regionalProjects.map((p, idx) => (
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
      <section id="diagnostico-riviera" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <DiagnosticLeadForm
            title={isEs ? "Agenda una sesión técnica con nuestro equipo de arquitectos en Riviera Maya" : "Schedule a technical consultation with our Riviera Maya architectural team"}
            subtitle={isEs 
              ? "Revisión de lote en Tulum, Playa del Carmen o Cancún, análisis preliminar de factibilidad y propuesta paramétrica." 
              : "Review of your lot in Tulum, Playa del Carmen, or Cancun with preliminary feasibility analysis and parametric budgeting."}
            defaultLocation="Playa del Carmen"
            pageContext="Arquitectos Riviera Maya"
          />
        </div>
      </section>

      {/* CONTACTO & UBICACIONES */}
      <Contacto />
    </div>
  );
}
