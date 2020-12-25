import es from "./es";
import en from "./en";

const locales = {
  es,
  en,
};

export const availableLocale = (locale = "es") => {
  return locales[locale] || locales[es];
};
