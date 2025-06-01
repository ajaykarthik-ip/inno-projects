"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './HeroSection.css';

// Define the content item interface
interface ContentItem {
  id: string;
  type: 'project' | 'product' | 'promotion' | 'category';
  title: string;
  description: string;
  price?: string;
  discount?: string;
  ctaText: string;
  ctaLink: string;
  mediaType: 'video' | 'gradient';
  videoId?: string;
  gradientColors?: string[];
  icon?: string;
  textColor?: string;
  accentColor?: string;
}

const HeroSection: React.FC = () => {
  // State management
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample content items
  const contentItems: ContentItem[] = [
    {
      id: 'diabetes-detection',
      type: 'project',
      title: 'Diabetes Detection',
      description: 'Advanced machine learning project for diabetes detection using AI algorithms and Python. Utilizes deep learning to analyze patient data and predict diabetes risk with high accuracy.',
      price: '₹5,500.00',
      ctaText: 'View Project Details',
      ctaLink: '/projects/diabetes-detection',
      mediaType: 'video',
      videoId: '0uWWzaYQTYw',
      gradientColors: ['#4A00E0', '#8E2DE2'],
      textColor: '#ffffff',
      accentColor: '#8E2DE2',
      icon: 'health'
    },
    {
      id: 'skin-cancer',
      type: 'project',
      title: 'Skin Cancer Analysis',
      description: 'Advanced machine learning project for skin cancer detection using AI algorithms and Python. Utilizes deep learning to analyze patient images and predict cancer risk with high accuracy.',
      price: '₹6,200.00',
      ctaText: 'View Project Details',
      ctaLink: '/projects/skin-cancer',
      mediaType: 'video',
      videoId: '9SG6JPHMwkY',
      gradientColors: ['#11998e', '#38ef7d'],
      textColor: '#ffffff',
      accentColor: '#38ef7d',
      icon: 'microscope'
    },
    {
      id: 'special-offer',
      type: 'promotion',
      title: 'Special Discount',
      description: 'Get 30% off on all ML projects this week! Limited time offer for students and professionals looking to enhance their portfolio with cutting-edge AI projects.',
      discount: '30% OFF',
      ctaText: 'Browse Offers',
      ctaLink: '/offers',
      mediaType: 'gradient',
      gradientColors: ['#FF416C', '#FF4B2B'],
      textColor: '#ffffff',
      accentColor: '#FFD166',
      icon: 'discount'
    },
    {
      id: 'trending-products',
      type: 'category',
      title: 'Trending AI Projects',
      description: 'Discover the most popular AI and machine learning projects that are transforming industries. From computer vision to natural language processing.',
      ctaText: 'Explore Collection',
      ctaLink: '/trending',
      mediaType: 'gradient',
      gradientColors: ['#0F2027', '#203A43', '#2C5364'],
      textColor: '#ffffff',
      accentColor: '#06D6A0',
      icon: 'trending'
    }
  ];

  // Function to handle video play
  const handleVideoPlay = () => {
    pauseAutoplay();
    setIsPlaying(true);
  };

  // Function to switch to next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsPlaying(false);
    setActiveSlide((prev) => (prev + 1) % contentItems.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Function to switch to previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsPlaying(false);
    setActiveSlide((prev) => (prev === 0 ? contentItems.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeSlide) return;
    
    setIsTransitioning(true);
    setIsPlaying(false);
    setActiveSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Start autoplay
  const startAutoplay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  // Pause autoplay
  const pauseAutoplay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // If swipe distance is significant
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // Swipe left
      } else {
        prevSlide(); // Swipe right
      }
      setTouchStart(0);
    }
  };

  // Initialize autoplay and clean up on unmount
  useEffect(() => {
    startAutoplay();
    
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  // Restart autoplay when video stops playing
  useEffect(() => {
    if (!isPlaying) {
      startAutoplay();
    }
  }, [isPlaying]);

  // Current active content
  const currentContent = contentItems[activeSlide];

  // Get icon for the current content type
  const getContentIcon = () => {
    switch (currentContent.icon) {
      case 'health':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        );
      case 'microscope':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 22c4.97 0 9-4.03 9-9h-4c0 2.76-2.24 5-5 5s-5-2.24-5-5H3c0 4.97 4.03 9 9 9zm0-18C7.03 4 3 8.03 3 13h4c0-2.76 2.24-5 5-5s5 2.24 5 5h4c0-4.97-4.03-9-9-9z" />
            <path d="M12 13l3.47 -6 -6.94 0z" />
          </svg>
        );
      case 'discount':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
          </svg>
        );
      case 'trending':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
        );
    }
  };

  // Generate gradient background style
  const getBackgroundStyle = () => {
    if (currentContent.gradientColors && currentContent.gradientColors.length > 0) {
      if (currentContent.gradientColors.length === 1) {
        return { backgroundColor: currentContent.gradientColors[0] };
      } else {
        return {
          background: `linear-gradient(135deg, ${currentContent.gradientColors.join(', ')})`
        };
      }
    }
    return { backgroundColor: '#1a1a2e' };
  };

  return (
    <div 
      className="hero-section"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={containerRef}
    >
      <div 
        className={`hero-content ${isTransitioning ? 'transitioning' : ''}`} 
        style={{ 
          color: currentContent.textColor || '#ffffff',
          '--accent-color': currentContent.accentColor || '#8E2DE2'
        } as React.CSSProperties}
      >
        <div className="hero-background" style={getBackgroundStyle()}>
          <div className="animated-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-text">
          <div className="content-type-badge">
            <span className="icon-wrapper">{getContentIcon()}</span>
            <span>{currentContent.type}</span>
          </div>
          
          <div className="content-header">
            <h1>{currentContent.title}</h1>
            {currentContent.discount && (
              <div className="discount-badge">{currentContent.discount}</div>
            )}
          </div>
          
          <p>{currentContent.description}</p>
          
          {currentContent.price && (
            <div className="hero-price">
              {currentContent.price}
            </div>
          )}
          
          <button className="hero-cta" style={{ backgroundColor: currentContent.accentColor || 'var(--accent-primary)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {currentContent.type === 'project' ? (
                <>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </>
              ) : currentContent.type === 'product' ? (
                <>
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </>
              ) : (
                <>
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </>
              )}
            </svg>
            {currentContent.ctaText}
          </button>
        </div>
        
        <div className="hero-media">
          {currentContent.mediaType === 'video' && isPlaying ? (
            <iframe 
              src={`https://www.youtube.com/embed/${currentContent.videoId}?autoplay=1`}
              title={`${currentContent.title} Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : currentContent.mediaType === 'video' ? (
            <div className="video-thumbnail" onClick={handleVideoPlay}>
              <Image
                src={`https://img.youtube.com/vi/${currentContent.videoId}/maxresdefault.jpg`}
                alt={currentContent.title}
                width={1280}
                height={720}
                onError={(e) => {
                  // Fallback to medium quality if maxres is not available
                  if (currentContent.videoId) {
                    e.currentTarget.src = `https://img.youtube.com/vi/${currentContent.videoId}/mqdefault.jpg`;
                  }
                }}
                style={{ width: '100%', height: 'auto' }}
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
          ) : (
            <div className="media-placeholder">
              <div className="icon-large">{getContentIcon()}</div>
              <div className="floating-particles">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Navigation arrows */}
        <button className="nav-button prev" onClick={prevSlide} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="nav-button next" onClick={nextSlide} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Slide indicators */}
      <div className="slide-indicators">
        {contentItems.map((_, index) => (
          <button 
            key={index} 
            className={`indicator ${activeSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="indicator-progress"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

