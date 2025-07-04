import React from "react";
import syllabusData from "../../data/syllabus.json";

const Syllabus = () => {
  return (
    <div className="bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Syllabus Library
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {syllabusData.map((item, index) => (
          <div
            key={index}
            className="w-72 bg-white rounded-xl shadow-md p-6 text-center transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-700">{item.course}</h2>
            <p className="text-gray-600 mt-2 mb-4">
              Total Semesters: {item.semesters}
            </p>
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
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

