import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse Projects | Final Year Projects with Source Code',
  description:
    'Browse our full catalog of final year projects — AI, ML, Web Development, IoT, and Blockchain. Complete source code, report, and PPT delivered in 12 hours. Coimbatore.',
  alternates: { canonical: 'https://www.innoprojects.in/projects' },
};

export default function ProjectsPage() {
  return (
    <div className="main-content-wrapper">
      <main className="main-content">
        <section className="coming-soon-section">
          <div className="coming-soon-card">
            <span className="coming-soon-badge">Coming Soon</span>
            <h1 className="coming-soon-title">New AI Projects for 2026</h1>
            <p className="coming-soon-subtitle">
              We&apos;re curating a fresh lineup of cutting-edge AI, ML, and
              full-stack final year projects for the 2026 batch. Check back
              shortly — or reach out for early access.
            </p>
            <div className="coming-soon-tags">
              <span>Generative AI</span>
              <span>LLM Apps</span>
              <span>Computer Vision</span>
              <span>Agentic AI</span>
              <span>MLOps</span>
            </div>
            <a href="/request-project" className="coming-soon-cta">
              Request a Project
            </a>
          </div>
        </section>
      </main>

      <style>{`
        .coming-soon-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 1.25rem;
          min-height: 70vh;
        }
        .coming-soon-card {
          width: 100%;
          max-width: 720px;
          text-align: center;
          padding: 3rem 2rem;
          border-radius: 20px;
          background:
            radial-gradient(120% 120% at 0% 0%, rgba(147, 51, 234, 0.18) 0%, transparent 55%),
            radial-gradient(120% 120% at 100% 100%, rgba(129, 140, 248, 0.18) 0%, transparent 55%),
            var(--card-bg, rgba(255,255,255,0.04));
          border: 1px solid rgba(147, 51, 234, 0.25);
          box-shadow: 0 20px 60px -20px rgba(76, 29, 149, 0.35);
          backdrop-filter: blur(10px);
        }
        .coming-soon-badge {
          display: inline-block;
          padding: 0.4rem 0.9rem;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
          border-radius: 999px;
          margin-bottom: 1.5rem;
        }
        .coming-soon-title {
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
          background: linear-gradient(135deg, #c4b5fd 0%, #9333ea 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .coming-soon-subtitle {
          color: var(--text-secondary, #94a3b8);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto 1.75rem;
        }
        .coming-soon-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .coming-soon-tags span {
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #c4b5fd;
          background: rgba(147, 51, 234, 0.12);
          border: 1px solid rgba(147, 51, 234, 0.3);
        }
        .coming-soon-cta {
          display: inline-block;
          padding: 0.85rem 1.75rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
          border-radius: 12px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .coming-soon-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.6);
        }
      `}</style>
    </div>
  );
}
