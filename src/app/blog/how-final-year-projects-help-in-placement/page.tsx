import type { Metadata } from 'next';
import Link from 'next/link';
import '../post.css';

const siteUrl = 'https://www.innoprojects.tech';
const pageUrl = `${siteUrl}/blog/how-final-year-projects-help-in-placement`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'How Final Year Projects Help in Campus Placements 2025 | Inno Projects',
  description:
    'Learn how your final year project directly impacts your campus placement results in 2025. What interviewers check, which domains impress recruiters, and how to present your project in interviews.',
  keywords: [
    'how final year project helps in placement',
    'final year project campus placement',
    'project interview tips for students',
    'how to present project in interview',
    'final year project placement value',
    'technical interview project questions',
    'placement ready final year project',
    'best project for campus placement',
    'final year project Coimbatore',
    'Inno Projects placement',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'How Your Final Year Project Directly Impacts Your Campus Placement',
    description:
      'What interviewers check in your project, which domains impress most, and how to present it — a complete placement guide from Inno Projects.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Final Year Project and Placement – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Your Final Year Project Directly Impacts Your Campus Placement',
    description: 'How final year projects influence campus placements — domains, interview tips, and presentation guide.',
    images: ['/og-image.png'],
  },
};

const interviewerCheckSteps = [
  {
    n: '01',
    title: 'Problem Statement Clarity',
    content:
      'Can you explain what problem your project solves in 30 seconds? Interviewers want to hear a crisp, confident answer — not a nervous ramble. Practice one sentence: "My project solves [problem] for [audience] using [technology]." If you cannot explain the problem in plain language, the interviewer assumes you did not understand your own project.',
  },
  {
    n: '02',
    title: 'Technology Justification',
    content:
      'Why did you choose this algorithm or framework? Not just "my guide told me." The most common follow-up question after "Tell me about your project" is "Why did you choose this approach over alternatives?" Prepare a genuine reason — accuracy, speed, simplicity, dataset size, or domain best practice.',
  },
  {
    n: '03',
    title: 'Working Demo',
    content:
      'A live URL or screen recording creates instant credibility. Companies that ask for a portfolio link or a GitHub repo during the interview are checking if you actually built something. A 2-minute screen recording of your project running is worth more than 20 slides.',
  },
  {
    n: '04',
    title: 'Depth of Understanding',
    content:
      'Know your own code — at least the core logic. You do not need to remember every line, but you must understand what each module does. Know your input format, output format, the main algorithm, and at least one limitation of your approach. Interviewers probe exactly this.',
  },
  {
    n: '05',
    title: 'Originality and Relevance',
    content:
      'Does it solve a real problem? Is it relevant in 2025? Projects that address a genuine real-world problem — even a small one — stand out. Bonus points if you can connect your project domain to the company you are interviewing with. Relevance is more memorable than complexity.',
  },
];

const domainIdeas = [
  {
    icon: '🤖',
    title: 'Machine Learning',
    desc: 'Product companies specifically hunt for ML profiles',
  },
  {
    icon: '🌐',
    title: 'Full Stack Web',
    desc: 'Service companies need full stack developers immediately',
  },
  {
    icon: '🧠',
    title: 'Deep Learning',
    desc: 'AI companies, research internships, PhD applications',
  },
  {
    icon: '🔗',
    title: 'Blockchain',
    desc: 'Fintech startups, crypto companies, BFSI sector',
  },
  {
    icon: '📊',
    title: 'Data Science',
    desc: 'Analytics companies, e-commerce, FMCG sector',
  },
  {
    icon: '📡',
    title: 'IoT/Embedded',
    desc: 'Manufacturing, automotive, semiconductor companies',
  },
];

const qaItems = [
  {
    q: '"Tell me about your final year project"',
    a: 'Start with the problem (1 sentence), your solution (1 sentence), tech stack (1 sentence), result (1 sentence). Practice this 4-sentence answer until it&apos;s automatic.',
  },
  {
    q: '"Why did you choose this topic?"',
    a: 'Give a genuine reason — real-world relevance, personal interest, or skill building goal. Avoid saying "my guide suggested it."',
  },
  {
    q: '"What was the most challenging part?"',
    a: 'Pick a real technical challenge — data preprocessing, model accuracy, API integration. Shows problem-solving ability.',
  },
  {
    q: '"Can you show me the project?"',
    a: 'Always have a GitHub link or screen recording ready. Live demo if possible. Never say "I don&apos;t have it with me."',
  },
  {
    q: '"How would you improve this project?"',
    a: 'Have 2–3 genuine improvements ready. Shows you think beyond just submission.',
  },
];

