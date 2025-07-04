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
    }, 60);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
};

const Campus = () => {
  return (
    <section className="text-center mt-16 mb-12 px-4 py-10 border-2 border-gray-400 max-w-5xl mx-auto rounded-lg shadow-md">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
        About WIT
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto">
        Dr. APJ Abdul Kalam Women’s Institute of Technology (WIT), a unit of Lalit Narayan Mithila University (LNMU), Darbhanga, is Bihar’s only women’s engineering college under LNMU.
        It is dedicated to the empowerment of women through quality technical education, innovation, and research. WIT provides a safe, inclusive, and motivating space for young women to grow as future tech leaders.
      </p>

      {/* Number Counters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
        <div className="text-4xl font-extrabold text-green-700">
          <Counter target={20} />
          <span className="text-red-700 text-3xl"> +</span>
          <div className="text-base text-gray-800 font-medium mt-2 uppercase tracking-wide">
            Years Of Experience
          </div>
        </div>

        <div className="text-4xl font-extrabold text-green-700">
          <Counter target={1000} />
          <span className="text-red-700 text-3xl"> +</span>
          <div className="text-base text-gray-800 font-medium mt-2 uppercase tracking-wide">
            Students
          </div>
        </div>

        <div className="text-4xl font-extrabold text-green-700">
          <Counter target={18} />
          <span className="text-red-700 text-3xl"> +</span>
          <div className="text-base text-gray-800 font-medium mt-2 uppercase tracking-wide">
            Faculties
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
