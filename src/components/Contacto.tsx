import { useState, FormEvent, useEffect, useId } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, ExternalLink, X, AlertTriangle, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSiteContent } from "../context/ContentContext";
import Logo from "./Logo";

interface ToastNotification {
  type: "success" | "error";
  title: string;
  message: string;
}

// Configurable GoHighLevel Webhook Endpoint via Vite Environment Variable
const GHL_WEBHOOK_URL = 
  import.meta.env.VITE_GHL_WEBHOOK_URL || 
  "https://services.leadconnectorhq.com/hooks/unoarquitectos/lead-contact";

export default function Contacto() {
  const { t, language } = useLanguage();
  const { content } = useSiteContent();
  const isEs = language === "es";

  // Form Field States (aligned with reference form)
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [zona, setZona] = useState("");
  const [terreno, setTerreno] = useState<string>(""); // "true" | "false" | ""
  const [tipoProyecto, setTipoProyecto] = useState("");
  const [inversion, setInversion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fuente, setFuente] = useState("Sitio web");
  const [honeypot, setHoneypot] = useState("");

  // UI Flow States
  const [submitted, setSubmitted] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<ToastNotification | null>(null);

  const nombreId = useId();
  const telefonoId = useId();
  const correoId = useId();
  const zonaId = useId();
  const tipoProyectoId = useId();
  const inversionId = useId();
  const mensajeId = useId();

  // 1. Capture Campaign Source from URL (?fuente= or ?utm_source=)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = (params.get("fuente") || params.get("utm_source") || "").toLowerCase().trim();
      const map: Record<string, string> = {
        meta: "Meta",
        facebook: "Facebook",
        fb: "Facebook",
        instagram: "Meta",
        google: "Sitio web",
        referido: "Referido",
        chatgpt: "Chat GPT",
        colaborador: "Colaborador",
      };
      if (raw && map[raw]) {
        setFuente(map[raw]);
      } else if (raw) {
        setFuente(raw);
      }
    } catch {
      // safe fallback
    }
  }, []);

  // 2. Auto-dismiss Toast
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 6000);
    return () => clearTimeout(timer);
  }, [toast]);

  // Options Definitions
  const ZONAS = [
    { value: "Puerto Morelos", label: t("contacto.zonePuertoMorelos") || "Puerto Morelos" },
    { value: "Playa del Carmen", label: t("contacto.zonePDC") || "Playa del Carmen" },
    { value: "Puerto Aventuras", label: t("contacto.zonePuertoAventuras") || "Puerto Aventuras" },
    { value: "Akumal", label: t("contacto.zoneAkumal") || "Akumal" },
    { value: "Tulum", label: t("contacto.zoneTulum") || "Tulum" },
    { value: "Otra", label: t("contacto.zoneOther") || "Otra zona" },
  ];

  const TIPOS_PROYECTO = [
    { value: "Residencial", label: t("contacto.projectTypeResidencial") || "Residencial" },
    { value: "Hospitality / Boutique", label: t("contacto.projectTypeHospitality") || "Hospitality / Boutique" },
    { value: "Remodelación", label: t("contacto.projectTypeRemodelacion") || "Remodelación" },
    { value: "Desarrollo (multi-unidad)", label: t("contacto.projectTypeDesarrollo") || "Desarrollo (multi-unidad)" },
    { value: "Otro", label: t("contacto.projectTypeOther") || "Otro" },
  ];

  const RANGOS_INVERSION = [
    { value: "<2M", label: t("contacto.investmentUnder2M") || "Menos de $2M MXN" },
    { value: "2-4M", label: t("contacto.investment2To4M") || "$2M – $4M MXN" },
    { value: "4-6M", label: t("contacto.investment4To6M") || "$4M – $6M MXN" },
    { value: "6-10M", label: t("contacto.investment6To10M") || "$6M – $10M MXN" },
    { value: ">10M", label: t("contacto.investmentOver10M") || "Más de $10M MXN" },
    { value: "no_seguro", label: t("contacto.investmentUnsure") || "Aún no lo tengo claro" },
  ];

  // Helper for WhatsApp message text
  const whatsappNumber = (content?.contact?.whatsapp || "5219842108420").replace(/[^\d]/g, "");

  const buildWhatsAppText = () => {
    const invLabel = RANGOS_INVERSION.find(r => r.value === inversion)?.label || inversion;
    const terrLabel = terreno === "true" 
      ? (t("contacto.hasLandYes") || "Sí") 
      : (t("contacto.hasLandNo") || "Aún no");
    
    let text = isEs
      ? `Hola, quiero información sobre mi proyecto:\nNombre: ${nombre}\nTeléfono: ${telefono}\nZona: ${zona}\nTerreno identificado: ${terrLabel}\nTipo de proyecto: ${tipoProyecto}\nRango de inversión: ${invLabel}`
      : `Hello, I would like information regarding my project:\nName: ${nombre}\nPhone: ${telefono}\nZone: ${zona}\nIdentified plot: ${terrLabel}\nProject type: ${tipoProyecto}\nInvestment range: ${invLabel}`;

    if (mensaje.trim()) {
      text += `\n${isEs ? "Notas" : "Notes"}: ${mensaje.trim()}`;
    }
    return text;
  };

  const getWhatsAppUrl = () => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppText())}`;
  };

  // Validation
  const validateForm = () => {
    const errs: Record<string, string> = {};
    const trimmedNombre = nombre.trim();
    const trimmedTelefono = telefono.trim();
    const trimmedCorreo = correo.trim();

    if (!trimmedNombre || trimmedNombre.length < 2) {
      errs.nombre = isEs ? "Escribe tu nombre." : "Please enter your name.";
    }

    if (!trimmedTelefono || !/^[\d\s()+\-]{8,}$/.test(trimmedTelefono)) {
      errs.telefono = isEs ? "Escribe un teléfono válido." : "Please enter a valid phone number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedCorreo || !emailRegex.test(trimmedCorreo)) {
      errs.correo = isEs ? "Escribe un correo válido." : "Please enter a valid email address.";
    }

    if (!zona) {
      errs.zona = isEs ? "Selecciona una zona." : "Please select a zone.";
    }

    if (!terreno) {
      errs.terreno = isEs ? "Selecciona una opción." : "Please select an option.";
    }

    if (!tipoProyecto) {
      errs.tipoProyecto = isEs ? "Selecciona un tipo de proyecto." : "Please select a project type.";
    }

    if (!inversion) {
      errs.inversion = isEs ? "Selecciona un rango." : "Please select an investment range.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm()) {
      setToast({
        type: "error",
        title: isEs ? "Campos Incompletos" : "Incomplete Fields",
        message: isEs 
          ? "Por favor completa los campos requeridos para poder darte una respuesta útil." 
          : "Please fill in the required fields so we can give you a helpful response."
      });
      return;
    }

    setIsSending(true);
    setErrors({});
    setFallback(false);

    // Split Name for CRM Contact Fields
    const nameParts = nombre.trim().split(" ");
    const firstName = nameParts[0] || nombre.trim();
    const lastName = nameParts.slice(1).join(" ") || "";
    const invLabel = RANGOS_INVERSION.find(r => r.value === inversion)?.label || inversion;
    const terrenoText = terreno === "true" ? "Sí" : "Aún no";

    const payload = {
      // Reference & Standard names
      nombre: nombre.trim(),
      name: nombre.trim(),
      firstName,
      lastName,
      telefono: telefono.trim(),
      phone: telefono.trim(),
      correo: correo.trim(),
      email: correo.trim(),
      zona,
      zone: zona,
      location: zona,
      terreno,
      has_land: terreno,
      hasLand: terreno === "true",
      terreno_identificado: terrenoText,
      tipo_proyecto: tipoProyecto,
      tipoProyecto,
      project_type: tipoProyecto,
      projectType: tipoProyecto,
      inversion,
      budget: invLabel,
      budget_range: invLabel,
      mensaje: mensaje.trim(),
      message: mensaje.trim(),
      notes: mensaje.trim(),
      fuente,
      source: fuente,
      language,
      form_website_hp: honeypot.trim(),
      timestamp: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "https://unoarquitectos.com/#contacto",
      tags: ["Website Lead", "Diagnostico Web", "Fase IV", `Lang-${language.toUpperCase()}`]
    };

    try {
      // 1. Primary: Post to HostGator Backend (/api/contact) for Local Storage + Email + GHL Bridge
      const localApiPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(async (res) => {
        if (!res.ok) {
          throw new Error(`Server returned status ${res.status}`);
        }
        return await res.json();
      });

      // 2. Direct Frontend GHL Webhook Dispatch (non-blocking if configured)
      const ghlPromise = fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch((err) => {
        console.warn("Direct GHL Webhook dispatch status:", err);
      });

      // Await primary backend response
      const [backendResult] = await Promise.allSettled([localApiPromise, ghlPromise]);
      if (backendResult.status === "rejected") {
        throw backendResult.reason;
      }

      // 3. Trigger Analytics Conversion Events
      if (typeof window !== "undefined") {
        const win = window as any;
        if (win.gtag) {
          win.gtag("event", "generate_lead", {
            event_category: "contact",
            event_label: "Formulario Diagnóstico GHL",
            value: 1
          });
        }
        if (win.fbq) {
          win.fbq("track", "Lead", {
            content_name: "Formulario Diagnóstico GHL",
            status: "success"
          });
        }
      }

      // 4. Success UI Feedback
      setToast({
        type: "success",
        title: isEs ? "¡Diagnóstico Solicitado!" : "Diagnostic Requested!",
        message: isEs 
          ? "Recibimos tu información con éxito. Te contactaremos muy pronto para agendar tu diagnóstico."
          : "We received your project details. We will reach out shortly to schedule your diagnostic."
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed, presenting WhatsApp fallback:", err);
      setFallback(true);
      setToast({
        type: "error",
        title: isEs ? "Falla de Envío" : "Submission Error",
        message: isEs 
          ? "No pudimos conectar con el servidor. Puedes continuar directamente por WhatsApp con tus datos precargados."
          : "Could not reach server. You can continue directly on WhatsApp with your pre-filled details."
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFallback(false);
    setNombre("");
    setTelefono("");
    setCorreo("");
    setZona("");
    setTerreno("");
    setTipoProyecto("");
    setInversion("");
    setMensaje("");
    setErrors({});
  };

  return (
    <section id="contacto" className="py-section-padding px-4 sm:px-6 md:px-margin-desktop bg-background text-gris-texto font-sans relative border-t border-arena-calida/20 texture-overlay overflow-hidden cv-auto">
      {/* BRAND-AESTHETIC TOAST NOTIFICATION MODAL */}
      {toast && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 max-w-md w-[calc(100%-2rem)] sm:w-auto animate-slideUp">
          <div className={`p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-start gap-3.5 transition-all duration-300 ${
            toast.type === "success" 
              ? "bg-[#FDFCF9]/95 border-teal-uno/40 text-gris-texto" 
              : "bg-[#1E1E1E]/95 border-red-500/40 text-white"
          }`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              toast.type === "success" ? "bg-teal-uno/15 text-teal-uno" : "bg-red-500/20 text-red-400"
            }`}>
              {toast.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
              ) : (
                <AlertCircle className="w-5 h-5 stroke-[2.2]" />
              )}
            </div>
            <div className="flex-1 pr-2">
              <h4 className={`font-label-caps text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                toast.type === "success" ? "text-teal-uno" : "text-red-400"
              }`}>
                {toast.title}
              </h4>
              <p className="font-body-md text-xs sm:text-sm mt-1 opacity-90 leading-relaxed">
                {toast.message}
              </p>
            </div>
            <button 
              onClick={() => setToast(null)} 
              className="text-gris-texto hover:text-teal-uno transition-colors p-1 cursor-pointer"
              aria-label={isEs ? "Cerrar notificación" : "Close notification"}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-container-max mx-auto">
        
        {/* Top Tagline */}
        <div className="mb-10 sm:mb-16 text-center">
          <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-[0.25em] sm:tracking-[0.35em] block font-semibold">
            {t("contacto.conversionTagline") || "Diseño con sentido. Construcción con criterio."}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* INFO COLUMN */}
          <div className="lg:col-span-5 text-left">
            <Logo showText={false} iconSize={42} className="mb-4 sm:mb-6 opacity-90 text-teal-uno" />
            <span className="font-label-caps text-xs sm:text-label-caps text-teal-uno uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold block mb-2 sm:mb-3">
              {t("contacto.tagline") || "Contacto Directo & Ubicaciones"}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-teal-uno uppercase mb-4 sm:mb-6 leading-tight font-semibold">
              {t("contacto.heading") || "INICIEMOS LA CONVERSACIÓN"}
            </h2>
            <p className="font-body-md text-gris-texto text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 max-w-md">
              {t("contacto.desc") || "Atendemos consultas y citas técnicas en nuestras oficinas centrales de Playa del Carmen y en nuestro taller de producción en la carretera Tulum – Macario Gómez."}
            </p>

            <div className="space-y-6 sm:space-y-8">
              
              {/* Ubicación 1 - Oficinas Playa del Carmen */}
              <div className="flex gap-3.5 sm:gap-4 items-start">
                <MapPin className="w-5 h-5 text-teal-uno flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-label-caps text-xs uppercase tracking-wider text-teal-uno font-semibold">
                    {content?.contact?.officePlayaTitle || t("contacto.officePlaya") || "Oficinas Centrales"}
                  </h3>
                  <p className="font-body-md text-xs text-gris-texto mt-0.5 sm:mt-1 leading-relaxed">
                    {content?.contact?.officePlayaAddr || t("contacto.officePlayaAddr") || "Plaza Palmeras, Playa del Carmen, Q. Roo"}
                  </p>
                  <a
                    href={content?.contact?.officePlayaMapUrl || "https://www.google.com/maps/place/UNO+Arquitectos+Mx/@20.6718486,-87.0504611,17z/data=!3m1!4b1!4m6!3m5!1s0x8f4e43859b311239:0x1a9cb6da851ff691!8m2!3d20.6718486!4d-87.0504611!16s%2Fg%2F11r_t7kdfg"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-teal-uno hover:text-arena-calida transition-colors mt-1.5 font-label-caps uppercase font-semibold tracking-wider"
                  >
                    Ver en Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Ubicación 2 - Taller & Bodega */}
              <div className="flex gap-3.5 sm:gap-4 items-start">
                <MapPin className="w-5 h-5 text-arena-calida flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-label-caps text-xs uppercase tracking-wider text-teal-uno font-semibold">
                    {content?.contact?.tallerTulumTitle || t("contacto.tallerTulum") || "Taller & Bodega"}
                  </h3>
                  <p className="font-body-md text-xs text-gris-texto mt-0.5 sm:mt-1 leading-relaxed">
                    {content?.contact?.tallerTulumAddr || t("contacto.tallerTulumAddr") || "Carretera Tulum – Macario Gómez, Q. Roo"}
                  </p>
                </div>
              </div>

              {/* Tel, WhatsApp & Mail */}
              <div className="pt-6 sm:pt-8 border-t border-arena-calida/30 space-y-3.5 font-body-md text-xs text-gris-texto">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-uno flex-shrink-0" />
                  <a href={`tel:${(content?.contact?.phone || "+529842108420").replace(/\s+/g, "")}`} className="hover:text-teal-uno transition-colors font-medium">
                    {content?.contact?.phone || "+52 1 984 210 8420"}
                  </a>
                  <a 
                    href={`https://wa.me/${(content?.contact?.whatsapp || "5219842108420").replace(/[^\d]/g, "")}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-uno hover:underline font-semibold ml-1 text-[11px] uppercase tracking-wider font-label-caps"
                  >
                    • WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-uno flex-shrink-0" />
                  <a href={`mailto:${content?.contact?.email || "hola@unoarquitectos.com"}`} className="hover:text-teal-uno transition-colors">
                    {content?.contact?.email || "hola@unoarquitectos.com"}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-arena-calida flex-shrink-0" />
                  <span>
                    {isEs 
                      ? (content?.contact?.workHoursEs || "Lunes a Viernes: 9:00 - 18:00 hrs") 
                      : (content?.contact?.workHoursEn || "Monday to Friday: 9:00 AM - 6:00 PM")}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT CARD CONTAINER */}
          <div className="lg:col-span-7 bg-surface-container-low/80 border border-arena-calida/30 p-5 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl relative text-left shadow-ethereal overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute -right-6 -top-6 opacity-[0.03] pointer-events-none select-none">
              <Logo showText={false} iconSize={180} />
            </div>

            {/* 1. SUCCESS STATE */}
            {submitted ? (
              <div className="py-8 sm:py-12 text-center flex flex-col items-center animate-fadeIn">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-uno/10 text-teal-uno flex items-center justify-center mb-5 sm:mb-6 border border-teal-uno/30">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl font-semibold text-teal-uno mb-2 uppercase">
                  {isEs ? `¡Listo, ${nombre.split(" ")[0]}!` : `All set, ${nombre.split(" ")[0]}!`}
                </h3>
                <p className="font-body-md text-gris-texto text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
                  {t("contacto.successDesc") || "Recibimos tu información. Te contactaremos muy pronto para agendar tu diagnóstico."}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-label-caps text-xs uppercase tracking-wider transition-all font-semibold shadow-md"
                  >
                    {t("contacto.btnWhatsappDirect") || "Abrir WhatsApp Directo"}
                  </a>
                  <button
                    onClick={handleReset}
                    className="font-label-caps text-xs uppercase tracking-widest text-gris-texto hover:text-teal-uno transition-colors cursor-pointer py-3 px-4 text-center"
                  >
                    {t("contacto.successAnother") || "Enviar otra consulta"}
                  </button>
                </div>
              </div>
            ) : fallback ? (
              /* 2. FALLBACK WHATSAPP STATE (Network failure fallback) */
              <div className="py-8 sm:py-12 text-center flex flex-col items-center animate-fadeIn">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 sm:mb-6 border border-amber-500/30">
                  <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl font-semibold text-teal-uno mb-2 uppercase">
                  {t("contacto.fallbackTitle") || "No pudimos enviar el formulario"}
                </h3>
                <p className="font-body-md text-gris-texto text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
                  {t("contacto.fallbackDesc") || "Sin problema — escríbenos directo por WhatsApp y te atendemos de inmediato."}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-label-caps text-xs uppercase tracking-wider transition-all font-semibold shadow-md"
                  >
                    {t("contacto.fallbackBtn") || "Continuar por WhatsApp"}
                  </a>
                  <button
                    onClick={() => setFallback(false)}
                    className="inline-flex items-center justify-center gap-1.5 font-label-caps text-xs uppercase tracking-widest text-gris-texto hover:text-teal-uno transition-colors cursor-pointer py-3 px-4 text-center"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    {t("contacto.fallbackRetry") || "Intentar de nuevo"}
                  </button>
                </div>
              </div>
            ) : (
              /* 3. ACTIVE DIAGNOSTIC FORM (7 Visible Fields + Notes + UTM Source) */
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5 relative z-10">
                
                {/* Form Heading & Subheading */}
                <div>
                  <h3 className="font-headline-md text-lg sm:text-xl font-semibold text-teal-uno mb-1 uppercase">
                    {t("contacto.formHeading") || "Cuéntanos sobre tu proyecto"}
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-gris-texto opacity-90">
                    {t("contacto.formSubheading") || "2 minutos para que podamos darte una respuesta útil — no una genérica."}
                  </p>
                </div>

                {/* INVISIBLE HONEYPOT BOT TRAP */}
                <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                  <label htmlFor="form_website_hp">Empresa / Sitio web (No llenar)</label>
                  <input
                    id="form_website_hp"
                    type="text"
                    name="form_website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* HIDDEN UTM CAMPAIGN SOURCE */}
                <input type="hidden" name="fuente" value={fuente} />

                {/* Campo 1: Nombre Completo */}
                <div>
                  <label htmlFor={nombreId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                    {t("contacto.fullName") || "Nombre completo"} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={nombreId}
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={errors.nombre ? "true" : "false"}
                    aria-describedby={errors.nombre ? `${nombreId}-err` : undefined}
                    autoComplete="name"
                    placeholder={t("contacto.fullNamePlaceholder") || "Tu nombre y apellido"}
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                    }}
                    className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 ${
                      errors.nombre ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                    }`}
                  />
                  {errors.nombre && <p id={`${nombreId}-err`} className="text-red-500 text-[11px] mt-1 font-medium" role="alert">{errors.nombre}</p>}
                </div>

                {/* Fila 2: Teléfono / WhatsApp & Correo Electrónico */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={telefonoId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                      {t("contacto.phone") || "Teléfono / WhatsApp"} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={telefonoId}
                      type="tel"
                      required
                      aria-required="true"
                      aria-invalid={errors.telefono ? "true" : "false"}
                      aria-describedby={errors.telefono ? `${telefonoId}-err` : undefined}
                      autoComplete="tel"
                      placeholder={t("contacto.phonePlaceholder") || "+52 ..."}
                      value={telefono}
                      onChange={(e) => {
                        setTelefono(e.target.value);
                        if (errors.telefono) setErrors({ ...errors, telefono: undefined });
                      }}
                      className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 ${
                        errors.telefono ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                      }`}
                    />
                    {errors.telefono && <p id={`${telefonoId}-err`} className="text-red-500 text-[11px] mt-1 font-medium" role="alert">{errors.telefono}</p>}
                  </div>

                  <div>
                    <label htmlFor={correoId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                      {t("contacto.email") || "Correo electrónico"} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={correoId}
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={errors.correo ? "true" : "false"}
                      aria-describedby={errors.correo ? `${correoId}-err` : undefined}
                      autoComplete="email"
                      placeholder={t("contacto.emailPlaceholder") || "tu@correo.com"}
                      value={correo}
                      onChange={(e) => {
                        setCorreo(e.target.value);
                        if (errors.correo) setErrors({ ...errors, correo: undefined });
                      }}
                      className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 ${
                        errors.correo ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                      }`}
                    />
                    {errors.correo && <p id={`${correoId}-err`} className="text-red-500 text-[11px] mt-1 font-medium" role="alert">{errors.correo}</p>}
                  </div>
                </div>

                {/* Fila 3: Zona de interés & Terreno identificado (Pill buttons) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={zonaId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                      {t("contacto.zone") || "Zona de interés del terreno"} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id={zonaId}
                      required
                      aria-required="true"
                      aria-invalid={errors.zona ? "true" : "false"}
                      aria-describedby={errors.zona ? `${zonaId}-err` : undefined}
                      value={zona}
                      onChange={(e) => {
                        setZona(e.target.value);
                        if (errors.zona) setErrors({ ...errors, zona: undefined });
                      }}
                      className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto transition-all appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 ${
                        errors.zona ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                      }`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23009E9B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.85rem center",
                        backgroundSize: "1rem"
                      }}
                    >
                      <option value="" disabled>{t("contacto.zonePlaceholder") || "Selecciona una zona"}</option>
                      {ZONAS.map((z) => (
                        <option key={z.value} value={z.value}>{z.label}</option>
                      ))}
                    </select>
                    {errors.zona && <p id={`${zonaId}-err`} className="text-red-500 text-[11px] mt-1 font-medium" role="alert">{errors.zona}</p>}
                  </div>

                  <div>
                    <span id="terreno-label" className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                      {t("contacto.hasLand") || "¿Ya cuentas con terreno identificado o adquirido?"} <span className="text-red-500" aria-hidden="true">*</span>
                    </span>
                    <div className="flex gap-2.5" role="radiogroup" aria-labelledby="terreno-label">
                      <button
                        type="button"
                        role="radio"
                        aria-checked={terreno === "true"}
                        onClick={() => {
                          setTerreno("true");
                          if (errors.terreno) setErrors({ ...errors, terreno: undefined });
                        }}
                        className={`flex-1 py-2.5 sm:py-3 px-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-center cursor-pointer select-none ${
                          terreno === "true"
                            ? "border-teal-uno bg-teal-uno/15 text-teal-uno font-semibold ring-1 ring-teal-uno"
                            : "border-arena-calida/30 bg-white text-gris-texto hover:border-teal-uno/50"
                        }`}
                      >
                        {t("contacto.hasLandYes") || "Sí"}
                      </button>
                      <button
                        type="button"
                        role="radio"
                        aria-checked={terreno === "false"}
                        onClick={() => {
                          setTerreno("false");
                          if (errors.terreno) setErrors({ ...errors, terreno: undefined });
                        }}
                        className={`flex-1 py-2.5 sm:py-3 px-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-center cursor-pointer select-none ${
                          terreno === "false"
                            ? "border-teal-uno bg-teal-uno/15 text-teal-uno font-semibold ring-1 ring-teal-uno"
                            : "border-arena-calida/30 bg-white text-gris-texto hover:border-teal-uno/50"
                        }`}
                      >
                        {t("contacto.hasLandNo") || "Aún no"}
                      </button>
                    </div>
                    {errors.terreno && <p className="text-red-500 text-[11px] mt-1 font-medium" role="alert">{errors.terreno}</p>}
                  </div>
                </div>

                {/* Fila 4: Tipo de Proyecto & Rango de Inversión */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={tipoProyectoId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                      {t("contacto.projectType") || "Tipo de proyecto"} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id={tipoProyectoId}
                      required
                      aria-required="true"
                      aria-invalid={errors.tipoProyecto ? "true" : "false"}
                      aria-describedby={errors.tipoProyecto ? `${tipoProyectoId}-err` : undefined}
                      value={tipoProyecto}
                      onChange={(e) => {
                        setTipoProyecto(e.target.value);
                        if (errors.tipoProyecto) setErrors({ ...errors, tipoProyecto: undefined });
                      }}
                      className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto transition-all appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 ${
                        errors.tipoProyecto ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                      }`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23009E9B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.85rem center",
                        backgroundSize: "1rem"
                      }}
                    >
                      <option value="" disabled>{t("contacto.projectTypePlaceholder") || "Selecciona una opción"}</option>
                      {TIPOS_PROYECTO.map((tp) => (
                        <option key={tp.value} value={tp.value}>{tp.label}</option>
                      ))}
                    </select>
                    {errors.tipoProyecto && <p id={`${tipoProyectoId}-err`} className="text-red-500 text-[11px] mt-1 font-medium" role="alert">{errors.tipoProyecto}</p>}
                  </div>

                  <div>
                    <label htmlFor={inversionId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                      {t("contacto.investment") || "Rango de inversión aproximado"} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id={inversionId}
                      required
                      aria-required="true"
                      aria-invalid={errors.inversion ? "true" : "false"}
                      aria-describedby={errors.inversion ? `${inversionId}-err` : undefined}
                      value={inversion}
                      onChange={(e) => {
                        setInversion(e.target.value);
                        if (errors.inversion) setErrors({ ...errors, inversion: undefined });
                      }}
                      className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto transition-all appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 ${
                        errors.inversion ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                      }`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23009E9B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.85rem center",
                        backgroundSize: "1rem"
                      }}
                    >
                      <option value="" disabled>{t("contacto.investmentPlaceholder") || "Selecciona un rango"}</option>
                      {RANGOS_INVERSION.map((ri) => (
                        <option key={ri.value} value={ri.value}>{ri.label}</option>
                      ))}
                    </select>
                    {errors.inversion && <p id={`${inversionId}-err`} className="text-red-500 text-[11px] mt-1 font-medium" role="alert">{errors.inversion}</p>}
                  </div>
                </div>

                {/* Campo 5: Mensaje Opcional */}
                <div>
                  <label htmlFor={mensajeId} className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 font-semibold">
                    {t("contacto.additionalMsg") || "Cuéntanos algo más"} <span className="font-normal text-gris-texto/70 tracking-normal normal-case">{t("contacto.additionalMsgOpt") || "(opcional)"}</span>
                  </label>
                  <textarea
                    id={mensajeId}
                    rows={3}
                    placeholder={t("contacto.additionalMsgPlaceholder") || "Lo que quieras compartir sobre el proyecto..."}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full bg-white border border-arena-calida/30 rounded-xl p-3.5 font-body-md text-sm text-gris-texto transition-all resize-y min-h-[75px] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 focus:border-teal-uno"
                  ></textarea>
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  disabled={isSending}
                  aria-label={isSending ? "Enviando solicitud..." : "Enviar y agendar diagnóstico"}
                  className={`w-full bg-teal-uno hover:bg-arena-calida text-white py-3.5 sm:py-4 font-label-caps text-xs sm:text-label-caps uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-full cursor-pointer shadow-ethereal font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-uno focus-visible:ring-offset-2 ${
                    isSending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <Send className="w-4 h-4 text-white" aria-hidden="true" />
                  {isSending 
                    ? (t("contacto.btnSubmitting") || "Enviando y agendando...") 
                    : (t("contacto.btnSubmit") || "Enviar y agendar diagnóstico")}
                </button>

                {/* Nota de Privacidad */}
                <p className="font-body-md text-[11px] sm:text-xs text-gris-texto/80 text-center mt-2 leading-relaxed">
                  {t("contacto.privacyNote") || "Tus datos se usan únicamente para contactarte sobre tu proyecto."}
                </p>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
