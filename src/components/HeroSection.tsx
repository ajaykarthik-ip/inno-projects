"use client";

import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  // YouTube video ID extracted from the URL
  const youtubeVideoId = "0uWWzaYQTYw";
  
  const projectDetails = {
    title: 'Diabetes Detection',
    description: 'Advanced machine learning project for diabetes detection using AI algorithms and Python. Utilizes deep learning to analyze patient data and predict diabetes risk with high accuracy.',
    price: '₹5,500.00'
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{projectDetails.title}</h1>
          <p>{projectDetails.description}</p>
          <div className="hero-price">
            {projectDetails.price}
          </div>
          <button className="hero-cta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8"></path>
              <path d="M8 12h8"></path>
            </svg>
            View Project Details
          </button>
        </div>
        
        <div className="hero-video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&showinfo=0&autoplay=0`}
            title="Diabetes Detection Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;