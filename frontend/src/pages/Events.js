import React, { useEffect, useState } from "react";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // slight delay for animation
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
      style={{
        padding: "60px 20px",
        background: "#f5f5f5",
        minHeight: "100vh",
        transition: "opacity 1s ease-in-out",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <h1 style={{
        textAlign: "center",
        color: "#006400",
        marginBottom: "40px",
        fontSize: "38px",
        borderBottom: "3px solid #006400",
        display: "inline-block",
        paddingBottom: "10px"
      }}>
        Events in WIT
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {eventsData.map((event, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              animation: `fadeInUp 0.6s ease ${index * 0.2}s both`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 100, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3 style={{ color: "#006400", marginBottom: "10px" }}>{event.title}</h3>
            <p style={{ fontWeight: "bold", color: "#444" }}>{event.date}</p>
            <p style={{ color: "#666", marginTop: "8px" }}>{event.description}</p>
          </div>
        ))}
      </div>

      {/* Keyframe animation using inline style tag */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Events;
