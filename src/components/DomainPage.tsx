import Link from 'next/link';
import './DomainPage.css';

export interface ProjectTitle {
  title: string;
  tech: string;
  desc: string;
}

export interface DomainPageData {
  badge: string;
  h1: string;
  subtitle: string;
  whatsappText: string;
  stats: { value: string; label: string }[];
  intro: string;
  projectTitles: ProjectTitle[];
  technologies: { name: string; icon: string }[];
  whatYouGet: string[];
  degrees: string[];
  colleges: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaDesc: string;
}

interface DomainPageProps {
  data: DomainPageData;
}

const PHONE = '919600309140';

export default function DomainPage({ data }: DomainPageProps) {
  const waLink = `https://wa.me/${PHONE}?text=${data.whatsappText}`;
  const callLink = 'tel:9600309140';

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
    <div className="dp-container">
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="dp-content">
        {/* ── Hero ────────────────────────────────────── */}
        <section className="dp-hero">
          <p className="dp-badge">{data.badge}</p>
          <h1 className="dp-h1">{data.h1}</h1>
          <p className="dp-subtitle">{data.subtitle}</p>
          <div className="dp-hero-btns">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="dp-btn-primary">
              WhatsApp Us Now
            </a>
            <a href={callLink} className="dp-btn-secondary">
              Call +91 96003 09140
            </a>
          </div>
        </section>

        {/* ── Stats ───────────────────────────────────── */}
        <div className="dp-stats">
          {data.stats.map((s) => (
            <div key={s.label} className="dp-stat-card">
              <span className="dp-stat-value">{s.value}</span>
              <span className="dp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Intro ────────────────────────────────────── */}
        <section className="dp-section">
          <h2 className="dp-section-title">About Our {data.h1.split(' ').slice(0, 3).join(' ')} Services</h2>
          <p className="dp-intro-text">{data.intro}</p>
        </section>

        {/* ── Project Titles ───────────────────────────── */}
        <section className="dp-section">
          <h2 className="dp-section-title">Sample Project Titles</h2>
          <div className="dp-titles-grid">
            {data.projectTitles.map((pt) => (
              <article key={pt.title} className="dp-title-card">
                <h3>{pt.title}</h3>
                <span className="dp-title-tech">{pt.tech}</span>
                <p>{pt.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Technologies ─────────────────────────────── */}
        <section className="dp-section">
          <h2 className="dp-section-title">Technologies We Use</h2>
          <div className="dp-tech-grid">
            {data.technologies.map((t) => (
              <span key={t.name} className="dp-tech-chip">
                <span className="dp-tech-icon" aria-hidden="true">{t.icon}</span>
                {t.name}
              </span>
            ))}
          </div>
        </section>

        {/* ── What You Get ─────────────────────────────── */}
        <section className="dp-section">
          <h2 className="dp-section-title">What You Get</h2>
          <ul className="dp-get-grid" role="list">
            {data.whatYouGet.map((item) => (
              <li key={item} className="dp-get-item">
                <span className="dp-get-check" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Who Is This For ──────────────────────────── */}
        <section className="dp-section">
          <h2 className="dp-section-title">Who Is This For?</h2>
          <div className="dp-degree-grid">
            {data.degrees.map((d) => (
              <span key={d} className="dp-degree-chip">{d}</span>
            ))}
          </div>
        </section>

        {/* ── Colleges ─────────────────────────────────── */}
        <section className="dp-section">
          <h2 className="dp-section-title">Colleges We Serve in Coimbatore</h2>
          <ul className="dp-college-grid" role="list">
            {data.colleges.map((c) => (
              <li key={c} className="dp-college-item">{c}</li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="dp-section">
          <h2 className="dp-section-title">Frequently Asked Questions</h2>
          <dl className="dp-faq-list">
            {data.faqs.map((f) => (
              <div key={f.q} className="dp-faq-item">
                <dt className="dp-faq-q">{f.q}</dt>
                <dd className="dp-faq-a">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="dp-cta">
          <h2 className="dp-cta-title">{data.ctaTitle}</h2>
          <p className="dp-cta-desc">{data.ctaDesc}</p>
          <div className="dp-cta-btns">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="dp-btn-primary">
              WhatsApp Us Now
            </a>
            <Link href="/request-project" className="dp-btn-secondary">
              Request a Project
            </Link>
          </div>
          <address style={{ marginTop: '1.75rem', fontStyle: 'normal', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>
            <strong>Inno Projects</strong> — 28, Baba St, Janaki Nagar, Venkitapuram, Coimbatore 641025<br />
            Phone: <a href={callLink} style={{ color: 'inherit' }}>+91 96003 09140</a>
          </address>
        </section>
      </div>
    </div>
  );
}
