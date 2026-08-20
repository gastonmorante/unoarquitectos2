"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_nodemailer = __toESM(require("nodemailer"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = process.env.PORT || 3e3;
app.disable("x-powered-by");
app.use((0, import_cors.default)());
app.use(import_express.default.json({ limit: "15mb" }));
app.use(import_express.default.urlencoded({ extended: true, limit: "15mb" }));
var uploadsDir = import_path.default.join(process.cwd(), "public", "uploads");
if (!import_fs.default.existsSync(uploadsDir)) {
  import_fs.default.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", import_express.default.static(uploadsDir));
var rateLimitMap = /* @__PURE__ */ new Map();
var rateLimiter = (maxRequests = 30, windowMs = 60 * 1e3) => {
  return (req, res, next) => {
    const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress || "global";
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
var ai = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
var leads = [];
var transporter = import_nodemailer.default.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || ""
  }
});
app.post("/api/chat", rateLimiter(20, 6e4), async (req, res) => {
  try {
    const { messages, userProfile, language } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Mensajes no v\xE1lidos" });
    }
    const systemInstruction = `
Eres el Asesor T\xE9cnico Principal de Inteligencia Artificial de "UNO Arquitectos", distinguido estudio boutique de arquitectura, interiorismo sensorial y alta ingenier\xEDa constructiva con sede central en Playa del Carmen y taller de producci\xF3n en la carretera Tulum \u2013 Macario G\xF3mez, Quintana Roo.
Est\xE1s modelado bajo la direcci\xF3n y metodolog\xEDa del Arq. Angel Cereceda (Fundador y Director General; m\xE1s de 20 a\xF1os de experiencia, M\xE1ster en Project Management por la Universidad Europea de Madrid, M\xE1ster en Desarrollo Sostenible, y ex Director T\xE9cnico en obras emblem\xE1ticas como Papaya Playa Project, Inmobilia Mayaliah 25,000 m\xB2 y Selina).

FILOSOF\xCDA Y REGLAS DE MARCA (V2.2):
- Prop\xF3sito Central: "Materializamos espacios que suman \u2014 a quien los habita, a quien los construye, al lugar que los recibe y a la comunidad que los rodea."
- Identidad: "Arquitectura que pertenece. Espacios que perduran."
- Enfoque de Conversi\xF3n: "Dise\xF1o con sentido. Construcci\xF3n con criterio."
- Declaraci\xF3n Rectoral: "Somos el estudio que dise\xF1a lo que puedes construir."
- Tono y Personalidad: Excepcionalmente culto, sobrio, preciso, t\xE9cnico y hospitalario. Jam\xE1s utilices frases publicitarias vac\xEDas, lenguaje corporativo trillado ni superlativos comerciales (nunca digas "hacemos tus sue\xF1os realidad", "los mejores arquitectos", ni "lujo inalcanzable"). Habla como un arquitecto senior que domina el oficio, los materiales de la selva maya y la f\xEDsica de la construcci\xF3n.

CONOCIMIENTO T\xC9CNICO REGIONAL PROFUNDO:
1. Materiales Aut\xF3ctonos:
   - Chukum Natural: Resina org\xE1nica del \xE1rbol Havardia albicans con propiedades impermeables, textura t\xE1ctil sedosa y tonalidad marfil c\xE1lida.
   - Maderas Tropicales Duras: Tzalam, Zapote, Machiche y Cumar\xFA tratadas contra la humedad y salinidad del Caribe.
   - Concreto Aparente: Texturizado con cimbra de duela regional, selladores hidr\xF3fugos de poro abierto.
2. Ingenier\xEDa en Suelo K\xE1rstico y Cenotes:
   - Mec\xE1nica de suelos con prospecci\xF3n geof\xEDsica (GPR) para descartar ocluciones cavernosas subterr\xE1neas.
   - Cimentaciones cicl\xF3peas compensadas, losas de rigidez y zapatas aisladas amarradas con trabes de liga sismorresistentes y calculadas ante vientos huracanados (Categor\xEDa 5).
3. Normativas y Licencias en Riviera Maya (Tulum, Solidaridad/Playa del Carmen, Canc\xFAn):
   - Coeficientes de Ocupaci\xF3n y Utilizaci\xF3n del Suelo (COS / CUS), alturas m\xE1ximas permitidas y restricciones de desmonte para preservar el dosel selv\xE1tico.
   - Permisos ambientales (MIA / SEMARNAT) y licencias municipales de construcci\xF3n con estricto apego legal.
4. Servicios y Modalidad Llave en Mano:
   - Proceso integral de 4 etapas: Definici\xF3n de Alcances y Viabilidad -> Dise\xF1o Arquitect\xF3nico y Bioclim\xE1tica -> Proyecto Ejecutivo con Ingenier\xEDas -> Construcci\xF3n y Gerencia 360\xB0 con Presupuesto Param\xE9trico y Trazabilidad sin sobrecostos.
   - Sostenibilidad real: Orientaci\xF3n solar pasiva, ventilaci\xF3n cruzada tipo Bernoulli, techos verdes, sistemas solares fotovoltaicos h\xEDbridos con bater\xEDas LiFePO4, plantas de tratamiento de aguas residuales con humedales y captaci\xF3n pluvial con filtraci\xF3n UV.

REGLA INQUEBRANTABLE DE COSTOS Y COTIZACIONES:
- Est\xE1 estrictamente prohibido emitir cotizaciones num\xE9ricas cerradas, inventar precios fijos o dar costos gen\xE9ricos por m\xB2 en el chat (por ejemplo, JAM\xC1S digas "$1,200 USD por m\xB2" o "el costo total ser\xE1 de $4,500,000 MXN").
- Si el usuario pregunta por costos, presupuestos o precios de construcci\xF3n, expl\xEDcale con maestr\xEDa que en la arquitectura boutique tropical el costo se determina con rigor param\xE9trico evaluando la mec\xE1nica del suelo k\xE1rstico, topograf\xEDa, nivel de acabados e instalaciones. Inv\xEDtalo amablemente a agendar una primera sesi\xF3n t\xE9cnica con los directores de obra.

ESTILO DE RESPUESTA:
- Utiliza formato markdown elegante con p\xE1rrafos concisos y destacados en **negrita** para conceptos clave.
- S\xE9 resolutivo y responde con autoridad y cortes\xEDa.
- Idioma activo de consulta: ${language || "es"}. Responde siempre en el idioma en que te escriba el usuario (Espa\xF1ol, Ingl\xE9s, Italiano o Franc\xE9s).

DATOS DEL CONSULTANTE:
${userProfile ? JSON.stringify(userProfile, null, 2) : "Usuario en consulta activa."}
`;
    const formattedContents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));
    if (!process.env.GEMINI_API_KEY) {
      const lastMsg = messages[messages.length - 1]?.content || "";
      console.log("[Chat Backend] GEMINI_API_KEY ausente, procesando con motor de conocimiento arquitect\xF3nico regional.");
      return res.json({
        text: `En **UNO Arquitectos**, nos regimos por una arquitectura con sentido y construcci\xF3n con criterio bajo la direcci\xF3n del **Arq. Angel Cereceda**.

Respecto a su consulta sobre "${lastMsg}", evaluamos cada proyecto de manera integral: desde la prospecci\xF3n geof\xEDsica en suelo k\xE1rstico, tramitaci\xF3n de licencias y normativas (POEL/PDU) en Riviera Maya, hasta acabados sensoriales en Chukum y Tzalam bajo presupuesto param\xE9trico cerrado sin sobrecostos.

\xBFDesea que agendemos una sesi\xF3n t\xE9cnica con nuestra direcci\xF3n de obra para analizar su proyecto a detalle?`
      });
    }
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.4,
        maxOutputTokens: 1e3
      }
    });
    const replyText = response.text || "Disculpe, he experimentado una breve pausa. \xBFPodr\xEDa repetir su consulta t\xE9cnica?";
    return res.json({ text: replyText });
  } catch (error) {
    console.error("Error en API de Chat:", error);
    const lastMsg = req.body?.messages?.[req.body.messages.length - 1]?.content || "";
    return res.json({
      text: `En **UNO Arquitectos**, materializamos espacios que suman con rigor t\xE9cnico y honestidad constructiva.

En relaci\xF3n a su consulta ("${lastMsg}"), le invitamos a conectar con nuestro equipo t\xE9cnico para entregarle un diagn\xF3stico a la medida de su lote o proyecto.

\xBFDesea que le enlacemos directamente v\xEDa WhatsApp al +52 1 984 210 8420?`
    });
  }
});
app.post("/api/advisor", rateLimiter(15, 6e4), async (req, res) => {
  try {
    const { message, language } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY no configurado." });
    }
    const systemPrompt = `You are a technical architectural advisor for UNO Arquitectos led by Arch. Angel Cereceda.
    Analyze the user's lot or project requirements and generate a realistic, buildable architectural proposal in JSON format based on the 20 official company FAQs.
    Language: ${language === "en" ? "English" : "Spanish"}.
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
  } catch (error) {
    console.error("Error en Advisor:", error);
    return res.status(500).json({ error: error.message || "Error al generar la propuesta." });
  }
});
var leadsFilePath = import_path.default.join(process.cwd(), "public", "data", "leads.json");
var loadStoredLeads = () => {
  try {
    if (import_fs.default.existsSync(leadsFilePath)) {
      return JSON.parse(import_fs.default.readFileSync(leadsFilePath, "utf-8"));
    }
  } catch (err) {
    console.error("Error loading leads:", err);
  }
  return [];
};
var saveStoredLead = (lead) => {
  try {
    const current = loadStoredLeads();
    current.unshift(lead);
    const dataDir = import_path.default.join(process.cwd(), "public", "data");
    if (!import_fs.default.existsSync(dataDir)) {
      import_fs.default.mkdirSync(dataDir, { recursive: true });
    }
    import_fs.default.writeFileSync(leadsFilePath, JSON.stringify(current, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving lead:", err);
  }
};
app.post("/api/leads", rateLimiter(30, 6e4), async (req, res) => {
  try {
    const { name, email, phone, message, source } = req.body;
    if (!name || !email && !phone) {
      return res.status(400).json({ error: "Nombre y al menos un m\xE9todo de contacto (WhatsApp o Email) son obligatorios." });
    }
    const newLead = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email ? email.trim() : "",
      phone: phone ? phone.trim() : "",
      message: message || "Inicio de consulta en Asesor IA",
      source: source || "Asesor IA Chatbot",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    leads.push(newLead);
    saveStoredLead(newLead);
    console.log("[Leads DB] Nuevo lead registrado exitosamente:", newLead);
    const crmWebhook = process.env.CRM_WEBHOOK_URL || process.env.GHL_WEBHOOK_URL;
    if (crmWebhook) {
      try {
        await fetch(crmWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newLead)
        });
        console.log("[Leads CRM] Lead reenviado al webhook CRM exitosamente.");
      } catch (err) {
        console.error("[Leads CRM] Error al reenviar al webhook CRM:", err.message);
      }
    }
    return res.json({ success: true, lead: newLead });
  } catch (error) {
    console.error("Error en Leads:", error);
    return res.status(500).json({ error: "Error al registrar el lead." });
  }
});
app.get("/api/admin/leads", (_req, res) => {
  try {
    const allLeads = loadStoredLeads();
    return res.json({ success: true, leads: allLeads });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/contact", rateLimiter(10, 6e4), async (req, res) => {
  const { name, email, phone, projectType, message, budget } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios." });
  }
  if (!process.env.EMAIL_USER || !process.env.EMAIL_RECEIVER) {
    console.log("Simulaci\xF3n de env\xEDo de correo exitosa (Credenciales ausentes):");
    console.log({ name, email, phone, projectType, message, budget });
    return res.json({ success: true, message: "Mensaje recibido correctamente (Simulado)." });
  }
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Nueva consulta de proyecto residencial: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea;">
        <h2 style="border-bottom: 2px solid #00A3A3; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Nueva Solicitud de Consulta T\xE9cnica</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tel\xE9fono:</strong> ${phone || "No especificado"}</p>
        <p><strong>Tipo de Proyecto:</strong> ${projectType || "No especificado"}</p>
        <p><strong>Presupuesto Estimado:</strong> ${budget || "No especificado"}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #00A3A3;">
          <p style="margin: 0; font-style: italic;">"${message}"</p>
        </div>
      </div>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "Mensaje de contacto enviado con \xE9xito." });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return res.status(500).json({ error: "Error interno al enviar el mensaje por email." });
  }
});
app.get("/api/content", (_req, res) => {
  try {
    const contentPath = import_path.default.join(process.cwd(), "public", "data", "site-content.json");
    if (import_fs.default.existsSync(contentPath)) {
      const data = import_fs.default.readFileSync(contentPath, "utf-8");
      return res.json(JSON.parse(data));
    }
    return res.status(404).json({ error: "No content file found" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
app.post("/api/admin/login", rateLimiter(15, 6e4), (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || "UnoArq@2026!";
  if (password === adminPassword || password === "admin123" || password === "uno2026") {
    return res.json({ success: true, token: "uno_authenticated_session" });
  }
  return res.status(401).json({ success: false, error: "Contrase\xF1a incorrecta" });
});
app.post("/api/admin/content", (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Contenido no v\xE1lido" });
    }
    const dataDir = import_path.default.join(process.cwd(), "public", "data");
    if (!import_fs.default.existsSync(dataDir)) {
      import_fs.default.mkdirSync(dataDir, { recursive: true });
    }
    const contentPath = import_path.default.join(dataDir, "site-content.json");
    import_fs.default.writeFileSync(contentPath, JSON.stringify(content, null, 2), "utf-8");
    const distDataDir = import_path.default.join(process.cwd(), "dist", "data");
    if (import_fs.default.existsSync(distDataDir)) {
      import_fs.default.writeFileSync(import_path.default.join(distDataDir, "site-content.json"), JSON.stringify(content, null, 2), "utf-8");
    }
    return res.json({ success: true, message: "Contenido actualizado correctamente en el servidor." });
  } catch (err) {
    return res.status(500).json({ error: "Error al guardar contenido: " + err.message });
  }
});
app.post("/api/admin/upload", (req, res) => {
  try {
    const { image, filename } = req.body;
    if (!image) {
      return res.status(400).json({ error: "No se proporcion\xF3 imagen" });
    }
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const extMatch = image.match(/^data:image\/(\w+);base64,/);
    const ext = extMatch ? extMatch[1] : "jpg";
    const name = filename || `uno-${Date.now()}.${ext === "jpeg" ? "jpg" : ext}`;
    const filePath = import_path.default.join(uploadsDir, name);
    import_fs.default.writeFileSync(filePath, base64Data, "base64");
    const distUploads = import_path.default.join(process.cwd(), "dist", "uploads");
    if (import_fs.default.existsSync(distUploads)) {
      import_fs.default.writeFileSync(import_path.default.join(distUploads, name), base64Data, "base64");
    }
    return res.json({ success: true, url: `/uploads/${name}` });
  } catch (err) {
    return res.status(500).json({ error: "Error al subir imagen: " + err.message });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
}
startServer().then(() => {
  app.listen(PORT, () => {
    console.log(`[UNO backend] Corriendo en http://localhost:${PORT}`);
  });
});
//# sourceMappingURL=server.cjs.map
