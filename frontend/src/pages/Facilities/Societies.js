import React from "react";

const Societies = () => {
  const pageStyle = {
    background: "linear-gradient(to right, #d4edda, #a8df8e)", // Soft Green Gradient
    padding: "50px 20px",
    minHeight: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    maxWidth: "1100px",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#136d25",
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "30px",
    textTransform: "uppercase",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHover = {
    transform: "scale(1.05)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  const societies = [
    {
      name: "CodingClub",
      description: "A hub for coding enthusiasts, organizing hackathons, coding challenges, and tech events.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sports Club",
      description: "Encourages sports activities, tournaments, and fitness programs for students.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Cultural Cell",
      description: "Organizes cultural events, festivals, and artistic performances to celebrate diversity.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Training & Placement Cell",
      description: "Guides students for career opportunities, placements, and internships.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Societies</h2>
        <div style={gridStyle}>
          {societies.map((society, index) => (
            <div key={index} style={{ ...cardStyle, ":hover": cardHover }}>
              <img src={society.image} alt={society.name} style={imageStyle} />
              <h3 style={{ color: "#136d25", marginBottom: "8px" }}>{society.name}</h3>
              <p style={{ fontSize: "14px", color: "#333" }}>{society.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Societies;

