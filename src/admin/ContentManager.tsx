import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Building2, User, BarChart3, HelpCircle, Phone, Plus, Trash2 } from "lucide-react";
import { useSiteContent } from "../context/ContentContext";
import { FAQItem } from "../types/content";

export default function ContentManager() {
  const { content, updateContent } = useSiteContent();
  const [activeSubTab, setActiveSubTab] = useState<"hero" | "filosofia" | "metrics" | "faqs" | "contact">("hero");
  const [saveToast, setSaveToast] = useState(false);

  const triggerToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleAddFaq = () => {
    const newFaq: FAQItem = {
      id: `faq-${Date.now()}`,
      category: "general",
      question: {
        es: "Nueva pregunta técnica o institucional",
        en: "New technical or institutional question"
      },
      answer: {
        es: "Respuesta detallada con información de UNO Arquitectos.",
        en: "Detailed answer with information regarding UNO Arquitectos."
      }
    };

    updateContent((prev) => ({
      ...prev,
      faqs: [...prev.faqs, newFaq]
    }));
    triggerToast();
  };

  const handleRemoveFaq = (id: string) => {
    updateContent((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((f) => f.id !== id)
    }));
    triggerToast();
  };

  return (
    <div className="space-y-6 text-left font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {saveToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 right-6 z-50 bg-teal-uno text-white px-4 py-2.5 rounded-xs shadow-lg text-xs font-label-caps uppercase tracking-wider flex items-center gap-2"
          >
            <Check className="w-4 h-4" /> Texto Actualizado
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gris-piedra pb-3">
        <button
          onClick={() => setActiveSubTab("hero")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "hero" ? "bg-teal-uno text-white font-semibold" : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <Building2 className="w-3.5 h-3.5" /> Hero & Portada
        </button>

        <button
          onClick={() => setActiveSubTab("filosofia")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "filosofia" ? "bg-teal-uno text-white font-semibold" : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <User className="w-3.5 h-3.5" /> Filosofía & Arq. Cereceda
        </button>

        <button
          onClick={() => setActiveSubTab("metrics")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "metrics" ? "bg-teal-uno text-white font-semibold" : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" /> Métricas & Google Reviews
        </button>

        <button
          onClick={() => setActiveSubTab("faqs")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "faqs" ? "bg-teal-uno text-white font-semibold" : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" /> Preguntas Frecuentes ({content.faqs.length})
        </button>

        <button
          onClick={() => setActiveSubTab("contact")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "contact" ? "bg-teal-uno text-white font-semibold" : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <Phone className="w-3.5 h-3.5" /> Datos de Contacto & NAP
        </button>
      </div>

      {/* 1. HERO SECTION EDITOR */}
      {activeSubTab === "hero" && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Textos Principales de Portada (Hero)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Tagline Superior (Español)</label>
              <input
                type="text"
                value={content.hero.taglineEs}
                onChange={(e) => updateContent({ hero: { ...content.hero, taglineEs: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Tagline Superior (Inglés)</label>
              <input
                type="text"
                value={content.hero.taglineEn}
                onChange={(e) => updateContent({ hero: { ...content.hero, taglineEn: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Título Monumental (Español)</label>
              <textarea
                rows={2}
                value={content.hero.headingEs}
                onChange={(e) => updateContent({ hero: { ...content.hero, headingEs: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Título Monumental (Inglés)</label>
              <textarea
                rows={2}
                value={content.hero.headingEn}
                onChange={(e) => updateContent({ hero: { ...content.hero, headingEn: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Subtítulo / Misión (Español)</label>
              <textarea
                rows={3}
                value={content.hero.subheadingEs}
                onChange={(e) => updateContent({ hero: { ...content.hero, subheadingEs: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Subtítulo / Misión (Inglés)</label>
              <textarea
                rows={3}
                value={content.hero.subheadingEn}
                onChange={(e) => updateContent({ hero: { ...content.hero, subheadingEn: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Botón de Acción CTA (Español)</label>
              <input
                type="text"
                value={content.hero.ctaTextEs}
                onChange={(e) => updateContent({ hero: { ...content.hero, ctaTextEs: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Botón de Acción CTA (Inglés)</label>
              <input
                type="text"
                value={content.hero.ctaTextEn}
                onChange={(e) => updateContent({ hero: { ...content.hero, ctaTextEn: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. FILOSOFIA & DIRECTOR BIO */}
      {activeSubTab === "filosofia" && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Filosofía de Estudio & Trayectoria Directiva
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Cita Rectora (Español)</label>
              <textarea
                rows={3}
                value={content.filosofia.quoteEs}
                onChange={(e) => updateContent({ filosofia: { ...content.filosofia, quoteEs: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Cita Rectora (Inglés)</label>
              <textarea
                rows={3}
                value={content.filosofia.quoteEn}
                onChange={(e) => updateContent({ filosofia: { ...content.filosofia, quoteEn: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Nombre del Director</label>
              <input
                type="text"
                value={content.filosofia.author}
                onChange={(e) => updateContent({ filosofia: { ...content.filosofia, author: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Cargo Directivo</label>
              <input
                type="text"
                value={content.filosofia.authorRole}
                onChange={(e) => updateContent({ filosofia: { ...content.filosofia, authorRole: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Biografía E-E-A-T (Español)</label>
              <textarea
                rows={4}
                value={content.filosofia.directorBioEs}
                onChange={(e) => updateContent({ filosofia: { ...content.filosofia, directorBioEs: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Biografía E-E-A-T (Inglés)</label>
              <textarea
                rows={4}
                value={content.filosofia.directorBioEn}
                onChange={(e) => updateContent({ filosofia: { ...content.filosofia, directorBioEn: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra p-2.5 rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. METRICS & GOOGLE REVIEWS */}
      {activeSubTab === "metrics" && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Métricas de Confianza & Validación Social
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Calificación Google Reviews</label>
              <input
                type="text"
                value={content.metrics.ratingValue}
                onChange={(e) => updateContent({ metrics: { ...content.metrics, ratingValue: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Número de Reseñas Verificadas</label>
              <input
                type="text"
                value={content.metrics.reviewCount}
                onChange={(e) => updateContent({ metrics: { ...content.metrics, reviewCount: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Enlace a Google Maps Profile</label>
              <input
                type="text"
                value={content.metrics.googleMapsUrl}
                onChange={(e) => updateContent({ metrics: { ...content.metrics, googleMapsUrl: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <h4 className="font-label-caps text-[11px] uppercase tracking-wider text-zinc-600 font-semibold pt-2">
            Indicadores Clave
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.metrics.items.map((metric, idx) => (
              <div key={metric.id} className="p-3 bg-gris-piedra/15 border border-gris-piedra rounded-xs space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="font-label-caps text-[10px] text-zinc-400">#{idx + 1}</span>
                  <input
                    type="text"
                    value={metric.value}
                    onChange={(e) => {
                      const updated = content.metrics.items.map((m, i) => (i === idx ? { ...m, value: e.target.value } : m));
                      updateContent({ metrics: { ...content.metrics, items: updated } });
                    }}
                    className="w-20 bg-white border border-gris-piedra px-2 py-1 text-xs font-bold text-teal-uno rounded-xs focus:border-teal-uno focus:outline-none"
                  />
                  <input
                    type="text"
                    value={metric.labelEs}
                    onChange={(e) => {
                      const updated = content.metrics.items.map((m, i) => (i === idx ? { ...m, labelEs: e.target.value } : m));
                      updateContent({ metrics: { ...content.metrics, items: updated } });
                    }}
                    placeholder="Etiqueta en español"
                    className="flex-1 bg-white border border-gris-piedra px-2 py-1 text-xs text-gris-texto rounded-xs focus:border-teal-uno focus:outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. FAQS EDITOR */}
      {activeSubTab === "faqs" && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
              Preguntas Frecuentes ({content.faqs.length})
            </h3>
            <button
              onClick={handleAddFaq}
              className="px-3.5 py-1.5 bg-teal-uno text-white rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer hover:opacity-90 transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> Añadir Pregunta
            </button>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={faq.id} className="p-4 bg-gris-piedra/10 border border-gris-piedra rounded-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-teal-uno font-semibold uppercase">
                    Pregunta #{idx + 1} ({faq.category})
                  </span>
                  <button
                    onClick={() => handleRemoveFaq(faq.id)}
                    className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                    title="Eliminar pregunta"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-0.5">Pregunta (Español)</label>
                    <input
                      type="text"
                      value={faq.question.es}
                      onChange={(e) => {
                        const updated = content.faqs.map((f) =>
                          f.id === faq.id ? { ...f, question: { ...f.question, es: e.target.value } } : f
                        );
                        updateContent({ faqs: updated });
                      }}
                      className="w-full bg-white border border-gris-piedra px-2.5 py-1.5 text-xs rounded-xs focus:border-teal-uno focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-0.5">Pregunta (Inglés)</label>
                    <input
                      type="text"
                      value={faq.question.en}
                      onChange={(e) => {
                        const updated = content.faqs.map((f) =>
                          f.id === faq.id ? { ...f, question: { ...f.question, en: e.target.value } } : f
                        );
                        updateContent({ faqs: updated });
                      }}
                      className="w-full bg-white border border-gris-piedra px-2.5 py-1.5 text-xs rounded-xs focus:border-teal-uno focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-0.5">Respuesta (Español)</label>
                    <textarea
                      rows={3}
                      value={faq.answer.es}
                      onChange={(e) => {
                        const updated = content.faqs.map((f) =>
                          f.id === faq.id ? { ...f, answer: { ...f.answer, es: e.target.value } } : f
                        );
                        updateContent({ faqs: updated });
                      }}
                      className="w-full bg-white border border-gris-piedra p-2 text-xs rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-0.5">Respuesta (Inglés)</label>
                    <textarea
                      rows={3}
                      value={faq.answer.en}
                      onChange={(e) => {
                        const updated = content.faqs.map((f) =>
                          f.id === faq.id ? { ...f, answer: { ...f.answer, en: e.target.value } } : f
                        );
                        updateContent({ faqs: updated });
                      }}
                      className="w-full bg-white border border-gris-piedra p-2 text-xs rounded-xs focus:border-teal-uno focus:outline-none leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. CONTACT & NAP DATA */}
      {activeSubTab === "contact" && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Datos NAP y Ubicaciones Oficiales
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Título Sede Principal</label>
              <input
                type="text"
                value={content.contact.officePlayaTitle}
                onChange={(e) => updateContent({ contact: { ...content.contact, officePlayaTitle: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Dirección Sede Playa del Carmen</label>
              <input
                type="text"
                value={content.contact.officePlayaAddr}
                onChange={(e) => updateContent({ contact: { ...content.contact, officePlayaAddr: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Título Taller & Bodega</label>
              <input
                type="text"
                value={content.contact.tallerTulumTitle}
                onChange={(e) => updateContent({ contact: { ...content.contact, tallerTulumTitle: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Dirección Taller Tulum</label>
              <input
                type="text"
                value={content.contact.tallerTulumAddr}
                onChange={(e) => updateContent({ contact: { ...content.contact, tallerTulumAddr: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Teléfono Directo</label>
              <input
                type="text"
                value={content.contact.phone}
                onChange={(e) => updateContent({ contact: { ...content.contact, phone: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">WhatsApp Corporativo</label>
              <input
                type="text"
                value={content.contact.whatsapp}
                onChange={(e) => updateContent({ contact: { ...content.contact, whatsapp: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Correo Electrónico</label>
              <input
                type="email"
                value={content.contact.email}
                onChange={(e) => updateContent({ contact: { ...content.contact, email: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Horario de Atención (Español)</label>
              <input
                type="text"
                value={content.contact.workHoursEs}
                onChange={(e) => updateContent({ contact: { ...content.contact, workHoursEs: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Horario de Atención (Inglés)</label>
              <input
                type="text"
                value={content.contact.workHoursEn}
                onChange={(e) => updateContent({ contact: { ...content.contact, workHoursEn: e.target.value } })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
