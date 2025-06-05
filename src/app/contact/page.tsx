"use client";

import React from 'react';
import './page.css';

export default function Contact() {
  const phoneNumber = "9600309140";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hello!%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCallClick = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Connect with us instantly through WhatsApp for quick support or call us directly.
        </p>

        <div className="whatsapp-section">
          <div className="whatsapp-icon">
            📱
          </div>
          <h3 className="service-title">Contact Us</h3>
          <p className="service-description">
            Choose your preferred way to reach us
          </p>
          <div className="phone-number">+91 {phoneNumber}</div>
          
          <div className="action-buttons">
            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
              <span>💬</span>
              <span>Start Chat</span>
            </button>
            
            <button className="call-btn" onClick={handleCallClick}>
              <span>📞</span>
              <span>Call Now</span>
            </button>
          </div>
        </div>

        <div className="contact-footer">
          <p>Available 24/7</p>
        </div>
      </div>
    </div>
  );
}