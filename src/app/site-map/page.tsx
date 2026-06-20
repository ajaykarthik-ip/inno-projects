import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/site-map`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Site Map — All Pages | Inno Projects',
  description:
    'Complete site map of Inno Projects — every landing page, project category, idea list, blog article and core page in one place.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Site Map — All Pages | Inno Projects',
    description: 'Complete site map of Inno Projects — every page in one place.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Inno Projects — Site Map' }],
  },
};

interface Section {
  heading: string;
  description?: string;
  links: { href: string; label: string }[];
}

const sections: Section[] = [
  {
    heading: 'Core Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/project-center-in-coimbatore', label: 'Best Final Year Project Center in Coimbatore' },
      { href: '/project-titles', label: 'Project Titles Catalog' },
      { href: '/projects', label: 'Featured Projects' },
      { href: '/project', label: 'Project Detail' },
      { href: '/request-project', label: 'Request a Project' },
      { href: '/reviews', label: 'Student Reviews (5.0★)' },
      { href: '/about', label: 'About Us' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/ieee-journal', label: 'IEEE Journal Publication' },
    ],
  },
  {
    heading: 'Final Year Projects by Department',
    description: 'Department-specific project pages for engineering students in Coimbatore.',
    links: [
      { href: '/cse-final-year-projects-coimbatore', label: 'CSE Final Year Projects in Coimbatore' },
      { href: '/ece-final-year-projects-coimbatore', label: 'ECE Final Year Projects in Coimbatore' },
      { href: '/mca-final-year-projects-coimbatore', label: 'MCA Final Year Projects in Coimbatore' },
      { href: '/machine-learning-projects-coimbatore', label: 'Machine Learning Projects in Coimbatore' },
      { href: '/python-projects-coimbatore', label: 'Python Projects in Coimbatore' },
      { href: '/web-development-projects-coimbatore', label: 'Web Development Projects in Coimbatore' },
      { href: '/ieee-projects-coimbatore-2026', label: 'IEEE Projects in Coimbatore 2026' },
    ],
  },
  {
    heading: 'Project Title & Idea Lists',
    description: 'Curated project title lists by domain for 2026.',
    links: [
      { href: '/cse-project-titles-2026', label: 'CSE Project Titles 2026' },
      { href: '/ece-project-ideas-2026', label: 'ECE Project Ideas 2026' },
      { href: '/machine-learning-project-ideas-2026', label: 'Machine Learning Project Ideas 2026' },
      { href: '/python-project-ideas-for-students', label: 'Python Project Ideas for Students' },
      { href: '/ieee-2026-project-titles-list', label: 'IEEE 2026 Project Titles List' },
      { href: '/final-year-project-with-source-code', label: 'Final Year Project with Source Code' },
      { href: '/ready-made-final-year-projects-coimbatore', label: 'Ready-Made Final Year Projects' },
    ],
  },
  {
    heading: 'Blog & Guides',
    description: 'Practical guides for engineering final year students.',
    links: [
      { href: '/blog', label: 'Blog — All Articles' },
      // DISABLED — page kept as dead code in /blog/_top-10-... (decide later)
      // { href: '/blog/top-10-final-year-project-centers-in-coimbatore', label: 'Top 10 Final Year Project Centers in Coimbatore' },
      { href: '/blog/top-machine-learning-project-ideas', label: 'Top Machine Learning Project Ideas' },
      { href: '/blog/top-deep-learning-project-ideas', label: 'Top Deep Learning Project Ideas' },
      { href: '/blog/top-iot-project-ideas-for-engineering-students', label: 'Top IoT Project Ideas for Engineering Students' },
      { href: '/blog/best-final-year-project-ideas-for-cse', label: 'Best Final Year Project Ideas for CSE' },
      { href: '/blog/how-to-choose-a-final-year-project-title', label: 'How to Choose a Final Year Project Title' },
      { href: '/blog/how-to-write-final-year-project-report', label: 'How to Write a Final Year Project Report' },
      { href: '/blog/how-to-prepare-for-project-viva', label: 'How to Prepare for the Project Viva' },
      { href: '/blog/how-to-complete-final-year-project-last-minute', label: 'How to Complete a Final Year Project at the Last Minute' },
      { href: '/blog/how-final-year-projects-help-in-placement', label: 'How Final Year Projects Help in Placement' },
      { href: '/blog/ieee-vs-non-ieee-final-year-projects', label: 'IEEE vs Non-IEEE Final Year Projects' },
      { href: '/blog/python-vs-java-for-final-year-projects', label: 'Python vs Java for Final Year Projects' },
    ],
  },
];

export default function SiteMapPage() {
  const totalLinks = sections.reduce((acc, s) => acc + s.links.length, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}/#webpage`,
        url: pageUrl,
        name: 'Site Map — All Pages | Inno Projects',
        description: 'Complete site map of Inno Projects with links to every page.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Site Map', item: pageUrl },
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

      <div className="sitemap-page">
        <header className="sitemap-hero">
          <div className="sitemap-hero-inner">
            <nav className="sitemap-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Site Map</span>
            </nav>
            <h1 className="sitemap-h1">Site Map</h1>
            <p className="sitemap-lead">
              Every page on Inno Projects, in one list. {totalLinks} pages across project catalogs, idea lists, blog articles and core pages.
            </p>
          </div>
        </header>

        <div className="sitemap-body">
          <div className="sitemap-container">
            {sections.map((s) => (
              <section key={s.heading} className="sitemap-section">
                <h2 className="sitemap-section-h2">{s.heading}</h2>
                {s.description && (
                  <p className="sitemap-section-desc">{s.description}</p>
                )}
                <ul className="sitemap-list" role="list">
                  {s.links.map((l) => (
                    <li key={l.href} className="sitemap-item">
                      <Link href={l.href} className="sitemap-link">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
