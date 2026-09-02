import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import {
  Send,
  X,
  Sparkles,
  User,
  Bot,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from "lucide-react";
import { useLanguage, Language } from "../context/LanguageContext";
import { UnoIsotype } from "./Logo";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const GET_GREETING_MSG = (lang: Language) => {
  switch (lang) {
    case "en":
      return "Welcome to **UNO Arquitectos**. I am your AI Technical Advisor in Architecture & High-Performance Engineering.\n\nTo provide personalized guidance and register your technical consultation in our CRM, please share your details:";
    case "it":
      return "Benvenuto su **UNO Arquitectos**. Sono il suo Consulente Tecnico AI di Architettura e Alta Ingegneria.\n\nPer fornirle un'assistenza personalizzata e registrare la sua richiesta nel nostro CRM, la preghiamo di inserire i suoi dati:";
    case "fr":
      return "Bienvenue chez **UNO Arquitectos**. Je suis votre Conseiller Technique IA en Architecture et Ingénierie Tropicale.\n\nPour vous offrir un conseil personnalisé et enregistrer votre demande dans notre CRM, veuillez renseigner vos coordonnées :";
    default:
      return "Bienvenido a **UNO Arquitectos**. Soy su Asesor Técnico de Inteligencia Artificial en Arquitectura e Ingeniería.\n\nPara brindarle asesoría técnica personalizada y registrar su proyecto en nuestro CRM, por favor ingrese sus datos de contacto:";
  }
};

// Motor de Conocimiento Local Integral para Garantizar Respuestas Exquisitas en Todo Momento
const getLocalArchitecturalResponse = (query: string, lang: Language, userName?: string): string => {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const nameGreeting = userName ? ` **${userName.split(" ")[0]}**` : "";

  // 1. COSTOS / PRESUPUESTOS / PRECIOS / M2 / INVERSIÓN (MÁXIMA PRIORIDAD)
  if (
    q.includes("costo") ||
    q.includes("precio") ||
    q.includes("presupuesto") ||
    q.includes("cotiz") ||
    q.includes("cuanto cuesta") ||
    q.includes("cuanto cobra") ||
    q.includes("cuanto sale") ||
    q.includes("tarifa") ||
    q.includes("m2") ||
    q.includes("metro cuadrado") ||
    q.includes("inversion") ||
    q.includes("pagar") ||
    q.includes("dinero")
  ) {
    return lang === "en"
      ? `Regarding **costs and budgeting**${nameGreeting}, at UNO Arquitectos we work with **transparent parametric budgets** tailored to each unique lot and architectural program:\n\n• **Parametric Breakdown**: Rather than arbitrary square-meter estimates, cost is determined with engineering precision by karstic soil mechanics, topography, level of handcrafted finishes (Chukum stucco, noble Tzalam millwork), and off-grid bioclimatic systems.\n• **Strict Budget Control**: We establish an itemized catalog of concepts before breaking ground, guaranteeing zero unexpected overcosts during construction.\n• **Feasibility Session**: We cordially invite you to a technical session with Arch. Angel Cereceda to analyze your land coordinates and estimate an exact investment framework.\n\nWould you like to connect directly with our directors via WhatsApp to review your numbers?`
      : `En cuanto a **costos y presupuestos**${nameGreeting}, en UNO Arquitectos nos regimos por **presupuestos paramétricos transparentes** y rigurosos:\n\n• **Determinación Real de Costos**: En la arquitectura boutique tropical de alto nivel, el costo no se calcula con números genéricos al azar, sino que se define con precisión según la mecánica del suelo kárstico, la topografía del lote, el nivel de carpinterías en madera noble de Tzalam, los acabados en Chukum natural pulido y los sistemas de ingeniería autosuficiente.\n• **Certeza Presupuestal sin Sobrecostos**: Establecemos un catálogo de conceptos desglosado partida por partida antes de colocar la primera piedra, blindando su inversión con control de cambios estricto y pagos por estimación de avance real comprobable.\n• **Sesión Técnica de Viabilidad**: Le invitamos a agendar una primera sesión de viabilidad con el Arq. Angel Cereceda para evaluar los alcances específicos de su terreno y entregarle un marco de inversión certero.\n\n¿Desea que le enlacemos directamente por WhatsApp con nuestra dirección técnica (+52 1 984 210 8420) para revisar su caso?`;
  }

  // 2. TRAMITOLOGÍA / LICENCIAS / PERMISOS / SEMARNAT / POEL / PDU / DRO / COS / CUS
  if (
    /\bcos\b/i.test(q) ||
    /\bcus\b/i.test(q) ||
    /\bcas\b/i.test(q) ||
    q.includes("tramit") ||
    q.includes("licencia") ||
    q.includes("permiso") ||
    q.includes("semarnat") ||
    q.includes("poel") ||
    q.includes("pdu") ||
    q.includes("regula") ||
    q.includes("dro") ||
    q.includes("catastro") ||
    q.includes("condominio") ||
    q.includes("impacto ambiental") ||
    q.includes("mia") ||
    q.includes("desmonte") ||
    q.includes("capa") ||
    q.includes("proteccion civil")
  ) {
    return lang === "en"
      ? `In terms of **Permits, Licensing & Environmental Regulations (Tramitología)**${nameGreeting}, building in the Riviera Maya (Tulum, Playa del Carmen, Cancun) requires strict compliance with municipal and federal programs:\n\n• **COS and CUS Coefficients**: Municipal master plans (PDU) and ecological ordinances (POEL) strictly mandate preserving 40% to 60% of original native jungle on your property.\n• **Environmental Impact (MIA / SEMARNAT)**: Required to protect the subterranean aquifer, cenotes, and native flora/fauna before any site preparation or clearing.\n• **Municipal Construction Licensing**: We manage the entire file: official alignment, registered DRO structural stamps, soil mechanics, civil protection certification, and CAPA/CFE feasibility.\n• **Condominium Regimes**: For multi-unit villas and boutique hospitality developments, we structure the legal condominium regime with total certainty.\n\nAt UNO Arquitectos, our in-house legal and technical team handles 100% of the licensing from day one.`
      : `En cuanto a **Tramitología, Licencias y Marco Legal-Ambiental**${nameGreeting}, edificar en la Riviera Maya (Tulum, Playa del Carmen, Cancún) demanda un estricto apego a normativas municipales y federales:\n\n• **Coeficientes COS, CUS y CAS**: Los Planes de Desarrollo Urbano (PDU) y Programas de Ordenamiento Ecológico Local (POEL) exigen conservar entre el 40% y 60% de la selva virgen dentro de su lote, limitando la huella de desplante para proteger el dosel vegetal.\n• **Impacto Ambiental (MIA / SEMARNAT)**: Tramitación obligatoria de la Manifestación de Impacto Ambiental para autorizar el aprovechamiento sustentable y proteger el manto freático y cenotes.\n• **Licencia Municipal de Construcción**: Gestionamos el expediente técnico completo: alineamiento y número oficial, mecánica de suelos, firmas de Perito DRO (Director Responsable de Obra), dictámenes de Protección Civil y factibilidades de agua (CAPA) y energía (CFE).\n• **Régimen de Condominio**: Estructuración técnica y legal para desarrollos de villas, departamentos boutique o proyectos mixtos.\n\nEn UNO Arquitectos gestionamos la tramitología integralmente para garantizarle certeza jurídica absoluta antes de iniciar la obra.`;
  }

  // 3. INGENIERÍA ESTRUCTURAL / SUELO KÁRSTICO / CENOTES / HURACANES / GEORRADAR (GPR)
  if (
    q.includes("karst") ||
    q.includes("suelo") ||
    q.includes("cimentaci") ||
    q.includes("cenote") ||
    q.includes("cimentar") ||
    q.includes("huracan") ||
    q.includes("sismo") ||
    q.includes("estructur") ||
    q.includes("ingenieria") ||
    q.includes("georadar") ||
    q.includes("gpr") ||
    q.includes("calculo") ||
    q.includes("resistencia")
  ) {
    return lang === "en"
      ? `Our **High-Performance Civil & Structural Engineering**${nameGreeting} is designed specifically for the challenges of the Caribbean and karstic geology:\n\n• **Geophysical GPR Surveying**: Ground Penetrating Radar scanning coupled with SPT borings to map subterranean limestone caverns and voids before structural calculation.\n• **Rigidized Foundation Slabs**: Reinforced concrete raft foundations tied with deep grade beams to prevent differential settlement across cavernous subsoils.\n• **Category 5 Hurricane Resistance**: Calculations adhere to CFE and RCDF seismic/wind design standards to withstand sustained Category 5 hurricane winds (>280 km/h).\n• **Marine-Grade Hardware**: Impact-resistant laminated glass (SentryGlas) and 316 stainless steel fittings against salt spray corrosion.`
      : `Nuestra **Alta Ingeniería Estructural y Geotecnia Kárstica**${nameGreeting} está calculada específicamente para la física del Caribe y el subsuelo de la Península de Yucatán:\n\n• **Prospección Geofísica (GPR) y Mecánica de Suelos**: Escaneo por georradar de penetración terrestre y sondeos SPT para mapear el subsuelo kárstico y descartar oquedades o cavernas ocultas antes de cimentar.\n• **Losas de Cimentación Compensadas y Rigidizadas**: Zapatas y losas de concreto armado amarradas con trabes de liga de gran peralte que absorben cualquier esfuerzo de flexión y evitan asentamientos diferenciales.\n• **Cálculo Antihuracanes (Categoría 5)**: Estructuras dimensionadas bajo el Manual de Obras Civiles de CFE y normativas sismorresistentes para soportar vientos huracanados superiores a 280 km/h.\n• **Cancelería Anti-impacto y Grado Marino**: Vidrios laminados de alta seguridad (SentryGlas) y herrajes de acero inoxidable 316 resistentes a la salinidad marina.`;
  }

  // 4. ARQUITECTURA BIOCLIMÁTICA / SOSTENIBILIDAD / OFF-GRID / ENERGÍA SOLAR / PTAR
  if (
    q.includes("bioclimatic") ||
    q.includes("sostenib") ||
    q.includes("sustentab") ||
    q.includes("solar") ||
    q.includes("fotovolt") ||
    q.includes("off grid") ||
    q.includes("off-grid") ||
    q.includes("bateria") ||
    q.includes("ptar") ||
    q.includes("agua") ||
    q.includes("pluvial") ||
    q.includes("ventilacion") ||
    q.includes("termic") ||
    q.includes("techo verde")
  ) {
    return lang === "en"
      ? `Our **Bioclimatic Architecture & Off-Grid Engineering**${nameGreeting} focuses on functional performance, not decorative greenwashing:\n\n• **Passive Solar Orientation**: North-South alignment with architectural overhangs and Tzalam louvers that block direct solar heat gain.\n• **Bernoulli Cross-Ventilation**: Strategically positioned openings and double-height ceilings that naturally flush out hot air, reducing air conditioning reliance by up to 40%.\n• **Green Roofs (Techos Verdes)**: Regional vegetative top layer that insulates upper concrete slabs from solar radiation.\n• **Biological PTAR Treatment**: Wetland phyto-remediation water treatment systems (traditional septic tanks strictly avoided).\n• **Off-Grid Solar & Battery Storage**: High-efficiency photovoltaic arrays with hybrid inverters and LiFePO4 battery banks for 100% off-grid autonomy.`
      : `Nuestra **Arquitectura Bioclimática y Sostenibilidad Real**${nameGreeting} se fundamenta en principios físicos aplicados, no en eslóganes decorativos:\n\n• **Orientación Solar Pasiva**: Orientación norte-sur con aleros perimetrales y celosías de Tzalam que mitigan la radiación solar directa.\n• **Ventilación Cruzada por Efecto Bernoulli**: Sistemas de ventilación convectiva natural y dobles alturas que expulsan el aire caliente, reduciendo el consumo de aire acondicionado hasta un 40%.\n• **Techos Verdes y Cubiertas Vegetales**: Aislamiento térmico natural sobre losas superiores mediante flora endémica y sustratos ligeros.\n• **Plantas de Tratamiento (PTAR) con Humedales**: Tratamiento biológico de aguas residuales con fitorremediación (prohibición de fosas sépticas contaminantes).\n• **Autosuficiencia Off-The-Grid**: Paneles solares fotovoltaicos de alta eficiencia con inversores híbridos y almacenamiento en baterías LiFePO4 para proyectos sin red eléctrica de CFE.`;
  }

  // 5. MATERIALES AUTÓCTONOS (CHUKUM, TZALAM, PAROTA, CONCRETO, PIEDRA MAYA)
  if (
    q.includes("chukum") ||
    q.includes("tzalam") ||
    q.includes("parota") ||
    q.includes("zapote") ||
    q.includes("machiche") ||
    q.includes("cumaru") ||
    q.includes("madera") ||
    q.includes("concreto") ||
    q.includes("acabado") ||
    q.includes("material") ||
    q.includes("piedra") ||
    q.includes("estuco")
  ) {
    return lang === "en"
      ? `Our **Honest Regional Materials & Tactile Finishes**${nameGreeting} are rooted in the Mayan territory:\n\n• **Natural Chukum**: Millenary Mayan stucco made from wild *Havardia albicans* tree resin mixed with local limestone powder. Naturally waterproof, smooth velvet texture in warm sand-ivory hues, and exceptional thermal coolness for pools, bathrooms, and continuous floors.\n• **Tzalam (Mayan Walnut)**: Heavy tropical hardwood resistant to Caribbean moisture, fungal decay, and termites. Used in bioclimatic pergolas, decks, and custom sensory cabinetry.\n• **Parota Wood**: Noble, grand-scale timber for statement entrance doors and monolithic dining tables.\n• **Fluted Board-Formed Concrete**: Textured exposed concrete cured with natural hydrophobic sealers for longevity.\n• **Regional Mayan Limestone**: Ticul and Galarza stone providing authentic textural grounding.\n\nWe cure and fabricate all custom woodwork in our own workshop on the Tulum – Macario Gómez corridor.`
      : `Nuestra paleta de **Materiales Autóctonos y Acabados Sensoriales**${nameGreeting} celebra la honestidad constructiva de la región maya:\n\n• **Chukum Natural**: Estuco mineral milenario elaborado con la resina orgánica hervida del árbol silvestre *Havardia albicans* y carbonato de calcio. Es impermeable, atérmico, sedoso al tacto, color marfil cálido y no requiere pintura sintética para albercas, baños y pisos continuos.\n• **Madera de Tzalam (Nogal Maya)**: Madera tropical dura de altísima densidad, inmune a termitas, salinidad y humedad caribeña. Ideal para pérgolas, celosías, decks y carpintería fina sensorial.\n• **Madera de Parota**: Madera noble de grano exuberante para puertas monumentales de acceso y barras continuas.\n• **Concreto Aparente Estriado**: Concreto texturizado con cimbra de duela regional y selladores hidrófugos de poro abierto.\n• **Piedra Maya Regional**: Cantera Ticul, piedra Conchuela y Galarza que aportan solidez y frescura.\n\nTodo el trabajo de carpintería y acabados se cura en nuestro taller propio sobre la carretera Tulum – Macario Gómez.`;
  }

  // 6. PROCESO DE TRABAJO Y METODOLOGÍA (4 ETAPAS LLAVE EN MANO)
  if (
    q.includes("llave en mano") ||
    q.includes("turnkey") ||
    q.includes("proceso") ||
    q.includes("fases") ||
    q.includes("etapa") ||
    q.includes("tiempo") ||
    q.includes("cuanto tardan") ||
    q.includes("tardan") ||
    q.includes("metodologia") ||
    q.includes("como trabajan") ||
    q.includes("pasos")
  ) {
    return lang === "en"
      ? `Our **Turnkey Construction Process & Methodology**${nameGreeting} is structured in 4 clear, transparent stages:\n\n1. **Stage 1: Scope, Topography & Site Feasibility** (2–4 weeks): Drone site survey, karstic soil assessment, and legal/COS/CUS viability.\n2. **Stage 2: Bioclimatic Architectural Design** (4–6 weeks): Spatial layout, 3D photorealistic renderings, and material palettes.\n3. **Stage 3: Executive Engineering & Itemized Budget** (6–8 weeks): Structural calculations, plumbing, electrical, PTAR specs, and closed parametric budget.\n4. **Stage 4: Licensing, Construction & Handover** (8–14 months): Permitting, on-site supervision, weekly HD/drone progress reports for remote investors, and final key handover with warranty.\n\nWe provide single-point accountability from the first sketch to the finished space.`
      : `Nuestra **Metodología y Proceso de Construcción Llave en Mano (4 Etapas)**${nameGreeting} brinda orden, certeza y trazabilidad:\n\n1. **Etapa 1: Alcances, Topografía y Viabilidad** (2 a 4 semanas): Levantamiento con dron, estudio geotécnico kárstico y análisis de COS/CUS municipal.\n2. **Etapa 2: Diseño Arquitectónico Bioclimático** (4 a 6 semanas): Definición formal, espacial, renders fotorrealistas 3D y especificación de materiales.\n3. **Etapa 3: Proyecto Ejecutivo e Ingenierías** (6 a 8 semanas): Planos constructivos, memorias de cálculo estructural, hidrosanitario, solar y **presupuesto paramétrico desglosado partida por partida**.\n4. **Etapa 4: Gestoría, Construcción y Entrega** (8 a 14 meses): Trámite de licencias, supervisión residente con bitácora digital, reportes fotográficos y con dron semanales, y entrega llave en mano con manual de mantenimiento y garantías.\n\nAsumimos la responsabilidad 360° para que usted disfrute el proceso sin fricciones.`;
  }

  // 7. PORTAFOLIO Y TIPOLOGÍAS (RESIDENCIAL, COMERCIAL, HOSPITALITY, OFF-GRID)
  if (
    q.includes("portafolio") ||
    q.includes("proyectos") ||
    q.includes("tipologias") ||
    q.includes("residencial") ||
    q.includes("comercial") ||
    q.includes("hospitalarios") ||
    q.includes("hotel") ||
    q.includes("lavazza") ||
    q.includes("7 cielos") ||
    q.includes("alux") ||
    q.includes("villa")
  ) {
    return lang === "en"
      ? `Our **Architectural Portfolio & Typologies**${nameGreeting} include:\n\n• **Boutique Residential**: Bespoke luxury villas like *Residencia Alux* and *Villas 7 Cielos* with infinity Chukum ocean pools, Tzalam master suites, and seamless indoor-outdoor living.\n• **Commercial & Retail**: Flagship venues such as *Cafetería Lavazza*, high-end boutiques, and restaurants combining warm mineral stucco, oak millwork, and high-efficiency operational flow.\n• **Boutique Hospitality**: Eco-luxury boutique hotels, holistic jungle spas, and sustainable pavilions integrated into the Riviera Maya canopy.\n• **Off-The-Grid Living**: Fully autonomous jungle residences equipped with hybrid solar storage and closed-loop rainwater recycling.\n\nYou can explore high-resolution photos and technical specifications in the Portfolio section on this site.`
      : `Nuestras **Tipologías y Colección de Proyectos en Portafolio**${nameGreeting} abarcan:\n\n• **Residencial Boutique**: Villas de lujo contemporáneas como *Residencia Alux* y *Villas 7 Cielos*, con albercas infinitas en Chukum natural, suites master con cabeceras monumentales en Tzalam y conexión directa con el mar y la selva.\n• **Comercial & Retail**: Proyectos insignia como la *Cafetería Lavazza*, boutiques y restaurantes de alta gama con barras en madera noble, estucos minerales cálidos y terrazas modulares.\n• **Boutique Hospitality**: Hoteles boutique, spas holísticos y pabellones de descanso diseñados con un enfoque sensorial y respeto al dosel selvático.\n• **Proyectos Off-The-Grid**: Residencias autosuficientes en medio de la selva con energía solar, baterías LiFePO4 y captación pluvial.\n\nPuede ver la galería completa y fichas técnicas interactivas en la sección de Portafolio.`;
  }

  // 8. INVERSIONISTAS REMOTOS / CLIENTES EXTRANJEROS / SEGUIMIENTO A DISTANCIA
  if (
    q.includes("extranjer") ||
    q.includes("remot") ||
    q.includes("fuera") ||
    q.includes("no vivo") ||
    q.includes("distancia") ||
    q.includes("inversionista") ||
    q.includes("estados unidos") ||
    q.includes("canada") ||
    q.includes("europa")
  ) {
    return lang === "en"
      ? `More than 60% of our clients reside outside Quintana Roo or internationally (USA, Canada, Europe, Mexico City)${nameGreeting}:\n\n• **Remote Project Tracking**: Weekly high-resolution photo and video reports, drone aerial flyovers, and digital site logbooks.\n• **Bilingual Legal Certainty**: Bilingual contracts under Mexican law with strict performance bonds and warranties against hidden defects.\n• **Direct Communication**: Continuous WhatsApp and video conference consultations with Arch. Angel Cereceda and our project engineers.\n\nYou do not need to be physically on site; we act as your trusted technical director on the ground in Mexico.`
      : `Más del 60% de nuestros clientes residen fuera de Quintana Roo o en el extranjero (EE.UU., Canadá, Europa y resto de México)${nameGreeting}:\n\n• **Seguimiento y Trazabilidad a Distancia**: Reportes semanales fotográficos en alta definición, videos con dron y bitácora técnica digital de obra.\n• **Certeza Legal y Contratos Bilingües**: Contratos con validez jurídica mexicana, fianzas de cumplimiento y pólizas de garantía contra vicios ocultos.\n• **Comunicación Continua**: Sesiones por videollamada y grupo de seguimiento por WhatsApp directo con el Arq. Angel Cereceda y los directores de obra.\n\nNo necesita estar físicamente en la obra; nosotros somos sus ojos técnicos y garantes de calidad en cada etapa.`;
  }

  // 9. TRAYECTORIA / ARQ. ANGEL CERECEDA / EQUIPO Y FUNDACIÓN
  if (
    q.includes("angel") ||
    q.includes("cereceda") ||
    q.includes("quienes son") ||
    q.includes("experiencia") ||
    q.includes("fundador") ||
    q.includes("director") ||
    q.includes("equipo") ||
    q.includes("historia") ||
    q.includes("papaya") ||
    q.includes("mayaliah") ||
    q.includes("selina")
  ) {
    return lang === "en"
      ? `UNO Arquitectos was founded and is directed by **Arch. Angel Cereceda**${nameGreeting}:\n\n• **20+ Years of Experience**: Leading high-end architectural design, structural engineering, and real estate development in the Riviera Maya.\n• **Academic Credentials**: Master's in Project Management (Universidad Europea de Madrid) and Master's in Sustainable Development.\n• **Iconic Leadership Track Record**: Prior technical director in benchmark developments including *Papaya Playa Project*, *Inmobilia Mayaliah* (25,000 m²), and *Selina*.\n\nOur philosophy is grounded in designing what can truly be built: architecture that belongs, spaces that endure.`
      : `UNO Arquitectos está fundado y dirigido por el **Arq. Angel Cereceda**${nameGreeting}:\n\n• **Más de 20 Años de Trayectoria**: Liderando diseño de alta gama, ingeniería estructural y gerencia técnica de proyectos en la Riviera Maya.\n• **Formación Académica**: Máster en Project Management (Universidad Europea de Madrid) y Máster en Desarrollo Sostenible.\n• **Obras Emblemáticas Previas**: Dirección técnica en proyectos de referencia internacional como *Papaya Playa Project*, *Inmobilia Mayaliah* (25,000 m²) y *Selina*.\n\nNuestra premisa rectoral es clara: somos el estudio que diseña lo que sí se puede construir, con rigor técnico, sofisticación contenida y materiales honestos.`;
  }

  // 10. UBICACIÓN, DATOS DE CONTACTO (NAP) Y CITAS TÉCNICAS
  if (
    q.includes("donde estan") ||
    q.includes("ubicaci") ||
    q.includes("oficina") ||
    q.includes("direccion") ||
    q.includes("playa") ||
    q.includes("cancun") ||
    q.includes("telefono") ||
    q.includes("whatsapp") ||
    q.includes("cita") ||
    q.includes("agendar") ||
    q.includes("contacto") ||
    q.includes("correo") ||
    q.includes("email")
  ) {
    return lang === "en"
      ? `UNO Arquitectos operates with two dedicated facilities in Quintana Roo${nameGreeting}:\n\n• **Headquarters & Offices**: Plaza Palmeras, Playa del Carmen, Quintana Roo.\n• **Carpentry & Production Workshop**: Tulum – Macario Gómez Highway, Quintana Roo.\n• **Direct Telephone & WhatsApp**: +52 1 984 210 8420\n• **Official Email**: hola@unoarquitectos.com\n• **Office Hours**: Monday to Friday, 9:00 AM – 6:00 PM\n\nWould you like to schedule an in-person or video conference technical consultation to evaluate your project?`
      : `UNO Arquitectos opera con dos sedes principales en Quintana Roo${nameGreeting}:\n\n• **Oficinas Centrales**: Plaza Palmeras, Playa del Carmen, Quintana Roo.\n• **Taller de Carpintería y Producción**: Carretera Tulum – Macario Gómez, Quintana Roo.\n• **Teléfono & WhatsApp Directo**: +52 1 984 210 8420\n• **Correo Oficial**: hola@unoarquitectos.com\n• **Horario de Atención**: Lunes a Viernes de 9:00 a 18:00 hrs\n\n¿Desea que agendemos una sesión técnica presencial o por videollamada para revisar su terreno o proyecto?`;
  }

  // 11. SALUDOS Y DIÁLOGO GENERAL
  if (
    q.includes("hola") ||
    q.includes("buenos") ||
    q.includes("buenas") ||
    q.includes("que tal") ||
    q.includes("gracias") ||
    q.includes("saludos") ||
    q.includes("ok") ||
    q.includes("bien") ||
    q.includes("entendido")
  ) {
    return lang === "en"
      ? `Hello${nameGreeting}! It is a pleasure to assist you. At UNO Arquitectos, we are ready to guide you on:\n\n• Bioclimatic Architectural Design & 3D Modeling\n• Permits & Environmental Regulations (COS/CUS, SEMARNAT, MIA)\n• Karstic Soil Mechanics & Hurricane-Resistant Engineering\n• Turnkey Construction (Llave en Mano) with Parametric Budgets\n• Native Tropical Materials (Natural Chukum, Tzalam wood)\n\nWhat topic would you like to explore for your project?`
      : `¡Hola${nameGreeting}! Un gusto atenderle. En UNO Arquitectos estamos a su disposición para asesorarle en:\n\n• Diseño Arquitectónico Bioclimático y Modelado 3D\n• Tramitología y Normativas Ambientales (COS/CUS, SEMARNAT, MIA, Licencias)\n• Mecánica de Suelo Kárstico e Ingeniería Antihuracanes\n• Construcción Llave en Mano con Presupuesto Paramétrico Cerrado\n• Materiales Autóctonos (Chukum Natural, Maderas de Tzalam y Parota)\n\n¿Sobre qué aspecto de su proyecto le gustaría profundizar hoy?`;
  }

  // DEFAULT CONTEXTUAL
  return lang === "en"
    ? `At UNO Arquitectos${nameGreeting}, we specialize in **Boutique Tropical Contemporary Architecture and High Engineering** across the Riviera Maya, directed by **Arch. Angel Cereceda** (20+ years of experience, Master in Project Management).\n\nWe can guide you on **permits and regulations (COS/CUS/MIA)**, **structural foundations on karstic soil**, **bioclimatic design**, **native materials (Chukum/Tzalam)**, or our **turnkey construction process**.\n\nWhat specific question can we solve for your project today?`
    : `En UNO Arquitectos${nameGreeting}, somos un estudio boutique de **Arquitectura Contemporánea Tropical y Alta Ingeniería** en Riviera Maya, dirigidos por el **Arq. Angel Cereceda** (más de 20 años de experiencia, Máster en Project Management).\n\nPodemos orientarle con rigor técnico sobre **tramitología y licencias (COS/CUS/MIA)**, **cimentaciones sobre roca kárstica y cenotes**, **arquitectura bioclimática**, **materiales autóctonos (Chukum y Tzalam)** o nuestro modelo de **construcción llave en mano sin sobrecostos**.\n\n¿Qué duda o aspecto técnico de su proyecto le gustaría resolver hoy?`;
};

export default function AIConsultant() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Lead capture state (persistent in localStorage)
  const [leadName, setLeadName] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("uno_lead_name") || "";
    }
    return "";
  });
  const [leadPhone, setLeadPhone] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("uno_lead_phone") || "";
    }
    return "";
  });
  const [leadEmail, setLeadEmail] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("uno_lead_email") || "";
    }
    return "";
  });
  const [leadCaptured, setLeadCaptured] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("uno_lead_captured") === "true";
    }
    return false;
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadError, setLeadError] = useState("");

  // Cursor tracking motion variables with smooth physics
  const bgLogoX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 - 100 : 200);
  const bgLogoY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 - 100 : 200);
  
  const smoothBgX = useSpring(bgLogoX, { damping: 40, stiffness: 80 });
  const smoothBgY = useSpring(bgLogoY, { damping: 40, stiffness: 80 });

  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      bgLogoX.set(window.innerWidth / 2 - 50);
      bgLogoY.set(window.innerHeight / 2 - 50);

      const handleMove = (clientX: number, clientY: number) => {
        bgLogoX.set(clientX - 50);
        bgLogoY.set(clientY - 50);
        
        setIsMoving(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsMoving(false);
        }, 500);
      };

      const handleMouseMove = (e: MouseEvent) => {
        handleMove(e.clientX, e.clientY);
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches && e.touches[0]) {
          handleMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
    return undefined;
  }, [bgLogoX, bgLogoY]);

  // Reset/Initialize greeting
  useEffect(() => {
    if (leadCaptured && leadName) {
      setMessages([
        {
          role: "assistant",
          content: language === "es"
            ? `Bienvenido de nuevo, **${leadName}**. Soy su Asesor Técnico de IA en UNO Arquitectos.\n\n¿En qué podemos asesorarle hoy con respecto a su proyecto?`
            : `Welcome back, **${leadName}**. I am your AI Technical Advisor at UNO Arquitectos.\n\nHow can we assist you with your project today?`,
          timestamp: new Date()
        }
      ]);
    } else {
      setMessages([
        {
          role: "assistant",
          content: GET_GREETING_MSG(language),
          timestamp: new Date()
        }
      ]);
    }
  }, [language, leadCaptured, leadName]);

  // Listen to custom open-ai-chat event
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-ai-chat", handleOpenChat);
    return () => window.removeEventListener("open-ai-chat", handleOpenChat);
  }, []);

  // Scroll to bottom on message updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, leadCaptured]);

  const handleStartConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError("");

    if (!leadName.trim()) {
      setLeadError(language === "es" ? "Por favor ingrese su nombre." : "Please enter your name.");
      return;
    }
    if (!leadPhone.trim() || leadPhone.trim().length < 7) {
      setLeadError(language === "es" ? "Por favor ingrese su número de WhatsApp." : "Please enter your WhatsApp number.");
      return;
    }
    if (!leadEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail.trim())) {
      setLeadError(language === "es" ? "Por favor ingrese un correo electrónico válido." : "Please enter a valid email address.");
      return;
    }

    setIsSubmittingLead(true);

    try {
      // 1. Enviar Lead al Backend y CRM Webhook
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName.trim(),
          phone: leadPhone.trim(),
          email: leadEmail.trim(),
          source: "Asesor Técnico IA Chatbot",
          message: "Lead registrado al abrir el Asesor Técnico de IA."
        })
      });

      // 2. Guardar en almacenamiento local y registrar conversión en Google y Meta
      if (typeof window !== "undefined") {
        localStorage.setItem("uno_lead_name", leadName.trim());
        localStorage.setItem("uno_lead_phone", leadPhone.trim());
        localStorage.setItem("uno_lead_email", leadEmail.trim());
        localStorage.setItem("uno_lead_captured", "true");

        const win = window as any;
        if (win.gtag) {
          win.gtag('event', 'generate_lead', {
            event_category: 'ai_advisor',
            event_label: 'Asesor Tecnico IA Chatbot',
            value: 1
          });
        }
        if (win.fbq) {
          win.fbq('track', 'Lead', {
            content_name: 'Asesor Tecnico IA Chatbot',
            status: 'success'
          });
        }
      }

      setLeadCaptured(true);

      // 3. Agregar mensaje de bienvenida y habilitar conversación fluida
      const welcomeUserMsg: ChatMessage = {
        role: "assistant",
        content: language === "es"
          ? `¡Mucho gusto, **${leadName.trim()}**! Hemos registrado sus datos de contacto con éxito en nuestro CRM.\n\nAhora cuénteme, ¿en qué podemos asesorarle hoy? *(Por ejemplo: diseño bioclimático, materiales de la selva maya, cimentación en suelo kárstico o viabilidad de su proyecto)*.`
          : `Pleased to meet you, **${leadName.trim()}**! We have successfully registered your details in our CRM.\n\nNow, how can I assist you today? *(For example: bioclimatic design, Mayan jungle materials, karstic foundations, or project feasibility)*.`,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, welcomeUserMsg]);
    } catch (err) {
      console.error("Error submitting lead:", err);
      setLeadCaptured(true);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const handleSendMessage = async (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText || isLoading) return;

    const userMsg: ChatMessage = {
      role: "user",
      content: trimmedText,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const chatHistory = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));
      chatHistory.push({ role: "user", content: trimmedText });

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatHistory,
          language,
          userProfile: { name: leadName, email: leadEmail, phone: leadPhone }
        })
      });

      if (!res.ok) {
        throw new Error("Servidor no disponible");
      }

      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.text || data.response || getLocalArchitecturalResponse(trimmedText, language, leadName),
          timestamp: new Date()
        }
      ]);
    } catch {
      // Offline / Static Resilient Knowledge Engine
      const fallbackAnswer = getLocalArchitecturalResponse(trimmedText, language, leadName);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: fallbackAnswer,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts =
    language === "es"
      ? [
          { label: "Normativas en Tulum", prompt: "¿Cuáles son las regulaciones ecológicas, COS/CUS y conservación de selva en Tulum?" },
          { label: "Chukum y Maderas", prompt: "Explícame las ventajas del Chukum natural y la madera de Tzalam en clima tropical." },
          { label: "Cimentación Kárstica", prompt: "¿Cómo calculan las cimentaciones sobre suelo kárstico o cenotes?" },
          { label: "Obra Llave en Mano", prompt: "¿Cómo funciona el modelo de construcción Llave en Mano de UNO Arquitectos?" }
        ]
      : [
          { label: "Tulum regulations", prompt: "What are the environmental permits and land ratios required in Tulum?" },
          { label: "Chukum & tropical wood", prompt: "Tell me about Chukum and Tzalam wood advantages in tropical climates." },
          { label: "Karstic foundations", prompt: "How do you handle structural foundations on karst soil near cenotes?" },
          { label: "Turnkey building", prompt: "How does the Turnkey construction model work at UNO Arquitectos?" }
        ];

  // Text Formatter for bullets and bolds
  const formatText = (text: string) => {
    return text.split("\n").map((line, lineIdx) => {
      const trimmedLine = line.trim();
      const isBullet = trimmedLine.startsWith("•") || trimmedLine.startsWith("*");
      let cleanLine = line;
      if (isBullet) {
        cleanLine = line.replace(/^[•*]\s*/, "");
      }

      const parts = cleanLine.split(/\*\*([\s\S]*?)\*\*/g);
      const formattedParts = parts.map((part, partIdx) => {
        if (partIdx % 2 === 1) {
          return <strong key={partIdx} className="font-semibold text-teal-uno">{part}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={lineIdx} className="ml-4 list-disc pl-1 mb-1 text-gris-texto font-body-md text-xs leading-relaxed">
            {formattedParts}
          </li>
        );
      }

      return (
        <p key={lineIdx} className={`mb-2 text-gris-texto font-body-md text-xs leading-relaxed ${cleanLine === "" ? "h-2" : ""}`}>
          {formattedParts}
        </p>
      );
    });
  };

  const whatsappLink =
    language === "es"
      ? "https://wa.me/5219842108420?text=Hola%20UNO%20Arquitectos,%20me%20interesa%20recibir%20asesor%C3%ADa%20técnica%20para%20un%20proyecto."
      : "https://wa.me/5219842108420?text=Hello%20UNO%20Arquitectos,%20I%20would%20like%20technical%20advice%20for%20a%20project.";

  return (
    <>
      {/* FLOATING WHATSAPP BUTTON (BOTTOM RIGHT) */}
      <div id="float-whatsapp" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end font-sans">
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-[#046A38] hover:bg-[#03512b] text-white p-3.5 sm:p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer border border-[#046a38]/30 group min-w-[48px] min-h-[48px] sm:min-w-[52px] sm:min-h-[52px]"
          aria-label="Contactar por WhatsApp a UNO Arquitectos"
        >
          <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          <span className="absolute right-14 bg-white text-gris-texto border border-gris-piedra text-xs font-label-caps uppercase tracking-wider py-1.5 px-3 rounded-xs whitespace-nowrap shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden sm:block">
            {language === "es" ? "WhatsApp Directo" : "WhatsApp Chat"}
          </span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-teal-uno border-2 border-white rounded-full"></span>
        </motion.a>
      </div>

      {/* FLOATING AI CONSULTANT (BOTTOM LEFT) */}
      <div id="float-ai-consultant" className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start font-sans">
        <AnimatePresence>
          {isOpen ? (
            /* EXPANDED CHAT PANEL */
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white border border-arena-calida/30 shadow-2xl rounded-2xl overflow-hidden w-[calc(100vw-2rem)] sm:w-[390px] max-w-[390px] h-[min(560px,80vh)] flex flex-col mb-3 sm:mb-4"
            >
              {/* Header */}
              <div className="bg-white border-b border-gris-piedra py-3.5 px-4 flex items-center justify-between text-gris-texto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-uno/10 border border-teal-uno/30 flex items-center justify-center text-teal-uno">
                    <UnoIsotype size={18} color="#00A3A3" cubeColor="#FFFFFF" strokeColor="#00A3A3" />
                  </div>
                  <div>
                    <h4 className="font-label-caps text-xs font-semibold tracking-wide text-teal-uno uppercase">
                      {language === "es" ? "Asesor Técnico IA" : "AI Technical Advisor"}
                    </h4>
                    <span className="font-label-caps text-[9px] tracking-wider text-gris-texto uppercase flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-uno inline-block animate-pulse"></span>
                      {leadCaptured && leadName ? `Hola, ${leadName.split(" ")[0]}` : (language === "es" ? "Ingeniería & Arquitectura" : "Engineering & Architecture")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {leadCaptured && (
                    <button
                      onClick={() => {
                        if (confirm(language === "es" ? "¿Deseas reiniciar tus datos de sesión?" : "Reset your session data?")) {
                          localStorage.removeItem("uno_lead_captured");
                          setLeadCaptured(false);
                        }
                      }}
                      className="text-zinc-400 hover:text-teal-uno p-1.5 transition-colors cursor-pointer"
                      title={language === "es" ? "Cambiar datos de contacto" : "Change contact details"}
                      aria-label={language === "es" ? "Cambiar datos de contacto" : "Change contact details"}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gris-texto hover:text-teal-uno transition-colors cursor-pointer p-2 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* VIEWPORT: LEAD INTAKE GATE OR ACTIVE CONVERSATION */}
              <div className="flex-1 overflow-y-auto p-4 bg-surface-container-lowest space-y-4">
                {/* Messages */}
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex gap-2.5 items-start ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs border ${
                        m.role === "user"
                          ? "bg-teal-uno border-teal-uno text-white"
                          : "bg-teal-uno/10 border-teal-uno/20 text-teal-uno"
                      }`}
                    >
                      {m.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div className="max-w-[84%]">
                      <div
                        className={`p-3 rounded-xs text-xs text-left leading-relaxed shadow-xs font-body-md ${
                          m.role === "user"
                            ? "bg-teal-uno text-white font-medium"
                            : "bg-gris-piedra/25 border border-gris-piedra text-gris-texto"
                        }`}
                      >
                        {m.role === "user" ? (
                          <p className="whitespace-pre-wrap">{m.content}</p>
                        ) : (
                          <div className="space-y-0.5">{formatText(m.content)}</div>
                        )}
                      </div>
                      <span className="text-[9px] text-zinc-400 block mt-1 px-1 font-label-caps">
                        {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}

                {/* LEAD INTAKE FORM (When not yet captured) */}
                {!leadCaptured && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-white border border-teal-uno/25 rounded-xs shadow-sm text-left space-y-3"
                  >
                    <div className="flex items-center gap-2 border-b border-gris-piedra pb-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-uno" />
                      <h5 className="font-label-caps text-xs uppercase font-semibold text-teal-uno">
                        {language === "es" ? "Registro de Consulta Técnica" : "Technical Consultation Registration"}
                      </h5>
                    </div>

                    <form onSubmit={handleStartConsultation} className="space-y-2.5 text-xs font-body-md">
                      {leadError && (
                        <div className="p-2 bg-red-50 border border-red-200 text-red-700 rounded-xs text-[11px]">
                          {leadError}
                        </div>
                      )}

                      {/* Nombre */}
                      <div>
                        <label className="font-label-caps text-[10px] uppercase tracking-wider text-gris-texto font-semibold block mb-1">
                          {language === "es" ? "Nombre Completo *" : "Full Name *"}
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 absolute left-3 top-3 text-zinc-400" />
                          <input
                            type="text"
                            required
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            placeholder={language === "es" ? "Ej. Arq. Carlos Mendoza" : "e.g. John Doe"}
                            className="w-full bg-gris-piedra/10 border border-gris-piedra rounded-xs pl-8 pr-3 py-2 text-xs text-gris-texto focus:outline-none focus:border-teal-uno focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* WhatsApp / Tel */}
                      <div>
                        <label className="font-label-caps text-[10px] uppercase tracking-wider text-gris-texto font-semibold block mb-1">
                          {language === "es" ? "WhatsApp / Teléfono *" : "WhatsApp / Phone *"}
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-zinc-400" />
                          <input
                            type="tel"
                            required
                            value={leadPhone}
                            onChange={(e) => setLeadPhone(e.target.value)}
                            placeholder={language === "es" ? "+52 984 123 4567" : "+1 555 123 4567"}
                            className="w-full bg-gris-piedra/10 border border-gris-piedra rounded-xs pl-8 pr-3 py-2 text-xs text-gris-texto focus:outline-none focus:border-teal-uno focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="font-label-caps text-[10px] uppercase tracking-wider text-gris-texto font-semibold block mb-1">
                          {language === "es" ? "Correo Electrónico *" : "Email Address *"}
                        </label>
                        <div className="relative">
                          <Mail className="w-3.5 h-3.5 absolute left-3 top-3 text-zinc-400" />
                          <input
                            type="email"
                            required
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            placeholder="contacto@ejemplo.com"
                            className="w-full bg-gris-piedra/10 border border-gris-piedra rounded-xs pl-8 pr-3 py-2 text-xs text-gris-texto focus:outline-none focus:border-teal-uno focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmittingLead}
                        className={`w-full py-2.5 bg-teal-uno hover:opacity-90 text-white rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs mt-3 ${
                          isSubmittingLead ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmittingLead ? (
                          language === "es" ? "Conectando con CRM..." : "Connecting to CRM..."
                        ) : (
                          <>
                            {language === "es" ? "Iniciar Consulta Técnica" : "Start Technical Consultation"}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-zinc-400 leading-tight flex items-center gap-1 pt-1 font-body-md">
                        <ShieldCheck className="w-3 h-3 text-teal-uno flex-shrink-0" />
                        {language === "es"
                          ? "Datos enviados de forma segura al CRM de UNO Arquitectos."
                          : "Data securely forwarded to UNO Arquitectos CRM."}
                      </p>
                    </form>
                  </motion.div>
                )}

                {isLoading && (
                  <div className="flex gap-2.5 items-start animate-pulse">
                    <div className="w-7 h-7 rounded-full bg-teal-uno/10 border border-teal-uno/20 flex items-center justify-center text-teal-uno">
                      <UnoIsotype size={14} color="#00A3A3" cubeColor="#FFFFFF" strokeColor="#00A3A3" />
                    </div>
                    <div className="bg-gris-piedra/25 border border-gris-piedra p-3 rounded-xs max-w-[80%] text-left">
                      <div className="flex space-x-1.5 items-center py-1">
                        <div className="w-2 h-2 bg-teal-uno rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-teal-uno rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-teal-uno rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* QUICK PROMPT SUGGESTIONS (Only when lead is captured) */}
              {leadCaptured && messages.length <= 4 && !isLoading && (
                <div className="px-4 py-2 bg-gris-piedra/20 border-t border-gris-piedra">
                  <p className="font-label-caps text-[9px] font-semibold tracking-wider text-teal-uno uppercase mb-2 text-left">
                    {language === "es" ? "Sugerencias de Consulta" : "Suggested Queries"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickPrompts.map((qp, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(qp.prompt)}
                        className="font-body-md text-xs bg-white border border-gris-piedra hover:border-teal-uno hover:text-teal-uno text-gris-texto px-2.5 py-1.5 rounded-xs transition-all cursor-pointer text-left min-h-[36px]"
                      >
                        {qp.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CHAT INPUT FORM (Enabled after lead is captured) */}
              {leadCaptured ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }}
                  className="p-3 border-t border-gris-piedra bg-white flex gap-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      language === "es"
                        ? "Pregunte sobre permisos, Chukum, estructura kárstica..."
                        : "Ask about permits, Chukum, karstic foundations..."
                    }
                    className="flex-1 bg-gris-piedra/15 border border-gris-piedra rounded-xs px-3.5 py-2.5 font-body-md text-xs text-gris-texto focus:outline-none focus:border-teal-uno focus:bg-white transition-all min-h-[44px]"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className={`px-4 bg-teal-uno hover:opacity-90 text-white rounded-xs flex items-center justify-center transition-colors cursor-pointer min-h-[44px] min-w-[44px] ${
                      isLoading || !inputValue.trim() ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="px-4 py-2.5 bg-zinc-50 border-t border-gris-piedra text-center font-label-caps text-[10px] text-zinc-400 uppercase tracking-wider">
                  {language === "es" ? "Complete sus datos arriba para activar el chat" : "Fill out your details above to activate chat"}
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* FLOATING TRIGGER BUTTON (BOTTOM LEFT) */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white hover:bg-gris-piedra/20 border border-gris-piedra text-teal-uno p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group min-w-[52px] min-h-[52px]"
          aria-label="Abrir Asesor Técnico con Inteligencia Artificial"
        >
          <Sparkles className="w-6 h-6 text-teal-uno group-hover:rotate-12 transition-transform duration-300" />
          
          <span className="absolute left-14 bg-white text-gris-texto border border-gris-piedra font-label-caps text-xs uppercase tracking-wider py-1.5 px-3 rounded-xs whitespace-nowrap shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
            {language === "es" ? "Asesor IA" : "AI Advisor"}
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-uno opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-uno"></span>
          </span>
        </motion.button>
      </div>

      {/* CURSOR-TRACKING FLOATING SEMI-TRANSPARENT LOGO */}
      <motion.div
        style={{ x: smoothBgX, y: smoothBgY }}
        animate={{
          opacity: isMoving ? 0.35 : 0.45
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        className="fixed top-0 left-0 pointer-events-none z-30 select-none hidden sm:block text-teal-uno"
      >
        <UnoIsotype
          size={100}
          color="#00A3A3"
          cubeColor="#FFFFFF"
          strokeColor="#00A3A3"
          className="animate-rotate-spinning"
        />
      </motion.div>
    </>
  );
}
