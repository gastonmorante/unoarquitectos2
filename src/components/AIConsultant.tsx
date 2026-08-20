import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import {
  Send,
  X,
  Sparkles,
  User,
  Bot,
  MessageCircle
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
      return "Welcome to **UNO Arquitectos**. I am your AI Technical Advisor in Architecture & High-Performance Engineering.\n\nI can assist you with bioclimatic design, native tropical materials (Chukum, Tzalam), karstic soil foundations, permits in Riviera Maya, or help shape your bespoke project.\n\n*What topic would you like to explore today?*";
    case "it":
      return "Benvenuto su **UNO Arquitectos**. Sono il suo Consulente Tecnico AI di Architettura e Alta Ingegneria.\n\nPosso assisterla su progettazione bioclimatica, materiali autoctoni (Chukum, Tzalam), fondazioni su terreno carsico, permessi in Riviera Maya o strutturare il suo progetto su misura.\n\n*Quale argomento desidera approfondire oggi?*";
    case "fr":
      return "Bienvenue chez **UNO Arquitectos**. Je suis votre Conseiller Technique IA en Architecture et Ingénierie Tropicale.\n\nJe peux vous orienter sur la conception bioclimatique, les matériaux régionaux (Chukum, Tzalam), les fondations en sol karstique, les permis en Riviera Maya ou le développement de votre projet sur mesure.\n\n*Quel sujet souhaitez-vous explorer aujourd'hui ?*";
    default:
      return "Bienvenido a **UNO Arquitectos**. Soy su Asesor Técnico de Inteligencia Artificial en Arquitectura e Ingeniería.\n\nPuedo orientarle con rigor técnico sobre diseño bioclimático contemporáneo, materiales autóctonos (Chukum, Tzalam), cimentaciones en suelo kárstico, normativas en Riviera Maya o la estructuración integral de su proyecto.\n\n*¿Qué tema le gustaría explorar hoy?*";
  }
};

