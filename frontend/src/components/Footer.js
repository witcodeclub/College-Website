import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe, FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [weather, setWeather] = useState({ temp: "", humidity: "", wind: "", condition: "", pm25: "" });
  const [dateTime, setDateTime] = useState(new Date());

  const [exploreOpen, setExploreOpen] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);

  // 🌦 Fetch Weather
  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?q=Darbhanga&appid=e338dcb07be5ab12d18980746693165b&units=metric")
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

  // ⏳ Live Clock
  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // 🌍 Language Switch
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="bg-[#0A2647] text-white px-4 sm:px-8 md:px-12 py-8 sm:py-12 w-full">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm sm:text-base">

        {/* Column 1 - Info */}
        <div className="text-center sm:text-left">
          <img src="/images/wit.jpeg" alt="WIT Logo" className="w-20 sm:w-24 lg:w-28 mx-auto sm:mx-0 rounded-full mb-4" />
          <h3 className="text-lg font-semibold leading-tight">{t("footer_college_name")}</h3>
          <p className="mt-1 text-gray-300">{t("footer_address")}</p>
          <p className="mt-2">📧 <a href="mailto:directorwit@yahoo.in" className="hover:underline">directorwit@yahoo.in</a></p>
          <p>📞 <a href="tel:+9106272246579" className="hover:underline">+91-06272-246579</a></p>

          {/* Social + Language */}
          <div className="flex justify-center sm:justify-start mt-3 gap-4 text-xl items-center">
            <a href="https://www.facebook.com/people/apjakwit/61559087061968" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] hover:scale-110 transition"><FaFacebook /></a>
            <a href="https://www.instagram.com/apjak.wit" target="_blank" rel="noreferrer" className="hover:text-[#E1306C] hover:scale-110 transition"><FaInstagram /></a>
            <a href="https://x.com/apjakwit" target="_blank" rel="noreferrer" className="hover:text-[#1DA1F2] hover:scale-110 transition"><FaTwitter /></a>

            {/* 🌍 Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="bg-white text-[#0A2647] p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              title="Switch Language"
            >
              <FaGlobe size={16} />
            </button>
          </div>
        </div>

        {/* Column 2 - Explore */}
        <div>
          <h4
            className="font-semibold text-base border-b-2 border-dotted mb-2 w-fit cursor-pointer sm:cursor-default"
            onClick={() => setExploreOpen(!exploreOpen)}
          >
            {t("explore")} <span className="sm:hidden">{exploreOpen ? "▲" : "▼"}</span>
          </h4>
          <ul className={`space-y-1 text-gray-300 transition-all duration-300 overflow-hidden sm:block ${exploreOpen ? "max-h-40" : "max-h-0 sm:max-h-none"}`}>
            <li><Link to="/societies" className="hover:underline">{t("societies")}</Link></li>
            <li><Link to="/facilities/labs" className="hover:underline">{t("labs")}</Link></li>
            <li><Link to="/facilities/library" className="hover:underline">{t("library")}</Link></li>
            <li><Link to="/events" className="hover:underline">{t("events")}</Link></li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h4
            className="font-semibold text-base border-b-2 border-dotted mb-2 w-fit cursor-pointer sm:cursor-default"
            onClick={() => setQuickOpen(!quickOpen)}
          >
            {t("quick_links")} <span className="sm:hidden">{quickOpen ? "▲" : "▼"}</span>
          </h4>
          <ul className={`space-y-1 text-gray-300 transition-all duration-300 overflow-hidden sm:block ${quickOpen ? "max-h-48" : "max-h-0 sm:max-h-none"}`}>
            <li><Link to="/admission/process" className="hover:underline">{t("admission")}</Link></li>
            <li><Link to="/discover/department" className="hover:underline">{t("departments")}</Link></li>
            <li><Link to="/anti-ragging" className="hover:underline">{t("anti_ragging")}</Link></li>
            <li><Link to="/tp/placements" className="hover:underline">{t("placement")}</Link></li>
            <li><Link to="/tp/alumni" className="hover:underline">{t("alumni")}</Link></li>
          </ul>
        </div>

        {/* Column 4 - Weather */}
        <div className="bg-gradient-to-b from-green-900 to-gray-200 text-white p-4 rounded-lg shadow-md min-h-[200px] w-full md:w-[90%] lg:w-[110%]">
          <h4 className="font-semibold mb-2 text-center">{t("weather_title")}</h4>
          <p className="text-sm text-center">
            {dateTime.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
          <p className="text-sm text-center mb-2">{dateTime.toLocaleTimeString()}</p>
          <div className="space-y-1 text-sm">
            <p>🌡 {t("temperature")}: {weather.temp}°C</p>
            <p>💧 {t("humidity")}: {weather.humidity}%</p>
            <p>🌬 {t("wind_speed")}: {weather.wind} m/s</p>
            <p>☁️ {t("condition")}: {weather.condition}</p>
            <p>{t("pm25")}: <strong>{weather.pm25}</strong> <FaHeart className="inline text-green-800" /></p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-gray-300 text-xs sm:text-sm border-t border-gray-500 pt-4">
        {t("copyright")} <span className="text-yellow-400 font-semibold">{t("wit_coding_club")}</span>
      </div>
    </footer>
  );
};

export default Footer;





