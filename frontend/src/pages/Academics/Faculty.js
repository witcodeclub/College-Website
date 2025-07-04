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
    image: "/images/faculty4.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Asif Habibi",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty5.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mrs. Rashmi",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty6.jpg"
  }
];

const Faculty = () => {
  return (
    <div className="px-6 py-10 font-sans bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10 uppercase">
        Faculty Members
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Title Bar */}
            <div className="bg-emerald-900 text-white text-xs py-2 px-3 text-center font-medium tracking-wide">
              {faculty.title}
            </div>

            {/* Image */}
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-64 object-cover"
            />

            {/* Name */}
            <div className="bg-gray-200 text-green-700 text-sm font-semibold py-2 px-3 text-center">
              {faculty.name}
            </div>

            {/* Department */}
            <div className="bg-gray-100 text-gray-700 text-xs py-2 px-3 text-center border-t border-gray-300">
              {faculty.department}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;

