import type { Metadata } from 'next';
import FeaturedProjects from '@/components/FeaturedProjects';
import { ProjectModel } from '@/models/Projects';

export const metadata: Metadata = {
  title: 'Browse Projects | Final Year Projects with Source Code',
  description:
    'Browse our full catalog of final year projects — AI, ML, Web Development, IoT, and Blockchain. Complete source code, report, and PPT delivered in 12 hours. Coimbatore.',
  alternates: { canonical: 'https://www.innoprojects.in/projects' },
};

export default async function ProjectsPage() {
  let initialProjects;
  try {
    initialProjects = await ProjectModel.getAllProjects();
  } catch {
    initialProjects = undefined;
  }

  return (
    <div className="main-content-wrapper">
      <main className="main-content">
        <div className="content-section">
          <FeaturedProjects initialProjects={initialProjects} />
        </div>
      </main>
    </div>
  );
}
