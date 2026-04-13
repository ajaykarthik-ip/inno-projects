"use client";

import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919600309140?text=Hi%2C%20I%20am%20interested%20in%20your%20projects!', '_blank');
  };

  return (
    <footer className="footer">
      {/* Gradient top line */}
      <div className="footer-glow-line" />

      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">Inno Projects</span>
            <p className="footer-tagline">
              Premium AI, ML &amp; Web projects built for engineering students and researchers. Delivered fast, built to impress.
            </p>
            <button className="footer-whatsapp-btn" onClick={handleWhatsApp}>
              <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Explore</h4>
            <ul className="footer-nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/project-titles">Project Catalog</Link></li>
              <li><Link href="/request-project">Request a Project</Link></li>
              <li><Link href="/ieee-journal">IEEE Journal</Link></li>
              <li><Link href="/blog">Tips &amp; Tricks</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Services</h4>
            <ul className="footer-nav">
              <li><span>AI &amp; ML Projects</span></li>
              <li><span>Web Development</span></li>
              <li><span>IoT &amp; Blockchain</span></li>
              <li><span>IEEE Paper Publication</span></li>
              <li><span>Expert Consultation</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Get in Touch</h4>
            <div className="footer-contact-list">
              <a href="tel:9600309140" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span>+91 96003 09140</span>
              </a>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span>Coimbatore, Tamil Nadu</span>
              </div>
              <div className="footer-badge-row">
                <span className="footer-badge">600+ Projects / Year</span>
                <span className="footer-badge">24/7 Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Inno Projects. All rights reserved.</p>
          <p className="footer-made">Built for engineers, by engineers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
