import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const languages = ["fr", "en"] as const;
export type Language = (typeof languages)[number];

const STORAGE_KEY = "portfolio-lang";

const isLanguage = (value: string): value is Language =>
  languages.includes(value as Language);

const detectLanguage = (): Language => {
  if (typeof window === "undefined") return "fr";

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved && isLanguage(saved)) return saved;

  const browser = navigator.language.slice(0, 2).toLowerCase();

  return isLanguage(browser) ? browser : "fr";
};

const applyDocumentLanguage = (lng: string) => {
  document.documentElement.lang = lng;
};

void i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: detectLanguage(),
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

applyDocumentLanguage(i18n.language);

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
  applyDocumentLanguage(lng);
});

export default i18n;
