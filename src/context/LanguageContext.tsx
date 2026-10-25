'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('lang') as Language | null;
      if (savedLang === 'pt' || savedLang === 'en') {
        setLangState(savedLang);
        document.documentElement.lang = savedLang === 'pt' ? 'pt-BR' : 'en';
      } else if (typeof navigator !== 'undefined' && navigator.language && !navigator.language.startsWith('pt')) {
        setLangState('en');
        document.documentElement.lang = 'en';
      }
    } catch {
      // localStorage indisponível em contextos restritos
    }
  }, []);

  function setLang(newLang: Language) {
    setLangState(newLang);
    document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : 'en';
    try {
      localStorage.setItem('lang', newLang);
    } catch {
      // localStorage indisponível
    }
  }

  function toggleLanguage() {
    setLang(lang === 'pt' ? 'en' : 'pt');
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser utilizado dentro de um LanguageProvider');
  }
  return context;
}
