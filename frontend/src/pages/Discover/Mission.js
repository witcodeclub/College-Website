import React from "react";

function Mission() {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "40px",
    textAlign: "left",
    color:"Green"
  };

  const textStyle = {
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "800px",
    color:"#1B3B6F"
  };

  const imageStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    marginRight: "20px",
  };

  return (
    <div style={containerStyle}>
      <img 
        src="/images/APJK.png" 
        alt="Dr. APJ Abdul Kalam" 
        style={imageStyle} 
      />
      <div>
        <h1>Mission & Vision</h1>
        <p style={textStyle}>
          "If one educates a woman, an individual is educated. If one educates a woman, the whole family is educated." - Dr. APJ Abdul Kalam
        </p>
        <p style={textStyle}>
          The mission of APJAKWIT, an engineering college exclusively for women, is to produce at least one woman technocrat from every village of Bihar in order to empower the family, society, and nation.
        </p>
      </div>
    </div>
  );
}

export default Mission;
