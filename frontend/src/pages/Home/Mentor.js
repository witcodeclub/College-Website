import React from "react";

const mentors = [
  {
    title: "VICE-CHANCELLOR, LNMU",
    name: "Prof. Sanjay Kumar Chaudhary",
    image: "/images/vc.jpeg",
  },
  {
    title: "DIRECTOR. WIT",
    name: "Dr. Ajay Nath Jha",
    image: "/images/director.jpeg",
  },
  {
    title: "REGISTRAR, LNMU",
    name: "",
    image: "/images/registrar.jpeg",
  },
  {
    title: "DEPUTY REGISTRAR, WIT",
    name: "",
    image: "/images/deputy.jpeg",
  },
];

const Mentor = () => {
  return (
    <section className="w-full bg-[#eafaf0] py-10 px-4 md:px-8 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2c3e50] mb-8">
          Our Mentors
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="relative w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] mx-auto rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-105 bg-white"
            >
              <img
                src={mentor.image}
                alt={mentor.title}
                className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
              />
              {/* Hover/Touch Overlay */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center text-xs sm:text-sm font-medium px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>{mentor.title}</div>
                {mentor.name && <div className="text-[11px] sm:text-xs">{mentor.name}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;






