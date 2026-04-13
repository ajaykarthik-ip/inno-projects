import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Final Year Project Titles – ML, AI, Web, IoT & Blockchain',
  description:
    'Browse final year project titles in Machine Learning, Artificial Intelligence, Web Development, IoT, and Blockchain. Find the perfect project for your BTech, BE, MCA, or MSc degree. 600+ projects delivered every year.',
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
    title: 'Final Year Project Titles – ML, AI, Web, IoT & Blockchain | Inno Projects',
    description:
      'Browse final year project titles in ML, AI, Web, IoT & Blockchain. 600+ projects delivered every year. Get expert implementation support instantly via WhatsApp.',
    url: 'https://www.innoprojects.tech/project-titles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Year Project Titles | Inno Projects',
    description:
      'Browse final year project titles in ML, AI, Web, IoT & Blockchain. 600+ projects delivered every year with expert implementation support.',
  },
  alternates: {
    canonical: 'https://www.innoprojects.tech/project-titles',
  },
};

export default function ProjectTitlesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Final Year Project Titles',
    description:
      'A comprehensive catalog of final year project titles in ML, AI, Web Development, IoT, and Blockchain. 600+ projects delivered every year.',
    url: 'https://www.innoprojects.tech/project-titles',
    publisher: {
      '@type': 'Organization',
      name: 'Inno Projects',
      url: 'https://www.innoprojects.tech',
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
