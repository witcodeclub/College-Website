import React from "react";

const Cafeteria = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          College Cafeteria
        </h1>

        {/* Main Description */}
        <p className="text-base text-gray-700 leading-relaxed mb-4 text-center sm:text-justify">
          The cafeteria is open full-time, offering snacks, tea, coffee, and other items at affordable prices.
          It has a comfortable seating space for students and faculty to relax and enjoy their meals.
        </p>

        {/* Facilities */}
        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">Our Facilities</h3>
        <p className="text-base text-gray-700 leading-relaxed text-center sm:text-justify">
          Our cafeteria provides a clean and hygienic environment with a variety of food options.
          From quick bites to full meals, students can enjoy fresh and delicious food throughout the day.
        </p>

        {/* Images */}
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          {["/images/cafe1.jpg", "/images/cafe2.jpg", "/images/cafe3.jpg", "/images/cafe4.jpg"].map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[22%] h-40 sm:h-44 bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={process.env.PUBLIC_URL + image}
                alt={`Cafeteria ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;


