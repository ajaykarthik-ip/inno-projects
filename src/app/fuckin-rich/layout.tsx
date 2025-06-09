// src/app/admin/layout.tsx
"use client";

import React, { useEffect } from 'react';

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

  // We're not adding any wrapper elements here, 
  // just passing children directly to avoid duplication
  return children;
}