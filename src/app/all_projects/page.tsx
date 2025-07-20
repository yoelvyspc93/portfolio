import { Header } from '@/components/sections/projects/Header';
import { ProjectsList } from '@/components/sections/projects/ProjectsList';
import { featureFlags } from '@/constants/featureFlags';
import { notFound } from 'next/navigation';

export default function AllProjectsPage() {
  if (!featureFlags.showProjects) {
    notFound();
  }
  return (
    <main id="main">
      <Header />
      <ProjectsList />
    </main>
  );
}
