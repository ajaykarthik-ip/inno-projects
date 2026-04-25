import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'About Us',
  description:
    'Learn about Inno Projects — Coimbatore\'s trusted final year project center. We deliver 600+ projects every year in ML, AI, Web Dev, IoT & Blockchain with full source code and 12-hour delivery to BTech, BE, MCA & MSc students.',
  keywords: [
    'about inno projects',
    'inno projects coimbatore',
    'final year project center coimbatore about',
    'who is inno projects',
    'best project center coimbatore team',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'About Inno Projects – Final Year Project Center in Coimbatore',
    description:
      'Inno Projects is Coimbatore\'s trusted final year project center delivering 600+ projects every year in ML, AI, Web Dev, IoT & Blockchain with 12-hour delivery.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Inno Projects' }],
  },
};

const stats = [
  { value: '600+', label: 'Projects Delivered Per Year' },
  { value: '12 hrs', label: 'Average Delivery Time' },
  { value: '500+', label: 'Project Titles Available' },
  { value: '24/7', label: 'WhatsApp Support' },
];

const services = [
  { icon: '🤖', title: 'AI & Machine Learning', desc: 'Python-based ML, deep learning, NLP, and computer vision projects with trained models and datasets.' },
  { icon: '🌐', title: 'Web Development', desc: 'Full-stack React, Node.js, Django, and Next.js projects with live deployment support.' },
  { icon: '📡', title: 'IoT & Embedded', desc: 'Arduino, Raspberry Pi, smart home, and industrial IoT projects with hardware support.' },
  { icon: '🔗', title: 'Blockchain', desc: 'Ethereum, Solidity smart contracts, and decentralized application projects.' },
  { icon: '📄', title: 'IEEE Journal Papers', desc: 'Professional IEEE paper writing, formatting, and publication support for under ₹3,000.' },
  { icon: '🎓', title: 'Viva Preparation', desc: 'Complete viva Q&A guide, synopsis writing, and PPT preparation included with every project.' },
];

const whyUs = [
  { icon: '⚡', title: '12-Hour Delivery', desc: 'Fastest project delivery in Coimbatore. Order today, receive your complete project tonight.' },
  { icon: '📦', title: 'Complete Package', desc: 'Source code + Report + PPT + IEEE paper + Synopsis + Viva guide — everything in one.' },
  { icon: '🏫', title: 'All Colleges Covered', desc: 'PSG, CIT, SREC, Karpagam, SNS, Amrita, KGiSL, Sri Krishna and every college in Coimbatore.' },
  { icon: '🔬', title: 'Modern Technologies', desc: 'We specialize in current-year domains — LLM apps, GPT-based AI, React, edge IoT, production ML.' },
  { icon: '💬', title: '24/7 WhatsApp Support', desc: 'Direct support on WhatsApp. No bots, no delays — real help, any time.' },
  { icon: '💰', title: 'Student-Friendly Pricing', desc: 'Competitive pricing with no hidden fees. Get a quote in 2 minutes on WhatsApp.' },
];

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">

        {/* Hero */}
        <div className="about-hero">
          <div className="about-hero-badge">Est. in Coimbatore</div>
          <h1 className="about-title">About Inno Projects</h1>
          <p className="about-subtitle">
            Coimbatore&apos;s trusted final year project center — delivering real, working projects
            in ML, AI, Web Development, IoT, and Blockchain with full source code,
            documentation, and expert support. Delivered in 12 hours.
          </p>
          <div className="about-cta-row">
            <a
              href="https://wa.me/919600309140?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Inno%20Projects!"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn-primary"
            >
              WhatsApp Us
            </a>
            <Link href="/project-titles" className="about-btn-secondary">
              Browse Projects
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="about-stat-card">
              <div className="about-stat-value">{s.value}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Who We Are */}
        <div className="about-section">
          <h2 className="about-section-title">Who We Are</h2>
          <div className="about-text-block">
            <p>
              Inno Projects is a final year project center based in Coimbatore, Tamil Nadu. We work
              with engineering and postgraduate students across BE, BTech, MCA, MSc, BCA, and
              Diploma programmes — helping them get real, working, college-approved projects fast.
            </p>
            <p>
              We deliver <strong>600+ final year projects every year</strong> across every major
              technical domain. Every project comes with full source code, a detailed project
              report, PowerPoint presentation, IEEE base paper, synopsis, and a viva Q&amp;A
              preparation guide.
            </p>
            <p>
              Our office is located at <strong>28, Baba St, Janaki Nagar, Venkitapuram,
              Coimbatore 641025</strong>. We are available 24/7 on WhatsApp at{' '}
              <a href="tel:+919600309140">+91 9600309140</a>.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="about-section">
          <h2 className="about-section-title">What We Offer</h2>
          <div className="about-services-grid">
            {services.map((s) => (
              <div key={s.title} className="about-service-card">
                <div className="about-service-icon">{s.icon}</div>
                <h3 className="about-service-title">{s.title}</h3>
                <p className="about-service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us */}
        <div className="about-section">
          <h2 className="about-section-title">Why Students Choose Us</h2>
          <div className="about-why-grid">
            {whyUs.map((w) => (
              <div key={w.title} className="about-why-card">
                <div className="about-why-icon">{w.icon}</div>
                <div>
                  <h3 className="about-why-title">{w.title}</h3>
                  <p className="about-why-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="about-section">
          <h2 className="about-section-title">Find Us</h2>
          <div className="about-location-card">
            <div className="about-location-info">
              <address className="about-address">
                <strong>Inno Projects</strong><br />
                28, Baba St, Janaki Nagar, Venkitapuram,<br />
                Coimbatore, Tamil Nadu 641025<br />
                Phone: <a href="tel:+919600309140">+91 9600309140</a>
              </address>
              <p className="about-location-note">
                We also deliver fully online via WhatsApp and email — no travel needed.
                Students from Gandhipuram, Peelamedu, RS Puram, Saravanampatti, and
                across Coimbatore order remotely every day.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta-section">
          <h2 className="about-cta-title">Ready to Get Your Project?</h2>
          <p className="about-cta-desc">
            WhatsApp us now — tell us your degree, domain, and deadline. We&apos;ll send you
            matching project titles within minutes and deliver the complete project in 12 hours.
          </p>
          <a
            href="https://wa.me/919600309140?text=Hi%2C%20I%20need%20a%20final%20year%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn-primary"
          >
            WhatsApp Now — Get Your Project in 12 Hours
          </a>
        </div>

      </div>
    </div>
  );
}
