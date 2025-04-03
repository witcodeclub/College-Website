import React from "react";

const SportsClub = () => {
  return (
    <div style={{ background: "#fff", padding: "40px", display: "flex", justifyContent: "center" }}>
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        maxWidth: "900px",
        width: "100%",
      }}>
        <h1 style={{ textAlign: "center", color: "#136d25", fontSize: "30px", marginBottom: "20px" }}>Sports Club</h1>
        
        <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
          The Sports Club at APJAKWIT is dedicated to promoting a culture of fitness, teamwork, and sportsmanship.
          We encourage students to participate in various indoor and outdoor sports, enhancing their overall well-being.
        </p>
        
        <h2 style={{ color: "#136d25", fontSize: "22px", marginTop: "20px" }}>🏆 Events</h2>
        <ul style={{ paddingLeft: "20px", fontSize: "16px", lineHeight: "1.6" }}>
          <li>Intercollege Kho-Kho Competition organized in the college campus.</li>
          <li>Students participate in inter-college sports events.</li>
          <li>Outdoor sports include Badminton, Kabaddi, Basketball, and Volleyball.</li>
        </ul>
        
        <h2 style={{ color: "#136d25", fontSize: "22px", marginTop: "20px" }}>🏟️ Facilities</h2>
        <p style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}>
          Our college provides well-maintained sports facilities, including a spacious playground, a basketball court,
          an indoor playroom for Table Tennis, Chess, and Carrom, as well as dedicated coaching staff.
        </p>
        
        <h2 style={{ color: "#136d25", fontSize: "22px", marginTop: "20px" }}>📸 Image Gallery</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
        <img src="/images/sports2.jpg" alt="Sports Activity" style={{ width: "200px", height: "150px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
          <img src="/images/sports4.jpg" alt="Sports Event" style={{ width: "200px", height: "150px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
          <img src="/images/sport5.jpg" alt="Sports Activity" style={{ width: "200px", height: "150px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
          <img src="/images/sport6.jpg" alt="Sports Event" style={{ width: "200px", height: "150px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
        </div>
      </div>
    </div>
  );
};

export default SportsClub;
