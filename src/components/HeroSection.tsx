"use client";

import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // YouTube video ID extracted from the URL
  const youtubeVideoId = "0uWWzaYQTYw";
  
  const projectDetails = {
    title: 'Diabetes Detection',
    description: 'Advanced machine learning project for diabetes detection using AI algorithms and Python. Utilizes deep learning to analyze patient data and predict diabetes risk with high accuracy.',
    price: '₹5,500.00'
  };

  // Function to handle video play
  const handleVideoPlay = () => {
    setIsPlaying(true);
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
          {isPlaying ? (
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
              title="Diabetes Detection Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="video-thumbnail" onClick={handleVideoPlay}>
              <img
                src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                onError={(e) => {
                  // Fallback to medium quality if maxres is not available
                  e.currentTarget.src = `https://img.youtube.com/vi/${youtubeVideoId}/mqdefault.jpg`;
                }}
              />
              <div className="play-button">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;