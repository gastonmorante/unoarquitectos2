import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface MetricCounterProps {
  valueStr: string;
  title: string;
  desc: string;
}

const MetricCounter: React.FC<MetricCounterProps> = ({ valueStr, title, desc }) => {
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
  const { t } = useLanguage();

  const metricsData = [
    {
      val: t("metrics.m1Val") || "20+",
      title: t("metrics.m1Title") || "Años de Trayectoria",
      desc: t("metrics.m1Desc") || "Más de 20 años liderando diseño, alta ingeniería y construcción.",
    },
    {
      val: t("metrics.m2Val") || "80K+",
      title: t("metrics.m2Title") || "m² Proyectados",
      desc: t("metrics.m2Desc") || "Diseñados, calculados y construidos sin sobrecostos.",
    },
    {
      val: t("metrics.m3Val") || "100%",
      title: t("metrics.m3Title") || "Viabilidad Legal & Técnica",
      desc: t("metrics.m3Desc") || "Gestoría ágil de licencias de construcción y permisos ambientales.",
    },
    {
      val: t("metrics.m4Val") || "+150",
      title: t("metrics.m4Title") || "Proyectos Entregados",
      desc: t("metrics.m4Desc") || "Residencias boutique y desarrollos boutique hospitality.",
    },
  ];

  return (
    <section id="metricas" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-margin-desktop bg-surface-container-low/50 border-b border-arena-calida/20 font-sans">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metricsData.map((item, index) => (
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
      </div>
    </section>
  );
}
