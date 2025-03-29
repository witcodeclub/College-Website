import React from "react";

const LabFacilities = () => {
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #d4edda, #a8df8e)"
  };

  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "15px",
  };

  const cardStyle = {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    background: "#ffffff"
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
    borderRadius: "5px",
  };

  const labDescriptions = [
    "Electrical/Electronics Lab",
    "Electrical/Electronics Lab",
    "Computer Lab",
    "Computer Lab"
  ];

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <p>
          Dr. A.P.J. Abdul Kalam Women's Institute of Technology provides state-of-the-art
          laboratory facilities to enhance practical learning and research. The institution
          houses two fully functional computer labs equipped with modern computing resources
          to facilitate programming, software development, and AI research. In addition,
          the Electrical/Electronics Lab enables hands-on experience with circuits, digital
          electronics, and embedded systems. The Mechanical Lab is well-equipped for thermal,
          fluid mechanics, and automation experiments. A dedicated Workshop Lab allows students
          to gain practical skills in machining, welding, and fabrication. Moreover, the
          Chemistry and Physics Labs offer a range of advanced equipment and experimental
          setups to support scientific research and innovation.
        </p>
      </div>

      <div style={cardContainer}>
        {["lab1.jpg", "lab2.jpg", "lab3.jpg", "lab4.jpg"].map((img, index) => (
          <div key={index} style={cardStyle}>
            <img src={`/images/${img}`} alt={`Lab ${index + 1}`} style={imgStyle} />
            <p>{labDescriptions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabFacilities;