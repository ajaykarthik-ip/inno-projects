import React, { useState } from 'react';
import './ProjectCard.css';
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
  id,
  title, 
  description, 
  price, 
  category, 
  youtubeUrl 
}) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

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
  
  // Get high quality thumbnail URL
  const getThumbnailUrl = (videoId: string): string => {
    // Try to get max resolution thumbnail, with fallbacks
    return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Navigate to project details page
  const handleViewDetails = () => {
    router.push(`/project?id=${id}`);
  };

  // Handle video play click - open modal instead of playing inline
  const handlePlayVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  // Close modal when clicked outside
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="project-card">
      <div className="project-card-image-container">
        {youtubeVideoId ? (
          <>
            <img 
              src={getThumbnailUrl(youtubeVideoId)} 
              alt={`${title} thumbnail`} 
              className="youtube-thumbnail"
              onError={(e) => {
                // Fallback to standard quality if max resolution fails
                const target = e.target as HTMLImageElement;
                target.src = `https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`;
              }}
            />
            <button 
              className="youtube-play-button"
              onClick={handlePlayVideo}
              aria-label="Play video"
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,8 12,24 24,16" fill="white"/>
              </svg>
            </button>
          </>
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
          {description.length > 120 
            ? `${description.substring(0, 120)}...` 
            : description}
        </p>
        <div className="project-card-footer">
          <div className="project-card-price">{price}</div>
          <button className="project-card-button" onClick={handleViewDetails}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            View Details
          </button>
        </div>
      </div>

      {/* YouTube Modal */}
      {showModal && youtubeVideoId && (
        <div className="youtube-modal" onClick={closeModal}>
          <div className="youtube-modal-content" onClick={e => e.stopPropagation()}>
            <button className="youtube-modal-close" onClick={closeModal}>×</button>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;