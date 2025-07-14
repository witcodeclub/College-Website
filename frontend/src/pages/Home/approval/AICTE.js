import React from "react";
import { useTranslation } from "react-i18next";

const AICTECard = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-md border border-gray-300 my-8">
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-green-700 mb-4 font-poppins leading-snug">
        {t("aicte_title")}
      </h2>

      {/* Info Line */}
      <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-4 font-poppins">
        📅 <strong>{t("aicte_established")}:</strong> November 1945 &nbsp; | &nbsp; 🏛 <strong>{t("aicte_statutory")}:</strong> 1987
      </p>

      {/* About Section */}
      <p className="text-gray-800 leading-relaxed text-justify text-sm sm:text-base font-poppins">
        {t("aicte_about")}
      </p>

      {/* Approval Section */}
      <div className="bg-gray-100 p-4 sm:p-5 rounded-lg mt-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 font-poppins">
          {t("aicte_approval_heading")}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify whitespace-pre-line font-poppins">
          {t("aicte_approval_details")}
        </p>
      </div>

      {/* Footer */}
      <p className="text-center font-semibold text-teal-600 mt-6 text-sm sm:text-base font-poppins">
        {t("aicte_footer_note")}
      </p>
    </div>
  );
};

export default AICTECard;

