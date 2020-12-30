import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { availableLocale } from "@/locales";

export const GlobalContext = createContext();

export function ContextProvider({ children }) {
  const router = useRouter();

  const [theme, setTheme] = useState("light");
  const [locale, setLocale] = useState(router.locale || router.defaultLocale);
  const [translations, setTranslations] = useState(
    availableLocale(locale || router.locale)
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (theme !== savedTheme) {
      localStorage.setItem("theme", theme);
      setTheme(theme);
    } else {
      setTheme(savedTheme);
    }

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
