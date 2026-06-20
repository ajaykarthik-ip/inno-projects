import React from 'react';
import './HowItWorks.css';

const WA_LINK =
  'https://wa.me/919600309140?text=Hi!%20I%20want%20to%20order%20a%20final%20year%20project.';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const svg = (children: React.ReactNode) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const steps: Step[] = [
  {
    number: '01',
    // search
    icon: svg(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
    title: 'Choose Your Title',
    description:
      'Browse 600+ project titles across ML, Web, IoT, Blockchain and AI. Filter by domain, pick one you like, or tell us your own idea.',
  },
  {
    number: '02',
    // clipboard
    icon: svg(<><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 12h6M9 16h4" /></>),
    title: 'Place Your Order',
    description:
      'WhatsApp us your chosen title. We confirm tech stack, timeline, and requirements. Payment is simple and secure.',
  },
  {
    number: '03',
    // package
    icon: svg(<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7l8.7 5 8.7-5M12 22V12" /></>),
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
                <span className="hiw-step-icon" aria-hidden="true">
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
            <span className="hiw-btn-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            Start Now — WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
