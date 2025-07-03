import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Global styles
import "./index.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WITBot from "./components/Chatbot";
import Logo from "./pages/Home/Logo";

// General Pages
import Home from "./pages/Home/Home";
import AntiRagging from "./pages/AntiRagging";
import Events from "./pages/Events";
import Societies from "./pages/Societies";
import NSS from "./pages/NSS";

// Login Pages
import Login from "./pages/Login";
import EmployerLogin from "./pages/EmployerLogin";

// Discover Pages
import Discover from "./pages/Discover/Discover";
import Department from "./pages/Discover/Department";
import Legacy from "./pages/Discover/Legacy";
import Mission from "./pages/Discover/Mission";
import Vc from "./pages/Discover/Vc";
import Director from "./pages/Discover/Director";

// Academics Pages
import Academics from "./pages/Academics/Academics";
import Courses from "./pages/Academics/Courses";
import Syllabus from "./pages/Academics/Syllabus";
import Faculty from "./pages/Academics/Faculty";
import AcademicPolicies from "./pages/Academics/AcademicPolicies";

// Admission Pages
import Admission from "./pages/Admission/Admission";
import AdmissionProcess from "./pages/Admission/AdmissionProcess";
import Eligibility from "./pages/Admission/Eligibility";
import EntranceExam from "./pages/Admission/EntranceExam";
import FeeStructure from "./pages/Admission/FeeStructure";
import Reservation from "./pages/Admission/Reservation";
import Conselling from "./pages/Admission/Conselling";

// Facilities Pages
import Facilities from "./pages/Facilities/Facilities";
import Library from "./pages/Facilities/Library";
import Labs from "./pages/Facilities/Labs";
import Sports from "./pages/Facilities/SportsClub";
import Hostel from "./pages/Facilities/Hostel";
import Cafeteria from "./pages/Facilities/Cafeteria";
import Other from "./pages/Facilities/Other";

// Training & Placement Pages
import TP from "./pages/TP/TP";
import AboutTP from "./pages/TP/AboutTP";
import Alumni from "./pages/TP/Alumni";
import Placements from "./pages/TP/Placements";
import Brochure from "./pages/TP/Brochure";
import Training from "./pages/TP/TrainingProcess";
import TPContact from "./pages/TP/TPContact";
import MOU from "./pages/TP/MOU";

// Student Life Pages
import StudentLife from "./pages/StudentLife/StudentLife";
import CodingClub from "./pages/StudentLife/CodingClub";
import CulturalCell from "./pages/StudentLife/CulturalCell";
import SportsClub from "./pages/StudentLife/SportsClub";
import Fests from "./pages/StudentLife/Fests";
import Magazine from "./pages/StudentLife/Magazine";

// Approval Pages
import Approval from "./pages/Home/Approval";
import AICTE from "./pages/Home/approval/AICTE";
import DST from "./pages/Home/approval/DST";
import HigherEducation from "./pages/Home/approval/HigherEducation";
import NAAC from "./pages/Home/approval/NAAC";

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
        {/* Home & General */}
        <Route path="/" element={<Home />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route path="/events" element={<Events />} />
        <Route path="/societies" element={<Societies />} />
        <Route path="/nss" element={<NSS />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/employer-login" element={<EmployerLogin />} />

        {/* Discover */}
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/department" element={<Department />} />
        <Route path="/discover/director" element={<Director />} />
        <Route path="/discover/legacy" element={<Legacy />} />
        <Route path="/discover/mission" element={<Mission />} />
        <Route path="/discover/vc" element={<Vc />} />

        {/* Academics */}
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/faculty" element={<Faculty />} />
        <Route path="/academics/academic-policies" element={<AcademicPolicies />} />
        <Route path="/academics/syllabus" element={<Syllabus />} />
        <Route path="/academics/courses" element={<Courses />} />

        {/* Admission */}
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission/process" element={<AdmissionProcess />} />
        <Route path="/admission/eligibility" element={<Eligibility />} />
        <Route path="/admission/entrance-exam" element={<EntranceExam />} />
        <Route path="/admission/fee-structure" element={<FeeStructure />} />
        <Route path="/admission/reservation" element={<Reservation />} />
        <Route path="/admission/conselling" element={<Conselling />} />

        {/* Facilities */}
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/labs" element={<Labs />} />
        <Route path="/facilities/sports" element={<Sports />} />
        <Route path="/facilities/hostel" element={<Hostel />} />
        <Route path="/facilities/other" element={<Other />} />
        <Route path="/facilities/societies" element={<Societies />} />
        <Route path="/facilities/cafeteria" element={<Cafeteria />} />

        {/* Training & Placement */}
        <Route path="/tp" element={<TP />} />
        <Route path="/tp/about" element={<AboutTP />} />
        <Route path="/tp/alumni" element={<Alumni />} />
        <Route path="/tp/placements" element={<Placements />} />
        <Route path="/tp/brochure" element={<Brochure />} />
        <Route path="/tp/training" element={<Training />} />
        <Route path="/tp/contact" element={<TPContact />} />
        <Route path="/tp/mou" element={<MOU />} />

        {/* Student Life */}
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/student-life/coding-club" element={<CodingClub />} />
        <Route path="/student-life/cultural-cell" element={<CulturalCell />} />
        <Route path="/student-life/sports-club" element={<SportsClub />} />
        <Route path="/student-life/fests" element={<Fests />} />
        <Route path="/student-life/magazine" element={<Magazine />} />

        {/* Approval */}
        <Route path="/approval/aicte" element={<AICTE />} />
        <Route path="/approval/dst" element={<DST />} />
        <Route path="/approval/highereducation" element={<HigherEducation />} />
        <Route path="/approval/naac" element={<NAAC />} />
      </Routes>

      <Footer />
      <WITBot />
    </div>
  );
}

export default App;
