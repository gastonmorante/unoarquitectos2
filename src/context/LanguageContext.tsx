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
  formatUrl: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const TRANSLATIONS: Record<Language, Record<string, any>> = {
  es,
  en,
  it,
  fr
};

export function extractLangAndPath(pathname: string): { lang: Language; purePath: string } {
  const clean = pathname.replace(/\/+$/, "") || "/";
  
  if (clean.startsWith("/en/") || clean === "/en") {
    const pure = clean.substring(3) || "/";
    return { lang: "en", purePath: pure.startsWith("/") ? pure : `/${pure}` };
  }
  if (clean.startsWith("/it/") || clean === "/it") {
    const pure = clean.substring(3) || "/";
    return { lang: "it", purePath: pure.startsWith("/") ? pure : `/${pure}` };
  }
  if (clean.startsWith("/fr/") || clean === "/fr") {
    const pure = clean.substring(3) || "/";
    return { lang: "fr", purePath: pure.startsWith("/") ? pure : `/${pure}` };
  }

  return { lang: "es", purePath: clean };
}

function getInitialLanguage(): Language {
  if (typeof window !== "undefined") {
    // 1. Detect from URL pathname subdirectory (/en/..., /it/..., /fr/...)
    const { lang: pathLang } = extractLangAndPath(window.location.pathname);
    if (pathLang !== "es") {
      return pathLang;
    }

    // 2. Detect from query param ?lang=en|es|it|fr
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang")?.toLowerCase();
    if (langParam && ["es", "en", "it", "fr"].includes(langParam)) {
      return langParam as Language;
    }

    // 3. Fallback to localStorage
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

    // Compute canonical URL for current route
    if (typeof window !== "undefined") {
      const { purePath } = extractLangAndPath(window.location.pathname);
      const canonicalPath = lang === "es" 
        ? (purePath === "/" ? "/" : purePath) 
        : (purePath === "/" ? `/${lang}/` : `/${lang}${purePath}`);
      
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", `https://unoarquitectos.com${canonicalPath}`);
      }
    }
  }, []);

  const formatUrl = useCallback((path: string): string => {
    const clean = path.startsWith("/") ? path : `/${path}`;
    if (language === "es") {
      return clean;
    }
    if (clean === "/") {
      return `/${language}/`;
    }
    return `/${language}${clean}`;
  }, [language]);

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("uno_arquitectos_lang", newLang);

      // Recompute path with new language subdirectory
      const { purePath } = extractLangAndPath(window.location.pathname);
      let targetPath = "";
      if (newLang === "es") {
        targetPath = purePath === "/" ? "/" : purePath;
      } else {
        targetPath = purePath === "/" ? `/${newLang}/` : `/${newLang}${purePath}`;
      }

      const search = window.location.search;
      const hash = window.location.hash;
      const finalUrl = `${targetPath}${search}${hash}`;

      window.history.pushState({}, "", finalUrl);
      window.dispatchEvent(new PopStateEvent("popstate"));

      updateHeadTags(newLang);
    }
  }, [updateHeadTags]);

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

  const t = useCallback((keyPath: string) => {
    const keys = keyPath.split(".");
    let current: any = TRANSLATIONS[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
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
    <LanguageContext.Provider value={{ language, setLanguage, t, formatUrl }}>
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
