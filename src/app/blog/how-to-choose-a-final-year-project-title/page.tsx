import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/blog/how-to-choose-a-final-year-project-title`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'How to Choose the Right Final Year Project Title in 2026 | Inno Projects',
  description:
    'Confused about how to choose a final year project title? This guide covers step-by-step tips for BE, BTech, MCA & MSc students to pick the best project title in ML, AI, Web Development, IoT and Blockchain for 2026.',
  keywords: [
    'how to choose final year project title',
    'best final year project title 2026',
    'how to select project title for engineering',
    'final year project title ideas',
    'project title for CSE 2026',
    'how to pick a good project topic',
    'final year project selection guide',
    'best project title for BTech',
    'MCA final year project title',
    'ML project title ideas 2026',
  ],
  alternates: { canonical: pageUrl },
  authors: [{ name: 'Inno Projects', url: 'https://www.innoprojects.in' }],
  openGraph: {
    type: 'article',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'How to Choose the Right Final Year Project Title in 2026',
    description:
      'Step-by-step guide for engineering students to pick the perfect final year project title in ML, AI, Web Dev, IoT & Blockchain.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'How to Choose Final Year Project Title – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose the Right Final Year Project Title in 2026',
    description: 'Step-by-step guide for engineering students to pick the perfect final year project title.',
    images: ['/og-image.png'],
  },
};

const steps = [
  {
    n: '01',
    title: 'Start With Your Domain Interest',
    content: `Your final year project will take months to complete. Choose a domain you are genuinely curious about — Machine Learning, Web Development, IoT, Blockchain, or Data Science. If you find ML fascinating, explore classification or prediction projects. If you enjoy building interfaces, full-stack web projects will keep you engaged. Passion for the domain means you will understand it better during your viva.`,
  },
  {
    n: '02',
    title: 'Check If It Is Implementable in Your Time',
    content: `Many students choose titles that sound impressive but are impossible to complete in one semester. A rule of thumb: if you cannot explain how the project works in 3 sentences, it is too complex. Pick a title with a clear problem statement, a defined dataset or input, and a measurable output. For example, "Crop Disease Detection Using CNN" is specific, implementable, and has a clear scope.`,
  },
  {
    n: '03',
    title: 'Match the Title to Your Tech Stack',
    content: `If you know Python, go for ML, AI, Data Science, or Computer Vision projects. If you know JavaScript or React, full-stack web projects make more sense. Trying to build an IoT project when you have never used Arduino leads to last-minute panic. Match the technology in the title to what you can actually write code in — or choose a project where full source code and implementation support is provided.`,
  },
  {
    n: '04',
    title: 'Check for IEEE Paper Availability',
    content: `An IEEE-based project gives your submission a strong base paper, a methodology to follow, and a result comparison table. When choosing a title, verify that an IEEE paper exists for that topic (IEEE Xplore, 2022–2026). A title with an IEEE paper is easier to document, creates a stronger project report, and is accepted without question by most college guides and evaluation panels.`,
  },
  {
    n: '05',
    title: 'Avoid Overused and Outdated Titles',
    content: `Titles like "Online Exam System", "Library Management System", "Student Database Management" are outdated — every evaluator has seen hundreds of them. Avoid pure CRUD applications with no intelligent component. In 2026, evaluators expect at least one modern element: a prediction model, an API integration, a real-time feature, or a data visualization dashboard. Adding "using Machine Learning" or "with AI-based Recommendations" to an otherwise basic project instantly modernises it.`,
  },
  {
    n: '06',
    title: 'Consider Dataset Availability',
    content: `For ML and AI projects, the dataset is the backbone. Before finalising a title, check if a public dataset exists — on Kaggle, UCI ML Repository, or government open data portals. A project with no available dataset is almost impossible to complete without extensive data collection. Titles like "Heart Disease Prediction", "Sentiment Analysis on Twitter", or "Plant Disease Detection" all have large, clean, ready-to-use datasets.`,
  },
  {
    n: '07',
    title: 'Think About Your Viva Questions',
    content: `Your guide and external evaluators will ask you deep questions about your project. Before finalising a title, ask yourself: Can I explain what problem this solves? Can I explain why I used this algorithm over others? Can I explain the architecture? If you cannot answer these confidently, choose a simpler and more focused title. A well-understood simple project scores higher than a poorly understood complex one.`,
  },
];

const domainTitles: { domain: string; icon: string; titles: string[] }[] = [
  {
    domain: 'Machine Learning',
    icon: '🤖',
    titles: [
      'Student Performance Prediction Using Random Forest',
      'Credit Card Fraud Detection Using Ensemble Methods',
      'Crop Yield Prediction Using Regression Models',
      'Heart Disease Risk Classification Using SVM',
    ],
  },
  {
    domain: 'Deep Learning & CV',
    icon: '👁️',
    titles: [
      'Real-Time Face Mask Detection Using CNN',
      'Brain Tumor Classification from MRI Using ResNet',
      'Plant Disease Detection Using Transfer Learning',
      'Driver Drowsiness Detection Using LSTM',
    ],
  },
  {
    domain: 'Web Development',
    icon: '🌐',
    titles: [
      'AI-Powered Job Portal with Skill Matching',
      'E-Commerce Platform with ML-Based Recommendations',
      'Online Exam System with Anti-Cheating Detection',
      'Hospital Management System with Appointment Booking',
    ],
  },
  {
    domain: 'IoT',
    icon: '📡',
    titles: [
      'Smart Home Automation Using Raspberry Pi',
      'IoT-Based Air Quality Monitoring System',
      'Smart Agriculture System with Soil Sensor',
      'GPS-Based Vehicle Tracking with Alert System',
    ],
  },
  {
    domain: 'Blockchain',
    icon: '🔗',
    titles: [
      'Decentralized Certificate Verification System',
      'Blockchain-Based Supply Chain Management',
      'Smart Contract for Medical Record Sharing',
      'NFT-Based Digital Asset Marketplace',
    ],
  },
  {
    domain: 'Data Science',
    icon: '📊',
    titles: [
      'COVID-19 Trend Analysis and Visualization Dashboard',
      'Stock Price Prediction Using LSTM + ARIMA',
      'Customer Churn Prediction for Telecom Industry',
      'Movie Recommendation System Using Collaborative Filtering',
    ],
  },
];

const mistakes = [
  { icon: '❌', text: 'Choosing a title your guide cannot understand — pick something you can explain clearly' },
  { icon: '❌', text: 'Selecting a title with no dataset or unrealistic data collection needs' },
  { icon: '❌', text: 'Copying your senior\'s project title without changing anything' },
  { icon: '❌', text: 'Choosing a purely hardware project when you have no electronics background' },
  { icon: '❌', text: 'Picking a title that is too broad — "AI System for Everything" is not a project' },
  { icon: '❌', text: 'Waiting until the last month to finalise — you will run out of time' },
];

export default function BlogHowToChooseProjectTitle() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}/#article`,
        headline: 'How to Choose the Right Final Year Project Title in 2026',
        description:
          'Step-by-step guide for engineering students to pick the perfect final year project title in ML, AI, Web Development, IoT and Blockchain for 2026.',
        image: `${siteUrl}/og-image.png`,
        author: {
          '@type': 'Organization',
          name: 'Inno Projects',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Inno Projects',
          url: siteUrl,
          logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
        },
        datePublished: '2025-01-01',
        dateModified: '2026-04-19',
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'How to Choose a Final Year Project Title',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="blog-page">

        {/* ── Hero ── */}
        <header className="blog-hero">
          <div className="blog-hero-inner">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">How to Choose a Project Title</span>
            </nav>

            <div className="blog-meta-row">
              <span className="blog-tag">Guide</span>
              <span className="blog-tag">Final Year Projects</span>
              <span className="blog-date">April 2026 · 7 min read</span>
            </div>

            <h1 className="blog-h1">
              How to Choose the Right<br />
              Final Year Project Title in 2026
            </h1>

            <p className="blog-lead">
              Picking the wrong project title costs you months of wasted effort, a failed viva, or worse — a rejected submission. This guide walks you through exactly how to choose a final year project title that your guide approves, your evaluators respect, and you can actually complete.
            </p>

            <div className="blog-author-row">
              <div className="blog-author-avatar">IP</div>
              <div>
                <span className="blog-author-name">Inno Projects Team</span>
                <span className="blog-author-sub">Final Year Project Experts · Coimbatore</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Article body ── */}
        <div className="blog-body">
          <div className="blog-container">

            {/* Intro callout */}
            <div className="blog-callout">
              <span className="blog-callout-icon">💡</span>
              <p>
                Over <strong>3000+ students</strong> have come to Inno Projects after wasting 2–3 months on a wrong project title. This guide is written from that experience — real mistakes, real patterns, real fixes.
              </p>
            </div>

            {/* Steps */}
            <h2 className="blog-h2">7 Steps to Choose the Perfect Project Title</h2>

            <div className="blog-steps">
              {steps.map(({ n, title, content }) => (
                <div key={n} className="blog-step">
                  <div className="blog-step-header">
                    <span className="blog-step-n">{n}</span>
                    <h3 className="blog-step-title">{title}</h3>
                  </div>
                  <p className="blog-step-content">{content}</p>
                </div>
              ))}
            </div>

            {/* Mistakes */}
            <h2 className="blog-h2">Common Mistakes Students Make</h2>
            <div className="blog-mistakes">
              {mistakes.map(({ icon, text }) => (
                <div key={text} className="blog-mistake-item">
                  <span>{icon}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            {/* Domain titles */}
            <h2 className="blog-h2">Popular Final Year Project Titles for 2026 — by Domain</h2>
            <p className="blog-body-p">
              Here are handpicked titles that are implementable, IEEE-supported, and trending in 2026. These are not randomly generated — every title below has a working implementation available at Inno Projects.
            </p>

            <div className="blog-domain-grid">
              {domainTitles.map(({ domain, icon, titles }) => (
                <div key={domain} className="blog-domain-card">
                  <div className="blog-domain-header">
                    <span className="blog-domain-icon">{icon}</span>
                    <h3 className="blog-domain-name">{domain}</h3>
                  </div>
                  <ul className="blog-title-list">
                    {titles.map(t => (
                      <li key={t} className="blog-title-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick checklist */}
            <h2 className="blog-h2">Quick Checklist Before You Finalise Your Title</h2>
            <div className="blog-checklist">
              {[
                'Can I explain the problem this project solves in one sentence?',
                'Does a dataset or data source exist for this project?',
                'Is there an IEEE paper (2022–2026) covering this topic?',
                'Can I implement this with the tech stack I know?',
                'Can I complete this within my submission deadline?',
                'Will my college guide/department accept this domain?',
                'Is this title different from what my classmates are doing?',
              ].map(item => (
                <label key={item} className="blog-checklist-item">
                  <span className="blog-checkbox" aria-hidden="true" />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* CTA */}
            <div className="blog-cta-box">
              <div className="blog-cta-content">
                <h3 className="blog-cta-h3">Still Confused? We Will Pick the Right Title for You.</h3>
                <p className="blog-cta-p">
                  WhatsApp us your degree, department, and area of interest — our team will suggest 3–5 project titles that match your college requirements and are fully implementable. 500+ titles available. Delivered in 12 hours.
                </p>
                <div className="blog-cta-btns">
                  <Link href="/project-titles" className="blog-btn-primary">
                    Browse 500+ Project Titles
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/919600309140?text=Hi%2C%20I%20need%20help%20choosing%20a%20final%20year%20project%20title"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-btn-wa"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp for Free Suggestion
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
