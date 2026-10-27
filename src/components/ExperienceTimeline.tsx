import { useState } from "react";
import "./ExperienceTimeline.css";

import teslaLogo from "../assets/tesla.svg";
import accessiwayLogo from "../assets/accessiway.png";
import transmutexLogo from "../assets/transmutex.png";
import uroLogo from "../assets/ubc_uro.png";
import mathLogo from "../assets/math.png";

import accessiwayExperience from "../assets/experience/accessiwayDetail.avif";
import transmutexExperience from "../assets/experience/fission_rates.gif";
import uroExperience from "../assets/experience/rex_murc.jpg";
import mathExperience from "../assets/experience/point_clouds.gif";

const renderTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, idx) => {
    if (urlRegex.test(part)) {
      return (
        <a key={idx} href={part} target="_blank" rel="noopener noreferrer">
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
  meta?: string;
  icon: string;
  iconAlt: string;
  image?: string;
  imageAlt?: string;
  description: string[];
}

const EXPERIENCES: ExperienceData[] = [
  {
    title: "Tesla",
    subtitle: "Energy Optimization Software Intern",
    meta: "Sep 2026 - Present · Palo Alto, California, United States · On-site",
    icon: teslaLogo,
    iconAlt: "Tesla logo",
    description: [
      "Developed deep learning-based probabilistic forecasting methodologies for US energy market trading, including scenario pipelines and a multi-model evaluation suite.",
      "Shipped production-level backtesting and forecasting workflows in Python, using cloud-based tooling to evaluate forecast performance for Tesla's Megapack bidding.",
      "Skills: Time Series Forecasting, Machine Learning.",
    ],
  },
  {
    title: "AccessiWay",
    subtitle: "Software Engineering Intern",
    icon: accessiwayLogo,
    iconAlt: "AccessiWay logo",
    image: accessiwayExperience,
    imageAlt: "AccessiWay",
    description: [
      "At AccessiWay, I contributed to both Frontend Development and Computer Vision Engineering in the company’s website and software products.",
      "In Frontend Development, I built and maintained parts of the AccessiWay website using JavaScript and React, focusing primarily on accessible user interfaces and strict WCAG compliance.",
      "In Computer Vision Engineering, I contributed to the development and testing of the AccessPDF software by creating custom computer-vision architectures using OpenCV and YOLO to automate accessible annotation and formatting within PDF components.",
    ],
  },
  {
    title: "Transmutex",
    subtitle: "Machine Learning Research Intern",
    icon: transmutexLogo,
    iconAlt: "Transmutex logo",
    image: transmutexExperience,
    imageAlt: "Transmutex",
    description: [
      "At Transmutex, I researched and implemented Bayesian Optimization and Reinforcement Learning algorithms for novel thorium-based nuclear reactor core assemblies.",
      "My highest performing algorithm using Bayesian Optimization secured $100,000 in AWS credits for Transmutex, enabling 2+ months of intensive nuclear reactor simulation research.",
      "A generalized version of my algorithms, targeted at Sodium-Fast Reactors, is available on my GitHub at https://github.com/noahmarquie1/sfr_optimizer",
    ],
  },
  {
    title: "UBC Undergraduate Research Opportunities",
    subtitle: "Machine Learning Researcher",
    icon: uroLogo,
    iconAlt: "UBC Undergraduate Research Opportunities logo",
    image: uroExperience,
    imageAlt: "UBC Undergraduate Research Opportunities",
    description: [
      "As part of URO's Research EXperience (REX) program, I spent one year developing ML solutions for ATAC-seq based Cell-Type Deconvolution under the mentorship of Master's student Parsa Seyfourian. In my project MOSAIC, I conducted a systematic benchmark of five ML models — NNLS, Elastic Net, SVR, Random Forests, and XGBoost — to discover how model complexity correlates with deconvolution performance.",
      "I presented my research at UBC's Multidisciplinary Undergraduate Research Conference (MURC), and my tool is available on my GitHub at https://github.com/noahmarquie1/mosaic",
    ],
  },
  {
    title: "UBC Mathematics - Wachs Group",
    subtitle: "Scientific Computing Research Intern",
    icon: mathLogo,
    iconAlt: "UBC Mathematics logo",
    image: mathExperience,
    imageAlt: "UBC Mathematics",
    description: [
      "Under Professor Anthony Wachs, I am currently developing algorithms to find even point distributions on complex geometries using both geometrical and physical approaches.",
      "My project Dendrite leverages high-performance Python with JAX and SciPy to simulate particles with physical forces relaxing into equilibrium states, producing accurate point-clouds for various fluid dynamics experiments.",
      "Additionally, I am conducting high-performance fluid dynamics simulations using C++ and Basilisk, and developing custom gradient-descent algorithms for in-house CFD (Computational Fluid Dynamics) solvers.",
      "Check out my Dendrite code at https://github.com/noahmarquie1/dendrite",
    ],
  },
];

type TimelineVariant = "line" | "minimal" | "detailed";

const VARIANTS: { id: TimelineVariant; label: string; note: string }[] = [
  {
    id: "line",
    label: "Option 1: Line",
    note: "A single vertical line on the left, with each company icon on the line.",
  },
  {
    id: "minimal",
    label: "Option 2: Minimal",
    note: "Inspired by alisawuffles.github.io — plain text, one column, no cards.",
  },
  {
    id: "detailed",
    label: "Option 3: Detailed",
    note: "Icon on top, then text, then the existing detail image for each experience.",
  },
];

export function ExperienceTimeline() {
  const [variant, setVariant] = useState<TimelineVariant>("minimal");

  return (
    <section id="experience" className="timeline-section">
      <h2>Experience</h2>
      <p className="timeline-intro">
        All experiences, in one column, top to bottom. Pick a timeline style
        below — the content and company icons stay the same.
      </p>

      <div className="timeline-options" role="group" aria-label="Timeline style">
        {VARIANTS.map((v) => (
          <button
            key={v.id}
            type="button"
            className={variant === v.id ? "timeline-option selected" : "timeline-option"}
            onClick={() => setVariant(v.id)}
            aria-pressed={variant === v.id}
          >
            {v.label}
          </button>
        ))}
      </div>
      <p className="timeline-option-note">
        {VARIANTS.find((v) => v.id === variant)?.note}
      </p>

      <div className={`timeline-list timeline-${variant}`}>
        {EXPERIENCES.map((exp) => (
          <article key={exp.title} className="timeline-item">
            <div className="timeline-icon-wrap">
              <img src={exp.icon} alt={exp.iconAlt} className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="timeline-subtitle">{exp.subtitle}</p>
              {exp.meta && <p className="timeline-meta">{exp.meta}</p>}
              {variant === "detailed" && exp.image && (
                <img src={exp.image} alt={exp.imageAlt} className="timeline-detail-image" />
              )}
              {exp.description.map((para, idx) => (
                <p key={idx}>{renderTextWithLinks(para)}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
