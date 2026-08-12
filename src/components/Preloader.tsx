import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { UnoIsotype } from "./Logo";

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#1E1E1E] z-50 flex flex-col justify-center items-center font-sans"
    >
      {/* GEOMETRIC UNO APERTURE ANIMATION */}
      <div className="relative mb-12 flex items-center justify-center">
        {/* Pulsing Backlight */}
        <div className="absolute w-32 h-32 rounded-full bg-[#00A3A3]/10 blur-xl animate-pulse"></div>

        <UnoIsotype
          size={100}
          animated={true}
          color="#00A3A3"
          cubeColor="#FFFFFF"
          strokeColor="#00A3A3"
          className="relative z-10"
        />
      </div>

      {/* LOAD STATUS INDICATOR */}
      <div className="text-center font-sans">
        <h2 className="text-white text-sm tracking-[0.5em] uppercase mb-2">
          <span className="font-semibold text-white">UNO</span>{" "}
          <span className="font-light text-zinc-400">ARQUITECTOS</span>
        </h2>
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-zinc-400 tracking-widest">
          <span>{Math.min(percent, 100)}%</span>
          <span className="text-[#00A3A3]">•</span>
          <span className="uppercase text-[10px] tracking-[0.25em] text-zinc-400 font-light">
            {percent < 40 ? "Cargando proyecto..." : percent < 80 ? "Procesando ingeniería..." : "Renderizando espacio..."}
          </span>
        </div>

        {/* Micro loading track */}
        <div className="w-48 h-[2px] bg-zinc-800 mx-auto mt-4 overflow-hidden relative rounded-full">
          <motion.div
            className="h-full bg-[#00A3A3]"
            style={{ width: `${Math.min(percent, 100)}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
