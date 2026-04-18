import type { Metadata } from 'next';
import FeaturedProjects from '@/components/FeaturedProjects';

export const metadata: Metadata = {
  title: 'Browse Projects | Final Year Projects with Source Code | Inno Projects',
  description:
    'Browse our full catalog of final year projects — AI, ML, Web Development, IoT, and Blockchain. Complete source code, report, and PPT delivered in 12 hours. Coimbatore.',
  alternates: { canonical: 'https://www.innoprojects.tech/projects' },
};

export default function ProjectsPage() {
  return (
    <div className="main-content-wrapper">
      <main className="main-content">
        <div className="content-section">
          <FeaturedProjects />
        </div>
      </main>
    </div>
  );
}
