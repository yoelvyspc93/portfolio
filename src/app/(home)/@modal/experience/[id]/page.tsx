import { workExperiences } from '@/constants/experience';

export async function generateStaticParams() {
  return workExperiences.map((exp) => ({
    id: exp.id,
  }));
}

export default async function ExperienceModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const workExperience = workExperiences.find((exp) => exp.id === id);

  if (!workExperience) {
    return <div>Experience not found</div>;
  }

  return <div>Experience: {workExperience?.company}</div>;
}
