import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-construccion-terreno-karstico-tulum",
    category: "ingenieria",
    categoryLabel: {
      es: "Ingeniería Geotécnica",
      en: "Geotechnical Engineering",
      fr: "Ingénierie Géotechnique",
      it: "Ingegneria Geotecnica"
    },
    title: {
      es: "Guía de Ingeniería: Cómo Construir sobre Suelo Kárstico y Cenotes en Tulum",
      en: "Engineering Guide: Building on Karstic Soil and Subterranean Cenotes in Tulum",
      fr: "Guide d'Ingénierie : Construire sur Sol Karstique et Cénotes à Tulum",
      it: "Guida di Ingegneria: Costruire su Terreno Carsico e Cenote a Tulum"
    },
    excerpt: {
      es: "Descubre los métodos geotécnicos de cimentación profunda con micropilotes, análisis de cavernas freáticas y cálculo estructural sismorresistente para edificar en la selva de Tulum sin riesgo de hundimiento.",
      en: "Discover geotechnical deep micro-piling methods, subterranean water table mapping, and earthquake-resistant structural calculations for building safely in the Tulum jungle.",
      fr: "Découvrez les méthodes de micro-pieux profonds, l'analyse des cavités karstiques et les calculs parasismiques pour bâtir en toute sécurité dans la jungle de Tulum.",
      it: "Scopri i metodi di micropali profondi, l'analisi delle cavità carsiche e i calcoli antisismici per costruire in sicurezza nella giungla di Tulum."
    },
    coverImage: "/projects/offgrid/offgrid-villa-cenote.jpg",
    publishDate: "2026-08-15",
    readTime: "7 min",
    author: {
      name: "Arq. Angel Cereceda",
      role: "Fundador & Director de Proyectos UNO Arquitectos",
      avatar: "/hero-luxury-villa.webp"
    },
    tags: ["Suelo Kárstico", "Cimentaciones Tulum", "Cenotes", "Ingeniería Estructural", "Mecánica de Suelos"],
    content: {
      es: {
        intro: "El subsuelo de la península de Yucatán y en particular de Tulum está compuesto por roca caliza porosa atravesada por una de las redes de ríos subterráneos y cenotes más extensas del planeta. Construir en este entorno requiere un entendimiento geotécnico avanzado para garantizar la integridad estructural y preservar el manto freático.",
        sections: [
          {
            heading: "1. La Geología Kárstica y los Riesgos de Cavidades Ocultas",
            body: [
              "La roca caliza de la Riviera Maya sufre una disolución química constante por la acción del agua de lluvia ácida y los flujos subterráneos. Esto genera oquedades, cavernas y cenotes que pueden estar ocultos a solo unos pocos metros bajo la superficie.",
              "Construir con cimentaciones superficiales estándar (zapatas aisladas o losas corridas sin estudio previo) representa un riesgo crítico de asentamientos diferenciales e incluso colapsos catastróficos."
            ],
            quote: "Un proyecto exitoso en Tulum no lucha contra la geología kárstica; se ancla en ella con precisión milimétrica."
          },
          {
            heading: "2. Estudios Geofísicos Obligatorios: Tomografía de Resistividad Eléctrica",
            body: [
              "Antes de trazar el primer eje del proyecto ejecutivo, realizamos sondeos mecánicos y Tomografías de Resistividad Eléctrica (TRE) en dos y tres dimensiones.",
              "Esta técnica no invasiva mapea la resistividad del subsuelo hasta 30 metros de profundidad, detectando con exactitud si existen cavernas, vacíos kársticos o corrientes activas debajo de la huella de construcción."
            ]
          },
          {
            heading: "3. Soluciones Estructurales: Micropilotes y Losas de Transición",
            body: [
              "Cuando se detecta roca firme a profundidades variables, la solución óptima consiste en un sistema de micropilotes hincados en roca competente combinados con contratrabes de concreto armado de gran peralte.",
              "Esto permite transmitir las cargas dinámicas del edificio hacia estratos estables, dejando puentes estructurales que protegen los techos de cavernas naturales sin perturbar el flujo hidrológico."
            ]
          }
        ],
        conclusion: "En UNO Arquitectos integramos el cálculo estructural geotécnico desde la etapa conceptual, asegurando que su residencia o desarrollo boutique cuente con total certidumbre constructiva, seguro decenal y respeto al ecosistema maya."
      },
      en: {
        intro: "The subsoil of the Yucatan Peninsula and Tulum specifically consists of porous limestone traversed by the world's largest underground river and cenote systems. Building in this environment requires advanced geotechnical expertise to guarantee structural longevity and protect natural waterways.",
        sections: [
          {
            heading: "1. Karstic Geology and Subterranean Cave Risks",
            body: [
              "Limestone in the Riviera Maya is subject to continuous chemical dissolution from rainwater and subterranean aquifers, creating hidden karst cavities and caverns.",
              "Relying on generic shallow footings without deep soil mechanics creates severe risks of differential settlement and catastrophic failure."
            ],
            quote: "A successful project in Tulum does not fight karstic geology; it anchors into competent bedrock with surgical precision."
          },
          {
            heading: "2. Geophysical Electrical Resistivity Tomography (ERT)",
            body: [
              "Before structural drawings begin, our engineering team deploys 2D and 3D Electrical Resistivity Tomography (ERT).",
              "This non-destructive methodology maps subsoil resistivity down to 30 meters, revealing subterranean voids, water tables, and bedrock strata."
            ]
          },
          {
            heading: "3. Deep Micro-Piling and Reinforced Grade Beams",
            body: [
              "Where competent rock is deep or irregular, we implement steel-reinforced concrete micro-piles socketed into bedrock, tied together with rigid grade beams.",
              "This bridges structural loads safely over sensitive geological formations while maintaining natural aquifer flow."
            ]
          }
        ],
        conclusion: "At UNO Arquitectos, structural and geotechnical engineering are embedded from day one, providing total investor certainty and environmental compliance across Tulum and Quintana Roo."
      },
      fr: {
        intro: "Le sous-sol de Tulum est composé de calcaire poreux traversé par le plus grand réseau de rivières souterraines au monde. Bâtir dans cet écosystème exige une rigueur géotechnique absolue.",
        sections: [
          {
            heading: "1. La Géologie Karstique et les Cavités Secrètes",
            body: [
              "La roche calcaire se dissout continuellement sous l'action de l'eau, formant des cavités souterraines qui peuvent compromettre les fondations traditionnelles.",
              "Une étude de sol approfondie est indispensable pour éviter tout affaissement différentiel."
            ],
            quote: "Un projet réussi à Tulum s'ancre dans la roche avec une précision chirurgicale."
          },
          {
            heading: "2. Tomographie de Résistivité Électrique (ERT)",
            body: [
              "Nous effectuons des tomographies géophysiques pour cartographier le sous-sol jusqu'à 30 mètres de profondeur avant toute construction."
            ]
          },
          {
            heading: "3. Fondations sur Micro-Pieux et Poutres de Rigidité",
            body: [
              "L'ancrage sur micro-pieux en béton armé transfère les charges vers la roche solide, préservant ainsi les cours d'eau souterrains."
            ]
          }
        ],
        conclusion: "UNO Arquitectos intègre l'ingénierie parasismique et géotechnique dès la phase conceptuelle pour une sécurité totale de vos investissements à Tulum."
      },
      it: {
        intro: "Il sottosuolo di Tulum è formato da calcare poroso attraversato da fiumi sotterranei e cenote. Costruire qui richiede un'ingegneria geotecnica d'avanguardia per garantire stabilità e rispetto ambientale.",
        sections: [
          {
            heading: "1. Geologia Carsica e Rischi Strutturali",
            body: [
              "La dissoluzione chimica del calcare crea cavità sotterranee che richiedono fondazioni speciali."
            ],
            quote: "Costruire a Tulum significa dialogare con la geologia carsica con assoluta precisione."
          },
          {
            heading: "2. Tomografia Geoelettrica (ERT)",
            body: [
              "Mappiamo il sottosuolo fino a 30 metri di profondità per individuare qualsiasi vuoto prima di gettare le fondazioni."
            ]
          },
          {
            heading: "3. Micropali e Travi di Collegamento",
            body: [
              "I micropali ancorati alla roccia portante assicurano stabilità sismica e proteggono i flussi idrici sotterranei."
            ]
          }
        ],
        conclusion: "UNO Arquitectos garantisce certezza tecnica, sicurezza antisismica e sostenibilità per le vostre residenze a Tulum e Riviera Maya."
      }
    }
  },
  {
    slug: "acabado-chukum-arquitectura-bioclimatica-tropical",
    category: "materiales",
    categoryLabel: {
      es: "Materiales Nobles",
      en: "Noble Materials",
      fr: "Matériaux Nobles",
      it: "Materiali Nobili"
    },
    title: {
      es: "El Acabado en Chukum: Propiedades Térmicas, Aplicación y Mantenimiento en Clima Tropical",
      en: "Natural Chukum Plaster: Thermal Properties, Application, and Maintenance in Tropical Climates",
      fr: "Le Chukum Naturel : Propriétés Thermiques, Application et Entretien sous Climat Tropical",
      it: "L'Intonaco in Chukum: Proprietà Termiche, Applicazione e Manutenzione nel Clima Tropicale"
    },
    excerpt: {
      es: "Guía técnica completa sobre el estuco maya de Chukum: formulación con resina de árbol Havardia albicans, impermeabilidad natural para albercas y reducción de temperatura interior de hasta 4°C.",
      en: "Complete architectural guide on Mayan Chukum plaster: resin extraction, natural waterproofing for pools, and passive indoor cooling by up to 4°C.",
      fr: "Guide architectural complet sur le stuc maya Chukum : résine naturelle, étanchéité pour piscines et réduction thermique passive jusqu'à 4°C.",
      it: "Guida architettonica all'intonaco Chukum: resina naturale, impermeabilità per piscine e riduzione termica passiva fino a 4°C."
    },
    coverImage: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
    publishDate: "2026-08-28",
    readTime: "6 min",
    author: {
      name: "Arq. Angel Cereceda",
      role: "Fundador & Director de Proyectos UNO Arquitectos",
      avatar: "/hero-luxury-villa.webp"
    },
    tags: ["Chukum Natural", "Acabados de Lujo", "Arquitectura Bioclimática", "Albercas Chukum", "Materiales Mayas"],
    content: {
      es: {
        intro: "El Chukum es uno de los legados materiales más fascinantes de la civilización maya. Este estuco natural, obtenido a partir de la cocción de la corteza del árbol endémico Havardia albicans mezclada con polvo de piedra caliza y agua de cal, ofrece una calidez sensorial inigualable y propiedades termorreguladoras excepcionales.",
        sections: [
          {
            heading: "1. Propiedades Bioclimáticas: Inercia y Reducción Térmica",
            body: [
              "A diferencia de las pinturas acrílicas sintéticas o estucos comerciales que sellan los muros impidiendo la transpiración, el Chukum es un material mineral microporoso.",
              "En la Riviera Maya, donde la humedad relativa supera el 80% y las temperaturas alcanzan los 36°C, los muros revestidos en Chukum absorben el calor diurno y lo liberan lentamente por la noche, reduciendo la temperatura interior entre 3°C y 4°C de manera 100% pasiva."
            ],
            quote: "El Chukum no es solo un acabado estético; es un sistema de climatización pasiva con 1,000 años de historia probada."
          },
          {
            heading: "2. Aplicación en Albercas e Impermeabilidad Natural",
            body: [
              "Los taninos naturales y resinas de la corteza del Chukum reaccionan con la cal creando una matriz hidrófuga que repele el agua sin necesidad de químicos sintéticos.",
              "En albercas y jacuzzis, el Chukum otorga al agua un tono verde esmeralda y turquesa idéntico al de los cenotes sagrados, con una textura suave al tacto y sin juntas propensas a la formación de hongos."
            ]
          },
          {
            heading: "3. Protocolo de Curado y Mantenimiento",
            body: [
              "El éxito del Chukum radica en la mano de obra artesanal y el proceso de bruñido con piedra de río. Durante los primeros 14 días posteriores a la aplicación, se requiere un protocolo estricto de hidratación para evitar microfisuras por contracción plástica.",
              "Con el paso del tiempo, el Chukum desarrolla una pátina natural que envejece con dignidad, ganando carácter mineral."
            ]
          }
        ],
        conclusion: "En UNO Arquitectos combinamos la técnica artesanal de maestros chukumeros locales con la precisión constructiva contemporánea, garantizando acabados impecables y duraderos en cada residencia."
      },
      en: {
        intro: "Chukum is one of the most remarkable material legacies of Mayan architecture. Produced by boiling the bark of the endemic Havardia albicans tree and mixing it with limestone dust and slaked lime, it creates a tactile mineral surface with exceptional passive cooling qualities.",
        sections: [
          {
            heading: "1. Bioclimatic Properties and Passive Thermal Mass",
            body: [
              "Unlike synthetic acrylic paints that trap moisture, Chukum is a breathable mineral plaster.",
              "In the tropical humidity of the Riviera Maya, Chukum walls actively regulate interior humidity and lower ambient temperatures by 3°C to 4°C passively."
            ],
            quote: "Chukum is not just a luxury finish; it is a 1,000-year-old passive cooling system perfected for the Caribbean climate."
          },
          {
            heading: "2. Natural Waterproofing for Pools and Spas",
            body: [
              "The natural tannins and resins create an organic waterproof matrix.",
              "In swimming pools and plunge spas, Chukum reflects sunlight to create the enchanting emerald and turquoise tones characteristic of virgin cenotes."
            ]
          },
          {
            heading: "3. Curing Protocol and Long-Term Durability",
            body: [
              "Master craftsmen polish the wet plaster using smooth river stones. A strict 14-day hydration protocol prevents shrinkage micro-fissures, allowing the surface to age gracefully into a timeless mineral patina."
            ]
          }
        ],
        conclusion: "At UNO Arquitectos, we combine ancient artisan traditions with cutting-edge construction standards to create architectural masterpieces in Tulum and the Riviera Maya."
      },
      fr: {
        intro: "Le Chukum est un enduit naturel maya élaboré à partir de l'écorce de l'arbre Havardia albicans et de calcaire. Il confère aux espaces une texture minérale chaleureuse et des qualités thermiques uniques.",
        sections: [
          {
            heading: "1. Confort Bioclimatique et Rafraîchissement Naturel",
            body: [
              "Le Chukum respire naturellement et abaisse la température intérieure de 3 à 4°C dans les climats tropicaux humides."
            ],
            quote: "Le Chukum est un système millénaire de climatisation passive et d'élégance intemporelle."
          },
          {
            heading: "2. Étanchéité pour Piscines et Teinte Émeraude",
            body: [
              "Les résines naturelles rendent l'enduit imperméable, conférant aux piscines la couleur turquoise légendaire des cénotes."
            ]
          }
        ],
        conclusion: "UNO Arquitectos sublime vos projets avec l'application experte du Chukum artisanal."
      },
      it: {
        intro: "Il Chukum è un antico intonaco maya derivato dalla corteccia dell'albero Havardia albicans unita a calce viva e polvere di calcare.",
        sections: [
          {
            heading: "1. Proprietà Termiche e Traspirabilità",
            body: [
              "Riduce la temperatura interna fino a 4°C e regola l'umidità in modo completamente naturale."
            ],
            quote: "Un connubio perfetto tra artigianato millenario ed eleganza tropicale contemporanea."
          },
          {
            heading: "2. Piscine Effetto Cenote",
            body: [
              "L'impermeabilità naturale dona all'acqua splendidi riflessi verde smeraldo senza l'uso di resine sintetiche."
            ]
          }
        ],
        conclusion: "UNO Arquitectos realizza finiture esclusive in Chukum per residenze di prestigio in Riviera Maya."
      }
    }
  },
  {
    slug: "arquitectura-llave-en-mano-riviera-maya-guia-inversionistas",
    category: "inversion",
    categoryLabel: {
      es: "Inversión & Gestión",
      en: "Investment & Management",
      fr: "Investissement & Gestion",
      it: "Investimenti & Gestione"
    },
    title: {
      es: "Construcción Llave en Mano en la Riviera Maya: Control de Costos y Certeza Legal para Inversionistas",
      en: "Turnkey Construction in Riviera Maya: Cost Control and Legal Certainty for Real Estate Investors",
      fr: "Construction Clés en Main dans la Riviera Maya : Maîtrise des Coûts et Sécurité Juridique",
      it: "Costruzioni Chiavi in Mano in Riviera Maya: Controllo dei Costi e Certezza Legale per Investitori"
    },
    excerpt: {
      es: "Cómo estructurar un contrato de construcción llave en mano en Tulum y Playa del Carmen: presupuestos paramétricos cerrados, supervisión 360° remota y gestión de licencias municipales.",
      en: "How to structure a turnkey design-build contract in Tulum and Playa del Carmen: fixed parametric budgeting, 360° remote supervision, and municipal environmental permitting.",
      fr: "Comment sécuriser un contrat de construction clés en main à Tulum et Playa del Carmen : budgets fermes, suivi 360° à distance et permis municipaux.",
      it: "Come strutturare un contratto chiavi in mano a Tulum e Playa del Carmen: budget parametrati certi, supervisione remota 360° e licenze edilizie."
    },
    coverImage: "/hero-luxury-villa.webp",
    publishDate: "2026-09-02",
    readTime: "8 min",
    author: {
      name: "Arq. Angel Cereceda",
      role: "Fundador & Director de Proyectos UNO Arquitectos",
      avatar: "/hero-luxury-villa.webp"
    },
    tags: ["Construcción Llave en Mano", "Inversión Inmobiliaria", "Presupuestos de Obra", "Tulum", "Playa del Carmen"],
    content: {
      es: {
        intro: "Invertir en el mercado inmobiliario de la Riviera Maya ofrece atractivos rendimientos de plusvalía y rentas vacacionales. Sin embargo, desarrollar a distancia sin una dirección técnica unificada suele derivar en sobrecostos imprevistos, retrasos en licencias y desviaciones de calidad. El modelo 'Llave en Mano' de UNO Arquitectos elimina estos riesgos.",
        sections: [
          {
            heading: "1. La Ventaja del Modelo de Responsabilidad Única",
            body: [
              "Cuando un inversionista contrata a un arquitecto por separado del constructor y de los ingenieros, cualquier discrepancia en planos o costos genera conflictos cruzados y sobrecostos.",
              "En el modelo Llave en Mano (Design-Build), UNO Arquitectos asume la responsabilidad integral: desde la conceptualización arquitectónica y el cálculo estructural, hasta la tramitación de licencias municipales y la entrega final amueblada y lista para operar."
            ],
            quote: "Un solo interlocutor, un presupuesto transparente y un cronograma contractual garantizado."
          },
          {
            heading: "2. Presupuestos Paramétricos Transparentes vs. Estimaciones Imprecisas",
            body: [
              "Desarrollamos catálogos de conceptos con precios unitarios reales para la zona de Quintana Roo, considerando la logística de transporte hacia Tulum, mano de obra local calificada y especificaciones de alta gama.",
              "Esto protege el capital del cliente contra la inflación de materiales y variaciones imprevistas durante los 8 a 14 meses de ejecución de obra."
            ]
          },
          {
            heading: "3. Trazabilidad Digital y Supervisión 360° para Clientes a Distancia",
            body: [
              "A través de nuestro Portal Privado de Clientes, los inversionistas pueden monitorear el avance semanal mediante recorridos virtuales 360°, comparativas de antes y después, reportes fotográficos de alta resolución y estados financieros en tiempo real desde cualquier parte del mundo."
            ]
          }
        ],
        conclusion: "Con más de 20 años de trayectoria y más de 70 proyectos entregados en Quintana Roo, UNO Arquitectos es su socio estratégico para materializar proyectos residenciales y boutique de alto rendimiento."
      },
      en: {
        intro: "Investing in the Riviera Maya real estate market yields exceptional ROI and capital appreciation. However, managing construction from abroad without single-source accountability frequently leads to cost overruns and permitting delays. UNO Arquitectos' turnkey model delivers total financial and execution certainty.",
        sections: [
          {
            heading: "1. The Single-Source Accountability Advantage",
            body: [
              "Splitting architects, engineers, and general contractors often results in finger-pointing and unexpected change orders.",
              "Under our Design-Build Turnkey model, UNO Arquitectos coordinates every phase: architectural concept, seismic structural engineering, environmental permitting, and complete construction through final handover."
            ],
            quote: "One dedicated partner, transparent fixed pricing, and contractual timeline guarantees."
          },
          {
            heading: "2. Parametric Cost Certainty",
            body: [
              "We provide comprehensive bill-of-quantities based on genuine Quintana Roo market rates, protecting your investment from cost surprises throughout the 8 to 14-month build timeline."
            ]
          },
          {
            heading: "3. Remote 360° Supervision Portal",
            body: [
              "Our dedicated Client Portal gives international investors real-time access to 360° interactive jobsite scans, high-resolution photo progress reports, and milestone tracking from anywhere in the world."
            ]
          }
        ],
        conclusion: "With 20+ years of proven track record in Quintana Roo, UNO Arquitectos is your trusted partner for high-yield boutique architecture and luxury residential construction."
      },
      fr: {
        intro: "Investir dans la Riviera Maya exige une gestion rigoureuse. Le modèle clés en main d'UNO Arquitectos offre une transparence totale et une maîtrise absolue des coûts pour les investisseurs internationaux.",
        sections: [
          {
            heading: "1. Responsabilité Unique et Maîtrise des Délais",
            body: [
              "Nous prenons en charge la totalité du processus : de l'architecture aux permis de construire jusqu'à la livraison finale."
            ],
            quote: "Un interlocuteur unique et un budget garanti du premier jour à la remise des clés."
          },
          {
            heading: "2. Suivi de Chantier 360° en Ligne",
            body: [
              "Notre portail client vous permet de suivre l'avancement des travaux chaque semaine grâce à des visites virtuelles immersives 360°."
            ]
          }
        ],
        conclusion: "Faites confiance à plus de 20 ans d'expertise pour concrétiser votre villa ou projet boutique au Mexique."
      },
      it: {
        intro: "Investire in Riviera Maya con il modello chiavi in mano garantisce controllo del budget, rapidità nei permessi e qualità costruttiva impeccabile per investitori internazionali.",
        sections: [
          {
            heading: "1. Unico Referente per Progettazione e Costruzione",
            body: [
              "Dalla progettazione esecutiva alla consegna dell'immobile, un solo studio gestisce ogni aspetto tecnico e legale."
            ],
            quote: "Certezza dei costi, cronoprogramma rispettato e massima qualità dei materiali."
          },
          {
            heading: "2. Portale Clienti con Visori 360°",
            body: [
              "Controlla lo stato dei lavori in tempo reale ovunque ti trovi con tour virtuali 360° ad alta risoluzione."
            ]
          }
        ],
        conclusion: "UNO Arquitectos è il partner di fiducia per costruire la tua residenza esclusiva a Tulum e Playa del Carmen."
      }
    }
  }
];
