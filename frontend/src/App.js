import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import ChatbotComponent from "./chatbot/ChatbotComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Placements from "./pages/Placements";
import StudentLife from "./pages/StudentLife";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import CollegeNavbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <CollegeNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <ChatbotComponent />
      <Footer />
    </Router>
  );
};

export default App;
