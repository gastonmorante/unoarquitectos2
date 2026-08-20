import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Layers, Coffee, Home, HeartPulse, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSiteContent } from "../context/ContentContext";
import { CategoryTypology, GalleryImage } from "../types/content";

const residentialGallery: GalleryImage[] = [
  {
    url: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
    title: "Alberca & Jacuzzi Frente al Mar Caribe (7 Cielos)",
    desc: "Muros y alberca con acabado continuo de Chukum natural pulido, pérgola en madera de Tzalam, cancelería marina y vista directa al mar turquesa."
  },
  {
    url: "/projects/residencial/alux-7cielos-master-jungle-view.jpg",
    title: "Master Suite con Cabecera Monumental (7 Cielos)",
    desc: "Cabecera de piso a techo con capitoné acolchado en tono arena, cama plataforma de Tzalam y cancel corredizo con balcón hacia la copa de los árboles."
  },
  {
    url: "/projects/residencial/alux-7cielos-chukum-suite.jpg",
    title: "Recámara Doble en Microcemento & Rattán (Alux)",
    desc: "Muros en estuco mineral texturizado gris piedra para inercia térmica, cabeceros de rattán, luminarias colgantes cálidas y ventanales a la selva."
  },
  {
    url: "/projects/residencial/alux-7cielos-studio-parota.jpg",
    title: "Studio & Comedor en Madera de Parota (Alux)",
    desc: "Pisos y muros en microcemento pulido continuo, carpintería integral de piso a techo en Parota sólida, mesa de tronco vivo y lámpara de cobre."
  },
  {
    url: "/projects/residencial/alux-7cielos-living-open.jpg",
    title: "Gran Salón & Comedor Open-Concept (Alux)",
    desc: "Espacio diáfano sin columnas intermedias, piso de porcelanato gran formato brillante, lámpara escultórica de cristal soplado y comedor en Parota."
  }
];

const lavazzaGallery: GalleryImage[] = [
  {
    url: "/projects/lavazza/lavazza-facade.jpg",
    title: "Fachada Principal & Acceso",
    desc: "Friso superior en azul corporativo con volumetría 3D 'Lavazza Torino 1895', iluminación lineal empotrada y mobiliario bistró."
  },
  {
    url: "/projects/lavazza/lavazza-counter-detail.jpg",
    title: "Barra Barista & Detalle Material",
    desc: "Barra entablada en duelas de roble, cubierta blanca continua, máquina de espresso Rancilio y hornacina con cerámica artesanal."
  },
  {
    url: "/projects/lavazza/lavazza-interior.jpg",
    title: "Salón Gourmet & Iluminación",
    desc: "Muros en estuco mineral cálido, luminarias colgantes en latón satinado, rieles lineales y cuadros de autor con historia italiana."
  },
  {
    url: "/projects/lavazza/lavazza-kiosk-terrace.jpg",
    title: "Kiosko & Terraza Exterior",
    desc: "Pabellón abierto con cerramiento plegable de seguridad, sombrillas arquitectónicas, vitrina refrigerada y muro vegetal."
  }
];

const hospitalityGallery: GalleryImage[] = [
  {
    url: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
    title: "Santuario Holístico & Arcos Escultóricos (Papaya Playa Project)",
    desc: "Bóvedas catenarias monumentales esculpidas en ferrocemento y Chukum, columnas envueltas en bejuco regional y celosía suspendida de cuerdas de henequén."
  },
  {
    url: "/projects/hospitalidad/hospitalidad-domo-organico.jpg",
    title: "Domo Bioclimático & Cápsula Escultórica (Papaya Playa Project)",
    desc: "Estructura biomórfica de doble curvatura con acabado en estuco de cal hidráulica, ventanales elípticos en madera de Parota y techumbre de zacate."
  },
  {
    url: "/projects/hospitalidad/hospitalidad-suite-mirador.jpg",
    title: "Suite Mirador & Treetop Sanctuary (Papaya Playa Project)",
    desc: "Bóveda interior trenzada en costillaje de bejuco, duela ancha de madera tropical tratada, miradores elípticos y luz dorada al atardecer."
  },
  {
    url: "/projects/hospitalidad/hospitalidad-sendero-selva.jpg",
    title: "Pasarela Elevada entre el Dosel Selvático (Papaya Playa Project)",
    desc: "Sendero sinuoso sobre pilotes de bajo impacto en madera dura de Zapote/Tzalam que preserva el manto freático y flora endémica."
  }
];

