import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* ✅ Main Button (Compact Like Screenshot) */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-white text-[#0A2647] font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[#5DADE2] hover:text-white transition flex items-center gap-2"
      >
        {currentLang.label} <span className="text-sm">▼</span>
      </button>

      {/* ✅ Dropdown (Hindi Option) */}
      {open && (
        <ul className="absolute right-0 mt-1 bg-white text-black rounded-md shadow-md min-w-[120px] z-[1000]">
          {languages
            .filter(l => l.code !== currentLang.code)
            .map((lang) => (
              <li
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="px-4 py-2 cursor-pointer hover:bg-[#1B3B6F] hover:text-white transition"
              >
                {lang.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;


