import React from 'react';
import type { Metadata } from 'next';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import Footer from '@/components/Footer';
import './globals.css';

const siteUrl = 'https://innoprojects.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Inno Projects – 500+ Final Year Project Ideas with Implementation Help',
    template: '%s | Inno Projects',
  },
  description:
    'Get 500+ final year project ideas in ML, AI, Web Development, IoT & Blockchain with full source code and implementation support. Best final year projects for BTech, BE, MCA, MCS, MSc students in 2025.',
  keywords: [
    'final year project',
    'final year project ideas',
    'final year project 2025',
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
    title: 'Inno Projects – 500+ Final Year Project Ideas with Implementation Help',
    description:
      'Browse 500+ final year project titles in ML, AI, Web, IoT & Blockchain. Get expert implementation support for BTech, BE, MCA students in 2025.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inno Projects – Final Year Project Ideas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inno Projects – Final Year Project Ideas & Implementation Help',
    description:
      'Browse 500+ final year projects in ML, AI, Web, IoT & Blockchain with expert implementation support.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Inno Projects',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/favicon.ico`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9600309140',
          contactType: 'customer support',
          availableLanguage: ['English', 'Tamil'],
          contactOption: 'TollFree',
        },
        description:
          'Inno Projects provides 500+ final year project ideas with full implementation support for engineering and computer science students.',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Inno Projects',
        description:
          '500+ final year project ideas with source code and implementation support for BTech, BE, MCA students.',
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
            name: 'What is Inno Projects?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Inno Projects is a platform offering 500+ final year project ideas in ML, AI, Web Development, IoT, and Blockchain with full implementation support for BTech, BE, MCA, and MSc students.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide final year projects with source code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we provide complete final year projects with full source code, documentation, and implementation support. Contact us on WhatsApp at +91 9600309140.',
            },
          },
          {
            '@type': 'Question',
            name: 'What categories of final year projects are available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer projects in Machine Learning (ML), Artificial Intelligence (AI), Web Development, Internet of Things (IoT), and Blockchain — over 500 projects total.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I get help with my final year project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact us via WhatsApp at +91 9600309140 or visit our contact page. We are available 24/7 to help with project selection, implementation, and documentation.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0d0d18" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
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
      </body>
    </html>
  );
}
