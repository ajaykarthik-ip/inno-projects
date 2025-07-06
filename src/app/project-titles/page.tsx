"use client";

import React, { useState, useEffect } from 'react';
import './page.css';

interface Project {
  id: string;
  title: string;
  category: string;
}

// Projects data - moved outside component to prevent re-creation
const projects: Project[] = [
  { id: '1', title: 'Drowsiness Detection', category: 'AI' },
  { id: '2', title: 'Distance Based Speed Violation System', category: 'AI' },
  { id: '3', title: 'Liver Disease Detection', category: 'AI' },
  { id: '4', title: 'Patient Monitoring System using ML', category: 'AI' },
  { id: '5', title: 'Plant Disease Detection', category: 'AI' },
  { id: '6', title: 'Signature Verification', category: 'AI' },
  { id: '7', title: 'Water Quality Prediction', category: 'AI' },
  { id: '8', title: 'Bone Fractures Detection', category: 'AI' },
  { id: '9', title: 'Elephant Detection', category: 'AI' },
  { id: '10', title: 'Intrusion Detection', category: 'AI' },
  { id: '11', title: 'Traffic Management System', category: 'AI' },
  { id: '12', title: 'Currency Note Detection', category: 'AI' },
  { id: '13', title: 'Spam Call Detection (Sentiment Analysis)', category: 'AI' },
  { id: '14', title: 'Deep Fake Face Detection', category: 'AI' },
  { id: '15', title: 'Tuberculosis Detection', category: 'AI' },
  { id: '16', title: 'Lymphoma Detection', category: 'AI' },
  { id: '17', title: 'Sign Language Detection', category: 'AI' },
  { id: '18', title: 'Fake Social Media Account Detection', category: 'AI' },
  { id: '19', title: 'Plaque Growth Detection', category: 'AI' },
  { id: '20', title: 'Heart Disease Detection', category: 'AI' },
  { id: '21', title: 'AI Quiz Platform', category: 'WEB' },
  { id: '22', title: 'Wound Room Dressing System', category: 'AI' },
  { id: '23', title: 'Car Damage Estimator for Insurance', category: 'WEB' },
  { id: '24', title: 'Kidney Disease Detection', category: 'AI' },
  { id: '25', title: 'Parkinson Disease Detection', category: 'AI' },
  { id: '26', title: 'Crop Yield Prediction using ML', category: 'AI' },
  { id: '27', title: 'Fake Product Review Detection', category: 'AI' },
  { id: '28', title: 'Fabric Defect Detection', category: 'AI' },
  { id: '29', title: 'Ovarian Cancer Detection', category: 'AI' },
  { id: '30', title: 'Skin Cancer Detection', category: 'AI' },
  { id: '31', title: 'Diabetes Detection (Retina Photos)', category: 'AI' },
  { id: '32', title: 'Malware Detection System', category: 'AI' },
  { id: '33', title: 'Fake Product Detection', category: 'AI' },
  { id: '34', title: 'EEG Signal Based Psychology Disorder', category: 'AI' },
  { id: '35', title: 'Traffic Sign Detection', category: 'AI' },
  { id: '36', title: 'AI Ecommerce Platform', category: 'WEB' },
];

const ProjectListing: React.FC = () => {
  // State for filtering and search
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);


  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  // Handle filter changes
  useEffect(() => {
    let results = projects;
    
    // Apply category filter
    if (activeFilter !== 'all') {
      results = results.filter(project => project.category === activeFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      results = results.filter(
        project => 
          project.title.toLowerCase().includes(lowercaseSearch) ||
          project.category.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    setFilteredProjects(results);
  }, [activeFilter, searchTerm]);

  // Handle WhatsApp contact
  const handleWhatsAppContact = (projectTitle: string) => {
    const message = `Hi! I am interested in the *${projectTitle}* project.

Could you please send me detailed information about:
• Project overview and features
• Technical specifications
• Implementation timeline
• Pricing and packages
• Demo or portfolio samples

Looking forward to hearing from you!`;
    
    const whatsappUrl = `https://wa.me/919600309140?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const clearFilters = () => {
    setActiveFilter('all');
    setSearchTerm('');
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative
            <span className="hero-gradient"> AI & Web </span>
            Projects
          </h1>
          <p className="hero-subtitle">
            Discover cutting-edge solutions powered by artificial intelligence and modern web technologies
          </p>
        </div>
      </section>

      {/* Controls Section */}
      <section className="controls-section">
        <div className="search-wrapper">
          <div className="search-container">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="filters-container">
          <div className="filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? 'All Projects' : category}
                <span className="pill-count">
                  {category === 'all' 
                    ? projects.length 
                    : projects.filter(p => p.category === category).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="results-summary">
          <span className="results-text">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            {activeFilter !== 'all' && ` in ${activeFilter}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </span>
          {(activeFilter !== 'all' || searchTerm) && (
            <button className="clear-filters" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* Projects Table */}
      <section className="projects-section">
        {filteredProjects.length > 0 ? (
          <div className="table-container">
            <div className="table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th className="th-serial">#</th>
                    <th className="th-title">Project</th>
                    <th className="th-category">Category</th>
                    <th className="th-action">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr key={project.id} className="project-row" style={{ animationDelay: `${index * 50}ms` }}>
                      <td className="td-serial">
                        <span className="serial-number">{(index + 1).toString().padStart(2, '0')}</span>
                      </td>
                      <td className="td-title">
                        <div className="project-info">
                          <h3 className="project-name">{project.title}</h3>
                        </div>
                      </td>
                      <td className="td-category">
                        <span className={`category-badge ${project.category.toLowerCase()}`}>
                          {project.category}
                        </span>
                      </td>
                      <td className="td-action">
                        <button 
                          className="whatsapp-btn"
                          onClick={() => handleWhatsAppContact(project.title)}
                          aria-label={`Get details for ${project.title}`}
                        >
                          <svg className="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          <span className="btn-text">Details</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <h3 className="empty-title">No projects found</h3>
            <p className="empty-description">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button className="reset-btn" onClick={clearFilters}>
              Show all projects
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectListing;