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

const siteUrl = 'https://www.innoprojects.in';

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
    google: 'mPio88tUiWUBaVWd-qgsffxGetGB0T3f-QrvUiXNJps',
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
          url: `${siteUrl}/logo.png`,
          width: 512,
          height: 512,
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
          'https://www.facebook.com/innoprojects.in',
          'https://www.instagram.com/innoprojects.in',
          'https://www.linkedin.com/company/innoprojects',
          'https://www.youtube.com/@innoprojects',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '54',
          reviewCount: '54',
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Keerthanaa Prabakaran' },
            datePublished: '2026-06-09',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Excellent experience with Inno Project Centre. Developer Richard provided clear explanations, valuable guidance and complete project support.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Rakesh Roshan' },
            datePublished: '2026-06-04',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Got a MERN stack project at the last minute — worth purchasing and good mentorship.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Vinotha T' },
            datePublished: '2026-05-13',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Good project centre — got my machine learning project at a very low price and very good quality. Extremely professional team and they even gave me a cash back after referring my friends.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Hari Haran' },
            datePublished: '2026-04-15',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'I had a wonderful experience working with the developer and the project development. I got my project on time.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Dhiyanesh' },
            datePublished: '2026-03-04',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Good project center with affordable, very good quality project. The trainer was excellent in teaching — explained terms like he was explaining to a kid. I really appreciate their patience and skill.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Atchu Shanmugam' },
            datePublished: '2026-02-25',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'If we explain about the Inno project, they will complete the full work even if we pay a part of the amount. For the remaining balance, they give us some time to pay — very student-friendly.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Janani Kannan' },
            datePublished: '2026-02-18',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'I had a wonderful experience working with this developer (Ajay). He is highly dedicated, responsible and clear in explanation. Strongly recommend Inno Projects.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Girish Fab' },
            datePublished: '2026-01-21',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Well taught the concept and delivered on time. Free documentation without any issues and budget friendly for me as a final year student.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Muthuvel M' },
            datePublished: '2025-12-17',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Best project center — very low price, experienced staff guided me through and they did not hesitate to explain the project even at midnight. Really worth the money. Best Project Center in Coimbatore.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Amlesh Mondol' },
            datePublished: '2025-10-22',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'We are from Bangalore — they helped us till the last moment in a tight deadline. Very nice and clearly explained, very helpful, very low price. Value for money.',
          },
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
