import type { Metadata } from 'next';
import Link from 'next/link';
import '../post.css';

const siteUrl = 'https://www.innoprojects.tech';
const pageUrl = `${siteUrl}/blog/how-to-complete-final-year-project-last-minute`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'How to Complete Your Final Year Project in the Last Week | Inno Projects',
  description:
    'Running out of time for your final year project? A step-by-step emergency plan to complete your project in one week — or get a complete project delivered in 12 hours from Inno Projects, Coimbatore.',
  keywords: [
    'how to complete final year project last minute',
    'final year project emergency',
    'project submission deadline help',
    'get final year project fast',
    'final year project in one week',
    '12 hour project delivery',
    'last minute project help',
    'final year project help Coimbatore',
    'quick final year project',
    'Inno Projects fast delivery',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'How to Complete Your Final Year Project When You Are Running Out of Time',
    description:
      'One week left and no project? Emergency 5-day plan + 12-hour delivery option from Inno Projects.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Last Minute Final Year Project – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Complete Your Final Year Project When You Are Running Out of Time',
    description: 'Emergency plan for finishing your final year project in one week — or 12 hours.',
    images: ['/og-image.png'],
  },
};

const emergencyPlanSteps = [
  {
    n: '01',
    title: 'Day 1: Finalise Your Topic TODAY',
    content:
      "Don't spend more than 2 hours deciding on a topic. Pick something with available source code and a dataset. Search GitHub, Kaggle, and Google Scholar for existing implementations. The goal today is a confirmed title, not a perfect one. A simple, working project beats an ambitious, unfinished one every time.",
  },
  {
    n: '02',
    title: 'Day 2: Get Source Code and Run It',
    content:
      'Working code first, understanding later. Find the source code — either from GitHub, from Inno Projects, or from a trusted project centre. Set up the environment, install dependencies, and run it. Confirm it works end-to-end. Do not try to understand every line today.',
  },
  {
    n: '03',
    title: 'Day 3: Modify and Customise',
    content:
      "Change the UI with your college name, roll number, and project title. Add one small feature — even changing the dataset or adding an extra column counts. This modification is what makes the project yours and gives you something original to talk about in your viva.",
  },
  {
    n: '04',
    title: 'Day 4: Write the Report',
    content:
      'Use the running code as your reference. Write the abstract (150 words), introduction (explain the problem), methodology (what your code does), and results (screenshots of output). Download an IEEE format template. Focus on accuracy and completeness over depth — evaluators check structure first.',
  },
  {
    n: '05',
    title: 'Day 5: Create PPT and Prepare Viva Answers',
    content:
      '10 slides maximum: title, problem statement, objectives, system architecture, algorithm, screenshots, results, conclusion, future scope, references. Prepare answers for 10 common viva questions about your project. Practice the 4-sentence summary of your project until it is automatic.',
  },
];

const cutTips = [
  {
    num: '01',
    title: 'Skip Complex Features',
    desc: 'A working simple project beats a broken complex one',
  },
  {
    num: '02',
    title: 'Use Existing Datasets',
    desc: "Don't collect data — use Kaggle, UCI, government datasets",
  },
  {
    num: '03',
    title: 'Use a Template Report',
    desc: "Modify an existing report structure, don't write from scratch",
  },
  {
    num: '04',
    title: 'Prioritise the Demo',
    desc: 'A live working demo saves your viva marks',
  },
];

const placementPoints = [
  "Most companies don't ask for project marks — they ask what you built",
  'A well-understood simple project beats a marks-based complex one',
  'Use the 12 hours after submission to learn your project deeply',
  'Document it on GitHub before your interview',
  'Frame it as a problem you solved — not a submission you completed',
];

