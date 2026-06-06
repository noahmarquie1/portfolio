import React, { useState } from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer-container">
      <nav className="footer-navbar-container">
        <div className={`footer-navbar-pill${isOpen ? " open" : ""}`}>

          {/* Mobile header row: hamburger left, icon links right */}
          <div className="footer-navbar-header">
            <button
              className="footer-navbar-hamburger"
              onClick={() => setIsOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>

            <div className="footer-navbar-icons">
              <a href="#" className="footer-navbar-icon-link" aria-label="Link 1">
                <span className="footer-navbar-icon footer-navbar-icon-1" />
              </a>
              <a href="#" className="footer-navbar-icon-link" aria-label="Link 2">
                <span className="footer-navbar-icon footer-navbar-icon-2" />
              </a>
              <a href="#" className="footer-navbar-icon-link" aria-label="Link 3">
                <span className="footer-navbar-icon footer-navbar-icon-3" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <ul className="footer-nav-links" onClick={() => setIsOpen(false)}>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#connect">Connect</a></li>
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Footer;
