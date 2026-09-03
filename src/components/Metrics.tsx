import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSiteContent } from "../context/ContentContext";

interface MetricCounterProps {
  valueStr: string;
  title: string;
  desc: string;
}

const GoogleGIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const MetricCounter = ({ valueStr, title, desc }: MetricCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayNum, setDisplayNum] = useState(0);

  // Parse prefix, target number and suffix
  const prefixMatch = valueStr.match(/^[^\d]+/);
  const prefix = prefixMatch ? prefixMatch[0] : "";
  const numberMatch = valueStr.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  const suffix = valueStr.substring(prefix.length + (numberMatch ? numberMatch[0].length : 0));

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetNumber, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setDisplayNum(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
    return undefined;
  }, [isInView, targetNumber]);

  return (
    <div
      ref={ref}
      className="bg-white border border-arena-calida/25 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-500 hover:shadow-ethereal hover:border-arena-calida/60 h-full text-left font-sans"
    >
      {/* Brand color subtle hover glow */}
      <div className="absolute inset-0 bg-arena-calida/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-teal-uno mb-3 sm:mb-4 font-sans">
          {prefix}{displayNum}{suffix}
        </div>
        <h3 className="font-label-caps text-xs sm:text-label-caps uppercase text-teal-uno mb-1.5 sm:mb-2 tracking-wider font-semibold">
          {title}
        </h3>
        <p className="font-body-md text-xs text-gris-texto leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="w-8 group-hover:w-full h-[2px] bg-arena-calida transition-all duration-500 mt-4 sm:mt-6 relative z-10"></div>
    </div>
  );
};

export default function Metrics() {
  const { language, t } = useLanguage();
  const { content } = useSiteContent();

  const dynamicItems = content?.metrics?.items && content.metrics.items.length > 0
    ? content.metrics.items.map((m) => ({
        val: m.value,
        title: language === "es" ? m.labelEs : m.labelEn,
        desc: language === "es" ? "Certeza técnica y constructiva con estándares internacionales." : "Technical and constructive certitude with international standards."
      }))
    : [
        {
          val: t("metrics.m1Val") || "20+",
          title: t("metrics.m1Title") || "Años de Trayectoria",
          desc: t("metrics.m1Desc") || "Más de 20 años liderando diseño, alta ingeniería y construcción.",
        },
        {
          val: t("metrics.m2Val") || "15K+",
          title: t("metrics.m2Title") || "m² Proyectados",
          desc: t("metrics.m2Desc") || "Diseñados, calculados y construidos sin sobrecostos.",
        },
        {
          val: t("metrics.m3Val") || "100%",
          title: t("metrics.m3Title") || "Viabilidad Legal & Técnica",
          desc: t("metrics.m3Desc") || "Gestoría ágil de licencias de construcción y permisos ambientales.",
        },
        {
          val: t("metrics.m4Val") || "+70",
          title: t("metrics.m4Title") || "Proyectos Entregados",
          desc: t("metrics.m4Desc") || "Residencias boutique y desarrollos boutique hospitality.",
        },
      ];

  const [liveGoogleData, setLiveGoogleData] = useState<{
    rating: number;
    reviewCount: number;
    placeUrl?: string;
    hasLiveGoogleSync?: boolean;
  } | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("uno_google_reviews_live");
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return null;
  });

  useEffect(() => {
    let isMounted = true;
    fetch("/api/reviews")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("No live reviews endpoint");
      })
      .then((data) => {
        if (isMounted && data && typeof data.rating === "number") {
          const live = {
            rating: data.rating,
            reviewCount: data.reviewCount || 0,
            placeUrl: data.placeUrl,
            hasLiveGoogleSync: data.hasLiveGoogleSync
          };
          setLiveGoogleData(live);
          localStorage.setItem("uno_google_reviews_live", JSON.stringify(live));
        }
      })
      .catch(() => {
        // Keeps graceful CMS / offline fallback
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const rating = liveGoogleData && liveGoogleData.hasLiveGoogleSync
    ? liveGoogleData.rating.toFixed(1)
    : (content?.metrics?.ratingValue !== undefined ? content.metrics.ratingValue : "5.0");

  const reviewCount = liveGoogleData && liveGoogleData.hasLiveGoogleSync
    ? liveGoogleData.reviewCount.toString()
    : (content?.metrics?.reviewCount !== undefined ? content.metrics.reviewCount : "28");

  const numericRating = parseFloat(rating) || 0;
  const numericReviews = parseInt(reviewCount, 10) || 0;
  const hasReviews = numericReviews > 0 && numericRating > 0;

  const mapReviewsUrl = liveGoogleData?.placeUrl || (content?.metrics?.googleMapsUrl?.includes("!9m1!1b1")
    ? content.metrics.googleMapsUrl
    : "https://www.google.com/maps/place/UNO+Arquitectos+Mx/@20.6718486,-87.0504611,17z/data=!4m8!3m7!1s0x8f4e43859b311239:0x1a9cb6da851ff691!8m2!3d20.6718486!4d-87.0504611!9m1!1b1!16s%2Fg%2F11r_t7kdfg");

  return (
    <section id="metricas" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low/50 border-b border-arena-calida/20 font-sans">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dynamicItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <MetricCounter
                valueStr={item.val}
                title={item.title}
                desc={item.desc}
              />
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-arena-calida/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-white/70 backdrop-blur-xs p-4 sm:p-5 rounded-xl border border-arena-calida/20 shadow-xs">
          {hasReviews ? (
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <GoogleGIcon />
              <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas en Google Reviews`}>
                {[1, 2, 3, 4, 5].map((starNum) => (
                  <Star
                    key={starNum}
                    className={`w-4 h-4 ${
                      starNum <= Math.round(numericRating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-300 fill-slate-100"
                    }`}
                  />
                ))}
              </div>
              <span className="font-label-caps text-xs sm:text-sm text-teal-uno uppercase tracking-wider font-bold">
                {rating}
              </span>
              <span className="text-xs sm:text-sm text-gris-texto font-medium">
                {language === "es"
                  ? `en Google Reviews (${reviewCount} ${numericReviews === 1 ? "opinión" : "opiniones"})`
                  : `on Google Reviews (${reviewCount} ${numericReviews === 1 ? "review" : "reviews"})`}
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <GoogleGIcon />
              <span className="font-label-caps text-xs sm:text-sm text-teal-uno uppercase tracking-wider font-bold">
                {language === "es" ? "Perfil Oficial en Google Maps" : "Official Google Maps Profile"}
              </span>
              <span className="text-xs sm:text-sm text-gris-texto font-medium">
                {language === "es" ? "(Sé el primero en dejar una opinión)" : "(Be the first to leave a review)"}
              </span>
            </div>
          )}
          
          <a
            href={mapReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver todas las reseñas verificadas en Google Maps de UNO Arquitectos"
            className="font-label-caps text-[11px] sm:text-xs text-teal-uno hover:text-arena-calida transition-all uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full border border-teal-uno/20 hover:border-arena-calida hover:bg-teal-uno/5 active:scale-95 flex-shrink-0"
          >
            {hasReviews
              ? (language === "es" ? "Ver reseñas en Google Maps" : "Read reviews on Google Maps")
              : (language === "es" ? "Escribir opinión en Google Maps" : "Write a review on Google Maps")}
            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
