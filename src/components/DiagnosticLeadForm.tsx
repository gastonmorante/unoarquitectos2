import React, { useState, useId } from "react";
import { Send, CheckCircle2, ShieldCheck, ExternalLink, AlertTriangle, RefreshCw, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSiteContent } from "../context/ContentContext";

interface DiagnosticLeadFormProps {
  title?: string;
  subtitle?: string;
  defaultLocation?: string;
  pageContext?: string;
}

export default function DiagnosticLeadForm({
  title,
  subtitle,
  defaultLocation = "Tulum",
  pageContext = "Landing Page SEO"
}: DiagnosticLeadFormProps) {
  const { language } = useLanguage();
  const { content } = useSiteContent();
  const isEs = language === "es";

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ubicacion, setUbicacion] = useState(defaultLocation);
  const [presupuesto, setPresupuesto] = useState("");
  const [terreno, setTerreno] = useState("true"); // "true" | "false"
  const [detalles, setDetalles] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nombreId = useId();
  const emailId = useId();
  const telId = useId();
  const ubicacionId = useId();
  const presupuestoId = useId();
  const detallesId = useId();

  const whatsappNumber = (content?.contact?.whatsapp || "5219842108420").replace(/[^\d]/g, "");

  const buildWhatsAppUrl = () => {
    const text = isEs
      ? `Hola UNO Arquitectos, deseo solicitar un Diagnóstico Técnico para mi proyecto:\nNombre: ${nombre || "Interesado"}\nUbicación: ${ubicacion}\nPresupuesto: ${presupuesto || "Por definir"}\n¿Tiene terreno?: ${terreno === "true" ? "Sí" : "Aún no"}\nDetalles: ${detalles || "Me gustaría recibir asesoría técnica."}`
      : `Hello UNO Arquitectos, I would like to request a Technical Diagnostic for my project:\nName: ${nombre || "Client"}\nLocation: ${ubicacion}\nBudget: ${presupuesto || "To be defined"}\nHas land?: ${terreno === "true" ? "Yes" : "Not yet"}\nDetails: ${detalles || "Looking for architectural guidance."}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!nombre.trim() || nombre.trim().length < 2) {
      errs.nombre = isEs ? "Escribe tu nombre completo." : "Please enter your full name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errs.email = isEs ? "Escribe un correo electrónico válido." : "Please enter a valid email address.";
    }
    if (!telefono.trim() || !/^[\d\s()+\-]{8,}$/.test(telefono.trim())) {
      errs.telefono = isEs ? "Escribe un teléfono o WhatsApp válido." : "Please enter a valid phone number.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    if (!validate()) return;

    setIsSending(true);
    setFallback(false);

    const payload = {
      nombre: nombre.trim(),
      name: nombre.trim(),
      email: email.trim(),
      correo: email.trim(),
      phone: telefono.trim(),
      telefono: telefono.trim(),
      location: ubicacion,
      zona: ubicacion,
      budget: presupuesto,
      inversion: presupuesto,
      has_land: terreno === "true",
      terreno_identificado: terreno === "true" ? "Sí" : "Aún no",
      notes: detalles.trim(),
      mensaje: detalles.trim(),
      source: `Landing ${pageContext}`,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      timestamp: new Date().toISOString(),
      tags: ["High-Intent SEO Lead", pageContext, `Lang-${language.toUpperCase()}`]
    };

    try {
      // 1. Submit to local HostGator contact API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Server status ${res.status}`);
      }

      // 2. Fire Conversion Pixels
      if (typeof window !== "undefined") {
        const win = window as any;
        if (win.gtag) {
          win.gtag("event", "generate_lead", {
            event_category: "seo_landing",
            event_label: pageContext,
            value: 1
          });
        }
        if (win.fbq) {
          win.fbq("track", "Lead", {
            content_name: pageContext,
            status: "success"
          });
        }
      }

      setSubmitted(true);
    } catch (err) {
      console.warn("Direct submission notice:", err);
      // If server or network fails, offer instant WhatsApp fallback
      setFallback(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-surface-container-low/90 border border-arena-calida/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-ethereal relative overflow-hidden text-left">
      <div className="absolute top-0 right-0 w-48 h-48 bg-teal-uno/5 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="mb-6 sm:mb-8 border-b border-arena-calida/20 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-uno/10 border border-teal-uno/30 text-teal-uno text-[11px] font-label-caps uppercase tracking-wider font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-uno" />
          <span>{isEs ? "Diagnóstico Técnico & Normativo" : "Technical & Zoning Feasibility"}</span>
        </div>
        <h3 className="font-headline-md text-xl sm:text-2xl md:text-3xl text-teal-uno uppercase font-semibold leading-tight">
          {title || (isEs ? "Solicita un diagnóstico de viabilidad técnica y normativa de tu lote" : "Request a technical and zoning feasibility review for your plot")}
        </h3>
        <p className="font-body-md text-xs sm:text-sm text-gris-texto/85 mt-2 leading-relaxed">
          {subtitle || (isEs 
            ? "Evaluamos coeficientes de uso de suelo (COS/CUS), mecánica kárstica preliminar y costo paramétrico estimado de tu proyecto en 48 horas." 
            : "We evaluate zoning ratios (COS/CUS), preliminary karstic feasibility, and parametric budgeting for your project within 48 hours.")}
        </p>
      </div>

      {submitted ? (
        <div className="py-8 sm:py-12 text-center flex flex-col items-center animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-teal-uno/15 text-teal-uno flex items-center justify-center mb-5 border border-teal-uno/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-headline-md text-xl sm:text-2xl font-semibold text-teal-uno uppercase mb-2">
            {isEs ? `¡Solicitud Recibida, ${nombre.split(" ")[0]}!` : `Request Received, ${nombre.split(" ")[0]}!`}
          </h4>
          <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-md mx-auto leading-relaxed mb-6">
            {isEs 
              ? "Nuestro director de proyectos revisará los datos de tu terreno y te contactará con el análisis preliminar de viabilidad técnica." 
              : "Our project director will review your lot details and reach out with the initial technical feasibility review."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-label-caps text-xs uppercase tracking-wider font-semibold shadow-md transition-all"
            >
              <span>{isEs ? "Continuar por WhatsApp Directo" : "Chat on WhatsApp Now"}</span>
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setNombre("");
                setEmail("");
                setTelefono("");
                setDetalles("");
              }}
              className="px-4 py-3 font-label-caps text-xs uppercase tracking-wider text-gris-texto hover:text-teal-uno transition-colors"
            >
              {isEs ? "Enviar otra consulta" : "Submit another inquiry"}
            </button>
          </div>
        </div>
      ) : fallback ? (
        <div className="py-8 text-center flex flex-col items-center animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h4 className="font-headline-md text-lg font-semibold text-teal-uno uppercase mb-2">
            {isEs ? "Envía tus datos directamente a nuestra dirección técnica" : "Connect directly with our technical team"}
          </h4>
          <p className="font-body-md text-xs sm:text-sm text-gris-texto max-w-md mx-auto leading-relaxed mb-6">
            {isEs 
              ? "Puedes abrir WhatsApp con tus datos precargados para una atención técnica inmediata sin esperas." 
              : "Open WhatsApp with your pre-filled project details for immediate technical consultation."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-label-caps text-xs uppercase tracking-wider font-semibold shadow-md"
            >
              <span>{isEs ? "Abrir WhatsApp con Mis Datos" : "Open WhatsApp with My Details"}</span>
            </a>
            <button
              onClick={() => setFallback(false)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 font-label-caps text-xs uppercase tracking-wider text-gris-texto hover:text-teal-uno transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isEs ? "Reintentar" : "Retry"}</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
          {/* Fila 1: Nombre & Correo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={nombreId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1 font-semibold">
                {isEs ? "Nombre completo" : "Full Name"} <span className="text-red-500">*</span>
              </label>
              <input
                id={nombreId}
                type="text"
                required
                placeholder={isEs ? "Tu nombre y apellido" : "Your full name"}
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                  if (errors.nombre) setErrors({ ...errors, nombre: "" });
                }}
                className={`w-full bg-white border rounded-xl py-2.5 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno ${
                  errors.nombre ? "border-red-500" : "border-arena-calida/30 focus:border-teal-uno"
                }`}
              />
              {errors.nombre && <p className="text-red-500 text-[11px] mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label htmlFor={emailId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1 font-semibold">
                {isEs ? "Correo electrónico" : "Email Address"} <span className="text-red-500">*</span>
              </label>
              <input
                id={emailId}
                type="email"
                required
                placeholder={isEs ? "correo@ejemplo.com" : "you@example.com"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full bg-white border rounded-xl py-2.5 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno ${
                  errors.email ? "border-red-500" : "border-arena-calida/30 focus:border-teal-uno"
                }`}
              />
              {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Fila 2: Teléfono / WhatsApp & Ubicación del Terreno */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={telId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1 font-semibold">
                {isEs ? "Teléfono / WhatsApp" : "Phone / WhatsApp"} <span className="text-red-500">*</span>
              </label>
              <input
                id={telId}
                type="tel"
                required
                placeholder={isEs ? "+52 1 984 ..." : "+1 ..."}
                value={telefono}
                onChange={(e) => {
                  setTelefono(e.target.value);
                  if (errors.telefono) setErrors({ ...errors, telefono: "" });
                }}
                className={`w-full bg-white border rounded-xl py-2.5 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno ${
                  errors.telefono ? "border-red-500" : "border-arena-calida/30 focus:border-teal-uno"
                }`}
              />
              {errors.telefono && <p className="text-red-500 text-[11px] mt-1">{errors.telefono}</p>}
            </div>

            <div>
              <label htmlFor={ubicacionId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1 font-semibold">
                {isEs ? "Ubicación del Terreno / Proyecto" : "Project Location"} <span className="text-red-500">*</span>
              </label>
              <select
                id={ubicacionId}
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                className="w-full bg-white border border-arena-calida/30 rounded-xl py-2.5 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus:border-teal-uno"
              >
                <option value="Tulum">{isEs ? "Tulum (Selva, Veleta, Aldea Zama, Región 15)" : "Tulum"}</option>
                <option value="Playa del Carmen">{isEs ? "Playa del Carmen (Playacar, Centro, Corredor)" : "Playa del Carmen"}</option>
                <option value="Cancún">{isEs ? "Cancún (Puerto Cancún, Zona Hotelera)" : "Cancun"}</option>
                <option value="Puerto Morelos">{isEs ? "Puerto Morelos / Ruta de los Cenotes" : "Puerto Morelos"}</option>
                <option value="Akumal / Puerto Aventuras">{isEs ? "Akumal / Puerto Aventuras" : "Akumal / Puerto Aventuras"}</option>
                <option value="Otro">{isEs ? "Otro Corredor en Quintana Roo" : "Other Quintana Roo Area"}</option>
              </select>
            </div>
          </div>

          {/* Fila 3: Presupuesto Estimado & Terreno Identificado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={presupuestoId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1 font-semibold">
                {isEs ? "Presupuesto estimado de inversión" : "Estimated Investment Budget"}
              </label>
              <select
                id={presupuestoId}
                value={presupuesto}
                onChange={(e) => setPresupuesto(e.target.value)}
                className="w-full bg-white border border-arena-calida/30 rounded-xl py-2.5 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus:border-teal-uno"
              >
                <option value="">{isEs ? "Selecciona un rango aproximado" : "Select an approximate range"}</option>
                <option value="$2M - $4M MXN">$2M – $4M MXN (~$100k - $200k USD)</option>
                <option value="$4M - $8M MXN">$4M – $8M MXN (~$200k - $400k USD)</option>
                <option value="$8M - $15M MXN">$8M – $15M MXN (~$400k - $750k USD)</option>
                <option value="Más de $15M MXN">{isEs ? "Más de $15M MXN (Ultra-Lujo / $750k+ USD)" : "More than $15M MXN ($750k+ USD)"}</option>
                <option value="Aún por definir">{isEs ? "Aún en definición / Por asesorar" : "Under evaluation"}</option>
              </select>
            </div>

            <div>
              <span className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1 font-semibold">
                {isEs ? "¿Cuentas ya con el lote adquirido?" : "Do you already own the lot?"}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTerreno("true")}
                  className={`flex-1 py-2 px-3 rounded-xl border text-xs font-label-caps uppercase tracking-wider font-semibold transition-all ${
                    terreno === "true"
                      ? "bg-teal-uno text-white border-teal-uno shadow-xs"
                      : "bg-white text-gris-texto border-arena-calida/30 hover:border-teal-uno/40"
                  }`}
                >
                  {isEs ? "Sí, ya tengo lote" : "Yes, lot acquired"}
                </button>
                <button
                  type="button"
                  onClick={() => setTerreno("false")}
                  className={`flex-1 py-2 px-3 rounded-xl border text-xs font-label-caps uppercase tracking-wider font-semibold transition-all ${
                    terreno === "false"
                      ? "bg-teal-uno text-white border-teal-uno shadow-xs"
                      : "bg-white text-gris-texto border-arena-calida/30 hover:border-teal-uno/40"
                  }`}
                >
                  {isEs ? "En búsqueda / Evaluación" : "Searching / Evaluating"}
                </button>
              </div>
            </div>
          </div>

          {/* Fila 4: Notas / Detalles del lote */}
          <div>
            <label htmlFor={detallesId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1 font-semibold">
              {isEs ? "Detalles del proyecto o lote" : "Project or lot details"} <span className="text-gris-texto/60 font-normal lowercase">{isEs ? "(opcional: m², tipo de casa, amenidades)" : "(optional)"}</span>
            </label>
            <textarea
              id={detallesId}
              rows={2}
              placeholder={isEs ? "Ej. Lote de 800 m² en selva, deseamos villa de 4 recámaras con alberca Chukum..." : "E.g. 800 sqm lot, 4-bedroom villa with Chukum plunge pool..."}
              value={detalles}
              onChange={(e) => setDetalles(e.target.value)}
              className="w-full bg-white border border-arena-calida/30 rounded-xl p-3 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus:border-teal-uno resize-none"
            />
          </div>

          {/* BOTÓN SUBMIT */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3.5 sm:py-4 px-6 rounded-full bg-teal-uno hover:bg-arena-calida text-white font-label-caps text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-ethereal transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isSending ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            <Send className="w-4 h-4 text-white" />
            <span>
              {isSending 
                ? (isEs ? "Enviando Solicitud..." : "Submitting...") 
                : (isEs ? "Solicitar Diagnóstico Técnico de Viabilidad" : "Request Technical Feasibility Diagnostic")}
            </span>
          </button>

          {/* PIE DE FORMULARIO CON RESPETO Y PRIVACIDAD */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gris-texto/75 font-body-md gap-2">
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-teal-uno" />
              {isEs ? "Respuesta técnica directa en menos de 48 horas hábiles." : "Direct technical response within 48 business hours."}
            </span>
            <a
              href="https://forms.monday.com/forms/9a8cac1e1e21d26e435ae874c1e67e6c?r=use1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-uno hover:underline font-semibold flex items-center gap-1"
            >
              <span>{isEs ? "O llenar formulario extendido en Monday" : "Or open extended Monday form"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
