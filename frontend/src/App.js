import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";  
import "./index.css"; 
import Home from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Academics from "./pages/Academics/Academics";
import Facilities from "./pages/Facilities/Facilities";
import Footer from "./components/Footer";
import Logo from "./pages/Home/Logo";
import Navbar from "./components/Navbar";
import ChatbotComponent from "./chatbot/ChatbotComponent";
import Library from "./pages/Facilities/Library";
import Labs from "./pages/Facilities/Labs";
import Sports from "./pages/Facilities/SportsClub";
import Hostel from "./pages/Facilities/Hostel";
import Auditorium from "./pages/Facilities/Auditorium";
import Societies from "./pages/Facilities/Societies";
import Cafeteria from "./pages/Facilities/Cafeteria";
import TP from "./pages/TP/TP";
import AboutTP from "./pages/TP/AboutTP";
import Alumni from "./pages/TP/Alumni";
import Placements from "./pages/TP/Placements";
import Brochure from "./pages/TP/Brochure";
import Training  from "./pages/TP/TrainingProcess";
import TPContact from "./pages/TP/TPContact";
import MOU from "./pages/TP/MOU";
import StudentLife from "./pages/StudentLife/StudentLife";
import CodingClub from "./pages/StudentLife/CodingClub";
import CulturalCell from "./pages/StudentLife/CulturalCell";
import SportsClub from "./pages/StudentLife/SportsClub";
import Fests from "./pages/StudentLife/Fests";
import Magazine from "./pages/StudentLife/Magazine";
import AntiRagging from "./pages/StudentLife/AntiRagging";
import NSS from "./pages/NSS";





function App() {
  return (
    <div>  {/* ✅ Wrap everything inside a parent div */}
      <div className="logo-container">
      <Link to="/" className="logo-link">
        <Logo />
        </Link>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/academics" element={<Academics />} />
        {/* Add routes for facility */}
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/labs" element={<Labs />} />
        <Route path="/facilities/sports" element={<Sports />} />
        <Route path="/facilities/hostel" element={<Hostel />} />
        <Route path="/facilities/auditorium" element={<Auditorium />} />
        <Route path="/facilities/societies" element={<Societies />} />
        <Route path="/facilities/cafeteria" element={<Cafeteria />} />
        {/* Add routes for T&P */}
        <Route path="/tp" element={<TP />} />
        <Route path="/tp/about" element={<AboutTP />} />
        <Route path="/tp/alumni" element={<Alumni />} />
        <Route path="/tp/placements" element={<Placements />} />
        <Route path="/tp/brochure" element={<Brochure />} />
        <Route path="/tp/training" element={<Training />} />
        <Route path="/tp/contact" element={<TPContact />} />
        <Route path="/tp/mou" element={<MOU />} />
        {/* Add routes for student life */}
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/student-life/coding-club" element={<CodingClub />} />
        <Route path="/student-life/cultural-cell" element={<CulturalCell />} />
        <Route path="/student-life/sports-club" element={<SportsClub />} />
        <Route path="/student-life/fests" element={<Fests />} />
        <Route path="/student-life/magazine" element={<Magazine />} />
        <Route path="/student-life/anti-ragging" element={<AntiRagging />} />

<Route path="/nss" element={<NSS />} />

        
 
      </Routes>
      <ChatbotComponent />
      <Footer />
    </div>
  );
}

export default App;
