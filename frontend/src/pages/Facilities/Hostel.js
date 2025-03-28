import React from "react";

const Hostel = () => {
  const pageStyle = {
    backgroundColor: "#e6f4ea", // Light green background
    padding: "50px 20px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    textAlign: "justify",
  };

  const headingStyle = {
    color: "#136d25", // Dark Green Heading
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Hostel</h2>
        <p style={textStyle}>
          <strong>APJAKWIT</strong> has three safe and secure in-campus Hostels with an approximate capacity of 200. 
          Two hostels are in the Institute campus, while one is in the University Campus at a walking distance of 300 meters approx. 
          All hostels have good lodging and boarding facilities with power backup available round the clock.
        </p>
      </div>
    </div>
  );
};

export default Hostel;
