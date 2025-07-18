import React from "react";

const SportsClub = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-10 flex justify-center">
      <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl text-green-800 font-bold text-center mb-6">
          Sports Club
        </h1>

        <p className="text-justify text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          The Sports Club at APJAKWIT is dedicated to promoting a culture of
          fitness, teamwork, and sportsmanship. We encourage students to
          participate in various indoor and outdoor sports, enhancing their
          overall well-being.
        </p>

        <h2 className="text-lg sm:text-xl text-green-800 font-semibold mt-6 mb-2">
          🏆 Events
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          <li>Intercollege Kho-Kho Competition organized in the college campus.</li>
          <li>Students participate in inter-college sports events.</li>
          <li>Outdoor sports include Badminton, Kabaddi, Basketball, and Volleyball.</li>
        </ul>

        <h2 className="text-lg sm:text-xl text-green-800 font-semibold mt-6 mb-2">
          🏟️ Facilities
        </h2>
        <p className="text-justify text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Our college provides well-maintained sports facilities, including a
          spacious playground, a basketball court, an indoor playroom for Table
          Tennis, Chess, and Carrom, as well as dedicated coaching staff.
        </p>

        <h2 className="text-lg sm:text-xl text-green-800 font-semibold mt-6 mb-4">
          📸 Image Gallery
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["sports2.jpg", "sports4.jpg", "sport5.jpg", "sport6.jpg"].map((img, idx) => (
            <img
              key={idx}
              src={`/images/${img}`}
              alt={`Sports ${idx + 1}`}
              className="w-[140px] sm:w-[180px] md:w-[200px] h-[120px] sm:h-[140px] md:h-[150px] object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsClub;

