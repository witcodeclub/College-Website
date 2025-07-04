import React from "react";

const Other = () => {
  const facilities = [
    {
      title: "Campus Wi-Fi",
      description:
        "The campus is fully equipped with high-speed Wi-Fi access, available in academic blocks, library, and hostel areas to support digital learning and research.",
    },
    {
      title: "Water Coolers",
      description:
        "Cold and clean drinking water is available in the campus through well-maintained water coolers for students and staff.",
    },
    {
      title: "Smart Classrooms",
      description:
        "Digital board facility is available in the campus classroom and computer lab to enable e-learning and smart class learning.",
      image: "/images/smart-class.jpg", // optional image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Other Campus Facilities
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white w-72 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {facility.title}
            </h2>

            {facility.image && (
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
            )}

            <p className="text-sm text-gray-600 leading-relaxed">
              {facility.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Other;

