import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css"; // Import your global styles if any
import Navbar from "./components/Navbar";
function App() {
    return (
        <div>
              <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
                
            </Routes>
            <footer/>
        </div>
    );
}

export default App;
