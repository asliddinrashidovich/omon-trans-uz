import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import ruTranslations from "./locales/ru/translation.json";
import uzTranslations from "./locales/uz/translation.json";

i18n
  .use(initReactI18next)
  .init({
    lng: "uz",
    fallbackLng: "uz",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: {
        translation: uzTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
  });

export default i18n;
