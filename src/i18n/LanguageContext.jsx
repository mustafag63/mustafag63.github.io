import { createContext, useContext, useEffect, useMemo, useState } from "react";
import content, { getProjects } from "./content.js";

const LanguageContext = createContext(null);

const SUPPORTED = ["en", "fr", "tr"];

function detectInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch (e) {
    // localStorage unavailable — fall through to default
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const setLang = (next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: content[lang],
      projects: getProjects(lang),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
