import React from "react";

const societies = [
  {
    name: "Coding Club",
    description: "Empowering students with problem-solving and software development skills.",
    img: "/images/pairprogram pic1.jpg",
  },
  {
    name: "Cultural Cell",
    description: "Celebrating traditions through dance, music, art, and drama.",
    img: "/images/img4.jpg",
  },
  {
    name: "Placement Cell",
    description: "Guiding and training students for career opportunities and placements.",
    img: "/images/placement_cell.jpg",
  },
  {
    name: "Sports Club",
    description: "A creative corner for thinkers, designers, poets, and storytellers.",
    img: "/images/sports1.jpg",
  },
];

const Societies = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-10 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-800 text-center mb-10 border-b-4 border-green-800 inline-block pb-2">
        Societies at WIT
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {societies.map((society, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.03]"
          >
            <img
              src={society.img}
              alt={society.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {society.name}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{society.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Societies;

