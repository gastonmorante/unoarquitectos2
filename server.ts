import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "256kb" }));
app.use(express.urlencoded({ extended: true, limit: "256kb" }));

// In-memory Defensive Rate Limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const rateLimiter = (maxRequests = 30, windowMs = 60 * 1000) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || req.socket.remoteAddress || "global";
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
      return next();
    }

    if (entry.count >= maxRequests) {
      return res.status(429).json({ error: "Demasiadas solicitudes. Por favor intente de nuevo en un momento." });
    }

    entry.count += 1;
    return next();
  };
};

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const leads: any[] = [];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
  },
});

// ==========================================
// RUTAS DE LA API
// ==========================================

// 1. Endpoint para el Consultor de IA de UNO Arquitectos
app.post("/api/chat", rateLimiter(20, 60000), async (req, res) => {
  try {
    const { messages, userProfile, language } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Mensajes no válidos" });
    }

    const systemInstruction = `
Eres el Asesor Técnico Principal de Inteligencia Artificial de "UNO Arquitectos", distinguido estudio boutique de arquitectura, interiorismo sensorial y alta ingeniería constructiva con sede central en Playa del Carmen y taller de producción en la carretera Tulum – Macario Gómez, Quintana Roo.
Estás modelado bajo la dirección y metodología del Arq. Angel Cereceda (Fundador y Director General; más de 20 años de experiencia, Máster en Project Management por la Universidad Europea de Madrid, Máster en Desarrollo Sostenible, y ex Director Técnico en obras emblemáticas como Papaya Playa Project, Inmobilia Mayaliah 25,000 m² y Selina).

FILOSOFÍA Y REGLAS DE MARCA (V2.2):
- Propósito Central: "Materializamos espacios que suman — a quien los habita, a quien los construye, al lugar que los recibe y a la comunidad que los rodea."
- Identidad: "Arquitectura que pertenece. Espacios que perduran."
- Enfoque de Conversión: "Diseño con sentido. Construcción con criterio."
- Declaración Rectoral: "Somos el estudio que diseña lo que puedes construir."
- Tono y Personalidad: Excepcionalmente culto, sobrio, preciso, técnico y hospitalario. Jamás utilices frases publicitarias vacías, lenguaje corporativo trillado ni superlativos comerciales (nunca digas "hacemos tus sueños realidad", "los mejores arquitectos", ni "lujo inalcanzable"). Habla como un arquitecto senior que domina el oficio, los materiales de la selva maya y la física de la construcción.

CONOCIMIENTO TÉCNICO REGIONAL PROFUNDO:
1. Materiales Autóctonos:
   - Chukum Natural: Resina orgánica del árbol Havardia albicans con propiedades impermeables, textura táctil sedosa y tonalidad marfil cálida.
   - Maderas Tropicales Duras: Tzalam, Zapote, Machiche y Cumarú tratadas contra la humedad y salinidad del Caribe.
   - Concreto Aparente: Texturizado con cimbra de duela regional, selladores hidrófugos de poro abierto.
2. Ingeniería en Suelo Kárstico y Cenotes:
   - Mecánica de suelos con prospección geofísica (GPR) para descartar ocluciones cavernosas subterráneas.
   - Cimentaciones ciclópeas compensadas, losas de rigidez y zapatas aisladas amarradas con trabes de liga sismorresistentes y calculadas ante vientos huracanados (Categoría 5).
3. Normativas y Licencias en Riviera Maya (Tulum, Solidaridad/Playa del Carmen, Cancún):
   - Coeficientes de Ocupación y Utilización del Suelo (COS / CUS), alturas máximas permitidas y restricciones de desmonte para preservar el dosel selvático.
   - Permisos ambientales (MIA / SEMARNAT) y licencias municipales de construcción con estricto apego legal.
4. Servicios y Modalidad Llave en Mano:
   - Proceso integral de 4 etapas: Definición de Alcances y Viabilidad -> Diseño Arquitectónico y Bioclimática -> Proyecto Ejecutivo con Ingenierías -> Construcción y Gerencia 360° con Presupuesto Paramétrico y Trazabilidad sin sobrecostos.
   - Sostenibilidad real: Orientación solar pasiva, ventilación cruzada tipo Bernoulli, techos verdes, sistemas solares fotovoltaicos híbridos con baterías LiFePO4, plantas de tratamiento de aguas residuales con humedales y captación pluvial con filtración UV.

REGLA INQUEBRANTABLE DE COSTOS Y COTIZACIONES:
- Está estrictamente prohibido emitir cotizaciones numéricas cerradas, inventar precios fijos o dar costos genéricos por m² en el chat (por ejemplo, JAMÁS digas "$1,200 USD por m²" o "el costo total será de $4,500,000 MXN").
- Si el usuario pregunta por costos, presupuestos o precios de construcción, explícale con maestría que en la arquitectura boutique tropical el costo se determina con rigor paramétrico evaluando la mecánica del suelo kárstico, topografía, nivel de acabados e instalaciones. Invítalo amablemente a agendar una primera sesión técnica con los directores de obra.

ESTILO DE RESPUESTA:
- Utiliza formato markdown elegante con párrafos concisos y destacados en **negrita** para conceptos clave.
- Sé resolutivo y responde con autoridad y cortesía.
- Idioma activo de consulta: ${language || 'es'}. Responde siempre en el idioma en que te escriba el usuario (Español, Inglés, Italiano o Francés).

DATOS DEL CONSULTANTE:
${userProfile ? JSON.stringify(userProfile, null, 2) : "Usuario en consulta activa."}
`;

    const formattedContents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.4,
        maxOutputTokens: 1000,
      }
    });

    const replyText = response.text || "Disculpe, he experimentado una breve pausa. ¿Podría repetir su consulta técnica?";
    return res.json({ text: replyText });

  } catch (error: any) {
    console.error("Error en API de Chat:", error);
    return res.status(500).json({ error: error?.message || "Error interno del servidor" });
  }
});

