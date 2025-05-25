// src/app/admin/layout.tsx
"use client";

import React, { useEffect } from 'react';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
            <div className="content-section">
              <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Manage your projects from this panel</p>
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}