// Motor de Conocimiento Local de Respaldo para Garantizar Respuestas Exquisitas en Todo Momento
const getLocalArchitecturalResponse = (query: string, lang: Language): string => {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 1. TZALAM
  if (q.includes("tzalam")) {
    return lang === "en"
      ? "The **Tzalam** (*Lysiloma latisiliquum*), also known as the Caribbean Walnut or Mayan Walnut, is a native tropical hardwood from the Yucatan Peninsula:\n\n• **Physical Properties**: High hardness, exceptional resistance to decay, Caribbean humidity, and marine salinity.\n• **Aesthetic Character**: Rich reddish-brown walnut tones with distinct golden undertones and tight grain.\n• **Architectural Use**: Used in bespoke exterior decks, pergolas, custom sensory millwork, and facade louvers.\n\nAt UNO Arquitectos, we cure and seal all Tzalam wood in our regional workshop to ensure dimensional stability over decades."
      : "El **Tzalam** (*Lysiloma latisiliquum*), conocido también como el nogal del Caribe o nogal maya, es una madera tropical dura autóctona de la Península de Yucatán:\n\n• **Propiedades Físicas**: Extraordinaria densidad y resistencia natural a la humedad caribeña, salinidad marina y plagas de termitas.\n• **Carácter Estético**: Tonalidades rojizas con vetas doradas profundas y veteado cerrado de gran nobleza visual.\n• **Uso Arquitectónico**: Ideal para pérgolas bioclimáticas, celosías de fachada, decks exteriores y carpintería fina sensorial.\n\nEn nuestro taller de producción tratamos y curamos el Tzalam con aceites naturales para garantizar su estabilidad dimensional frente a la intemperie.";
  }

  // 2. CHUKUM
  if (q.includes("chukum")) {
    return lang === "en"
      ? "The **Natural Chukum** is a millenary Mayan architectural stucco made by boiling the organic resin from the bark of the wild *Havardia albicans* tree and mixing it with local limestone powder:\n\n• **Impermeability**: Creates a seamless, waterproof mineral membrane.\n• **Aesthetics & Aging**: Soft, tactile velvet finish in warm limestone hues that ages gracefully without requiring chemical paints.\n• **Applications**: Pools, interior walls, wet areas, bathrooms, and continuous flooring.\n\nIt is one of UNO Arquitectos' signature materials for sensory, honest spaces."
      : "El **Chukum Natural** es un acabado mineral milenario de origen maya que se elabora hirviendo la corteza del árbol silvestre *Havardia albicans* combinada con polvo de piedra caliza y cemento blanco:\n\n• **Impermeabilidad Natural**: Forma una superficie hidrófuga continua, ideal para piscinas, espejos de agua y muros de baño.\n• **Textura Sensorial**: Acabado sedoso al tacto con tonalidades arena marfil que madura con distinción con el paso del tiempo sin requerir pintura.\n• **Aislamiento Térmico**: Refleja la radiación solar y mantiene frescos los interiores en climas cálidos y húmedos.\n\nEs uno de los sellos distintivos en las obras de UNO Arquitectos por su calidez y pertenencia al entorno.";
  }

  // 3. TULUM / PERMISOS / NORMATIVAS
  if (q.includes("tulum") || q.includes("normativa") || q.includes("permiso") || q.includes("regula") || q.includes("cos") || q.includes("cus") || q.includes("licencia")) {
    return lang === "en"
      ? "In **Tulum and Quintana Roo**, construction is strictly regulated by environmental programs (POEL) and municipal master plans (PDU):\n\n• **COS and CUS Restrictions**: Typical land coverage ratios require preserving 40% to 60% of original native jungle on your lot.\n• **Environmental Permits (MIA / SEMARNAT)**: Required to protect the subterranean aquifer, cenotes, and mangrove systems.\n• **Eco-Infrastructure**: Strict prohibition of traditional septic tanks; requires certified wastewater treatment plants (PTAR) with bio-filter wetlands.\n\nAt UNO Arquitectos, we manage 100% of the technical and legal licensing before breaking ground."
      : "En **Tulum y la Riviera Maya**, la edificación se rige por programas de ordenamiento ecológico (POEL) y planes de desarrollo urbano (PDU):\n\n• **Coeficientes COS y CUS**: Exigen respetar y conservar entre el 40% y 60% de la selva virgen dentro de cada lote.\n• **Permisos Ambientales (MIA / SEMARNAT)**: Protegen el manto freático y la flora endémica.\n• **Tratamiento Ecológico**: Se prohíben fosas sépticas tradicionales; es obligatorio instalar plantas de tratamiento (PTAR) o biodigestores con humedales de fitorremediación.\n\nEn UNO Arquitectos gestionamos la viabilidad legal y las licencias de construcción desde el primer día para asegurar certeza jurídica total.";
  }

  // 4. CIMENTACION / SUELO KARSTICO / CENOTES
  if (q.includes("karst") || q.includes("suelo") || q.includes("cimentaci") || q.includes("cenote") || q.includes("cimentar") || q.includes("huracan") || q.includes("sismo") || q.includes("estructur")) {
    return lang === "en"
      ? "Building on the **karstic limestone of the Yucatan Peninsula** requires specialized structural engineering:\n\n• **Geophysical GPR Surveying**: Ground Penetrating Radar scanning to detect subterranean voids or cavern formations.\n• **Rigid Foundation Slabs**: Reinforced concrete raft foundations tied with continuous grade beams to prevent differential settlement.\n• **Hurricane Resistance**: Structural calculations strictly adhere to Mexican building codes to withstand Category 5 hurricanes (wind speeds up to 280 km/h)."
      : "Construir sobre la **roca kárstica de la Península de Yucatán** demanda alta ingeniería civil:\n\n• **Prospección Geofísica (GPR)**: Escaneo por georradar para mapear el subsuelo y descartar oquedades o fallas kársticas ocultas.\n• **Losas de Cimentación Rigidizadas**: Zapatas corridas y trabes de liga de concreto armado que absorben cualquier asentamiento diferencial.\n• **Cálculo Antihuracanes**: Estructuras calculadas bajo norma CFE/RCDF para soportar vientos de huracán Categoría 5 (hasta 280 km/h).";
  }

  // 5. LLAVE EN MANO / TIEMPOS / FASES
  if (q.includes("llave en mano") || q.includes("proceso") || q.includes("fases") || q.includes("etapa") || q.includes("tiempo") || q.includes("cuanto tardan") || q.includes("tardan")) {
    return lang === "en"
      ? "Our **Turnkey (Llave en Mano)** model provides end-to-end peace of mind across 4 structured phases:\n\n1. **Conceptual & Bioclimatic Design** (4–6 weeks): Architecture, 3D renderings, and volume studies.\n2. **Executive Engineering** (6–8 weeks): Structural, hydraulic, sanitary, and solar calculations with parametric budget.\n3. **Licensing & Permits**: Municipal and environmental approvals.\n4. **Construction & Handover** (8–14 months depending on m²): On-site direction with weekly tracking and zero surprise costs."
      : "Nuestro servicio **Llave en Mano (Turnkey)** brinda tranquilidad total a través de 4 fases metodológicas:\n\n1. **Diseño Conceptual y Bioclimático** (4 a 6 semanas): Definición formal, espacial, renders 3D y análisis de asoleamiento.\n2. **Proyecto Ejecutivo e Ingenierías** (6 a 8 semanas): Planos constructivos, memorias de cálculo kárstico y presupuesto paramétrico desglosado.\n3. **Gestoría y Licencias**: Tramitación de licencias municipales y ambientales.\n4. **Construcción y Entrega** (8 a 14 meses según m²): Dirección integral de obra con reportes fotográficos continuos y entrega con trazabilidad.";
  }

  // 6. COSTOS / PRESUPUESTOS
  if (q.includes("costo") || q.includes("precio") || q.includes("presupuesto") || q.includes("cuanto cuesta") || q.includes("tarifa") || q.includes("cuanto sale")) {
    return lang === "en"
      ? "At UNO Arquitectos, we work with **transparent parametric budgets** tailored to each unique lot and architectural program:\n\n• Costs depend on the topographic slope, soil mechanics, level of custom woodwork (Tzalam), and off-grid technology.\n• We establish a closed, line-by-line concept catalog before starting construction to avoid overcosts.\n• We do not quote generic square-meter estimates in chat as it compromises technical integrity.\n\nWe cordially invite you to schedule a feasibility session with Arch. Angel Cereceda to analyze your specific project."
      : "En UNO Arquitectos trabajamos con **presupuestos paramétricos transparentes** estructurados a la medida de cada terreno y programa arquitectónico:\n\n• El costo se determina por la mecánica kárstica, topografía, nivel de acabados en Chukum/Tzalam e ingenierías (solar, captación pluvial).\n• Establecemos un catálogo de conceptos desglosado con control de cambios formal antes de colocar la primera piedra.\n• Por ética y rigor técnico, no emitimos cotizaciones genéricas por m² en chat sin conocer el lote.\n\nLe invitamos a agendar una sesión técnica con el Arq. Angel Cereceda para evaluar su caso específico.";
  }

  // 7. UBICACION / OFICINAS / DONDE ESTAN
  if (q.includes("donde estan") || q.includes("donde estan ubicados") || q.includes("ubicaci") || q.includes("oficina") || q.includes("direccion") || q.includes("playa") || q.includes("cancun")) {
    return lang === "en"
      ? "UNO Arquitectos operates primarily across the Riviera Maya with two key physical locations:\n\n• **Main Headquarters**: Plaza Palmeras, Playa del Carmen, Quintana Roo.\n• **Woodwork & Production Workshop**: Tulum – Macario Gómez Highway, Quintana Roo.\n• **Liaison Office**: Polanco, Mexico City (for central Mexico clients).\n\nWe serve projects across Tulum, Playa del Carmen, Cancun, Puerto Morelos, Bacalar, and CDMX."
      : "UNO Arquitectos opera en toda la Riviera Maya con dos sedes operativas:\n\n• **Oficinas Centrales**: Plaza Palmeras, Playa del Carmen, Quintana Roo.\n• **Taller de Carpintería y Producción**: Carretera Tulum – Macario Gómez, Quintana Roo.\n• **Oficina de Enlace**: Polanco, Ciudad de México.\n\nAtendemos proyectos residenciales y boutique en Tulum, Playa del Carmen, Cancún, Puerto Morelos, Bacalar y CDMX.";
  }

  // 8. ANGEL CERECEDA / TRAYECTORIA / QUIENES SON
  if (q.includes("angel") || q.includes("cereceda") || q.includes("quienes son") || q.includes("experiencia") || q.includes("fundador") || q.includes("director") || q.includes("estudio")) {
    return lang === "en"
      ? "UNO Arquitectos was founded and is led by **Arch. Angel Cereceda**:\n\n• **Experience**: Over 20 years leading high-profile real estate development and architectural management.\n• **Academic Background**: Master's in Project Management (Universidad Europea de Madrid) and Master's in Sustainable Development.\n• **Notable Track Record**: Prior technical leadership in world-class projects including *Papaya Playa Project*, *Inmobilia Mayaliah* (25,000 m²), and *Selina*.\n\nOur studio designs spaces that add value to those who inhabit them, those who build them, and the land that receives them."
      : "UNO Arquitectos está fundado y dirigido por el **Arq. Angel Cereceda**:\n\n• **Trayectoria**: Más de 20 años de liderazgo en desarrollo inmobiliario y gestión integral de obras de alta gama.\n• **Formación**: Máster en Project Management (Universidad Europea de Madrid) y Máster en Desarrollo Sostenible.\n• **Obras Previas Emblemáticas**: Dirección técnica en proyectos de renombre internacional como *Papaya Playa Project*, *Inmobilia Mayaliah* (25,000 m²) y *Selina*.\n\nNuestra firma diseña y construye espacios que pertenecen al sitio y perduran en el tiempo.";
  }

  // 9. CLIENTES EXTRANJEROS / REMOTOS
  if (q.includes("extranjer") || q.includes("remot") || q.includes("fuera") || q.includes("no vivo") || q.includes("inversion")) {
    return lang === "en"
      ? "More than 60% of our clients reside outside Mexico (USA, Canada, Europe):\n\n• **Remote Traceability**: Weekly high-definition photo and video reports, drone aerial surveys, and BIM milestone reviews.\n• **Bilingual Legal & Contracts**: Bi-lingual contracts under Mexican law with strict guarantees.\n• **Financial Certitude**: Parametric accounts with zero hidden extras.\n\nYou do not need to be on site; we act as your trusted technical director in Mexico."
      : "Más del 60% de nuestros clientes residen fuera de México (EE.UU., Canadá, Europa y CDMX):\n\n• **Trazabilidad a Distancia**: Reportes semanales fotográficos en alta resolución, vuelos de dron y bitácora técnica digital.\n• **Certeza Legal y Contratos Bilingües**: Contratos con fianzas de cumplimiento bajo legislación mexicana y comunicación bilingüe continua.\n• **Transparencia Financiera**: Cuentas claras con control de costos en tiempo real.\n\nNo necesita estar presente en obra; nosotros somos sus ojos técnicos y garantes de calidad.";
  }

  // DEFAULT CONTEXTUAL
  return lang === "en"
    ? "UNO Arquitectos specializes in **Boutique Tropical Contemporary Architecture** in the Riviera Maya and CDMX, directed by **Arch. Angel Cereceda** (20+ years of experience, Master in Project Management, prior leadership in Papaya Playa Project and Inmobilia Mayaliah).\n\nWe would be glad to evaluate your lot or architectural brief. Would you like to explore our materials (Chukum/Tzalam), karstic foundations, or connect directly via WhatsApp with our team?"
    : "UNO Arquitectos es un estudio boutique de **Arquitectura Contemporánea Tropical y Alta Ingeniería** en Riviera Maya y CDMX, dirigido por el **Arq. Angel Cereceda** (más de 20 años de trayectoria, Máster en Project Management por la Universidad Europea de Madrid y ex director técnico en obras como Papaya Playa Project e Inmobilia Mayaliah).\n\nNos encantará orientarle sobre materiales autóctonos (Chukum y Tzalam), normativas de selva o cimentaciones kársticas. ¿Sobre qué tema le gustaría profundizar o desea conectar directamente por WhatsApp?";
};

