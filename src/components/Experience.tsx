import React from "react";
import "./Experience.css";
import accessiwayLogo from "../assets/accessiway.png";
import transmutexLogo from "../assets/transmutex.png";
import uroLogo from "../assets/ubc_uro.png";
import mathLogo from "../assets/math.png";

import transmutexExperience from "../assets/experience/fission_rates.gif";
import accessiwayExperience from "../assets/experience/accessiwayDetail.avif";
import uroExperience from "../assets/experience/rex_murc.jpg";
import mathExperience from "../assets/experience/point_clouds.gif";


interface ExperienceData {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

// ── Fill in your descriptions below ─────────────────────────────────────────
const EXPERIENCES: ExperienceData[] = [
  {
    title: "AccessiWay",
    image: accessiwayExperience,
    imageAlt: "AccessiWay",
    description:
      "Describe your software engineering experience at AccessiWay here.",
  },
  {
    title: "Transmutex",
    image: transmutexExperience,
    imageAlt: "Transmutex",
    description:
      "Describe your machine learning work for nuclear applications at Transmutex here.",
  },
  {
    title: "UBC URO",
    image: uroExperience,
    imageAlt: "UBC URO",
    description:
      "Describe your machine learning work in genomics at UBC here.",
  },
  {
    title: "UBC Mathematics - Wachs Group",
    image: mathExperience,
    imageAlt: "UBC Mathematics",
    description:
      "Describe your scientific computing work at UBC Mathematics here.",
  },
];

export const Experience: React.FC<{ activeIdx: number | null }> = ({
  activeIdx,
}) => {
  const exp = activeIdx !== null ? EXPERIENCES[activeIdx] : null;

  return (
    <div className="experience-container" id="experience">
      {exp ? (
        <div className="experience-pane">
          <div className="experience-image-wrap">
            <img
              src={exp.image}
              alt={exp.imageAlt}
              className="experience-img"
            />
          </div>
          <div className="experience-content">
            <h2 className="experience-pane-title">{exp.title}</h2>
            <div className="experience-text-box">
              <p>{exp.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="experience-empty">
          <p>Select an experience above.</p>
        </div>
      )}
    </div>
  );
};

export default Experience;
