import React from 'react';
import './TopNavbar.css';

const TopNavbar: React.FC = () => {
  return (
    <div className="top-navbar">
      <div className="top-navbar-container">
        <div className="welcome-message">
          Welcome to Final Year Projects!!
        </div>
        <div className="top-navbar-right">
          <div className="social-icons">
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">YouTube</a>
          </div>
          <div className="top-navbar-links">
            <a href="#" className="top-navbar-link">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;