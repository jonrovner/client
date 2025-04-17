import React from 'react';
import company from './company.png'

const experiences = [
  {
    role: "Co-Founder & IAM Consultant",
    company: "Autheroes – Consultancy Company",
    period: "02/2025 – present",
    description: "Leading authentication and access control solutions for enterprise clients."
  },
  {
    role: "DeveloperSupport Engineer",
    company: "Auth0 by Okta",
    period: "May 2022 – Feb 2025",
    description: "Specialized in identity and access management solutions, providing technical support and guidance."
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2020 – 2022",
    description: "Developed web applications with focus on security and user authentication."
  }
];

function WorkExperience() {
  return (
    <div className="work-experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <div className="company-container">
              <img src={company} alt="company" className="company-icon" />
              <p className="company">{exp.company}</p>
            
            </div>
            <p className="period">{exp.period}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience; 