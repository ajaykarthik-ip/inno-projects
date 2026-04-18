import React from 'react';
import Link from 'next/link';
import './TrendingProjects.css';

type BadgeType = 'ml' | 'web' | 'iot' | 'blockchain';

interface TrendingProject {
  title: string;
  category: string;
  badgeType: BadgeType;
  tech: string;
  description: string;
}

const WA_BASE = 'https://wa.me/919600309140?text=Hi!%20I%20need%20the%20project%3A%20';

const trendingProjects: TrendingProject[] = [
  {
    title: 'Heart Disease Prediction using Random Forest',
    category: 'ML',
    badgeType: 'ml',
    tech: 'Python, scikit-learn',
    description:
      'Predict cardiac risk from patient health metrics with 92% accuracy.',
  },
  {
    title: 'Face Mask Detection using MobileNetV2',
    category: 'ML',
    badgeType: 'ml',
    tech: 'Python, OpenCV, TensorFlow',
    description:
      'Real-time mask detection from webcam using transfer learning.',
  },
  {
    title: 'E-Learning Management System',
    category: 'WEB',
    badgeType: 'web',
    tech: 'MERN Stack, Node.js',
    description:
      'Full-featured LMS with video courses, quizzes, and progress tracking.',
  },
  {
    title: 'Smart Home Automation',
    category: 'IOT',
    badgeType: 'iot',
    tech: 'Arduino, ESP32, MQTT',
    description:
      'Control home appliances remotely via mobile app with IoT sensors.',
  },
  {
    title: 'Fake News Detection using BERT',
    category: 'ML',
    badgeType: 'ml',
    tech: 'Python, Transformers, BERT',
    description:
      'Classify news articles as real or fake using fine-tuned BERT model.',
  },
  {
    title: 'Blockchain Voting System',
    category: 'BLOCKCHAIN',
    badgeType: 'blockchain',
    tech: 'Solidity, Web3.js, React',
    description:
      'Tamper-proof digital voting using Ethereum smart contracts.',
  },
];

function buildWaLink(title: string): string {
  return WA_BASE + encodeURIComponent(title);
}

const TrendingProjects: React.FC = () => {
  return (
    <section className="tp-section" aria-labelledby="tp-heading">
      <div className="tp-inner">
        {/* Header */}
        <div className="tp-header">
          <span className="tp-label">Hot This Month</span>
          <h2 className="tp-title" id="tp-heading">
            Trending Project Ideas
          </h2>
          <p className="tp-subtitle">
            Most popular titles picked by students this month
          </p>
        </div>

        {/* Cards Grid */}
        <div className="tp-grid">
          {trendingProjects.map((project) => (
            <article className="tp-card" key={project.title}>
              <span className={`tp-badge tp-badge--${project.badgeType}`}>
                {project.category}
              </span>
              <h3 className="tp-card-title">{project.title}</h3>
              <p className="tp-card-tech">{project.tech}</p>
              <p className="tp-card-desc">{project.description}</p>
              <a
                href={buildWaLink(project.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="tp-card-btn"
                aria-label={`Get the project: ${project.title}`}
              >
                Get This Project →
              </a>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="tp-footer">
          <Link
            href="/machine-learning-project-ideas-2026"
            className="tp-view-all"
          >
            View All Project Ideas →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;
