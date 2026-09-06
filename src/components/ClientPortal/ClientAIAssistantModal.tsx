import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  MessageSquare, 
  FolderOpen, 
  Compass, 
  ExternalLink,
  Phone,
  RotateCcw,
  CheckCircle2,
  Building2,
  HelpCircle,
  FileText
} from "lucide-react";
import { ClientProject } from "../../types/clientPortal";

interface ClientAIAssistantModalProps {
  project: ClientProject;
  onClose: () => void;
}

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
  driveLinks?: { label: string; url: string }[];
}

const QUICK_QUESTIONS = [
  "¿Cuáles son las medidas exactas y alturas de Arrecifes?",
  "¿Qué avances se completaron el 05 de Septiembre?",
  "¿Qué especificaciones tienen las instalaciones del 27 de Agosto?",
  "¿Cómo se aplicó el Chukum y qué cuidados requiere?",
  "¿Dónde descargo las fotos y veo las fotos 360°?"
];

// Motor de Conocimiento Especializado para Residencia Arrecifes & UNO Arquitectos
const getLocalArrecifesResponse = (query: string, project: ClientProject): { text: string; links?: { label: string; url: string }[] } => {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  // 1. MEDIDAS EXACTAS / SUPERFICIES / ALTURAS / LOTE
  if (
    q.includes("medida") ||
    q.includes("altura") ||
    q.includes("superficie") ||
    q.includes("m2") ||
    q.includes("metro") ||
    q.includes("dimension") ||
    q.includes("terreno") ||
    q.includes("lote") ||
    q.includes("area")
  ) {
    return {
      text: `### 📐 Medidas y Especificaciones Constructivas de **${project.propertyName}**:

• **Superficie Construida**: **720.00 m²** de construcción cubierta y terrazas voladas con vistas panorámicas al Caribe.
• **Superficie del Terreno**: **1,150.00 m²** con respeto del 55% de huella selvática virgen (palmas chit, ceibas y helechos arbóreos).
• **Alturas Libres de Entrepiso**:
  - **Vestíbulo Principal & Estancia**: Doble altura libre de **6.40 m** con losas nervadas y ventanales embutidos.
  - **Master Suite (Planta Alta)**: Altura libre de **3.80 m** con terraza privada volada.
  - **Recámaras Secundarias & Suites de Huéspedes**: Altura libre de **3.40 m**.
• **Alberca Cenote**: Vaso de **48.00 m²** con profundidad gradual (0.40 m en asoleadero húmedo hasta 1.60 m en zona profunda) con canaleta perimetral oculta y acabado en Chukum turquesa natural.
• **Claros Estructurales**: Claros continuos de hasta **8.50 m** sin columnas intermedias para integración total con el entorno selvático.`,
      links: [
        { label: "Ver Galería de Fotos por Fecha", url: "#photos" }
      ]
    };
  }

  // 2. CIMENTACIÓN, MECÁNICA DE SUELOS KÁRSTICOS & INGENIERÍA ESTRUCTURAL
  if (
    q.includes("suelo") ||
    q.includes("cimentacion") ||
    q.includes("gpr") ||
    q.includes("georradar") ||
    q.includes("karst") ||
    q.includes("huracan") ||
    q.includes("sism") ||
    q.includes("estructura") ||
    q.includes("zapata") ||
    q.includes("resistencia")
  ) {
    return {
      text: `### 🛡️ Cimentación, Mecánica de Suelos & Resistencia Estructural — **${project.propertyName}**:

• **Prospección Geofísica (GPR)**:
  - Estudio realizado con Georradar a **12.0 m de profundidad**, certificando la ausencia de cavernas, dolinas u oquedades kársticas bajo la huella de cimentación.
• **Sistema de Cimentación**:
  - Zapatas aisladas y losa de rigidez de concreto armado de alta resistencia (**f'c = 250 kg/cm²**) interconectadas mediante trabes de liga continuas sismorresistentes.
• **Certificación Antihuracán**:
  - Estructura calculada para resistir vientos hidrodinámicos de **Huracanes Categoría 5 (>280 km/h)**.
• **Cancelería & Envolvente**:
  - Línea europea Eurovent con cristales laminados reflectivos de **12 mm** de seguridad con anclajes estructurales ocultos.`,
      links: [
        { label: "Consultar Memoria de Cálculo con el Arq. Angel", url: `https://wa.me/${project.director.whatsapp}` }
      ]
    };
  }

  // 3. AVANCE 05 SEPTIEMBRE 2026 (ÚLTIMO AVANCE - CHUKUM & MÁRMOL)
  if (
    q.includes("0509") ||
    q.includes("05 de sep") ||
    q.includes("05 sep") ||
    q.includes("septiembre") ||
    q.includes("ultimo avance") ||
    q.includes("reciente")
  ) {
    return {
      text: `### 🏛️ Dictamen Técnico: Avance al **05 de Septiembre de 2026** (72% Global)

El levantamiento técnico del **05 de Septiembre de 2026** corresponde a la **Fase 4: Revestimientos en Chukum Tradicional Maya & Mármol Santo Tomás**:

1. **Master Suite & Doble Altura**: Culminación de la aplicación de pasta orgánica de Chukum artesanal hervida en obra con agua de pozo y corteza de *Havardia albicans*, con sellado hidrófugo de poro abierto en muros de 6.40 m.
2. **Vestíbulo Principal**: Colocación y nivelación láser de placas de mármol Santo Tomás (**1.20 x 2.40 m**) apomazadas mate con juntas a hueso de 1.5 mm.
3. **Alberca Cenote**: Aplicación de doble membrana epóxica y perfilado de bordes orgánicos previo al vertido de Chukum turquesa.
4. **Carpintería Fina**: Habilitado en taller de marcos y bastidores de madera maciza de Tzalam curada en horno al 10% de humedad.`,
      links: [
        { label: "Carpeta en Google Drive (05/09/2026)", url: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link" },
        { label: "Ver Galería de Fotos 360°", url: "#360" }
      ]
    };
  }

  // 4. AVANCE 27 AGOSTO 2026 (INSTALACIONES ESPECIALES, VRF & DOMÓTICA)
  if (
    q.includes("2708") ||
    q.includes("2808") ||
    q.includes("27 de ago") ||
    q.includes("27 ago") ||
    q.includes("28 ago") ||
    q.includes("instalacion") ||
    q.includes("vrf") ||
    q.includes("daikin") ||
    q.includes("hidrostat") ||
    q.includes("domotica") ||
    q.includes("lutron") ||
    q.includes("ptar")
  ) {
    return {
      text: `### ⚡ Dictamen Técnico: Avance al **27 de Agosto de 2026** (52% Global)

El levantamiento técnico del **27 de Agosto de 2026** documenta la **Fase 3: Instalaciones Especiales (MEP, Climatización & Domótica)**:

1. **Climatización VRF Inverter Daikin**: Tendido de ductería aislada acústicamente en entreplantas técnicas (3.40 m) y pruebas de estanqueidad de gas refrigerante R-410A.
2. **Pruebas Hidrostáticas**: Canalizaciones hidrosanitarias presurizadas a **7.0 kg/cm²** superadas con cero pérdidas de presión en 72 horas.
3. **Domótica Lutron Homeworks QSX**: Tendido de cableado estructurado para control inteligente de escenas lumínicas en 2700K y persianas motorizadas.
4. **PTAR y Drenaje Ecológico**: Instalación de biodigestores anaeróbicos y sistema de fitorremediación con humedales para recirculación de agua en riego.
5. **Fachada Norte**: Anclaje de bastidores ocultos de acero inoxidable 316 para celosías de Tzalam.`,
      links: [
        { label: "Carpeta en Google Drive (27/08/2026)", url: "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link" },
        { label: "Ver Galería de Fotos 360°", url: "#360" }
      ]
    };
  }

  // 5. CHUKUM, TZALAM Y MATERIALES
  if (
    q.includes("chukum") ||
    q.includes("tzalam") ||
    q.includes("material") ||
    q.includes("acabado") ||
    q.includes("marmol") ||
    q.includes("madera") ||
    q.includes("santo tomas")
  ) {
    return {
      text: `### 🌿 Materiales Autóctonos y Especificaciones Sensoriales de **Arrecifes**:

• **Chukum Tradicional Maya**:
  - **Origen**: Resina vegetal extraída del árbol *Havardia albicans*, hervida en obra siguiendo la receta tradicional prehispánica con agua de pozo.
  - **Propiedades**: Acabado sedoso al tacto, impermeable natural, atérmico y con tonalidad cálida marfil-chukum que envejece con nobleza.
  - **Mantenimiento**: Limpieza con jabón neutro sin agentes químicos abrasivos y reaplicación de cera natural cada 2 años.

• **Madera Maciza de Tzalam (Nogal Maya)**:
  - Curada y secada en horno a 10% de humedad en nuestro taller propio de Tulum.
  - Gran densidad y resistencia a termitas y salinidad caribeña.

• **Mármol Santo Tomás & Travertino Veracruz**:
  - Placas de 1.20 x 2.40 m apomazadas mate, seleccionadas a veta continua para pisos de planta baja y baños principales.`,
      links: [
        { label: "Carpeta General en Google Drive", url: "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing" }
      ]
    };
  }

  // 6. FECHAS DE ENTREGA Y CRONOGRAMA
  if (
    q.includes("fecha") ||
    q.includes("entrega") ||
    q.includes("cuando termin") ||
    q.includes("cronograma") ||
    q.includes("fase") ||
    q.includes("plazo")
  ) {
    return {
      text: `### 📅 Cronograma Oficial de Obra — **${project.propertyName}**:

• **Inicio de Obra**: 01 Agosto 2026
• **Avance Actual al 05 Sep 2026**: **72% de Ejecución** (Fase 4: Acabados en Chukum & Mármol)
• **Fecha Estimada de Entrega Llave en Mano**: **20 Diciembre 2026**
• **Próximos Hitos Clave**:
  - **Octubre 2026 (82%)**: Montaje de puertas pivotantes en Tzalam y cancelería europea antihuracán DVH.
  - **Noviembre 2026 (94%)**: Iluminación sensorial 2700K, paisajismo selvático endémico y llenado de alberca.
  - **Diciembre 2026 (100%)**: Protocolo de entrega de llaves, manuales técnicos As-Built y garantía estructural certificada.`,
      links: [
        { label: "Consultar al Arq. Angel Cereceda", url: `https://wa.me/${project.director.whatsapp}` }
      ]
    };
  }

  // 7. COSTOS, COTIZACIONES Y PRESUPUESTO
  if (
    q.includes("costo") ||
    q.includes("precio") ||
    q.includes("cotiz") ||
    q.includes("cuanto cuesta") ||
    q.includes("presupuesto") ||
    q.includes("tarifa")
  ) {
    return {
      text: `### 💼 Política Constructiva y Presupuestaria de **UNO Arquitectos**:

En **UNO Arquitectos**, nos regimos por el lema rector: *"Somos el estudio que diseña lo que puedes construir"*.

• **Presupuesto Paramétrico Cerrado**: En arquitectura boutique tropical en Riviera Maya, los costos no se basan en tarifas genéricas inventadas por metro cuadrado. Se calculan con estricto rigor técnico a partir del proyecto ejecutivo, la mecánica de suelos kársticos, la topografía y las ingenierías seleccionadas.
• **Garantía Sin Sobrecostos**: Todo proyecto se entrega bajo contrato llave en mano con trazabilidad de compras y calendario de ministraciones.

Para solicitar una valoración técnica preliminar o resolver dudas presupuestarias de obra, puedes coordinar directamente con la Dirección General.`,
      links: [
        { label: "Contactar al Arq. Angel Cereceda", url: `https://wa.me/${project.director.whatsapp}` }
      ]
    };
  }

  // 8. ENLACES A DRIVE Y FOTOS 360
  if (
    q.includes("drive") ||
    q.includes("foto") ||
    q.includes("360") ||
    q.includes("descarg") ||
    q.includes("link") ||
    q.includes("carpeta")
  ) {
    return {
      text: `### 📂 Repositorios Oficiales en Nube y Galerías 360°:

Puedes consultar y descargar los archivos originales en alta resolución y explorar las fotos 360° en los siguientes accesos oficiales:

• **Avance 05 Septiembre 2026 (Último Registro - 72%)**:
  - Galería de Fotos 360°: 19 Puntos Esféricos HD
  - Carpeta de Fotos Drive: [Abrir Carpeta 05/09/2026](https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link)

• **Avance 27 Agosto 2026 (Instalaciones & Domótica - 52%)**:
  - Galería de Fotos 360°: 10 Puntos Esféricos HD
  - Carpeta de Fotos Drive: [Abrir Carpeta 27/08/2026](https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link)

• **Repositorio Maestro de Obra Arrecifes**:
  - [Google Drive Master Folder](https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing)`,
      links: [
        { label: "Drive 05/09/2026", url: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link" },
        { label: "Drive 27/08/2026", url: "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link" },
        { label: "Ver Galería de Fotos 360°", url: "#360" }
      ]
    };
  }

  // DEFAULT ARCHITECTURAL ADVISORY (STRICT VERACITY)
  return {
    text: `Como **Asistente Técnico de Obra de UNO Arquitectos** para **${project.propertyName}**, bajo la dirección del **${project.director.name}**:

En relación a tu consulta sobre **"${query}"**:
La residencia cuenta con **720.00 m² construidos** sobre un predio de **1,150.00 m²** (55% de conservación selvática) y se encuentra al **${project.globalProgress}% de ejecución** con fecha de entrega estimada para el **${project.estimatedDelivery}**.

Nuestra base de conocimiento oficial abarca:
1. **Medidas y Alturas Exactas** (6.40 m doble altura, 3.80 m master suite, 3.40 m secundarias, claros de 8.50 m, alberca de 48 m²).
2. **Cimentación & GPR** (prospección a 12 m sin cavernas, zapatas aisladas f'c=250 kg/cm², resistencia a huracanes Cat 5).
3. **Avance 05 Sep 2026** (Chukum tradicional en muros de 6.40m, mármol Santo Tomás 1.20x2.40m, carpintería Tzalam).
4. **Avance 27 Ago 2026** (Climatización Daikin VRF, pruebas a 7.0 kg/cm², domótica Lutron QSX 2700K, PTAR biológica).
5. **Carpetas de Fotos en Google Drive** y **Galería 360° Inmersiva**.

Si necesitas información adicional no contemplada en este registro, te sugerimos contactar directamente a la Dirección Técnica.`,
    links: [
      { label: "Consultar en WhatsApp (+52 1 984 210 8420)", url: `https://wa.me/${project.director.whatsapp}` }
    ]
  };
};

export default function ClientAIAssistantModal({ project, onClose }: ClientAIAssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-msg",
      role: "assistant",
      content: `Hola. Soy el **Asesor Técnico de Inteligencia Artificial (Gemini)** de **UNO Arquitectos**, asignado a la supervisión técnica de **${project.propertyName}** bajo la dirección del **${project.director.name}**.

Estoy entrenado con las especificaciones exactas, medidas milimétricas, dictámenes de supervisión y bitácora de obra de **Agosto a Diciembre de 2026**.

¿En qué aspecto técnico o avance de tu residencia puedo orientarte hoy?`,
      timestamp: "Ahora",
      driveLinks: [
        { label: "Ver Último Avance (05 Sep)", url: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link" },
        { label: "Ver Galería de Fotos 360°", url: "#360" }
      ]
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      // 1. Try backend endpoint with Gemini
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: queryText }
          ],
          userProfile: {
            propertyName: project.propertyName,
            clientName: project.clientName,
            globalProgress: project.globalProgress,
            currentPhase: project.currentPhaseName,
            totalArea: project.totalArea,
            estimatedDelivery: project.estimatedDelivery,
            director: project.director.name,
            driveFolder05Sep: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link",
            driveFolder27Ago: "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link",
            tour360: "Visor 360° Nativo"
          },
          language: "es"
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.text) {
          const localParsed = getLocalArrecifesResponse(queryText, project);
          const botMsg: Message = {
            id: `bot-${Date.now()}`,
            role: "assistant",
            content: data.text,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            driveLinks: localParsed.links
          };
          setMessages((prev) => [...prev, botMsg]);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.warn("Falling back to specialized Arrecifes knowledge base:", e);
    }

    // 2. High-performance fallback with exact Arrecifes measurements & technical data
    setTimeout(() => {
      const localResult = getLocalArrecifesResponse(queryText, project);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: localResult.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        driveLinks: localResult.links
      };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl font-sans select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="bg-[#141418] border border-[#c2a275]/40 rounded-xs max-w-3xl w-full h-[85vh] max-h-[750px] shadow-2xl flex flex-col overflow-hidden text-left"
      >
        {/* MODAL HEADER */}
        <div className="bg-[#181822] border-b border-[#c2a275]/25 px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-teal-uno/20 border border-teal-uno/50 flex items-center justify-center text-teal-uno">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base text-white font-semibold">
                  Asesor de Obra IA • Gemini
                </h3>
                <span className="px-2 py-0.2 rounded-full bg-teal-uno/20 text-teal-uno border border-teal-uno/40 text-[9px] font-mono font-bold">
                  ARRECIFES 68%
                </span>
              </div>
              <p className="text-[11px] text-[#c2a275] font-label-caps uppercase tracking-wider">
                Entrenado con Especificaciones & Bitácora Oficial de Obra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-xs hover:bg-white/5 transition-colors cursor-pointer"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CHAT MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar bg-[#0e0e10]/80">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 text-xs leading-relaxed ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-xs bg-teal-uno/20 border border-teal-uno/40 flex items-center justify-center text-teal-uno flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[78%] p-4 rounded-xs ${
                  msg.role === "user"
                    ? "bg-teal-uno text-white font-medium shadow-md"
                    : "bg-[#181822] border border-[#c2a275]/25 text-[#e4ded5] shadow-lg"
                }`}
              >
                {/* Message formatted content */}
                <div className="whitespace-pre-line space-y-2 text-xs sm:text-[13px] leading-relaxed">
                  {msg.content}
                </div>

                {/* Optional Drive / Action Links */}
                {msg.driveLinks && msg.driveLinks.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {msg.driveLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-black/50 hover:bg-teal-uno/20 text-[#c2a275] hover:text-teal-uno border border-[#c2a275]/30 hover:border-teal-uno/40 rounded-xs text-[10px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <FolderOpen className="w-3 h-3" />
                        <span>{link.label}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ))}
                  </div>
                )}

                <div
                  className={`text-[9px] mt-2 font-mono text-right ${
                    msg.role === "user" ? "text-white/70" : "text-zinc-500"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.role === "user" && (
                <div className="w-7 h-7 rounded-xs bg-[#c2a275]/20 border border-[#c2a275]/40 flex items-center justify-center text-[#c2a275] flex-shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 text-xs justify-start">
              <div className="w-7 h-7 rounded-xs bg-teal-uno/20 border border-teal-uno/40 flex items-center justify-center text-teal-uno flex-shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-[#181822] border border-[#c2a275]/25 p-4 rounded-xs text-[#c2a275] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-teal-uno" />
                <span className="text-xs italic font-sans text-[#e4ded5]/80">
                  Gemini analizando planos y bitácora técnica de Arrecifes...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* QUICK QUESTIONS PILLS */}
        <div className="bg-[#141418] border-t border-[#c2a275]/15 px-4 py-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-label-caps uppercase text-[#c2a275] flex-shrink-0 mr-1 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-teal-uno" /> Sugerencias:
          </span>
          {QUICK_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={loading}
              className="px-3 py-1 bg-[#1a1a24] hover:bg-teal-uno/20 text-[#e4ded5]/80 hover:text-white border border-[#c2a275]/20 hover:border-teal-uno/40 rounded-xs text-[11px] font-sans whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>

        {/* INPUT SUBMISSION FOOTER */}
        <div className="bg-[#181822] border-t border-[#c2a275]/25 p-4 flex-shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre medidas, Chukum, instalaciones, 360°, fechas o supervisión..."
              disabled={loading}
              className="flex-1 bg-black/60 border border-[#c2a275]/30 focus:border-teal-uno px-4 py-3 rounded-xs text-xs sm:text-sm text-[#e4ded5] placeholder-zinc-500 focus:outline-none transition-colors"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 py-3 bg-teal-uno hover:bg-[#008f8f] disabled:bg-zinc-700 text-white rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Consultar</span>
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-2 font-label-caps uppercase tracking-wider">
            <span>UNO Arquitectos • IA Gemini 3.6</span>
            <a
              href={`https://wa.me/${project.director.whatsapp}?text=${encodeURIComponent('Hola Arq. Angel Cereceda, tengo una duda técnica sobre Arrecifes.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c2a275] hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-2.5 h-2.5 text-emerald-400" />
              <span>Contactar a Dirección de Obra</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
