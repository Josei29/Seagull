import React from "react";
import "./Hero.css";

const Hero = () => {
    return(
        <img 
            src={process.env.PUBLIC_URL + './assets/background2.jpg'} 
            alt="Hero" 
            className="heroImage"
        />
    );
};

export default Hero;