import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 VJ. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/privacy" className="nav-link">Privacy Policy</a>
          <a href="/terms" className="nav-link">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

