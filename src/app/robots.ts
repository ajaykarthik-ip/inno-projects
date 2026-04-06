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
    sitemap: 'https://innoprojects.in/sitemap.xml',
    host: 'https://innoprojects.in',
  };
}
