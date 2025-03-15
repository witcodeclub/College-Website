import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navbarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0073e6",
        padding: "15px 30px",
        color: "white"
    };

    const logoStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        textDecoration: "none",
        color: "white"
    };

    const navLinksStyle = {
        listStyle: "none",
        display: "flex",
        gap: "20px",
        margin: 0,
        padding: 0
    };

    const linkStyle = {
        textDecoration: "none",
        color: "white",
        fontWeight: "500",
        transition: "0.3s ease-in-out"
    };

    return (
        <nav style={navbarStyle}>
            <div className="logo">
                <Link to="/" style={logoStyle}>🏫 College Name</Link>
            </div>
            <ul style={navLinksStyle}>
                <li><Link to="/" style={linkStyle}>Home</Link></li>
                <li><Link to="/about" style={linkStyle}>About Us</Link></li>
                <li><Link to="/academics" style={linkStyle}>Academics</Link></li>
                <li><Link to="/admissions" style={linkStyle}>Admissions</Link></li>
                <li><Link to="/placements" style={linkStyle}>Placements</Link></li>
                <li><Link to="/resources" style={linkStyle}>Resources</Link></li>
                <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
