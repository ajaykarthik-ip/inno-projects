"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import './page.css';

interface Project {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: string;
  youtube_url: string | null;
  category: string;
  programming_language: string;
  created_at: string;
  updated_at?: string;
}

const ProjectPage = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');
  
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) {
      setError('No project ID provided');
      setLoading(false);
      return;
    }

    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(`/api/projects/${projectId}`, {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error('Failed to fetch project details');
        }
        
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

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

  // Handle WhatsApp redirect with dynamic project details
  const handleWhatsAppRedirect = () => {
    if (!project) return;
    
    const message = `Hi! I'm interested in purchasing the project "${project.name}".

Project Details:
- Name: ${project.name}
- Category: ${project.category}
- Programming Language: ${project.programming_language}
- Price: ${project.price}

Could you please provide more information about this project and how to proceed with the purchase?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919600309140?text=${encodedMessage}`, '_blank');
  };

  if (loading) {
    return (
      <div className="project-details-container">
        <div className="project-card">
          <div className="project-content">
            <div className="loading-animation">
              <div className="pulse-animation" />
              <p className="section-content" style={{ textAlign: 'center', marginTop: '1rem' }}>Loading project details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="project-details-container">
        <div className="project-card">
          <div className="project-content" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem', color: 'var(--text-secondary)' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h2 className="section-title">{error || 'Project not found'}</h2>
            <p className="section-content">
              {!projectId ? 'No project ID was provided in the URL.' : 'Please try again later or check the project ID.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const youtubeVideoId = getYoutubeVideoId(project.youtube_url);

  return (
    <div className="project-details-container">
      <div className="project-layout">
        {/* Main project details */}
        <div className="project-card">
          <div className="project-header">
            <h1>{project.name}</h1>
          </div>
          
          <div className="project-content">
            {youtubeVideoId && (
              <div className="youtube-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title={`${project.name} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            
            <div className="project-section">
              <h2 className="section-title">Description</h2>
              <p className="section-content">{project.description}</p>
            </div>
            
            <div className="metadata-grid">
              <div className="metadata-item">
                <div className="metadata-label">Category</div>
                <div className="metadata-value">
                  <span className="category-badge">{project.category}</span>
                </div>
              </div>
              
              <div className="metadata-item">
                <div className="metadata-label">Programming Language</div>
                <div className="metadata-value">
                  <span className="language-badge">{project.programming_language}</span>
                </div>
              </div>
              
              {!youtubeVideoId && (
                <div className="metadata-item">
                  <div className="metadata-label">Demo Video</div>
                  <div className="metadata-value no-video">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                    <p>No demo video available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Purchase card */}
        <div className="action-card">
          <div className="action-content">
            <div className="price-tag">{project.price}</div>
            
            <button className="whatsapp-button" onClick={handleWhatsAppRedirect}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
              Buy on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrap the component with Suspense
const ProjectPageWithSuspense = () => {
  return (
    <Suspense fallback={
      <div className="project-details-container">
        <div className="project-card">
          <div className="project-content">
            <div className="loading-animation">
              <div className="pulse-animation" />
              <p className="section-content" style={{ textAlign: 'center', marginTop: '1rem' }}>Loading project details...</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <ProjectPage />
    </Suspense>
  );
};

export default ProjectPageWithSuspense;