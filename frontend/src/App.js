import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css"; // Import your global styles if any
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";

function App() {
    return (
        <div>
              <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="facilities" element={<Facilities />} />
            </Routes>
            <footer/>
        </div>
    );
}

export default App;
