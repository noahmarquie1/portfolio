import React from "react";
import "./Education.css";
import ubcLogo from "../assets/ubc-logo.png";

export const Education: React.FC = () => (
  <section className="section" id="education">
    <h2 className="section-title">Education</h2>
    <div className="education-box">
      <div className="education-header">
        <img src={ubcLogo} alt="" className="education-logo" />
        <div>
          <h3 className="education-title">The University of British Columbia</h3>
          <p className="education-subtitle">
            B.Sc. Combined Honours in Computer Science and Mathematics  •  Vancouver, Canada  •  Aug 2024 — Current
          </p>
          <p className="education-text">
            4.20 GPA — Dean&apos;s Scholar — 3× International Student Scholar
          </p>
          <p className="education-text">Relevant Coursework:</p>
          <ul className="education-bullets">
            <li>MATH 215 Elementary Differential Equations</li>
            <li>CPSC 221 Basic Algorithms and Data Structures</li>
            <li>MATH 317 Calculus IV — Vector Calculus</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
