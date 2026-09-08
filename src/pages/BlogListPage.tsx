import React, { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Clock, Tag, User, Search } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blogPosts";
import Contacto from "../components/Contacto";

export default function BlogListPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const pageTitle = isEs
      ? "Blog de Arquitectura, Ingeniería y Construcción | UNO Arquitectos"
      : "Architecture, Engineering & Construction Journal | UNO Arquitectos";

    const pageDesc = isEs
      ? "Artículos técnicos, guías de construcción sobre suelo kárstico, análisis de materiales autóctonos como el Chukum y estrategias de inversión inmobiliaria en la Riviera Maya."
      : "Technical articles, karstic soil engineering guides, Chukum plaster materiality studies, and real estate investment insights in the Riviera Maya.";

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [language, isEs]);

  const categories = [
    { id: "all", label: isEs ? "Todos los Artículos" : "All Articles" },
    { id: "ingenieria", label: isEs ? "Ingeniería Geotécnica" : "Geotechnical Engineering" },
    { id: "materiales", label: isEs ? "Materiales Nobles" : "Noble Materials" },
    { id: "inversion", label: isEs ? "Inversión & Gestión" : "Investment & Management" }
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const titleText = post.title[language] || post.title.es;
    const excerptText = post.excerpt[language] || post.excerpt.es;
    const matchesSearch = 
      titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerptText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getArticleUrl = (slug: string) => {
    return language === "es" ? `/blog/${slug}` : `/${language}/blog/${slug}`;
  };

  const navigateToPost = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    const targetUrl = getArticleUrl(slug);
    window.history.pushState({}, "", targetUrl);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen w-full bg-background text-gris-texto font-sans texture-overlay overflow-x-hidden pt-20 md:pt-24">
      {/* BREADCRUMB */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-4 text-xs font-label-caps text-gris-texto/70 flex items-center gap-2">
        <a href={language === "es" ? "/" : `/${language}/`} className="hover:text-teal-uno transition-colors">
          {isEs ? "Inicio" : "Home"}
        </a>
        <span>/</span>
        <span className="text-teal-uno font-semibold">
          {isEs ? "Blog & Journal Arquitectónico" : "Architecture Journal"}
        </span>
      </div>

      {/* HEADER SECTION */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-caps text-xs text-arena-calida uppercase tracking-widest block mb-3 font-semibold">
            {isEs ? "Criterio Técnico & Reflexión Material" : "Technical Insights & Material Exploration"}
          </span>
          <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl text-teal-uno uppercase leading-tight font-semibold mb-5">
            {isEs ? "JOURNAL DE ARQUITECTURA E INGENIERÍA" : "ARCHITECTURE & ENGINEERING JOURNAL"}
          </h1>
          <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed max-w-2xl mx-auto">
            {isEs
              ? "Guías técnicas, análisis constructivos en suelo kárstico y reflexiones sobre arquitectura contemporánea tropical en la Riviera Maya."
              : "Technical guides, karstic soil engineering research, and insights into tropical contemporary architecture across the Riviera Maya."}
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-arena-calida absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isEs ? "Buscar por tema, material o término técnico..." : "Search by topic, material, or keyword..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-arena-calida/30 rounded-full py-3 pl-11 pr-5 text-xs sm:text-sm font-body-md text-gris-texto focus:outline-none focus:border-teal-uno transition-colors shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="py-6 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20 bg-surface-container-low/60">
        <div className="max-w-container-max mx-auto flex flex-wrap gap-2 sm:gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-teal-uno text-white font-semibold shadow-sm"
                  : "bg-white/80 border border-arena-calida/30 text-gris-texto hover:border-teal-uno hover:text-teal-uno"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-headline-md text-lg text-gris-texto mb-4">
                {isEs ? "No se encontraron artículos con ese criterio." : "No articles found matching your criteria."}
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="font-label-caps text-xs uppercase tracking-wider text-teal-uno hover:underline cursor-pointer"
              >
                {isEs ? "Ver todos los artículos" : "View all articles"}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {filteredPosts.map((post) => {
                const title = post.title[language] || post.title.es;
                const excerpt = post.excerpt[language] || post.excerpt.es;
                const catLabel = post.categoryLabel[language] || post.categoryLabel.es;

                return (
                  <article
                    key={post.slug}
                    className="bg-surface-container-low rounded-2xl overflow-hidden border border-arena-calida/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
                  >
                    <div>
                      <a
                        href={getArticleUrl(post.slug)}
                        onClick={(e) => navigateToPost(e, post.slug)}
                        className="block relative aspect-[16/10] overflow-hidden cursor-pointer"
                      >
                        <img
                          src={post.coverImage}
                          alt={title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label-caps uppercase font-semibold text-teal-uno shadow-xs">
                          {catLabel}
                        </span>
                      </a>

                      <div className="p-6 sm:p-7">
                        <div className="flex items-center gap-4 text-[11px] font-label-caps text-arena-calida uppercase mb-3 font-medium">
                          <span>{post.publishDate}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>

                        <h2 className="font-headline-md text-lg sm:text-xl font-semibold text-teal-uno mb-3 leading-snug group-hover:text-arena-calida transition-colors">
                          <a href={getArticleUrl(post.slug)} onClick={(e) => navigateToPost(e, post.slug)}>
                            {title}
                          </a>
                        </h2>

                        <p className="font-body-md text-xs sm:text-sm text-gris-texto leading-relaxed line-clamp-3 mb-6">
                          {excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-arena-calida/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover border border-teal-uno/30"
                        />
                        <span className="font-label-caps text-[11px] text-gris-texto font-medium">
                          {post.author.name}
                        </span>
                      </div>

                      <a
                        href={getArticleUrl(post.slug)}
                        onClick={(e) => navigateToPost(e, post.slug)}
                        className="inline-flex items-center gap-1 font-label-caps text-xs text-teal-uno uppercase tracking-wider font-semibold hover:text-arena-calida transition-colors"
                      >
                        {isEs ? "Leer" : "Read"} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER CONTACT CTA */}
      <Contacto />
    </div>
  );
}
