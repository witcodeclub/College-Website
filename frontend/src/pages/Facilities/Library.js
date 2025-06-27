import React from "react";

const LibraryCard = () => {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "10px", 
      padding: "20px", 
      maxWidth: "900px", 
      margin: "20px auto", 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "green" }}>Library</h2>
      <p style={{ fontSize: "14px", color: "#7f8c8d" }}>
        📚 <strong>Functional Library:</strong> APJAKWIT | 📖 <strong>Courses Covered:</strong> CS, IT, BCA, MCA, BI, and many more.
      </p>
      <p style={{ lineHeight: "1.6", color: "#34495e" }}>
        The library at <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology</strong> is a well-equipped and functional
        resource center for students. It houses a vast collection of books covering a wide range of subjects including
        <strong>Computer Science, Information Technology, BCA, MCA, BI, and many other disciplines.</strong>
      </p>
      <div style={{ backgroundColor: "#ecf0f1", padding: "10px", borderRadius: "8px", marginTop: "15px" }}>
        <h3 style={{ color: "#2c3e50" }}>📖 Library Facilities:</h3>
        <p style={{ color: "#34495e" }}>
          The library provides a spacious reading area, allowing students to study in a peaceful environment.
          It includes a dedicated <strong>Reading Room</strong> with comfortable seating arrangements, enhancing
          the overall learning experience for students.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <img src="/images/lib.jpg" alt="Library" style={{ width: "40%", borderRadius: "5px", marginTop: "2px", height: "400px", cover: "20%"}} />
        <img src="/images/lib1.jpg" alt="Library Interior" style={{ width: "40%", borderRadius: "5px", height: "400px", marginTop: "2px"}} />
      </div>
      <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "15px", color: "#16a085" }}>
        📌 A Hub of Knowledge and Learning for Future Innovators.
      </p>
    </div>
  );
};

export default LibraryCard;
