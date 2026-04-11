import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/fuckin-rich/', '/api/'],
      },
    ],
    sitemap: 'https://www.innoprojects.tech/sitemap.xml',
    host: 'https://www.innoprojects.tech',
  };
}
