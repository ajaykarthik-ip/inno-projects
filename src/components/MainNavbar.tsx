"use client";

import React, { useEffect, useState } from 'react';
import './MainNavbar.css';
import Link from 'next/link';

const MainNavbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Check if component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileSidebar = () => {
    // Only run on the client side
    if (!isMounted) return;
    
    // Call the global function defined in SidebarMenu
    if (typeof window !== 'undefined' && window.toggleMobileSidebar) {
      window.toggleMobileSidebar();
    } else {
      // Fallback in case the global function isn't available yet
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.sidebar-overlay');
      
      if (sidebar) {
        sidebar.classList.toggle('mobile-open');
      }
      
      if (overlay) {
        overlay.classList.toggle('active');
      }
      
      // Toggle body class for dimming effect
      if (document.body.classList.contains('sidebar-mobile-open')) {
        document.body.classList.remove('sidebar-mobile-open');
      } else {
        document.body.classList.add('sidebar-mobile-open');
      }
    }
  };

  const handleLogoClick = () => {
    document.body.classList.remove('sidebar-collapsed', 'sidebar-mobile-open');
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) overlay.classList.remove('active');
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
        <Link href="/" className="main-navbar-logo" onClick={handleLogoClick}>
          Final Year Projects
        </Link>

        {/* Search Bar */}
        {/* <div className="search-bar">
          <select className="category-dropdown">
            <option>All Categories</option>
            <option>Java</option>
            <option>Python</option>
            <option>Embedded</option>
            <option>Machine Learning</option>
            <option>Web Development</option>
          </select>
          <input type="text" placeholder="Search projects..." />
          <button className="search-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div> */}

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
    </div>
  );
};

export default MainNavbar;  