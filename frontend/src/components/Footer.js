import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
          pm25: "Fetching...",
        });
      })
      .catch((error) => console.error("Weather API Error:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#0A2647] text-white px-6 py-10 mt-12 text-center relative">
      <div className="flex flex-wrap justify-between text-left">
        {/* Logo and Address */}
        <div className="flex-1 text-center md:text-left md:pr-6 mb-6">
          <img
            src="/images/wit.jpeg"
            alt="wit Logo"
            className="w-20 mx-auto md:mx-0 rounded-full mb-3"
          />
          <h3 className="text-xl font-semibold">Dr. APJ Abdul kalam Women's Institute Of Technology
             Darbhanga</h3>
          <p>Kameshwarnagar, Darbhanga, Bihar-846008</p>
          <p>📧 email-directorwit@yahoo.in</p>
          <p>📞 +91-06272-246579</p>
          <div className="flex justify-center md:justify-start mt-2 gap-6 text-2xl">
            <a
              href="https://www.facebook.com/people/apjakwit/61559087061968"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/apjak.wit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/apjakwit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="flex-1 mb-6 pl-6">
          <h3 className="border-b-2 border-dotted inline-block mb-2 pb-1">Explore</h3>
          <ul className="list-none space-y-1 text-sm">
            <li><Link to="/societies" className="hover:underline">Societies</Link></li>
            <li><Link to="/facilities/labs" className="hover:underline">Labs</Link></li>
            <li><Link to="/facilities/library" className="hover:underline">Library</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 mb-6 px-6">
          <h3 className="border-b-2 border-dotted inline-block mb-2 pb-1">Quick Links</h3>
          <ul className="list-none space-y-1 text-sm">
            <li><Link to="/admission/process" className="hover:underline">Admission</Link></li>
            <li><Link to="/discover/department" className="hover:underline">Departments</Link></li>
            <li><Link to="/anti-ragging" className="hover:underline">Anti-Ragging</Link></li>
            <li><Link to="/tp/placements" className="hover:underline">Placement</Link></li>
            <li><Link to="/tp/alumni" className="hover:underline">Alumni</Link></li>
          </ul>
        </div>

        {/* Weather Card */}
        <div className="flex-1 mt-1 bg-gradient-to-b from-green-900 to-gray-200 text-white p-4 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Weather in Darbhanga</h3>
          <p className="font-bold text-sm">
            {dateTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-bold text-sm mb-1">{dateTime.toLocaleTimeString()}</p>
          <p className="font-bold text-sm">Temperature: {weather.temp}°C</p>
          <p className="font-bold text-sm">Humidity: {weather.humidity}%</p>
          <p className="font-bold text-sm">Wind Speed: {weather.wind} m/s</p>
          <p className="font-bold text-sm">Condition: {weather.condition}</p>
          <p className="text-sm">Air Pollution (PM2.5): <strong>{weather.pm25}</strong>💚</p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-400 pt-4 text-sm text-gray-300">
        © 2025 Copyright WIT Darbhanga | Developed by WitCodingClub
      </div>
    </footer>
  );
};

export default Footer;