const portfolioTips = [
  {
    num: '01',
    title: 'Upload to GitHub',
    desc: 'Public repo with clear README = free portfolio',
  },
  {
    num: '02',
    title: 'Add to LinkedIn',
    desc: 'LinkedIn project section with screenshots and description',
  },
  {
    num: '03',
    title: 'Record a Demo',
    desc: '2-minute screen recording = better than 20 slides',
  },
  {
    num: '04',
    title: 'Write About It',
    desc: 'Medium / LinkedIn post about what you built = personal brand',
  },
];

const placementPoints = [
  'Every project comes with clean, well-commented source code you can explain',
  'Full documentation so you understand every module',
  'Viva Q&A guide that doubles as interview prep',
  'Modern tech stack (Python, React, Next.js) relevant to 2025 job market',
  '500+ titles so you can pick what aligns with your career goal',
];

export default function BlogHowProjectsHelpPlacement() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}/#article`,
        headline: 'How Your Final Year Project Directly Impacts Your Campus Placement',
        description:
          'Learn what interviewers check in your final year project, which domains impress recruiters most in 2025, and how to present your project confidently in interviews.',
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
        datePublished: '2023-06-25',
        dateModified: '2025-04-01',
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
            name: 'How Final Year Projects Help in Placement',
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
              <span aria-current="page">How Projects Help in Placement</span>
            </nav>

            <div className="blog-meta-row">
              <span className="blog-tag">Placements</span>
              <span className="blog-date">June 2023 · 7 min read</span>
            </div>

            <h1 className="blog-h1">
              How Your Final Year Project Directly Impacts Your Campus Placement
            </h1>

            <p className="blog-lead">
              73% of technical interview questions in campus placements start with &ldquo;Tell me about your project.&rdquo; Here is how to make yours count.
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
              <span className="blog-callout-icon">💡</span>
              <p>
                <strong>Inno Projects builds placement-ready final year projects</strong> — technically sound, well-documented, and easy to explain in interviews.
              </p>
            </div>

            {/* Why interviewers focus */}
            <h2 className="blog-h2">Why Interviewers Focus on Your Final Year Project</h2>
            <p className="blog-body-p">
              Your final year project is the only real work you have done as an engineer — not a textbook exercise, not a lab record, but something you built. Interviewers know this. It shows your problem-solving approach, your ability to choose and use the right technology, and whether you can take something from idea to working output. For freshers with no work experience, the project is the single most important signal an interviewer has. A strong project creates a story around you. A weak or poorly understood project creates doubt about your fundamentals.
            </p>

            {/* What interviewers check */}
            <h2 className="blog-h2">What Interviewers Check in Your Project</h2>
            <div className="blog-steps">
              {interviewerCheckSteps.map(({ n, title, content }) => (
                <div key={n} className="blog-step">
                  <div className="blog-step-header">
                    <span className="blog-step-n">{n}</span>
                    <h3 className="blog-step-title">{title}</h3>
                  </div>
                  <p className="blog-step-content">{content}</p>
                </div>
              ))}
            </div>

            {/* Domains */}
            <h2 className="blog-h2">Domains That Impress Recruiters Most in 2025</h2>
            <div className="blog-ideas-grid">
              {domainIdeas.map(({ icon, title, desc }) => (
                <div key={title} className="blog-idea-card">
                  <span className="blog-idea-icon">{icon}</span>
                  <h3 className="blog-idea-title">{title}</h3>
                  <p className="blog-idea-desc">{desc}</p>
                </div>
              ))}
            </div>

            {/* Q&A list */}
            <h2 className="blog-h2">How to Present Your Project in an Interview</h2>
            <div className="blog-qa-list">
              {qaItems.map(({ q, a }) => (
                <div key={q} className="blog-qa-item">
                  <p className="blog-qa-q">{q}</p>
                  <p className="blog-qa-a" dangerouslySetInnerHTML={{ __html: a }} />
                </div>
              ))}
            </div>

            {/* Portfolio tips */}
            <h2 className="blog-h2">Building a Project Portfolio for Placements</h2>
            <div className="blog-tip-grid">
              {portfolioTips.map(({ num, title, desc }) => (
                <div key={num} className="blog-tip-card">
                  <span className="blog-tip-num">{num}</span>
                  <h3 className="blog-tip-title">{title}</h3>
                  <p className="blog-tip-desc">{desc}</p>
                </div>
              ))}
            </div>

            {/* Placement box */}
            <div className="blog-placement-box">
              <h3 className="blog-placement-title">How Inno Projects Builds Placement-Ready Projects</h3>
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
                <h3 className="blog-cta-h3">Get a Placement-Ready Final Year Project from Inno Projects</h3>
                <p className="blog-cta-p">
                  Inno Projects delivers <strong>500+ placement-ready final year projects</strong> — with clean source code you can explain, full documentation, modern tech stack, and a viva Q&amp;A guide that doubles as your interview prep. Delivered in 12 hours.
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
