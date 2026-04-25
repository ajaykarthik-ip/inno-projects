import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/project-center-in-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Best Final Year Project Center in Coimbatore 2026',
  description:
    'Inno Projects – the best final year project center in Coimbatore, Tamil Nadu. 600+ IEEE & non-IEEE projects delivered every year in ML, AI, Web Development, IoT & Blockchain. Full source code, documentation, PPT and 12-hour delivery. Serving BE, BTech, MCA, MSc students across Coimbatore.',
  keywords: [
    'best final year project center in coimbatore',
    'final year project center in coimbatore',
    'project center in coimbatore',
    'project center in gandhipuram coimbatore',
    'IEEE project center coimbatore',
    'final year project coimbatore 2025',
    'final year project coimbatore 2026',
    'best project center in coimbatore for engineering',
    'ML project coimbatore',
    'AI project center coimbatore',
    'web development project coimbatore',
    'IoT project center coimbatore',
    'blockchain project coimbatore',
    'BTech final year project coimbatore',
    'MCA final year project coimbatore',
    'MSc final year project coimbatore',
    'BE CSE project center coimbatore',
    'project center near me coimbatore',
    'cheap final year project coimbatore',
    'final year project with source code coimbatore',
    'project center velandipalayam coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Best Final Year Project Center in Coimbatore 2026 | Inno Projects',
    description:
      'Best final year project center in Coimbatore. 600+ projects delivered every year in ML, AI, Web Dev, IoT & Blockchain. Full source code, 12-hour delivery. Call +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Inno Projects – Best Final Year Project Center in Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Final Year Project Center in Coimbatore 2026 | Inno Projects',
    description: 'Best project center in Coimbatore. 600+ final year projects delivered every year in ML, AI, Web Dev, IoT & Blockchain. 12-hour delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const degrees = [
  {
    name: 'BE CSE',
    domains: 'Machine Learning, Deep Learning, Web Development, Blockchain, Cyber Security, NLP, Data Science',
  },
  {
    name: 'BE IT',
    domains: 'Cloud Computing, IoT, Network Security, AI, Mobile App Development, Big Data Analytics',
  },
  {
    name: 'BE ECE',
    domains: 'IoT, Embedded Systems, Image Processing, VLSI, Wireless Communication, Signal Processing',
  },
  {
    name: 'BE EEE',
    domains: 'Power Electronics, Smart Grid, Renewable Energy, MATLAB Simulation, Motor Drives',
  },
  {
    name: 'BTech CSE / IT',
    domains: 'Artificial Intelligence, ML, Full Stack Web Dev, IoT, Blockchain, Cyber Security',
  },
  {
    name: 'MCA',
    domains: 'Full Stack Development, Machine Learning, Cloud Systems, Mobile Apps, Database Projects',
  },
  {
    name: 'MSc CS / IT',
    domains: 'Deep Learning, Computer Vision, Natural Language Processing, Web Development, AI',
  },
  {
    name: 'BCA',
    domains: 'Web Development, Python Projects, PHP, Android, Database Management Systems',
  },
  {
    name: 'M.E / M.Tech',
    domains: 'Advanced AI, Research-based IEEE Projects, PhD-level Topics, Thesis Support',
  },
  {
    name: 'MBA / MCA',
    domains: 'Data Analytics, Business Intelligence, ERP Projects, E-Commerce Systems, CRM',
  },
  {
    name: 'B.Sc CS / IT',
    domains: 'Python Projects, Web Design, Basic ML, Android Apps, Data Science Fundamentals',
  },
  {
    name: 'Diploma',
    domains: 'Mini Projects, Basic IoT, Web Design, Python Basics, Embedded Hardware Projects',
  },
];

const domains = [
  { icon: '🤖', name: 'Machine Learning', count: '120+', desc: 'Prediction, classification, regression models with real datasets' },
  { icon: '🧠', name: 'Artificial Intelligence', count: '100+', desc: 'AI-powered apps, expert systems, intelligent agents' },
  { icon: '👁️', name: 'Deep Learning & CV', count: '80+', desc: 'CNN, LSTM, object detection, face recognition' },
  { icon: '🌐', name: 'Web Development', count: '90+', desc: 'React, Node, Django full-stack projects with live deployment' },
  { icon: '📡', name: 'IoT & Embedded', count: '70+', desc: 'Arduino, Raspberry Pi, smart home, industrial IoT' },
  { icon: '🔗', name: 'Blockchain', count: '40+', desc: 'Ethereum, smart contracts, decentralized apps' },
  { icon: '📊', name: 'Data Science', count: '60+', desc: 'EDA, visualization, predictive analytics, dashboards' },
  { icon: '☁️', name: 'Cloud Computing', count: '30+', desc: 'AWS, Azure-based projects, distributed systems' },
];