const offGridGallery: GalleryImage[] = [
  {
    url: "/projects/offgrid/offgrid-villa-cenote.jpg",
    title: "Villa Cenote & Volumetría en Tapial y Piedra (Santuario Ka'an)",
    desc: "Residencia 100% autosuficiente en la selva de Tulum. Muros monolíticos de tierra compactada (tapial), plataforma volada en Tzalam y cenote plunge pool."
  },
  {
    url: "/projects/offgrid/offgrid-pabellon-living.jpg",
    title: "Pabellón Social Open-Concept & Ventanales Pocket (Santuario Ka'an)",
    desc: "Conexión interior-exterior total sin cristales divisorios fijos, mobiliario en maderas endémicas recuperadas y ventilación cruzada pasiva permanente."
  },
  {
    url: "/projects/offgrid/offgrid-rooftop-solar.jpg",
    title: "Pérgola Solar & Mirador sobre el Dosel Selvático (Santuario Ka'an)",
    desc: "Terraza panorámica 360° con pérgola fotovoltaica de paneles bifaciales semi-translúcidos, lounge exterior y tina de inmersión en Chukum."
  },
  {
    url: "/projects/offgrid/offgrid-suite-tulum.jpg",
    title: "Master Suite Bioclimática & Muros de Tierra (Santuario Ka'an)",
    desc: "Suite principal inmersa en la fronda selvática, muros de alta inercia térmica en tapial y microcemento, cancelería esquinera sin postes y textiles de lino."
  }
];

