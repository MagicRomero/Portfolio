import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { availableLocale } from "@/locales";

export const GlobalContext = createContext();

export function ContextProvider({ children }) {

  const router = useRouter();
  const [theme, setTheme] = useState("light");
  const [locale, setLocale] = useState(router.locale);
  const [translations, setTranslations] = useState(
    availableLocale(router.locale)
  );

  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme");

    if (theme !== savedTheme) {
      sessionStorage.setItem("theme", theme);
      setTheme(theme);
    } else {
      setTheme(savedTheme);
    }

    console.log("router locale and locale ", router.locale, locale)
    if (router.locale !== locale) {
      updateLanguage(router.locale);
    }
  }, [theme, router.locale]);

  const updateLanguage = (newLocale) => {
    setLocale(newLocale);
    setTranslations(availableLocale(newLocale));
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        translations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
