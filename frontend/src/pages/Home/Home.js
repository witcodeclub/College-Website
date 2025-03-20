import React from "react";
// import Logo from "./Logo";
// import Navbar from "../../components/Navbar"; // Ensure correct path
import Hero from "./Hero";
import Important from "./Important";
import Aproval from "./Aproval";
import Mentor from "./Mentor";
import Women from "./Women";
import Photos from "./Photos";
import Contact from "./Contact";
import Campus from "./Campus";
const Home = () => {
    return (
        <div>
            <Hero />
            <Campus/>
            <Important />
            <Aproval />
            <Mentor />
            <Women />
            <Photos />
            <Contact/>
        </div>
    );
};

export default Home;
