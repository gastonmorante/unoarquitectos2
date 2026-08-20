import { SiteContent } from "../types/content";

export const defaultContent: SiteContent = {
  hero: {
    taglineEs: "ESTUDIO BOUTIQUE DE ARQUITECTURA & CONSTRUCCIÓN",
    taglineEn: "BOUTIQUE ARCHITECTURE & CONSTRUCTION STUDIO",
    headingEs: "ARQUITECTURA QUE PERTENECE. ESPACIOS QUE PERDURAN.",
    headingEn: "ARCHITECTURE THAT BELONGS. SPACES THAT ENDURE.",
    subheadingEs: "Materializamos espacios que suman — a quien los habita, a quien los construye, al lugar que los recibe y a la comunidad que los rodea.",
    subheadingEn: "We craft spaces that elevate — those who inhabit them, those who build them, the land that welcomes them, and the community that surrounds them.",
    ctaTextEs: "EXPLORAR OBRAS",
    ctaTextEn: "EXPLORE WORKS"
  },
  filosofia: {
    quoteEs: "Diseñamos con rigor técnico, sofisticación contenida y materiales honestos. Creemos en una arquitectura que responde al clima, a la luz y a la geología de la selva maya.",
    quoteEn: "We design with technical rigor, restrained sophistication, and honest materials. We believe in architecture responsive to climate, light, and Mayan jungle geology.",
    author: "Arq. Angel Cereceda",
    authorRole: "Fundador & Director General",
    directorBioEs: "Más de 20 años de experiencia liderando desarrollo inmobiliario y gestión integral de obras de alta gama. Máster en Project Management por la Universidad Europea de Madrid, Máster en Desarrollo Sostenible y ex Director Técnico en obras emblemáticas como Papaya Playa Project e Inmobilia Mayaliah 25,000 m².",
    directorBioEn: "Over 20 years leading luxury real estate developments. Master in Project Management (Universidad Europea de Madrid), Master in Sustainable Development, and former Technical Director in landmark projects including Papaya Playa Project and Inmobilia Mayaliah 25,000 m².",
    pillarsEs: [
      {
        title: "Pertenencia y Sitio",
        desc: "Cada trazo respeta la topografía natural, la orientación de los vientos dominantes y el estrato de roca kárstica."
      },
      {
        title: "Honestidad Constructiva",
        desc: "Materiales nobles como el Chukum natural, maderas duras de Tzalam y Zapote, y concreto aparente."
      },
      {
        title: "Certeza Técnica & Llave en Mano",
        desc: "Diseñamos lo que podemos construir. Presupuestos paramétricos y supervisión directa de principio a fin."
      }
    ],
    pillarsEn: [
      {
        title: "Belonging & Site",
        desc: "Every line respects natural topography, prevailing trade winds, and the karstic bedrock."
      },
      {
        title: "Constructive Honesty",
        desc: "Noble materials including natural Chukum, dense Tzalam and Zapote hardwoods, and architectural concrete."
      },
      {
        title: "Technical Certitude & Turnkey",
        desc: "We design what we can build. Parametric budgets and direct hands-on execution from inception to completion."
      }
    ]
  },
  metrics: {
    ratingValue: "5.0",
    reviewCount: "28",
    googleMapsUrl: "https://maps.app.goo.gl/vy12S6chkTnkjuG96",
    items: [
      {
        id: "metric-1",
        value: "20+",
        labelEs: "Años de Trayectoria Directiva",
        labelEn: "Years of Executive Experience"
      },
      {
        id: "metric-2",
        value: "45+",
        labelEs: "Proyectos Entregados",
        labelEn: "Delivered Projects"
      },
      {
        id: "metric-3",
        value: "100%",
        labelEs: "Certeza Presupuestal & Técnica",
        labelEn: "Budget & Technical Certitude"
      },
      {
        id: "metric-4",
        value: "360°",
        labelEs: "Acompañamiento Llave en Mano",
        labelEn: "Turnkey Project Direction"
      }
    ]
  },
  categories: [
    {
      id: "residenciales",
      title: "RESIDENCIALES",
      titleEn: "RESIDENTIAL",
      subtitle: "HABITAT Y SOFISTICACIÓN",
      subtitleEn: "HABITAT & SOPHISTICATION",
      icon: "home",
      image: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
      badge: "Alux & 7 Cielos",
      gallery: [
        {
          id: "res-1",
          url: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
          title: "Alberca & Jacuzzi Frente al Mar Caribe (7 Cielos)",
          desc: "Muros y alberca con acabado continuo de Chukum natural pulido, pérgola en madera de Tzalam, cancelería marina y vista directa al mar turquesa."
        },
        {
          id: "res-2",
          url: "/projects/residencial/alux-7cielos-master-jungle-view.jpg",
          title: "Master Suite con Cabecera Monumental (7 Cielos)",
          desc: "Cabecera de piso a techo con capitoné acolchado en tono arena, cama plataforma de Tzalam y cancel corredizo con balcón hacia la copa de los árboles."
        },
        {
          id: "res-3",
          url: "/projects/residencial/alux-7cielos-chukum-suite.jpg",
          title: "Recámara Doble en Microcemento & Rattán (Alux)",
          desc: "Muros en estuco mineral texturizado gris piedra para inercia térmica, cabeceros de rattán, luminarias colgantes cálidas y ventanales a la selva."
        },
        {
          id: "res-4",
          url: "/projects/residencial/alux-7cielos-studio-parota.jpg",
          title: "Studio & Comedor en Madera de Parota (Alux)",
          desc: "Pisos y muros en microcemento pulido continuo, carpintería integral de piso a techo en Parota sólida, mesa de tronco vivo y lámpara de cobre."
        },
        {
          id: "res-5",
          url: "/projects/residencial/alux-7cielos-living-open.jpg",
          title: "Gran Salón & Comedor Open-Concept (Alux)",
          desc: "Espacio diáfano sin columnas intermedias, piso de porcelanato gran formato brillante, lámpara escultórica de cristal soplado y comedor en Parota."
        }
      ],
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
      gallery: [
        {
          id: "com-1",
          url: "/projects/lavazza/lavazza-facade.jpg",
          title: "Fachada Principal & Acceso",
          desc: "Friso superior en azul corporativo con volumetría 3D 'Lavazza Torino 1895', iluminación lineal empotrada y mobiliario bistró."
        },
        {
          id: "com-2",
          url: "/projects/lavazza/lavazza-counter-detail.jpg",
          title: "Barra Barista & Detalle Material",
          desc: "Barra entablada en duelas de roble, cubierta blanca continua, máquina de espresso Rancilio y hornacina con cerámica artesanal."
        },
        {
          id: "com-3",
          url: "/projects/lavazza/lavazza-interior.jpg",
          title: "Salón Gourmet & Iluminación",
          desc: "Muros en estuco mineral cálido, luminarias colgantes en latón satinado, rieles lineales y cuadros de autor con historia italiana."
        },
        {
          id: "com-4",
          url: "/projects/lavazza/lavazza-kiosk-terrace.jpg",
          title: "Kiosko & Terraza Exterior",
          desc: "Pabellón abierto con cerramiento plegable de seguridad, sombrillas arquitectónicas, vitrina refrigerada y muro vegetal."
        }
      ],
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
      gallery: [
        {
          id: "hosp-1",
          url: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
          title: "Santuario Holístico & Arcos Escultóricos (Papaya Playa Project)",
          desc: "Bóvedas catenarias monumentales esculpidas en ferrocemento y Chukum, columnas envueltas en bejuco regional y celosía suspendida de cuerdas de henequén."
        },
        {
          id: "hosp-2",
          url: "/projects/hospitalidad/hospitalidad-domo-organico.jpg",
          title: "Domo Bioclimático & Cápsula Escultórica (Papaya Playa Project)",
          desc: "Estructura biomórfica de doble curvatura con acabado en estuco de cal hidráulica, ventanales elípticos en madera de Parota y techumbre de zacate."
        },
        {
          id: "hosp-3",
          url: "/projects/hospitalidad/hospitalidad-suite-mirador.jpg",
          title: "Suite Mirador & Treetop Sanctuary (Papaya Playa Project)",
          desc: "Bóveda interior trenzada en costillaje de bejuco, duela ancha de madera tropical tratada, miradores elípticos y luz dorada al atardecer."
        },
        {
          id: "hosp-4",
          url: "/projects/hospitalidad/hospitalidad-sendero-selva.jpg",
          title: "Pasarela Elevada entre el Dosel Selvático (Papaya Playa Project)",
          desc: "Sendero sinuoso sobre pilotes de bajo impacto en madera dura de Zapote/Tzalam que preserva el manto freático y flora endémica."
        }
      ],
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
      gallery: [
        {
          id: "off-1",
          url: "/projects/offgrid/offgrid-villa-cenote.jpg",
          title: "Villa Cenote & Volumetría en Tapial y Piedra (Santuario Ka'an)",
          desc: "Residencia 100% autosuficiente en la selva de Tulum. Muros monolíticos de tierra compactada (tapial), plataforma volada en Tzalam y cenote plunge pool."
        },
        {
          id: "off-2",
          url: "/projects/offgrid/offgrid-pabellon-living.jpg",
          title: "Pabellón Social Open-Concept & Ventanales Pocket (Santuario Ka'an)",
          desc: "Conexión interior-exterior total sin cristales divisorios fijos, mobiliario en maderas endémicas recuperadas y ventilación cruzada pasiva permanente."
        },
        {
          id: "off-3",
          url: "/projects/offgrid/offgrid-rooftop-solar.jpg",
          title: "Pérgola Solar & Mirador sobre el Dosel Selvático (Santuario Ka'an)",
          desc: "Terraza panorámica 360° con pérgola fotovoltaica de paneles bifaciales semi-translúcidos, lounge exterior y tina de inmersión en Chukum."
        },
        {
          id: "off-4",
          url: "/projects/offgrid/offgrid-suite-tulum.jpg",
          title: "Master Suite Bioclimática & Muros de Tierra (Santuario Ka'an)",
          desc: "Suite principal inmersa en la fronda selvática, muros de alta inercia térmica en tapial y microcemento, cancelería esquinera sin postes y textiles de lino."
        }
      ],
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
        "Zero noise emission and preservation of 92% of original native trees on the jungle plot"
      ]
    }
  ],
  faqs: [
    {
      id: "faq-1",
      category: "general",
      question: {
        es: "¿Qué hace exactamente UNO Arquitectos?",
        en: "What exactly does UNO Arquitectos do?"
      },
      answer: {
        es: "UNO Arquitectos es un estudio boutique de arquitectura, interiorismo y construcción con base en la Riviera Maya. Acompañamos proyectos residenciales, comerciales, turísticos y boutique desde la idea inicial hasta su ejecución, integrando diseño, planeación, presupuesto, coordinación y obra bajo una visión clara, humana y construible.",
        en: "UNO Arquitectos is a boutique architecture, interior design, and construction studio based in the Riviera Maya. We accompany residential, commercial, and boutique hospitality projects from initial concept through completion, integrating design, planning, budgeting, coordination, and building under a clear, human, and buildable vision."
      }
    },
    {
      id: "faq-2",
      category: "general",
      question: {
        es: "¿Qué tipo de proyectos realizan?",
        en: "What types of projects do you handle?"
      },
      answer: {
        es: "Trabajamos principalmente en proyectos residenciales, boutique hospitality, comerciales y usos mixtos. Podemos participar en obra nueva, remodelación, ampliación, interiorismo, ejecución comercial y acompañamiento integral de proyectos que requieren orden, criterio técnico y una buena experiencia de proceso.",
        en: "We work primarily on residential, boutique hospitality, commercial, and mixed-use projects. We participate in new builds, renovations, expansions, interior design, commercial execution, and comprehensive project direction requiring technical criteria and transparent process management."
      }
    },
    {
      id: "faq-3",
      category: "general",
      question: {
        es: "¿Trabajan solo en Riviera Maya?",
        en: "Do you work only in the Riviera Maya?"
      },
      answer: {
        es: "Nuestra base está en Playa del Carmen y la Riviera Maya, donde concentramos buena parte de nuestra operación. Sin embargo, también hemos participado en proyectos en otros contextos cuando el perfil del proyecto, el alcance y la estructura operativa lo hacen viable.",
        en: "Our main base is in Playa del Carmen and the Riviera Maya, where most of our operations are concentrated. However, we also take on projects in other locations when the scope, project profile, and operational structure align."
      }
    },
    {
      id: "faq-4",
      category: "general",
      question: {
        es: "¿Cómo abordan la relación entre diseño y presupuesto?",
        en: "How do you balance design with budget?"
      },
      answer: {
        es: "Diseño y presupuesto no deben ir separados. Desde las primeras etapas evaluamos proporciones, volumetrías, materiales y sistemas constructivos para que la propuesta mantenga coherencia estética y financiera, evitando proyectos espectaculares pero inviables.",
        en: "Design and budget should never be disconnected. From early stages we evaluate proportions, massing, materials, and structural systems to ensure aesthetic and financial coherence, avoiding spectacular designs that prove buildably unfeasible."
      }
    },
    {
      id: "faq-5",
      category: "services",
      question: {
        es: "¿Cómo funciona el servicio Llave en Mano?",
        en: "How does the Turnkey service work?"
      },
      answer: {
        es: "Bajo la modalidad Llave en Mano asumimos la responsabilidad integral del proyecto: diseño conceptual, proyecto ejecutivo, ingenierías, tramitología, catálogo de conceptos, administración de recursos, dirección de obra y entrega final.",
        en: "Under our Turnkey model, we assume end-to-end responsibility: conceptual design, executive blueprints, MEP engineering, permitting, concept catalog, procurement, site management, and final handover."
      }
    }
  ],
  contact: {
    officePlayaTitle: "Oficinas Centrales",
    officePlayaAddr: "Plaza Palmeras, Playa del Carmen, Q. Roo",
    officePlayaMapUrl: "https://maps.app.goo.gl/vy12S6chkTnkjuG96",
    tallerTulumTitle: "Taller & Bodega",
    tallerTulumAddr: "Carretera Tulum – Macario Gómez, Q. Roo",
    phone: "+52 1 984 210 8420",
    whatsapp: "+52 1 984 210 8420",
    email: "hola@unoarquitectos.com",
    workHoursEs: "Lunes a Viernes: 9:00 - 18:00 hrs",
    workHoursEn: "Monday to Friday: 9:00 AM - 6:00 PM"
  }
};
