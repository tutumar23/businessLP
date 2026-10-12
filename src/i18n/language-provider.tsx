"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { defaultLanguage, languageStorageKey, pageTitles, type Language } from "./config";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [preferencesLoaded, setPreferencesLoaded] = useState(false);

  useEffect(() => {
    // Read storage after hydration to match the server-rendered default language.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      setLanguage(localStorage.getItem(languageStorageKey) === "en" ? "en" : defaultLanguage);
    } catch { /* Browser storage is optional. */ }
    setPreferencesLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = pageTitles[language];
    if (preferencesLoaded) {
      try {
        localStorage.setItem(languageStorageKey, language);
      } catch { /* The switcher still works when storage is unavailable. */ }
    }
  }, [language, preferencesLoaded]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
