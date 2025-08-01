import React, { useEffect, useState } from "react";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const eventImages = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
    "/images/event4.jpg",
    "/images/event5.jpg",
    "/images/event6.jpg",
    "/images/event7.jpg",
    "/images/event8.jpg",
    "/images/code club.jpg",
    "/images/event10.jpg",
    "/images/event11.jpg",
    "/images/img17.jpg",
    "/images/img18.jpg",
    "/images/img19.jpg",
    "/images/img20.jpg",
    "/images/img21.jpg",
    "/images/img22.jpg",
    "/images/img23.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-pink-50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ======== Header Section (Like Cultural Cell) ======== */}
      <div className="bg-emerald-500 text-center py-10 md:py-12 shadow-md animate-headerSlide">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Welcome to the Events Gallery
        </h1>
        <p className="mt-2 text-white text-base md:text-lg tracking-wide">
          Relive the moments of celebration, innovation, and achievements
        </p>
      </div>

      {/* ======== Gallery Section ======== */}
      <div className="py-10 px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {eventImages.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 ease-in-out bg-white"
              style={{
                animation: "zoomIn 0.6s ease forwards",
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              <img
                src={src}
                alt="event"
                className="w-full h-40 sm:h-48 md:h-56 object-cover hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ======== Custom Animations ======== */}
      <style>
        {`
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes headerSlide {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-headerSlide {
            animation: headerSlide 1s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Events;



