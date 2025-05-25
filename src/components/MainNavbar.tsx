"use client";

import React, { useState } from 'react';
import './MainNavbar.css';

const MainNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileSidebar = () => {
    document.querySelector('.sidebar')?.classList.toggle('mobile-open');
    document.querySelector('.sidebar-overlay')?.classList.toggle('active');
    document.body.classList.toggle('sidebar-mobile-open');
  };

  const handleDropdownToggle = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <div className="main-navbar">
      <div className="main-navbar-container">
        {/* Mobile sidebar toggle */}
        <button className="mobile-sidebar-toggle" onClick={toggleMobileSidebar} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Logo */}
        <a href="#" className="main-navbar-logo">
          Final Year Projects
        </a>

        {/* Search Bar */}
        <div className="search-bar">
          <select className="category-dropdown">
            <option>All Categories</option>
            <option>Java</option>
            <option>Python</option>
            <option>Embedded</option>
          </select>
          <input type="text" placeholder="Search projects..." />
          <button className="search-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* User Actions */}
        <div className="main-navbar-actions">
          <a href="#" className="top-navbar-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="main-navbar-links">
        <a href="#" className="nav-link">Home</a>
        <div className="dropdown" 
             onMouseEnter={() => handleDropdownToggle('projects')}
             onMouseLeave={() => handleDropdownToggle('projects')}>
          <a href="#" className="nav-link">Project Titles</a>
          <div className="dropdown-content" style={{ display: activeDropdown === 'projects' ? 'block' : '' }}>
            <a href="#">Java Projects</a>
            <a href="#">Python Projects</a>
            <a href="#">Machine Learning</a>
            <a href="#">IoT Projects</a>
            <a href="#">Web Development</a>
          </div>
        </div>
        <a href="#" className="nav-link">Journal Paper</a>
        <div className="dropdown"
             onMouseEnter={() => handleDropdownToggle('domain')}
             onMouseLeave={() => handleDropdownToggle('domain')}>
          <a href="#" className="nav-link">Domain</a>
          <div className="dropdown-content" style={{ display: activeDropdown === 'domain' ? 'block' : '' }}>
            <a href="#">Artificial Intelligence</a>
            <a href="#">Data Science</a>
            <a href="#">Cyber Security</a>
            <a href="#">Cloud Computing</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;