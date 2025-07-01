

import React from "react";
import syllabusData from "../../data/syllabus.json";

const Syllabus = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Syllabus Library</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {syllabusData.map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              textAlign: "center"
            }}
          >
            <h2 style={{ color: "#2c3e50" }}>{item.course}</h2>
            <p style={{ margin: "1rem 0", color: "#555" }}>
              Total Semesters: {item.semesters}
            </p>
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#3498db",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none"
              }}
            >
              View Syllabus PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
