import React from 'react';
import './TechnologySection.css';

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      name: 'Python',
      icon: 'python',
      description: 'Primary programming language used for implementing machine learning algorithms and data processing.'
    },
    {
      name: 'TensorFlow',
      icon: 'tensorflow',
      description: 'Open-source machine learning framework for building and training neural network models.'
    },
    {
      name: 'Scikit-learn',
      icon: 'scikit',
      description: 'ML library that features various algorithms for classification, regression, and clustering.'
    },
    {
      name: 'Data Analysis',
      icon: 'data',
      description: 'Advanced techniques for preprocessing, analyzing and visualizing patient health data.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'python':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a9 9 0 0 1 9 9v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v4a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2v-9a9 9 0 0 1 9-9h4z"></path>
            <path d="M12 22a9 9 0 0 1-9-9v-9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v9a9 9 0 0 1-9 9h-4z"></path>
          </svg>
        );
      case 'tensorflow':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4v16"></path>
            <path d="M4 12h4"></path>
            <path d="M4 20h4"></path>
            <path d="M16 4h4"></path>
            <path d="M16 20h4"></path>
            <path d="M16 12l4 -8"></path>
            <path d="M16 12l4 8"></path>
          </svg>
        );
      case 'scikit':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l5 5"></path>
            <path d="M7 7l5-5"></path>
            <path d="M17 12h5"></path>
            <path d="M12 17l5 5"></path>
            <path d="M7 17l5 5"></path>
            <path d="M2 12h5"></path>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
        );
      case 'data':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18 8l-3 -3"></path>
            <path d="M15 11l-3 -3"></path>
            <path d="M12 14l-3 -3"></path>
            <path d="M9 17l-3 -3"></path>
            <path d="M18 12l-3 -3"></path>
            <path d="M15 15l-3 -3"></path>
            <path d="M12 18l-3 -3"></path>
            <path d="M18 16l-3 -3"></path>
            <path d="M15 19l-3 -3"></path>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
    }
  };

  return (
    <div className="technology-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">Technologies Used</h2>
          <p className="tech-description">
            Our diabetes detection project leverages cutting-edge technologies and machine learning algorithms to provide accurate predictions and analysis
          </p>
        </div>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">
                {renderIcon(tech.icon)}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-info">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;