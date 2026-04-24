import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Project – Custom Final Year Project Development',
  description:
    'Request a custom final year project tailored to your requirements. We develop ML, AI, Web, IoT & Blockchain projects with full source code and documentation for BTech, BE, MCA students.',
  keywords: [
    'request final year project',
    'custom project development',
    'project request',
    'custom engineering project',
    'final year project order',
    'project development service',
    'custom ML project',
    'custom AI project',
    'custom web project',
    'bespoke final year project',
  ],
  openGraph: {
    title: 'Request a Custom Final Year Project | Inno Projects',
    description:
      'Request a custom final year project developed to your requirements. ML, AI, Web, IoT & Blockchain.',
    url: 'https://www.innoprojects.in/request-project',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.innoprojects.in/request-project',
  },
};

export default function RequestProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
