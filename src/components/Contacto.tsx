import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, ExternalLink, ShieldCheck, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSiteContent } from "../context/ContentContext";
import Logo from "./Logo";

export default function Contacto() {
  const { t, language } = useLanguage();
  const { content } = useSiteContent();
  const isEs = language === "es";
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallbackBanner, setShowFallbackBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallbackBanner(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = (content?.contact?.whatsapp || "5219842108420").replace(/[^\d]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isEs
      ? "Hola UNO Arquitectos, me interesa recibir información y asesoría técnica para un proyecto de arquitectura y construcción en la Riviera Maya."
      : language === "it"
      ? "Buongiorno UNO Arquitectos, desidero ricevere informazioni e consulenza tecnica per un progetto nella Riviera Maya."
      : language === "fr"
      ? "Bonjour UNO Arquitectos, je souhaite recevoir des informations et des conseils techniques pour un projet dans la Riviera Maya."
      : "Hello UNO Arquitectos, I am interested in receiving information and technical advice for an architecture and construction project in the Riviera Maya."
  )}`;

  const mondayEmbedUrl = "https://forms.monday.com/forms/embed/9a8cac1e1e21d26e435ae874c1e67e6c?r=use1";
  const mondayDirectUrl = "https://forms.monday.com/forms/9a8cac1e1e21d26e435ae874c1e67e6c?r=use1";

  return (
    <section id="contacto" className="py-section-padding px-4 sm:px-6 md:px-margin-desktop bg-background text-gris-texto font-sans relative border-t border-arena-calida/20 texture-overlay overflow-hidden cv-auto">
      <div className="max-w-container-max mx-auto">
        
        {/* Top Tagline */}
        <div className="mb-10 sm:mb-16 text-center">
          <span className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-[0.25em] sm:tracking-[0.35em] block font-semibold">
            {t("contacto.conversionTagline") || "Diseño con sentido. Construcción con criterio."}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* INFO COLUMN (LEFT: 5 Cols) */}
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
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-uno hover:underline font-semibold ml-1 text-[11px] uppercase tracking-wider font-label-caps"
                  >
                    • WhatsApp Directo
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

              {/* Direct WhatsApp Callout Pill in Left Column */}
              <div className="p-4 rounded-2xl bg-teal-uno/5 border border-teal-uno/20 flex items-center justify-between gap-3">
                <div className="text-left">
                  <p className="font-label-caps text-[11px] uppercase tracking-wider text-teal-uno font-semibold">
                    {isEs ? "¿Prefieres asesoría inmediata?" : "Need immediate assistance?"}
                  </p>
                  <p className="font-body-md text-xs text-gris-texto/80 mt-0.5">
                    {isEs ? "Chatea con un arquitecto por WhatsApp" : "Chat directly with an architect on WhatsApp"}
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-label-caps text-[11px] uppercase tracking-wider font-semibold shadow-xs transition-all flex-shrink-0"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* CONTACT CARD CONTAINER (RIGHT: 7 Cols) */}
          <div className="lg:col-span-7 bg-surface-container-low/80 border border-arena-calida/30 p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl relative text-left shadow-ethereal overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute -right-6 -top-6 opacity-[0.03] pointer-events-none select-none">
              <Logo showText={false} iconSize={180} />
            </div>

            {/* Header info */}
            <div className="mb-5 sm:mb-6 relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-arena-calida/25 pb-4 sm:pb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-uno/10 border border-teal-uno/25 text-teal-uno text-[10px] sm:text-[11px] font-label-caps uppercase tracking-wider font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-teal-uno animate-pulse" />
                  {isEs ? "Conectado con Monday.com CRM" : "Connected to Monday.com CRM"}
                </div>
                <h3 className="font-headline-md text-lg sm:text-xl font-semibold text-teal-uno uppercase tracking-wide">
                  {t("contacto.formHeading") || "Cuéntanos sobre tu proyecto"}
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-gris-texto opacity-90 mt-0.5">
                  {t("contacto.formSubheading") || "2 minutos para que podamos darte una respuesta útil — no una genérica."}
                </p>
              </div>

              {/* Direct link button */}
              <a
                href={mondayDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-label-caps text-teal-uno hover:text-arena-calida uppercase tracking-wider font-semibold self-start sm:self-center transition-colors"
                title={isEs ? "Abrir en nueva pestaña" : "Open in new tab"}
              >
                <span>{isEs ? "Pantalla completa" : "Fullscreen"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* iFrame Container */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-xs border border-arena-calida/20 min-h-[920px] sm:min-h-[1060px]">
              
              {/* Subtle Loading Placeholder while Monday iFrame loads */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xs z-10 p-6 text-center">
                  {!showFallbackBanner ? (
                    <>
                      <div className="w-9 h-9 border-3 border-teal-uno/25 border-t-teal-uno rounded-full animate-spin mb-3" />
                      <p className="font-label-caps text-xs uppercase tracking-wider text-teal-uno font-semibold">
                        {isEs ? "Cargando formulario oficial..." : "Loading official form..."}
                      </p>
                      <p className="font-body-md text-[11px] text-gris-texto/70 mt-1 max-w-xs">
                        {isEs ? "Sincronizando con Monday.com de UNO Arquitectos" : "Syncing with UNO Arquitectos Monday.com"}
                      </p>
                    </>
                  ) : (
                    <div className="max-w-md mx-auto p-4 flex flex-col items-center animate-fadeIn">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-headline-md text-base font-semibold text-teal-uno uppercase mb-2">
                        {isEs ? "¿Tu navegador bloquea el formulario?" : "Is your browser blocking the form?"}
                      </h4>
                      <p className="font-body-md text-xs text-gris-texto leading-relaxed mb-5">
                        {isEs 
                          ? "Algunos navegadores o extensiones restringen marcos incrustados. Puedes abrirlo directamente en Monday.com o escribirnos por WhatsApp."
                          : "Some browsers restrict embedded frames. You can open it directly in Monday.com or chat with us on WhatsApp."}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2.5 w-full justify-center">
                        <a
                          href={mondayDirectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-teal-uno hover:bg-arena-calida text-white font-label-caps text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                        >
                          <span>{isEs ? "Abrir en Monday.com" : "Open in Monday.com"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-label-caps text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                        >
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <iframe
                src={mondayEmbedUrl}
                className={`w-full min-h-[920px] sm:min-h-[1060px] border-0 transition-opacity duration-300 ${
                  iframeLoaded ? "opacity-100" : "opacity-0"
                }`}
                title="Formulario Oficial de Diagnóstico - UNO Arquitectos | Monday.com"
                allow="clipboard-write; fullscreen"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>

            {/* Footer Reassurance & Direct WhatsApp Fallback */}
            <div className="mt-4 sm:mt-5 pt-4 border-t border-arena-calida/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-10">
              <div className="flex items-center gap-2 text-gris-texto/80 font-body-md text-[11px] sm:text-xs">
                <ShieldCheck className="w-4 h-4 text-teal-uno flex-shrink-0" />
                <span>
                  {t("contacto.privacyNote") || "Tus datos se usan únicamente para contactarte sobre tu proyecto."}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-label-caps text-[11px] uppercase tracking-wider text-teal-uno hover:text-arena-calida font-semibold transition-colors"
              >
                <span>{isEs ? "¿Dudas urgentes? Escríbenos por WhatsApp" : "Urgent questions? WhatsApp us"}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
