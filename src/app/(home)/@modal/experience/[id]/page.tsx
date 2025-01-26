import { ExperienceModal } from '@/components/common/ExperienceModal';
import { Modal } from '@/components/common/Modal';
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
    return null;
  }

  return (
    <Modal isOpen title={workExperience.company}>
      <ExperienceModal experience={workExperience} />
    </Modal>
  );
}
