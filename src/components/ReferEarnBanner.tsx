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
              <span className="reb-perk-icon">🎁</span>
              <span>Up to <strong>90% off</strong> for you</span>
            </div>
            <div className="reb-perk">
              <span className="reb-perk-icon">💸</span>
              <span><strong>Cashback</strong> on every referral</span>
            </div>
            <div className="reb-perk">
              <span className="reb-perk-icon">♾️</span>
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