export default function AIConsultant() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Lead capture state
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");

  // Cursor tracking motion variables with smooth physics
  const bgLogoX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 - 100 : 200);
  const bgLogoY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 - 100 : 200);
  
  const smoothBgX = useSpring(bgLogoX, { damping: 40, stiffness: 80 });
  const smoothBgY = useSpring(bgLogoY, { damping: 40, stiffness: 80 });

  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
  }, [bgLogoX, bgLogoY]);

  // Reset/Initialize greeting when language changes
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: GET_GREETING_MSG(language),
        timestamp: new Date()
      }
    ]);
  }, [language]);

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
  }, [messages, isLoading]);

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

    // Check if user shared name
    const nameMatch = trimmedText.match(/(?:mi nombre es|me llamo|soy|my name is|i am)\s+([A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)?)/i);
    if (nameMatch && nameMatch[1]) {
      setLeadName(nameMatch[1]);
    }

    // Check if user shared an email to record as lead
    const emailMatch = trimmedText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      const extractedEmail = emailMatch[0];
      setLeadEmail(extractedEmail);
      try {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: (nameMatch && nameMatch[1]) || leadName || "Consultante Web",
            email: extractedEmail,
            message: `Lead interactuando en chat: "${trimmedText}"`,
            source: "Asesor IA Chatbot"
          })
        });
      } catch {}
    }

    // OPEN CHAT WITH GEMINI BACKEND OR NEURAL LOCAL FALLBACK
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
          userProfile: { name: leadName, email: leadEmail }
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
          content: data.text || data.response || getLocalArchitecturalResponse(trimmedText, language),
          timestamp: new Date()
        }
      ]);
    } catch {
      // Offline / Static Resilient Knowledge Engine
      const fallbackAnswer = getLocalArchitecturalResponse(trimmedText, language);
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
              className="bg-white border border-arena-calida/30 shadow-2xl rounded-2xl overflow-hidden w-[calc(100vw-2rem)] sm:w-[380px] max-w-[380px] h-[min(520px,75vh)] flex flex-col mb-3 sm:mb-4"
            >
              {/* Header */}
              <div className="bg-white border-b border-gris-piedra py-3.5 px-4 flex items-center justify-between text-gris-texto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-uno/10 border border-teal-uno/30 flex items-center justify-center text-teal-uno">
                    <UnoIsotype size={18} color="#00A3A3" cubeColor="#FFFFFF" strokeColor="#00A3A3" />
                  </div>
                  <div>
                    <h4 className="font-label-caps text-xs font-semibold tracking-wide text-teal-uno uppercase">
                      {language === "es" ? "Asesor IA" : "AI Advisor"}
                    </h4>
                    <span className="font-label-caps text-[9px] tracking-wider text-gris-texto uppercase flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-uno inline-block animate-pulse"></span>
                      {language === "es" ? "Ingeniería & Arquitectura" : "Engineering & Architecture"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gris-texto hover:text-teal-uno transition-colors cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages viewport */}
              <div className="flex-1 overflow-y-auto p-4 bg-surface-container-lowest space-y-4">
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

                    <div className="max-w-[82%]">
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

              {/* Quick Prompt suggestions */}
              {messages.length <= 3 && !isLoading && (
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

              {/* Chat Form */}
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
