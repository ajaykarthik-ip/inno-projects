import type { Metadata } from 'next';
import Link from 'next/link';
import '../post.css';

const siteUrl = 'https://www.innoprojects.tech';
const pageUrl = `${siteUrl}/blog/how-to-prepare-for-project-viva`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'How to Prepare for Final Year Project Viva – 20 Common Questions | Inno Projects',
  description:
    'Crack your final year project viva with 20 common viva questions and model answers, day-of tips, and strategies used by top-scoring students. Every project from Inno Projects includes a viva Q&A guide.',
  keywords: [
    'how to prepare for project viva',
    'final year project viva questions and answers',
    'viva questions for engineering project',
    'project viva tips 2026',
    'how to answer viva questions',
    'final year project viva preparation',
    'common viva questions for CSE project',
    'project viva guide Tamil Nadu',
    'viva questions machine learning project',
    'Inno Projects viva guide',
  ],
  alternates: { canonical: pageUrl },
  authors: [{ name: 'Inno Projects', url: 'https://www.innoprojects.tech' }],
  openGraph: {
    type: 'article',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'How to Crack Your Final Year Project Viva – 20 Questions & Answers',
    description:
      '20 most common project viva questions with model answers and day-of tips to score high in your final year evaluation.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Project Viva Preparation Guide – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Crack Your Final Year Project Viva – 20 Questions & Answers',
    description: '20 most common project viva questions with model answers and day-of tips.',
    images: ['/og-image.png'],
  },
};

const qaList = [
  {
    q: 'What is the objective of your project?',
    a: 'State the problem, your solution approach, and expected outcome in 3 sentences. Memorise this. This is always the first question and sets the tone for your entire viva.',
  },
  {
    q: 'Why did you choose this algorithm / technology?',
    a: 'Compare your choice against alternatives. For example: "I chose Random Forest over SVM because it handles imbalanced datasets better and provides feature importance rankings, which helped me understand which input features most affect the prediction."',
  },
  {
    q: 'What is the accuracy of your model?',
    a: 'Always know your exact accuracy, precision, recall, and F1-score. Have a result table ready. Never say "around 90%" — say "93.7% accuracy on the test set with an F1-score of 0.91".',
  },
  {
    q: 'What are the limitations of your project?',
    a: 'Every project has limits — name 2–3 honestly. For example: "The model was trained on a dataset of 5000 records, which may not represent all demographic groups. The system also requires a stable internet connection for real-time predictions."',
  },
  {
    q: 'How is your project different from existing systems?',
    a: 'Know your novelty — speed, accuracy, cost, or feature set. Compare with at least one existing system. For example: "Existing systems use basic logistic regression. My system uses an ensemble of Random Forest and XGBoost and achieves 4% higher accuracy."',
  },
  {
    q: 'What future enhancements can be done?',
    a: 'Suggest 2–3 realistic improvements that show forward thinking. For example: "The model can be retrained on real-time data using online learning. A mobile app interface can be added. Multi-language support can be included for broader accessibility."',
  },
  {
    q: 'Explain the system architecture.',
    a: 'Draw or describe the flow clearly: input → preprocessing → model/processing → output → display. Know every component and be able to explain what happens at each stage. Refer to your architecture diagram in your report.',
  },
  {
    q: 'What dataset did you use and why?',
    a: 'Name the dataset, its source (Kaggle, UCI ML Repository, government portal), the number of records and features, and why it was appropriate for your problem. For example: "I used the UCI Heart Disease dataset — 303 records, 13 features — because it is widely used in research and allows my results to be compared against published benchmarks."',
  },
  {
    q: 'Which module was most challenging to implement?',
    a: 'Pick a genuine challenge you faced and explain how you solved it. Evaluators respect honesty and problem-solving ability. For example: "Handling class imbalance in the dataset was the hardest part — I applied SMOTE oversampling which improved recall by 12%."',
  },
  {
    q: 'How does your project help society?',
    a: 'Connect your project to a concrete real-world benefit — healthcare, agriculture, finance, public safety, or education. For example: "Early detection of heart disease risk can alert patients before a critical event — this system can be used in rural health camps where specialist doctors are unavailable."',
  },
];

