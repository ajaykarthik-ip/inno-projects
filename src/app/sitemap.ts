import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.innoprojects.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ──────────────────────────────────────────
    {
      url: siteUrl,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${siteUrl}/project-titles`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${siteUrl}/project-center-in-coimbatore`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${siteUrl}/request-project`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },
    {
      url: `${siteUrl}/ieee-journal`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${siteUrl}/project`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    {
      url: `${siteUrl}/about`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.80,
    },

    // ── Domain SEO pages ─────────────────────────────────────
    {
      url: `${siteUrl}/machine-learning-projects-coimbatore`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${siteUrl}/cse-final-year-projects-coimbatore`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${siteUrl}/ece-final-year-projects-coimbatore`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },
    {
      url: `${siteUrl}/mca-final-year-projects-coimbatore`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },
    {
      url: `${siteUrl}/ieee-projects-coimbatore-2026`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${siteUrl}/python-projects-coimbatore`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },
    {
      url: `${siteUrl}/web-development-projects-coimbatore`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },

    // ── Project ideas / listing pages ────────────────────────
    {
      url: `${siteUrl}/machine-learning-project-ideas-2026`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    {
      url: `${siteUrl}/cse-project-titles-2026`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    {
      url: `${siteUrl}/ece-project-ideas-2026`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.91,
    },
    {
      url: `${siteUrl}/python-project-ideas-for-students`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.91,
    },
    {
      url: `${siteUrl}/ieee-2026-project-titles-list`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    {
      url: `${siteUrl}/final-year-project-with-source-code`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.91,
    },
    {
      url: `${siteUrl}/ready-made-final-year-projects-coimbatore`,
      lastModified: new Date('2026-04-18'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },

    // ── Blog index ───────────────────────────────────────────
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'weekly',
      priority: 0.80,
    },

    // ── Blog posts ───────────────────────────────────────────
    {
      url: `${siteUrl}/blog/how-to-choose-a-final-year-project-title`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/top-machine-learning-project-ideas`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/how-to-write-final-year-project-report`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/ieee-vs-non-ieee-final-year-projects`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/how-to-prepare-for-project-viva`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/best-final-year-project-ideas-for-cse`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/python-vs-java-for-final-year-projects`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/top-iot-project-ideas-for-engineering-students`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/how-to-complete-final-year-project-last-minute`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/top-deep-learning-project-ideas`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/how-final-year-projects-help-in-placement`,
      lastModified: new Date('2026-04-17'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];
}
