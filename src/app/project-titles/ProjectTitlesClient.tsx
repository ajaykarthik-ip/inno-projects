"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import './page.css';

interface Project {
  id: string;
  title: string;
  category: string;
}

interface Props {
  projects: Project[];
}

const ProjectTitlesClient: React.FC<Props> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const categoryOrder = ['all', 'ML', 'WEB', 'AI & API', 'IOT', 'BLOCKCHAIN'];
  const uniqueCategories = new Set(projects.map(project => project.category));
  const categories = categoryOrder.filter(cat => cat === 'all' || uniqueCategories.has(cat));

  useEffect(() => {
    const activeIndex = categories.indexOf(activeFilter);
    const pill = pillRefs.current[activeIndex];
    const indicator = indicatorRef.current;
    if (pill && indicator) {
      indicator.style.width = `${pill.offsetWidth}px`;
      indicator.style.transform = `translateX(${pill.offsetLeft}px)`;
    }
  }, [activeFilter, categories]);

  const filteredProjects = useMemo(() => {
    let results = projects;
    if (activeFilter !== 'all') {
      results = results.filter(p => p.category === activeFilter);
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      results = results.filter(
        p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    return results;
  }, [activeFilter, searchTerm, projects]);

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

  const categoryCounts: Record<string, number> = {};
  projects.forEach(p => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Project <span className="title-accent">Catalog</span></h1>
        <p className="page-subtitle">Browse {projects.length}+ projects across AI, ML, Web, IoT &amp; Blockchain</p>
        <div className="stats-row">
          <div className="stat-item"><span className="stat-value">{categoryCounts['ML'] || 0}</span><span className="stat-label">ML</span></div>
          <div className="stat-item"><span className="stat-value">{categoryCounts['WEB'] || 0}</span><span className="stat-label">Web</span></div>
          <div className="stat-item"><span className="stat-value">{categoryCounts['AI & API'] || 0}</span><span className="stat-label">AI & API</span></div>
          <div className="stat-item"><span className="stat-value">{categoryCounts['IOT'] || 0}</span><span className="stat-label">IoT</span></div>
          <div className="stat-item"><span className="stat-value">{categoryCounts['BLOCKCHAIN'] || 0}</span><span className="stat-label">Blockchain</span></div>
        </div>
      </div>

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

        <div className="filters-container">
          <div className="filter-pills">
            <div className="filter-indicator" ref={indicatorRef} />
            {categories.map((category, i) => (
              <button
                key={category}
                ref={el => { pillRefs.current[i] = el; }}
                className={`filter-pill ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? 'All Projects' : category}
                <span className="pill-count">
                  {category === 'all'
                    ? projects.length
                    : projects.filter(p => p.category === category).length}
                </span>
              </button>
            ))}
          </div>
        </div>

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
                    <tr key={project.id} className="project-row" style={{ animationDelay: `${Math.min(index * 30, 300)}ms` }}>
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
              Try adjusting your search terms or filters to find what you looking for.
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

export default ProjectTitlesClient;
