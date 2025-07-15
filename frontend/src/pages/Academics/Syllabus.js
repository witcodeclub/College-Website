import React from "react";
import syllabusData from "../../data/syllabus.json";

const Syllabus = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-10 min-h-screen font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Syllabus Library
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {syllabusData.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs sm:max-w-sm bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              {item.course}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 mb-4">
              Total Semesters: {item.semesters}
            </p>
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm sm:text-base transition"
            >
              View Syllabus PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;


