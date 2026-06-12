import React, { useState } from "react";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container" id="navbar">
      <div className={`navbar-pill${isOpen ? " open" : ""}`}>

        {/* Mobile header row: hamburger left, icon links right */}
        <div className="navbar-header">
          <button
            className="navbar-hamburger"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className="navbar-icons">
            {/* Replace href and icon classes with your links / icon files */}
            <a href="https://github.com/noahmarquie1" target="_blank" className="navbar-icon-link" aria-label="Link 1">
              <span className="navbar-icon navbar-icon-1" />
            </a>
            <a href="https://linkedin.com/in/noahmarquie" target="_blank" className="navbar-icon-link" aria-label="Link 2">
              <span className="navbar-icon navbar-icon-2" />
            </a>
            <a href="mailto:noah.marquie@gmail.com" target="_blank" className="navbar-icon-link" aria-label="Link 3">
              <span className="navbar-icon navbar-icon-3" />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <ul className="nav-links" onClick={() => setIsOpen(false)}>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default NavBar;
