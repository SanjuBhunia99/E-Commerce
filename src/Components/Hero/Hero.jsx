import React from 'react'
import "./Hero.css"
import { FaHandsClapping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import men from "../../assets/men.png"


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Prices !</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <FaHandsClapping className="wave-icon" size={60} />
        </div>
        <div>
          <p className="typing-text">Collection</p>
          <p className="typing-text">for everyone....</p>
        </div>
        <div className="hero-latest-btn">
          <div>Lateset Collection</div>
          <FaArrowRight size={30} />
        </div>
      </div>

      <div className="hero-right">
        <img src={men} alt="" height="450px" />
      </div>
    </div>
  );
}

export default Hero;