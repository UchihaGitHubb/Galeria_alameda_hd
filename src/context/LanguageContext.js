import { createContext, useContext, useState } from "react";

import { getLanguage, setLanguage as saveLanguage } from "../helper/language";

import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getLanguage());

  const changeLanguage = (lang) => {
    setLanguageState(lang);
    saveLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
