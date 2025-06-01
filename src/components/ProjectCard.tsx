import React from 'react';
import './ProjectCard.css';
import MinimalYouTubePlayer from './MinimalYouTubePlayer';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  id: string; 
  title: string;
  description: string;
  price: string;
  category: string;
  youtubeUrl: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, // Receive id
  title, 
  description, 
  price, 
  category, 
  youtubeUrl 
}) => {
  const router = useRouter();

  // Extract YouTube video ID from URL
  const getYoutubeVideoId = (url: string | null): string | null => {
    if (!url) return null;
    
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1); // Remove leading slash
      } else if (urlObj.hostname.includes('youtube.com')) {
        const searchParams = new URLSearchParams(urlObj.search);
        return searchParams.get('v');
      }
      return null;
    } catch {
      return null;
    }
  };

  const youtubeVideoId = getYoutubeVideoId(youtubeUrl);

  // Navigate to project details page
  const handleViewDetails = () => {
    router.push(`/project?id=${id}`);
  };

  return (
    <div className="project-card">
      <div className="project-card-image-container">
        {youtubeVideoId ? (
          <MinimalYouTubePlayer videoId={youtubeVideoId} title={title} />
        ) : (
          <div className="project-card-placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="7" x2="7" y2="7"></line>
              <line x1="2" y1="17" x2="7" y2="17"></line>
              <line x1="17" y1="17" x2="22" y2="17"></line>
              <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
            <p>No Video Available</p>
          </div>
        )}
      </div>
      <div className="project-card-content">
        <div className="project-card-category">{category}</div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">
          {description.length > 100 
            ? `${description.substring(0, 100)}...` 
            : description}
        </p>
        <div className="project-card-footer">
          <div className="project-card-price">{price}</div>
          <button className="project-card-button" onClick={handleViewDetails}>
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