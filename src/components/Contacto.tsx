import { useState, FormEvent, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, ExternalLink, X } from "lucide-react";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; msg?: string }>({});
  const [toast, setToast] = useState<ToastNotification | null>(null);

  // Auto-dismiss toast after 6 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 6000);
    return () => clearTimeout(timer);
  }, [toast]);

  const validateForm = () => {
    const errs: { name?: string; email?: string; phone?: string; msg?: string } = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMsg = msg.trim();

    if (!trimmedName || trimmedName.length < 2) {
      errs.name = isEs ? "Por favor ingrese su nombre completo." : "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      errs.email = isEs ? "Por favor ingrese un correo electrónico válido." : "Please enter a valid email address.";
    }

    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone || phoneDigits.length < 7) {
      errs.phone = isEs ? "Por favor ingrese un número telefónico válido (mínimo 7 dígitos)." : "Please enter a valid phone number (min 7 digits).";
    }

    if (!trimmedMsg || trimmedMsg.length < 5) {
      errs.msg = isEs ? "Por favor incluya una breve descripción de su proyecto." : "Please provide a brief description of your project.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm()) {
      setToast({
        type: "error",
        title: isEs ? "Datos Incompletos" : "Incomplete Form",
        message: isEs ? "Por favor verifique los campos marcados en rojo antes de enviar." : "Please check the highlighted fields before submitting."
      });
      return;
    }

    setIsSending(true);
    setErrors({});

    // Split Name for CRM Contact Fields
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || name.trim();
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      name: name.trim(),
      firstName,
      lastName,
      email: email.trim(),
      phone: phone.trim(),
      projectType: "Proyecto Residencial / Boutique",
      message: msg.trim(),
      source: "Website UNO Arquitectos",
      language,
      timestamp: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "https://unoarquitectos.com/#contacto",
      tags: ["Website Lead", "Fase IV", `Lang-${language.toUpperCase()}`]
    };

    try {
      // 1. Primary: Post to GoHighLevel (GHL) Webhook
      const ghlPromise = fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch((err) => {
        console.warn("GHL Webhook dispatched with non-blocking status:", err);
      });

      // 2. Secondary Local Endpoint Backups
      const localApiPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});

      const leadsApiPromise = fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});

      // Wait for parallel resolution
      await Promise.allSettled([ghlPromise, localApiPromise, leadsApiPromise]);

      // 3. Trigger Analytics Conversion Events
      if (typeof window !== "undefined") {
        const win = window as any;
        if (win.gtag) {
          win.gtag("event", "generate_lead", {
            event_category: "contact",
            event_label: "Formulario GoHighLevel",
            value: 1
          });
        }
        if (win.fbq) {
          win.fbq("track", "Lead", {
            content_name: "Formulario GoHighLevel",
            status: "success"
          });
        }
      }

      // 4. Show Sleek Brand Toast Feedback
      setToast({
        type: "success",
        title: isEs ? "¡Mensaje Enviado con Éxito!" : "Message Successfully Sent!",
        message: isEs 
          ? "Un director técnico de UNO Arquitectos revisará los detalles y le contactará a la brevedad."
          : "A technical lead at UNO Arquitectos will review your project and get in touch shortly."
      });

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMsg("");
    } catch (err) {
      console.error("Error connecting to GoHighLevel Webhook:", err);
      setToast({
        type: "error",
        title: isEs ? "Error al Enviar" : "Submission Error",
        message: isEs 
          ? "No se pudo conectar con el servidor. Por favor contáctenos directamente por WhatsApp o teléfono."
          : "Could not connect to server. Please reach out directly via WhatsApp or phone."
      });
    } finally {
      setIsSending(false);
    }
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
              aria-label="Cerrar notificación"
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

          {/* CONTACT FORM */}
          <div className="lg:col-span-7 bg-surface-container-low/80 border border-arena-calida/30 p-5 sm:p-8 md:p-12 lg:p-14 rounded-2xl sm:rounded-3xl relative text-left shadow-ethereal overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute -right-6 -top-6 opacity-[0.03] pointer-events-none select-none">
              <Logo showText={false} iconSize={180} />
            </div>

            {submitted ? (
              <div className="py-10 sm:py-12 text-center flex flex-col items-center animate-fadeIn">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-uno/10 text-teal-uno flex items-center justify-center mb-5 sm:mb-6 border border-teal-uno/30">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl font-semibold text-teal-uno mb-2 uppercase">{t("contacto.successTitle")}</h3>
                <p className="font-body-md text-gris-texto text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  {t("contacto.successDesc")}
                </p>
                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/5219842108420?text=Hola%20UNO%20Arquitectos%2C%20acabo%20de%20enviar%20el%20formulario%20y%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20t%C3%A9cnica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-uno text-white font-label-caps text-xs uppercase tracking-wider hover:bg-arena-calida transition-colors font-semibold"
                  >
                    {isEs ? "Abrir WhatsApp Directo" : "Open WhatsApp Directly"}
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-label-caps text-xs uppercase tracking-widest text-gris-texto hover:text-teal-uno transition-colors cursor-pointer py-2.5 px-4"
                  >
                    {t("contacto.successAnother")}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6 relative z-10">
                <h3 className="font-headline-md text-lg sm:text-xl font-semibold text-teal-uno mb-1 sm:mb-2 uppercase">{t("contacto.formHeading")}</h3>
                <p className="font-body-md text-xs text-gris-texto mb-4 sm:mb-6">{t("contacto.formSubheading")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 sm:mb-2 font-semibold" htmlFor="con-name">
                      {t("contacto.fullName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="con-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={t("contacto.fullNamePlaceholder")}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto focus:outline-none transition-colors ${
                        errors.name ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 sm:mb-2 font-semibold" htmlFor="con-tel">
                      {t("contacto.phone")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="con-tel"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder={t("contacto.phonePlaceholder") || "+52 1 984 210 8420"}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto focus:outline-none transition-colors ${
                        errors.phone ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 sm:mb-2 font-semibold" htmlFor="con-email">
                    {t("contacto.email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="con-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={t("contacto.emailPlaceholder")}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full bg-white border rounded-xl py-3 px-3.5 font-body-md text-sm text-gris-texto focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-label-caps text-[11px] sm:text-xs uppercase tracking-wider text-teal-uno mb-1.5 sm:mb-2 font-semibold" htmlFor="con-msg">
                    {t("contacto.additionalMsg")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="con-msg"
                    rows={4}
                    required
                    placeholder={t("contacto.additionalMsgPlaceholder")}
                    value={msg}
                    onChange={(e) => {
                      setMsg(e.target.value);
                      if (errors.msg) setErrors({ ...errors, msg: undefined });
                    }}
                    className={`w-full bg-white border rounded-xl p-3.5 font-body-md text-sm text-gris-texto focus:outline-none transition-colors resize-none ${
                      errors.msg ? "border-red-500 focus:border-red-600" : "border-arena-calida/30 focus:border-teal-uno"
                    }`}
                  ></textarea>
                  {errors.msg && <p className="text-red-500 text-[11px] mt-1">{errors.msg}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-teal-uno hover:bg-arena-calida text-white py-3.5 sm:py-4 font-label-caps text-xs sm:text-label-caps uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-full cursor-pointer shadow-ethereal font-semibold ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <Send className="w-4 h-4 text-white" />
                  {isSending ? (isEs ? "Conectando con GoHighLevel..." : "Submitting to GoHighLevel...") : t("contacto.btnSubmit")}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
