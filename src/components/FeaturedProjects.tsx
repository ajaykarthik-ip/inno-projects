import React from 'react';
import ProjectCard from './ProjectCard';
import './FeaturedProjects.css';

// Import images directly
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const FeaturedProjects: React.FC = () => {
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
    }
  ];

  return (
    <div className="featured-projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          Explore our selection of innovative final year projects across different domains
        </p>
      </div>
      
      <div className="project-grid">
        {projects.map((project, index) => (
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