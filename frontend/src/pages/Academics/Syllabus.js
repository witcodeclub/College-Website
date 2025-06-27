import React, { useEffect, useState } from "react";

const Syllabus = () => {
  const [selectedSemester, setSelectedSemester] = useState("1");
  const [selectedBranch, setSelectedBranch] = useState("CS");
  const [syllabusData, setSyllabusData] = useState({});

  useEffect(() => {
    fetch("/data/syllabus.json")
      .then((res) => res.json())
      .then((data) => setSyllabusData(data))
      .catch((err) => console.error("Failed to load syllabus data", err));
  }, []);

  const syllabusList = syllabusData[selectedSemester]?.[selectedBranch] || [];
  const showComingSoon = ["BCA", "MCA", "BI"].includes(selectedBranch) && syllabusList.length === 0;

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Syllabus</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Semester:
          <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)} style={{ margin: "0 10px" }}>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{`Semester ${i + 1}`}</option>
            ))}
          </select>
        </label>

        <label>
          Branch:
          <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} style={{ margin: "0 10px" }}>
            <option value="CS">Computer Science</option>
            <option value="IT">Information Technology</option>
            <option value="BI">Bioinformatics</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>
        </label>
      </div>

      {syllabusList.length > 0 ? (
        syllabusList.map((subject, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <h3>{subject.code} - {subject.name}</h3>
            <ul>
              {subject.chapters.map((chapter, i) => (
                <li key={i}>{chapter}</li>
              ))}
            </ul>
            <a href={subject.pdf} download style={{ color: "blue", textDecoration: "underline" }}>
              Download PDF
            </a>
          </div>
        ))
      ) : showComingSoon ? (
        <div style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#ffe9e9",
          color: "#c0392b",
          border: "1px dashed #c0392b",
          borderRadius: "10px"
        }}>
          <h3>{selectedBranch} - Semester {selectedSemester}</h3>
          <p><strong>Syllabus Coming Soon...</strong></p>
        </div>
      ) : (
        <p>No syllabus available for selected semester and branch.</p>
      )}
    </div>
  );
};

export default Syllabus;
