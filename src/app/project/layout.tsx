import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Projects – Buy Final Year Projects with Source Code',
  description:
    'Browse our featured final year projects with full source code, documentation, and implementation support. ML, AI, Web, IoT & Blockchain projects available for BTech, BE, MCA students.',
  keywords: [
    'buy final year project',
    'final year project with source code',
    'featured projects',
    'project with full code',
    'engineering project buy',
    'ML project source code',
    'AI project source code',
    'web project source code',
    'final year project price',
    'affordable final year project',
    'project with documentation',
  ],
  openGraph: {
    title: 'Featured Projects – Buy Final Year Projects with Source Code | Inno Projects',
    description:
      'Browse featured final year projects with full source code and implementation support for ML, AI, Web, IoT & Blockchain.',
    url: 'https://www.innoprojects.tech/project',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.innoprojects.tech/project',
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
