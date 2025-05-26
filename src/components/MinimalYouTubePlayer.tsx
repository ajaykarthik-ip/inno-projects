// src/components/MinimalYouTubePlayer.tsx
import React, { useState } from 'react';
import './MinimalYouTubePlayer.css';
import Image from 'next/image';

interface MinimalYouTubePlayerProps {
  videoId: string;
  title: string;
}

const MinimalYouTubePlayer: React.FC<MinimalYouTubePlayerProps> = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  
  // Play the video and hide custom play button
  const playVideo = () => {
    setIsPlaying(true);
    setShowPlayButton(false);
  };
  
  return (
    <div className="minimal-youtube-container">
      {/* Thumbnail with play button overlay for initial state */}
      {!isPlaying && (
        <div 
          className="thumbnail-overlay"
          onClick={playVideo}
        >
          {/* High-quality thumbnail (from YouTube) */}
          <div className="youtube-thumbnail">
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`Thumbnail for ${title}`}
              width={480}
              height={360}
              className="thumbnail-image"
            />
          </div>
          
          {/* Dark overlay */}
          <div className="dark-overlay"></div>
          
          {/* Custom play button */}
          {showPlayButton && (
            <div className="custom-play-button">
              <div className="play-icon"></div>
            </div>
          )}
        </div>
      )}
      
      {/* The actual YouTube iframe - only loaded when play is clicked */}
      {isPlaying && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&loop=0&color=white&playlist=${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="youtube-iframe"
          title={title}
        />
      )}
      
      {/* Only show the tiny YouTube logo in corner - overlay for legal compliance */}
      {isPlaying && (
        <div className="youtube-logo">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="#fff"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default MinimalYouTubePlayer;