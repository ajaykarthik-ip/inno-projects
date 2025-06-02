import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="app-container">
          <SidebarMenu />
          <div className="page-content">
            <MainNavbar />
            <div className="main-content-wrapper">
              <main className="main-content">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}