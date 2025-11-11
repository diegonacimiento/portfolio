import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: boolean;
  changeLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<boolean>(() => {
    const savedLanguage = localStorage.getItem("spanish");
    return savedLanguage ? JSON.parse(savedLanguage) : false;
  });

  useEffect(() => {
    localStorage.setItem("spanish", JSON.stringify(language));
  }, [language]);

  const changeLanguage = () => {
    setLanguage(prev => !prev);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 