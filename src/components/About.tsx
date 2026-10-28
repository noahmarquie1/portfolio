import React from "react";
import "./About.css";
import profileImage from "../assets/profile.jpg";

export const About: React.FC = () => (
  <header id="about" className="hero">
    <img src={profileImage} alt="Noah Marquié" className="hero-image" />
    <div>
      <h1 className="hero-name">Noah Marquié</h1>
      <p className="hero-tagline">
        Building machine learning systems grounded in mathematical rigor
      </p>
      <div className="hero-socials">
        <a href="https://github.com/noahmarquie1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <span className="hero-social-icon github-icon" />
        </a>
        <a href="https://linkedin.com/in/noahmarquie" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <span className="hero-social-icon linkedin-icon" />
        </a>
        <a href="mailto:noah.marquie@gmail.com" aria-label="Email">
          <span className="hero-social-icon email-icon" />
        </a>
      </div>
    </div>
  </header>
);
