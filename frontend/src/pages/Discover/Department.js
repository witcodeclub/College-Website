import React from "react";

const departments = [
  { name: "Computer Science & Engineering", icon: "💻" },
  { name: "Information Technology(IT)", icon: "📡" },
  { name: "Bioinformatics Engineering", icon: "🧬" },
  { name: "Bachelor of Computer Applications (BCA)", icon: "🖥️" },
  { name: "Master of Computer Applications (MCA)", icon: "🎓" },
];

function Department() {
  const containerStyle = {
    textAlign: "center",
    padding: "40px",

  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "green",
    marginBottom: "20px",
  };

  const descriptionStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"30px"
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    background:"#C8E6C9"
  };

  const iconStyle = {
    fontSize: "3rem",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Departments</h1>
      <p style={descriptionStyle}>
        Dr. APJ Abdul Kalam Women's Institute of Technology provides science-based engineering education to empower women in technology and research. The curriculum offers broad-based knowledge, fostering lifelong learning and exploration. The activities of departments include teaching at all levels and advanced research.
      </p>
      <div style={gridStyle}>
        {departments.map((dept, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <div style={iconStyle}>{dept.icon}</div>
            <h2>{dept.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;
