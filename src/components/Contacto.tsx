import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./Logo";

export default function Contacto() {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          projectType: "Proyecto Residencial",
          message: msg,
          budget: "A medida"
        })
      });

      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: msg,
          source: "Formulario de Contacto"
        })
      });

      if (typeof window !== "undefined") {
        const win = window as any;
        if (win.gtag) {
          win.gtag('event', 'generate_lead', { event_category: 'contact', event_label: 'Formulario de Contacto', value: 1 });
        }
        if (win.fbq) {
          win.fbq('track', 'Lead', { content_name: 'Formulario de Contacto', status: 'success' });
        }
      }

      const welcomeText = language === "es"
        ? `Hola UNO Arquitectos, me he registrado en su formulario de contacto. Mi nombre es ${name}, mi correo es ${email} y mi teléfono es ${phone}. Me interesa atención técnica para mi proyecto.`
        : `Hello UNO Arquitectos, I filled out your contact form. My name is ${name}, my email is ${email} and my phone is ${phone}. I am interested in technical consultation for my project.`;
      
      const whatsappUrl = `https://wa.me/5219841234567?text=${encodeURIComponent(welcomeText)}`;
      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMsg("");
    } catch (err) {
      console.error("Error submitting contact form lead:", err);
      setSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="py-section-padding px-margin-mobile md:px-margin-desktop bg-background text-gris-texto font-sans relative border-t border-arena-calida/20 texture-overlay">
      <div className="max-w-container-max mx-auto">
        
        {/* Top Tagline */}
        <div className="mb-16 text-center">
          <span className="font-label-caps text-label-caps text-arena-calida uppercase tracking-[0.35em] block">
            {t("contacto.conversionTagline") || "Diseño con sentido. Construcción con criterio."}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* INFO COLUMN */}
          <div className="lg:col-span-5 text-left">
            <Logo showText={false} iconSize={40} className="mb-6 opacity-90 text-teal-uno" />
            <span className="font-label-caps text-label-caps text-teal-uno uppercase tracking-[0.3em] font-semibold block mb-3">
              {t("contacto.tagline") || "Contacto Directo"}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-teal-uno uppercase mb-6 leading-tight">
              {t("contacto.heading") || "INICIEMOS LA CONVERSACIÓN"}
            </h2>
            <p className="font-body-md text-gris-texto text-sm leading-relaxed mb-10 max-w-md">
              {t("contacto.desc")}
            </p>

            <div className="space-y-8">
              
              {/* Off 1 - Tulum */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-teal-uno flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-label-caps text-xs uppercase tracking-wider text-teal-uno font-semibold">{t("contacto.showroomTulum")}</h3>
                  <p className="font-body-md text-xs text-gris-texto mt-1 leading-relaxed">{t("contacto.showroomTulumAddr")}</p>
                </div>
              </div>

              {/* Off 2 - CDMX */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-label-caps text-xs uppercase tracking-wider text-teal-uno font-semibold">{t("contacto.cdmxOffice")}</h3>
                  <p className="font-body-md text-xs text-gris-texto mt-1 leading-relaxed">{t("contacto.cdmxOfficeAddr")}</p>
                </div>
              </div>

              {/* Tel & Mail */}
              <div className="pt-8 border-t border-arena-calida/30 space-y-4 font-body-md text-xs text-gris-texto">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-uno" />
                  <span>+52 (984) 123 4567 • +52 (55) 9876 5432</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-uno" />
                  <a href="mailto:hola@unoarquitectos.com" className="hover:text-teal-uno transition-colors">
                    hola@unoarquitectos.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span>{t("contacto.workHours")}</span>
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7 bg-surface-container-low/70 border border-arena-calida/30 p-8 md:p-14 rounded-3xl relative text-left shadow-ethereal overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute -right-6 -top-6 opacity-[0.04] pointer-events-none select-none">
              <Logo showText={false} iconSize={200} />
            </div>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-teal-uno/10 text-teal-uno flex items-center justify-center mb-6 border border-teal-uno/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-headline-md text-2xl font-semibold text-teal-uno mb-2 uppercase">{t("contacto.successTitle")}</h3>
                <p className="font-body-md text-gris-texto text-sm max-w-sm mx-auto leading-relaxed">
                  {t("contacto.successDesc")}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-label-caps text-xs uppercase tracking-widest text-teal-uno hover:opacity-80 transition-colors cursor-pointer"
                >
                  {t("contacto.successAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-headline-md text-xl font-semibold text-teal-uno mb-2 uppercase">{t("contacto.formHeading")}</h3>
                <p className="font-body-md text-xs text-gris-texto mb-6">{t("contacto.formSubheading")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-caps text-xs uppercase tracking-wider text-teal-uno mb-2 font-semibold" htmlFor="con-name">
                      {t("contacto.fullName")}
                    </label>
                    <input
                      id="con-name"
                      type="text"
                      required
                      placeholder={t("contacto.fullNamePlaceholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-arena-calida/30 rounded-xl py-3.5 px-4 font-body-md text-sm text-gris-texto focus:outline-none focus:border-teal-uno transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-label-caps text-xs uppercase tracking-wider text-teal-uno mb-2 font-semibold" htmlFor="con-tel">
                      {t("contacto.phone")}
                    </label>
                    <input
                      id="con-tel"
                      type="tel"
                      required
                      placeholder={t("contacto.phonePlaceholder")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-arena-calida/30 rounded-xl py-3.5 px-4 font-body-md text-sm text-gris-texto focus:outline-none focus:border-teal-uno transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-caps text-xs uppercase tracking-wider text-teal-uno mb-2 font-semibold" htmlFor="con-email">
                    {t("contacto.email")}
                  </label>
                  <input
                    id="con-email"
                    type="email"
                    required
                    placeholder={t("contacto.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-arena-calida/30 rounded-xl py-3.5 px-4 font-body-md text-sm text-gris-texto focus:outline-none focus:border-teal-uno transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-xs uppercase tracking-wider text-teal-uno mb-2 font-semibold" htmlFor="con-msg">
                    {t("contacto.additionalMsg")}
                  </label>
                  <textarea
                    id="con-msg"
                    rows={4}
                    required
                    placeholder={t("contacto.additionalMsgPlaceholder")}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full bg-white border border-arena-calida/30 rounded-xl p-4 font-body-md text-sm text-gris-texto focus:outline-none focus:border-teal-uno transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-teal-uno hover:bg-arena-calida text-white py-4 font-label-caps text-label-caps uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 rounded-full cursor-pointer shadow-ethereal ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <Send className="w-4 h-4 text-white" />
                  {isSending ? (language === "es" ? "Enviando..." : "Sending...") : t("contacto.btnSubmit")}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
