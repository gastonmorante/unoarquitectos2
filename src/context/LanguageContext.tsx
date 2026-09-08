import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";
import it from "../locales/it.json";
import fr from "../locales/fr.json";

export type Language = "es" | "en" | "it" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const TRANSLATIONS: Record<Language, Record<string, any>> = {
  es,
  en,
  it,
  fr
};

function getInitialLanguage(): Language {
  if (typeof window !== "undefined") {
    // 1. Detect from URL query param ?lang=en|es|it|fr
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang")?.toLowerCase();
    if (langParam && ["es", "en", "it", "fr"].includes(langParam)) {
      return langParam as Language;
    }

    // 2. Detect from URL pathname (e.g. /en/, /fr/, /it/)
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith("/en")) return "en";
    if (path.startsWith("/it")) return "it";
    if (path.startsWith("/fr")) return "fr";

    // 3. Detect from localStorage
    const saved = localStorage.getItem("uno_arquitectos_lang");
    if (saved && ["es", "en", "it", "fr"].includes(saved)) {
      return saved as Language;
    }
  }
  return "es";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const updateHeadTags = useCallback((lang: Language) => {
    if (typeof document === "undefined") return;

    // Update <html lang="...">
    document.documentElement.lang = lang;

    // Synchronize Canonical URL & Hreflangs
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      if (lang === "es") {
        canonicalLink.setAttribute("href", "https://unoarquitectos.com/");
      } else {
        canonicalLink.setAttribute("href", `https://unoarquitectos.com/?lang=${lang}`);
      }
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("uno_arquitectos_lang", lang);

      // Smoothly update URL query param without page reload
      const url = new URL(window.location.href);
      if (lang === "es") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", lang);
      }
      window.history.replaceState({}, "", url.toString());

      updateHeadTags(lang);
    }
  }, [updateHeadTags]);

  // Handle URL param on popstate / back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const detected = getInitialLanguage();
      setLanguageState(detected);
      updateHeadTags(detected);
    };

    window.addEventListener("popstate", handlePopState);
    updateHeadTags(language);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [language, updateHeadTags]);

  // Sync static elements in DOM if present
  useEffect(() => {
    const tagline = document.getElementById("hero-tagline");
    const title = document.getElementById("hero-title");
    const desc = document.getElementById("hero-desc");
    const btn1 = document.getElementById("hero-btn-primary");
    const btn2 = document.getElementById("hero-btn-secondary");

    if (language === "en") {
      if (tagline) tagline.textContent = "BOUTIQUE ARCHITECTURE & CONSTRUCTION STUDIO";
      if (title) title.textContent = "ARCHITECTURE THAT BELONGS. SPACES THAT ENDURE.";
      if (desc) desc.textContent = "We craft spaces that elevate — those who inhabit them, those who build them, the land that welcomes them, and the community that surrounds them.";
      if (btn1) btn1.textContent = "EXPLORE WORKS";
      if (btn2) btn2.textContent = "EXPERIENCE SPACES";
    } else if (language === "it") {
      if (tagline) tagline.textContent = "STUDIO BOUTIQUE DI ARCHITETTURA & COSTRUZIONE";
      if (title) title.textContent = "ARCHITETTURA CHE APPARTIENE. SPAZI CHE DURANO.";
      if (desc) desc.textContent = "Materializziamo spazi che aggiungono valore — a chi li abita, a chi li costruisce, al luogo che li accoglie e alla comunità circostante.";
      if (btn1) btn1.textContent = "ESPLORA LE OPERE";
      if (btn2) btn2.textContent = "SENTI GLI SPAZI";
    } else if (language === "fr") {
      if (tagline) tagline.textContent = "STUDIO BOUTIQUE D'ARCHITECTURE & CONSTRUCTION";
      if (title) title.textContent = "UNE ARCHITECTURE QUI APPARTIENT. DES ESPACES QUI DURENT.";
      if (desc) desc.textContent = "Nous matérialisons des espaces qui apportent une valeur ajoutée — à ceux qui les habitent, ceux qui les construisent, au lieu qui les accueille et à la communauté.";
      if (btn1) btn1.textContent = "EXPLORER LES ŒUVRES";
      if (btn2) btn2.textContent = "RESSENTIR LES ESPACES";
    } else {
      if (tagline) tagline.textContent = "ESTUDIO BOUTIQUE DE ARQUITECTURA & CONSTRUCCIÓN";
      if (title) title.textContent = "ARQUITECTURA QUE PERTENECE. ESPACIOS QUE PERDURAN.";
      if (desc) desc.textContent = "Materializamos espacios que suman — a quien los habita, a quien los construye, al lugar que los recibe y a la comunidad que los rodea.";
      if (btn1) btn1.textContent = "EXPLORAR OBRAS";
      if (btn2) btn2.textContent = "SENTIR LOS ESPACIOS";
    }
  }, [language]);

  const t = useCallback((keyPath: string) => {
    const keys = keyPath.split(".");
    let current: any = TRANSLATIONS[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to Spanish
        let fb: any = TRANSLATIONS["es"];
        for (const k of keys) {
          if (fb && typeof fb === "object" && k in fb) {
            fb = fb[k];
          } else {
            return keyPath;
          }
        }
        return fb;
      }
    }
    return current;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
