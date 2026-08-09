import React, { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../types";

interface LanguageSelectorProps {
  isScrolled: boolean;
  theme?: "adaptive" | "light" | "dark";
}

export default function LanguageSelector({ isScrolled, theme = "adaptive" }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { id: Language; label: string }[] = [
    { id: "es", label: "ES" },
    { id: "en", label: "EN" },
    { id: "it", label: "IT" },
    { id: "fr", label: "FR" }
  ];

  const isDarkText = theme === "adaptive" && isScrolled;
  const textColor = isDarkText ? "text-gris-texto hover:text-teal-uno" : "text-gris-texto md:text-white/90 hover:text-teal-uno";
  const borderColor = isDarkText ? "border-gris-piedra" : "border-gris-piedra md:border-white/20";

  return (
    <div className="relative font-sans text-xs tracking-wider uppercase font-label-caps">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded-xs transition-all duration-300 cursor-pointer ${borderColor} ${textColor}`}
      >
        <Globe className="w-3.5 h-3.5 text-teal-uno" />
        <span className="font-semibold">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1.5 bg-white border border-gris-piedra rounded-xs py-1.5 min-w-[70px] shadow-xl z-50 text-left font-sans">
          {languages.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setLanguage(l.id);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-1.5 text-xs text-left hover:bg-gris-piedra/20 transition-colors font-label-caps cursor-pointer ${
                language === l.id ? "text-teal-uno font-semibold" : "text-gris-texto"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
