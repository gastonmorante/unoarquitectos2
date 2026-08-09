import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, MessageSquare, ArrowUpRight, HelpCircle, Layers, Building2, Calculator, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { faqsData } from "../data/faqs";

export default function Faqs() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const [selectedCategory, setSelectedCategory] = useState<"general" | "services" | "finance" | "all" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = [
    {
      id: "general",
      title: isEs ? "Estudio & Proyectos" : "Studio & Projects",
      subtitle: isEs ? "Alcance boutique, equipo, ubicación y seguimiento a distancia" : "Boutique scope, team, location, and remote investor tracking",
      icon: Layers,
      count: 8,
    },
    {
      id: "services",
      title: isEs ? "Servicios & Construcción" : "Services & Turnkey",
      subtitle: isEs ? "Servicio llave en mano, etapas de diseño y control de obra" : "Turnkey execution, design phases, and site supervision",
      icon: Building2,
      count: 6,
    },
    {
      id: "finance",
      title: isEs ? "Costos, Sostenibilidad & Proceso" : "Costs & Process",
      subtitle: isEs ? "Criterio de costos, sostenibilidad bioclimática e inversión" : "Budgeting criteria, bioclimatics, and investment security",
      icon: Calculator,
      count: 6,
    },
  ];

  const filteredFaqs = useMemo(() => {
    if (!selectedCategory && !searchQuery.trim()) return [];

    return faqsData.filter((item) => {
      const matchesCategory =
        !selectedCategory || selectedCategory === "all" || item.category === selectedCategory;
      const qText = isEs ? item.question.es : item.question.en;
      const aText = isEs ? item.answer.es : item.answer.en;
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        query === "" ||
        qText.toLowerCase().includes(query) ||
        aText.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, isEs]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleOpenAiChat = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-ai-chat"));
    }
  };

  return (
    <section id="faqs" className="py-section-padding px-margin-mobile md:px-margin-desktop bg-background text-gris-texto font-sans border-b border-arena-calida/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arena-calida/20 border border-arena-calida/30 mb-4">
            <HelpCircle className="w-4 h-4 text-teal-uno" />
            <span className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-teal-uno font-semibold">
              {isEs ? "Resolviendo Dudas Con Criterio" : "Clear Answers & Technical Criteria"}
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-teal-uno mb-4 uppercase">
            {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
          <p className="font-body-md text-gris-texto leading-relaxed">
            {isEs
              ? "Seleccione una categoría de consulta para desplegar las preguntas correspondientes y conocer nuestro proceso técnico."
              : "Select a category option below to display the corresponding FAQs and review our technical process."}
          </p>
        </div>

        {/* Category Option Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id as any);
                  setOpenId(null);
                }}
                className={`p-8 text-left border rounded-2xl transition-all duration-500 cursor-pointer relative group overflow-hidden ${
                  isSelected
                    ? "border-teal-uno bg-surface-container-low shadow-ethereal ring-1 ring-teal-uno"
                    : "border-arena-calida/30 bg-white hover:border-arena-calida hover:shadow-ethereal"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-teal-uno text-white"
                        : "bg-surface-container-low text-teal-uno group-hover:bg-teal-uno group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-teal-uno" />}
                </div>
                <h3 className="font-headline-md text-lg text-teal-uno mb-2 uppercase transition-colors">
                  {cat.title}
                </h3>
                <p className="font-body-md text-xs text-gris-texto leading-relaxed mb-5">
                  {cat.subtitle}
                </p>
                <span
                  className={`font-label-caps text-[11px] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 ${
                    isSelected ? "text-teal-uno font-semibold" : "text-zinc-400 group-hover:text-teal-uno"
                  }`}
                >
                  {isSelected
                    ? isEs ? "Categoría Activa" : "Active Category"
                    : isEs ? "Desplegar Preguntas →" : "View Questions →"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (!selectedCategory && e.target.value.trim()) {
                  setSelectedCategory("all");
                }
              }}
              placeholder={
                isEs
                  ? "Buscar pregunta por palabra clave (ej. llave en mano, Tulum, costos)..."
                  : "Search questions by keyword (e.g. turnkey, permits, costs)..."
              }
              className="w-full bg-surface-container-low border border-arena-calida/30 focus:border-teal-uno focus:bg-white rounded-full pl-12 pr-6 py-3.5 text-xs text-gris-texto placeholder:text-zinc-400 focus:outline-none transition-all font-body-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 font-label-caps text-xs text-zinc-400 hover:text-teal-uno"
              >
                {isEs ? "Limpiar" : "Clear"}
              </button>
            )}
          </div>

          {selectedCategory && (
            <div className="flex justify-center items-center gap-3 text-xs text-zinc-500 font-label-caps">
              <span>
                {isEs ? "Mostrando preguntas de:" : "Showing questions for:"}{" "}
                <strong className="text-teal-uno uppercase tracking-wider">
                  {selectedCategory === "all"
                    ? isEs ? "Todas las Categorías" : "All Categories"
                    : categories.find((c) => c.id === selectedCategory)?.title}
                </strong>
              </span>
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-teal-uno font-semibold hover:underline cursor-pointer"
              >
                {isEs ? "(Ver Todas)" : "(View All)"}
              </button>
            </div>
          )}
        </div>

        {/* FAQ Accordion List */}
        <AnimatePresence mode="wait">
          {selectedCategory ? (
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-4"
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openId === faq.id;
                  const questionText = isEs ? faq.question.es : faq.question.en;
                  const answerText = isEs ? faq.answer.es : faq.answer.en;

                  return (
                    <div
                      key={faq.id}
                      className={`border transition-all duration-300 rounded-xl overflow-hidden ${
                        isOpen
                          ? "border-teal-uno bg-surface-container-low/60 shadow-ethereal"
                          : "border-arena-calida/20 bg-white hover:border-arena-calida/50"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-headline-md text-base text-teal-uno group-hover:text-arena-calida transition-colors pr-4 uppercase">
                          <span className="text-arena-calida mr-3 font-mono text-xs">
                            {String(index + 1).padStart(2, "0")}.
                          </span>
                          {questionText}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-zinc-400 group-hover:text-teal-uno flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 font-body-md text-xs md:text-sm text-gris-texto leading-relaxed border-t border-arena-calida/20 whitespace-pre-line">
                              {answerText}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-white border border-dashed border-arena-calida/30 rounded-2xl">
                  <p className="font-body-md text-xs text-gris-texto mb-2">
                    {isEs
                      ? "No se encontraron preguntas que coincidan con tu búsqueda."
                      : "No questions found matching your search term."}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="font-label-caps text-xs text-teal-uno hover:underline cursor-pointer"
                  >
                    {isEs ? "Ver todas las preguntas" : "View all questions"}
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 px-6 bg-surface-container-low border border-dashed border-arena-calida/30 rounded-2xl"
            >
              <HelpCircle className="w-8 h-8 text-teal-uno mx-auto mb-3 opacity-60" />
              <h4 className="font-headline-md text-sm text-teal-uno mb-1 uppercase">
                {isEs ? "Seleccione una categoría arriba para ver las preguntas" : "Select a category above to view questions"}
              </h4>
              <p className="font-body-md text-xs text-gris-texto">
                {isEs
                  ? "Haga clic en cualquiera de las 3 opciones principales para desplegar las respuestas oficiales del estudio."
                  : "Click any of the 3 primary options above to reveal our official responses."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stich Organic Conversion Banner */}
        <div className="mt-20 bg-surface-container-low text-teal-uno text-center relative overflow-hidden texture-overlay rounded-3xl p-10 md:p-16 border border-arena-calida/30 shadow-ethereal">
          {/* Abstract organic background hints */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[800px] border border-arena-calida rounded-full transform -translate-x-1/4 scale-y-75 blur-sm"></div>
            <div className="w-[1000px] h-[1000px] border border-teal-uno rounded-full absolute transform translate-x-1/4 scale-x-75 blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto bg-background/85 backdrop-blur-lg p-10 md:p-14 rounded-3xl shadow-ethereal border border-arena-calida/20">
            <h2 className="font-serif-quote text-serif-quote italic text-gris-texto mb-8 leading-relaxed text-xl md:text-2xl">
              "Espacios que abrazan el entorno, materiales que narran historias concretas bajo la luz."
            </h2>
            <h3 className="font-headline-xl text-headline-xl text-teal-uno mb-10 uppercase text-2xl md:text-3xl">
              {isEs ? "INICIEMOS UN VIAJE ESPACIAL" : "LET'S CRAFT YOUR SPACE"}
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleOpenAiChat}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-teal-uno text-white font-label-caps text-label-caps uppercase tracking-widest hover:bg-arena-calida transition-colors duration-500 rounded-full shadow-ethereal cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                {isEs ? "Manifestar Idea" : "Consult AI"}
              </button>
              
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-teal-uno text-teal-uno font-label-caps text-label-caps uppercase tracking-widest hover:bg-teal-uno hover:text-white transition-all duration-500 rounded-full cursor-pointer"
              >
                {isEs ? "Cita Técnica" : "Technical Meeting"}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
