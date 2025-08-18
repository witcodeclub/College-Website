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
    <div>
      {/* ✅ ANIMATED BANNER WITH GRADIENT + WAVE */}
      <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-green-500 py-16 sm:py-20 text-center text-white overflow-hidden">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          style={{
            opacity: 0,
            animation: "fadeIn 1.2s ease-in-out forwards",
          }}
        >
          Societies at WIT
        </h1>
        <p
          className="mt-3 text-base sm:text-lg md:text-xl opacity-90"
          style={{
            opacity: 0,
            animation: "slideUp 1.5s ease-out forwards",
            animationDelay: "0.5s",
          }}
        >
          Discover vibrant student societies and communities at WIT
        </p>

        {/* ✅ Wavy Bottom Shape */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,122.7C672,128,768,192,864,208C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* ✅ Inline Keyframes */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      {/* ✅ Societies Cards Section */}
      <div className="bg-white py-10 px-4 flex justify-center items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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





