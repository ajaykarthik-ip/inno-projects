import type { Metadata } from 'next';
import React from 'react';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/ieee-journal`;

export const metadata: Metadata = {
  title: 'IEEE Journal Paper Writing & Formatting — Inno Projects Coimbatore',
  description:
    'IEEE journal paper writing, formatting, editing and publication support from Inno Projects Coimbatore. Plagiarism-free, IEEE-compliant manuscripts delivered in 12 hours.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'IEEE Journal Services — Inno Projects Coimbatore',
    description:
      'Professional IEEE paper writing, formatting and publication support. Plagiarism-free, 12-hour delivery.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Inno Projects IEEE Journal Services' }],
  },
};

export default function IEEEJournal() {
  const phoneNumber = '9600309140';
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hi!%20I%20need%20help%20with%20IEEE%20journal%20formatting.`;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'IEEE Journal Services', path: '/ieee-journal' }]} />
      <div className="ieee-container">
      <div className="ieee-content">
        <div className="ieee-header">
          <h1 className="ieee-title">IEEE Journal Services</h1>
          <p className="ieee-subtitle">
            Professional assistance in creating, formatting, and publishing IEEE standard journal papers. 
            We help researchers and academics meet IEEE publication requirements with precision and excellence.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📄</div>
            <h3 className="service-title">IEEE Format Writing</h3>
            <p className="service-description">
              Complete paper writing services following IEEE standards and guidelines.
            </p>
            <ul className="service-features">
              <li>IEEE template implementation</li>
              <li>Proper citation format</li>
              <li>Abstract and keywords optimization</li>
              <li>Technical content development</li>
              <li>References formatting</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">✏️</div>
            <h3 className="service-title">Paper Formatting</h3>
            <p className="service-description">
              Transform your research into IEEE-compliant format with professional formatting.
            </p>
            <ul className="service-features">
              <li>IEEE style formatting</li>
              <li>Figure and table formatting</li>
              <li>Mathematical equations</li>
              <li>Page layout optimization</li>
              <li>Font and spacing corrections</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3 className="service-title">Review & Editing</h3>
            <p className="service-description">
              Comprehensive review and editing to ensure IEEE publication standards are met.
            </p>
            <ul className="service-features">
              <li>Technical accuracy review</li>
              <li>Language and grammar editing</li>
              <li>Structure optimization</li>
              <li>Plagiarism checking</li>
              <li>Final quality assurance</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="service-title">Research Support</h3>
            <p className="service-description">
              End-to-end research support from concept to publication-ready manuscript.
            </p>
            <ul className="service-features">
              <li>Literature review assistance</li>
              <li>Methodology development</li>
              <li>Data analysis support</li>
              <li>Results interpretation</li>
              <li>Conclusion formulation</li>
            </ul>
          </div>
        </div>

        <div className="guarantees-section">
          <h2 className="guarantees-title">Our Quality Guarantees</h2>
          
          <div className="guarantees-grid">
            <div className="guarantee-card">
              <div className="guarantee-icon">🛡️</div>
              <h3 className="guarantee-title">Plagiarism-Free</h3>
              <p className="guarantee-description">
                Every paper is written from scratch with original content. We use advanced plagiarism detection tools 
                to ensure complete originality and provide plagiarism reports with every delivery.
              </p>
              <ul className="guarantee-features">
                <li>Original research and writing</li>
                <li>Turnitin plagiarism report included</li>
                <li>Zero tolerance for copied content</li>
                <li>Proper citation and referencing</li>
              </ul>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon">✨</div>
              <h3 className="guarantee-title">Unique & Custom Work</h3>
              <p className="guarantee-description">
                Each project is tailored specifically to your requirements. We never reuse or resell content, 
                ensuring your paper is completely unique and meets your specific research objectives.
              </p>
              <ul className="guarantee-features">
                <li>Customized to your requirements</li>
                <li>Never reused or resold</li>
                <li>Tailored research approach</li>
                <li>Your intellectual property</li>
              </ul>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon">⚡</div>
              <h3 className="guarantee-title">12-Hour Delivery</h3>
              <p className="guarantee-description">
                Fast turnaround without compromising quality. We understand urgent deadlines and deliver 
                high-quality IEEE formatted papers within 12 hours or as per your timeline.
              </p>
              <ul className="guarantee-features">
                <li>Express delivery in 12 hours</li>
                <li>Quality maintained under pressure</li>
                <li>Flexible deadline options</li>
                <li>24/7 progress updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to Publish Your Research?</h2>
          <p className="cta-description">
            Get professional help with your IEEE journal paper. We deliver plagiarism-free, unique content 
            within 3 hours. Contact us now for expert assistance in formatting, writing, and preparing your research for publication.
          </p>
          <a className="contact-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span>Get Started</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}