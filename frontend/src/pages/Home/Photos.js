import React, { useEffect, useState } from "react";

const imageUrls = [
  "/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg",
  "/images/img4.jpg", "/images/img5.jpg", "/images/img6.jpg",
  "/images/img7.jpg", "/images/img8.jpg", "/images/img9.jpg",
  "/images/img10.jpg"
];

const Photos = () => {
  const [scrollDone, setScrollDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScrollDone(true), 4000); // Stop scrolling after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Latest Images</h1>

      <div style={galleryContainer}>
        {[...Array(2)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              ...imageRow,
              transform: scrollDone ? "translateX(0%)" : rowIndex % 2 === 0 ? "translateX(-100%)" : "translateX(100%)",
              transition: "transform 3s ease-out",
            }}
          >
            {imageUrls.slice(rowIndex * 5, rowIndex * 5 + 5).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} style={imageStyle} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS Styles
const containerStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9",
};

const headingStyle = {
  fontSize: "40px",
  fontWeight: "bold",
  color: "green",
  marginBottom: "20px",
};

const galleryContainer = {
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const imageRow = {
  display: "flex",
  gap: "15px",
  whiteSpace: "nowrap",
};

const imageStyle = {
  width: "240px",  // Increased size
  height: "160px", // Increased size
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
};

export default Photos;
