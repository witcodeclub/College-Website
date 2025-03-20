import react from "react";
const Contact = () => {
    return (
      <div style={{ padding: "40px", backgroundColor: "#f5f5f5", textAlign: "center" }}>
        <h2>Contact Us</h2>
  
        {/* Contact Form */}
        <div style={{ maxWidth: "500px", margin: "20px auto", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <select style={inputStyle}>
            <option>General Inquiry</option>
            <option>Admission</option>
            <option>Placement</option>
            <option>WitCodingClub</option>
          </select>
          <textarea placeholder="Your Message" rows="4" style={inputStyle}></textarea>
          <button style={buttonStyle}>Submit</button>
        </div>
      </div>
    );
  };
  
  // Styles
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  };
  
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#047857",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    width: "100%"
  };
  
  export default Contact;
  