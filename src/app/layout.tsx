import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = 'https://www.innoprojects.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Best Final Year Project Center in Coimbatore | Inno Projects',
    template: '%s | Inno Projects – Project Center in Coimbatore',
  },
  description:
    'Inno Projects is the best final year project center in Coimbatore. 600+ final year projects delivered every year in ML, AI, Web Development, IoT & Blockchain with full source code, documentation and implementation support for BTech, BE, MCA, MSc students. Delivered in 12 hours.',
  keywords: [
    // Local keywords (highest priority)
    'final year project center in coimbatore',
    'best project center in coimbatore',
    'project center in coimbatore',
    'best final year project center in coimbatore',
    'final year project coimbatore',
    'project center coimbatore gandhipuram',
    'IEEE project center coimbatore',
    'software project center coimbatore',
    'engineering project center coimbatore',
    'project center near me coimbatore',
    'final year project coimbatore 2025',
    'final year project coimbatore 2026',
    'best project center coimbatore for engineering',
    // Generic national keywords
    'final year project',
    'final year project ideas',
    'final year project 2025',
    'final year project 2026',
    'final year project center coimbatore 2026',
    'IEEE projects coimbatore 2026',
    'final year project with source code',
    'buy final year project',
    'final year project topics',
    'final year project for CSE',
    'final year project for engineering',
    'BTech final year project',
    'BE final year project',
    'MCA final year project',
    'MSc final year project',
    'computer science project ideas',
    'machine learning final year project',
    'deep learning project',
    'artificial intelligence project',
    'AI project ideas',
    'web development final year project',
    'IoT project ideas',
    'blockchain final year project',
    'IEEE project',
    'project implementation help',
    'Inno Projects',
    'project with source code',
    'mini project ideas',
    'academic project help',
    'project report',
    'project for engineering students',
  ],
  authors: [{ name: 'Inno Projects', url: siteUrl }],
  creator: 'Inno Projects',
  publisher: 'Inno Projects',
  category: 'Education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Inno Projects',
    title: 'Best Final Year Project Center in Coimbatore | Inno Projects',
    description:
      'Best final year project center in Coimbatore. 600+ projects delivered every year in ML, AI, Web, IoT & Blockchain. Full source code, documentation, IEEE support. Delivered in 12 hours. Call +91 9600309140.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inno Projects – Best Final Year Project Center in Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Final Year Project Center in Coimbatore | Inno Projects',
    description:
      'Best project center in Coimbatore. 600+ final year projects delivered every year in ML, AI, Web, IoT & Blockchain with full source code and 12-hour delivery.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'tL4RkoEPsBs4-KR1WftnNMTcHO_yxn2h71GOO6m7BR4',
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore, Tamil Nadu, India',
    'geo.position': '11.0168;76.9558',
    'ICBM': '11.0168, 76.9558',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'EducationalOrganization'],
        '@id': `${siteUrl}/#organization`,
        name: 'Inno Projects',
        alternateName: 'Inno Projects - Final Year Project Center Coimbatore',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/favicon.ico`,
        },
        image: `${siteUrl}/og-image.png`,
        description:
          'Inno Projects is the best final year project center in Coimbatore, Tamil Nadu. We deliver 600+ final year projects every year in ML, AI, Web Development, IoT, and Blockchain with full source code, documentation, and expert implementation support for BTech, BE, MCA, and MSc students. Projects delivered in 12 hours.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '28, Baba St, Janaki Nagar, Venkitapuram',
          addressLocality: 'Coimbatore',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
          postalCode: '641025',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '11.0301',
          longitude: '77.0046',
        },
        telephone: '+91-9600309140',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9600309140',
          contactType: 'customer support',
          availableLanguage: ['English', 'Tamil'],
          contactOption: 'TollFree',
          areaServed: ['Coimbatore', 'Tamil Nadu', 'India'],
        },
        openingHours: 'Mo-Su 00:00-23:59',
        priceRange: '₹₹',
        areaServed: [
          { '@type': 'City', name: 'Coimbatore' },
          { '@type': 'State', name: 'Tamil Nadu' },
        ],
        sameAs: [
          'https://www.facebook.com/innoprojects.tech',
          'https://www.instagram.com/innoprojects.tech',
          'https://www.linkedin.com/company/innoprojects',
          'https://www.youtube.com/@innoprojects',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Inno Projects',
        description:
          'Best final year project center in Coimbatore. 600+ projects delivered every year in ML, AI, Web, IoT & Blockchain with source code and implementation support.',
        publisher: { '@id': `${siteUrl}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/project-titles?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best final year project center in Coimbatore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Inno Projects is one of the best final year project centers in Coimbatore, Tamil Nadu. We deliver 600+ projects every year in ML, AI, Web Development, IoT, and Blockchain with full source code, documentation, and expert support for BTech, BE, MCA, and MSc students.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which project center in Coimbatore provides projects with source code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Inno Projects in Coimbatore provides complete final year projects with full source code, documentation, PPT, and IEEE paper support. Contact us on WhatsApp at +91 9600309140.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the cost of final year projects in Coimbatore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At Inno Projects Coimbatore, final year project prices are affordable and student-friendly. We offer competitive pricing with full source code, documentation, and implementation support. Contact us at +91 9600309140 for the latest pricing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Inno Projects in Coimbatore offer IEEE projects?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Inno Projects Coimbatore offers IEEE-based final year projects in ML, AI, Deep Learning, IoT, Blockchain, and Web Development. We also assist with IEEE journal publication for less than ₹3,000.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast can I get my final year project in Coimbatore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Inno Projects delivers final year projects in Coimbatore within 12 hours. We are available 24/7 on WhatsApp at +91 9600309140.',
            },
          },
          {
            '@type': 'Question',
            name: 'What categories of final year projects are available at Inno Projects Coimbatore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer projects in Machine Learning (ML), Artificial Intelligence (AI), Deep Learning, Web Development, Internet of Things (IoT), Blockchain, Data Science, and Computer Vision — 600+ projects delivered every year in Coimbatore.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* FOUC prevention: set theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();` }} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0d0d18" />
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="app-container">
            <SidebarMenu />
            <div className="page-content">
              <MainNavbar />
              <div className="main-content-wrapper">
                <main className="main-content">
                  {children}
                </main>
              </div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
