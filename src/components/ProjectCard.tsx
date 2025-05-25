import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  price: string;
  category: string;
  image: any; // Updated to accept any type for imported images
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, price, category, image }) => {
  return (
    <div className="project-card">
      <img src={typeof image === 'string' ? image : image.src} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <div className="project-card-category">{category}</div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-footer">
          <div className="project-card-price">{price}</div>
          <button className="project-card-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;