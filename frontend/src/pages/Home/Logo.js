import React from "react";

const Hero = () => {
    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            width: "100%",
        }}>
            <img 
                src="/images/logo.jpg"  // Public folder se direct
                alt="Hero Banner" 
                style={{ 
                    maxWidth: "100%",  
                    height: "auto"   
                }}
            />
        </div>
    );
};

export default Hero;
