import React from "react";

const facultyData = [
  {
    title: "Director (APJAKWIT)",
    name: "Member",
    department: "Director (APJAKWIT)",
    image: "/images/faculty1.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Brajesh Kumar",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty2.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Santosh Kumar",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty3.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Amit Kumar Mishra",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/amit sir.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Asif Habibi",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/ashif sir.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mrs. Rashmi Kumari",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/rashmi mam.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mrs. Madhu",
    department: "Bioinformatics (BI)",
    image: "/images/madhu mam.jpg"
  }
];

const Faculty = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-10 bg-gray-50 min-h-screen">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 text-center mb-6 uppercase">
        Faculty Members
      </h2>

      {/* ✅ Fixed Grid Layout: 4 cards per row on large screens */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Title Bar */}
            <div className="bg-emerald-900 text-white text-[11px] sm:text-xs py-1.5 px-2 text-center font-medium tracking-wide">
              {faculty.title}
            </div>

            {/* Faculty Image */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="max-h-full max-w-full object-contain p-2"
              />
            </div>

            {/* Name */}
            <div className="bg-gray-200 text-green-800 text-sm sm:text-base font-semibold py-2 px-2 text-center">
              {faculty.name}
            </div>

            {/* Department */}
            <div className="bg-gray-100 text-gray-700 text-xs sm:text-sm py-2 px-2 text-center border-t border-gray-300">
              {faculty.department}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;





