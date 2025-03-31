import React, { useState } from "react";


const imageUrls = [
  "/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg",
  "/images/img4.jpg", "/images/img5.jpg", "/images/img6.jpg",
  "/images/img7.jpg", "/images/img8.jpg", "/images/img9.jpg",
  "/images/img10.jpg" 
];

const Photos = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setScrollIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Life At WIT</h1>
      <div style={galleryContainer}>
        <button onClick={handlePrev} style={navButton}>&lt;</button>
        <div style={imageWrapper}>
          <img src={imageUrls[scrollIndex]} alt="Gallery" style={imageStyle} />
        </div>
        <button onClick={handleNext} style={navButton}>&gt;</button>
      </div>
    </div>
  );
};

// Inline CSS Styles
const containerStyle = {
  textAlign: "center",
  padding: "20px",
  // backgroundColor: "#f9f9f9",
};

const headingStyle = {
  fontSize: "40px",
  fontWeight: "bold",
  color: "green",
  marginBottom: "20px",
};

const galleryContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

const imageWrapper = {
  width: "80%",
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  width: "80%", 
  height: "500px",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
  transition: "none",
};

const navButton = {
  backgroundColor: "green",
  color: "white",
  border: "none",
  padding: "10px 20px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "5px",
};

export default Photos;
