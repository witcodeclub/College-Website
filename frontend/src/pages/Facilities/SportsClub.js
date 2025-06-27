import React from "react";

const Sports = () => {
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#fff", // Light greyish-blue gradient
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the content
  };

  const titleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#28a745", // Green color for the title
    marginBottom: "20px",
    textAlign: "center",
  };

  const mainCardStyle = {
    width: "80%", // Set the width of the main card
    maxWidth: "900px", // Limit the maximum width
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
    textAlign: "left", // Align text to the left
  };

  const contentStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const cardStyle = {
    width: "25%", // Adjust the width to fit images in a single row
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    background: "#ffffff",
  };

  const imgStyle = {
    width: "100%",
    height: "170px",
    borderRadius: "5px",
  };

  

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>
        College Sports Facilities
      </div>

      <div style={mainCardStyle}>
        <div style={contentStyle}>
          <p>
            Our college provides excellent sports facilities for students to stay active and engaged. 
            We have both indoor and outdoor game areas to ensure students have ample opportunities to 
            enjoy their favorite sports.
          </p>
          <h3 style={{ color: "#28a745" }}>Indoor Play Area</h3>
          <p>
            The indoor play area is designed for students who enjoy indoor games. We offer facilities 
            for Table Tennis, Carrom Board, and Chess. These games help students enhance their focus, 
            strategic thinking, and reflexes while having fun.
          </p>
          <h3 style={{ color: "#28a745" }}>Outdoor Sports Ground</h3>
          <p>
            For outdoor sports enthusiasts, our college has a spacious ground where students can play 
            Badminton, Kho-Kho, Kabaddi, and many other outdoor games. The ground is well-maintained, 
            providing a perfect environment for students to engage in sports activities and enhance 
            their physical fitness.
          </p>
        </div>

        <div style={cardContainer}>
          {["sports1.jpg", "sports2.jpg", "sports4.jpg"].map((img, index) => (
            <div key={index} style={cardStyle}>
              <img src={`/images/${img}`} alt={`Sports ${index + 1}`} style={imgStyle} />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
