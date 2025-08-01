import React from "react";

function Mission() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:px-12 py-10">
      <img
        src="/images/APJK.png"
        alt="Dr. APJ Abdul Kalam"
        className="w-36 h-36 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full object-cover"
      />
      <div className="text-left">
        <h1 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4">
          Mission & Vision
        </h1>
        <p className="text-base md:text-lg text-[#1B3B6F] mb-4 leading-relaxed text-justify">
          "If one educates a woman, an individual is educated. If one educates a woman, the whole family is educated." - Dr. APJ Abdul Kalam
        </p>
        <p className="text-base md:text-lg text-[#1B3B6F] leading-relaxed text-justify">
          The mission of APJAKWIT, an engineering college exclusively for women, is to produce at least one woman technocrat from every village of Bihar in order to empower the family, society, and nation.
        </p>
      </div>
    </div>
  );
}

export default Mission;

