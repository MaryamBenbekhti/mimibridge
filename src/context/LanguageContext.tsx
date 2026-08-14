"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en.json";
import tr from "../locales/tr.json";
import ar from "../locales/ar.json";
import fr from "../locales/fr.json";

// Map the imported JSON files to their language codes
const translations: Record<string, any> = { EN: en, TR: tr, AR: ar, FR: fr };

type LanguageContextType = {
  currentLang: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState("EN");

  // This is the function we used in Hero.tsx (e.g., t("hero.title"))
  const t = (key: string) => {
    const keys = key.split(".");
    let value = translations[currentLang];
    for (const k of keys) {
      if (value === undefined || value[k] === undefined) return key; // Fallback to the key name if missing
      value = value[k];
    }
    return value;
  };

  const setLanguage = (lang: string) => {
    setCurrentLang(lang);
    // Automatically switch text direction to Right-to-Left if Arabic is selected
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = lang.toLowerCase();
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}