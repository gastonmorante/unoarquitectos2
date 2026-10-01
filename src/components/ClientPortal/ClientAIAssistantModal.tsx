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
  "¿Qué trabajos de obra se registran en las bitácoras?",
  "¿Qué avances se completaron el 19 de Septiembre?",
  "¿Qué avances se registraron el 05 de Septiembre?",
  "¿Qué actividades de obra se reportaron en Agosto?",
  "¿Dónde descargo las bitácoras PDF y fotos de obra?"
];

// Motor de Conocimiento Especializado para Residencia Arrecifes & UNO Arquitectos
const getLocalArrecifesResponse = (query: string, project: ClientProject): { text: string; links?: { label: string; url: string }[] } => {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  // 1. INFORMACIÓN GENERAL Y SUPERVISIÓN
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
      text: `### 📐 Información del Proyecto **${project.propertyName}**:

• **Inmueble**: ${project.propertyName} • Obra Civil & Acabados Residenciales.
• **Ubicación**: ${project.location}.
• **Dirección y Supervisión de Obra**: ${project.director.name} (${project.director.role}).
• **Trazabilidad Documental**: 18 Bitácoras Técnicas en formato PDF Oficial (Semana 15 a Semana 36).
• **Registro Inmersivo**: 3 Levantamientos de fotografías 360° esféricas (27 Ago, 05 Sep y 19 Sep 2026) y bitácora fotográfica continua en Google Drive.`,
      links: [
        { label: "Ver Galería de Fotos por Fecha", url: "#photos" }
      ]
    };
  }

  // 2. CIMENTACIÓN Y ESTRUCTURA SEGÚN BITÁCORAS
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
      text: `### 🛡️ Cimentación & Estructura — **${project.propertyName}**:

De acuerdo con las bitácoras técnicas oficiales (S15 a S26):
• **Cimentación**: Cimentación de mampostería en barda y terreno, zanjas de desplante, zapatas y dados de concreto armado con cadenas de desplante y trabes de liga.
• **Muros y Castillos**: Muros de block y mampostería confinados con castillos y cadenas de cerramiento nivelados y plomados bajo supervisión residente.
• **Losas**: Cimbrado, armado de acero de refuerzo y colado de losas de entrepiso y losa de azotea con pendientes pluviales y calcreto.
• **Control de Calidad**: Verificación semanal de trazos, niveles y calidades de agregados, cemento y aceros en sitio.`,
      links: [
        { label: "Ver Bitácoras Digitales PDF", url: "#bitacora-digital" }
      ]
    };
  }

  // 3. AVANCE DE OBRA DEL 19 DE SEPTIEMBRE DE 2026 (75% GLOBAL - MÁS RECIENTE)
  if (
    q.includes("19 sep") ||
    q.includes("190926") ||
    q.includes("ultimo") ||
    q.includes("reciente") ||
    q.includes("mas nuevo")
  ) {
    return {
      text: `### 🏛️ Reporte Ejecutivo de Avance — **19 de Septiembre de 2026** (75% Global • Más Reciente):

• **Fase**: Albañilería, Aplanados en Muros & Acabados.
• **Trabajos de Albañilería y Aplanados**:
  - Aplanados con mortero en muros interiores y exteriores en planta baja y planta alta.
  - Aplicación de masilla en plafones y perfilado de vanos.
• **Área de Alberca & Exteriores**:
  - Avance en armado y conformación de vaso de alberca y áreas exteriores.
• **Instalaciones**:
  - Preparaciones y canalizaciones de instalaciones hidrosanitarias y eléctricas.`,
      links: [
        { label: "Abrir Carpeta Drive (19 Sep 2026)", url: "https://drive.google.com/drive/folders/1-67v7_NQrUfG2BwvKXI83Ddf0j40EZsE?usp=drive_link" },
        { label: "Ver 23 Fotos 360° de esta fecha", url: "#visor-360" }
      ]
    };
  }

  // 4. AVANCE DE OBRA DEL 05 DE SEPTIEMBRE DE 2026 (72% GLOBAL)
  if (
    q.includes("05 sep") ||
    q.includes("5 sep") ||
    q.includes("050926") ||
    q.includes("fase 4") ||
    q.includes("acabado") ||
    q.includes("aplanado") ||
    q.includes("albanileria")
  ) {
    return {
      text: `### 🏛️ Reporte Ejecutivo de Avance — **05 de Septiembre de 2026** (72% Global • Semana 36):

• **Fase**: Albañilería & Aplanados.
• **Aplanados en Muros**:
  - Aplanados en muros de diferentes áreas y fachadas.
  - Aplicación de masilla en plafones y perfilado de pretiles perimetrales.
• **Albañilería Interior & Vanos**:
  - Emboquillado de vanos y habilitado de elementos de albañilería.
• **Vaso de Alberca**:
  - Cimbrado, armado y habilitado de vaso de alberca.`,
      links: [
        { label: "Abrir Carpeta Drive (05 Sep 2026)", url: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link" },
        { label: "Ver 19 Fotos 360° de esta fecha", url: "#visor-360" }
      ]
    };
  }

  // 5. AVANCE DE OBRA DEL 27 DE AGOSTO DE 2026 (52% GLOBAL)
  if (
    q.includes("27 ago") ||
    q.includes("28 ago") ||
    q.includes("270826") ||
    q.includes("agosto") ||
    q.includes("fase 3") ||
    q.includes("mep") ||
    q.includes("instalacion") ||
    q.includes("aire") ||
    q.includes("clima") ||
    q.includes("electr") ||
    q.includes("hidraul") ||
    q.includes("ptar")
  ) {
    return {
      text: `### ⚡ Reporte Ejecutivo de Instalaciones — **27 de Agosto de 2026** (52% Global • Semana 35):

• **Fase**: Instalaciones Hidrosanitarias, Eléctricas & Albañilería.
• **Instalación Hidráulica y Sanitaria**:
  - Canalizaciones de tuberías hidráulicas y sanitarias ahogadas en firmes y losas.
• **Instalación Eléctrica**:
  - Canalizaciones, tuberías conduit y cajas de registro para circuitos eléctricos.
• **Actividades de Albañilería & Cubiertas**:
  - Colado de calcreto en azotea para pendientes pluviales, aplanados en pretiles, base de tinaco y armado de alberca.`,
      links: [
        { label: "Abrir Carpeta Drive (27 Ago 2026)", url: "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link" },
        { label: "Ver 10 Fotos 360° de esta fecha", url: "#visor-360" }
      ]
    };
  }

  // 6. BITÁCORA DIGITAL & CRONOLOGÍA DE AVANCES (18 FICHAS SEMANALES EN DRIVE)
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

La bitácora digital de obra está respaldada por los **18 Documentos PDF Oficiales de Bitácora** en Google Drive bajo la dirección del **${project.director.name}**:

1. **Abril 2026 (Semana 15 a Semana 17)**:
   - **S15 (10/04/2026)**: Limpieza del terreno, trazo, nivelación y excavación de zanjas.
   - **S16 (17/04/2026)**: Construcción de bodega de materiales (3x5m), excavación de zanjas, colocación de mampostería y conexiones provisionales.
   - **S17 (24/04/2026)**: Cimentación de mampostería de barda perimetral, armados de acero y dados.

2. **Mayo 2026 (Semana 18 a Semana 21)**:
   - **S18 (01/05/2026)**: Colado de cadenas de desplante, mampostería de barda y zapatas.
   - **S19 a S21**: Armado y colado de zapatas, dados de cimentación y desplante de columnas.

3. **Junio 2026 (Semana 23 a Semana 26)**:
   - **S23 a S26**: Muros de block, castillos, cimbrado y colado de losas de entrepiso.

4. **Julio 2026 (Semana 27 a Semana 31)**:
   - **S27 a S31**: Albañilería en planta alta, cerramientos, cimbrado, armado y colado de losa de azotea.

5. **Agosto 2026 (Semana 32 a Semana 35)**:
   - **S32 a S35**: Pretiles, base de tinaco, colado de calcreto en azotea, canalizaciones hidrosanitarias y eléctricas, y armado de alberca.

6. **Septiembre 2026 (Semana 36 y levantamientos 360°)**:
   - **S36**: Aplanados en muros interiores y exteriores, aplicación de masilla en plafones, cimbrado y armado de alberca.
   - **Levantamientos 360°**: 27 Ago (10 puntos), 05 Sep (19 puntos) y 19 Sep (23 puntos).`,
      links: [
        { label: "Abrir 03 Bitácora Digital (18 PDFs en Google Drive)", url: "https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link" },
        { label: "Abrir 02 Bitácora Fotográfica (Google Drive)", url: "https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link" },
        { label: "Ver Cronología de 18 Fichas en el Portal", url: "#bitacora-digital" }
      ]
    };
  }

  // 7. FOTOS 360°, DRIVE & DESCARGAS
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
   - Archivo fotográfico completo con fotos de avance organizadas por carpetas semanales.
2. **03 Bitácora Digital (Google Drive)**:
   - Dictámenes y bitácoras semanales en formato PDF oficial (18 documentos).
3. **Galería 360° Inmersiva Integrada**:
   - **19 Septiembre 2026**: 23 Puntos Esféricos HD.
   - **05 Septiembre 2026**: 19 Puntos Esféricos HD.
   - **27 Agosto 2026**: 10 Puntos Esféricos HD.`,
      links: [
        { label: "Carpeta 19 Sep 2026 (Drive)", url: "https://drive.google.com/drive/folders/1-67v7_NQrUfG2BwvKXI83Ddf0j40EZsE?usp=drive_link" },
        { label: "Carpeta 05 Sep 2026 (Drive)", url: "https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link" },
        { label: "Carpeta 27 Ago 2026 (Drive)", url: "https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link" },
        { label: "02 Bitácora Fotográfica (Drive)", url: "https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link" },
        { label: "03 Bitácora Digital (Drive)", url: "https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link" }
      ]
    };
  }

  // 8. COSTOS / PRECIOS / COTIZACIONES
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
      text: `### 💼 Información de Obra y Contacto Directo — **UNO Arquitectos**:

Para cualquier consulta sobre el programa de obra, catálogo de conceptos o temas contractuales de **${project.propertyName}**, te invitamos a comunicarte directamente con el **${project.director.name}** (${project.director.role}).`,
      links: [
        { label: "Contactar a Arq. Angel Cereceda vía WhatsApp", url: `https://wa.me/${project.director.whatsapp}` }
      ]
    };
  }

  // DEFAULT CONTEXTUAL RESPONSE
  return {
    text: `Con gusto te asisto con información verificada de **${project.propertyName}** (${project.location}).

Nuestra base de conocimiento oficial abarca:
1. **Bitácoras Técnicas Oficiales** (18 Documentos PDF de la Semana 15 a la Semana 36).
2. **Avance 19 Sep 2026** (Albañilería, aplanados en muros, masilla en plafones, alberca e instalaciones).
3. **Avance 05 Sep 2026** (Aplanados en muros, perfilado de vanos y pretiles, vaso de alberca).
4. **Avance 27 Ago 2026** (Calcreto en azotea, pretiles, base de tinaco, canalizaciones hidrosanitarias y eléctricas).
5. **Carpetas de Fotos en Google Drive** y **Visor 360° Inmersivo (52 puntos esféricos HD en total)**.

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

Estoy conectado a los registros oficiales de supervisión, bitácoras semanales en PDF y levantamientos fotográficos y 360° en Google Drive.

¿En qué aspecto técnico o avance de obra puedo orientarte hoy?`,
      timestamp: "Ahora",
      driveLinks: [
        { label: "Ver Último Avance (19 Sep)", url: "https://drive.google.com/drive/folders/1-67v7_NQrUfG2BwvKXI83Ddf0j40EZsE?usp=drive_link" },
        { label: "Ver Visor 360°", url: "#visor-360" }
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
            driveFolder19Sep: "https://drive.google.com/drive/folders/1-67v7_NQrUfG2BwvKXI83Ddf0j40EZsE?usp=drive_link",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/60 backdrop-blur-md font-sans select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="bg-background/98 backdrop-blur-xl border border-arena-calida/40 rounded-2xl sm:rounded-3xl max-w-3xl w-full h-[92dvh] sm:h-[85vh] max-h-[750px] shadow-2xl flex flex-col overflow-hidden text-left text-gris-texto texture-overlay relative"
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
              placeholder="Pregunta sobre medidas, albañilería, aplanados, instalaciones, 360°, fechas o supervisión..."
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
