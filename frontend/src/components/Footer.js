
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "#ffffff", padding: "20px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: "1200px", margin: "auto" }}>
        {/* Left Section */}
        <div style={{ flex: "1", textAlign: "left", padding: "10px" }}>
          <h3>Important Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Anti Ragging</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Alumni</a></li>
            <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Placement</a></li>
          </ul>
        </div>

    
    

        {/* Center Section */}
        <div style={{ flex: "1", textAlign: "left", padding: "10px" }}>
          <h3>Location</h3>
          <p>
            <strong>WIT Darbhanga</strong>
            <br /> Kameshwaranagar,
            <br /> Darbhanga, Bihar – 846008
          </p>
        </div>

        {/* Right Section - Social Media */}
        <div style={{ flex: "1", textAlign: "left", padding: "10px" }}>
          <h3>Find Us On</h3>
          <div>
            <a href="#" style={{ margin: "5px" }}><img src="/icons/facebook.png" alt="Facebook" width="25px" /></a>
            <a href="#" style={{ margin: "5px" }}><img src="/icons/twitter.png" alt="Twitter" width="25px" /></a>
            <a href="#" style={{ margin: "5px" }}><img src="/icons/instagram.png" alt="Instagram" width="25px" /></a>
            <a href="#" style={{ margin: "5px" }}><img src="/icons/linkedin.png" alt="LinkedIn" width="25px" /></a>
          </div>
        </div>
      </div>

      <hr style={{ margin: "20px 0", borderColor: "#444" }} />
      <p>© 2025 Copyright WIT Darbhanga | Developed by WitCodingClub</p>
    </footer>
  );
};





export default Footer;