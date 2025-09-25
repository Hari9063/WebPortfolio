import React from "react";

const Projects = () => {
  const projects = [
    { title: "Library Management", description: "A web-based application to manage books, members, and loans efficiently It supports adding, updating, and tracking library records with ease Built using Java, Spring Boot, React, and MySQL for seamless performance"
      , link: "https://libraryapp-3xxi.onrender.com",blink:"https://libarymanagement-6.onrender.com/api/books" },
    { title: "WeatherStory App", description: "A web app that generates interactive stories based on current weather conditions It provides real-time weather updates and visualizes them creatively in a story format Built using JavaScript, APIs, and modern web technologies for an engaging user"
      , link: "https://weatherapp-bkb7.onrender.com" ,blink:"https://weatherappbackend-3.onrender.com/api/weather/Bengaluru" }
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title neon-text flicker">Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card neon-border" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn neon-border">Project Url</a>
             <a href={project.blink} className="btn neon-border">Backend Url</a>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
