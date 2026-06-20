"use client";

import React, { useEffect, useRef, useState } from 'react';
import './ReferEarnBanner.css';

export default function ReferEarnBanner() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`reb-section ${visible ? 'reb-section--visible' : ''}`} ref={ref}>
      <div className="reb-inner">

        {/* Left — text */}
        <div className="reb-content">
          <span className="reb-badge">Limited Time Offer</span>

          <h2 className="reb-headline">
            Refer &amp; Earn<br />
            <span className="reb-accent">Rewards</span>
          </h2>

          <p className="reb-desc">
            Refer your friends to receive up to a{' '}
            <strong>90% discount</strong> and cashback on all your purchases.
            The more friends you refer, the greater your rewards!
          </p>

          <div className="reb-perks">
            <div className="reb-perk">
              <span className="reb-perk-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13M5 12v9h14v-9M12 8C12 8 11 3 8 3a2.5 2.5 0 0 0 0 5zM12 8s1-5 4-5a2.5 2.5 0 0 1 0 5z" />
                </svg>
              </span>
              <span>Up to <strong>90% off</strong> for you</span>
            </div>
            <div className="reb-perk">
              <span className="reb-perk-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v10M14.5 9.3A2.7 2.2 0 0 0 12 8c-1.5 0-2.7.9-2.7 2s1.2 2 2.7 2 2.7.9 2.7 2-1.2 2-2.7 2a2.7 2.2 0 0 1-2.5-1.3" />
                </svg>
              </span>
              <span><strong>Cashback</strong> on every referral</span>
            </div>
            <div className="reb-perk">
              <span className="reb-perk-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span><strong>No limit</strong> on referrals</span>
            </div>
          </div>

          <a href="/request-project" className="reb-cta">
            Refer Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right — visual */}
        <div className="reb-visual" aria-hidden="true">
          <div className="reb-ring reb-ring-1" />
          <div className="reb-ring reb-ring-2" />
          <div className="reb-ring reb-ring-3" />
          <div className="reb-center-icon">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12V22H4V12" />
              <path d="M22 7H2v5h20V7z" />
              <path d="M12 22V7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>
          <div className="reb-badge-float reb-badge-float-1">90% OFF</div>
          <div className="reb-badge-float reb-badge-float-2">Cashback</div>
        </div>

      </div>
    </section>
  );
}
