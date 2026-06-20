import React from 'react';
import Link from 'next/link';
import './ExploreAllPages.css';

interface Group {
  heading: string;
  links: { href: string; label: string; sub?: string }[];
}

const groups: Group[] = [
  {
    heading: 'Projects by Department',
    links: [
      { href: '/cse-final-year-projects-coimbatore', label: 'CSE Final Year Projects', sub: '200+ titles' },
      { href: '/ece-final-year-projects-coimbatore', label: 'ECE Final Year Projects', sub: '150+ titles' },
      { href: '/mca-final-year-projects-coimbatore', label: 'MCA Final Year Projects', sub: '100+ titles' },
      { href: '/machine-learning-projects-coimbatore', label: 'Machine Learning Projects', sub: '120+ titles' },
      { href: '/python-projects-coimbatore', label: 'Python Projects', sub: '100+ titles' },
      { href: '/web-development-projects-coimbatore', label: 'Web Development Projects', sub: '100+ titles' },
      { href: '/ieee-projects-coimbatore-2026', label: 'IEEE Projects 2026', sub: '300+ titles' },
    ],
  },
  {
    heading: 'Project Ideas & Title Lists',
    links: [
      { href: '/cse-project-titles-2026', label: 'CSE Project Titles 2026' },
      { href: '/ece-project-ideas-2026', label: 'ECE Project Ideas 2026' },
      { href: '/machine-learning-project-ideas-2026', label: 'Machine Learning Project Ideas 2026' },
      { href: '/python-project-ideas-for-students', label: 'Python Project Ideas for Students' },
      { href: '/ieee-2026-project-titles-list', label: 'IEEE 2026 Project Titles List' },
      { href: '/final-year-project-with-source-code', label: 'Final Year Project with Source Code' },
      { href: '/ready-made-final-year-projects-coimbatore', label: 'Ready-Made Final Year Projects' },
    ],
  },
  {
    heading: 'Guides & Articles',
    links: [
      // DISABLED — page kept as dead code in /blog/_top-10-... (decide later)
      // { href: '/blog/top-10-final-year-project-centers-in-coimbatore', label: 'Top 10 Project Centers in Coimbatore' },
      { href: '/blog/top-machine-learning-project-ideas', label: 'Top 10 ML Project Ideas' },
      { href: '/blog/top-deep-learning-project-ideas', label: 'Top Deep Learning Project Ideas' },
      { href: '/blog/top-iot-project-ideas-for-engineering-students', label: 'Top IoT Project Ideas' },
      { href: '/blog/best-final-year-project-ideas-for-cse', label: 'Best Final Year Ideas for CSE' },
      { href: '/blog/how-to-choose-a-final-year-project-title', label: 'How to Choose a Project Title' },
      { href: '/blog/how-to-write-final-year-project-report', label: 'How to Write a Project Report' },
      { href: '/blog/how-to-prepare-for-project-viva', label: 'How to Prepare for Viva' },
      { href: '/blog/how-to-complete-final-year-project-last-minute', label: 'Last-Minute Project Plan' },
      { href: '/blog/how-final-year-projects-help-in-placement', label: 'How Projects Help in Placement' },
      { href: '/blog/ieee-vs-non-ieee-final-year-projects', label: 'IEEE vs Non-IEEE Projects' },
      { href: '/blog/python-vs-java-for-final-year-projects', label: 'Python vs Java for Projects' },
      { href: '/blog', label: 'All Blog Articles' },
    ],
  },
  {
    heading: 'About Inno Projects',
    links: [
      { href: '/project-center-in-coimbatore', label: 'Best Project Center in Coimbatore' },
      { href: '/reviews', label: 'Student Reviews (5.0★)' },
      { href: '/about', label: 'About Us' },
      { href: '/faq', label: 'FAQ' },
      { href: '/ieee-journal', label: 'IEEE Journal Publication' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/request-project', label: 'Request a Project' },
      { href: '/project-titles', label: 'Full Project Catalog' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
];

const ExploreAllPages: React.FC = () => {
  return (
    <section className="eap-section" aria-labelledby="eap-heading">
      <div className="eap-inner">
        <div className="eap-header">
          <span className="eap-label">Explore Everything</span>
          <h2 className="eap-title" id="eap-heading">
            Find What You Need
          </h2>
          <p className="eap-subtitle">
            Every project category, every guide, every page — one place.
          </p>
        </div>

        <div className="eap-grid">
          {groups.map((g) => (
            <div key={g.heading} className="eap-group">
              <h3 className="eap-group-h3">{g.heading}</h3>
              <ul className="eap-list" role="list">
                {g.links.map((l) => (
                  <li key={l.href} className="eap-item">
                    <Link href={l.href} className="eap-link">
                      <span className="eap-link-label">{l.label}</span>
                      {l.sub && <span className="eap-link-sub">{l.sub}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreAllPages;
