import React from "react";

const Societies = () => {
  const pageStyle = {
    background: "#fff", 
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
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  };

  const cardHover = {
    transform: "scale(1.05)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
  };

  const logoStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  const societies = [
    {
      name: "Coding Club",
      description:
        "Promotes a strong coding environment by organizing hackathons, coding competitions, and skill-building sessions.",
      logo: "/images/codingclub_logo.png",
    },
    {
      name: "Sports Club",
      description:
        "Encourages students to stay active by hosting tournaments, fitness challenges, and inter-college sports events.",
      logo: "/images/sportsclub_logo.png",
    },
    {
      name: "Cultural Cell",
      description:
        "Celebrates diversity through cultural festivals, artistic performances, and music & dance events.",
      logo: "/images/culturalcell_logo.png",
    },
    {
      name: "Training & Placement Cell",
      description:
        "Guides students in career planning, internship opportunities, and professional development.",
      logo: "/images/placementcell_logo.png",
    },
  ];

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Societies</h2>
        <div style={gridStyle}>
          {societies.map((society, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <img src={society.logo} alt={society.name} style={logoStyle} />
              <h3 style={{ color: "#136d25", marginBottom: "10px" }}>{society.name}</h3>
              <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.5" }}>
                {society.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Societies;
