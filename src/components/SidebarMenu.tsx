"use client";

import React, { useState, useEffect } from 'react';
import './SidebarMenu.css';

const SidebarMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const categories = [
    { name: 'View My Project', icon: 'code' },
    { name: 'Project list', icon: 'code' },
    { name: 'Request new Project', icon: 'bar-chart-2' },
    { name: 'IEEE Journal Paper', icon: 'tool' },
    { name: 'Dashboard', icon: 'cpu' },
    { name: 'Contact Us', icon: 'brain' },
    { name: 'Book Meeting', icon: 'brain' },
    { name: 'Mini Project', icon: 'link' }
  ];

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true);
    
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Toggle sidebar collapse state (for desktop)
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Define global toggle function for mobile use
  useEffect(() => {
    if (isMounted) {
      // Only run on client-side
      window.toggleMobileSidebar = () => {
        setMobileOpen(prev => !prev);
      };

      return () => {
        // Clean up
        delete window.toggleMobileSidebar;
      };
    }
  }, [isMounted]);

  // Update body classes when mobile state changes
  useEffect(() => {
    if (!isMounted) return;
    
    // Get overlay element
    const overlay = document.querySelector('.sidebar-overlay');
    
    if (mobileOpen) {
      // Show the overlay
      document.body.classList.add('sidebar-mobile-open');
      overlay?.classList.add('active');
    } else {
      // Hide the overlay
      document.body.classList.remove('sidebar-mobile-open');
      overlay?.classList.remove('active');
    }
  }, [mobileOpen, isMounted]);

  // Handle desktop collapsed state
  useEffect(() => {
    if (!isMounted) return;
    
    if (collapsed) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
  }, [collapsed, isMounted]);

  // Close sidebar when clicking outside
  useEffect(() => {
    if (!isMounted) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && !sidebar.contains(event.target as Node) && isMobile && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen, isMobile, isMounted]);

  // Close sidebar when escape key is pressed
  useEffect(() => {
    if (!isMounted) return;
    
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [mobileOpen, isMounted]);

  // Function to render an icon based on name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'bar-chart-2':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        );
      case 'tool':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        );
      case 'cpu':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
        );
      case 'brain':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-15a2.5 2.5 0 0 1 5-.44A2.5 2.5 0 0 1 9.5 2Z"></path>
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-15a2.5 2.5 0 0 0-5-.44A2.5 2.5 0 0 0 14.5 2Z"></path>
          </svg>
        );
      case 'link':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
    }
  };

  return (
    <>
      {/* Overlay for mobile - no window object access during render */}
      <div 
        className={`sidebar-overlay ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)}
      ></div>
      
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          {!collapsed && <h3>Browse</h3>}
          <button 
            className="collapse-btn" 
            onClick={isMobile ? () => setMobileOpen(false) : toggleSidebar} 
            aria-label="Toggle sidebar"
          >
            {collapsed ? 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg> : 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            }
          </button>
        </div>
        
        <ul className="sidebar-categories">
          {categories.map((category, index) => (
            <li key={index} className="sidebar-category-item">
              <a href="#" className="sidebar-category-link">
                <span className="sidebar-icon">{renderIcon(category.icon)}</span>
                <span className="sidebar-text">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarMenu;

// Add global type definition
declare global {
  interface Window {
    toggleMobileSidebar?: () => void;
  }
}