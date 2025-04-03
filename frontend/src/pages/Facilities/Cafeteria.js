import React from "react";

const Cafeteria = () => {
  return (
    <div style={{ background: "#fff", padding: "40px 20px", fontFamily: "Arial, sans-serif", display: "flex", justifyContent: "center" }}>
      <div style={{ background: "white", borderRadius: "10px", padding: "30px", maxWidth: "900px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <h1 style={{ color: "#136d25", textAlign: "center", marginBottom: "15px" }}>College Cafeteria</h1>
        <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
          The cafeteria is open full-time, offering snacks, tea, coffee, and other items at affordable prices. 
          It has a comfortable seating space for students and faculty to relax and enjoy their meals.
        </p>

        <h3 style={{ color: "#136d25", marginTop: "20px" }}>Our Facilities</h3>
        <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
          Our cafeteria provides a clean and hygienic environment with a variety of food options. 
          From quick bites to full meals, students can enjoy fresh and delicious food throughout the day.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px", flexWrap: "wrap" }}>
          {["/images/cafe1.jpg", "/images/cafe2.jpg", "/images/cafe3.jpg", "/images/cafe4.jpg"].map((image, index) => (
            <div
              key={index}
              style={{
                width: "180px",
                height: "170px",
                borderRadius: "10px",
                background: "#fff",
                padding: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <img src={process.env.PUBLIC_URL + image} alt="Cafeteria" style={{ width: "100%", height: "150px", borderRadius: "8px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;
