import React, { useEffect, useState } from "react";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const eventsData = [
    {
      title: "Tech Fest 2024",
      date: "March 5, 2024",
      description: "A 2-day technical fest with coding, robotics, and gaming competitions.",
    },
    {
      title: "Cultural Carnival",
      date: "April 12, 2024",
      description: "Dance, drama, singing, and traditional performances across departments.",
    },
    {
      title: "Annual Sports Meet",
      date: "January 28, 2024",
      description: "Track events, volleyball, chess, and kabaddi championships.",
    },
  ];

  return (
    <div
      className={`py-16 px-4 md:px-10 min-h-screen bg-gray-100 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <h1 className="text-center text-green-800 text-4xl font-bold border-b-4 border-green-700 inline-block pb-2 mb-10">
        Events in WIT
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in`}
            style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "both" }}
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">{event.title}</h3>
            <p className="text-sm font-medium text-gray-700">{event.date}</p>
            <p className="text-gray-600 mt-2">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Inline keyframes animation */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Events;