const categoryTypologies: CategoryTypology[] = [
  {
    id: "residenciales",
    title: "RESIDENCIALES",
    titleEn: "RESIDENTIAL",
    subtitle: "HABITAT Y SOFISTICACIÓN",
    subtitleEn: "HABITAT & SOPHISTICATION",
    icon: "home",
    image: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
    badge: "Alux & 7 Cielos",
    gallery: residentialGallery,
    projectHighlight: "Residencias Boutique: Alux & 7 Cielos",
    descEs: "Arquitectura residencial de alto nivel concebida para una integración armónica con el paisaje tropical y costero. Los proyectos Alux y 7 Cielos destacan por su honestidad constructiva: muros y albercas continuas en Chukum natural pulido que mantienen frescura térmica, carpinterías monumentales a medida en maderas nobles de Parota y Tzalam certificadas, cancelerías de piso a techo con vistas panorámicas al mar y a la selva, y salones de concepto abierto con iluminación escenográfica.",
    descEn: "High-end residential architecture conceived for seamless integration with tropical and coastal landscapes. The Alux and 7 Cielos projects feature monolithic polished Chukum plaster for passive thermal comfort, bespoke certified Parota and Tzalam hardwood millwork, floor-to-ceiling panoramic glazing framing ocean and jungle vistas, and expansive open-concept living spaces.",
    area: "420 - 1,450 m²",
    materials: "Chukum natural pulido, madera maciza de Parota y Tzalam, microcemento mineral, porcelanato gran formato, cristal templado anti-huracán y cancelería negra anodizada",
    projectsSample: ["Residencia 7 Cielos (Frente al Mar)", "Villas Alux (Selva Maya)", "Villa Chukum (Tulum)", "Casa Coral (Cancún)"],
    specsEs: [
      "Alberca infinity y jacuzzi integrado con recubrimiento de Chukum natural impermeable",
      "Carpintería a medida en Parota y Tzalam: puertas pivotantes, clósets y cabeceras de autor",
      "Muros en estuco mineral texturizado y microcemento continuo para confort térmico pasivo",
      "Cancelería estructural de piso a techo con cristales templados resistentes a vientos marinos",
      "Grandes luces estructurales en concreto armado para salones y terrazas sin columnas intermedias"
    ],
    specsEn: [
      "Infinity pool and integrated plunge spa finished in waterproof polished natural Chukum",
      "Bespoke solid Parota and Tzalam millwork: pivot doors, closets, and custom headboards",
      "Textured mineral plaster and seamless microcement walls providing natural thermal mass",
      "Floor-to-ceiling hurricane-rated structural glazing with marine-grade black anodized frames",
      "Long-span reinforced concrete engineering enabling column-free open-plan living and terraces"
    ]
  },
  {
    id: "comerciales",
    title: "COMERCIALES",
    titleEn: "COMMERCIAL",
    subtitle: "ESPACIOS DE INTERACCIÓN",
    subtitleEn: "SPACES OF INTERACTION",
    icon: "storefront",
    image: "/projects/lavazza/lavazza-facade.jpg",
    badge: "Lavazza Coffee Bar",
    gallery: lavazzaGallery,
    projectHighlight: "Cafetería & Espresso Bar Lavazza",
    descEs: "Diseño y ejecución integral para proyectos gastronómicos y retail de alta gama. El proyecto insignia de Cafetería Lavazza combina la elegancia italiana de Turín (1895) con la calidez orgánica del diseño contemporáneo: muros en estuco mineral cálido, barra curva entablada en roble claro, estación barista ergonómica de alto rendimiento y terraza exterior modular.",
    descEn: "Comprehensive design and construction for high-end hospitality and retail. The flagship Lavazza Coffee Bar balances Italian Turin heritage (1895) with warm contemporary finishes: textured mineral walls, curved fluted light oak counter, high-performance barista station, and modular outdoor terrace.",
    area: "185 m² (120 m² salón/barra + 65 m² terraza)",
    materials: "Duela de roble claro, cubierta sólida blanca antibacterial, estuco mineral arena, porcelanato gran formato y cancelería de cristal templado",
    projectsSample: ["Cafetería Lavazza (Plaza Comercial)", "Boutique Retail (Playa del Carmen)", "Pabellón Gastronómico (Tulum)"],
    specsEs: [
      "Estación barista optimizada con máquina Rancilio y molinos de precisión",
      "Iluminación LED lineal en rieles empotrados con temperatura cálida de 2700K",
      "Kiosko exterior con persianas plegables de seguridad y muros vegetales",
      "Muros con hornacinas iluminadas y celosía cerámica 3D texturizada",
      "Integración de tótem digital interactivo y vitrina refrigerada curva"
    ],
    specsEn: [
      "Optimized barista workflow with Rancilio espresso machine and on-demand grinders",
      "Recessed architectural linear LED lighting with warm 2700K ambient tone",
      "Outdoor terrace kiosk with folding security shutters and green plant wall",
      "Recessed illuminated display niches and 3D textured ceramic tile backsplash",
      "Integrated self-ordering digital totem and curved refrigerated display case"
    ]
  },
  {
    id: "hospitalarios",
    title: "HOSPITALARIOS",
    titleEn: "HOSPITALITY",
    subtitle: "BIENESTAR Y PRECISIÓN",
    subtitleEn: "WELLNESS & PRECISION",
    icon: "medical_services",
    image: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
    badge: "Papaya Playa Project",
    gallery: hospitalityGallery,
    projectHighlight: "Papaya Playa Project (Tulum) • Eco-Sanctuary",
    descEs: "Arquitectura inmersiva para el bienestar sensorial y la reconexión con la naturaleza en Tulum. En Papaya Playa Project fusionamos hospitalidad de lujo con respeto absoluto por el ecosistema costero: bóvedas catenarias esculpidas en ferrocemento y Chukum natural, pasarelas elevadas en madera de Zapote que protegen el suelo kárstico, cápsulas habitacionales biomórficas con miradores elípticos de 360° y celosías en fibras vegetales de henequén que tamizan la brisa marina.",
    descEn: "Immersive barefoot luxury architecture in Tulum. At Papaya Playa Project, we blend high-end hospitality with regenerative coastal preservation: catenary ferrocement vaults finished in natural Chukum, elevated Zapote boardwalks protecting the fragile karst soil, biomorphic guest domes with 360° elliptical vistas, and handcrafted henequen rope screens filtering coastal breeze.",
    area: "1,800 - 9,500 m²",
    materials: "Ferrocemento estructural, estuco continuo de Chukum color arena, madera dura de Zapote y Tzalam, bejuco y mimbre trenzado artesanal, cuerda de henequén natural y cubiertas de zacate regional",
    projectsSample: ["Papaya Playa Project (Tulum)", "Santuario Zen (Mérida)", "Refugio Etéreo (Bacalar)", "Eco-Lodge Canopy (Sian Ka'an)"],
    specsEs: [
      "Bóvedas catenarias de ferrocemento y Chukum con inercia térmica pasiva para climatización natural",
      "Senderos y plataformas elevadas sobre pilotes de madera de Zapote para huella ecológica cero",
      "Cápsulas habitacionales bioclimáticas con ventilación cruzada continua mediante efecto Venturi",
      "Celosías y muros acústicos en bejuco y fibras naturales de henequén 100% biodegradables",
      "Captación pluvial integral y tratamiento biológico de aguas en circuito cerrado"
    ],
    specsEn: [
      "Ferrocement catenary vaults finished in Chukum providing passive thermal mass for natural cooling",
      "Elevated boardwalks and platforms on Zapote timber stilts ensuring zero soil compaction",
      "Bioclimatic suite pods engineered with Venturi effect continuous cross-ventilation",
      "100% biodegradable acoustic screens and woven walls handcrafted in regional henequen and bejuco",
      "Closed-loop rainwater harvesting and biological wastewater wetland treatment"
    ]
  },
  {
    id: "off-the-grid",
    title: "PROYECTOS OFF THE GRID",
    titleEn: "OFF THE GRID PROJECTS",
    subtitle: "AUTOSUFICIENCIA TROPICAL",
    subtitleEn: "TROPICAL SELF-SUFFICIENCY",
    icon: "eco",
    image: "/projects/offgrid/offgrid-villa-cenote.jpg",
    badge: "Santuario Ka'an (Tulum)",
    gallery: offGridGallery,
    projectHighlight: "Santuario Ka'an • Off-Grid Jungle Compound (Tulum)",
    descEs: "Desarrollo residencial autónomo de ultra-lujo en lo profundo de la selva virgen de Tulum. Santuario Ka'an opera al 100% fuera de la red eléctrica y de agua: micro-red solar con almacenamiento en baterías de litio LFP, muros monolíticos de tierra compactada (tapial) y piedra caliza regional, captación pluvial de circuito cerrado con esterilización UV-C, biodigestores anaeróbicos y arquitectura bioclimática pasiva de huella de carbono neutra.",
    descEn: "Ultra-luxury autonomous estate deep in the virgin Tulum jungle. Santuario Ka'an operates 100% off-the-grid: smart solar micro-grid with LFP lithium storage, monolithic rammed earth (tapial) and local limestone walls, closed-loop rainwater harvesting with UV-C purification, anaerobic biodigesters, and zero-carbon bioclimatic engineering.",
    area: "580 - 2,800 m²",
    materials: "Tierra compactada (tapial local), piedra caliza maya, madera certificada de Tzalam y Chicozapote, estuco natural de Chukum, pérgolas solares bifaciales de cristal templado",
    projectsSample: ["Santuario Ka'an (Tulum)", "Casa Selva Negra (Cobá)", "Pabellón Solar Autónomo (Bacalar)"],
    specsEs: [
      "Micro-red fotovoltaica aislada de 18 kWp con banco de baterías de litio LFP de 45 kWh",
      "Sistema de captación pluvial de 60,000L con microfiltración y purificación UV-C de grado potable",
      "Muros monolíticos de tapial de 40 cm con altísima inercia térmica diurna y nocturna",
      "Tratamiento anaeróbico de aguas negras y humedal artificial de fitorremediación para aguas grises",
      "Cero emisión de ruido y conservación del 92% de la masa arbórea original del lote selvático"
    ],
    specsEn: [
      "Isolated 18 kWp photovoltaic micro-grid with 45 kWh smart LFP lithium battery storage bank",
      "60,000L rainwater harvesting system with multi-stage microfiltration and drinking-grade UV-C purification",
      "40 cm monolithic rammed earth walls delivering superior diurnal/nocturnal passive thermal insulation",
      "Anaerobic blackwater treatment and constructed phytoremediation wetland for greywater garden reuse",
      "Zero noise pollution and preservation of 92% of the original virgin jungle tree canopy"
    ]
  }
];

