import React from "react";

const LabFacilities = () => {
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#fff", // Light blue gradient for a fresh look
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the content vertically
  };

  const titleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#28a745", // Green color for the title
    marginBottom: "20px",
    textAlign: "center",
  };

  const mainCardStyle = {
    width: "80%", // Set the width of the main card
    maxWidth: "900px", // Limit the maximum width
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
    textAlign: "left", // Align text to the left
  };

  const contentStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const cardStyle = {
    width: "20%", // Adjust the width to fit 4 images in one row
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    background: "#ffffff",
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
      <div style={titleStyle}>
        Labs
      </div>

      <div style={mainCardStyle}>
        <div style={contentStyle}>
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
    </div>
  );
};

export default LabFacilities;
