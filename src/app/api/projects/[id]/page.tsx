"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import './page.css';

// Define the Project interface based on the existing schema
interface Project {
  id: string;
  name: string;
  description: string;
  price: string;
  youtube_url: string | null;
  category: string;
  programming_language: string;
  created_at: string;
}

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id as string;
  
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [youtubeVideoId, setYoutubeVideoId] = useState<string | null>(null);
  
  // Initialize sidebar state on component mount
  useEffect(() => {
    // Set initial state - not collapsed
    document.body.classList.remove('sidebar-collapsed');
    document.body.classList.remove('sidebar-mobile-open');
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('sidebar-collapsed');
      document.body.classList.remove('sidebar-mobile-open');
    };
  }, []);
  
  // Fetch project details
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/projects/get/${projectId}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch project: ${response.status}`);
        }
        
        const data = await response.json();
        setProject(data);
        
        // Extract YouTube video ID if available
        if (data.youtube_url) {
          const videoId = getYoutubeVideoId(data.youtube_url);
          setYoutubeVideoId(videoId);
        }
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err instanceof Error ? err.message : 'Failed to load project details');
      } finally {
        setLoading(false);
      }
    };
    
    if (projectId) {
      fetchProject();
    }
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
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="app-container">
      <SidebarMenu />
      
      <div className="page-content">
        <MainNavbar />
        
        <div className="main-content-wrapper">
          <main className="main-content">
            <div className="content-section">
              {loading ? (
                <div className="loading-state">
                  <svg className="spinner" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <p>Loading project details...</p>
                </div>
              ) : error ? (
                <div className="error-state">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <h3>Error Loading Project</h3>
                  <p>{error}</p>
                  <button onClick={() => window.location.reload()} className="retry-button">
                    Try Again
                  </button>
                </div>
              ) : project ? (
                <div className="project-details-container">
                  <div className="project-details-header">
                    <h1 className="project-title">{project.name}</h1>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="project-language">{project.programming_language}</span>
                      <span className="project-date">Added on {formatDate(project.created_at)}</span>
                    </div>
                  </div>
                  
                  <div className="project-details-content">
                    <div className="project-details-main">
                      {youtubeVideoId && (
                        <div className="project-video-container">
                          <iframe 
                            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                            title={`${project.name} Demo Video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="project-video"
                          />
                        </div>
                      )}
                      
                      <div className="project-description-container">
                        <h2>Project Description</h2>
                        <div className="project-description">
                          {project.description}
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-details-sidebar">
                      <div className="project-price-container">
                        <div className="project-price-label">Price</div>
                        <div className="project-price-value">{project.price}</div>
                      </div>
                      
                      <button className="project-purchase-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Purchase Project
                      </button>
                      
                      <button className="project-contact-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        Contact Seller
                      </button>
                      
                      <div className="project-key-features">
                        <h3>Key Features</h3>
                        <ul>
                          <li>Complete source code</li>
                          <li>Documentation included</li>
                          <li>Easy setup and configuration</li>
                          <li>Technical support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="not-found-state">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <h3>Project Not Found</h3>
                  <p>The project you are looking for does not exist or has been removed.</p>
                  <Link href="/" className="back-home-link">
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}