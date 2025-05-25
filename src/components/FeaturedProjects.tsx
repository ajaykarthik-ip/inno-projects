"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './FeaturedProjects.css';

// Import images directly
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Extended project list for better mobile experience
  const projects = [
    {
      title: 'Diabetes Detection',
      description: 'ML-based project for diabetes detection using Python and AI algorithms for accurate prediction of diabetes risk.',
      price: '₹5,500.00',
      category: 'Machine Learning',
      image: image1
    },
    {
      title: 'Smart Glucose Monitoring',
      description: 'IoT system to monitor blood glucose levels using Raspberry Pi and ML-based prediction algorithms.',
      price: '₹4,800.00',
      category: 'IoT',
      image: image2
    },
    {
      title: 'Predictive Health Analysis',
      description: 'AI-powered health monitoring system focusing on diabetes and other metabolic disorders using machine learning.',
      price: '₹6,200.00',
      category: 'Artificial Intelligence',
      image: image3
    },
    {
      title: 'Health Data Visualization',
      description: 'Interactive dashboard for visualizing health metrics and diabetes indicators using modern web technologies.',
      price: '₹4,900.00',
      category: 'Web Development',
      image: image1
    },
    {
      title: 'AI Health Assistant',
      description: 'Voice-enabled AI assistant that helps monitor health parameters and provides early warnings for diabetes risk factors.',
      price: '₹7,100.00',
      category: 'Artificial Intelligence',
      image: image3
    },
    {
      title: 'Mobile Health Tracker',
      description: 'Android and iOS application for tracking health metrics and diabetes risk factors with cloud sync capabilities.',
      price: '₹5,300.00',
      category: 'Mobile Development',
      image: image2
    }
  ];

  // List of available categories for filters
  const categories = ['all', 'Machine Learning', 'IoT', 'Artificial Intelligence', 'Web Development', 'Mobile Development'];
  
  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="featured-projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          Explore our selection of innovative final year projects across different domains
        </p>
      </div>
      
      {/* Category filters - touch-friendly for mobile */}
      <div className="project-filters">
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>
      
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            price={project.price}
            category={project.category}
            image={project.image.src}
          />
        ))}
      </div>

      <button className="view-all-button">
        View All Projects
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default FeaturedProjects;