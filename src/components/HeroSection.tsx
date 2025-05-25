"use client";

import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Diagnosing Breast Cancer',
      description: 'Advanced machine learning project for early breast cancer detection using deep learning techniques.',
      price: '₹5,500.00',
      image: '/placeholder-flowchart.png'
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
          <button className="hero-cta">View Project Details</button>
        </div>
        
        <div className="hero-image">
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
          />
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carousel-btn prev-btn">
            ←
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
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;