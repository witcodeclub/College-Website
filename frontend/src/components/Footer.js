import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#00274D", color: "white", padding: "20px", textAlign: "center" }}>
    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "auto", flexWrap: "wrap" }}>
      {/* Important Links */}
      <div>
        <h3>Important Links</h3>
        <p><a href="#" style={{ color: "white", textDecoration: "none" }}>Anti Ragging</a></p>
        <p><a href="#" style={{ color: "white", textDecoration: "none" }}>Alumni</a></p>
        <p><a href="#" style={{ color: "white", textDecoration: "none" }}>Placement</a></p>
        <p><a href="#" style={{ color: "white", textDecoration: "none" }}>Admission</a></p>
      </div>


        {/* Location */}
        <div>
          <h3 style={{ fontWeight: "bold" }}>Location</h3>
          <p><strong>WIT Darbhanga</strong></p>
          <p>Kameshwaranagar,</p>
          <p>Darbhanga, Bihar – 846008</p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 style={{ fontWeight: "bold" }}>Contact Us</h3>
          <p><FaEnvelope /> <a href="mailto:directorwit@yahoo.in" style={{ color: "white", textDecoration: "none" }}> directorwit@yahoo.in</a></p>
          <p><FaPhone /> +91-06272-246579</p>
        </div>

        {/* Social Media */}
        <div>
          <h3>Find Us On</h3>
          <p style={{ fontWeight: "24px" }}>
            <a href="#" style={{ color: "white",margin: "0 px", fontSize: "24px" }}><FaFacebook /></a>
            <a href="#" style={{ color: "white",margin: "0 15px", fontSize: "24px" }}><FaInstagram /></a>
            <a href="#" style={{ color: "white",margin: "0 15px", fontSize: "24px" }}><FaLinkedin /></a>
            <a href="#" style={{ color: "white", margin: "0 10px", fontSize: "24px" }}><FaTwitter/></a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ marginTop: "20px", borderTop: "1px solid gray", paddingTop: "10px" }}>
        © 2025 Copyright WIT Darbhanga | Developed by WitCodingClub
      </div>
    </div>
  );
};

export default Footer;





