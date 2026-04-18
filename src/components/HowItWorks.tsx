import React from 'react';
import './HowItWorks.css';

const WA_LINK =
  'https://wa.me/919600309140?text=Hi!%20I%20want%20to%20order%20a%20final%20year%20project.';

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: '🔍',
    title: 'Choose Your Title',
    description:
      'Browse 600+ project titles across ML, Web, IoT, Blockchain and AI. Filter by domain, pick one you like, or tell us your own idea.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Place Your Order',
    description:
      'WhatsApp us your chosen title. We confirm tech stack, timeline, and requirements. Payment is simple and secure.',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Get It Delivered',
    description:
      'Receive complete source code, dataset, documentation, PPT, and IEEE paper (if needed) — all within 12 hours.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="hiw-section" aria-labelledby="hiw-heading">
      <div className="hiw-inner">
        {/* Header */}
        <div className="hiw-header">
          <span className="hiw-label">Simple Process</span>
          <h2 className="hiw-title" id="hiw-heading">
            How It Works
            <span className="hiw-title-underline" aria-hidden="true" />
          </h2>
          <p className="hiw-subtitle">
            From title selection to full delivery — in 12 hours
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="hiw-step">
                <span className="hiw-step-number" aria-hidden="true">
                  {step.number}
                </span>
                <span className="hiw-step-icon" role="img" aria-label={step.title}>
                  {step.icon}
                </span>
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.description}</p>
              </div>

              {/* Connector between steps — hidden on mobile via CSS */}
              {index < steps.length - 1 && (
                <div className="hiw-connector" aria-hidden="true">
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12 H34 M28 6 L38 12 L28 18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="6 4"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="hiw-cta">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hiw-btn"
            aria-label="Start Now — WhatsApp Us"
          >
            <span className="hiw-btn-icon" aria-hidden="true">💬</span>
            Start Now — WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
