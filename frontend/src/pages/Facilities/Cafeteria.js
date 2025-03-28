import React from "react";

const Cafeteria = () => {
  return (
    <div style={{ backgroundColor: "#d4edda", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "green", textAlign: "center" }}>College Cafeteria</h2>
      <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
        The cafeteria is open full-time, offering snacks, tea, coffee, and other items at affordable prices. 
        It has a comfortable seating space for students and faculty to relax and enjoy their meals.
      </p>
      
      <h3 style={{ color: "green" }}>Our Facilities</h3>
      <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
        Our cafeteria provides a clean and hygienic environment with a variety of food options. 
        From quick bites to full meals, students can enjoy fresh and delicious food throughout the day.
      </p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {["/images/cafe1.jpg", "/images/cafe2.jpg", "/images/cafe3.jpg", "/images/cafe4.jpg"].map((image, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              height: "180px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer"
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={process.env.PUBLIC_URL + image} alt="Cafeteria" style={{ width: "100%", height: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cafeteria;
