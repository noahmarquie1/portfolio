import React from "react";
import "./Skills.css";
import flippersIcon from "../assets/skills/flippers.png";
import bikeIcon from "../assets/skills/bike.png";
import pianoIcon from "../assets/skills/piano.png";
import frenchIcon from "../assets/skills/french.png";

export const Skills: React.FC = () => {
  const skills = [
    {
      title: "Freediving",
      icon: flippersIcon,
      description: "Freediving is a favorite hobby of mine, diving both in pools and in the open ocean. In my training, I reached AIDA 3 certification with a personal best dive of 30 meters (Constant Weight), and a personal best static breath hold of 3 minutes and 45 seconds (Static Apnea)."
    },
    {
      title: "Mountain Biking",
      icon: bikeIcon,
      description: "I have been mountain biking for 6+ years in my home of Marin, California, and have a passion for exploring new trails and improving my technical skills. It has recently become a fun way for me to connect with my friends and family during breaks from university, which I look forward to every visit back home."
    },
    {
      title: "Jazz",
      icon: pianoIcon,
      description: "I love listening to and playing jazz music, and received formal training in jazz piano for multiple years. I have experience performing with bands at art galleries and school events, and am particularly inspired by the works of Bill Evans, Dave Brubeck and Charles Mingus."
    },
    {
      title: "French",
      icon: frenchIcon,
      description: "Over the past 5 year I've built up to professional working proficiency in French (B2 CEFR). As part of this journey, I received special admission to the Villefranche-sur-Mer Institut de Français at 19 years of age, which is regularly exclusive to students ages 21 and up, and graduated with distinction."
    }
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills & Interests</h2>
      <ol className="timeline skills-timeline">
        {skills.map((skill, index) => (
          <li key={skill.title} className="timeline-item">
            <div className="timeline-header">
              {index < 3 ? (
                <span
                  className="timeline-logo skill-logo"
                  style={{
                    maskImage: `url(${skill.icon})`,
                    WebkitMaskImage: `url(${skill.icon})`,
                  }}
                />
              ) : (
                <img src={skill.icon} alt="" className="timeline-logo" />
              )}
              <h3 className="timeline-title">{skill.title}</h3>
            </div>
            <p className="timeline-text">{skill.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
export default Skills;

