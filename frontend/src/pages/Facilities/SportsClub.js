import React from "react";

const Sports = () => {
  return (
    <div style={{ background: "linear-gradient(to right, #d4edda, #a8df8e)", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "green", textAlign: "center" }}>College Sports Facilities</h2>
      <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
        Our college provides excellent sports facilities for students to stay active and engaged. We have both indoor and outdoor game areas to ensure students have ample opportunities to enjoy their favorite sports.
      </p>
      
      <h3 style={{ color: "green" }}>Indoor Play Area</h3>
      <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
        The indoor play area is designed for students who enjoy indoor games. We offer facilities for Table Tennis, Carrom Board, and Chess. These games help students enhance their focus, strategic thinking, and reflexes while having fun.
      </p>
      
      <h3 style={{ color: "green" }}>Outdoor Sports Ground</h3>
      <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
        For outdoor sports enthusiasts, our college has a spacious ground where students can play Badminton, Kho-Kho, Kabaddi, and many other outdoor games. The ground is well-maintained, providing a perfect environment for students to engage in sports activities and enhance their physical fitness.
      </p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {["/images/sports1.jpg", "/images/sports2.jpg", "/images/sports4.jpg"].map((images, index) => (
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
            <img src={process.env.PUBLIC_URL + images} alt="Playroom" style={{ width: "100%", height: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
