"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './page.css';

export default function Contact(): React.JSX.Element {
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
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <h3 className="service-title">Contact Us</h3>
          <p className="service-description">
            Choose your preferred way to reach us
          </p>
          <div className="phone-number">+91 {phoneNumber}</div>
          
          <div className="action-buttons">
            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Start Chat</span>
            </button>
            
            <button className="call-btn" onClick={handleCallClick}>
              <FontAwesomeIcon icon={faPhone} />
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