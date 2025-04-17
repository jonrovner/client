import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Footer from './Footer';

function Home() {

    const {isAuthenticated } = useAuth0() 
    
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('.projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        // This will be implemented when we add the contact form
        alert('Contact form coming soon!');
    };
    
    return ( 
    <div className='home_container'>
      <div className="hero">
        <div className="headline">
          <h1>Jonathan Rovner</h1>
          <h2>Full Stack Developer | Authentication & Access Control Specialist</h2>
          <h3>Support Engineer</h3>
        </div>
        <div className="cta-buttons">
          <button onClick={scrollToProjects}>View Projects</button>
          <button onClick={scrollToContact}>Contact Me</button>
        </div>
       </div>
        <WorkExperience />
        <Projects />
        <Footer />
    </div>   
    
  );
}

export default Home;