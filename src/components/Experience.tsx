import React from "react";
import "./Experience.css";

import transmutexExperience from "../assets/experience/fission_rates.gif";
import accessiwayExperience from "../assets/experience/accessiwayDetail.avif";
import uroExperience from "../assets/experience/rex_murc.jpg";
import mathExperience from "../assets/experience/point_clouds.gif";

// Helper function to convert URLs in text to clickable links
const renderTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, idx) => {
    if (urlRegex.test(part)) {
      return (
        <a key={idx} href={part} target="_blank" rel="noopener noreferrer" className="experience-link">
          {part}
        </a>
      );
    }
    return part;
  });
};

interface ExperienceData {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string[];
}

// ── Fill in your descriptions below ─────────────────────────────────────────
const EXPERIENCES: ExperienceData[] = [
  {
    title: "AccessiWay",
    subtitle: "Software Engineering Intern",
    image: accessiwayExperience,
    imageAlt: "AccessiWay",
    description: [
      ""
    ],
  },
  {
    title: "Transmutex",
    subtitle: "Machine Learning Research Intern",
    image: transmutexExperience,
    imageAlt: "Transmutex",
    description: [
        "At Transmutex, I researched and implemented Bayesian Optimization and Reinforcement Learning algorithms for novel thorium-based nuclear reactor core assemblies.\n",
       " My highest performing algorithm using Bayesian Optimization secured $100,000 in AWS credits for Transmutex, enabling 2+ months of intensive nuclear reactor simulation research.\n",
        "A generalized version of my algorithms, targeted at Sodium-Fast Reactors, is available on my GitHub at https://github.com/noahmarquie1/sfr_optimizer"
      ]
  },
  {
    title: "UBC Undergraduate Research Opportunities",
    subtitle: "Machine Learning Researcher",
    image: uroExperience,
    imageAlt: "UBC Undergraduate Research Opportunities",
    description: [
      "As part of URO's Research EXperience (REX) program, I spent one year developing ML solutions for ATAC-seq based Cell-Type Deconvolution under the mentorship of Master's student Parsa Seyfourian. In my project MOSAIC, I conducted a systematic benchmark of five ML models — NNLS, Elastic Net, SVR, Random Forests, and XGBoost — to discover how model complexity correlates with deconvolution performance.",
      "I presented my research at UBC's Multidisciplinary Undergraduate Research Conference (MURC), and my tool is available on my GitHub at https://github.com/noahmarquie1/mosaic"
    ],
  },
  {
    title: "UBC Mathematics - Wachs Group",
    subtitle: "Scientific Computing Research Intern",
    image: mathExperience,
    imageAlt: "UBC Mathematics",
    description: [
      "In the Wachs Research Group at UBC's Mathematics Department, ..."
    ],
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
            <p className="experience-subtitle">{exp.subtitle}</p>
            <div className="experience-text-box">
              {Array.isArray(exp.description) ? (
                exp.description.map((para, idx) => <p key={idx}>{renderTextWithLinks(para)}</p>)
              ) : (
                <p>{renderTextWithLinks(exp.description)}</p>
              )}
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
