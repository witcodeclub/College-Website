import React from "react";
import { Routes, Route, Link } from "react-router-dom";  // ❌ Remove `BrowserRouter`
import "./index.css"; 
import Home from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Academics from "./pages/Academics/Academics";
import Facilities from "./pages/Facilities/Facilities";
import Footer from "./components/Footer";
import Logo from "./pages/Home/Logo";
import Navbar from "./components/Navbar";
import ChatbotComponent from "./chatbot/ChatbotComponent";

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
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
      <ChatbotComponent />
      <Footer />
    </div>
  );
}

export default App;
