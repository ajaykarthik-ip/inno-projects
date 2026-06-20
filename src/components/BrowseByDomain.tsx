import React from 'react';
import Link from 'next/link';
import './BrowseByDomain.css';

interface Domain {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  count: string;
  href: string;
}

const svg = (children: React.ReactNode) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const domains: Domain[] = [
  {
    // Machine Learning — node graph
    icon: svg(<><circle cx="6" cy="6" r="2.2" /><circle cx="6" cy="18" r="2.2" /><circle cx="18" cy="12" r="2.2" /><path d="M8 7l8 4M8 17l8-4" /></>),
    name: 'Machine Learning',
    tagline: 'CNN, LSTM, BERT, XGBoost',
    count: '120+ projects',
    href: '/machine-learning-projects-coimbatore',
  },
  {
    // CSE — code brackets
    icon: svg(<><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></>),
    name: 'CSE Projects',
    tagline: 'Web, AI, Cloud, Security',
    count: '200+ projects',
    href: '/cse-final-year-projects-coimbatore',
  },
  {
    // ECE — chip
    icon: svg(<><rect x="6" y="6" width="12" height="12" rx="1.5" /><rect x="9.5" y="9.5" width="5" height="5" rx="0.5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></>),
    name: 'ECE Projects',
    tagline: 'IoT, VLSI, Arduino, MATLAB',
    count: '150+ projects',
    href: '/ece-final-year-projects-coimbatore',
  },
  {
    // MCA — layers
    icon: svg(<><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></>),
    name: 'MCA Projects',
    tagline: 'Java, Python, Django, PHP',
    count: '100+ projects',
    href: '/mca-final-year-projects-coimbatore',
  },
  {
    // Python — terminal
    icon: svg(<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9l3 3-3 3M13 15h4" /></>),
    name: 'Python Projects',
    tagline: 'Django, Flask, ML, Automation',
    count: '100+ projects',
    href: '/python-projects-coimbatore',
  },
  {
    // Web Development — globe
    icon: svg(<><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2c2.5 2.7 4 6.3 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.3-4-10s1.5-7.3 4-10z" /></>),
    name: 'Web Development',
    tagline: 'MERN, Next.js, Laravel, PHP',
    count: '100+ projects',
    href: '/web-development-projects-coimbatore',
  },
  {
    // IEEE — document
    icon: svg(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></>),
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
              <span className="bbd-card-emoji" aria-hidden="true">
                {domain.icon}
              </span>
              <p className="bbd-card-name">{domain.name}</p>
              <p className="bbd-card-tagline">{domain.tagline}</p>
              <div className="bbd-card-footer">
                <span className="bbd-card-cta">
                  Explore
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByDomain;
