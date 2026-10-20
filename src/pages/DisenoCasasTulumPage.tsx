import { useEffect } from "react";
import { Sun, Droplets, Trees, Sparkles, ArrowRight, ShieldCheck, Home, CheckCircle2, Wind } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import DiagnosticLeadForm from "../components/DiagnosticLeadForm";
import Contacto from "../components/Contacto";

export default function DisenoCasasTulumPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  useEffect(() => {
    const pageTitle = isEs
      ? "Diseño Arquitectónico para Casas en Tulum | Villas UNO"
      : "Architectural House Design in Tulum | Luxury Villas UNO";

    const pageDesc = isEs
      ? "Diseño arquitectónico para casas y villas en Tulum. Residencias boutique off-grid, acabados en Chukum natural, maderas de Tzalam y arquitectura pasiva."
      : "Architectural design for houses and villas in Tulum. Luxury off-grid residences, natural Chukum plaster, certified Tzalam hardwoods, and passive cooling.";

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    // Schema.org Structured Data
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "tulum-houses-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ArchitecturalFirm",
      "name": "UNO Arquitectos - Diseño Arquitectónico para Casas en Tulum",
      "alternateName": "UNO Arquitectos Mx",
      "url": "https://unoarquitectos.com/diseno-casas-tulum",
      "logo": "https://unoarquitectos.com/hero-luxury-villa.webp",
      "image": "https://unoarquitectos.com/projects/offgrid/offgrid-villa-cenote.jpg",
      "description": pageDesc,
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
      const el = document.getElementById("tulum-houses-schema");
      if (el) el.remove();
    };
  }, [language, isEs]);

  const houseDesignPillars = [
    {
      icon: <Home className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Residencias Boutique & Villas Privadas" : "Boutique Estates & Private Villas",
      desc: isEs 
        ? "Casas de autor que celebran la privacidad y la inmersión selvática. Proyectamos distribuciones diáfanas, patios interiores y alturas de 4+ metros que diluyen la frontera entre interior y naturaleza."
        : "Signature luxury villas celebrating absolute seclusion and jungle immersion. Open-plan layouts, tranquil interior courtyards, and soaring ceilings blurring indoor and outdoor realms."
    },
    {
      icon: <Sun className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Soluciones Off-Grid & Autosuficiencia" : "100% Off-Grid Engineering",
      desc: isEs 
        ? "Ingeniería solar fotovoltaica con micro-redes y bancos de baterías de litio LFP, captación pluvial de gran escala (50,000L+) y biodigestores con humedales de fitorremediación para proteger los cenotes."
        : "Autonomous smart solar micro-grids with LFP lithium storage, high-capacity rainwater harvesting with UV-C purification, and constructed wetlands protecting underground cenotes."
    },
    {
      icon: <Droplets className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Chukum Continuo & Maderas Nobles" : "Natural Chukum & Certified Hardwoods",
      desc: isEs 
        ? "Estuco ancestral maya de Chukum elaborado con resina vegetal de Havardia albicans, que reduce la temperatura 4°C y otorga al agua de albercas un tono turquesa cenote, combinado con maderas de Tzalam y Zapote."
        : "Ancestral Mayan Chukum plaster lowering indoor temperatures by 4°C and creating turquoise cenote water hues, paired with marine-grade certified Tzalam and Zapote hardwoods."
    },
    {
      icon: <Wind className="w-6 h-6 text-teal-uno" />,
      title: isEs ? "Ventilación Cruzada & Confort Pasivo" : "Passive Bioclimatic Cross-Ventilation",
      desc: isEs 
        ? "Orientación astronómica y eólica analizada según los vientos alisios del Caribe mexicano. Celosías de madera, aleros pronunciados y muros de alta inercia térmica para un confort continuo."
        : "Orientation mapped against trade winds, operable timber louvers, wide protective eaves, and thermal mass walls maintaining natural thermal equilibrium without continuous air conditioning."
    }
  ];

  const featuredHouses = [
    {
      title: "Villa Chukum",
      location: "Selva Alta Tulum",
      tag: "Residencia Boutique de Autor",
      desc: isEs 
        ? "650 m² de arquitectura orgánica: alberca cenote en Chukum pulido, carpinterías monumentales de Tzalam macizo y pórticos con ventilación cruzada hacia la copa de los árboles."
        : "650 sqm organic villa: polished natural Chukum pool, monumental solid Tzalam carpentry, and breezy verandas opening to the tropical tree canopy.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      alt: "diseno arquitectonico para casas en tulum - villa chukum de lujo"
    },
    {
      title: "Santuario Ka'an",
      location: "Tulum Off-Grid Estate",
      tag: "Villa 100% Autosuficiente",
      desc: isEs 
        ? "Residencia unifamiliar autosuficiente de 720 m² en lote selvático virgen. Energía solar independiente, captación pluvial de 60,000L y confort térmico pasivo absoluto."
        : "720 sqm autonomous single-family estate on virgin jungle land. Zero-grid solar array, 60,000L rainwater storage, and uncompromising architectural elegance.",
      image: "/projects/offgrid/offgrid-villa-cenote.jpg",
      alt: "diseno arquitectonico para casas en tulum - santuario kaan arquitectura bioclimatica"
    },
    {
      title: "Villas Alux",
      location: "Región 15, Tulum",
      tag: "Villas Residenciales Boutique",
      desc: isEs 
        ? "Conjunto de villas residenciales privadas con muros de concreto lavado y Chukum, terrazas voladas y albercas privadas rodeadas de vegetación nativa preservada."
        : "Enclave of private luxury villas with Chukum and washed concrete facades, cantilevered decks, and private plunge pools embraced by virgin flora.",
      image: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
      alt: "diseno arquitectonico para casas en tulum - villas alux alberca chukum"
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
          {isEs ? "Diseño Arquitectónico para Casas en Tulum" : "House Design in Tulum"}
        </span>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-12 md:py-20 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-uno/10 border border-teal-uno/25 text-teal-uno text-[11px] font-label-caps uppercase tracking-wider font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEs ? "Residencias Boutique & Villas de Autor" : "Boutique Residences & Signature Villas"}</span>
            </div>

            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-teal-uno uppercase leading-tight font-semibold mb-6">
              {isEs 
                ? "Diseño Arquitectónico para Casas y Villas en Tulum" 
                : "Architectural Design for Houses and Villas in Tulum"}
            </h1>

            <p className="font-serif-quote text-lg sm:text-xl italic text-gris-texto/90 mb-6 leading-relaxed border-l-2 border-arena-calida pl-4">
              {isEs
                ? "Concebimos residencias privadas que respiran con el trópico. Soluciones off-grid de vanguardia, acabados ancestrales en Chukum y maderas certificadas que desafían el paso del tiempo."
                : "Private estates that breathe with the tropical climate. Cutting-edge off-grid infrastructure, ancestral Chukum plaster, and certified hardwoods that transcend time."}
            </p>

            <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed mb-8">
              {isEs
                ? "Diseñar una casa en Tulum exige dominar la geología kárstica, las densidades del PDU y la bioclimática selvática. En UNO Arquitectos convertimos tu visión en un anteproyecto ejecutivo de precisión artística y constructiva."
                : "Designing a home in Tulum requires mastering karst soil conditions, municipal zoning, and jungle bioclimatics. UNO Arquitectos translates your vision into an executive architectural blueprint of artistic and engineering rigor."}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#diagnostico-casas"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-uno text-white font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:bg-arena-calida transition-colors font-semibold shadow-ethereal"
              >
                <span>{isEs ? "Solicitar Diagnóstico para Mi Casa" : "Request Villa Design Review"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#villas-tulum"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-arena-calida text-gris-texto font-label-caps text-xs sm:text-sm uppercase tracking-wider hover:border-teal-uno hover:text-teal-uno transition-colors font-semibold"
              >
                <span>{isEs ? "Ver Diseños de Casas en Tulum" : "Explore Tulum House Designs"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-arena-calida/30">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="diseno arquitectonico para casas en tulum - villa de autor en la selva con alberca chukum"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="font-label-caps text-[10px] uppercase tracking-wider bg-teal-uno px-2.5 py-1 rounded-full font-semibold">
                  Tulum Residencial
                </span>
                <p className="font-headline-md text-base sm:text-lg font-semibold mt-1">Villa Chukum</p>
                <p className="font-body-md text-xs text-white/80">Diseño arquitectónico contemporáneo tropical</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PILARES DE DISEÑO RESIDENCIAL */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Criterio de Diseño Residencial" : "Residential Design Philosophy"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "Principios Constructivos de Nuestras Casas en Tulum" : "Design Principles of Our Tulum Houses"}
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gris-texto mt-4 leading-relaxed">
              {isEs
                ? "Una residencia de lujo en la selva debe ofrecer confort térmico inquebrantable, sostenibilidad energética y materiales nobles que envejezcan con carácter y dignidad."
                : "A luxury jungle estate must deliver passive thermal serenity, energy self-sufficiency, and noble organic materials that age with enduring dignity."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {houseDesignPillars.map((item, idx) => (
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

      {/* CASAS DESTACADAS EN TULUM */}
      <section id="villas-tulum" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-2 font-semibold">
              {isEs ? "Portafolio Residencial" : "Residential Portfolio"}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-teal-uno uppercase font-semibold">
              {isEs ? "Villas y Residencias Diseñadas en Tulum" : "Houses and Villas Designed in Tulum"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {featuredHouses.map((p, idx) => (
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
      <section id="diagnostico-casas" className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <DiagnosticLeadForm
            title={isEs ? "Solicita un anteproyecto y diagnóstico de diseño para tu casa en Tulum" : "Request a preliminary architectural proposal for your home in Tulum"}
            subtitle={isEs 
              ? "Analizamos tu lote en Tulum, restricciones ambientales y requerimientos para diseñar una residencia a la medida de tu estilo de vida." 
              : "We evaluate your Tulum lot, zoning codes, and lifestyle requirements to craft a bespoke architectural vision."}
            defaultLocation="Tulum"
            pageContext="Diseno Casas Tulum"
          />
        </div>
      </section>

      {/* CONTACTO & DIRECCIONES */}
      <Contacto />
    </div>
  );
}
