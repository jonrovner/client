import React from 'react';
import logo from './logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jonarovner/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:jonathan.rovner@autheroes.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/jonrovner" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 