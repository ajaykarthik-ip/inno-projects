"use client";

import React, { useEffect, useState } from 'react';
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

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
              
              <div className="metadata-item">
                <div className="metadata-label">Created</div>
                <div className="metadata-value date-value">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {formatDate(project.created_at)}
                </div>
              </div>
              
              {project.updated_at && (
                <div className="metadata-item">
                  <div className="metadata-label">Last Updated</div>
                  <div className="metadata-value date-value">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {formatDate(project.updated_at)}
                  </div>
                </div>
              )}
              
              {!youtubeVideoId && (
                <div className="metadata-item" style={{ gridColumn: project.updated_at ? "span 1" : "span 2" }}>
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
        
        {/* Buy card (sticky on desktop) */}
        <div className="action-card">
          <div className="action-content">
            <div className="price-tag">{project.price}</div>
            
            <button className="buy-button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Buy This Project
            </button>
            
            <div className="additional-actions">
              <button className="action-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Wishlist
              </button>
              
              <button className="action-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;