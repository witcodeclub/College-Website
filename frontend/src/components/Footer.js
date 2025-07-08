
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
    <footer className="bg-[#0A2647] text-white px-6 lg:px-16 py-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + Info */}
        <div className="text-center sm:text-left">
          <img
            src="/images/wit.jpeg"
            alt="WIT Logo"
            className="w-24 lg:w-28 mx-auto sm:mx-0 rounded-full mb-4"
          />
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
            Dr. APJ Abdul Kalam Women's Institute Of Technology
          </h3>
          <p className="text-sm lg:text-base mt-1">Kameshwarnagar, Darbhanga, Bihar - 846008</p>
          <p className="mt-2 text-sm lg:text-base">
            📧{" "}
            <a href="mailto:directorwit@yahoo.in" className="hover:underline text-white">
              directorwit@yahoo.in
            </a>
          </p>
          <p className="text-sm lg:text-base">
            📞{" "}
            <a href="tel:+9106272246579" className="hover:underline text-white">
              +91-06272-246579
            </a>
          </p>
          <div className="flex justify-center sm:justify-start mt-3 gap-4 text-xl lg:text-2xl">
            <a href="https://www.facebook.com/people/apjakwit/61559087061968" target="_blank" rel="noreferrer" className="transition hover:text-[#1877F2] hover:scale-125">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/apjak.wit" target="_blank" rel="noreferrer" className="transition hover:text-[#E1306C] hover:scale-125">
              <FaInstagram />
            </a>
            <a href="https://x.com/apjakwit" target="_blank" rel="noreferrer" className="transition hover:text-[#1DA1F2] hover:scale-125">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg lg:text-xl font-semibold border-b-2 border-dotted mb-2 inline-block">
            Explore
          </h3>
          <ul className="text-sm lg:text-base space-y-1 mt-2">
            <li><Link to="/societies" className="hover:underline">Societies</Link></li>
            <li><Link to="/facilities/labs" className="hover:underline">Labs</Link></li>
            <li><Link to="/facilities/library" className="hover:underline">Library</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg lg:text-xl font-semibold border-b-2 border-dotted mb-2 inline-block">
            Quick Links
          </h3>
          <ul className="text-sm lg:text-base space-y-1 mt-2">
            <li><Link to="/admission/process" className="hover:underline">Admission</Link></li>
            <li><Link to="/discover/department" className="hover:underline">Departments</Link></li>
            <li><Link to="/anti-ragging" className="hover:underline">Anti-Ragging</Link></li>
            <li><Link to="/tp/placements" className="hover:underline">Placement</Link></li>
            <li><Link to="/tp/alumni" className="hover:underline">Alumni</Link></li>
          </ul>
        </div>

        {/* Weather */}
        <div className="bg-gradient-to-b from-green-900 to-gray-200 text-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-lg lg:text-xl font-semibold mb-2">Weather in Darbhanga</h3>
          <p className="text-sm lg:text-base font-medium">
            {dateTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-sm lg:text-base mb-2">{dateTime.toLocaleTimeString()}</p>
          <p className="text-sm lg:text-base">🌡 Temperature: {weather.temp}°C</p>
          <p className="text-sm lg:text-base">💧 Humidity: {weather.humidity}%</p>
          <p className="text-sm lg:text-base">🌬 Wind Speed: {weather.wind} m/s</p>
          <p className="text-sm lg:text-base">☁️ Condition: {weather.condition}</p>
          <p className="text-sm lg:text-base">PM2.5: <strong>{weather.pm25}</strong></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-300 text-sm lg:text-base border-t border-gray-500 pt-4">
        © 2025 Copyright WIT Darbhanga | Developed by <span className="text-[#FFD700]">WitCodingClub</span>
      </div>
    </footer>
  );
};

export default Footer;
