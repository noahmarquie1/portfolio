import React from "react";
import "./Experience.css";

export const Experience: React.FC = ({ activeIdx }) => {
  return (
    <div className="experience-container" id="experience">
      <h2 className="experience-title">Experience index: {activeIdx}</h2>
    </div>
  );
};

export default Experience;
