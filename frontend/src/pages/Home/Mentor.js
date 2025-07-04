import React from "react";

const Mentor = () => {
  return (
    <div style={containerStyle}>
      {/* Heading */}
      <h1 style={headingStyle}>Our Mentors</h1>

      {/* Mentor Cards */}
      <div style={cardContainerStyle}>
        {/* Vice-Chancellor Card */}
        <div style={cardStyle}>
          <img src="/images/vc.jpeg" alt="Vice-Chancellor" style={imageStyle} />
          <div className="mentor-overlay">
            <h2 style={titleStyle}>VICE-CHANCELLOR</h2>
            <p style={nameStyle}>Prof. Sanjay Kumar Choudhary</p>
          </div>
        </div>

        {/* Director Card */}
        <div style={cardStyle}>
          <img src="/images/director.jpeg" alt="Director" style={imageStyle} />
          <div className="mentor-overlay">
            <h2 style={titleStyle}>DIRECTOR</h2>
            <p style={nameStyle}>Dr. Ajay Nath Jha</p>
          </div>
        </div>

        {/* Registrar Card */}
        <div style={cardStyle}>
          <img src="/images/registrar.jpeg" alt="Registrar" style={imageStyle} />
          <div className="mentor-overlay">
            <h2 style={titleStyle}>REGISTRAR ,LNMU</h2>
            <p style={nameStyle}>Dr. Divya Rani Hansda</p>
          </div>
        </div>

         {/* Deputy Registrar Card */}
        <div style={cardStyle}>
          <img src="" alt="Deputy Registrar" style={imageStyle} />
          <div className="mentor-overlay">
            <h2 style={titleStyle}>DEPUTY REGISTRAR</h2>
            <p style={nameStyle}>Priyanka Rai</p>
          </div>
        </div>

        {/* Faculty Card */}
        <div style={cardStyle}>
          <img src="/images/nirmal.jpeg" alt="Faculty" style={imageStyle} />
          <div className="mentor-overlay">
            <h2 style={titleStyle}>MENTOR</h2>
            <p style={nameStyle}>Dr. Nirmal Kumar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline CSS
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",
  color: "#2c3e50",
};

// ✅ All cards will be in a single row
const cardContainerStyle = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const cardStyle = {
  position: "relative",
  width: "250px",
  height: "320px",
  overflow: "hidden",
  borderRadius: "10px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "filter 0.3s ease-in-out",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "lightgreen",
  marginBottom: "5px",
};

const nameStyle = {
  fontSize: "14px",
  textAlign: "center",
  color: "white",
};

// Hover effect using CSS-in-JS
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  .mentor-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .mentor-overlay:hover {
    opacity: 1;
  }

  img:hover {
    filter: brightness(50%);
  }
`;
document.head.appendChild(styleTag);

export default Mentor;
