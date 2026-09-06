import { ClientProject } from "../types/clientPortal";

export const defaultClientProjects: ClientProject[] = [
  {
    id: "arrecifes",
    propertyName: "Arrecifes",
    accessCode: "unoarq",
    clientName: "Familia Propietaria / Residencia Arrecifes",
    location: "Playa del Carmen, Riviera Maya, Q. Roo",
    typology: "Residencia de Lujo Tropical Contemporánea Frente al Mar",
    totalArea: "720 m² de Construcción & Terrazas Voladas",
    startDate: "01 Agosto 2026",
    estimatedDelivery: "20 Diciembre 2026",
    globalProgress: 68,
    currentPhaseName: "Fase 4: Revestimientos en Chukum & Mármol Travertino",
    heroImage: "/hero-luxury-villa.webp",
    director: {
      name: "Arq. Angel Cereceda",
      role: "Director General & Supervisión Técnica",
      credentials: "Máster Project Management UEM | 20+ años de experiencia",
      phone: "+52 1 984 210 8420",
      email: "direccion@unoarquitectos.com",
      whatsapp: "5219842108420",
      photo: "/projects/residencial/alux-7cielos-master-jungle-view.jpg"
    },
    cloudpanoTours: [
      {
        id: "tour-arrecifes-05sep2026",
        date: "05 Septiembre 2026",
        title: "Avance 68% - Revestimientos Sensoriales en Chukum & Mármol (Más Reciente)",
        phaseName: "Fase 4: Revestimientos y Acabados de Lujo",
        progress: 68,
        embedCode: '<div id="yU6zyUhkj"><script type="text/javascript" async data-short="yU6zyUhkj" data-path="tours" data-is-self-hosted="false" width="100%" height="500px" src="https://app.cloudpano.com/public/shareScript.js"></script></div>',
        folderUrl: "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing",
        notes: "Levantamiento 360° más reciente tras culminación de pasta de Chukum natural en doble altura, colocación de placas de mármol Santo Tomás en vestíbulos y preparación para carpintería maciza.",
        thumbnail: "/projects/residencial/alux-7cielos-chukum-suite.jpg"
      },
      {
        id: "tour-arrecifes-28ago2026",
        date: "27 Agosto 2026",
        title: "Avance 52% - Instalaciones Especiales, Domótica & HVAC",
        phaseName: "Fase 3: Instalaciones Especiales",
        progress: 52,
        embedCode: '<div id="yU6zyUhkj"><script type="text/javascript" async data-short="yU6zyUhkj" data-path="tours" data-is-self-hosted="false" width="100%" height="500px" src="https://app.cloudpano.com/public/shareScript.js"></script></div>',
        folderUrl: "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing",
        notes: "Supervisión 360° de canalizaciones hidrosanitarias presurizadas, cableado domótico Lutron y ductería oculta de aire acondicionado VRF inverter.",
        thumbnail: "/projects/residencial/alux-7cielos-living-open.jpg"
      },
      {
        id: "tour-arrecifes-18ago2026",
        date: "18 Agosto 2026",
        title: "Avance 34% - Muros, Losas de Concreto & Alberca Cenote",
        phaseName: "Fase 2: Muros y Mampostería",
        progress: 34,
        embedCode: '<div id="yU6zyUhkj"><script type="text/javascript" async data-short="yU6zyUhkj" data-path="tours" data-is-self-hosted="false" width="100%" height="500px" src="https://app.cloudpano.com/public/shareScript.js"></script></div>',
        folderUrl: "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing",
        notes: "Colado de losas intermedias con cimbra aparente texturizada con duela regional y perfilado de excavación para alberca con fondo orgánico.",
        thumbnail: "/projects/residencial/alux-7cielos-ocean-pool.jpg"
      },
      {
        id: "tour-arrecifes-05ago2026",
        date: "05 Agosto 2026",
        title: "Avance 18% - Cimentación Ciclópea & Estructura Kárstica",
        phaseName: "Fase 1: Cimentación y Estructura",
        progress: 18,
        embedCode: '<div id="yU6zyUhkj"><script type="text/javascript" async data-short="yU6zyUhkj" data-path="tours" data-is-self-hosted="false" width="100%" height="500px" src="https://app.cloudpano.com/public/shareScript.js"></script></div>',
        folderUrl: "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing",
        notes: "Prospección geofísica completada y colado de zapatas aisladas amarradas con trabes de liga sismorresistentes calculadas para huracanes Cat. 5.",
        thumbnail: "/projects/offgrid/offgrid-pabellon-living.jpg"
      }
    ],
    phases: [
      {
        id: "ph-1",
        order: 1,
        title: "1. Cimentación y Estructura en Suelo Kárstico",
        progress: 100,
        status: "completed",
        targetDates: "15 Ene 2026 - 15 Abr 2026",
        supervisionNotes: "Dictamen #12: Geoprospección GPR completada sin cavidades kársticas. Concreto ciclópeo f'c=250 kg/cm² certificado por laboratorio estructural.",
        inspectedBy: "Arq. Angel Cereceda & Director Responsable de Obra",
        completionDate: "12 Abril 2026"
      },
      {
        id: "ph-2",
        order: 2,
        title: "2. Muros, Mampostería y Cimbra Aparente",
        progress: 100,
        status: "completed",
        targetDates: "16 Abr 2026 - 30 Jun 2026",
        supervisionNotes: "Dictamen #24: Muros perimetrales y pretiles nivelados con plomada láser. Texturizado de muros en concreto con duela de madera tratada.",
        inspectedBy: "Ing. Residente de Estructura",
        completionDate: "28 Junio 2026"
      },
      {
        id: "ph-3",
        order: 3,
        title: "3. Instalaciones Especiales (Hidrosanitaria, Eléctrica & Domótica)",
        progress: 100,
        status: "completed",
        targetDates: "01 Jul 2026 - 15 Ago 2026",
        supervisionNotes: "Dictamen #35: Prueba hidrostática de presión a 7 kg/cm² aprobada con cero fugas. Tendido de fibra óptica y cableado para sistema Lutron.",
        inspectedBy: "Ing. Especialista en MEP & Domótica",
        completionDate: "14 Agosto 2026"
      },
      {
        id: "ph-4",
        order: 4,
        title: "4. Revestimientos en Chukum Tradicional Maya & Mármol",
        progress: 75,
        status: "in_progress",
        targetDates: "16 Ago 2026 - 31 Oct 2026",
        supervisionNotes: "Dictamen #48: Aplicación de resina de Chukum natural hervida en obra en baños máster y doble altura. Sellado hidrófugo de poro abierto en proceso.",
        inspectedBy: "Arq. Angel Cereceda",
      },
      {
        id: "ph-5",
        order: 5,
        title: "5. Carpintería Fina en Madera Maciza de Tzalam",
        progress: 40,
        status: "in_progress",
        targetDates: "01 Oct 2026 - 30 Nov 2026",
        supervisionNotes: "Dictamen #52: Madera de Tzalam y Zapote curada y secada en horno. Puertas pivotantes de 3.20m de altura y vestidores en fabricación en taller.",
        inspectedBy: "Maestro Ebanista & Arq. Residente",
      },
      {
        id: "ph-6",
        order: 6,
        title: "6. Cancelería Antihuracán & Doble Vidriado Hermético (DVH)",
        progress: 15,
        status: "in_progress",
        targetDates: "01 Nov 2026 - 15 Dic 2026",
        supervisionNotes: "Perfilería europea de aluminio extruido con cristal laminado 6+6 con película PVB resistente a impacto de proyectiles Cat. 5.",
        inspectedBy: "Ing. de Fachadas & Cancelería",
      },
      {
        id: "ph-7",
        order: 7,
        title: "7. Iluminación Sensorial, Paisajismo Selvático & Alberca",
        progress: 0,
        status: "scheduled",
        targetDates: "15 Dic 2026 - 31 Ene 2027",
        supervisionNotes: "Siembra de flora endémica (palmas chit, ceibas, helechos gigantes) y luminarias arquitectónicas warm light 2700K integradas.",
        inspectedBy: "Diseñador Paisajista & Iluminación",
      },
      {
        id: "ph-8",
        order: 8,
        title: "8. Entrega de Llaves, Protocolo de Calidad & As-Built",
        progress: 0,
        status: "scheduled",
        targetDates: "01 Feb 2027 - 28 Feb 2027",
        supervisionNotes: "Inspección final de acabados, entrega de manuales técnicos de operación, planos As-Built y garantía estructural certificada.",
        inspectedBy: "Arq. Angel Cereceda / Dirección General",
      }
    ],
    photoReports: [
      // 05 SEPTIEMBRE 2026 (ÚLTIMO AVANCE - ACABADOS & CHUKUM)
      {
        id: "rep-arrecifes-01",
        period: "05 Septiembre 2026",
        category: "Acabados",
        title: "Aplicación de Pasta en Chukum Orgánico - Master Suite",
        date: "05 Septiembre 2026",
        location: "Planta Alta - Recámara Principal",
        imageUrl: "/projects/residencial/alux-7cielos-chukum-suite.jpg",
        technicalNote: "Reframe arquitectónico a 2 puntos de fuga. Se verifica aplicación continua de pasta orgánica de Chukum con sellador natural mate sin juntas visibles.",
        isReframed360: true
      },
      {
        id: "rep-arrecifes-02",
        period: "05 Septiembre 2026",
        category: "Interiores",
        title: "Vestíbulo de Doble Altura & Placas de Mármol Santo Tomás",
        date: "05 Septiembre 2026",
        location: "Planta Baja - Vestíbulo Principal",
        imageUrl: "/projects/residencial/alux-7cielos-living-open.jpg",
        technicalNote: "Detalle de iluminación rasante y encastre de placas de mármol con juntas milimétricas a hueso, alineadas a los ejes estructurales.",
        isReframed360: true
      },
      {
        id: "rep-arrecifes-03",
        period: "05 Septiembre 2026",
        category: "Alberca",
        title: "Pabellón de Alberca & Muro Llorón con Sellado Hidrófugo",
        date: "05 Septiembre 2026",
        location: "Área Exterior - Terraza Jardín",
        imageUrl: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
        technicalNote: "Inspección de canaleta perimetral oculta y vaso de alberca con doble membrana epóxica previa al acabado final en Chukum turquesa.",
        isReframed360: true
      },

      // 28 AGOSTO 2026 (INSTALACIONES ESPECIALES & DOMÓTICA)
      {
        id: "rep-arrecifes-04",
        period: "28 Agosto 2026",
        category: "Instalaciones",
        title: "Ductería VRF Inverter & Canalizaciones MEP Presurizadas",
        date: "28 Agosto 2026",
        location: "Entreplanta Técnica & Plafones",
        imageUrl: "/projects/offgrid/offgrid-rooftop-solar.jpg",
        technicalNote: "Pruebas hidrostáticas presurizadas a 7 kg/cm² superadas sin fugas. Tendido de ductos de climatización oculta y fibra óptica.",
        isReframed360: true
      },
      {
        id: "rep-arrecifes-05",
        period: "28 Agosto 2026",
        category: "Instalaciones",
        title: "Cuarto de Máquinas, PTAR & Tablero Domótico Lutron",
        date: "28 Agosto 2026",
        location: "Sótano Técnico - Planta de Tratamiento",
        imageUrl: "/projects/offgrid/offgrid-villa-cenote.jpg",
        technicalNote: "Conexión de biodigestores anaeróbicos y filtros biológicos para recirculación de agua en sistema de riego por goteo.",
        isReframed360: true
      },
      {
        id: "rep-arrecifes-06",
        period: "28 Agosto 2026",
        category: "Fachada",
        title: "Celosía Bioclimática de Tzalam & Anclajes Inoxidables",
        date: "28 Agosto 2026",
        location: "Fachada Norte - Acceso Vehicular",
        imageUrl: "/projects/residencial/alux-7cielos-studio-parota.jpg",
        technicalNote: "Anclaje de bastidores ocultos de acero inoxidable para celosías de madera maciza de Tzalam curada en horno.",
        isReframed360: true
      },

      // 18 AGOSTO 2026 (MUROS, LOSAS & ALBERCA)
      {
        id: "rep-arrecifes-07",
        period: "18 Agosto 2026",
        category: "Estructura",
        title: "Colado de Losas con Cimbra Aparente de Duela Regional",
        date: "18 Agosto 2026",
        location: "Nivel 2 - Losas de Entrepiso",
        imageUrl: "/projects/offgrid/offgrid-suite-tulum.jpg",
        technicalNote: "Desencofrado limpio con textura de veta de madera aparente. Nivelación milimétrica con plomada láser de alta precisión.",
        isReframed360: true
      },
      {
        id: "rep-arrecifes-08",
        period: "18 Agosto 2026",
        category: "Estructura",
        title: "Muros de Mampostería & Concreto Armado",
        date: "18 Agosto 2026",
        location: "Planta Baja - Muros de Carga",
        imageUrl: "/projects/offgrid/offgrid-pabellon-living.jpg",
        technicalNote: "Muros reforzados con castillos ahogados y trabes de amarre calculadas para resistencia ante vientos huracanados Cat. 5.",
        isReframed360: true
      },

      // 05 AGOSTO 2026 (CIMENTACIÓN & SUELO KÁRSTICO)
      {
        id: "rep-arrecifes-09",
        period: "05 Agosto 2026",
        category: "Estructura",
        title: "Colado de Zapatas Aisladas y Trabes de Liga f'c=250 kg/cm²",
        date: "05 Agosto 2026",
        location: "Cimentación - Desplante Estructural",
        imageUrl: "/projects/residencial/alux-7cielos-master-jungle-view.jpg",
        technicalNote: "Prospección geofísica GPR concluida sin oquedades kársticas. Colado de zapatas con concreto certificado por laboratorio.",
        isReframed360: true
      }
    ],
    beforeAfterComparisons: [
      {
        id: "ba-arrecifes-suite",
        title: "Master Suite & Terraza Selvática",
        zone: "Planta Alta - Recámara Principal",
        beforeDate: "Junio 2026 (Fase Estructural)",
        afterDate: "Septiembre 2026 (Revestimientos & Chukum)",
        beforeImage: "/projects/offgrid/offgrid-suite-tulum.jpg",
        afterImage: "/projects/residencial/alux-7cielos-chukum-suite.jpg",
        description: "Transformación desde el cajón de concreto armado con claros abiertos hacia el espacio habitable terminado con pasta de Chukum sedoso, cancelería embutida y vistas al dosel selvático."
      },
      {
        id: "ba-arrecifes-alberca",
        title: "Pabellón Cenote & Alberca de Chukum",
        zone: "Área Exterior - Jardín Posterior",
        beforeDate: "Mayo 2026 (Excavación Kárstica)",
        afterDate: "Septiembre 2026 (Alberca Concluida)",
        beforeImage: "/projects/offgrid/offgrid-villa-cenote.jpg",
        afterImage: "/projects/residencial/alux-7cielos-ocean-pool.jpg",
        description: "Evolución desde el corte en roca caliza con compactación controlada hasta la alberca boutique con acabado Chukum natural que refleja el agua en tonalidades turquesa caribeño."
      }
    ],
    milestones: [
      {
        id: "ms-arrecifes-01",
        dateStr: "2026-08-05",
        displayDate: "05 Agosto 2026",
        month: "Agosto",
        monthIndex: 0,
        day: 5,
        progress: 18,
        phaseName: "Fase 1: Cimentación y Suelo Kárstico",
        title: "Cimentación Ciclópea & Zapatas Aisladas",
        summary: "Prospección geofísica GPR completada sin cavidades kársticas. Colado de zapatas aisladas y trabes de liga de concreto f'c=250 kg/cm².",
        supervisionNotes: "Dictamen #08: Nivelación topográfica verificada con estación total. Certificado de resistencia de laboratorio aprobado.",
        tourId: "tour-arrecifes-05ago2026"
      },
      {
        id: "ms-arrecifes-02",
        dateStr: "2026-08-18",
        displayDate: "18 Agosto 2026",
        month: "Agosto",
        monthIndex: 0,
        day: 18,
        progress: 34,
        phaseName: "Fase 2: Muros, Losas & Alberca Cenote",
        title: "Colado de Losas Intermedias & Mampostería",
        summary: "Muros perimetrales y pretiles nivelados. Colado de losas intermedias con acabado aparente texturizado y perfilado de excavación de alberca.",
        supervisionNotes: "Dictamen #19: Desencofrado sin cangrejeras. Impermeabilización de cimentación y desplante de muros con mortero hidrófugo.",
        tourId: "tour-arrecifes-18ago2026"
      },
      {
        id: "ms-arrecifes-03",
        dateStr: "2026-08-28",
        displayDate: "28 Agosto 2026",
        month: "Agosto",
        monthIndex: 0,
        day: 28,
        progress: 52,
        phaseName: "Fase 3: Instalaciones Especiales & Domótica",
        title: "Canalizaciones Hidrosanitarias, VRF & Sistema Lutron",
        summary: "Pruebas hidrostáticas presurizadas a 7 kg/cm² con cero caídas de presión. Tendido de ductería oculta de climatización inverter y fibra óptica.",
        supervisionNotes: "Dictamen #31: Inspección de canalizaciones aprobada. Sistema de respaldo para paneles solares y cableado domótico certificado.",
        tourId: "tour-arrecifes-28ago2026"
      },
      {
        id: "ms-arrecifes-04",
        dateStr: "2026-09-05",
        displayDate: "05 Septiembre 2026",
        month: "Septiembre",
        monthIndex: 1,
        day: 5,
        progress: 68,
        phaseName: "Fase 4: Revestimientos en Chukum Tradicional Maya & Mármol",
        title: "Pasta de Chukum en Doble Altura & Mármol Santo Tomás",
        summary: "Aplicación artesanal de pasta orgánica de Chukum hervida en obra en doble altura y master suite. Colocación de placas de mármol con juntas milimétricas.",
        supervisionNotes: "Dictamen #45: Acabado táctil sedoso de Chukum aprobado con sellador natural de poro abierto. Verificación de pendientes en terrazas.",
        tourId: "tour-arrecifes-05sep2026",
        isLatest: true
      },
      {
        id: "ms-arrecifes-05",
        dateStr: "2026-10-15",
        displayDate: "15 Octubre 2026",
        month: "Octubre",
        monthIndex: 2,
        day: 15,
        progress: 82,
        phaseName: "Fase 5: Carpintería en Tzalam Macizo & Cancelería Antihuracán",
        title: "Montaje de Puertas Pivotantes de 3.20m & Cristales DVH",
        summary: "Instalación de carpintería fina en madera maciza de Tzalam curada en horno y perfilería de aluminio europea con cristal laminado antihuracán.",
        supervisionNotes: "Hito programado: Fabricación en taller de ebanistería al 90% lista para colocación en obra.",
        isProjected: true
      },
      {
        id: "ms-arrecifes-06",
        dateStr: "2026-11-12",
        displayDate: "12 Noviembre 2026",
        month: "Noviembre",
        monthIndex: 3,
        day: 12,
        progress: 94,
        phaseName: "Fase 6: Iluminación Sensorial 2700K & Paisajismo Selvático",
        title: "Jardín Botánico Tropical, Muro Llorón & Llenado de Alberca",
        summary: "Siembra de palmas chit, ceibas y helechos endémicos. Configuración de escenas lumínicas warm light 2700K y puesta en marcha de cascada.",
        supervisionNotes: "Hito programado: Selección de flora en vivero regional y luminarias arquitectónicas en tránsito.",
        isProjected: true
      },
      {
        id: "ms-arrecifes-07",
        dateStr: "2026-12-18",
        displayDate: "18 Diciembre 2026",
        month: "Diciembre",
        monthIndex: 4,
        day: 18,
        progress: 100,
        phaseName: "Fase 7: Entrega de Obra, As-Built & Protocolo de Calidad",
        title: "Cierre de Obra, Garantía Certificada & Entrega Llave en Mano",
        summary: "Inspección técnica final, entrega de bitácora digital, planos As-Built, manuales de equipos y entrega protocolaria de llaves.",
        supervisionNotes: "Hito programado: Protocolo de entrega formal y firma de acta de entrega-recepción.",
        isProjected: true
      }
    ]
  },
  {
    id: "casa-tzalam",
    propertyName: "Casa Tzalam",
    accessCode: "unoarq",
    clientName: "Ing. Roberto Garza / Residencia Privada",
    location: "Carretera Tulum – Macario Gómez, Tulum, Q. Roo",
    typology: "Villa Boutique Sensorial Off-Grid",
    totalArea: "480 m² de Construcción",
    startDate: "10 Noviembre 2025",
    estimatedDelivery: "15 Diciembre 2026",
    globalProgress: 85,
    currentPhaseName: "Fase 6: Cancelería Antihuracán & Carpintería Fina en Tzalam",
    heroImage: "/projects/offgrid/offgrid-pabellon-living.jpg",
    director: {
      name: "Arq. Angel Cereceda",
      role: "Director General & Supervisión Técnica",
      credentials: "Máster Project Management UEM | 20+ años de experiencia",
      phone: "+52 1 984 210 8420",
      email: "direccion@unoarquitectos.com",
      whatsapp: "5219842108420",
      photo: "/projects/residencial/alux-7cielos-master-jungle-view.jpg"
    },
    cloudpanoTours: [
      {
        id: "tour-tzalam-sep-2026",
        date: "Septiembre 2026",
        title: "Avance 85% - Carpintería Maciza de Tzalam & Domótica",
        phaseName: "Fase 6: Carpintería y Cancelería",
        progress: 85,
        embedCode: '<iframe src="https://app.cloudpano.com/tours/demo-tour-uno?sceneId=1" width="100%" height="100%" frameborder="0" allowfullscreen allow="accelerometer; gyroscope; magnetometer; vr"></iframe>',
        folderUrl: "https://drive.google.com/drive/folders/uno-arquitectos-casa-tzalam-sep2026",
        notes: "Montaje final de puertas monumentales de 3.40m en madera de Tzalam, celosías pivotantes y encendido de circuitos de iluminación sensorial.",
        thumbnail: "/projects/offgrid/offgrid-pabellon-living.jpg"
      },
      {
        id: "tour-tzalam-ago-2026",
        date: "Agosto 2026",
        title: "Avance 72% - Revestimientos en Chukum & Sistema Solar",
        phaseName: "Fase 4: Revestimientos y Acabados",
        progress: 72,
        embedCode: '<iframe src="https://app.cloudpano.com/tours/demo-tour-uno?sceneId=2" width="100%" height="100%" frameborder="0" allowfullscreen allow="accelerometer; gyroscope; magnetometer; vr"></iframe>',
        folderUrl: "https://drive.google.com/drive/folders/uno-arquitectos-casa-tzalam-ago2026",
        notes: "Instalación de banco de baterías de litio LiFePO4 y 24 paneles solares monocristalinos para operación 100% autónoma off-grid.",
        thumbnail: "/projects/offgrid/offgrid-rooftop-solar.jpg"
      }
    ],
    phases: [
      {
        id: "tz-1",
        order: 1,
        title: "1. Cimentación y Estructura en Suelo Kárstico",
        progress: 100,
        status: "completed",
        targetDates: "Nov 2025 - Feb 2026",
        supervisionNotes: "Estructura monolítica amarrada con losa de cimentación compensada.",
        inspectedBy: "Arq. Angel Cereceda",
        completionDate: "18 Febrero 2026"
      },
      {
        id: "tz-2",
        order: 2,
        title: "2. Muros, Mampostería y Albañilería",
        progress: 100,
        status: "completed",
        targetDates: "Mar 2026 - May 2026",
        supervisionNotes: "Muros térmicos de piedra caliza regional y concreto aparente.",
        inspectedBy: "Ing. Residente",
        completionDate: "20 Mayo 2026"
      },
      {
        id: "tz-3",
        order: 3,
        title: "3. Instalaciones Especiales & Sistema Solar Off-Grid",
        progress: 100,
        status: "completed",
        targetDates: "May 2026 - Jul 2026",
        supervisionNotes: "Sistema solar fotovoltaico híbrido y captación pluvial con filtración UV.",
        inspectedBy: "Ing. de Energías Renovables",
        completionDate: "25 Julio 2026"
      },
      {
        id: "tz-4",
        order: 4,
        title: "4. Revestimientos en Chukum Tradicional Maya",
        progress: 100,
        status: "completed",
        targetDates: "Jul 2026 - Ago 2026",
        supervisionNotes: "100% de muros interiores y alberca revestidos en pasta de Chukum.",
        inspectedBy: "Arq. Angel Cereceda",
        completionDate: "30 Agosto 2026"
      },
      {
        id: "tz-5",
        order: 5,
        title: "5. Carpintería Fina en Madera Maciza de Tzalam",
        progress: 80,
        status: "in_progress",
        targetDates: "Ago 2026 - Oct 2026",
        supervisionNotes: "Instalación de closets, pergolados y cocina integral en madera maciza.",
        inspectedBy: "Maestro Ebanista",
      },
      {
        id: "tz-6",
        order: 6,
        title: "6. Cancelería Antihuracán & Doble Vidriado Hermético",
        progress: 60,
        status: "in_progress",
        targetDates: "Sep 2026 - Nov 2026",
        supervisionNotes: "Montaje de ventanales corredizos empotrados en piso.",
        inspectedBy: "Ing. Cancelería",
      },
      {
        id: "tz-7",
        order: 7,
        title: "7. Iluminación Sensorial & Paisajismo Selvático",
        progress: 20,
        status: "in_progress",
        targetDates: "Nov 2026 - Dic 2026",
        supervisionNotes: "Integración de senderos en grava caliza y luminarias cálidas.",
        inspectedBy: "Diseñador Paisajista",
      },
      {
        id: "tz-8",
        order: 8,
        title: "8. Entrega de Llaves & Protocolo de Calidad",
        progress: 0,
        status: "scheduled",
        targetDates: "Dic 2026",
        supervisionNotes: "Inspección de entrega y manual de operación off-grid.",
        inspectedBy: "Arq. Angel Cereceda",
      }
    ],
    photoReports: [
      {
        id: "rep-tzalam-01",
        period: "Septiembre 2026",
        category: "Interiores",
        title: "Living Principal & Ventilación Cruzada Bernoulli",
        date: "03 Septiembre 2026",
        location: "Planta Baja - Sala Comedor",
        imageUrl: "/projects/offgrid/offgrid-pabellon-living.jpg",
        technicalNote: "Reframe arquitectónico libre de distorsión. Muestra la integración de techos altos en madera de Tzalam y piso en microcemento pulido.",
        isReframed360: true
      },
      {
        id: "rep-tzalam-02",
        period: "Agosto 2026",
        category: "Instalaciones",
        title: "Planta Solar Rooftop & Captación Pluvial",
        date: "20 Agosto 2026",
        location: "Azotea Técnica",
        imageUrl: "/projects/offgrid/offgrid-rooftop-solar.jpg",
        technicalNote: "Arreglo fotovoltaico montado con inclinación óptima de 21° para captación solar máxima en Riviera Maya.",
        isReframed360: true
      }
    ],
    beforeAfterComparisons: [
      {
        id: "ba-tzalam-pabellon",
        title: "Pabellón Central & Pérgola de Tzalam",
        zone: "Área Social",
        beforeDate: "Marzo 2026 (Estructura)",
        afterDate: "Septiembre 2026 (Acabados)",
        beforeImage: "/projects/offgrid/offgrid-suite-tulum.jpg",
        afterImage: "/projects/offgrid/offgrid-pabellon-living.jpg",
        description: "Evolución del claro principal de 12 metros sin columnas intermedias, logrando apertura total hacia el jardín selvático."
      }
    ]
  },
  {
    id: "residencia-mayakoba",
    propertyName: "Residencia Mayakoba",
    accessCode: "unoarq",
    clientName: "Inversiones Mayakoba / Residencia Familiar",
    location: "Mayakoba Country Club, Playa del Carmen, Q. Roo",
    typology: "Residencia Contemporánea Tropical de Alta Gama",
    totalArea: "820 m² de Construcción",
    startDate: "01 Marzo 2026",
    estimatedDelivery: "30 Mayo 2027",
    globalProgress: 42,
    currentPhaseName: "Fase 3: Instalaciones Especiales & Mampostería",
    heroImage: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
    director: {
      name: "Arq. Angel Cereceda",
      role: "Director General & Supervisión Técnica",
      credentials: "Máster Project Management UEM | 20+ años de experiencia",
      phone: "+52 1 984 210 8420",
      email: "direccion@unoarquitectos.com",
      whatsapp: "5219842108420",
      photo: "/projects/residencial/alux-7cielos-master-jungle-view.jpg"
    },
    cloudpanoTours: [
      {
        id: "tour-mayakoba-sep-2026",
        date: "Septiembre 2026",
        title: "Avance 42% - Albañilería, Dobles Alturas & Red Hidrosanitaria",
        phaseName: "Fase 3: Instalaciones Especiales",
        progress: 42,
        embedCode: '<iframe src="https://app.cloudpano.com/tours/demo-tour-uno?sceneId=1" width="100%" height="100%" frameborder="0" allowfullscreen allow="accelerometer; gyroscope; magnetometer; vr"></iframe>',
        folderUrl: "https://drive.google.com/drive/folders/uno-arquitectos-residencia-mayakoba-sep2026",
        notes: "Levantamiento 360° de entrepisos, muros de carga y canalizaciones de alberca infinity con vista al campo de golf.",
        thumbnail: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg"
      }
    ],
    phases: [
      {
        id: "my-1",
        order: 1,
        title: "1. Cimentación y Estructura en Suelo Kárstico",
        progress: 100,
        status: "completed",
        targetDates: "Mar 2026 - May 2026",
        supervisionNotes: "Losa de cimentación con concreto de alta resistencia hidrófugo.",
        inspectedBy: "Arq. Angel Cereceda",
        completionDate: "28 Mayo 2026"
      },
      {
        id: "my-2",
        order: 2,
        title: "2. Muros, Mampostería y Cimbra Aparente",
        progress: 100,
        status: "completed",
        targetDates: "Jun 2026 - Ago 2026",
        supervisionNotes: "Muros de block pesado con refuerzo horizontal y castillos ahogados.",
        inspectedBy: "Ing. Residente",
        completionDate: "30 Agosto 2026"
      },
      {
        id: "my-3",
        order: 3,
        title: "3. Instalaciones Especiales (MEP & Climatización)",
        progress: 35,
        status: "in_progress",
        targetDates: "Sep 2026 - Nov 2026",
        supervisionNotes: "Tendido de tubería hidráulica termofusionada en proceso.",
        inspectedBy: "Ing. Instalaciones",
      },
      {
        id: "my-4",
        order: 4,
        title: "4. Revestimientos en Chukum & Mármol Travertino",
        progress: 0,
        status: "scheduled",
        targetDates: "Nov 2026 - Ene 2027",
        supervisionNotes: "Programado tras pruebas de presión hidrostática.",
        inspectedBy: "Arq. Angel Cereceda",
      },
      {
        id: "my-5",
        order: 5,
        title: "5. Carpintería Fina en Madera Maciza de Tzalam",
        progress: 0,
        status: "scheduled",
        targetDates: "Ene 2027 - Mar 2027",
        supervisionNotes: "Habilitado de madera en taller de carpintería.",
        inspectedBy: "Maestro Ebanista",
      },
      {
        id: "my-6",
        order: 6,
        title: "6. Cancelería Antihuracán & Cristalería DVH",
        progress: 0,
        status: "scheduled",
        targetDates: "Mar 2027 - Abr 2027",
        supervisionNotes: "Cancelería perimetral de piso a techo.",
        inspectedBy: "Ing. Cancelería",
      },
      {
        id: "my-7",
        order: 7,
        title: "7. Iluminación Sensorial, Paisajismo & Alberca Infinity",
        progress: 0,
        status: "scheduled",
        targetDates: "Abr 2027 - May 2027",
        supervisionNotes: "Alberca con borde infinito y jardinería tropical.",
        inspectedBy: "Diseñador Paisajista",
      },
      {
        id: "my-8",
        order: 8,
        title: "8. Entrega de Llaves & Protocolo de Calidad",
        progress: 0,
        status: "scheduled",
        targetDates: "Mayo 2027",
        supervisionNotes: "Entrega protocolaria y entrega de llaves.",
        inspectedBy: "Arq. Angel Cereceda",
      }
    ],
    photoReports: [
      {
        id: "rep-mayakoba-01",
        period: "Septiembre 2026",
        category: "Estructura",
        title: "Doble Altura & Arcos Estructurales en Concreto",
        date: "01 Septiembre 2026",
        location: "Planta Baja - Galería Central",
        imageUrl: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
        technicalNote: "Reframe fotográfico profesional de 360°. Detalle de cimbrado y desencofrado con acabado terso en concreto blanco.",
        isReframed360: true
      }
    ],
    beforeAfterComparisons: [
      {
        id: "ba-mayakoba-galeria",
        title: "Galería de Arcos & Patio Central",
        zone: "Galería Principal",
        beforeDate: "Abril 2026 (Cimentación)",
        afterDate: "Septiembre 2026 (Arcos Estructurales)",
        beforeImage: "/projects/hospitalidad/hospitalidad-sendero-selva.jpg",
        afterImage: "/projects/hospitalidad/hospitalidad-santuario-arcos.jpg",
        description: "Proceso constructivo desde la preparación del terreno kárstico hasta la elevación de la arcada de concreto blanco."
      }
    ]
  }
];

