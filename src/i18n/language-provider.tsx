"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { defaultLanguage, languageStorageKey, pageDescriptions, pageTitles, type Language } from "./config";
import { translate, type Translate } from "./messages";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translate;
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
    document.querySelector('meta[name="description"]')?.setAttribute("content", pageDescriptions[language]);
    if (preferencesLoaded) {
      try {
        localStorage.setItem(languageStorageKey, language);
      } catch { /* The switcher still works when storage is unavailable. */ }
    }
  }, [language, preferencesLoaded]);

  const t = useCallback<Translate>((key, params) => translate(language, key, params), [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
