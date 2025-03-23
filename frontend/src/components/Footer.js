import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const [weather, setWeather] = useState({ temp: '', humidity: '', wind: '', condition: '', pm25: '' });
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Darbhanga&appid=e338dcb07be5ab12d18980746693165b&units=metric')
            .then(response => {
                setWeather({
                    temp: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    wind: response.data.wind.speed,
                    condition: response.data.weather[0].main,
                    pm25: 'Fetching...' // Placeholder for air pollution API
                });
            })
            .catch(error => console.error('Weather API Error:', error));
    }, []);


    useEffect(() => {
      // Update date and time every second
      const interval = setInterval(() => {
          setDateTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
  }, []);

    return (
        <footer style={{ backgroundColor: '#0B3D91', color: 'white', padding: '20px', textAlign: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap' }}>
                
                {/* Left Section - Logo and Address */}
                <div style={{ flex: '1', textAlign: 'center', paddingRight: '20px' }}>
                    <img src="/images/wit.jpeg" alt="wit Logo" style={{ width: '80px', marginBottom: '2px',borderRadius: "50%", marginBottom: "8px"}} />
                    <h3>WIT Darbhanga</h3>
                    <p>Kameshwarnagar, Darbhanga, Bihar-846008</p>
                    <p>📧 email-directorwit@yahoo.in</p>
                    <p>📞 +91-06272-246579</p>
                    <a href="https://www.facebook.com/people/apjakwit/61559087061968/?rdid=OIZvadPupztm418C&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YZQjkpTgV%2F" target="_blank" rel="noopener noreferrer" style={{ color: "white",margin: "0 px", fontSize: "26px" }}><FaFacebook /></a>
            <a href="https://www.instagram.com/apjak.wit/?igsh=Y2EzNnFnODk1ZHFp#" style={{ color: "white",margin: "0 14px", fontSize: "28px" }}><FaInstagram /></a>
            <a href="#" style={{ color: "white",margin: "0 15px", fontSize: "26px" }}><FaLinkedin /></a>
            <a href="#" style={{ color: "white", margin: "0 10px", fontSize: "26px" }}><FaTwitter/></a>
                </div>

                {/* Middle Left Section - Explore */}
                <div style={{ flex: '1', textAlign: 'left', paddingLeft: '120px' }}>
                    <h3 style={{display: "inline-block", borderBottom: "2px dotted white", paddingBottom: "5px"}} >Explore</h3>
                    <ul style={{ listStyle: 'none', padding: 2 }}>
                        <p>Societies</p>
                        <p>Labs</p>
                        <p>Library</p>
                        <p>Events</p>
                    </ul>
                </div>

                {/* Middle Right Section - Quick Links */}
                <div style={{ flex: '1', textAlign: 'left', paddingLeft: '10px', paddingRight: '20px' }}>
                    <h3 style={{display: "inline-block", borderBottom: "2px dotted white", paddingBottom: "5px" }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <p>Admission</p>
                        <p>Departments</p>
                        <p>Anti-Ragging</p>
                        <p>Placement</p>
                        <p>Alumni</p>
                        <p>NSS</p>
                    </ul>
                </div>

                {/* Right Section - Weather */}
                <div style={{ flex: '1', textAlign: 'center', paddingLeft: '120px',paddingRight: '10px' }}>
                    
                    <h3>Weather in Darbhanga</h3>
                    <p>{dateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p>{dateTime.toLocaleTimeString()}</p>
                    <p>Temperature: {weather.temp}°C</p>
                    <p>Humidity: {weather.humidity}%</p>
                    <p>Wind Speed: {weather.wind} m/s</p>
                    <p>Condition: {weather.condition}</p>
                    <p>Air Pollution (PM2.5): <strong>{weather.pm25}</strong>💚</p>
                </div>
            </div>


   {/* Copyright */}
      <div style={{Color: "grey-blue", marginTop: "20px", borderTop: "3px solid gray", paddingTop: "10px" }}>
        © 2025 Copyright WIT Darbhanga | Developed by WitCodingClub
      </div>
    </footer>
  );
};
export default Footer;
