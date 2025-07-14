import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-right text-sm">
      <button onClick={() => changeLanguage('en')} className="mr-2 px-2 py-1 bg-gray-200 rounded">EN</button>
      <button onClick={() => changeLanguage('hi')} className="px-2 py-1 bg-gray-200 rounded">हिन्दी</button>
    </div>
  );
};

export default LanguageSwitcher;