const vivaTips = [
  { n: '01', title: 'Arrive 15 minutes early', content: 'Being early gives you time to settle, review your notes, and see your report one last time before the evaluators call you in. Late arrival creates unnecessary anxiety.' },
  { n: '02', title: 'Re-read your full report the night before', content: 'Evaluators ask questions based on your report. Know every diagram, result table, and module description. You should be able to open any page and explain it immediately.' },
  { n: '03', title: 'Know your first slide by heart', content: 'Your opening presentation slide sets the tone. Memorise the project title, objective, and tech stack so the first 30 seconds are fluent and confident.' },
  { n: '04', title: 'Do not claim features you did not implement', content: 'Evaluators probe every feature you mention. If you say "the system sends email alerts" and it does not, they will catch it. Only claim what you genuinely built.' },
  { n: '05', title: 'Keep answers under 60 seconds each', content: 'Long answers invite more questions. Answer clearly, concisely, and stop. If the evaluator wants more, they will ask. Rambling signals that you are unsure.' },
  { n: '06', title: 'End every answer with confidence', content: 'Do not trail off or say "I think that is right." Finish each answer clearly. If you do not know something, say "That specific aspect was outside my project scope" and move forward.' },
];

const placementPoints = [
  'A technical interview is a structured viva — your project viva preparation directly transfers to it',
  'Explaining your project clearly is the best warm-up for coding interview discussions',
  'Knowing your limitations shows professional maturity — interviewers value self-awareness',
  'Comparing algorithms during your viva trains you to give analytical answers in placement rounds',
  'Demo confidence developed during viva preparation directly improves your presentation skills in HR rounds',
];

export default function BlogHowToPrepareForViva() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}/#article`,
        headline: 'How to Crack Your Final Year Project Viva – 20 Questions & Answers',
        description:
          '20 most common project viva questions with model answers, viva day tips, and placement benefits for final year students.',
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
        datePublished: '2021-09-05',
        dateModified: '2025-03-01',
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
            name: 'How to Prepare for Project Viva',
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
              <span aria-current="page">How to Prepare for Project Viva</span>
            </nav>

            <div className="blog-meta-row">
              <span className="blog-tag">Viva Prep</span>
              <span className="blog-date">September 2021 · 10 min read</span>
            </div>

            <h1 className="blog-h1">
              How to Crack Your Final Year Project Viva<br />
              – 20 Questions &amp; Answers
            </h1>

            <p className="blog-lead">
              The viva is where 30–40% of your final year marks are decided. Most students fail it not because of a bad project, but because of poor preparation. They cannot explain their own algorithm choices, do not know their accuracy metrics, or stumble when asked about limitations. This guide gives you the 20 most common viva questions, model answers, and the day-of strategy used by top-scoring students.
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
              <span className="blog-callout-icon">🎯</span>
              <p>
                <strong>Every project from Inno Projects includes a Viva Q&amp;A guide</strong> — 20+ expected questions with model answers tailored to your specific project title and domain.
              </p>
            </div>

            {/* What evaluators check */}
            <h2 className="blog-h2">What Evaluators Actually Check in a Viva</h2>
            <p className="blog-body-p">
              Evaluators are not trying to fail you — they are checking four things. First: do you genuinely understand what your project does, or did someone else build it for you? Second: can you explain why you made specific algorithm or technology choices, and compare those choices against alternatives? Third: do you know the limitations of your own system — places where it breaks or could be improved? Fourth: can you confidently suggest future enhancements that are technically realistic? If you can answer all four of these with specific, prepared answers, you will score well in any viva regardless of how complex your project is.
            </p>

            {/* Q&A list */}
            <h2 className="blog-h2">20 Common Viva Questions and How to Answer Them</h2>

            <div className="blog-qa-list">
              {qaList.map(({ q, a }, index) => (
                <div key={index} className="blog-qa-item">
                  <p className="blog-qa-q">Q: {q}</p>
                  <p className="blog-qa-a">A: {a}</p>
                </div>
              ))}
            </div>

            {/* Viva day tips */}
            <h2 className="blog-h2">Viva Day Tips</h2>

            <div className="blog-steps">
              {vivaTips.map(({ n, title, content }) => (
                <div key={n} className="blog-step">
                  <div className="blog-step-header">
                    <span className="blog-step-n">{n}</span>
                    <h3 className="blog-step-title">{title}</h3>
                  </div>
                  <p className="blog-step-content">{content}</p>
                </div>
              ))}
            </div>

            {/* Placement box */}
            <div className="blog-placement-box">
              <h3 className="blog-placement-title">How Viva Skills Help in Job Interviews</h3>
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
                <h3 className="blog-cta-h3">Get a Project That Comes With a Viva Q&amp;A Guide</h3>
                <p className="blog-cta-p">
                  Every project delivered by Inno Projects includes a <strong>custom viva Q&amp;A document</strong> — 20+ questions and model answers written specifically for your project title, algorithm, and dataset. Walk into your viva prepared, confident, and ready.
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
