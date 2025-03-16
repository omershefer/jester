import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import enTranslations from "../locales/en/translation.json"; // Import English translations
import heTranslations from "../locales/he/translation.json"; // Import Hebrew translations

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    lng: "he",
    fallbackLng: "he",
    supportedLngs: ["en", "he"],
    debug: process.env.NODE_ENV === "development",

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },

    resources: {
      en: {
        translation: enTranslations, // Use the imported English JSON
      },
      he: {
        translation: heTranslations, // Use the imported Hebrew JSON
      },
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
