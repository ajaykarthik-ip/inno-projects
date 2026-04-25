"use client";

import React, { useEffect, useState } from 'react';
import './MainNavbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';

const MainNavbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

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
          {/* Theme Toggle */}
          <button
            className="theme-toggle-btn top-navbar-link"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              /* Sun icon — switch to light */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon — switch to dark */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;