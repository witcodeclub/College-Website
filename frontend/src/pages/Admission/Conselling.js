import React from "react";

function Counselling() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#2c3e50",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const sectionStyle = {
    background: "#e8f5e9",
    padding: "15px",
    marginBottom: "20px",
    borderLeft: "5px solid #2c3e50",
    borderRadius: "8px",
  };

  const headingStyle = {
    color: "#2c3e50",
    fontSize: "20px",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const noteStyle = {
    fontStyle: "italic",
    color: "#e74c3c",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Counselling & Admission</h1>

      {/* Overview Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Overview</h2>
        <p style={textStyle}>
          The counselling process is conducted for candidates who qualify for admission based on the entrance exam.
          It includes seat allocation, document verification, and final admission confirmation.
        </p>
        <p style={textStyle}><strong>Venue:</strong> APJ Abdul Kalam Women's Institute of Technology</p>
      </div>

      {/* Counselling Procedure */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Admission Procedure</h2>
        <ol style={textStyle}>
          <li><strong>Seat Allotment (Online):</strong> Conducted through the Bihar portal based on merit.</li>
          <li><strong>Document Verification:</strong> Candidates must present original documents for verification.</li>
          <li><strong>Fee Payment:</strong> Required fees must be paid to confirm admission.</li>
          <li><strong>Final Admission Confirmation:</strong> Once all steps are complete, admission is granted.</li>
        </ol>
      </div>

      {/* Required Documents */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Required Documents</h2>
        <ul style={textStyle}>
          <li>CAT-2024 Admit Card (Original)</li>
          <li>Matriculation Mark Sheet & Certificate</li>
          <li>+2 / I.Sc. Mark Sheet, Certificate & Admit Card</li>
          <li>Migration Certificate (if applicable)</li>
          <li>College/School Leaving Certificate</li>
          <li>Character Certificate</li>
          <li>Caste Certificate (For reserved category candidates)</li>
          <li>Residential Certificate</li>
          <li>Photocopy of Certificate for University Ward / NRI Quota</li>
        </ul>
        <p style={noteStyle}>
          <strong>Note:</strong> Original documents will be returned after verification.
        </p>
      </div>

      {/* Important Dates */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Important Dates</h2>
        <ul style={textStyle}>
          <li><strong>Seat Allotment Result:</strong> [To be announced]</li>
          <li><strong>Document Verification:</strong> [To be announced]</li>
          <li><strong>Final Admission Confirmation:</strong> [To be announced]</li>
        </ul>
      </div>
    </div>
  );
}

export default Counselling;
