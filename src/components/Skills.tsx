import React from "react";
import "./Skills.css";

export const Skills: React.FC = () => {
  const skills = [
    {
      title: "Frontend",
      icon: "🎨",
      subtitle: "React & TypeScript",
      description: "Building responsive UIs with modern frameworks"
    },
    {
      title: "Backend",
      icon: "⚙️",
      subtitle: "Node.js & APIs",
      description: "Designing scalable server architectures"
    },
    {
      title: "Design",
      icon: "✨",
      subtitle: "UI/UX",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      title: "Tools",
      icon: "🛠️",
      subtitle: "Git & Vite",
      description: "Leveraging modern development tools"
    }
  ];

  return (
    <div className="skills-container" id="skills">
      <div className="skills-title">Skills & Interests</div>
      <div className="skills-cubes">
        {skills.map((skill, index) => (
          <div key={index} className="cube">
            <div className="cube-content">
              <div className="cube-top">
                <div className="cube-title">{skill.title}</div>
                <div className="cube-icon">{skill.icon}</div>
                <div className="cube-subtitle">{skill.subtitle}</div>
              </div>
              <div className="cube-description">{skill.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
