import React from "react";

const LabFacilities = () => {
  const labDescriptions = [
    "Electrical/Electronics Lab",
    "Electrical/Electronics Lab",
    "Computer Lab",
    "Computer Lab",
  ];

  const labImages = ["lab1.jpg", "lab2.jpg", "lab3.jpg", "lab4.jpg"];

  return (
    <div className="px-4 sm:px-6 py-10 bg-white font-sans flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Labs</h2>

      {/* Description Box */}
      <div className="w-full max-w-5xl bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center sm:text-justify">
          Dr. A.P.J. Abdul Kalam Women's Institute of Technology provides state-of-the-art
          laboratory facilities to enhance practical learning and research. The institution
          houses two fully functional computer labs equipped with modern computing resources
          to facilitate programming, software development, and AI research. In addition,
          the Electrical/Electronics Lab enables hands-on experience with circuits, digital
          electronics, and embedded systems. The Mechanical Lab is well-equipped for thermal,
          fluid mechanics, and automation experiments. A dedicated Workshop Lab allows students
          to gain practical skills in machining, welding, and fabrication. Moreover, the
          Chemistry and Physics Labs offer a range of advanced equipment and experimental
          setups to support scientific research and innovation.
        </p>

        {/* Image Cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {labImages.map((img, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[23%] bg-white p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <img
                src={`/images/${img}`}
                alt={`Lab ${index + 1}`}
                className="w-full h-40 sm:h-44 object-cover rounded-md mb-2"
              />
              <p className="text-sm text-gray-700">{labDescriptions[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabFacilities;


