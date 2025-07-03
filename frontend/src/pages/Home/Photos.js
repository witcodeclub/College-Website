import React, { useState, useRef } from "react";

const imageUrls = [
  "/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg",
  "/images/img4.jpg", "/images/codin quest image cer.jpg","/images/img5.jpg", "/images/img6.jpg",
  "/images/img7.jpg", "/images/img8.jpg", "/images/img9.jpg",
   
];

const Photos = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setScrollIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const startAutoScroll = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setScrollIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 1500);
    }
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Life At WIT</h1>
      <div style={galleryContainer}>
        <button onClick={handlePrev} style={navButton}>&lt;</button>
        <div
          style={imageWrapper}
          onMouseEnter={() => {
            startAutoScroll();
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            stopAutoScroll();
            setIsHovered(false);
          }}
        >
          <img
            src={imageUrls[scrollIndex]}
            alt="Gallery"
            style={{
              ...imageStyle,
              filter: isHovered ? "brightness(100%)" : "brightness(100%)", // force no darkening
              boxShadow: "none", // no shadow
            }}
          />
        </div>
        <button onClick={handleNext} style={navButton}>&gt;</button>
      </div>
    </div>
  );
};

// Inline CSS
const containerStyle = {
  textAlign: "center",
  padding: "20px",
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
  overflow: "hidden",
};

const imageStyle = {
  width: "80%",
  height: "500px",
  objectFit: "cover",
  borderRadius: "10px",
  transition: "transform 0.5s ease, filter 0.3s ease",
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
