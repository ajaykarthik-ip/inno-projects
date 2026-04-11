"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './MainHero.css';

const stats = [
  { value: '500+', label: 'Projects Available' },
  { value: '12hr', label: 'Avg. Delivery' },
  { value: '3000+', label: 'Students Helped' },
  { value: '600+', label: 'Final Year Projects / Year' },
];

const tags = ['Machine Learning', 'Deep Learning', 'Web Development', 'IoT', 'Blockchain', 'AI', 'Data Science', 'Computer Vision'];

export default function MainHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // First section — animate in immediately on mount
    const timer = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`main-hero ${visible ? 'main-hero--visible' : ''}`} ref={sectionRef}>
      {/* Background glows */}
      <div className="mh-glow mh-glow-1" aria-hidden="true" />
      <div className="mh-glow mh-glow-2" aria-hidden="true" />

      {/* Dot grid watermark */}
      <div className="mh-dot-grid" aria-hidden="true" />

      <div className="mh-inner">
        {/* Left column */}
        <div className="mh-content">
          <span className="mh-badge">
            <span className="mh-badge-dot" />
            Trusted by 3000+ Engineering Students
          </span>

          <h1 className="mh-headline">
            Your Final Year<br />
            Project,{' '}
            <span className="mh-accent">Delivered</span>
            <br />
            in&nbsp;
            <span className="mh-accent">12&nbsp;Hours.</span>
          </h1>

          <p className="mh-subtext">
            Browse 500+ ready-to-submit projects across ML, AI, Web, IoT &amp; Blockchain —
            with full source code, documentation, and expert support.
          </p>

          {/* Tags */}
          <div className="mh-tags">
            {tags.map(tag => (
              <span key={tag} className="mh-tag">{tag}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mh-ctas">
            <Link href="/project-titles" className="mh-btn-primary">
              Browse Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://wa.me/919600309140"
              target="_blank"
              rel="noopener noreferrer"
              className="mh-btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right column — stats card */}
        <div className="mh-right">
          <div className="mh-stats-card">
            <div className="mh-stats-header">
              <span className="mh-stats-title">Why Students Choose Us</span>
            </div>
            <div className="mh-stats-grid">
              {stats.map(({ value, label }) => (
                <div key={label} className="mh-stat">
                  <span className="mh-stat-value">{value}</span>
                  <span className="mh-stat-label">{label}</span>
                </div>
              ))}
            </div>
            <div className="mh-stats-features">
              {[
                'Full source code included',
                'IEEE journal support',
                'PPT & documentation',
                'WhatsApp support 24/7',
              ].map(f => (
                <div key={f} className="mh-feature-row">
                  <span className="mh-check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="mh-card-glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
