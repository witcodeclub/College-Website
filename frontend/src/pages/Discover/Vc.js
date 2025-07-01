import React, { useState } from "react";

function Vc() {
  const [hover, setHover] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    maxWidth: "1000px",
    margin: "auto",
    gap: "20px",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "230px",
    height: "280px",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const infoStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff",
    padding: "10px",
    fontSize: "14px",
    textAlign: "center",
    display: hover ? "block" : "none",
    transition: "all 0.3s ease-in-out",
  };

  const messageStyle = {
    flex: 1,
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
    textAlign: "justify",
  };

  return (
    <div style={containerStyle}>
      <div
        style={imageContainerStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        title="Hover to see name"
      >
        <img src="/images/vc.jpeg" alt="Vice Chancellor" style={imageStyle} />
        <div style={infoStyle}>
          <strong>Prof. Sanjay Kumar Chaudhary</strong>
          <br />
          Vice Chancellor, LNMU
        </div>
      </div>

      <div style={messageStyle}>
        The establishment of APJAKWIT in this region is a step forward in the
        context of promoting technical education, especially for the upliftment
        of women of Mithila in particular and India in general. Students of
        this Institute have proven merit to excel in their field. We can’t
        negate that knowledge is the real power in the present age of knowledge
        technology and in the process, the women technocrats have a remarkable
        impact on the overall economic transformation of the country. The
        APJAKWIT has proved to be a unique Institute only for the girl
        students, aimed at empowering them to face the changes and challenges
        of the 21st century. I wish the upcoming and budding students enrolled
        in the institute a bright and prosperous career.
      </div>
    </div>
  );
}

export default Vc;
