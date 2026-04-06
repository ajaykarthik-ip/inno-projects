import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IEEE Journal Services – Paper Writing & Formatting Help',
  description:
    'Professional IEEE journal paper writing, formatting, and publication assistance for final year students. Get your research paper published with expert guidance.',
  keywords: [
    'IEEE journal paper',
    'IEEE paper formatting',
    'IEEE paper writing help',
    'research paper publication',
    'IEEE journal publication',
    'paper writing service',
    'academic paper formatting',
    'final year project IEEE paper',
    'engineering research paper',
    'journal paper help India',
  ],
  openGraph: {
    title: 'IEEE Journal Services – Paper Writing & Formatting | Inno Projects',
    description:
      'Professional IEEE journal paper writing and formatting assistance. Get your research paper published with expert guidance.',
    url: 'https://innoprojects.in/ieee-journal',
    type: 'website',
  },
  alternates: {
    canonical: 'https://innoprojects.in/ieee-journal',
  },
};

export default function IEEELayout({ children }: { children: React.ReactNode }) {
  return children;
}
