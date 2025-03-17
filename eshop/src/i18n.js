import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./i18n/english.json"
import estonian from "./i18n/estonian.json"
import french from "./i18n/french.json"


const resources = {
  en: {
    translation: english
  },
  et: {
    translation: estonian
  },
  fr: {
    translation: french
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: localStorage.getItem("keel") || "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;