import React from "react";

const LibraryCard = () => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 max-w-5xl mx-auto mt-8 shadow-md bg-white">
      <h2 className="text-center text-green-700 text-2xl font-bold mb-4">Library</h2>

      <p className="text-sm text-gray-600 mb-4">
        📚 <strong>Functional Library:</strong> APJAKWIT | 📖 <strong>Courses Covered:</strong> CS, IT, BCA, MCA, BI, and many more.
      </p>

      <p className="leading-relaxed text-gray-700 mb-4 text-justify">
        The library at <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology</strong> is a well-equipped and functional
        resource center for students. It houses a vast collection of books covering a wide range of subjects including
        <strong> Computer Science, Information Technology, BCA, MCA, BI, and many other disciplines.</strong>
      </p>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">📖 Library Facilities:</h3>
        <p className="text-gray-700">
          The library provides a spacious reading area, allowing students to study in a peaceful environment.
          It includes a dedicated <strong>Reading Room</strong> with comfortable seating arrangements,
          enhancing the overall learning experience for students.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
        <img
          src="/images/lib.jpg"
          alt="Library"
          className="w-full md:w-2/5 h-[400px] rounded-md object-cover"
        />
        <img
          src="/images/lib1.jpg"
          alt="Library Interior"
          className="w-full md:w-2/5 h-[400px] rounded-md object-cover"
        />
      </div>

      <p className="text-center font-semibold mt-6 text-teal-600">
        📌 A Hub of Knowledge and Learning for Future Innovators.
      </p>
    </div>
  );
};

export default LibraryCard;

