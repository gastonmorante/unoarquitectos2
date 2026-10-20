import { useEffect } from "react";
import { Trees, ShieldCheck, Zap, Droplets, ArrowRight, Award, Compass, Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DiagnosticLeadForm from "../components/DiagnosticLeadForm";
import Contacto from "../components/Contacto";

export default function EstudioArquitecturaTulumPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    // Dynamic Head Tags for SEO Target: "estudio de arquitectura en Tulum"
    const pageTitle = isEs
      ? "Estudio de Arquitectura en Tulum | Diseño Tropical y Sostenible"
      : "Architecture Studio in Tulum | Sustainable Tropical Design";

    const pageDesc = isEs
      ? "Estudio de arquitectura en Tulum líder en diseño contemporáneo tropical, cimentaciones en suelo kárstico y gestoría ambiental. Arq. Ángel Cereceda."
      : "Leading architecture studio in Tulum specialized in contemporary tropical design, karstic soil engineering, and environmental permits. Arch. Ángel Cereceda.";

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    // Schema.org Structured Data: ArchitecturalFirm & GeneralContractor
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "tulum-studio-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["ArchitecturalFirm", "GeneralContractor"],
      "name": "UNO Arquitectos - Estudio de Arquitectura en Tulum",
      "alternateName": "UNO Arquitectos Mx",
      "url": "https://unoarquitectos.com/estudio-arquitectura-tulum",
      "logo": "https://unoarquitectos.com/hero-luxury-villa.webp",
      "image": "https://unoarquitectos.com/projects/hospitalidad/hospitalidad-santuario-arcos.webp",
      "description": pageDesc,
      "founder": {
        "@type": "Person",
        "name": "Arq. Ángel Cereceda",
        "jobTitle": "Director de Proyectos & Fundador",
        "description": "Más de 20 años de trayectoria liderando diseño contemporáneo tropical y construcción en Quintana Roo."
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Carretera Tulum – Macario Gómez Km 4.5",
        "addressLocality": "Tulum",
        "addressRegion": "Quintana Roo",
        "postalCode": "77760",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.2114,
        "longitude": -87.4654
      },
      "areaServed": [
        { "@type": "City", "name": "Tulum" },
        { "@type": "AdministrativeArea", "name": "Riviera Maya" },
        { "@type": "State", "name": "Quintana Roo" }
      ],
      "telephone": "+529842108420",
      "priceRange": "$$$$"
    });
    document.head.appendChild(schemaScript);

    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      const el = document.getElementById("tulum-studio-schema");
      if (el) el.remove();
    };
  }, [language, isEs]);

  const tulumChallenges = [
    {
      icon: <Layers className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Mecánica de Suelos Kársticos & Cenotes" : "Karstic Soil Mechanics & Cenotes",
      desc: isEs 
        ? "El subsuelo calcáreo de Tulum exige tomografías de resistividad eléctrica (TRE) tridimensionales y micropilotes anclados a roca competente para evitar colapsos sobre cavernas y proteger el acuífero sagrado maya."
        : "Tulum's porous limestone demands 3D Electrical Resistivity Tomography (ERT) and deep micropiles anchored to solid bedrock, safeguarding buildings over voids while preserving the subterranean aquifer."
    },
    {
      icon: <Trees className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Integración Bioclimática con la Selva" : "Bioclimatic Jungle Integration",
      desc: isEs 
        ? "Diseño pasivo con techos altos de 4+ metros, aleros volados que tamizan la radiación solar cenital y ventilación cruzada natural que reduce hasta un 50% la demanda de aire acondicionado."
        : "Passive climate architecture featuring 4-meter soaring ceilings, overhangs deflecting equatorial sun, and natural cross-ventilation cutting cooling electricity loads by up to 50%."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Normativas Ambientales & Licencias PDU" : "Environmental Compliance & Zoning",
      desc: isEs 
        ? "Gestión técnica de Manifestaciones de Impacto Ambiental (MIA), estricto cumplimiento del PDU de Tulum (COS 35-45%), coeficientes de absorción permeable y preservación de especies arbóreas protegidas."
        : "Seamless municipal permitting, environmental impact statements (MIA), strict compliance with Tulum's Master Plan (PDU), permeable ground ratios, and protected native tree preservation."
    },
    {
      icon: <Award className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "20+ Años de Liderazgo del Arq. Ángel Cereceda" : "20+ Years Led by Arch. Ángel Cereceda",
      desc: isEs 
        ? "Dirección de obra directa por el Arq. Ángel Cereceda, combinando dos décadas de experiencia en el trópico caribeño con rigor artesanal, supervisión milimétrica y certeza contractual."
        : "Personal technical oversight by Principal Architect Ángel Cereceda, merging two decades of regional expertise with artisanal craftsmanship and guaranteed project delivery."
    }
  ];

  const featuredPortfolio = [
    {
      title: "Papaya Playa Project",
      location: "Tulum, Quintana Roo",
      tag: "Boutique Eco-Hospitality",
      desc: isEs 
        ? "Bóvedas catenarias monumentales de ferrocemento recubiertas en Chukum natural, pasarelas elevadas de Zapote sobre suelo kárstico y celosías sensoriales."
        : "Monumental ferrocement catenary vaults finished with native Chukum, elevated Zapote hardwood boardwalks preserving karst geology, and sensory screens.",
      image: "/projects/hospitalidad/hospitalidad-santuario-arcos.webp",
      alt: "estudio de arquitectura en Tulum - Papaya Playa Project hotel boutique sustentable"
    },
    {
      title: "Santuario Ka'an",
      location: "Selva Virgen de Tulum",
      tag: "Residencia 100% Off-Grid",
      desc: isEs 
        ? "Arquitectura autónoma con micro-red solar fotovoltaica, captación pluvial de 60,000L con esterilización UV-C y muros monolíticos de gran inercia térmica."
        : "100% autonomous off-grid residential retreat with solar PV micro-grid, 60,000L rainwater harvesting with UV-C purification, and high-inertia walls.",
      image: "/projects/offgrid/offgrid-villa-cenote.webp",
      alt: "estudio de arquitectura en Tulum - Santuario Kaan villa ecologica autosuficiente"
    },
    {
      title: "Villa Chukum & 7 Cielos",
      location: "Selva Alta Tulum",
      tag: "Residencial Boutique de Lujo",
      desc: isEs 
        ? "Albercas infinity continuas en estuco ancestral de Chukum, carpinterías monumentales en Tzalam y cancelerías de cristal laminado anti-huracán."
        : "Seamless Chukum plunge pools reflecting turquoise cenote hues, solid certified Tzalam woodwork, and hurricane-resistant structural glazing.",
      image: "/projects/residencial/alux-7cielos-ocean-pool.webp",
      alt: "estudio de arquitectura en Tulum - Villa Chukum residencia de lujo contemporanea"
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
          {isEs ? "Estudio de Arquitectura en Tulum" : "Architecture Studio in Tulum"}
        </span>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-12 md:py-20 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-uno/10 border border-teal-uno/25 text-teal-uno text-[11px] font-label-caps uppercase tracking-wider font-semibold mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>{isEs ? "Tulum, Quintana Roo • México" : "Tulum, Quintana Roo • Mexico"}</span>
            </div>

            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-teal-uno uppercase leading-tight font-semibold mb-6">
              {isEs 
                ? "Estudio de Arquitectura en Tulum | Diseño Contemporáneo Tropical" 
                : "Architecture Studio in Tulum | Contemporary Tropical Design"}
            </h1>

            <p className="font-serif-quote text-lg sm:text-xl italic text-gris-texto/90 mb-6 leading-relaxed border-l-2 border-arena-calida pl-4">
              {isEs
                ? "Diseñamos espacios que pertenecen a la selva virgen. Arquitectura bioclimática, ingeniería kárstica rigurosa y sofisticación contenida para inversionistas y propietarios exigentes."
                : "Architecture rooted in the virgin jungle. Bioclimatic design, rigorous karstic engineering, and understated luxury for international investors and landowners."}
            </p>

            <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed mb-8">
              {isEs
                ? "Bajo la dirección del Arq. Ángel Cereceda (con más de 20 años forjando obras icónicas en la Riviera Maya), UNO Arquitectos articula cada proyecto desde el análisis de suelo y la gestoría municipal hasta el diseño ejecutivo y la construcción llave en mano."
                : "Under the leadership of Principal Architect Ángel Cereceda (20+ years building across the Riviera Maya), UNO Arquitectos orchestrates every project from geological feasibility and environmental permits to turnkey construction."}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#diagnostico-tulum"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-uno text-white font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:bg-arena-calida transition-colors font-semibold shadow-ethereal"
              >
                <span>{isEs ? "Solicitar Diagnóstico de Mi Lote" : "Request Feasibility Review"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portafolio-tulum"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-arena-calida text-gris-texto font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:border-teal-uno hover:text-teal-uno transition-colors font-semibold"
              >
                <span>{isEs ? "Explorar Portafolio en Tulum" : "Explore Tulum Works"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-arena-calida/30">
              <img
                src="/projects/hospitalidad/hospitalidad-santuario-arcos.webp"
                alt="estudio de arquitectura en Tulum - diseno contemporaneo tropical con bovedas de chukum"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="font-label-caps text-[10px] uppercase tracking-wider bg-teal-uno px-2.5 py-1 rounded-full font-semibold">
                  Papaya Playa Project
                </span>
                <p className="font-headline-md text-base sm:text-lg font-semibold mt-1">Bóvedas Catenarias en Chukum</p>
                <p className="font-body-md text-xs text-white/80">Arquitectura icónica integrada a la costa de Tulum</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* AUTORIDAD TÉCNICA: RETOS DE TULUM */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Autoridad Técnica y Experiencia en Terreno" : "Technical Authority & Local Grounding"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs 
                ? "Retos de la Selva Virgen de Tulum y Soluciones Geotécnicas" 
                : "Tulum Jungle Challenges & Geotechnical Engineering"}
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gris-texto mt-4 leading-relaxed">
              {isEs
                ? "Construir en Tulum no es replicar arquitectura urbana genérica. La geología cárstica, la humedad salina y las restricciones ecológicas exigen un estudio con maestría local demostrada."
                : "Building in Tulum requires deep local mastery. Porous limestone geology, Caribbean humidity, and environmental zoning demand proven specialized engineering."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {tulumChallenges.map((item, idx) => (
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

      {/* PORTAFOLIO FILTRADO EN TULUM */}
      <section id="portafolio-tulum" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Obras en Tulum" : "Works in Tulum"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "Arquitectura que Pertenece al Territorio" : "Architecture Rooted in the Land"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {featuredPortfolio.map((p, idx) => (
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

      {/* CRO CONVERSION SECTION */}
      <section id="diagnostico-tulum" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <DiagnosticLeadForm
            title={isEs ? "Solicita un diagnóstico de viabilidad técnica y normativa de tu lote en Tulum" : "Request a technical and zoning feasibility review for your lot in Tulum"}
            subtitle={isEs 
              ? "Revisión gratuita por el Arq. Ángel Cereceda: coeficientes PDU, análisis preliminar kárstico y presupuesto paramétrico inicial." 
              : "Complimentary review by Principal Architect Ángel Cereceda: zoning compliance, karstic feasibility, and parametric budgeting."}
            defaultLocation="Tulum"
            pageContext="Estudio Arquitectura Tulum"
          />
        </div>
      </section>

      {/* FULL CONTACT & OFFICE INFO */}
      <Contacto />
    </div>
  );
}

