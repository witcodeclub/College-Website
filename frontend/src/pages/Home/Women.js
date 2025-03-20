import React, { useState } from "react";

const womenLeaders = [
  {
    name: "Shahwaar Aafreen",
    company: "Infosys as a Java Full Stack Developer",
    image: "/images/Shahwaar.jpg",
    video: "/videos/Shahwaar.mp4",
  },
  {
    name: "Gita Gopinath",
    company: "IMF Deputy Director",
    image: "/images/gita.jpg",
    video: "/videos/gita.mp4",
  },
  {
    name: "Roshni Nadar",
    company: "Chairperson, HCL Tech",
    image: "/images/roshni.jpg",
    video: "/videos/roshni.mp4",
  },
  {
    name: "Kiran Mazumdar-Shaw",
    company: "Founder, Biocon",
    image: "/images/kiran.jpg",
    video: "/videos/kiran.mp4",
  },
];

const Women = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={containerStyle}>
      {/* Heading */}
      <h1 style={headingStyle}>Women Who Lead</h1>

      {/* Card Container */}
      <div style={cardContainerStyle}>
        {womenLeaders.map((leader, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Video or Image */}
            {hoveredIndex === index ? (
              <video
                src={leader.video}
                autoPlay
                loop
                style={videoStyle}
              />
            ) : (
              <img src={leader.image} alt={leader.name} style={imageStyle} />
            )}

            {/* Name & Company */}
            <div style={infoStyle}>
              <h2 style={nameStyle}>{leader.name}</h2>
              <p style={companyStyle}>{leader.company}</p>
            </div>
          </div>
        ))}
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

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const infoStyle = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  color: "white",
  padding: "10px",
  textAlign: "center",
};

const nameStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const companyStyle = {
  fontSize: "14px",
};

// Export Component
export default Women;
