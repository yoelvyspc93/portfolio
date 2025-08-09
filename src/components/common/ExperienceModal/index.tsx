import { ExperienceData } from '@/constants/experience';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './ExperienceModal.module.scss';

export const ExperienceModal = ({
  experience,
}: {
  experience: ExperienceData;
}) => {
  const { t } = useTranslation('experience');
  const expData = t.raw(`list.${experience.id}`) as {
    period: string;
    company: string;
    summary: string;
    details: string[];
  };
  const { techStack } = experience;

  return (
    <div className={styles.experience}>
      <span className={styles.experience__date}>{expData.period}</span>
      {Array.isArray(expData.details) &&
        expData.details.map((desc: string, index: number) => (
          <p key={index} className={styles.experience__description}>
            {desc}
          </p>
        ))}
      <div className={styles.experience__technologies__title}>
        {t('techTitle')}
      </div>
      <div className={styles.experience__technologies}>
        {Array.isArray(techStack) &&
          techStack.map((tech, index) => (
            <div key={index} className={styles.experience__technologies__item}>
              {tech}
            </div>
          ))}
      </div>
    </div>
  );
};
