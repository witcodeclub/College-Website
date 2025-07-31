import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <img
        src="/images/logo.jpg"  // your image path
        alt="College Banner"
        className="w-full object-contain"
        style={{ height: "auto", maxWidth: "100%", display: "block" }}
      />
    </div>
  );
};

export default Hero;