const features = [
  {
    icon: '⚡',
    title: '12-Hour Delivery',
    desc: 'The fastest project delivery in Coimbatore. Order by WhatsApp today and receive your complete project — source code, documentation, PPT, and abstract — within 12 hours. No waiting, no delays.',
  },
  {
    icon: '📦',
    title: '500+ Tested Projects',
    desc: 'Every project in our library is fully implemented, tested, and ready to submit. We don\'t send half-done code. All 500+ titles are verified working before delivery.',
  },
  {
    icon: '🎓',
    title: 'Every Degree, Every College',
    desc: 'Projects for BE, BTech, MCA, MSc, BCA, Diploma — all Coimbatore colleges covered. PSG, CIT, SREC, Karpagam, SNS, Amrita, KGiSL, Sri Krishna, KCTCS and more.',
  },
  {
    icon: '📄',
    title: 'Complete Package',
    desc: 'Source code + Project report + PPT slides + IEEE base paper + Synopsis + Viva Q&A guide. Everything your college requires in one package.',
  },
  {
    icon: '🌐',
    title: 'Online — No Travel Needed',
    desc: 'Delivered via WhatsApp and email. No need to travel to a project center in Coimbatore. Order from Gandhipuram, Peelamedu, RS Puram — anywhere. We reach you.',
  },
  {
    icon: '🔬',
    title: 'Modern Tech Domains',
    desc: 'Competitors in Coimbatore still push outdated Java projects. We specialize in 2025 domains — GPT-based AI, LLM apps, Next.js, React, edge IoT, and production-grade ML pipelines.',
  },
];

const areas = [
  'Gandhipuram', 'Peelamedu', 'RS Puram', 'Saravanampatti', 'Singanallur',
  'Velandipalayam', 'Ramanathapuram', 'Ukkadam', 'Hopes College', 'Kovaipudur',
  'Eachanari', 'Ondipudur', 'Siddhapudur', 'Tatabad', 'Podanur',
  'Kuniyamuthur', 'Kalapatti', 'Thudiyalur', 'Vadavalli', 'Pappanaickenpalayam',
  'Sowripalayam', 'Sugunapuram', 'Rathinapuri', 'Saibaba Colony', 'Race Course',
];

const colleges = [
  // Coimbatore
  'PSG College of Technology',
  'PSG College of Arts and Science',
  'PSG Polytechnic College',
  'Coimbatore Institute of Technology',
  'Sri Ramakrishna Engineering College',
  'Sri Ramakrishna Institute of Technology',
  'Sri Ramakrishna College of Arts and Science',
  'Karpagam College of Engineering',
  'Karpagam Institute of Technology',
  'Karpagam Academy of Higher Education',
  'SNS College of Technology',
  'Amrita Vishwa Vidyapeetham, Coimbatore',
  'KGiSL Institute of Technology',
  'Sri Krishna College of Engineering and Technology',
  'Hindusthan College of Engineering',
  'RVS College of Engineering',
  'Bannari Amman Institute of Technology',
  'Dr NGP Institute of Technology',
  'Kumaraguru College of Technology',
  'Sri Shakthi Institute of Engineering and Technology',
  'Akshaya College of Engineering and Technology',
  'Jansons Institute of Technology',
  'GRT Institute of Engineering and Technology',
  'PPG College of Arts and Science',
  'PPG Institute of Technology',
  'VLB College of Arts and Science',
  'Sri Vidya College of Engineering and Technology',
  'Avinashilingam Institute for Home Science and Higher Education for Women',
  'Nandha Engineering College',
  'CSI College of Engineering',
  // Tamil Nadu
  'Sathyabama Institute of Science and Technology, Chennai',
  'Mepco Schlenk Engineering College',
  'SRI SAI RANGANATHAN ENGINEERING COLLEGE',
  'Anna University',
  // Kerala
  'TKM College of Engineering, Kollam',
  'Federal Institute of Science and Technology (FISAT), Angamaly',
  'NSS College of Engineering (NSSCE)',
  // Karnataka
  'Dayananda Sagar University, Bangalore',
  'Jain University, Bangalore',
  'New Horizon College of Engineering (NHCE), Bangalore',
  // Other States
  'VIT Vellore',
  'Misrimal Navajee Munoth Jain Engineering College',
  // International
  'Anhalt University of Applied Sciences, Germany',
  'University of Roehampton, UK',
];

