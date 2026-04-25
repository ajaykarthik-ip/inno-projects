import React from 'react';
import Link from 'next/link';
import './BrowseByDomain.css';

interface Domain {
  emoji: string;
  name: string;
  tagline: string;
  count: string;
  href: string;
}

const domains: Domain[] = [
  {
    emoji: '🤖',
    name: 'Machine Learning',
    tagline: 'CNN, LSTM, BERT, XGBoost',
    count: '120+ projects',
    href: '/machine-learning-projects-coimbatore',
  },
  {
    emoji: '💻',
    name: 'CSE Projects',
    tagline: 'Web, AI, Cloud, Security',
    count: '200+ projects',
    href: '/cse-final-year-projects-coimbatore',
  },
  {
    emoji: '⚡',
    name: 'ECE Projects',
    tagline: 'IoT, VLSI, Arduino, MATLAB',
    count: '150+ projects',
    href: '/ece-final-year-projects-coimbatore',
  },
  {
    emoji: '🐍',
    name: 'MCA Projects',
    tagline: 'Java, Python, Django, PHP',
    count: '100+ projects',
    href: '/mca-final-year-projects-coimbatore',
  },
  {
    emoji: '🔧',
    name: 'Python Projects',
    tagline: 'Django, Flask, ML, Automation',
    count: '100+ projects',
    href: '/python-projects-coimbatore',
  },
  {
    emoji: '🌐',
    name: 'Web Development',
    tagline: 'MERN, Next.js, Laravel, PHP',
    count: '100+ projects',
    href: '/web-development-projects-coimbatore',
  },
  {
    emoji: '📄',
    name: 'IEEE Projects',
    tagline: '2024–2026 IEEE Papers',
    count: '300+ projects',
    href: '/ieee-projects-coimbatore-2026',
  },
];

const BrowseByDomain: React.FC = () => {
  return (
    <section className="bbd-section" aria-labelledby="bbd-heading">
      <div className="bbd-inner">
        {/* Header */}
        <div className="bbd-header">
          <span className="bbd-label">All Departments</span>
          <h2 className="bbd-title" id="bbd-heading">
            Browse by Domain
          </h2>
          <p className="bbd-subtitle">
            Pick your department and find the perfect final year project
          </p>
        </div>

        {/* Domain Grid */}
        <div className="bbd-grid">
          {domains.map((domain) => (
            <Link
              key={domain.href}
              href={domain.href}
              className="bbd-card"
              aria-label={`${domain.name} — ${domain.count}`}
            >
              <span
                className="bbd-card-emoji"
                role="img"
                aria-label={domain.name}
              >
                {domain.emoji}
              </span>
              <p className="bbd-card-name">{domain.name}</p>
              <p className="bbd-card-tagline">{domain.tagline}</p>
              <div className="bbd-card-footer">
                <span className="bbd-card-cta">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByDomain;
