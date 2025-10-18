// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center space-x-1 p-1 bg-primary rounded-md border border-border-color">
      <button 
        onClick={() => changeLanguage('en')}
        disabled={currentLanguage === 'en'}
        className={`px-3 py-1 text-xs rounded transition ${currentLanguage === 'en' ? 'bg-accent text-white cursor-default' : 'text-text-secondary hover:bg-border-color hover:text-text-light'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('es')}
        disabled={currentLanguage === 'es'}
        className={`px-3 py-1 text-xs rounded transition ${currentLanguage === 'es' ? 'bg-accent text-white cursor-default' : 'text-text-secondary hover:bg-border-color hover:text-text-light'}`}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;