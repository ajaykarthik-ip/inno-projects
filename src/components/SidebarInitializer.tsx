"use client";

import { useEffect } from 'react';

export default function SidebarInitializer() {
  useEffect(() => {
    document.body.classList.remove('sidebar-collapsed');
    document.body.classList.remove('sidebar-mobile-open');
    return () => {
      document.body.classList.remove('sidebar-collapsed');
      document.body.classList.remove('sidebar-mobile-open');
    };
  }, []);

  return null;
}
