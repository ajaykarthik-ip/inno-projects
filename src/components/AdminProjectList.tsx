// src/components/AdminProjectList.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import './AdminProjectList.css';

interface Project {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

interface AdminProjectListProps {
  refreshTrigger: number;
}

const AdminProjectList: React.FC<AdminProjectListProps> = ({ refreshTrigger }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>(['all']);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  // Function to fetch projects
  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Add search and category parameters if they exist
      let url = '/api/projects';
      const params = new URLSearchParams();
      
      if (filterCategory !== 'all') {
        params.append('category', filterCategory);
      }
      
      if (searchTerm) {
        params.append('search', searchTerm);
      }
      
      // Append parameters to URL if any exist
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.status}`);
      }
      
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data);
      // Extract unique categories
      const uniqueCategories = ['all', ...new Set(data.map((project: Project) => project.category))] as string[];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err instanceof Error ? err.message : 'Failed to load projects');
    } finally {
      setIsLoading(false);
    }
  }, [filterCategory, searchTerm]);

  // Fetch projects on mount and when refresh trigger changes
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects, refreshTrigger]);

  // Handle deleting a project
  const handleDeleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setIsDeleting(id);
      
      try {
        const response = await fetch(`/api/projects/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to delete project');
        }
        
        // Refresh the projects list
        fetchProjects();
      } catch (err) {
        console.error('Error deleting project:', err);
        alert(err instanceof Error ? err.message : 'Failed to delete project');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  return (
    <div className="admin-projects-container">
      <h2 className="admin-projects-title">Manage Projects</h2>
      
      <div className="admin-projects-filters">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filter">
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="loading-state">
          <svg className="spinner" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <p>Loading projects...</p>
        </div>
      ) : error ? (
        <div className="error-state">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h3>Error Loading Projects</h3>
          <p>{error}</p>
          <button onClick={fetchProjects} className="retry-button">
            Try Again
          </button>
        </div>
      ) : projects.length === 0 ? (
        <div className="no-projects">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
          <h3>No projects found</h3>
          <p>You haven't created any projects yet. Go to the "Create Project" tab to add your first project.</p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="no-projects">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No matching projects</h3>
          <p>No projects match your current filters. Try changing your search criteria.</p>
        </div>
      ) : (
        <div className="admin-projects-list">
          <div className="admin-projects-header">
            <div className="project-col project-col-image">Image</div>
            <div className="project-col project-col-title">Title</div>
            <div className="project-col project-col-category">Category</div>
            <div className="project-col project-col-price">Price</div>
            <div className="project-col project-col-actions">Actions</div>
          </div>
          
          {projects.map((project) => (
            <div key={project.id} className="admin-project-item">
              <div className="project-col project-col-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/60x40?text=Error';
                  }}
                />
              </div>
              
              <div className="project-col project-col-title">
                <h3>{project.title}</h3>
                <p className="project-description-preview">
                  {project.description.length > 60 
                    ? `${project.description.substring(0, 60)}...` 
                    : project.description}
                </p>
              </div>
              
              <div className="project-col project-col-category">
                <span className="category-badge">{project.category}</span>
              </div>
              
              <div className="project-col project-col-price">
                {project.price}
              </div>
              
              <div className="project-col project-col-actions">
                <button 
                  className="delete-button"
                  onClick={() => handleDeleteProject(project.id)}
                  title="Delete Project"
                  disabled={isDeleting === project.id}
                >
                  {isDeleting === project.id ? (
                    <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!isLoading && projects.length > 0 && (
        <div className="projects-count">
          Showing {projects.length} projects
        </div>
      )}
    </div>
  );
};

export default AdminProjectList;