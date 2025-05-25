"use client";

import React, { useState } from 'react';
import './HeroSection.css';
// Import images directly
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Diabetes Detection',
      description: 'Advanced machine learning project for diabetes detection using AI algorithms and Python. Utilizes deep learning to analyze patient data and predict diabetes risk.',
      price: '₹5,500.00',
      image: image1
    },
    {
      title: 'Diabetes Detection System',
      description: 'Modern AI-powered solution for early diabetes detection. Implements machine learning models to process medical data and provide accurate predictions.',
      price: '₹6,200.00',
      image: image2
    },
    {
      title: 'ML-based Diabetes Analysis',
      description: 'Innovative project using Python and artificial intelligence to analyze glucose readings and detect diabetes patterns with high accuracy.',
      price: '₹5,800.00',
      image: image3
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <div className="hero-price">
            {slides[currentSlide].price}
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
        
        <div className="hero-image">
          <img 
            src={typeof slides[currentSlide].image === 'string' ? slides[currentSlide].image : slides[currentSlide].image.src} 
            alt={slides[currentSlide].title}
            loading="eager" 
          />
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carousel-btn prev-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>
          <div className="slide-dots">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="carousel-btn next-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;