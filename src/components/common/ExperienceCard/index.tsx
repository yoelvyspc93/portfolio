'use client';

import { useRouter } from 'next/navigation';
import { GradientButton } from '../GradientButton';
import styles from './ExperienceCard.module.scss';

interface Props {
  number: string;
  title: string;
  description: string;
}

export const ExperienceCard = ({ number, title, description }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`experience/${number}/`);
  };

  return (
    <div className={styles.card}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.button}>
        <GradientButton onClick={handleOnClick}>See More</GradientButton>
      </div>
    </div>
  );
};
