import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inno Projects</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
