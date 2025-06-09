"use client";

import React, { useEffect, useState } from 'react';
import './MainNavbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainNavbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

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

        {/* Logo - conditionally rendered based on current path */}
        {pathname === '/' ? (
          <span className="main-navbar-logo neon-text">
            Inno Projects
          </span>
        ) : (
          <Link href="/" className="main-navbar-logo neon-text" onClick={handleLogoClick}>
            Inno Projects
          </Link>
        )}

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