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
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">YouTube</a>
            <a href="#" className="social-icon">Pinterest</a>
          </div>
          <div className="top-navbar-links">
            <a href="#" className="top-navbar-link">Newsletter</a>
            <a href="#" className="top-navbar-link">Contact Number</a>
            <a href="#" className="top-navbar-link">Contact Us</a>
            <a href="#" className="top-navbar-link">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;