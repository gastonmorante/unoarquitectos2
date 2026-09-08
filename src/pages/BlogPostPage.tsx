import React, { useEffect } from "react";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Tag, CheckCircle2, User, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blogPosts";
import Contacto from "../components/Contacto";

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const { language } = useLanguage();
  const isEs = language === "es";

  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  const postContent = post.content[language] || post.content.es;
  const title = post.title[language] || post.title.es;
  const excerpt = post.excerpt[language] || post.excerpt.es;
  const catLabel = post.categoryLabel[language] || post.categoryLabel.es;

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  useEffect(() => {
    // Dynamic Head Metadata & Schema
    document.title = `${title} | UNO Arquitectos`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", excerpt);

    // Schema.org Article Injection
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "article-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": excerpt,
      "image": `https://unoarquitectos.com${post.coverImage}`,
      "datePublished": post.publishDate,
      "dateModified": post.publishDate,
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "jobTitle": post.author.role
      },
      "publisher": {
        "@type": "Organization",
        "name": "UNO Arquitectos",
        "logo": {
          "@type": "ImageObject",
          "url": "https://unoarquitectos.com/hero-luxury-villa.webp"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://unoarquitectos.com/blog/${post.slug}`
      }
    });
    document.head.appendChild(schemaScript);

    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      const el = document.getElementById("article-schema");
      if (el) el.remove();
    };
  }, [title, excerpt, post]);

  const getBlogListUrl = () => {
    return language === "es" ? "/blog" : `/${language}/blog`;
  };

  const navigateToUrl = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <article className="min-h-screen w-full bg-background text-gris-texto font-sans texture-overlay overflow-x-hidden pt-20 md:pt-24">
      {/* BREADCRUMB */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-4 text-xs font-label-caps text-gris-texto/70 flex items-center gap-2 flex-wrap">
        <a 
          href={language === "es" ? "/" : `/${language}/`} 
          onClick={(e) => navigateToUrl(e, language === "es" ? "/" : `/${language}/`)}
          className="hover:text-teal-uno transition-colors"
        >
          {isEs ? "Inicio" : "Home"}
        </a>
        <span>/</span>
        <a 
          href={getBlogListUrl()} 
          onClick={(e) => navigateToUrl(e, getBlogListUrl())}
          className="hover:text-teal-uno transition-colors"
        >
          {isEs ? "Blog" : "Journal"}
        </a>
        <span>/</span>
        <span className="text-teal-uno font-semibold truncate max-w-xs sm:max-w-md">
          {title}
        </span>
      </div>

      {/* ARTICLE HEADER */}
      <header className="py-8 md:py-14 px-4 sm:px-6 md:px-margin-desktop border-b border-arena-calida/20">
        <div className="max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-teal-uno/10 text-teal-uno border border-teal-uno/30 px-3 py-1 rounded-full text-[11px] font-label-caps uppercase font-semibold">
              {catLabel}
            </span>
            <span className="text-xs font-label-caps text-arena-calida uppercase flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.publishDate}
            </span>
            <span className="text-xs font-label-caps text-arena-calida uppercase flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-teal-uno uppercase leading-tight font-semibold mb-6">
            {title}
          </h1>

          <p className="font-serif-quote text-base sm:text-lg italic text-gris-texto/90 leading-relaxed mb-8 border-l-2 border-arena-calida pl-4">
            {excerpt}
          </p>

          {/* AUTHOR PROFILE STRIP */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-arena-calida/20">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-teal-uno/40"
            />
            <div>
              <p className="font-headline-md text-sm font-semibold text-gris-texto">
                {post.author.name}
              </p>
              <p className="font-body-md text-xs text-gris-texto/70">
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED COVER IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 md:my-12">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[16/9] border border-arena-calida/30">
          <img
            src={post.coverImage}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* ARTICLE BODY CONTENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-left pb-16">
        <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed mb-10 font-normal">
          {postContent.intro}
        </p>

        <div className="space-y-12">
          {postContent.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-headline-md text-xl sm:text-2xl font-semibold text-teal-uno uppercase tracking-wide">
                {section.heading}
              </h2>
              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed">
                  {para}
                </p>
              ))}
              {section.quote && (
                <div className="bg-surface-container-low/90 border-l-4 border-teal-uno p-5 sm:p-6 rounded-r-2xl my-6">
                  <p className="font-serif-quote text-base sm:text-lg italic text-teal-uno leading-relaxed">
                    "{section.quote}"
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CONCLUSION */}
        <div className="mt-12 pt-8 border-t border-arena-calida/30">
          <h3 className="font-label-caps text-xs sm:text-label-caps text-arena-calida uppercase tracking-widest font-semibold mb-3">
            {isEs ? "Conclusión & Criterio Constructivo" : "Conclusion & Architectural Criteria"}
          </h3>
          <p className="font-body-md text-sm sm:text-base text-gris-texto leading-relaxed">
            {postContent.conclusion}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-8 pt-6 border-t border-arena-calida/20 flex flex-wrap items-center gap-2">
          <span className="font-label-caps text-xs text-arena-calida uppercase font-semibold mr-2">Tags:</span>
          {post.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="bg-white border border-arena-calida/40 text-gris-texto px-3 py-1 rounded-full text-xs font-label-caps"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* BACK TO BLOG BUTTON */}
        <div className="mt-12 flex justify-between items-center">
          <a
            href={getBlogListUrl()}
            onClick={(e) => navigateToUrl(e, getBlogListUrl())}
            className="inline-flex items-center gap-2 font-label-caps text-xs sm:text-sm text-teal-uno uppercase tracking-wider font-semibold hover:text-arena-calida transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {isEs ? "Volver a Todos los Artículos" : "Back to All Articles"}
          </a>
        </div>
      </div>

      {/* RELATED POSTS STRIP */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low border-t border-arena-calida/20">
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="font-headline-md text-lg sm:text-xl font-semibold text-teal-uno uppercase mb-8">
              {isEs ? "Artículos Relacionados" : "Related Articles"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => {
                const rTitle = rPost.title[language] || rPost.title.es;
                const rUrl = language === "es" ? `/blog/${rPost.slug}` : `/${language}/blog/${rPost.slug}`;
                return (
                  <a
                    key={rPost.slug}
                    href={rUrl}
                    onClick={(e) => navigateToUrl(e, rUrl)}
                    className="bg-white rounded-xl overflow-hidden border border-arena-calida/30 p-4 sm:p-5 flex gap-4 items-center group shadow-xs hover:shadow-md transition-all"
                  >
                    <img
                      src={rPost.coverImage}
                      alt={rTitle}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <span className="font-label-caps text-[10px] text-teal-uno uppercase font-semibold">
                        {rPost.categoryLabel[language] || rPost.categoryLabel.es}
                      </span>
                      <h4 className="font-headline-md text-xs sm:text-sm font-semibold text-gris-texto group-hover:text-teal-uno transition-colors line-clamp-2 mt-1">
                        {rTitle}
                      </h4>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT FORM */}
      <Contacto />
    </article>
  );
}
