"use client";

import { useEffect } from 'react';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function Home() {
  // Initialize sidebar state on component mount
  useEffect(() => {
    // Set initial state - not collapsed
    document.body.classList.remove('sidebar-collapsed');
    document.body.classList.remove('sidebar-mobile-open');
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('sidebar-collapsed');
      document.body.classList.remove('sidebar-mobile-open');
    };
  }, []);

  return (
    <div className="app-container">
      <SidebarMenu />
      
      <div className="page-content">
        <MainNavbar />
        
        <div className="main-content-wrapper">
          <main className="main-content">
            <HeroSection />
            
            <div className="content-section">
              <FeaturedProjects />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}