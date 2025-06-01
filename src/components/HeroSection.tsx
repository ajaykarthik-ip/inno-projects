  "use client";

  import React, { useState, useEffect, useRef } from 'react';
  import './HeroSection.css';

  // Simplified content item interface
  interface ContentItem {
    id: string;
    title: string;
    description: string;
    price?: string;
    discount?: string;
    ctaText: string;
    ctaLink: string;
    mediaType: 'gradient';
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

    // Updated content items with the 4 requested sections
    const contentItems: ContentItem[] = [
      {
        id: 'referral-program',
        title: 'Refer & Earn Rewards',
        description: 'Refer your friend to get up to 90% discount and also receive cashback on all your purchases. The more friends you refer, the bigger your rewards! Even Free Projects!!!',
        discount: 'UP TO 90% OFF',
        ctaText: 'Invite Friends Now',
        ctaLink: '/referral',
        mediaType: 'gradient',
        gradientColors: ['#FF416C', '#FF4B2B'],
        textColor: '#ffffff',
        accentColor: '#FFD166',
        icon: 'gift'
      },
      {
        id: 'book-appointment',
        title: 'Expert Consultation',
        description: 'Schedule appointments with experienced software engineers to get personalized guidance on your projects. Ask your doubts and receive expert advice to accelerate your development.',
        ctaText: 'Book a Session',
        ctaLink: '/appointments',
        mediaType: 'gradient',
        gradientColors: ['#0575E6', '#021B79'],
        textColor: '#ffffff',
        accentColor: '#64B5F6',
        icon: 'calendar'
      },
      {
        id: 'request-project',
        title: 'Request New Project',
        description: 'Need a custom AI project developed? Our team of experts can build tailored solutions from scratch. Submit your requirements and we\'ll create a proposal that meets your specific needs.',
        ctaText: 'Submit Request',
        ctaLink: '/request-project',
        mediaType: 'gradient',
        gradientColors: ['#5614B0', '#DBD65C'],
        textColor: '#ffffff',
        accentColor: '#A259FF',
        icon: 'project'
      },
      {
        id: 'ieee-publication',
        title: 'IEEE Journal Publication',
        description: 'Get assistance with publishing your research in prestigious IEEE journals. Our academic team will help refine your paper, format according to guidelines, and navigate the submission process.',
        price: '₹35,000.00',
        ctaText: 'Publish Research',
        ctaLink: '/ieee-publication',
        mediaType: 'gradient',
        gradientColors: ['#11998e', '#38ef7d'],
        textColor: '#ffffff',
        accentColor: '#38ef7d',
        icon: 'document'
      },
      {
        id: 'contact-support',
        title: 'Contact Us 24/7',
        description: 'Our dedicated support team is available round-the-clock to assist you with any questions or concerns. Reach out anytime via chat, email, or phone for immediate assistance.',
        ctaText: 'Get Help Now',
        ctaLink: '/contact',
        mediaType: 'gradient',
        gradientColors: ['#4A00E0', '#8E2DE2'],
        textColor: '#ffffff',
        accentColor: '#8E2DE2',
        icon: 'support'
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
      }, 5000);
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
        case 'calendar':
          return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
            </svg>
          );
        case 'project':
          return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          );
        case 'document':
          return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          );
        case 'support':
          return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          );
        case 'microscope':
          return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <circle cx="12" cy="12" r="5"/>
            </svg>
          );
        case 'gift':
          return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1h-2.02c.18-.29.31-.61.36-.95.34-.23.66-.55.96-1.05.13 0 .42-.02.7 0zM9 4c.55 0 1 .45 1 1s-.45 1-1 1H6.98c.18-.29.31-.61.36-.95.34-.23.66-.55.96-1.05.13 0 .42-.02.7 0zM4 8h16v2h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H4V8zm0 4h5v8H4v-8zm7 0h2v8h-2v-8zm4 0h5v8h-5v-8z"/>
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
                {currentContent.id.includes('project') ? (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </>
                ) : currentContent.id.includes('product') ? (
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