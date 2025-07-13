import React, { useState, useEffect } from "react";

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
  return (
    <section className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md border border-gray-300 px-4 py-6 sm:py-8 md:py-10 text-center">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-3 sm:mb-4 font-poppins">
        About WIT
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto font-poppins">
        Dr. APJ Abdul Kalam Women’s Institute of Technology (WIT), a unit of Lalit Narayan Mithila University (LNMU), Darbhanga, is Bihar’s only women’s engineering college under LNMU. It is dedicated to the empowerment of women through quality technical education, innovation, and research. WIT provides a safe, inclusive, and motivating space for young women to grow as future tech leaders.
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
            Years Of Experience
          </div>
        </div>

        {/* Students */}
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
            <Counter target={1000} />
            <span className="text-red-700 text-xl sm:text-2xl"> +</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-800 font-medium mt-1 sm:mt-2 uppercase tracking-wide font-poppins text-center">
            Students
          </div>
        </div>

        {/* Faculties */}
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
            <Counter target={18} />
            <span className="text-red-700 text-xl sm:text-2xl"> +</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-800 font-medium mt-1 sm:mt-2 uppercase tracking-wide font-poppins text-center">
            Faculties
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;


