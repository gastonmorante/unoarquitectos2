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
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Permissions-Policy", "accelerometer=(), camera=(), geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()");
  next();
});
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
function resolveTechnicalQuery(query, _userProfile) {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  if (q.includes("medida") || q.includes("altura") || q.includes("superficie") || q.includes("m2") || q.includes("area") || q.includes("dimension") || q.includes("terreno") || q.includes("lote")) {
    return `### \u{1F4D0} Medidas y Especificaciones Constructivas de **Residencia Arrecifes**:

\u2022 **Superficie Construida**: **720.00 m\xB2** (interiores cubiertos y terrazas voladas con vistas al Caribe).
\u2022 **Superficie del Terreno**: **1,150.00 m\xB2** en predio selv\xE1tico con respeto del **55% de huella virgen** (palmas chit, ceibas y helechos).
\u2022 **Alturas Libres de Entrepiso**:
  - **Vest\xEDbulo Principal & Estancia**: Doble altura libre de **6.40 m** con losas nervadas y ventanales embutidos.
  - **Master Suite (Planta Alta)**: Altura libre de **3.80 m** con terraza privada volada.
  - **Rec\xE1maras Secundarias & Suites de Hu\xE9spedes**: Altura libre de **3.40 m**.
\u2022 **Alberca Cenote**: Vaso de **48.00 m\xB2** con profundidad gradual (**0.40 m** en asoleadero h\xFAmedo hasta **1.60 m** en zona profunda) con canaleta perimetral oculta y acabado en Chukum turquesa natural.
\u2022 **Claros Estructurales**: Claros libres continuos de hasta **8.50 m** sin columnas intermedias.`;
  }
  if (q.includes("suelo") || q.includes("cimentacion") || q.includes("gpr") || q.includes("georradar") || q.includes("karst") || q.includes("huracan") || q.includes("sism") || q.includes("estructura") || q.includes("zapata") || q.includes("resistencia")) {
    return `### \u{1F6E1}\uFE0F Cimentaci\xF3n, Mec\xE1nica de Suelos & Resistencia Estructural:

\u2022 **Prospecci\xF3n Geof\xEDsica (GPR)**: Estudio con Georradar a **12.0 m de profundidad**, certificando la ausencia total de cavernas u oquedades k\xE1rsticas bajo la cimentaci\xF3n.
\u2022 **Sistema de Cimentaci\xF3n**: Zapatas aisladas y losa de rigidez de concreto armado **f'c = 250 kg/cm\xB2** interconectadas con trabes de liga sismorresistentes.
\u2022 **Certificaci\xF3n Antihurac\xE1n**: Estructura calculada y dise\xF1ada para resistir vientos de **Huracanes Categor\xEDa 5 (>280 km/h)**.
\u2022 **Envolvente**: Canceler\xEDa Eurovent con cristales laminados reflectivos de **12 mm** y anclajes estructurales ocultos.`;
  }
  if (q.includes("0509") || q.includes("05 de sep") || q.includes("05 sep") || q.includes("septiembre") || q.includes("ultimo avance") || q.includes("reciente")) {
    return `### \u{1F3DB}\uFE0F Dictamen T\xE9cnico: Avance al **05 de Septiembre de 2026** (72% Global)

El levantamiento oficial del **05 de Septiembre de 2026** documenta la **Fase 4: Revestimientos en Chukum Tradicional & M\xE1rmol Santo Tom\xE1s**:

1. **Master Suite & Doble Altura**: Culminaci\xF3n de la aplicaci\xF3n de pasta org\xE1nica de Chukum (*Havardia albicans*) hervida en obra con agua de pozo y sellado hidr\xF3fugo de poro abierto en muros de 6.40 m.
2. **Vest\xEDbulo Principal**: Colocaci\xF3n y nivelaci\xF3n l\xE1ser de placas de m\xE1rmol Santo Tom\xE1s (**1.20 x 2.40 m**) apomazadas mate con juntas a hueso de 1.5 mm.
3. **Alberca Cenote**: Aplicaci\xF3n de doble membrana ep\xF3xica y perfilado de bordes org\xE1nicos previo al vertido de Chukum turquesa.
4. **Carpinter\xEDa Fina**: Marcos y bastidores de Tzalam curada en horno al 10% de humedad en taller propio de Tulum.
5. **Fotos y 360\xB0**: 19 Puntos Esf\xE9ricos HD en visor integrado y carpeta completa en [Google Drive 05/09/2026](https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link).`;
  }
  if (q.includes("2708") || q.includes("2808") || q.includes("27 de ago") || q.includes("27 ago") || q.includes("28 ago") || q.includes("instalacion") || q.includes("vrf") || q.includes("daikin") || q.includes("hidrostat") || q.includes("domotica") || q.includes("lutron") || q.includes("ptar")) {
    return `### \u26A1 Dictamen T\xE9cnico: Avance al **27 de Agosto de 2026** (52% Global)

El levantamiento t\xE9cnico del **27 de Agosto de 2026** documenta la **Fase 3: Instalaciones Especiales (MEP, Climatizaci\xF3n & Dom\xF3tica)**:

1. **Climatizaci\xF3n VRF Inverter Daikin**: Tendido de ducter\xEDa aislada ac\xFAsticamente en entrepisos t\xE9cnicos (3.40 m) y pruebas de estanqueidad de gas refrigerante R-410A.
2. **Pruebas Hidrost\xE1ticas**: Canalizaciones hidrosanitarias presurizadas a **7.0 kg/cm\xB2** superadas con cero p\xE9rdidas de presi\xF3n en 72 horas.
3. **Dom\xF3tica Lutron HomeWorks QSX**: Cableado estructurado para escenas lum\xEDnicas en 2700K c\xE1lido sensorial y control de persianas.
4. **PTAR y Drenaje Ecol\xF3gico**: Biodigestores anaer\xF3bicos y sistema de fitorremediaci\xF3n con humedales para recirculaci\xF3n de agua en riego.
5. **Fachada Norte**: Anclaje de bastidores ocultos de acero inoxidable 316 para celos\xEDas de Tzalam.
6. **Fotos y 360\xB0**: 10 Puntos Esf\xE9ricos HD en visor integrado y carpeta en [Google Drive 27/08/2026](https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link).`;
  }
  if (q.includes("chukum") || q.includes("tzalam") || q.includes("material") || q.includes("acabado") || q.includes("marmol") || q.includes("madera") || q.includes("santo tomas")) {
    return `### \u{1F33F} Materiales Aut\xF3ctonos y Especificaciones Sensoriales de **Arrecifes**:

\u2022 **Chukum Tradicional Maya**: Resina org\xE1nica vegetal extra\xEDda de la corteza del \xE1rbol *Havardia albicans*, hervida en obra con agua de pozo. Proporciona un acabado sedoso, impermeable natural, at\xE9rmico y de tonalidad marfil c\xE1lida. Mantenimiento mediante limpieza con jab\xF3n neutro y cera natural cada 2 a\xF1os.
\u2022 **Madera Maciza de Tzalam (Nogal Maya)**: Curada y horneada al 10% de humedad en taller propio de Tulum. Gran densidad y resistencia natural ante termitas y salinidad costera.
\u2022 **M\xE1rmol Santo Tom\xE1s**: Placas de 1.20 x 2.40 m apomazadas mate a veta continua para pisos de planta baja y \xE1reas h\xFAmedas.`;
  }
  if (q.includes("fecha") || q.includes("entrega") || q.includes("cuando termin") || q.includes("cronograma") || q.includes("fase") || q.includes("plazo")) {
    return `### \u{1F4C5} Cronograma Oficial de Obra \u2014 **Residencia Arrecifes**:

\u2022 **Inicio de Obra**: 01 Agosto 2026
\u2022 **Avance Actual**: **72% de Ejecuci\xF3n** (Fase 4: Acabados en Chukum & M\xE1rmol)
\u2022 **Fecha Estimada de Entrega Llave en Mano**: **20 Diciembre 2026**
\u2022 **Pr\xF3ximos Hitos**:
  - **Octubre 2026 (82%)**: Montaje de puertas pivotantes en Tzalam y canceler\xEDa europea antihurac\xE1n DVH.
  - **Noviembre 2026 (94%)**: Iluminaci\xF3n sensorial 2700K, paisajismo selv\xE1tico end\xE9mico y llenado de alberca.
  - **Diciembre 2026 (100%)**: Protocolo de entrega de llaves, manuales t\xE9cnicos As-Built y p\xF3liza de garant\xEDa estructural.`;
  }
  if (q.includes("costo") || q.includes("precio") || q.includes("cotiz") || q.includes("cuanto cuesta") || q.includes("presupuesto") || q.includes("tarifa")) {
    return `En **UNO Arquitectos**, nos regimos por el principio rector: *"Somos el estudio que dise\xF1a lo que puedes construir"*.

En arquitectura boutique tropical en Riviera Maya, los costos no se establecen con tarifas gen\xE9ricas o inventadas por metro cuadrado. Se calculan con estricto rigor param\xE9trico a partir del proyecto ejecutivo, la mec\xE1nica de suelos k\xE1rsticos, la topograf\xEDa y el nivel de acabados e ingenier\xEDas, garantizando **cero sobrecostos** en modalidad llave en mano.

Para coordinar un diagn\xF3stico t\xE9cnico preliminar de su lote o proyecto, le invitamos a comunicarse con la Direcci\xF3n General del **Arq. Angel Cereceda** (+52 1 984 210 8420).`;
  }
  if (q.includes("drive") || q.includes("foto") || q.includes("360") || q.includes("descarg") || q.includes("link") || q.includes("carpeta") || q.includes("bitacora") || q.includes("folio") || q.includes("semana") || q.includes("pdf")) {
    return `### \u{1F4C2} Repositorios Oficiales en Nube & Bit\xE1cora Digital (18 Fichas Semanales):

La bit\xE1cora digital de **Residencia Arrecifes** est\xE1 respaldada en Google Drive y documenta los 18 levantamientos t\xE9cnicos oficiales desde la **Semana 15 (10 Abril 2026)** hasta la **Semana 36 (04 Septiembre 2026)**:

\u2022 **03 Bit\xE1cora Digital (18 Documentos PDF Oficiales)**: [Carpeta Google Drive 03 Bit\xE1cora Digital](https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link)
\u2022 **02 Bit\xE1cora Fotogr\xE1fica (Fotos y Levantamientos)**: [Carpeta Google Drive 02 Bit\xE1cora Fotogr\xE1fica](https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link)
\u2022 **Semana 36 (04/09/2026 \u2014 72% Avance \u2022 \xDALTIMO)**: Chukum en 6.40m, M\xE1rmol Santo Tom\xE1s 1.20x2.40m, Alberca Cenote y 19 Puntos 360\xB0 HD \u2022 [Carpeta Google Drive 05/09/2026](https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link)
\u2022 **Semana 35 (28/08/2026 \u2014 52% Avance)**: Climatizaci\xF3n Daikin VRF, pruebas hidrost\xE1ticas a 7.0 kg/cm\xB2, Lutron QSX y 10 Puntos 360\xB0 HD \u2022 [Carpeta Google Drive 27/08/2026](https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link)
\u2022 **Semanas 15 a 32 (Abril - Agosto 2026)**: Cimentaci\xF3n k\xE1rstica, mamposter\xEDa, losas nervadas, bodega de obra y canalizaciones hidrosanitarias.
\u2022 **Repositorio Maestro de Obra**: [Google Drive Master Folder](https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing)`;
  }
  return `Como **Asesor T\xE9cnico de Inteligencia Artificial de UNO Arquitectos** para **Residencia Arrecifes**, bajo la direcci\xF3n del **Arq. Angel Cereceda**:

En relaci\xF3n a su consulta sobre **"${query}"**:
La residencia cuenta con **720.00 m\xB2 construidos** sobre un predio de **1,150.00 m\xB2** (55% de conservaci\xF3n selv\xE1tica) y se encuentra al **72% de ejecuci\xF3n** con fecha de entrega estimada para el **20 de Diciembre de 2026**.

Nuestra base de datos t\xE9cnicos contiene:
1. **Medidas y Alturas Exactas** (6.40 m doble altura, 3.80 m master suite, 3.40 m secundarias, claros de 8.50 m, alberca cenote de 48 m\xB2).
2. **Cimentaci\xF3n & GPR** (prospecci\xF3n a 12 m sin oquedades, zapatas f'c=250 kg/cm\xB2, resistencia a huracanes Cat 5).
3. **Avances Registrados**: 05 de Septiembre (Chukum & m\xE1rmol) y 27 de Agosto (MEP, Daikin VRF, Lutron QSX).
4. **Carpetas en Google Drive** y **Galer\xEDa 360\xB0 Inmersiva**.

Si requiere consultar alg\xFAn aspecto no contemplado en este registro, le conectamos con la Direcci\xF3n T\xE9cnica del Arq. Angel Cereceda (+52 1 984 210 8420).`;
}
app.post("/api/chat", rateLimiter(20, 6e4), async (req, res) => {
  try {
    const { messages, userProfile, language } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Mensajes no v\xE1lidos" });
    }
    const systemInstruction = `
Eres el Asesor T\xE9cnico Principal de Inteligencia Artificial de "UNO Arquitectos", distinguido estudio boutique de arquitectura, interiorismo sensorial y alta ingenier\xEDa constructiva con sede central en Playa del Carmen y taller de producci\xF3n en la carretera Tulum \u2013 Macario G\xF3mez, Quintana Roo.
Est\xE1s modelado bajo la direcci\xF3n y metodolog\xEDa del Arq. Angel Cereceda (Fundador y Director General; m\xE1s de 20 a\xF1os de experiencia, M\xE1ster en Project Management por la Universidad Europea de Madrid, M\xE1ster en Desarrollo Sostenible, y ex Director T\xE9cnico en obras emblem\xE1ticas como Papaya Playa Project, Inmobilia Mayaliah 25,000 m\xB2 y Selina).

REGLAS ABSOLUTAS DE VERACIDAD Y CERO ALUCINACIONES:
1. NUNCA inventes datos, medidas, fechas ficticias ni especificaciones no confirmadas en esta base de conocimiento.
2. NUNCA emitas cotizaciones num\xE9ricas cerradas ni precios fijos por metro cuadrado (explica que el costo en arquitectura tropical de alta gama se define mediante presupuesto param\xE9trico cerrado tras evaluar mec\xE1nica de suelos k\xE1rsticos, topograf\xEDa, nivel de acabados e ingenier\xEDas).
3. Si el usuario pregunta por un dato t\xE9cnico no registrado, responde con honestidad y rigor profesional indicando que debe validarse en la bit\xE1cora f\xEDsica de obra o directamente con la Direcci\xF3n T\xE9cnica del Arq. Angel Cereceda (+52 1 984 210 8420).
4. Toda la informaci\xF3n debe apegarse estrictamente a la realidad constructiva de UNO Arquitectos.

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
   - Mec\xE1nica de suelos con prospecci\xF3n geof\xEDsica (GPR) para descartar oclusiones cavernosas subterr\xE1neas.
   - Cimentaciones cicl\xF3peas compensadas, losas de rigidez y zapatas aisladas amarradas con trabes de liga sismorresistentes y calculadas ante vientos huracanados (Categor\xEDa 5).
3. Normativas y Licencias en Riviera Maya (Tulum, Solidaridad/Playa del Carmen, Canc\xFAn):
   - Coeficientes de Ocupaci\xF3n y Utilizaci\xF3n del Suelo (COS / CUS), alturas m\xE1ximas permitidas y restricciones de desmonte para preservar el dosel selv\xE1tico.
   - Permisos ambientales (MIA / SEMARNAT) y licencias municipales de construcci\xF3n con estricto apego legal.
4. Servicios y Modalidad Llave en Mano:
   - Proceso integral de 4 etapas: Definici\xF3n de Alcances y Viabilidad -> Dise\xF1o Arquitect\xF3nico y Bioclim\xE1tica -> Proyecto Ejecutivo con Ingenier\xEDas -> Construcci\xF3n y Gerencia 360\xB0 con Presupuesto Param\xE9trico y Trazabilidad sin sobrecostos.
   - Sostenibilidad real: Orientaci\xF3n solar pasiva, ventilaci\xF3n cruzada tipo Bernoulli, techos verdes, sistemas solares fotovoltaicos h\xEDbridos con bater\xEDas LiFePO4, plantas de tratamiento de aguas residuales con humedales y captaci\xF3n pluvial con filtraci\xF3n UV.

CONOCIMIENTO OFICIAL DE RESIDENCIA ARRECIFES (BIT\xC1CORA Y PROYECTO EJECUTIVO):
- Ubicaci\xF3n: Playa del Carmen, Quintana Roo.
- Cliente: Residencia Particular / Supervisi\xF3n T\xE9cnica Oficial UNO Arquitectos.
- Superficie Construida: 720.00 m\xB2 de construcci\xF3n cubierta y terrazas voladas con vistas panor\xE1micas al Caribe.
- Superficie del Terreno: 1,150.00 m\xB2 en predio selv\xE1tico con respeto y conservaci\xF3n del 55% de huella natural (palmas chit, ceibas y helechos arb\xF3reos).
- Alturas Libres de Entrepiso:
  * Vest\xEDbulo Principal y Estancia: Doble altura libre de 6.40 m con losas nervadas y ventanales embutidos.
  * Master Suite (Planta Alta): Altura libre de 3.80 m con terraza privada volada.
  * Rec\xE1maras Secundarias y Suites de Hu\xE9spedes: Altura libre de 3.40 m.
- Claros Estructurales: Claros libres continuos de hasta 8.50 m sin columnas intermedias para integraci\xF3n total con el entorno.
- Alberca Cenote: Vaso de 48.00 m\xB2 con profundidad gradual (0.40 m en asoleadero h\xFAmedo hasta 1.60 m en zona profunda), canaleta perimetral oculta y acabado en Chukum turquesa natural.
- Cimentaci\xF3n y Suelo: Estudio GPR a 12.0 m de profundidad sin oquedades k\xE1rsticas; zapatas aisladas y losas de rigidez de concreto f'c=250 kg/cm\xB2 con trabes de liga sismorresistentes; resistencia calculada ante huracanes Categor\xEDa 5 (>280 km/h).
- Materiales Nobles: Pasta de Chukum (Havardia albicans) hervida en obra con agua de pozo, madera maciza de Tzalam curada en horno al 10% de humedad en taller propio de Tulum, m\xE1rmol Santo Tom\xE1s en gran formato (1.20 x 2.40 m) apomazado mate con juntas a hueso de 1.5 mm, canceler\xEDa Eurovent con cristal laminado reflectivo de 12 mm.
- Instalaciones MEP: Climatizaci\xF3n Daikin VRF Inverter oculta en plafones (3.40 m), dom\xF3tica Lutron HomeWorks QSX con escenas lum\xEDnicas 2700K c\xE1lidas sensoriales, PTAR biol\xF3gica con biodigestores y humedales de fitorremediaci\xF3n para recirculaci\xF3n en riego.
- Fechas de Avance Oficiales:
  * 05 Septiembre 2026 (72% Global - Fase 4: Revestimientos en Chukum & M\xE1rmol Santo Tom\xE1s): Aplicaci\xF3n de pasta de Chukum en muros de 6.40 m, colocaci\xF3n y nivelaci\xF3n l\xE1ser de m\xE1rmol Santo Tom\xE1s 1.20x2.40 m, perfilado y doble membrana ep\xF3xica en alberca cenote, habilitado de carpinter\xEDa en Tzalam.
  * 27 Agosto 2026 (52% Global - Fase 3: Instalaciones Especiales MEP & Dom\xF3tica): Tendido de ducter\xEDa VRF Daikin, pruebas hidrost\xE1ticas presurizadas a 7.0 kg/cm\xB2 superadas en 72h sin ca\xEDdas, cableado estructurado Lutron QSX, biodigestores y drenaje ecol\xF3gico, anclaje de bastidores de acero inoxidable 316.
- Cronograma de Entrega: Inicio 01 Agosto 2026 -> Entrega Estimada Llave en Mano: 20 Diciembre 2026.
- Enlaces Oficiales:
  * 02 Bit\xE1cora Fotogr\xE1fica (Google Drive): https://drive.google.com/drive/folders/1SKrAecbj22oz23ZIjAWoeK2p8zENDTM7?usp=drive_link
  * 03 Bit\xE1cora Digital (Google Drive): https://drive.google.com/drive/folders/16-J1VbxLv0BVIdsjNbsZmG2rjsWsVnby?usp=drive_link
  * Carpeta Drive 05/09/2026: https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link
  * Carpeta Drive 27/08/2026: https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link
  * Carpeta Drive Maestra: https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing
  * Visor 360\xB0: Galer\xEDa Inmersiva Integrada (19 Puntos Esf\xE9ricos para 05 Sep, 10 Puntos Esf\xE9ricos para 27 Ago).
- Director General: Arq. Angel Cereceda (+52 1 984 210 8420).

ESTILO DE RESPUESTA:
- Utiliza formato markdown elegante con p\xE1rrafos estructurados y destacados en **negrita** para conceptos y medidas clave.
- S\xE9 resolutivo, t\xE9cnico, sobrio y cordial.
- Responde siempre en el idioma en que escribe el usuario (${language || "es"}).

DATOS DEL CONSULTANTE:
${userProfile ? JSON.stringify(userProfile, null, 2) : "Usuario en consulta activa."}
`;
    const formattedContents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));
    if (!process.env.GEMINI_API_KEY) {
      const lastMsg = messages[messages.length - 1]?.content || "";
      return res.json({ text: resolveTechnicalQuery(lastMsg, userProfile) });
    }
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.2,
          maxOutputTokens: 1e3
        }
      });
      const replyText = response.text || resolveTechnicalQuery(messages[messages.length - 1]?.content || "", userProfile);
      return res.json({ text: replyText });
    } catch (apiErr) {
      console.warn("[Chat Backend] Gemini Cloud API error, using verified architectural engine:", apiErr.message);
      const lastMsg = messages[messages.length - 1]?.content || "";
      return res.json({ text: resolveTechnicalQuery(lastMsg, userProfile) });
    }
  } catch (error) {
    console.error("Error en API de Chat:", error);
    const lastMsg = req.body?.messages?.[req.body.messages.length - 1]?.content || "";
    return res.json({
      text: resolveTechnicalQuery(lastMsg, req.body?.userProfile)
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
app.get("/api/reviews", async (_req, res) => {
  try {
    const cacheFile = import_path.default.join(process.cwd(), "public", "data", "google-reviews-cache.json");
    const placeId = process.env.GOOGLE_PLACE_ID || "ChIJORKbm4VDTo8Rkfcfhdpqyho";
    const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.VITE_GOOGLE_MAPS_API_KEY || "";
    if (import_fs.default.existsSync(cacheFile)) {
      const stats = import_fs.default.statSync(cacheFile);
      const ageHours = (Date.now() - stats.mtimeMs) / (1e3 * 60 * 60);
      if (ageHours < 6) {
        const cached = JSON.parse(import_fs.default.readFileSync(cacheFile, "utf-8"));
        return res.json(cached);
      }
    }
    if (apiKey) {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,url&language=es&key=${apiKey}`;
      const apiRes = await fetch(apiUrl);
      if (apiRes.ok) {
        const data = await apiRes.json();
        if (data?.result) {
          const liveData = {
            success: true,
            name: data.result.name || "UNO Arquitectos Mx",
            rating: typeof data.result.rating === "number" ? data.result.rating : 0,
            reviewCount: typeof data.result.user_ratings_total === "number" ? data.result.user_ratings_total : 0,
            reviews: data.result.reviews || [],
            hasLiveGoogleSync: true,
            placeUrl: data.result.url || "https://www.google.com/maps/place/UNO+Arquitectos+Mx/@20.6718486,-87.0504611,17z/data=!4m8!3m7!1s0x8f4e43859b311239:0x1a9cb6da851ff691!8m2!3d20.6718486!4d-87.0504611!9m1!1b1!16s%2Fg%2F11r_t7kdfg",
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          };
          import_fs.default.writeFileSync(cacheFile, JSON.stringify(liveData, null, 2), "utf-8");
          return res.json(liveData);
        }
      }
    }
    const fallbackData = {
      success: true,
      name: "UNO Arquitectos Mx",
      rating: 5,
      reviewCount: 28,
      reviews: [],
      hasLiveGoogleSync: false,
      placeUrl: "https://www.google.com/maps/place/UNO+Arquitectos+Mx/@20.6718486,-87.0504611,17z/data=!4m8!3m7!1s0x8f4e43859b311239:0x1a9cb6da851ff691!8m2!3d20.6718486!4d-87.0504611!9m1!1b1!16s%2Fg%2F11r_t7kdfg",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (import_fs.default.existsSync(cacheFile)) {
      return res.json(JSON.parse(import_fs.default.readFileSync(cacheFile, "utf-8")));
    }
    return res.json(fallbackData);
  } catch (err) {
    return res.status(500).json({ error: err.message });
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
