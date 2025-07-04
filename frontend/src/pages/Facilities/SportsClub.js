import React from "react";

const Sports = () => {
  const images = ["sports1.jpg", "sports2.jpg", "sports4.jpg"];

  return (
    <div className="px-5 py-10 bg-white font-sans flex flex-col items-center">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
        College Sports Facilities
      </h2>

      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md mb-8 text-left">
        <div className="text-lg text-gray-700 leading-relaxed mb-6">
          <p className="mb-4">
            Our college provides excellent sports facilities for students to stay active and engaged. 
            We have both indoor and outdoor game areas to ensure students have ample opportunities to 
            enjoy their favorite sports.
          </p>

          <h3 className="text-green-600 text-xl font-semibold mb-2">Indoor Play Area</h3>
          <p className="mb-4">
            The indoor play area is designed for students who enjoy indoor games. We offer facilities 
            for Table Tennis, Carrom Board, and Chess. These games help students enhance their focus, 
            strategic thinking, and reflexes while having fun.
          </p>

          <h3 className="text-green-600 text-xl font-semibold mb-2">Outdoor Sports Ground</h3>
          <p>
            For outdoor sports enthusiasts, our college has a spacious ground where students can play 
            Badminton, Kho-Kho, Kabaddi, and many other outdoor games. The ground is well-maintained, 
            providing a perfect environment for students to engage in sports activities and enhance 
            their physical fitness.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[31%] bg-white border border-gray-200 p-3 rounded-lg shadow hover:shadow-md transition duration-300 text-center"
            >
              <img
                src={`/images/${img}`}
                alt={`Sports ${index + 1}`}
                className="w-full h-44 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;

