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

// Motor de Conocimiento Local de Respaldo para Garantizar Respuestas Exquisitas en Todo Momento
const getLocalArchitecturalResponse = (query: string, lang: Language, userName?: string): string => {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const nameGreeting = userName ? ` **${userName.split(" ")[0]}**` : "";

  // 1. COSTOS / PRESUPUESTOS / PRECIOS / M2 / INVERSIÓN (PRIORIDAD ALTA)
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
      ? `Regarding **costs and budgeting**${nameGreeting}, at UNO Arquitectos we work with **transparent parametric budgets** tailored to each unique lot and architectural program:\n\n• **Parametric Breakdown**: Rather than arbitrary square-meter estimates, cost is determined by karstic soil mechanics, topography, level of handcrafted finishes (Chukum stucco, noble Tzalam millwork), and off-grid bioclimatic systems.\n• **Strict Budget Control**: We establish an itemized catalog of concepts before breaking ground, guaranteeing zero unexpected overcosts during construction.\n• **Feasibility Session**: We cordially invite you to a technical session with Arch. Angel Cereceda to analyze your land coordinates and estimate an exact investment framework.\n\nWould you like to connect directly with our directors via WhatsApp to review your numbers?`
      : `En cuanto a **costos y presupuestos**${nameGreeting}, en UNO Arquitectos nos regimos por **presupuestos paramétricos transparentes** y rigurosos:\n\n• **Determinación Real de Costos**: En la arquitectura boutique tropical de alto nivel, el costo no se calcula con números genéricos al azar, sino que se define con precisión según la mecánica del suelo kárstico, la topografía del lote, el nivel de carpinterías en madera noble de Tzalam, los acabados en Chukum natural pulido y los sistemas de ingeniería autosuficiente.\n• **Certeza Presupuestal sin Sobrecostos**: Establecemos un catálogo de conceptos desglosado partida por partida antes de colocar la primera piedra, blindando su inversión con control de cambios estricto.\n• **Sesión Técnica de Viabilidad**: Le invitamos a agendar una primera sesión de viabilidad con el Arq. Angel Cereceda para evaluar los alcances específicos de su terreno y entregarle un marco de inversión certero.\n\n¿Desea que le enlacemos directamente por WhatsApp con nuestra dirección técnica para revisar su caso?`;
  }

  // 2. TZALAM Y MADERAS TROPICALES
  if (q.includes("tzalam") || q.includes("zapote") || q.includes("machiche") || q.includes("parota") || q.includes("madera")) {
    return lang === "en"
      ? `The **Tzalam** (*Lysiloma latisiliquum*), also known as the Mayan Walnut, is our signature native tropical hardwood:\n\n• **Exceptional Durability**: Naturally immune to Caribbean humidity, fungal decay, marine salinity, and termites.\n• **Warm Aesthetics**: Rich reddish-brown walnut tones with distinctive golden veins and fine closed grain.\n• **Applications**: Bioclimatic pergolas, facade louvers, exterior decks, and custom sensory millwork.\n\nAll timber is curated and sealed in our regional workshop on the Tulum – Macario Gómez corridor.`
      : `El **Tzalam** (*Lysiloma latisiliquum*), conocido como el nogal maya, es una madera tropical dura autóctona de la Península de Yucatán:\n\n• **Propiedades Físicas**: Extraordinaria densidad y resistencia natural a la humedad caribeña, salinidad marina y plagas de termitas.\n• **Carácter Estético**: Tonalidades rojizas con vetas doradas profundas y veteado cerrado de gran nobleza visual.\n• **Uso Arquitectónico**: Ideal para pérgolas bioclimáticas, celosías de fachada, decks exteriores y carpintería fina sensorial.\n\nEn nuestro taller de producción en el corredor Tulum – Macario Gómez tratamos y curamos el Tzalam con aceites naturales para garantizar su estabilidad dimensional por décadas.`;
  }

  // 3. CHUKUM NATURAL Y ESTUCOS
  if (q.includes("chukum") || q.includes("estuco") || q.includes("acabado") || q.includes("piscinas") || q.includes("alberca")) {
    return lang === "en"
      ? `The **Natural Chukum** is a millenary Mayan architectural stucco made by boiling the organic resin of the wild *Havardia albicans* tree with local limestone powder:\n\n• **Natural Waterproofing**: Forms a continuous seamless barrier, ideal for swimming pools, reflective water mirrors, and wet areas.\n• **Sensory Velvet Texture**: Soft tactile feel in warm limestone-ivory hues that ages with elegance and requires no chemical paints.\n• **Thermal Comfort**: Reflects solar radiation and keeps interiors pleasantly cool in humid tropical climates.\n\nIt is an essential hallmark across all UNO Arquitectos developments.`
      : `El **Chukum Natural** es un acabado mineral milenario de origen maya que se elabora hirviendo la corteza del árbol silvestre *Havardia albicans* combinada con polvo de piedra caliza y cemento blanco:\n\n• **Impermeabilidad Natural**: Forma una superficie hidrófuga continua, ideal para piscinas, espejos de agua, baños y pisos pulidos.\n• **Textura Sensorial**: Acabado sedoso al tacto con tonalidades arena marfil que madura con distinción con el paso del tiempo sin requerir pintura.\n• **Aislamiento Térmico**: Refleja la radiación solar y mantiene frescos los interiores en climas cálidos y húmedos.\n\nEs uno de los sellos distintivos en las obras de UNO Arquitectos por su calidez y pertenencia al entorno.`;
  }

  // 4. TULUM / NORMATIVAS / COS / CUS / PERMISOS (USANDO REGEX EXACTO \bcos\b Y \bcus\b)
  if (
    /\bcos\b/i.test(q) ||
    /\bcus\b/i.test(q) ||
    q.includes("tulum") ||
    q.includes("normativa") ||
    q.includes("permiso") ||
    q.includes("licencia") ||
    q.includes("semarnat") ||
    q.includes("poel") ||
    q.includes("pdu") ||
    q.includes("regulacion") ||
    q.includes("desmonte")
  ) {
    return lang === "en"
      ? `In **Tulum and the Riviera Maya**, construction is strictly governed by municipal urban plans (PDU) and ecological ordinances (POEL):\n\n• **COS and CUS Restrictions**: Typical land coefficients require preserving 40% to 60% of virgin native jungle within your lot.\n• **Environmental Licensing (MIA / SEMARNAT)**: Required to protect the subterranean aquifer, cenotes, and local ecosystems.\n• **Eco-Infrastructure**: Traditional septic tanks are prohibited; certified wastewater treatment plants (PTAR) with bio-filter wetlands are mandatory.\n\nAt UNO Arquitectos, we manage 100% of the technical licensing and environmental permits before breaking ground.`
      : `En **Tulum y la Riviera Maya**, la edificación se rige por programas de ordenamiento ecológico (POEL) y planes de desarrollo urbano (PDU):\n\n• **Coeficientes COS y CUS**: Exigen respetar y conservar entre el 40% y 60% de la selva virgen dentro de cada lote.\n• **Permisos Ambientales (MIA / SEMARNAT)**: Protegen el manto freático y la flora endémica.\n• **Tratamiento Ecológico**: Se prohíben fosas sépticas tradicionales; es obligatorio instalar plantas de tratamiento (PTAR) o biodigestores con humedales de fitorremediación.\n\nEn UNO Arquitectos gestionamos la viabilidad legal y las licencias de construcción desde el primer día para asegurar certeza jurídica total.`;
  }

  // 5. CIMENTACIÓN / SUELO KÁRSTICO / CENOTES / HURACANES
  if (
    q.includes("karst") ||
    q.includes("suelo") ||
    q.includes("cimentaci") ||
    q.includes("cenote") ||
    q.includes("cimentar") ||
    q.includes("huracan") ||
    q.includes("sismo") ||
    q.includes("estructur") ||
    q.includes("georadar") ||
    q.includes("gpr")
  ) {
    return lang === "en"
      ? `Building on the **karstic limestone of the Yucatan Peninsula** requires specialized structural engineering:\n\n• **Geophysical GPR Surveying**: Ground Penetrating Radar scanning to detect subterranean voids or cavern formations.\n• **Rigid Foundation Slabs**: Reinforced concrete raft foundations tied with continuous grade beams to prevent differential settlement.\n• **Hurricane Resistance**: Structural calculations strictly adhere to Mexican building codes to withstand Category 5 hurricanes (wind speeds up to 280 km/h).`
      : `Construir sobre la **roca kárstica de la Península de Yucatán** demanda alta ingeniería civil:\n\n• **Prospección Geofísica (GPR)**: Escaneo por georradar para mapear el subsuelo y descartar oquedades o fallas kársticas ocultas.\n• **Losas de Cimentación Rigidizadas**: Zapatas corridas y trabes de liga de concreto armado que absorben cualquier asentamiento diferencial.\n• **Cálculo Antihuracanes**: Estructuras calculadas bajo norma CFE/RCDF para soportar vientos de huracán Categoría 5 (hasta 280 km/h).`;
  }

  // 6. SERVICIO LLAVE EN MANO / FASES / TIEMPOS
  if (
    q.includes("llave en mano") ||
    q.includes("turnkey") ||
    q.includes("proceso") ||
    q.includes("fases") ||
    q.includes("etapa") ||
    q.includes("tiempo") ||
    q.includes("cuanto tardan") ||
    q.includes("tardan") ||
    q.includes("construccion") ||
    q.includes("diseno")
  ) {
    return lang === "en"
      ? `Our **Turnkey (Llave en Mano)** model provides end-to-end peace of mind across 4 structured phases:\n\n1. **Conceptual & Bioclimatic Design** (4–6 weeks): Architecture, 3D renderings, and volume studies.\n2. **Executive Engineering** (6–8 weeks): Structural, hydraulic, sanitary, and solar calculations with parametric budget.\n3. **Licensing & Permits**: Municipal and environmental approvals.\n4. **Construction & Handover** (8–14 months depending on m²): On-site direction with weekly tracking and zero surprise costs.`
      : `Nuestro servicio **Llave en Mano (Turnkey)** brinda tranquilidad total a través de 4 fases metodológicas:\n\n1. **Diseño Conceptual y Bioclimático** (4 a 6 semanas): Definición formal, espacial, renders 3D y análisis de asoleamiento.\n2. **Proyecto Ejecutivo e Ingenierías** (6 a 8 semanas): Planos constructivos, memorias de cálculo kárstico y presupuesto paramétrico desglosado.\n3. **Gestoría y Licencias**: Tramitación de licencias municipales y ambientales.\n4. **Construcción y Entrega** (8 a 14 meses según m²): Dirección integral de obra con reportes fotográficos continuos y entrega con trazabilidad.`;
  }

  // 7. UBICACIÓN / OFICINAS / CITAS / CONTACTO
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
    q.includes("contacto")
  ) {
    return lang === "en"
      ? `UNO Arquitectos operates across the Riviera Maya with two key physical locations:\n\n• **Main Headquarters**: Plaza Palmeras, Playa del Carmen, Quintana Roo.\n• **Woodwork & Production Workshop**: Tulum – Macario Gómez Highway, Quintana Roo.\n• **Direct Telephone & WhatsApp**: +52 1 984 210 8420\n• **Email**: hola@unoarquitectos.com\n\nWould you like to schedule an in-person or video conference technical meeting?`
      : `UNO Arquitectos opera en toda la Riviera Maya con dos sedes físicas:\n\n• **Oficinas Centrales**: Plaza Palmeras, Playa del Carmen, Quintana Roo.\n• **Taller de Carpintería y Producción**: Carretera Tulum – Macario Gómez, Quintana Roo.\n• **Teléfono & WhatsApp**: +52 1 984 210 8420\n• **Email Oficial**: hola@unoarquitectos.com\n\n¿Desea que agendemos una cita técnica presencial o por videollamada para revisar su proyecto?`;
  }

  // 8. TRAYECTORIA / ANGEL CERECEDA / QUIÉNES SON
  if (
    q.includes("angel") ||
    q.includes("cereceda") ||
    q.includes("quienes son") ||
    q.includes("experiencia") ||
    q.includes("fundador") ||
    q.includes("director") ||
    q.includes("equipo") ||
    q.includes("historia")
  ) {
    return lang === "en"
      ? `UNO Arquitectos was founded and is led by **Arch. Angel Cereceda**:\n\n• **Experience**: Over 20 years leading high-profile real estate development and architectural management.\n• **Academic Background**: Master's in Project Management (Universidad Europea de Madrid) and Master's in Sustainable Development.\n• **Notable Track Record**: Prior technical leadership in world-class projects including *Papaya Playa Project*, *Inmobilia Mayaliah* (25,000 m²), and *Selina*.\n\nOur studio designs spaces that add value to those who inhabit them, those who build them, and the land that receives them.`
      : `UNO Arquitectos está fundado y dirigido por el **Arq. Angel Cereceda**:\n\n• **Trayectoria**: Más de 20 años de liderazgo en desarrollo inmobiliario y gestión integral de obras de alta gama.\n• **Formación**: Máster en Project Management (Universidad Europea de Madrid) y Máster en Desarrollo Sostenible.\n• **Obras Previas Emblemáticas**: Dirección técnica en proyectos de renombre internacional como *Papaya Playa Project*, *Inmobilia Mayaliah* (25,000 m²) y *Selina*.\n\nNuestra firma diseña y construye espacios que pertenecen al sitio y perduran en el tiempo.`;
  }

  // 9. CLIENTES REMOTOS / INVERSIONISTAS
  if (q.includes("extranjer") || q.includes("remot") || q.includes("fuera") || q.includes("no vivo") || q.includes("distancia")) {
    return lang === "en"
      ? `More than 60% of our clients reside outside Mexico (USA, Canada, Europe, and domestic investors):\n\n• **Remote Traceability**: Weekly high-definition photo and video reports, drone aerial surveys, and BIM milestone reviews.\n• **Bilingual Legal & Contracts**: Bi-lingual contracts under Mexican law with strict guarantees.\n• **Financial Certitude**: Parametric accounts with zero hidden extras.\n\nYou do not need to be on site; we act as your trusted technical director in Mexico.`
      : `Más del 60% de nuestros clientes residen fuera de Quintana Roo o en el extranjero (EE.UU., Canadá, Europa e inversionistas nacionales):\n\n• **Trazabilidad a Distancia**: Reportes semanales fotográficos en alta resolución, vuelos de dron y bitácora técnica digital.\n• **Certeza Legal y Contratos Bilingües**: Contratos con fianzas de cumplimiento bajo legislación mexicana y comunicación bilingüe continua.\n• **Transparencia Financiera**: Cuentas claras con control de costos en tiempo real.\n\nNo necesita estar presente en obra; nosotros somos sus ojos técnicos y garantes de calidad.`;
  }

  // 10. SALUDOS Y DIÁLOGO SOCIAL
  if (q.includes("hola") || q.includes("buenos") || q.includes("buenas") || q.includes("que tal") || q.includes("gracias") || q.includes("saludos")) {
    return lang === "en"
      ? `Hello${nameGreeting}! It is a pleasure to assist you. At UNO Arquitectos, we are ready to guide you on bioclimatic design, native materials (Chukum, Tzalam), karstic engineering, permits in Riviera Maya, or turnkey project execution.\n\nWhat aspect of your project would you like to discuss today?`
      : `¡Hola${nameGreeting}! Un placer saludarle. En UNO Arquitectos estamos a su entera disposición para orientarle en diseño bioclimático contemporáneo, materiales autóctonos (Chukum y Tzalam), cimentaciones kársticas, normativas en la Riviera Maya o la ejecución de su proyecto llave en mano.\n\n¿Qué aspecto de su proyecto le gustaría evaluar hoy?`;
  }

  // DEFAULT CONTEXTUAL
  return lang === "en"
    ? `At UNO Arquitectos${nameGreeting}, we specialize in **Boutique Tropical Contemporary Architecture and Engineering** across Riviera Maya, led by **Arch. Angel Cereceda** (20+ years of experience, Master in Project Management).\n\nWe would be glad to evaluate your lot or project brief. Would you like to explore our materials (Chukum/Tzalam), parametric costs, karstic foundation engineering, or connect directly via WhatsApp with our team?`
    : `En UNO Arquitectos${nameGreeting}, nos especializamos en **Arquitectura Contemporánea Tropical y Alta Ingeniería** en Riviera Maya, bajo la dirección del **Arq. Angel Cereceda** (más de 20 años de experiencia, Máster en Project Management).\n\nNos dará mucho gusto evaluar su terreno o proyecto. ¿Desea consultar sobre materiales autóctonos (Chukum/Tzalam), presupuestos paramétricos, ingeniería de cimentación kárstica o conectar directamente por WhatsApp con nuestros directores?`;
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

      // 2. Guardar en almacenamiento local
      if (typeof window !== "undefined") {
        localStorage.setItem("uno_lead_name", leadName.trim());
        localStorage.setItem("uno_lead_phone", leadPhone.trim());
        localStorage.setItem("uno_lead_email", leadEmail.trim());
        localStorage.setItem("uno_lead_captured", "true");
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
          aria-label="WhatsApp Contact"
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
          aria-label="Toggle AI consultant chatbot"
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
