import React from "react";
import "./Experience.css";

import teslaLogo from "../assets/tesla.svg";
import accessiwayLogo from "../assets/accessiway.png";
import transmutexLogo from "../assets/transmutex.png";
import uroLogo from "../assets/ubc_uro.png";
import mathLogo from "../assets/math.png";

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
  logo: string;
  description: string[];
}

// ── Fill in your descriptions below ─────────────────────────────────────────
const EXPERIENCES: ExperienceData[] = [
  {
    title: "Tesla",
    subtitle: "Energy Optimization Software Intern  •  Sep 2026 — Dec 2026",
    logo: teslaLogo,
    description: [
      "At Tesla, I am currently developing deep learning-based probabilistic forecasting methodologies for US energy market trading, including scenario pipelines and a multi-model evaluation suite",
      "Additionally, I have shipped production-level backtesting and forecasting workflows in Python, deploying on Kubernetes and utilizing cloud-based tooling to evaluate forecast performance for Tesla's Megapack bidding.",
    ],
  },
  {
    title: "UBC Mathematics - Wachs Group",
    subtitle: "Scientific Computing Research Intern  •  May 2026 — Aug 2026",
    logo: mathLogo,
    description: [
      "Under Professor Anthony Wachs, I developed algorithms to find even point distributions on complex geometries using both geometrical and physical approaches.",
      "My project Dendrite leveraged high-performance Python with JAX and SciPy to simulate particles with physical forces relaxing into equilibrium states, producing accurate point-clouds for various fluid dynamics experiments.",
     "Additionally, I conducted high-performance fluid dynamics simulations using C++ and Basilisk, and developed custom gradient-descent algorithms for in-house CFD (Computational Fluid Dynamics) solvers.",
     "Check out my Dendrite code at https://github.com/noahmarquie1/dendrite"
    ],
  },
  {
    title: "UBC Undergraduate Research Opportunities",
    subtitle: "Machine Learning Researcher  •  Sep 2025 — Aug 2026",
    logo: uroLogo,
    description: [
      "As part of URO's Research EXperience (REX) program, I spent one year developing ML solutions for ATAC-seq based Cell-Type Deconvolution under the mentorship of Master's student Parsa Seyfourian. In my project MOSAIC, I conducted a systematic benchmark of five ML models — NNLS, Elastic Net, SVR, Random Forests, and XGBoost — to discover how model complexity correlates with deconvolution performance.",
      "I presented my research at UBC's Multidisciplinary Undergraduate Research Conference (MURC), and my tool is available on my GitHub at https://github.com/noahmarquie1/mosaic"
    ],
  },
  {
    title: "Transmutex",
    subtitle: "Machine Learning Research Intern  •  May 2025 — Jul 2025",
    logo: transmutexLogo,
    description: [
        "At Transmutex, I researched and implemented Bayesian Optimization and Reinforcement Learning algorithms for novel thorium-based nuclear reactor core assemblies.\n",
       " My highest performing algorithm using Bayesian Optimization secured $100,000 in AWS credits for Transmutex, enabling 2+ months of intensive nuclear reactor simulation research.\n",
        "A generalized version of my algorithms, targeted at Sodium-Fast Reactors, is available on my GitHub at https://github.com/noahmarquie1/sfr_optimizer"
      ]
  },
  {
    title: "AccessiWay",
    subtitle: "Software Engineer Intern  •  Jan 2024 — Mar 2024",
    logo: accessiwayLogo,
    description: [
      "At AccessiWay, I contributed to both Frontend Development and Computer Vision Engineering in the company’s website and software products.",
      "In Frontend Development, I built and maintained parts of the AccessiWay website using JavaScript and React, focusing primarily on accessible user interfaces and strict WCAG compliance.",
      "In Computer Vision Engineering, I contributed to the development and testing of the AccessPDF software by creating custom computer-vision architectures using OpenCV and YOLO to automate accessible annotation and formatting within PDF components.",
    ],
  },
];

export const Experience: React.FC = () => (
  <section className="section" id="experience">
    <h2 className="section-title">Experience</h2>
    <ol className="timeline">
      {EXPERIENCES.map((exp) => (
        <li key={exp.title} className="timeline-item">
          <div className="timeline-header">
            <img src={exp.logo} alt="" className="timeline-logo" />
            <div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-subtitle">{exp.subtitle}</p>
            </div>
          </div>
          {exp.description.map((para, idx) => (
            <p key={idx} className="timeline-text">
              {renderTextWithLinks(para)}
            </p>
          ))}
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;

