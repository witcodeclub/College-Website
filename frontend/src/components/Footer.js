import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagram,  FaTwitter } from "react-icons/fa";
// ✅ Define styles outside the component
const styles = {
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "15px"
  }
};
const Footer = () => {
  const [weather, setWeather] = useState({
    temp: "",
    humidity: "",
    wind: "",
    condition: "",
    pm25: "",
  });
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Darbhanga&appid=e338dcb07be5ab12d18980746693165b&units=metric"
      )
      .then((response) => {
        setWeather({
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          condition: response.data.weather[0].main,
          pm25: "Fetching...", // Placeholder for air pollution API
        });
      })
      .catch((error) => console.error("Weather API Error:", error));
  }, []);

  useEffect(() => {
    // Update date and time every second
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#0A2647",
        color: "white",
        padding: "20px",
        textAlign: "center",
        position: "relative",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section - Logo and Address */}
        <div style={{ flex: "1", textAlign: "center", paddingRight: "20px" }}>
          <img
            src="/images/wit.jpeg"
            alt="wit Logo"
            style={{
              width: "80px",
              marginBottom: "2px",
              borderRadius: "50%",
              marginBottom: "8px",
            }}
          />
          <h3>WIT Darbhanga</h3>
          <p>Kameshwarnagar, Darbhanga, Bihar-846008</p>
          <p>📧 email-directorwit@yahoo.in</p>
          <p>📞 +91-06272-246579</p>
          <a
            href="https://www.facebook.com/people/apjakwit/61559087061968/?rdid=OIZvadPupztm418C&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YZQjkpTgV%2F"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", margin: "0 px", fontSize: "26px" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/apjak.wit/?igsh=Y2EzNnFnODk1ZHFp#"
            style={{ color: "white", margin: "0 14px", fontSize: "28px" }}
          >
            <FaInstagram />
          </a>
          
          <a
            href="https://x.com/apjakwit?t=KGuEITZlvabPTgiweLsxdw&s=08"
            style={{ color: "white", margin: "0 10px", fontSize: "26px" }}
          >
            <FaTwitter />
          </a>
        </div>

        {/* Middle Left Section - Explore */}
        <div style={{ flex: "1", textAlign: "left", paddingLeft: "120px" }}>
          <h3
            style={{
              display: "inline-block",
              borderBottom: "2px dotted white",
              paddingBottom: "5px",
            }}
          >
            Explore
          </h3>
          <ul style={{ listStyle: "none", padding: 2 }}>
           <li><Link to="/societies" style={styles.link}>Societies</Link></li>
           <li><Link to="/facilities/labs" style={styles.link}>Labs</Link></li>
           <li><Link to="/facilities/library" style={styles.link}>Library</Link></li>
           <li><Link to="/events" style={styles.link}>Events</Link  ></li>
          </ul>
        </div>

        {/* Middle Right Section - Quick Links */}
        <div
          style={{
            flex: "1",
            textAlign: "left",
            paddingLeft: "10px",
            paddingRight: "20px",
          }}
        >
          <h3
            style={{
              display: "inline-block",
              borderBottom: "2px dotted white",
              paddingBottom: "5px",
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
             <li><Link to="/admission/process" style={styles.link}>Admission</Link></li>
             <li><Link to="/discover/department" style={styles.link}>Departments</Link></li>
             <li><Link to="/anti-ragging" style={styles.link}>Anti-Ragging</Link></li>
            <li><Link to="/tp/placements" style={styles.link}>Placement</Link></li>
            <li><Link to="/tp/alumni" style={styles.link}>Alumni</Link></li>

          </ul>
 
        </div>
        
  l

        {/* Right Section - Weather */}
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom,#006400 ,#e0e0e0)",
            color: "white",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            flex: "1",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <h3 style={{ fontSize: "25px", marginBottom: "10px" }}>
            Weather in Darbhanga
          </h3>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            {dateTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            {dateTime.toLocaleTimeString()}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Temperature: {weather.temp}°C
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Humidity: {weather.humidity}%
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Wind Speed: {weather.wind} m/s
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Condition: {weather.condition}
          </p>
          <p>
            Air Pollution (PM2.5): <strong>{weather.pm25}</strong>💚
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          color: "grey-blue",
          marginTop: "10px",
          borderTop: "3px solid gray",
          paddingTop: "10px",
        }}
      >
        © 2025 Copyright WIT Darbhanga | Developed by WitCodingClub
      </div>
    </footer>


  );
};


export default Footer;
