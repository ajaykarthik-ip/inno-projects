import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tips & Tricks for Final Year Projects',
  description:
    'Guides, tips and tricks for engineering students on choosing final year projects, IEEE papers, ML topics, and more. By Inno Projects, Coimbatore.',
  alternates: { canonical: `${siteUrl}/blog` },
};

const posts = [
  {
    slug: 'how-final-year-projects-help-in-placement',
    title: 'How Your Final Year Project Directly Impacts Your Campus Placement',
    excerpt: '73% of technical interview questions start with "Tell me about your project." Here is how to make yours count in 2026 placements.',
    tag: 'Placements', readTime: '7 min read', date: 'June 2023', icon: '🏆',
  },
  {
    slug: 'top-deep-learning-project-ideas',
    title: 'Top Deep Learning Project Ideas for Final Year Students in 2026',
    excerpt: 'Deep Learning projects get the most attention in placements and viva. CNN, LSTM, GAN — here are the best titles with implementation guidance.',
    tag: 'Deep Learning', readTime: '8 min read', date: 'February 2023', icon: '🧠',
  },
  {
    slug: 'how-to-complete-final-year-project-last-minute',
    title: 'How to Complete Your Final Year Project When You Are Running Out of Time',
    excerpt: 'One week left. No project. No code. No report. Here is a 5-day emergency plan — and the 12-hour option if you need it faster.',
    tag: 'Emergency Guide', readTime: '5 min read', date: 'October 2022', icon: '⚡',
  },
  {
    slug: 'top-iot-project-ideas-for-engineering-students',
    title: 'Top IoT Project Ideas for Engineering Students in 2026',
    excerpt: 'IoT projects combine hardware and software — making them impressive to evaluators and interviewers. 10 best ideas with hardware requirements.',
    tag: 'IoT Projects', readTime: '7 min read', date: 'July 2022', icon: '📡',
  },
  {
    slug: 'python-vs-java-for-final-year-projects',
    title: 'Python vs Java for Final Year Projects – Full Comparison 2026',
    excerpt: 'The language you choose affects your domain options, implementation ease, and placement value. Full side-by-side comparison.',
    tag: 'Tech Choice', readTime: '6 min read', date: 'April 2022', icon: '⚖️',
  },
  {
    slug: 'best-final-year-project-ideas-for-cse',
    title: 'Best Final Year Project Ideas for CSE Students in 2026',
    excerpt: 'CSE students have the widest domain choice — but that makes picking harder. Top 10 CSE project titles with domain breakdown and placement value.',
    tag: 'CSE Projects', readTime: '9 min read', date: 'January 2022', icon: '💻',
  },
  {
    slug: 'how-to-prepare-for-project-viva',
    title: 'How to Crack Your Final Year Project Viva – 20 Questions & Answers',
    excerpt: 'The viva decides 30-40% of your marks. Here are 20 common viva questions with model answers and tips to prepare confidently.',
    tag: 'Viva Prep', readTime: '10 min read', date: 'September 2021', icon: '🎤',
  },
  {
    slug: 'ieee-vs-non-ieee-final-year-projects',
    title: 'IEEE Projects vs Non-IEEE Projects – Which Should You Choose?',
    excerpt: 'Most students do not know the real difference — and it affects their marks. Full comparison with when to choose each.',
    tag: 'IEEE', readTime: '5 min read', date: 'June 2021', icon: '📑',
  },
  {
    slug: 'how-to-write-final-year-project-report',
    title: 'How to Write a Final Year Project Report – Complete Guide',
    excerpt: 'A poor project report fails students even with good implementations. Complete chapter-by-chapter guide with common mistakes to avoid.',
    tag: 'Report Writing', readTime: '6 min read', date: 'March 2021', icon: '📝',
  },
  {
    slug: 'top-machine-learning-project-ideas',
    title: 'Top 10 Machine Learning Project Ideas for Final Year Students',
    excerpt: 'ML projects are the most in-demand for placements in 2026. Top 10 implementable ideas with dataset sources and placement value explained.',
    tag: 'ML Projects', readTime: '8 min read', date: 'January 2021', icon: '🤖',
  },
  {
    slug: 'how-to-choose-a-final-year-project-title',
    title: 'How to Choose the Right Final Year Project Title in 2026',
    excerpt: 'Picking the wrong project title costs you months of wasted effort. 7-step guide to choose a title your guide approves and you can complete.',
    tag: 'Guide', readTime: '7 min read', date: 'April 2026', icon: '🎯',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="blog-index-page">

      {/* Header */}
      <header className="blog-index-hero">
        <div className="blog-index-hero-inner">
          <p className="blog-index-eyebrow">Tips &amp; Tricks</p>
          <h1 className="blog-index-h1">Guides for Engineering Students</h1>
          <p className="blog-index-sub">
            Practical tips on choosing projects, understanding IEEE papers, picking tech stacks, and getting your final year project done right — from the team at Inno Projects, Coimbatore.
          </p>
        </div>
      </header>

      {/* Posts grid */}
      <section className="blog-index-body">
        <div className="blog-index-container">
          <div className="blog-index-grid">
            {posts.map(({ slug, title, excerpt, tag, readTime, date, icon }) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="blog-index-card"
              >
                <div className="blog-index-card-icon">{icon}</div>
                <div className="blog-index-card-meta">
                  <span className="blog-index-tag">{tag}</span>
                  <span className="blog-index-date">{date} · {readTime}</span>
                </div>
                <h2 className="blog-index-card-title">{title}</h2>
                <p className="blog-index-card-excerpt">{excerpt}</p>
                <span className="blog-index-read-more">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