const faqs = [
  {
    q: 'What is the best final year project center in Coimbatore?',
    a: 'Inno Projects is one of the best final year project centers in Coimbatore, Tamil Nadu. We offer 500+ projects in ML, AI, Web Development, IoT, and Blockchain with full source code, documentation, and expert support — delivered in 12 hours. We serve BE, BTech, MCA, MSc, and BCA students across all colleges in Coimbatore.',
  },
  {
    q: 'What is the cost of final year projects in Coimbatore?',
    a: 'At Inno Projects Coimbatore, project pricing is affordable and student-friendly. Prices vary by domain and technology stack. We offer competitive rates with full source code, documentation, PPT, and support included. Contact us on WhatsApp at +91 9600309140 for the latest pricing on your specific project.',
  },
  {
    q: 'Do you offer IEEE projects in Coimbatore?',
    a: 'Yes. Inno Projects Coimbatore offers IEEE-based final year projects for 2024-2025 in ML, AI, Deep Learning, IoT, Blockchain, and Web Development. We provide the original IEEE base paper, implementation source code, modified algorithm, and result comparison. We also assist with IEEE journal publication for less than ₹3,000.',
  },
  {
    q: 'How fast can I get my final year project in Coimbatore?',
    a: 'Inno Projects delivers complete final year projects within 12 hours — the fastest delivery among all project centers in Coimbatore. Simply WhatsApp us at +91 9600309140, choose your project, and receive the full package within 12 hours. We are available 24/7.',
  },
  {
    q: 'Which project center in Coimbatore is best for Machine Learning and AI projects?',
    a: 'Inno Projects specializes in Machine Learning, Deep Learning, and Artificial Intelligence final year projects in Coimbatore. We have 200+ ML/AI project titles for 2025 with full Python source code, trained models, datasets, documentation, and implementation explanation. Our AI projects use current frameworks like TensorFlow, PyTorch, and scikit-learn.',
  },
  {
    q: 'Can I get a final year project online without visiting a center in Coimbatore?',
    a: 'Yes. Inno Projects delivers all final year projects online. WhatsApp us at +91 9600309140, choose your project from 500+ titles, confirm your requirements, and receive the complete project package within 12 hours — anywhere in Coimbatore, Tamil Nadu, or India.',
  },
  {
    q: 'Which colleges in Coimbatore do you serve?',
    a: 'We serve students from all engineering colleges in Coimbatore including PSG College of Technology, Coimbatore Institute of Technology (CIT), Sri Ramakrishna Engineering College (SREC), Karpagam College of Engineering, SNS College, Amrita, KGiSL, RVS, Dr NGP, Hindusthan College, and all other colleges in Coimbatore.',
  },
  {
    q: 'What domains are available for final year projects in Coimbatore?',
    a: 'Inno Projects Coimbatore offers final year projects in Machine Learning, Deep Learning, Artificial Intelligence, Computer Vision, Natural Language Processing, Web Development (React, Node.js, Django), IoT, Blockchain, Data Science, Cloud Computing, and Cyber Security — over 500 projects total for 2025.',
  },
];

export default function ProjectCenterCoimbatorePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'EducationalOrganization'],
        '@id': `${siteUrl}/#organization`,
        name: 'Inno Projects',
        alternateName: 'Inno Projects - Final Year Project Center Coimbatore',
        url: siteUrl,
        telephone: '+91-9600309140',
        image: `${siteUrl}/og-image.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '28, Baba St, Janaki Nagar, Venkitapuram',
          addressLocality: 'Coimbatore',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
          postalCode: '641025',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '11.0301',
          longitude: '77.0046',
        },
        openingHours: 'Mo-Su 00:00-23:59',
        priceRange: '₹₹',
        areaServed: [
          { '@type': 'City', name: 'Coimbatore' },
          { '@type': 'State', name: 'Tamil Nadu' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Project Center in Coimbatore',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="cbe-page">

        {/* ── Hero ──────────────────────────────────────── */}
        <section className="cbe-hero">
          <div className="cbe-hero-bg" aria-hidden="true" />
          <div className="cbe-hero-inner">
            <nav className="cbe-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Project Center in Coimbatore</span>
            </nav>

            <div className="cbe-hero-badge">
              <span className="cbe-badge-pulse" aria-hidden="true" />
              Coimbatore&apos;s Fastest Project Delivery — 12 Hours Guaranteed
            </div>

            <h1 className="cbe-hero-h1">
              Best Final Year Project Center<br />
              in <span className="cbe-accent">Coimbatore</span>
            </h1>

            <p className="cbe-hero-sub">
              Inno Projects is Coimbatore&apos;s premier final year project center — <strong>500+ projects</strong> in
              ML, AI, Web Development, IoT &amp; Blockchain with full source code, documentation, and
              expert support. Delivered in <strong>12 hours</strong>, available 24/7.
            </p>

            <div className="cbe-hero-pills">
              {['500+ Projects', 'IEEE & Non-IEEE', '12-Hour Delivery', '24/7 Support', 'Full Source Code', 'PPT & Documentation', 'Viva Q&A Guide'].map(p => (
                <span key={p} className="cbe-pill">{p}</span>
              ))}
            </div>

            <div className="cbe-hero-ctas">
              <Link href="/project-titles" className="cbe-btn-primary">
                Browse 500+ Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://wa.me/919600309140"
                target="_blank"
                rel="noopener noreferrer"
                className="cbe-btn-wa"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────── */}
        <div className="cbe-stats-bar">
          {[
            { value: '500+', label: 'Project Titles' },
            { value: '12hr', label: 'Delivery Time' },
            { value: '1000+', label: 'Students Helped' },
            { value: '24/7', label: 'Support Available' },
            { value: '₹999+', label: 'Starting Price' },
          ].map(({ value, label }) => (
            <div key={label} className="cbe-stat">
              <span className="cbe-stat-val">{value}</span>
              <span className="cbe-stat-lbl">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Why section ───────────────────────────────── */}
        <section className="cbe-section">
          <div className="cbe-container">
            <p className="cbe-eyebrow">Why Choose Inno Projects</p>
            <h2 className="cbe-section-h2">
              What Makes Us the Best Project Center in Coimbatore
            </h2>
            <p className="cbe-section-p">
              Most project centers in Coimbatore recycle the same outdated projects year after year.
              At Inno Projects, every title is updated for 2025 — built on the technologies that companies
              actually hire for and universities accept without issue.
            </p>
            <div className="cbe-feat-grid">
              {features.map(({ icon, title, desc }) => (
                <article key={title} className="cbe-feat-card">
                  <span className="cbe-feat-icon" aria-hidden="true">{icon}</span>
                  <h3 className="cbe-feat-title">{title}</h3>
                  <p className="cbe-feat-desc">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Domains ───────────────────────────────────── */}
        <section className="cbe-section cbe-alt">
          <div className="cbe-container">
            <p className="cbe-eyebrow">Technology Domains</p>
            <h2 className="cbe-section-h2">Final Year Project Domains Available in Coimbatore</h2>
            <p className="cbe-section-p">
              Inno Projects Coimbatore specializes in the most in-demand, future-ready technology domains for
              2025. All projects include full working implementation — not just theory.
            </p>
            <div className="cbe-domain-grid">
              {domains.map(({ icon, name, count, desc }) => (
                <article key={name} className="cbe-domain-card">
                  <span className="cbe-domain-icon" aria-hidden="true">{icon}</span>
                  <div className="cbe-domain-info">
                    <h3 className="cbe-domain-name">{name}</h3>
                    <p className="cbe-domain-desc">{desc}</p>
                  </div>
                  <span className="cbe-domain-badge">{count}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Degrees ───────────────────────────────────── */}
        <section className="cbe-section">
          <div className="cbe-container">
            <p className="cbe-eyebrow">Degree-wise Projects</p>
            <h2 className="cbe-section-h2">
              Final Year Projects for All Degree Programs in Coimbatore
            </h2>
            <p className="cbe-section-p">
              We serve students from every engineering and arts &amp; science college in Coimbatore.
              Whether your college follows Anna University, Bharathiar University, or any autonomous pattern —
              our projects meet all submission requirements.
            </p>
            <div className="cbe-degree-grid">
              {degrees.map(({ name, domains: d }) => (
                <article key={name} className="cbe-degree-card">
                  <h3 className="cbe-degree-name">{name} Final Year Projects</h3>
                  <p className="cbe-degree-domains">{d}</p>
                  <Link href="/project-titles" className="cbe-degree-link">
                    View titles →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Colleges ──────────────────────────────────── */}
        <section className="cbe-section cbe-alt">
          <div className="cbe-container">
            <p className="cbe-eyebrow">Colleges We Serve</p>
            <h2 className="cbe-section-h2">
              Serving Students Across Tamil Nadu, Kerala, Karnataka &amp; Abroad
            </h2>
            <p className="cbe-section-p">
              Our projects are accepted at colleges across India and internationally. We comply with Anna University,
              Bharathiar University, VTU, and other university project submission guidelines.
            </p>
            <ul className="cbe-college-list">
              {colleges.map(c => (
                <li key={c} className="cbe-college-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {c}
                </li>
              ))}
              <li className="cbe-college-item cbe-college-more">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                All other colleges in Tamil Nadu, Kerala, Karnataka &amp; beyond
              </li>
            </ul>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────── */}
        <section className="cbe-section">
          <div className="cbe-container">
            <p className="cbe-eyebrow">Simple Process</p>
            <h2 className="cbe-section-h2">
              How to Get Your Final Year Project from Coimbatore&apos;s Best Center
            </h2>
            <div className="cbe-steps">
              {[
                {
                  n: '01',
                  title: 'Browse 500+ Project Titles',
                  desc: 'Visit our project titles page and filter by domain, technology, or degree. All 500+ titles are available for 2025 with descriptions and tech stack details.',
                },
                {
                  n: '02',
                  title: 'WhatsApp Your Requirements',
                  desc: 'Send us your chosen title, degree, college, and any customization needs on WhatsApp at +91 9600309140. We confirm within minutes.',
                },
                {
                  n: '03',
                  title: 'Receive Complete Project in 12 Hours',
                  desc: 'Source code + Documentation + PPT + IEEE paper + Synopsis + Viva guide — all delivered to you within 12 hours, anywhere in Coimbatore.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="cbe-step">
                  <span className="cbe-step-n" aria-hidden="true">{n}</span>
                  <div>
                    <h3 className="cbe-step-title">{title}</h3>
                    <p className="cbe-step-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Areas ─────────────────────────────────────── */}
        <section className="cbe-section cbe-alt">
          <div className="cbe-container">
            <p className="cbe-eyebrow">Coverage</p>
            <h2 className="cbe-section-h2">
              Final Year Projects Available Across All Areas of Coimbatore
            </h2>
            <p className="cbe-section-p">
              Since Inno Projects delivers online via WhatsApp, we reach every student in every area of
              Coimbatore — no travel required, no waiting in queues.
            </p>
            <div className="cbe-areas">
              {areas.map(area => (
                <span key={area} className="cbe-area-chip">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section className="cbe-section">
          <div className="cbe-container cbe-container--narrow">
            <p className="cbe-eyebrow">Got Questions?</p>
            <h2 className="cbe-section-h2">
              Frequently Asked Questions — Final Year Projects in Coimbatore
            </h2>
            <div className="cbe-faq">
              {faqs.map(({ q, a }) => (
                <details key={q} className="cbe-faq-item">
                  <summary className="cbe-faq-q">{q}</summary>
                  <p className="cbe-faq-a">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="cbe-cta">
          <div className="cbe-container">
            <h2 className="cbe-cta-h2">
              Ready to Get Your Final Year Project<br />
              in <span className="cbe-accent">Coimbatore?</span>
            </h2>
            <p className="cbe-cta-sub">
              Join 1000+ engineering students across Coimbatore who trusted Inno Projects for their final year project.
              500+ titles. 12-hour delivery. Full source code. Available 24/7.
            </p>
            <div className="cbe-cta-btns">
              <Link href="/project-titles" className="cbe-btn-primary">
                Browse All 500+ Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://wa.me/919600309140"
                target="_blank"
                rel="noopener noreferrer"
                className="cbe-btn-wa"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp +91 9600309140
              </a>
            </div>
            <address className="cbe-address">
              <strong>Inno Projects</strong> — 28, Baba St, Janaki Nagar, Venkitapuram, Velandipalayam,
              Coimbatore, Tamil Nadu 641025 &nbsp;|&nbsp; Open 24 hours
            </address>
          </div>
        </section>

      </div>
    </>
  );
}
