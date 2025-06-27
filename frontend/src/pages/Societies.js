import React from "react";

const societies = [
  {
    name: "Coding Club",
    description: "Empowering students with problem-solving and software development skills.",
    img: "/images/coding-club.jpg",
  },
  {
    name: "Cultural Cell",
    description: "Celebrating traditions through dance, music, art, and drama.",
    img: "/images/cultural-cell.jpg",
  },
  {
    name: "Placement Cell",
    description: "Guiding and training students for career opportunities and placements.",
    img: "/images/placement-cell.jpg",
  },
  {
    name: "Imaginative Society",
    description: "A creative corner for thinkers, designers, poets, and storytellers.",
    img: "/images/imaginative.jpg",
  },
];

const Societies = () => {
  return (
    <div style={{ padding: "50px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{
        textAlign: "center",
        color: "#006400",
        fontSize: "36px",
        marginBottom: "40px",
        borderBottom: "2px solid #006400",
        display: "inline-block",
        paddingBottom: "8px"
      }}>
        Societies at WIT
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px"
      }}>
        {societies.map((society, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={society.img}
              alt={society.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "#006400", marginBottom: "10px" }}>{society.name}</h3>
              <p style={{ color: "#444" }}>{society.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Societies;
