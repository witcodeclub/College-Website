import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Important = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="text-center mt-6 px-4">
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <button className="px-6 py-3 text-lg font-bold bg-blue-700 text-white rounded shadow-md hover:bg-blue-800 w-full sm:w-48">
          {t("notices_button")}
        </button>
        <button
          onClick={openPopup}
          className="px-6 py-3 text-lg font-bold bg-emerald-700 text-white rounded shadow-md hover:bg-emerald-800 w-full sm:w-48"
        >
          {t("holiday_calendar_button")}
        </button>
      </div>

      {/* Notices */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full sm:w-1/2 mx-auto text-left text-gray-800">
        <p className="mb-2">{t("notice_1")}</p>
        <hr className="border-gray-300 mb-2" />
        <p>{t("notice_2")}</p>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <img
              src="/images/holiday-calendar.jpg"
              alt="Holiday Calendar"
              className="w-full rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Important;


