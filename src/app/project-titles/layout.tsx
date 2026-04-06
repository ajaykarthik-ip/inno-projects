import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '500+ Final Year Project Titles – ML, AI, Web, IoT & Blockchain',
  description:
    'Browse 500+ final year project titles in Machine Learning, Artificial Intelligence, Web Development, IoT, and Blockchain. Find the perfect project for your BTech, BE, MCA, or MSc degree in 2025.',
  keywords: [
    'final year project titles',
    'project ideas 2025',
    '500 project ideas',
    'machine learning project titles',
    'AI project titles',
    'web development project titles',
    'IoT project titles',
    'blockchain project titles',
    'final year project list',
    'BTech project topics',
    'BE project topics',
    'MCA project topics',
    'CSE project ideas',
    'final year project for computer science',
    'ML project ideas for final year',
    'deep learning project',
    'project catalog',
    'engineering project ideas',
    'project with WhatsApp contact',
  ],
  openGraph: {
    title: '500+ Final Year Project Titles – ML, AI, Web, IoT & Blockchain | Inno Projects',
    description:
      'Browse 500+ final year project titles in ML, AI, Web, IoT & Blockchain. Get expert implementation support instantly via WhatsApp.',
    url: 'https://innoprojects.in/project-titles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '500+ Final Year Project Titles | Inno Projects',
    description:
      'Browse 500+ final year project titles in ML, AI, Web, IoT & Blockchain with expert implementation support.',
  },
  alternates: {
    canonical: 'https://innoprojects.in/project-titles',
  },
};

export default function ProjectTitlesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '500+ Final Year Project Titles',
    description:
      'A comprehensive catalog of 500+ final year project titles in ML, AI, Web Development, IoT, and Blockchain.',
    url: 'https://innoprojects.in/project-titles',
    publisher: {
      '@type': 'Organization',
      name: 'Inno Projects',
      url: 'https://innoprojects.in',
    },
    about: {
      '@type': 'Thing',
      name: 'Final Year Projects',
      description: 'Academic projects for engineering and computer science students',
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
