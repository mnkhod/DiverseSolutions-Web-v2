import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationMN from "./locales/mn/translationMN.json";

const resources = {
  en: {
    translation: translationEN,
  },
  mn: {
    translation: translationMN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "mn",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