export default function Portfolio() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const { content } = useSiteContent();
  const categories = content?.categories && content.categories.length > 0 ? content.categories : categoryTypologies;
  const [selectedCategory, setSelectedCategory] = useState<CategoryTypology | null>(null);
  
  // Unified Synchronized Auto-Carousel Tick across ALL categories
  const [syncedSlideTick, setSyncedSlideTick] = useState(0);

  useEffect(() => {
    const syncTimer = setInterval(() => {
      setSyncedSlideTick((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(syncTimer);
  }, []);

  // Modal active image state
  const [modalActiveImgIndex, setModalActiveImgIndex] = useState(0);

  const handleOpenCategory = (item: CategoryTypology) => {
    setSelectedCategory(item);
    setModalActiveImgIndex(0);
  };

  return (
    <section id="proyectos" className="py-section-padding px-4 sm:px-6 md:px-margin-desktop bg-background font-sans border-b border-arena-calida/20 text-gris-texto overflow-hidden">
      <div className="max-w-container-max mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 reveal-on-scroll is-visible">
          <div>
            <h2 className="font-label-caps text-xs sm:text-label-caps text-arena-calida mb-3 sm:mb-6 flex items-center gap-3 sm:gap-6 uppercase tracking-widest font-semibold">
              <span className="w-8 sm:w-16 h-[1px] bg-arena-calida inline-block"></span>
              {isEs ? "Tipologías Arquitectónicas" : "Architectural Typologies"}
            </h2>
            <h3 className="font-headline-xl text-headline-xl text-teal-uno uppercase font-semibold">
              {isEs ? "COLECCIÓN POR CATEGORÍA" : "COLLECTION BY CATEGORY"}
            </h3>
          </div>
          <p className="mt-4 sm:mt-6 md:mt-0 font-body-md text-body-md text-gris-texto max-w-sm md:text-right leading-relaxed">
            {isEs 
              ? "Exploración técnica y material a través de diversas escalas y propósitos espaciales."
              : "Technical and material exploration across diverse scales and spatial purposes."}
          </p>
        </div>

        {/* 2x2 Grid of Typologies */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 md:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-20">
          {categories.map((item, index) => {
            const isCommercial = item.id === "comerciales";
            const isResidential = item.id === "residenciales";
            const isHospitality = item.id === "hospitalarios";
            const isOffgrid = item.id === "off-the-grid";
            const hasGallery = !!item.gallery && item.gallery.length > 0;
            
            // All categories change simultaneously in complete harmony
            const currentSlide = hasGallery && item.gallery 
              ? (syncedSlideTick % item.gallery.length) 
              : 0;

            return (
              <div 
                key={item.id}
                onClick={() => handleOpenCategory(item)}
                className="md:col-span-6 group cursor-pointer reveal-on-scroll is-visible"
                style={index % 2 === 1 ? { transitionDelay: "150ms" } : undefined}
              >
                <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] mb-4 sm:mb-6 rounded-2xl bg-surface-container-low shadow-ethereal">
                  {/* Dynamic Auto-Carousel for Cards with gallery */}
                  {hasGallery && item.gallery ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <AnimatePresence mode="sync">
                        <motion.img 
                          key={currentSlide}
                          alt={item.gallery[currentSlide].title} 
                          className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105" 
                          src={item.gallery[currentSlide].url}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                          loading="lazy"
                        />
                      </AnimatePresence>

                      {/* Carousel Indicator Dots */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 flex gap-1.5 bg-black/35 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10">
                        {item.gallery.map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                              i === currentSlide ? "w-4 sm:w-5 bg-teal-uno" : "w-1.5 bg-white/40"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Project Badge on Card */}
                      {item.badge && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-white/90 backdrop-blur-md border border-white/60 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all duration-300 group-hover:bg-white">
                          {isResidential && <Home className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-uno" />}
                          {isCommercial && <Coffee className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-uno" />}
                          {isHospitality && <HeartPulse className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-uno" />}
                          {isOffgrid && <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-uno" />}
                          <span className="font-label-caps text-[9px] sm:text-[10px] uppercase font-semibold text-teal-uno tracking-wider">
                            {item.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <img 
                      alt={isEs ? item.title : item.titleEn} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                      src={item.image}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  <div className="absolute inset-0 bg-arena-calida/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                  
                  {/* Hover / Tap Reveal Card */}
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-4 sm:p-6 bg-white/85 backdrop-blur-md rounded-xl border border-arena-calida/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-between shadow-lg">
                    <div className="min-w-0 pr-2">
                      <p className="font-label-caps text-xs sm:text-label-caps text-teal-uno uppercase tracking-widest font-semibold truncate">
                        {isEs ? "Ver Proyectos & Ficha Técnica" : "View Projects & Specs"}
                      </p>
                      {hasGallery && item.gallery && (
                        <p className="font-body-md text-[11px] sm:text-xs text-gris-texto mt-0.5 font-light truncate">
                          {item.gallery[currentSlide].title}
                        </p>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-teal-uno flex-shrink-0" />
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-teal-uno mb-1.5 sm:mb-2 group-hover:text-arena-calida transition-colors uppercase font-semibold">
                      {isEs ? item.title : item.titleEn}
                    </h4>
                    <p className="font-label-caps text-[11px] sm:text-label-caps text-gris-texto/70 flex items-center gap-1.5 sm:gap-2 uppercase">
                      <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-arena-calida">{item.icon}</span>
                      {isEs ? item.subtitle : item.subtitleEn}
                    </p>
                  </div>
                  {hasGallery && item.gallery && (
                    <span className="font-label-caps text-[9.5px] sm:text-[11px] uppercase tracking-wider text-arena-calida bg-arena-calida/15 px-2.5 sm:px-3 py-1 rounded-full font-semibold flex-shrink-0 ml-2">
                      {item.gallery.length} Vistas
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* DETAILED TECHNICAL FICHA MODAL WITH CAROUSEL */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 bg-black/85 z-50 overflow-y-auto flex justify-center items-start sm:items-center p-3 sm:p-6 md:p-12 backdrop-blur-lg font-sans"
          >
            <motion.div 
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-background text-gris-texto border border-arena-calida/30 rounded-3xl overflow-hidden shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-2.5 rounded-full transition-colors cursor-pointer backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* MEDIA GALLERY CAROUSEL HEADER */}
              <div className="relative bg-zinc-900 overflow-hidden flex-shrink-0">
                {selectedCategory.gallery ? (
                  <div className="relative">
                    {/* Main Active Image Display */}
                    <div className="relative h-[240px] sm:h-[340px] md:h-[460px] w-full overflow-hidden flex items-center justify-center bg-zinc-950">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={modalActiveImgIndex}
                          src={selectedCategory.gallery[modalActiveImgIndex].url}
                          alt={selectedCategory.gallery[modalActiveImgIndex].title}
                          initial={{ opacity: 0.15, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0.15 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent pointer-events-none"></div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalActiveImgIndex((prev) => 
                            prev === 0 ? selectedCategory.gallery!.length - 1 : prev - 1
                          );
                        }}
                        className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white p-2 sm:p-3 rounded-full backdrop-blur-md transition-all cursor-pointer z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalActiveImgIndex((prev) => 
                            (prev + 1) % selectedCategory.gallery!.length
                          );
                        }}
                        className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white p-2 sm:p-3 rounded-full backdrop-blur-md transition-all cursor-pointer z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                      </button>

                      {/* Active Image Title Caption */}
                      <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-8 md:left-10 right-4 z-10 text-left">
                        <span className="bg-teal-uno text-white font-label-caps text-[9px] sm:text-[10px] uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md tracking-widest inline-block mb-1 font-semibold">
                          Foto {modalActiveImgIndex + 1} de {selectedCategory.gallery.length}
                        </span>
                        <h4 className="text-white font-headline-md text-base sm:text-lg md:text-xl uppercase drop-shadow-md font-semibold truncate">
                          {selectedCategory.gallery[modalActiveImgIndex].title}
                        </h4>
                        <p className="text-zinc-200 text-xs md:text-sm font-body-md drop-shadow max-w-xl line-clamp-2 sm:line-clamp-none">
                          {selectedCategory.gallery[modalActiveImgIndex].desc}
                        </p>
                      </div>
                    </div>

                    {/* Thumbnail Selector Bar */}
                    <div className="p-2 sm:p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2 sm:gap-3 overflow-x-auto justify-start items-center">
                      {selectedCategory.gallery.map((img, idx) => {
                        const isSelected = idx === modalActiveImgIndex;
                        return (
                          <button
                            key={idx}
                            onClick={() => setModalActiveImgIndex(idx)}
                            className={`flex-shrink-0 w-16 sm:w-20 md:w-24 h-11 sm:h-14 rounded-lg overflow-hidden transition-all duration-300 relative group cursor-pointer ${
                              isSelected ? "ring-2 ring-teal-uno scale-105 opacity-100" : "opacity-50 hover:opacity-100"
                            }`}
                          >
                            <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent"></div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
                    <img
                      src={selectedCategory.image}
                      alt={isEs ? selectedCategory.title : selectedCategory.titleEn}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20"></div>
                  </div>
                )}
              </div>

              {/* TECHNICAL SHEET CONTENT BODY (SCROLLABLE) */}
              <div className="p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 text-left overflow-y-auto">
                {/* Header Subtitles */}
                <div className="border-b border-arena-calida/20 pb-3 sm:pb-4">
                  <span className="font-label-caps text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-arena-calida font-semibold block mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-arena-calida">{selectedCategory.icon}</span>
                    {isEs ? selectedCategory.subtitle : selectedCategory.subtitleEn}
                  </span>
                  <h3 className="font-headline-xl text-xl sm:text-2xl md:text-3xl font-semibold text-teal-uno uppercase">
                    {selectedCategory.projectHighlight 
                      ? selectedCategory.projectHighlight 
                      : (isEs ? selectedCategory.title : selectedCategory.titleEn)}
                  </h3>
                </div>

                <p className="font-body-md text-gris-texto text-xs sm:text-sm md:text-base leading-relaxed">
                  {isEs ? selectedCategory.descEs : selectedCategory.descEn}
                </p>

                {/* Technical Specs Key Values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-surface-container-low/70 p-4 sm:p-5 rounded-2xl border border-arena-calida/30 text-xs">
                  <div>
                    <span className="text-zinc-500 font-label-caps uppercase block mb-1 font-semibold text-[11px]">
                      {isEs ? "Rango de Superficie:" : "Project Surface Area:"}
                    </span>
                    <span className="text-teal-uno font-semibold text-xs sm:text-sm">{selectedCategory.area}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-label-caps uppercase block mb-1 font-semibold text-[11px]">
                      {isEs ? "Materialidad Principal & Acabados:" : "Core Materials & Finishes:"}
                    </span>
                    <span className="text-teal-uno font-semibold">{selectedCategory.materials}</span>
                  </div>
                </div>

                {/* Reference Projects */}
                <div>
                  <h4 className="font-label-caps text-xs uppercase tracking-wider font-semibold text-teal-uno mb-2.5 sm:mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-arena-calida" />
                    {isEs ? "Proyectos de Referencia en Portafolio:" : "Featured Reference Projects:"}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedCategory.projectsSample.map((proj, idx) => (
                      <span key={idx} className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-surface-container-low rounded-full border border-arena-calida/30 text-[11px] sm:text-xs font-label-caps text-teal-uno font-medium">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical & Construction Criteria List */}
                <div>
                  <h4 className="font-label-caps text-xs uppercase tracking-wider font-semibold text-teal-uno mb-2.5 sm:mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-arena-calida" />
                    {isEs ? "Criterios de Materiales, Ingeniería & Sostenibilidad:" : "Materials, Engineering & Sustainability Criteria:"}
                  </h4>
                  <div className="space-y-2 sm:space-y-2.5">
                    {(isEs ? selectedCategory.specsEs : selectedCategory.specsEn).map((spec, i) => (
                      <div key={i} className="flex gap-2 sm:gap-2.5 items-start text-xs text-gris-texto font-body-md">
                        <CheckCircle2 className="w-4 h-4 text-teal-uno flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      window.dispatchEvent(new CustomEvent("open-ai-chat"));
                    }}
                    className="flex-1 bg-teal-uno hover:bg-arena-calida text-white py-3.5 sm:py-4 px-4 font-label-caps text-xs sm:text-label-caps uppercase tracking-wider rounded-full transition-colors cursor-pointer text-center shadow-ethereal font-semibold"
                  >
                    {isEs ? "Consultar Viabilidad de Proyecto" : "Consult Project Feasibility"}
                  </button>

                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      const el = document.getElementById("contacto");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-teal-uno text-teal-uno hover:bg-teal-uno hover:text-white font-label-caps text-xs sm:text-label-caps uppercase tracking-wider rounded-full transition-colors cursor-pointer text-center font-semibold"
                  >
                    {isEs ? "Agendar Cita Técnica" : "Book Technical Meeting"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
