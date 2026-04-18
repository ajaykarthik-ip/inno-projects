import Link from 'next/link';
import './ProjectIdeasPage.css';

export interface ProjectIdea {
  title: string;
  tech: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  domain: string;
  desc: string;
}

export interface ProjectIdeasPageData {
  badge: string;
  h1: string;
  subtitle: string;
  whatsappText: string;
  stats: { value: string; label: string }[];
  intro: string;
  categories: {
    name: string;
    projects: ProjectIdea[];
  }[];
  whyInno: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaDesc: string;
}

interface ProjectIdeasPageProps {
  data: ProjectIdeasPageData;
}

const PHONE = '919600309140';
const CALL_LINK = 'tel:9600309140';

function getDifficultyClass(difficulty: ProjectIdea['difficulty']): string {
  switch (difficulty) {
    case 'Beginner':
      return 'pip-difficulty pip-difficulty--beginner';
    case 'Intermediate':
      return 'pip-difficulty pip-difficulty--intermediate';
    case 'Advanced':
      return 'pip-difficulty pip-difficulty--advanced';
  }
}

function buildProjectWaLink(title: string): string {
  const message = `Hi!%20I%20need%20the%20project%3A%20${encodeURIComponent(title)}`;
  return `https://wa.me/${PHONE}?text=${message}`;
}

export default function ProjectIdeasPage({ data }: ProjectIdeasPageProps) {
  const waLink = `https://wa.me/${PHONE}?text=${data.whatsappText}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="pip-container">
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pip-content">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="pip-hero">
          <p className="pip-badge">{data.badge}</p>
          <h1 className="pip-h1">{data.h1}</h1>
          <p className="pip-subtitle">{data.subtitle}</p>
          <div className="pip-hero-btns">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="pip-btn-primary">
              WhatsApp Us Now
            </a>
            <a href={CALL_LINK} className="pip-btn-secondary">
              Call +91 96003 09140
            </a>
          </div>
        </section>

        {/* ── Stats Strip ──────────────────────────────────────────────────── */}
        <div className="pip-stats">
          {data.stats.map((s) => (
            <div key={s.label} className="pip-stat-card">
              <span className="pip-stat-value">{s.value}</span>
              <span className="pip-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Intro ────────────────────────────────────────────────────────── */}
        <section className="pip-section">
          <p className="pip-intro-text">{data.intro}</p>
        </section>

        {/* ── Project Categories ───────────────────────────────────────────── */}
        <section className="pip-section">
          {data.categories.map((cat) => (
            <div key={cat.name} className="pip-category">
              <h2 className="pip-category-title">{cat.name}</h2>
              <div className="pip-projects-grid">
                {cat.projects.map((project) => (
                  <article key={project.title} className="pip-project-card">
                    <h3 className="pip-project-title">{project.title}</h3>
                    <div className="pip-project-meta">
                      <span className="pip-domain-tag">{project.domain}</span>
                      <span className={getDifficultyClass(project.difficulty)}>
                        {project.difficulty}
                      </span>
                    </div>
                    <p className="pip-project-tech">
                      <strong>Tech:</strong> {project.tech}
                    </p>
                    <p className="pip-project-desc">{project.desc}</p>
                    <a
                      href={buildProjectWaLink(project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pip-project-cta"
                    >
                      Get This Project →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Why Choose Inno Projects ─────────────────────────────────────── */}
        <section className="pip-section">
          <h2 className="pip-section-title">Why Choose Inno Projects?</h2>
          <div className="pip-why-grid">
            {data.whyInno.map((item) => (
              <div key={item} className="pip-why-item">
                <span className="pip-why-check" aria-hidden="true">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="pip-section">
          <h2 className="pip-section-title">Frequently Asked Questions</h2>
          <dl className="pip-faq-list">
            {data.faqs.map((f) => (
              <div key={f.q} className="pip-faq-item">
                <dt className="pip-faq-q">{f.q}</dt>
                <dd className="pip-faq-a">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="pip-cta">
          <h2 className="pip-cta-title">{data.ctaTitle}</h2>
          <p className="pip-cta-desc">{data.ctaDesc}</p>
          <div className="pip-cta-btns">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="pip-btn-primary">
              WhatsApp Us Now
            </a>
            <Link href="/request-project" className="pip-btn-secondary">
              Request a Project
            </Link>
          </div>
          <address
            style={{
              marginTop: '1.75rem',
              fontStyle: 'normal',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              lineHeight: 1.7,
            }}
          >
            <strong>Inno Projects</strong> — 28, Baba St, Janaki Nagar, Venkitapuram, Coimbatore 641025
            <br />
            Phone:{' '}
            <a href={CALL_LINK} style={{ color: 'inherit' }}>
              +91 96003 09140
            </a>
          </address>
        </section>
      </div>
    </div>
  );
}
