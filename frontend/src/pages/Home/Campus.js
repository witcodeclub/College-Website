import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + Math.ceil(target / 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
};

const Campus = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md border border-gray-300 px-4 py-6 sm:py-8 md:py-10 text-center">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-3 sm:mb-4 font-poppins">
        {t("campus_heading")}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto font-poppins">
        {t("campus_description")}
      </p>

      {/* Number Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mt-6 sm:mt-8">
        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
            <Counter target={20} />
            <span className="text-red-700 text-xl sm:text-2xl"> +</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-800 font-medium mt-1 sm:mt-2 uppercase tracking-wide font-poppins text-center">
            {t("years_experience")}
          </div>
        </div>

        {/* Students */}
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
            <Counter target={1000} />
            <span className="text-red-700 text-xl sm:text-2xl"> +</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-800 font-medium mt-1 sm:mt-2 uppercase tracking-wide font-poppins text-center">
            {t("students")}
          </div>
        </div>

        {/* Faculties */}
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
            <Counter target={18} />
            <span className="text-red-700 text-xl sm:text-2xl"> +</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-800 font-medium mt-1 sm:mt-2 uppercase tracking-wide font-poppins text-center">
            {t("faculties")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;



