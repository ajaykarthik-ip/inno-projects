"use client";

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './FeaturedProjects.css';
import { projectsApi } from '@/utils/api';
import { Project } from '../models/Projects';

const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(['all']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Use the API client to fetch projects
        const data = await projectsApi.getProjects();
        
        // Clean and validate the data
        const cleanedProjects = data.map((project: Project) => ({
          ...project,
          // Ensure all required fields have fallback values
          description: project.description || 'No description available',
          name: project.name || 'Untitled Project',
          price: project.price || 'Price not available',
          category: project.category || 'Uncategorized',
          youtube_url: project.youtube_url || null
        }));
        
        setProjects(cleanedProjects);
        
        // Extract unique categories (filter out empty/null categories)
        const validCategories = cleanedProjects
          .map((project: Project) => project.category)
          .filter((category): category is string => Boolean(category));
        
        const uniqueCategories = ['all', ...new Set(validCategories)] as string[];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="featured-projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore our selection of innovative final year projects across different domains
          </p>
        </div>
        <div className="loading-state">
          <svg className="spinner" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <p>Loading amazing projects...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="featured-projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore our selection of innovative final year projects across different domains
          </p>
        </div>
        <div className="error-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h3>Error Loading Projects</h3>
          <p>{error}</p>
          <button className="retry-button" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Show empty state if no projects
  if (projects.length === 0) {
    return (
      <div className="featured-projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore our selection of innovative final year projects across different domains
          </p>
        </div>
        <div className="no-projects">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
          <h3>No projects found</h3>
          <p>No projects have been added yet. Check back later for exciting final year projects.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="featured-projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          Explore our selection of innovative final year projects across different domains
        </p>
      </div>
      
      {/* Category filters */}
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
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            id={project.id!}
            title={project.name}
            description={project.description}
            price={project.price}
            category={project.category}
            youtubeUrl={project.youtube_url}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;