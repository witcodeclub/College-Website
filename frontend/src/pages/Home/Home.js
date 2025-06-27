import React from "react";
// import Logo from "./Logo";
// import Navbar from "../../components/Navbar"; // Ensure correct path
import Hero from "./Hero";

import Aproval from "./Approval";
import Mentor from "./Mentor";
import Women from "./Women";
import Photos from "./Photos";
import FAQSection from "../../components/FAQSection";

import Campus from "./Campus";
const Home = () => {
    return (
        <div>
            <Hero />
            <Campus/>
            
            <Aproval />
            <Mentor />
            <Women />
            <Photos />
            <FAQSection />
            
        </div>
    );
};

export default Home;