export default function BlogLastMinuteProject() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}/#article`,
        headline: 'How to Complete Your Final Year Project When You Are Running Out of Time',
        description:
          'Emergency guide for final year students — 5-day plan to complete your project plus 12-hour delivery option from Inno Projects.',
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
        datePublished: '2022-10-03',
        dateModified: '2025-03-15',
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
            name: 'How to Complete Final Year Project Last Minute',
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
              <span aria-current="page">Complete Project Last Minute</span>
            </nav>

            <div className="blog-meta-row">
              <span className="blog-tag">Emergency Guide</span>
              <span className="blog-date">October 2022 · 5 min read</span>
            </div>

            <h1 className="blog-h1">
              How to Complete Your Final Year Project When You Are Running Out of Time
            </h1>

            <p className="blog-lead">
              You have one week left. No project. No code. No report. Here is exactly what to do — step by step.
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

            {/* Callout */}
            <div className="blog-callout">
              <span className="blog-callout-icon">⚡</span>
              <p>
                <strong>Inno Projects delivers complete final year projects within 12 hours</strong> — source code, documentation, PPT, and abstract. WhatsApp <strong>+91 9600309140</strong> right now.
              </p>
            </div>

            {/* Assess */}
            <h2 className="blog-h2">Assess What You Have — Honestly</h2>
            <p className="blog-body-p">
              Stop panicking and take 30 minutes to assess your situation clearly. Do you have any code written? Is a topic already approved by your guide? Do you have a dataset or any research material? Have you submitted an abstract already? Identify exactly what is missing — not everything will be equally urgent. Knowing your gaps precisely is the first step to closing them efficiently. Most students in this situation have more than they think — an approved topic, a rough idea, or partial code is a starting point.
            </p>

            {/* 5-day plan */}
            <h2 className="blog-h2">5-Day Emergency Plan</h2>
            <div className="blog-steps">
              {emergencyPlanSteps.map(({ n, title, content }) => (
                <div key={n} className="blog-step">
                  <div className="blog-step-header">
                    <span className="blog-step-n">{n}</span>
                    <h3 className="blog-step-title">{title}</h3>
                  </div>
                  <p className="blog-step-content">{content}</p>
                </div>
              ))}
            </div>

            {/* What to cut */}
            <h2 className="blog-h2">What to Cut When Time is Short</h2>
            <div className="blog-tip-grid">
              {cutTips.map(({ num, title, desc }) => (
                <div key={num} className="blog-tip-card">
                  <span className="blog-tip-num">{num}</span>
                  <h3 className="blog-tip-title">{title}</h3>
                  <p className="blog-tip-desc">{desc}</p>
                </div>
              ))}
            </div>

            {/* 12-hour option */}
            <h2 className="blog-h2">The 12-Hour Option</h2>
            <p className="blog-body-p">
              If you have less than 3 days — Inno Projects can deliver a complete, ready-to-submit project in 12 hours. WhatsApp your degree and domain preference to <strong>+91 9600309140</strong> and receive: working source code, full project report, PPT, abstract, viva Q&amp;A guide — everything your college needs. Hundreds of students across Tamil Nadu have used this option before their submission deadline. The project is built for your specific degree (BE / BTech / MCA / MSc), your domain, and your language preference.
            </p>

            {/* Placement box */}
            <div className="blog-placement-box">
              <h3 className="blog-placement-title">Don&apos;t Let a Late Project Hurt Your Placement</h3>
              <ul className="blog-placement-list">
                {placementPoints.map((point) => (
                  <li key={point}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="blog-cta-box">
              <div className="blog-cta-content">
                <h3 className="blog-cta-h3">Get Your Project Delivered in 12 Hours — Right Now</h3>
                <p className="blog-cta-p">
                  Inno Projects delivers <strong>complete, submission-ready final year projects in 12 hours</strong> — source code, IEEE report, PPT, abstract, and viva Q&amp;A guide. Available for all degrees and domains. WhatsApp us now.
                </p>
                <div className="blog-cta-btns">
                  <Link href="/project-titles" className="blog-btn-primary">
                    Browse Project Titles
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/919600309140?text=Hi%2C%20I%20need%20a%20final%20year%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-btn-wa"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us Now
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
