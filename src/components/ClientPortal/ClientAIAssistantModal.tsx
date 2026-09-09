import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  FolderOpen, 
  ExternalLink, 
  Phone, 
  HelpCircle 
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
        { label: "Ver Dictamen Técnico PDF", url: "#pdf" }
      ]
    };
  }

  // 3. AVANCE DE OBRA DEL 05 DE SEPTIEMBRE DE 2026 (72% GLOBAL)
  if (
    q.includes("05 sep") ||
    q.includes("5 sep") ||
    q.includes("septiembre") ||
    q.includes("ultimo") ||
    q.includes("reciente") ||
    q.includes("fase 4") ||
    q.includes("acabado") ||
    q.includes("marmol") ||
    q.includes("chukum") ||
    q.includes("tzalam")
  ) {
    return {
      text: `### 🏛️ Reporte Ejecutivo de Avance — **05 de Septiembre de 2026** (72% Global):

• **Fase**: Fase 4 — Acabados Arquitectónicos Nobles & Revestimientos Artesanales.
• **Chukum Maya Tradicional**:
  - Aplicado en muros de doble altura (**6.40 m**) y fachada exterior.
  - Elaborado con resina vegetal hervida in situ (*Havardia albicans*), polvo de piedra caliza y agua dulce de pozo filtrada, sellado con membrana de poro abierto.
• **Mármol Santo Tomás**:
  - Placas gran formato de **1.20 x 2.40 m** apomazadas acabado mate antideslizante con juntas milimétricas de 1.5 mm en vestíbulo y estancias.
• **Carpintería Fina de Tzalam**:
  - Madera tropical curada en horno al **10% de humedad relativa**, tratada contra xilófagos y sellada con aceites naturales mate.
• **Alberca Cenote**:
  - Doble impermeabilización epóxica flexible superada al 100% y colocación de recubrimiento en pasta de Chukum turquesa.`,
      links: [
        { label: "Abrir Carpeta Drive (05 Sep 2026)", url: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link" },
        { label: "Ver 19 Fotos 360° de esta fecha", url: "#360" }
      ]
    };
  }

  // 4. AVANCE DE OBRA DEL 27 DE AGOSTO DE 2026 (52% GLOBAL)
  if (
    q.includes("27 ago") ||
    q.includes("28 ago") ||
    q.includes("agosto") ||
    q.includes("fase 3") ||
    q.includes("mep") ||
    q.includes("instalacion") ||
    q.includes("aire") ||
    q.includes("clima") ||
    q.includes("daikin") ||
    q.includes("lutron") ||
    q.includes("electr") ||
    q.includes("hidraul") ||
    q.includes("ptar")
  ) {
    return {
      text: `### ⚡ Reporte Ejecutivo de Instalaciones — **27 de Agosto de 2026** (52% Global):

• **Fase**: Fase 3 — Instalaciones Ocultas MEP, Confort Bioclimático & Domótica.
• **Climatización VRF Inverter Daikin**:
  - Equipos de alta eficiencia energética ocultos en cámaras plénum de entrepiso (**3.40 m**) con ductería termoacústica y rejillas lineales perimetrales.
• **Instalación Hidráulica & Pruebas**:
  - Red presurizada con tubería termofusionada PPR-CT y CPVC industrial.
  - **Prueba Hidrostática Exitosa**: 72 horas continuas presurizada a **7.0 kg/cm² (100 PSI)** con cero caídas barométricas.
• **Domótica & Iluminación Lutron QSX**:
  - Cableado apantallado instalado y canalizado; luminarias LED empotradas con índice cromático **CRI > 95** en temperatura cálida de **2700K**.
• **Sustentabilidad Hídrica**:
  - Planta de Tratamiento de Aguas Residuales (**PTAR**) biológica y humedales de fitorremediación para reuso en riego selvático.`,
      links: [
        { label: "Abrir Carpeta Drive (27 Ago 2026)", url: "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link" },
        { label: "Ver 10 Fotos 360° de esta fecha", url: "#360" }
      ]
    };
  }

  // 5. BITÁCORA DIGITAL & CRONOLOGÍA DE AVANCES (18 FICHAS SEMANALES EN DRIVE)
  if (
    q.includes("bitacora") ||
    q.includes("cronolog") ||
    q.includes("avance") ||
    q.includes("folio") ||
    q.includes("semana") ||
    q.includes("dictamen") ||
    q.includes("laboratorio") ||
    q.includes("ensaye") ||
    q.includes("calidad") ||
    q.includes("documento") ||
    q.includes("pdf")
  ) {
    return {
      text: `### 📋 Bitácora Digital Oficial & Trazabilidad Técnica — **${project.propertyName}**:

La bitácora digital de obra está respaldada y sincronizada directamente con los **18 Documentos PDF Oficiales de Bitácora** en Google Drive bajo la supervisión técnica del **${project.director.name}**:

1. **Abril 2026 (Semana 15 a Semana 17)**:
   - **S15 (10/04/2026)**: Limpieza del terreno, desmonte selectivo de maleza y rocas, trazo inicial y excavación para cimentación de mampostería.
   - **S16 (17/04/2026)**: Construcción de bodega de materiales (3x5m), excavación de zanjas, colocación de mampostería alineada y conexiones provisionales.
   - **S17 (24/04/2026)**: Conclusión de cimentación de mampostería en barda perimetral.

2. **Mayo 2026 (Semana 18 a Semana 21)**:
   - **S18 (01/05/2026)**: Conclusión de mampostería perimetral y armados de acero.
   - **S19 (08/05/2026)** a **S21 (22/05/2026)**: Estructuración de zapatas, dados de concreto armado, desplante de castillos y trabes de liga.

3. **Junio 2026 (Semana 23 a Semana 26)**:
   - **S23 (05/06/2026)** a **S26 (26/06/2026)**: Muros de mampostería, cimbrado aparente y colado de losas de entrepiso y trabes principales.

4. **Julio 2026 (Semana 27 a Semana 31)**:
   - **S27 (02/07/2026)** a **S31 (30/07/2026)**: Estructura de cubierta, pendientes pluviales, albañilería interior y preparaciones MEP.

5. **Agosto 2026 (Semana 32 a Semana 35 • 52% a 70% Avance)**:
   - **S32 (07/08/2026)**: Canalizaciones hidráulicas y sanitarias en firme.
   - **S35 (28/08/2026)**: Climatización Daikin VRF en plenum técnico de 3.40m, prueba hidrostática a **7.0 kg/cm² (100 PSI)** superada en 72h sin caídas, domótica Lutron QSX y **10 Puntos 360° HD**.

6. **Septiembre 2026 (Semana 36 • 72% Avance • ÚLTIMO AVANCE REGISTRADO)**:
   - **S36 (04/09/2026)**: Revestimientos en Chukum tradicional en doble altura (**6.40m**), placas de mármol Santo Tomás (**1.20x2.40m**), carpintería en Tzalam, impermeabilización de alberca cenote (**48 m²**) y **19 Puntos 360° HD**.`,
      links: [
        { label: "Abrir 03 Bitácora Digital (18 PDFs en Google Drive)", url: "https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link" },
        { label: "Abrir 02 Bitácora Fotográfica (Google Drive)", url: "https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link" },
        { label: "Ver Cronología de 18 Fichas en el Portal", url: "#bitacora-digital" }
      ]
    };
  }

  // 6. FOTOS 360°, DRIVE & DESCARGAS
  if (
    q.includes("360") ||
    q.includes("foto") ||
    q.includes("drive") ||
    q.includes("descarg") ||
    q.includes("ver") ||
    q.includes("recorrido") ||
    q.includes("galeria")
  ) {
    return {
      text: `### 📸 Repositorios Multimedia Oficiales de **${project.propertyName}**:

Dispones de acceso directo a los repositorios oficiales sincronizados en la nube:
1. **02 Bitácora Fotográfica (Google Drive)**:
   - Archivo fotográfico completo con fotos de alta resolución organizadas por fases y fechas de levantamiento.
2. **03 Bitácora Digital (Google Drive)**:
   - Dictámenes técnicos, reportes de supervisión de obra civil, certificados de laboratorio y actas oficiales.
3. **Galería 360° Inmersiva Integrada**:
   - **05 Septiembre 2026**: 19 Puntos Esféricos HD interactivos en WebGL Three.js.
   - **27 Agosto 2026**: 10 Puntos Esféricos HD interactivos en WebGL Three.js.`,
      links: [
        { label: "02 Bitácora Fotográfica (Drive)", url: "https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link" },
        { label: "03 Bitácora Digital (Drive)", url: "https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link" },
        { label: "Carpeta 05 Sep 2026 (Drive)", url: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link" },
        { label: "Carpeta 27 Ago 2026 (Drive)", url: "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link" },
        { label: "Repositorio Maestro Drive", url: "https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing" }
      ]
    };
  }

  // 6. COSTOS / PRECIOS / COTIZACIONES
  if (
    q.includes("costo") ||
    q.includes("precio") ||
    q.includes("cotiz") ||
    q.includes("presupuesto") ||
    q.includes("cuanto cuesta") ||
    q.includes("vale") ||
    q.includes("m2 precio")
  ) {
    return {
      text: `### 💼 Política de Costos y Presupuestos — **UNO Arquitectos**:

En **UNO Arquitectos** no manejamos costos genéricos ni inventamos tarifas por metro cuadrado en línea, ya que cada obra se cotiza mediante un **Presupuesto Paramétrico Cerrado con Cero Sobrecostos**.

Para cualquier cotización formal, ajuste volumétrico o catálogo de conceptos de **${project.propertyName}**, te invitamos a comunicarte directamente con el **${project.director.name}** (${project.director.role}).`,
      links: [
        { label: "Contactar a Arq. Angel Cereceda vía WhatsApp", url: `https://wa.me/${project.director.whatsapp}` }
      ]
    };
  }

  // DEFAULT CONTEXTUAL RESPONSE
  return {
    text: `Con gusto te asisto con información verificada de **${project.propertyName}** (${project.location}).

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

Estoy entrenado con las especificaciones exactas, medidas milimétricas, dictámenes de supervisión y la bitácora oficial registrada en Google Drive (27 de Agosto y 05 de Septiembre de 2026).

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md font-sans select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="bg-background/98 backdrop-blur-xl border border-arena-calida/40 rounded-3xl max-w-3xl w-full h-[85vh] max-h-[750px] shadow-2xl flex flex-col overflow-hidden text-left text-gris-texto texture-overlay relative"
      >
        {/* MODAL HEADER */}
        <div className="bg-surface-container-low/90 backdrop-blur-md border-b border-arena-calida/30 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-teal-uno/15 border border-teal-uno/30 flex items-center justify-center text-teal-uno shadow-xs">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-md text-base text-teal-uno uppercase font-semibold">
                  Asesor de Obra IA • Gemini
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno border border-teal-uno/30 text-[10px] font-mono font-bold">
                  ARRECIFES 72%
                </span>
              </div>
              <p className="text-[11px] text-arena-calida font-label-caps uppercase tracking-wider font-semibold">
                Entrenado con Especificaciones & Bitácora Oficial de Obra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-gris-texto hover:text-teal-uno rounded-full hover:bg-arena-calida/10 transition-colors cursor-pointer"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CHAT MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar bg-surface-container-low/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 text-xs leading-relaxed ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-arena-calida/20 border border-arena-calida/40 flex items-center justify-center text-teal-uno flex-shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[78%] p-5 rounded-3xl ${
                  msg.role === "user"
                    ? "bg-teal-uno text-white font-medium shadow-sm rounded-tr-xs"
                    : "bg-white/95 border border-arena-calida/30 text-gris-texto shadow-sm rounded-tl-xs"
                }`}
              >
                {/* Message formatted content */}
                <div className="whitespace-pre-line space-y-2 text-xs sm:text-[13px] leading-relaxed font-body-md">
                  {msg.content}
                </div>

                {/* Optional Drive / Action Links */}
                {msg.driveLinks && msg.driveLinks.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-arena-calida/20 flex flex-wrap gap-2">
                    {msg.driveLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-surface-container-low hover:bg-teal-uno hover:text-white text-teal-uno border border-arena-calida/30 rounded-full text-[10px] font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
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
                    msg.role === "user" ? "text-white/80" : "text-gris-texto/50"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-teal-uno/15 border border-teal-uno/30 flex items-center justify-center text-teal-uno flex-shrink-0 mt-1 shadow-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 text-xs justify-start">
              <div className="w-8 h-8 rounded-full bg-arena-calida/20 border border-arena-calida/40 flex items-center justify-center text-teal-uno flex-shrink-0 mt-1 shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white/95 border border-arena-calida/30 p-4 rounded-3xl text-teal-uno flex items-center gap-2.5 shadow-sm">
                <Sparkles className="w-4 h-4 animate-spin-slow text-teal-uno" />
                <span className="text-xs italic font-sans text-gris-texto">
                  Gemini analizando planos y bitácora técnica de Arrecifes...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* QUICK QUESTIONS PILLS */}
        <div className="bg-surface-variant/40 border-t border-arena-calida/20 px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-label-caps uppercase text-arena-calida flex-shrink-0 mr-1 flex items-center gap-1 font-semibold">
            <HelpCircle className="w-3 h-3 text-teal-uno" /> Sugerencias:
          </span>
          {QUICK_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={loading}
              className="px-3.5 py-1.5 bg-white/80 hover:bg-teal-uno hover:text-white text-gris-texto border border-arena-calida/30 rounded-full text-[11px] font-sans whitespace-nowrap transition-all cursor-pointer flex-shrink-0 disabled:opacity-50 shadow-xs font-medium"
            >
              {q}
            </button>
          ))}
        </div>

        {/* INPUT SUBMISSION FOOTER */}
        <div className="bg-surface-container-low/90 border-t border-arena-calida/30 p-4 flex-shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre medidas, Chukum, instalaciones, 360°, fechas o supervisión..."
              disabled={loading}
              className="flex-1 bg-white/90 border border-arena-calida/40 focus:border-teal-uno px-5 py-3 rounded-full text-xs sm:text-sm text-gris-texto placeholder-gris-texto/50 focus:outline-none transition-all shadow-xs"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-6 py-3 bg-teal-uno hover:bg-arena-calida disabled:bg-zinc-300 text-white rounded-full text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-ethereal active:scale-95 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Consultar</span>
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] text-gris-texto/60 mt-2.5 font-label-caps uppercase tracking-wider">
            <span>UNO Arquitectos • IA Gemini 3.6</span>
            <a
              href={`https://wa.me/${project.director.whatsapp}?text=${encodeURIComponent('Hola Arq. Angel Cereceda, tengo una duda técnica sobre Arrecifes.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-uno hover:text-arena-calida flex items-center gap-1 transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-emerald-600" />
              <span>Contactar a Dirección de Obra</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
