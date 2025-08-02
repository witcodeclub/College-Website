import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t("faqs", { returnObjects: true });

  return (
    <div className="w-full bg-green-50 p-5 md:p-8 rounded-xl shadow-lg text-center max-w-screen-md mx-auto">
      {/* ✅ Removed language toggle button */}

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#024E6F] mb-5 font-[Poppins]">
        {t("faq_heading")}
      </h2>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-green-200 shadow-md overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-base sm:text-lg text-gray-800 hover:bg-green-50 transition duration-200 font-[Poppins]"
            >
              <span className="flex items-center gap-3">
                <span className="text-green-700 text-xl">❓</span>
                {faq.question}
              </span>
              <span
                className={`transform transition-transform duration-300 text-green-700 text-lg ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-4 pl-14 text-sm sm:text-base bg-gray-50 text-gray-700 border-t border-green-200 font-[Poppins]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm sm:text-base mt-6 font-semibold text-gray-800 font-[Poppins]">
        📞 {t("faq_footer")}
      </p>
    </div>
  );
}

export default FAQSection;

