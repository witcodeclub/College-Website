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

// Facilities
import Library from "./pages/Facilities/Library";
import Labs from "./pages/Facilities/Labs";
import Sports from "./pages/Facilities/SportsClub";
import Hostel from "./pages/Facilities/Hostel";
import Auditorium from "./pages/Facilities/Auditorium";
import Societies from "./pages/Facilities/Societies";
import Cafeteria from "./pages/Facilities/Cafeteria";

// Training & Placement
import TP from "./pages/TP/TP";
import AboutTP from "./pages/TP/AboutTP";
import Alumni from "./pages/TP/Alumni";
import Placements from "./pages/TP/Placements";
import Brochure from "./pages/TP/Brochure";
import Training from "./pages/TP/TrainingProcess";
import TPContact from "./pages/TP/TPContact";
import MOU from "./pages/TP/MOU";

// Student Life
import StudentLife from "./pages/StudentLife/StudentLife";
import CodingClub from "./pages/StudentLife/CodingClub";
import CulturalCell from "./pages/StudentLife/CulturalCell";
import SportsClub from "./pages/StudentLife/SportsClub";
import Fests from "./pages/StudentLife/Fests";
import Magazine from "./pages/StudentLife/Magazine";
import AntiRagging from "./pages/StudentLife/AntiRagging";
import NSS from "./pages/NSS";

// Admission Pages
import Admission from "./pages/Admission/Admission";
import AdmissionProcess from "./pages/Admission/AdmissionProcess";
import Eligibility from "./pages/Admission/Eligibility";
import EntranceExam from "./pages/Admission/EntranceExam";
import FeeStructure from "./pages/Admission/FeeStructure";
import Reservation from "./pages/Admission/Reservation";
import Conselling from "./pages/Admission/Conselling"

// Discover Pages
import Department from "./pages/Discover/Department";
import Legacy from "./pages/Discover/Legacy";
import Mission from "./pages/Discover/Mission";
import Vc from "./pages/Discover/Vc";
import Director from "./pages/Discover/Director";

function App() {
  return (
      <div>
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <Logo />
          </Link>
        </div>
        
        <Navbar />
        
        <Routes>
          {/* Home & General Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/academics" element={<Academics />} />

          {/* Facilities Routes */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/labs" element={<Labs />} />
          <Route path="/facilities/sports" element={<Sports />} />
          <Route path="/facilities/hostel" element={<Hostel />} />
          <Route path="/facilities/auditorium" element={<Auditorium />} />
          <Route path="/facilities/societies" element={<Societies />} />
          <Route path="/facilities/cafeteria" element={<Cafeteria />} />

          {/* Training & Placement Routes */}
          <Route path="/tp" element={<TP />} />
          <Route path="/tp/about" element={<AboutTP />} />
          <Route path="/tp/alumni" element={<Alumni />} />
          <Route path="/tp/placements" element={<Placements />} />
          <Route path="/tp/brochure" element={<Brochure />} />
          <Route path="/tp/training" element={<Training />} />
          <Route path="/tp/contact" element={<TPContact />} />
          <Route path="/tp/mou" element={<MOU />} />

          {/* Student Life Routes */}
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/student-life/coding-club" element={<CodingClub />} />
          <Route path="/student-life/cultural-cell" element={<CulturalCell />} />
          <Route path="/student-life/sports-club" element={<SportsClub />} />
          <Route path="/student-life/fests" element={<Fests />} />
          <Route path="/student-life/magazine" element={<Magazine />} />
          <Route path="/student-life/anti-ragging" element={<AntiRagging />} />
          <Route path="/nss" element={<NSS />} />

          {/* Admission Routes */}
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/process" element={<AdmissionProcess />} />
          <Route path="/admission/eligibility" element={<Eligibility />} />
          <Route path="/admission/entrance-exam" element={<EntranceExam />} />
          <Route path="/admission/fee-structure" element={<FeeStructure />} />
          <Route path="/admission/reservation" element={<Reservation />} />
          <Route path="/admission/conselling" element={<Conselling />} />

          {/* Discover Routes */}
          <Route path="/discover/department" element={<Department />} />
          <Route path="/discover/director" element={<Director />} />
          <Route path="/discover/legacy" element={<Legacy />} />
          <Route path="/discover/mission" element={<Mission />} />
          <Route path="/discover/vc" element={<Vc />} />
         
        </Routes>

        <ChatbotComponent />
        <Footer />
      </div>
  );
}

export default App;
