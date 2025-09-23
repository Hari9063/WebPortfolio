
// Education.js
import React from "react"; // Optional: for styling

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Mechanical Engineering",
      location:"Rajampeta,AndhraPradesh",
      institution: "Annamacharya institute of technology and sciences",
      year: "2021 – 2025",
      grade :"8.6 CGPA"
    },
    {
      degree: "Department in Mechanical Enginerring",
      location:"Tirupati,AndhraPradesh",
      institution:"SV Govt Polytechnic ",
      year: "2018 – 2021",
      grade:"82 %"
    },
    {
      degree:"S.S.C",
    location:"Tadipatri,AndhraPradesh",

      institution:"Good Shepherd EM School",
      year: "2018",
      grade:"10 "
    }
  ];

  return (
    <div className="education-section" id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.location}</p>
            <span>{edu.year}</span>
            <p>{edu.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
