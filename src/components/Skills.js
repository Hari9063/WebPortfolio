import React from "react";

const Skills = () => {
  const skills = [
    { name: "Java & Spring Boot", width: "90%" },
    { name: "React & Frontend", width: "60%" },
    { name: "MySQL & Databases", width: "80%" }
  ];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title neon-text flicker">Skills</h2>
      <div className="skill-bars">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span>{skill.name}</span>
            <div className="bar">
              <div className="fill" style={{ width: skill.width }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
