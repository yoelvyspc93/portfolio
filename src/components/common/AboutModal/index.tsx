import { useTranslation } from '@/hooks/useTranslation';
import styles from './AboutModal.module.scss';

export const AboutModal = () => {
  const { t } = useTranslation('about');
  const detailedDescriptions = t.raw('detailedDescriptions') as string[];

  return (
    <div className={styles.about}>
      {detailedDescriptions.map((paragraph: string, index: number) => (
        <p key={index} className={styles.about__paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};
