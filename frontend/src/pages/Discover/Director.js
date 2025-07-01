import React, { useState } from "react";

function Director() {
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
    width: "220px",
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
        <img src="/images/director.jpeg" alt="Director" style={imageStyle} />
        <div style={infoStyle}>
          <strong>Dr. Ajay Nath Jha</strong><br />
          Director, APJAKWIT
        </div>
      </div>

      <div style={messageStyle}>
        Dr. APJ Abdul Kalam Women’s Institute of Technology (Formerly known as
        Women’s Institute of Technology) (APJAKWIT), a unit of L. N. Mithila
        University, Darbhanga is engaged in imparting Engineering and Technical
        education. It is a golden dream of the then president, Bharat Ratna,
        Dr. A. P. J. Abdul Kalam who inaugurated this institute on 30th of
        December 2005. It is a unique institution of North-East India
        exclusively for girls offering degree level B.Tech. courses in
        Information Technology and Computer Science Engineering and a Master’s
        degree in Computer Applications (MCA). Its well-equipped laboratories,
        Wi-Fi campus, automated library, dedicated faculty members, and
        availability of a girls’ hostel enable students to attain the highest
        level of academic excellence. A new Administrative cum Academic
        building is under construction. Its alumni are placed in multinational
        corporations in India and abroad. I wish a successful and bright
        technical career to students who succeed in getting admission to
        APJAKWIT.
      </div>
    </div>
  );
}

export default Director;

