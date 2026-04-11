import type { Metadata } from 'next';
import Link from 'next/link';
import '../post.css';

const siteUrl = 'https://www.innoprojects.tech';
const pageUrl = `${siteUrl}/blog/how-to-write-final-year-project-report`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'How to Write a Final Year Project Report – Complete Guide 2025 | Inno Projects',
  description:
    'Step-by-step guide to writing a final year project report in IEEE format. Covers structure, common mistakes, chapter breakdown, and tips for engineering students in 2025. Inno Projects provides complete reports for every project title.',
  keywords: [
    'how to write final year project report',
    'final year project report format',
    'IEEE format project report',
    'project report writing guide 2025',
    'final year project abstract writing',
    'synopsis for final year project',
    'literature survey for project report',
    'project report chapters',
    'engineering project report format',
    'project report Coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'How to Write a Final Year Project Report – Complete Guide 2025',
    description:
      'Complete IEEE-format guide to writing your final year project report — abstract, literature survey, system design, results, and more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Final Year Project Report Writing Guide – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write a Final Year Project Report – Complete Guide 2025',
    description: 'Complete guide to writing your final year project report in IEEE format.',
    images: ['/og-image.png'],
  },
};

const reportSteps = [
  {
    n: '01',
    title: 'Title Page & Certificate',
    content:
      'The title page must include the project title, your name and register number, department, college name, year of submission, and your guide\'s name. The certificate page is signed by your guide and HOD — it must match the exact format specified by your university. Never skip the declaration page where you certify the work is original.',
  },
  {
    n: '02',
    title: 'Abstract (250 words)',
    content:
      'The abstract is a 250-word summary of your entire project. It must cover the problem you addressed, the technology or algorithm you used, the dataset or system built, and the key result. Write it last — after the full report is done. Avoid generic statements like "this project is useful". State specific outcomes: "achieved 94.3% accuracy on the test set" or "reduced processing time by 40%".',
  },
  {
    n: '03',
    title: 'Introduction & Problem Statement',
    content:
      'Chapter 1 is the introduction. Start with the broader context (e.g., healthcare data challenges), narrow to the specific problem (e.g., delayed disease diagnosis), state your proposed solution, list your objectives in bullet points, and describe the scope and limitations. The problem statement should be 1–2 sentences that any evaluator can understand immediately.',
  },
  {
    n: '04',
    title: 'Literature Survey (5+ papers)',
    content:
      'Chapter 2 covers existing work. Review at least 5 published papers (IEEE Xplore, Springer, or ScienceDirect, preferably 2020–2024). For each paper, write 3–4 sentences: what the authors did, their methodology, their results, and their limitation. End with a comparison table. Your project should position itself as solving a gap identified in these papers.',
  },
  {
    n: '05',
    title: 'System Design & Architecture',
    content:
      'Chapter 3 covers design. Include a system architecture diagram, DFD (Data Flow Diagram) or UML diagrams, module descriptions, and technology stack justification. Every diagram must have a caption and be referenced in the text. For ML projects, include the model pipeline diagram. For web projects, include the ER diagram and module flowchart.',
  },
  {
    n: '06',
    title: 'Implementation & Screenshots',
    content:
      'Chapter 4 covers the actual code and working system. Include key code snippets (not the entire codebase), explain each module\'s function, and most importantly — include screenshots of every working screen. Evaluators check this chapter for evidence that the system actually works. Each screenshot must have a caption. Avoid submitting a report with no screenshots.',
  },
  {
    n: '07',
    title: 'Results & Conclusion + Future Work',
    content:
      'Chapter 5 presents your results. For ML: accuracy table, confusion matrix, comparison with baseline models. For web projects: performance metrics, user testing results. The conclusion summarises what was achieved. Future work must list 2–3 genuine improvements — not vague statements. Poor future work ("can be improved further") costs you marks.',
  },
];

const mistakes = [
  { icon: '❌', text: 'Copying the abstract directly from an IEEE paper without any changes or context for your own system' },
  { icon: '❌', text: 'Submitting a report with no screenshots of your working system — evaluators will reject or deduct heavily' },
  { icon: '❌', text: 'Missing or incomplete literature survey — 5 papers minimum, properly cited in IEEE format' },
  { icon: '❌', text: 'A vague problem statement like "this project aims to improve things" — be specific about what problem you solve' },
  { icon: '❌', text: 'Incorrect IEEE citation format — use [1], [2] inline and list references at the end with DOI or URL' },
  { icon: '❌', text: 'Submitting without your guide reviewing it — one review round can prevent a rejection at evaluation' },
];

const placementPoints = [
  'Your report becomes a portfolio item you can show at job interviews as evidence of your project',
  'Documentation skills are highly valued in IT companies — a well-written report demonstrates professional writing',
  'A polished report can be attached to your LinkedIn profile as a project document for recruiters to review',
  'Helps in higher study admissions — universities ask for project reports as part of applications',
  'A strong IEEE-format report is the foundation for IEEE journal publication, which adds significantly to your resume',
];

export default function BlogHowToWriteProjectReport() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}/#article`,
        headline: 'How to Write a Final Year Project Report – Complete Guide',
        description:
          'Step-by-step guide to writing a final year project report in IEEE format for engineering students in 2025.',
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
        datePublished: '2021-03-10',
        dateModified: '2025-01-10',
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
            name: 'How to Write a Final Year Project Report',
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
              <span aria-current="page">How to Write a Project Report</span>
            </nav>

            <div className="blog-meta-row">
              <span className="blog-tag">Report Writing</span>
              <span className="blog-date">March 2021 · 6 min read</span>
            </div>

            <h1 className="blog-h1">
              How to Write a Final Year Project Report<br />
              – Complete Guide
            </h1>

            <p className="blog-lead">
              A poor project report fails students even when they have a good implementation. Evaluators judge your understanding, documentation quality, and professionalism through your report — not just your code. This guide breaks down exactly what to write in every chapter, what mistakes to avoid, and how to write an abstract and literature survey that actually impress.
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
              <span className="blog-callout-icon">📄</span>
              <p>
                <strong>Inno Projects provides complete project reports</strong> for every title — abstract, synopsis, full IEEE-format chapters, literature survey, screenshots, and result tables. No writing stress for you.
              </p>
            </div>

            {/* Structure */}
            <h2 className="blog-h2">Structure of a Perfect Final Year Project Report</h2>

            <div className="blog-steps">
              {reportSteps.map(({ n, title, content }) => (
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
            <h2 className="blog-h2">Common Report Writing Mistakes</h2>

            <div className="blog-ideas-grid">
              {mistakes.map(({ icon, text }) => (
                <div key={text} className="blog-idea-card">
                  <span className="blog-idea-icon">{icon}</span>
                  <p className="blog-idea-desc">{text}</p>
                </div>
              ))}
            </div>

            {/* Placement box */}
            <div className="blog-placement-box">
              <h3 className="blog-placement-title">Why Your Report Matters Beyond College</h3>
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
                <h3 className="blog-cta-h3">Get a Complete Project Report Written for Your Title</h3>
                <p className="blog-cta-p">
                  Inno Projects provides a full <strong>IEEE-format project report</strong>, abstract, synopsis, and PPT for every project title we deliver. You focus on understanding — we handle the documentation. Trusted by thousands of students across Tamil Nadu.
                </p>
                <div className="blog-cta-btns">
                  <Link href="/project-titles" className="blog-btn-primary">
                    Browse Project Titles
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/919600309140?text=Hi%2C%20I%20need%20help%20with%20my%20final%20year%20project"
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
