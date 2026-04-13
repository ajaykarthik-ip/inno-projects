import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Get Final Year Project Help via WhatsApp',
  description:
    'Contact Inno Projects for final year project implementation help. Reach us instantly on WhatsApp +91 9600309140. Available 24/7 for ML, AI, Web, IoT & Blockchain projects.',
  keywords: [
    'contact final year project help',
    'project implementation support',
    'WhatsApp project help',
    'buy final year project',
    'final year project assistance',
    'project help WhatsApp',
    'engineering project support',
    'final year project contact',
    'Inno Projects contact',
    'project help India',
  ],
  openGraph: {
    title: 'Contact Inno Projects – Final Year Project Help 24/7',
    description:
      'Get instant help for your final year project via WhatsApp. Expert support for ML, AI, Web, IoT & Blockchain projects.',
    url: 'https://www.innoprojects.tech/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.innoprojects.tech/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Inno Projects',
    description: 'Contact page for final year project help and support',
    url: 'https://www.innoprojects.tech/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Inno Projects',
      telephone: '+91-9600309140',
      url: 'https://www.innoprojects.tech',
      openingHours: 'Mo-Su 00:00-23:59',
      priceRange: '$$',
      description: 'Final year project implementation and support service',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