// 2. Endpoint del Asesor Conceptual Estructurado
app.post("/api/advisor", rateLimiter(15, 60000), async (req, res) => {
  try {
    const { message, language } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY no configurado." });
    }

    const systemPrompt = `You are a technical architectural advisor for UNO Arquitectos led by Arch. Angel Cereceda.
    Analyze the user's lot or project requirements and generate a realistic, buildable architectural proposal in JSON format based on the 20 official company FAQs.
    Language: ${language === 'en' ? 'English' : 'Spanish'}.
    Follow Brand Guide v2.2: "Architecture that belongs. Spaces that endure." Focus on real costs, native materials (Chukum, Tzalam), and karstic foundation engineering.
    Do NOT output fixed quotes or per-sqm rates in chat text.
    Schema:
    {
      "projectTitle": "Tailored project name",
      "conceptVision": "Buildable bioclimatic design concept description",
      "architecturalStyle": "Contemporary Tropical, Honest Minimalist",
      "materialsList": [{"name": "Material (e.g. Natural Chukum, Tzalam wood)", "description": "usage detail", "source": "Regional"}],
      "sustainabilityFeatures": [{"feature": "Bioclimatic strategy", "benefit": "Environmental advantage"}],
      "costEstimation": {
        "totalEstimate": "Parametric cost range e.g. $3,000,000 - $6,000,000 MXN",
        "phasesBreakdown": [{"phase": "Preconstruction, Structure, Gray Shell, Finishes, Handover", "costRange": "range", "percentage": 20, "description": "details"}]
      },
      "nextSteps": ["Recommendation 1", "Recommendation 2"]
    }`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        temperature: 0.3
      }
    });

    const replyJson = JSON.parse(response.text || "{}");
    return res.json(replyJson);
  } catch (error: any) {
    console.error("Error en Advisor:", error);
    return res.status(500).json({ error: error.message || "Error al generar la propuesta." });
  }
});

// 3. Endpoint de Leads (Integración CRM GHL Webhooks)
app.post("/api/leads", rateLimiter(15, 60000), async (req, res) => {
  try {
    const { name, email, phone, message, source } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: "Nombre y correo son obligatorios." });
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      message: message || "",
      source: source || "Asesor AI Chatbot",
      createdAt: new Date()
    };

    leads.push(newLead);
    console.log("[Leads DB] Nuevo lead registrado exitosamente:", newLead);

    const crmWebhook = process.env.GHL_WEBHOOK_URL;
    if (crmWebhook) {
      try {
        await fetch(crmWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newLead)
        });
        console.log("[Leads CRM] Lead reenviado a GHL Webhook exitosamente.");
      } catch (err: any) {
        console.error("[Leads CRM] Error al reenviar al webhook GHL:", err.message);
      }
    } else {
      console.log("[Leads CRM] Variable GHL_WEBHOOK_URL no configurada. Lead almacenado en memoria local de Node de forma segura.");
    }

    return res.json({ success: true, lead: newLead });
  } catch (error: any) {
    console.error("Error en Leads:", error);
    return res.status(500).json({ error: "Error al registrar el lead." });
  }
});

// 4. Endpoint de Formulario de Contacto
app.post("/api/contact", rateLimiter(10, 60000), async (req, res) => {
  const { name, email, phone, projectType, message, budget } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios." });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_RECEIVER) {
    console.log("Simulación de envío de correo exitosa (Credenciales ausentes):");
    console.log({ name, email, phone, projectType, message, budget });
    return res.json({ success: true, message: "Mensaje recibido correctamente (Simulado)." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Nueva consulta de proyecto residencial: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea;">
        <h2 style="border-bottom: 2px solid #00A3A3; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Nueva Solicitud de Consulta Técnica</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
        <p><strong>Tipo de Proyecto:</strong> ${projectType || "No especificado"}</p>
        <p><strong>Presupuesto Estimado:</strong> ${budget || "No especificado"}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #00A3A3;">
          <p style="margin: 0; font-style: italic;">"${message}"</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "Mensaje de contacto enviado con éxito." });
  } catch (error: any) {
    console.error("Error al enviar email:", error);
    return res.status(500).json({ error: "Error interno al enviar el mensaje por email." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

startServer().then(() => {
  app.listen(PORT, () => {
    console.log(`[UNO backend] Corriendo en http://localhost:${PORT}`);
  });
});
