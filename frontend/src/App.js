import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css"; // Import your global styles if any
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Academics from "./pages/Academics/Academics"; // Correct spelling
import Facilities from "./pages/Facilities/Facilities";
import Footer from "./components/Footer";
import Logo from "./pages/Home/Logo";
import Navbar from "./components/Navbar";
import ChatbotComponent from "./chatbot/ChatbotComponent";


function App() {
  return (
    <div>
          <div className="logo-container">
                <Logo />
            </div>
            <div>
            <ChatbotComponent />
        </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/facilities" element={<Facilities />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
