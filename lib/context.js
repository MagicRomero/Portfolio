import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme !== sessionStorage.getItem("theme")) {
      sessionStorage.setItem("theme", theme);
      setTheme(theme);
    } else {
      setTheme(sessionStorage.getItem("theme"));
    }
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}
