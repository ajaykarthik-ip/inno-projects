import type { Metadata } from 'next';
import ViewMyProjectClient from './ViewMyProjectClient';

export const metadata: Metadata = {
  title: 'View My Project – Track Your Final Year Project Status',
  description:
    'Track and manage your final year project order with Inno Projects. Check implementation progress and get updates on your project delivery.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ViewMyProject() {
  return <ViewMyProjectClient />;
}