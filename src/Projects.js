import mfadash from './mfa-dash.png'
import moonlo from './moonlo.png'
import React from 'react';

const projects = [
  {
    title: "MFA Dashboard",
    description: "A dashboard for managing Multi-Factor Authentication factors.",
    link: "https://mfa-dashboard.vercel.app",
    repo: "https://github.com/jonrovner/mfa-dashboard",
    image: mfadash
  },
  {
    title: "Moonlo",
    description: "A Datibg App based on astrology, built with React Native and Talk.js",
    link: "https://github.com/jonrovner/moonlo-app",
    repo: "https://github.com/jonrovner/moonlo-app",
    image: moonlo
  }
];

function Projects() {
  return (
    <div className="projects">
      <h2 className='projects_title'>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
             <img src={project.image} alt={project.title} className="project-image" />  
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Demo | </a>  
            <a href={project.repo} target="_blank" rel="noopener noreferrer">|   GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
