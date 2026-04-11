"use client";

import { useEffect } from 'react';
import MainHero from '@/components/MainHero';
import ReferEarnBanner from '@/components/ReferEarnBanner';
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
    <div className="main-content-wrapper">
      <main className="main-content">
        <MainHero />
        <ReferEarnBanner />
        <div className="content-section">
          <FeaturedProjects />
        </div>
      </main>
    </div>
  );
}