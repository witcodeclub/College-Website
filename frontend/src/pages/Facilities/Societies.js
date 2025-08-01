import React from "react";

const Societies = () => {
  const societies = [
    {
      name: "Coding Club",
      description:
        "Promotes a strong coding environment by organizing hackathons, coding competitions, and skill-building sessions.",
      logo: "/images/codingclub_logo.png",
    },
    {
      name: "Sports Club",
      description:
        "Encourages students to stay active by hosting tournaments, fitness challenges, and inter-college sports events.",
      logo: "/images/sportsclub_logo.png",
    },
    {
      name: "Cultural Cell",
      description:
        "Celebrates diversity through cultural festivals, artistic performances, and music & dance events.",
      logo: "/images/culturalcell_logo.png",
    },
    {
      name: "Training & Placement Cell",
      description:
        "Guides students in career planning, internship opportunities, and professional development.",
      logo: "/images/placementcell_logo.png",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 flex justify-center items-center min-h-[30vh]">
      <div className="max-w-6xl text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 uppercase mb-10 mx-auto">
          Societies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {societies.map((society, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img
                src={society.logo}
                alt={society.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-green-800 font-semibold text-lg mb-2">{society.name}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{society.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Societies;

