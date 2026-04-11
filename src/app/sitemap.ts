import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.innoprojects.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ──────────────────────────────────────────
    {
      url: siteUrl,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/project-titles`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${siteUrl}/project-center-in-coimbatore`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${siteUrl}/request-project`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },
    {
      url: `${siteUrl}/ieee-journal`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${siteUrl}/project`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // ── Blog index ───────────────────────────────────────────
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 0.80,
    },

    // ── Blog posts ───────────────────────────────────────────
    {
      url: `${siteUrl}/blog/how-to-choose-a-final-year-project-title`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/top-machine-learning-project-ideas`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/how-to-write-final-year-project-report`,
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/ieee-vs-non-ieee-final-year-projects`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/how-to-prepare-for-project-viva`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/best-final-year-project-ideas-for-cse`,
      lastModified: new Date('2025-02-15'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/python-vs-java-for-final-year-projects`,
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/top-iot-project-ideas-for-engineering-students`,
      lastModified: new Date('2025-02-10'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/how-to-complete-final-year-project-last-minute`,
      lastModified: new Date('2025-03-15'),
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${siteUrl}/blog/top-deep-learning-project-ideas`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/blog/how-final-year-projects-help-in-placement`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];
}
