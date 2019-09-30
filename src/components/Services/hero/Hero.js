import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return(
        <div className="services--hero" >
            <Link to="/contact" className="hero--link">GET A FREE QUOTE TODAY!</Link>
        </div>
    );
};

export default Hero;