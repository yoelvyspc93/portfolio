import { aboutInfo } from '@/constants/about';
import styles from './AboutModal.module.scss';

export const AboutModal = () => {
  return (
    <div className={styles.about}>
      {aboutInfo.detailedDescriptions.map((paragraph, index) => (
        <p key={index} className={styles.about__paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};
