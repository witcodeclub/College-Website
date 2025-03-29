import React from "react";

function Eligibility() {
  const containerStyle = {
    padding: "40px",
    backgroundColor: "#e6f2e6", // Light green background
    textAlign: "left",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "20px auto",
    
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#1B3B6F", // Dark blue title
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "1.2rem",
    color: "#333",
    lineHeight: "1.6",
  };

  const listStyle = {
    marginLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Eligibility Criteria</h1>
      <p style={textStyle}>
        Admission to the four-year B.Tech course in IT and CS Engineering for the Academic Session is open to all girls, women, and students who have passed one of the following:
      </p>
      <ul style={{ ...textStyle, ...listStyle }}>
        <li><b>Academic Requirements:</b> 
          Must have passed either 10+2 or an equivalent exam from a recognized university, board, or council with:
          <ul>
            <li>Physics, Chemistry, Mathematics, and English (PCMD)</li>
            <li>Physics, Chemistry, Mathematics, Biology, and English (PCMDE)</li>
          </ul>
        </li>
       
        <li>
          <b>Minimum Marks Requirement:</b> 
          Candidates must have at least <b>45% aggregate marks</b> in PCM (Physics, Chemistry, and Mathematics) together.
          <br />
          <b>Reserved category candidates</b> must have at least <b>40%</b> in PCM.
        </li>
        <li>
          <b>English Requirement:</b> 
          Students should have passed English at the 10+2 level.
        </li>
        <li>
          <b>Eligibility for Entrance Exam:</b> 
          Candidates appearing in the qualifying exam are eligible to appear in the 
          <b>Combined Admission Test (CAT 2022)</b>.
        </li>
      </ul>
    </div>
  );
}

export default Eligibility;
