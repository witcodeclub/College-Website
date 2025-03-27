import React from "react";

function Legacy() {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    textAlign: "left",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "1000px",
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft:"90px"
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#2e7d32",
    marginBottom: "20px",
    textAlign: "center",
  };

  const textStyle = {
    fontSize: "1.2rem",
    color: "#333",
    lineHeight: "1.6",
    textAlign: "justify",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Legacy</h1>
      <p style={textStyle}>
        This college was inaugurated by the then President of India, Dr. APJ Abdul Kalam in 2005. It is on the main LNMU Campus, in a separate compound that originally encompassed 10 acres but has since been expanded to 25 acres.
      </p>
      <p style={textStyle}>
        The Lalit Narayan Mithila University has a campus spread over an area of 232 acres that was made available by the Raj family of Darbhanga through land acquisition. The campus is named Kameshwar Nagar in memory of the last Maharaja of Darbhanga, Dr. Sir Kameshwara Singh.
      </p>
      <p style={textStyle}>
        The Dr. APJ Abdul Kalam Women's Institute of Technology (APJAKWIT), a unit of Lalit Narayan Mithila University in Darbhanga, Bihar, was established in 2004 as an engineering college exclusively for women and was inaugurated by then President of India, Dr. APJ Abdul Kalam in 2005.
      </p>
    </div>
  );
}

export default Legacy;
