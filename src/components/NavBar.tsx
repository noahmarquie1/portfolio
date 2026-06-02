import React from "react";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar-container" id="navbar">
      <div className="navbar-pill">
        <ul className="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
