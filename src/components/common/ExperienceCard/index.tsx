'use client';

import { useRouter } from 'next/navigation';
import styles from './ExperienceCard.module.scss';
import { Button } from '../Button';
import { useTranslation } from '@/hooks/useTranslation';

interface Props {
  number: string;
  title: string;
  description: string;
}

export const ExperienceCard = ({ number, title, description }: Props) => {
  const { t } = useTranslation('experience');
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
        <Button onClick={handleOnClick}>{t('seeMore')}</Button>
      </div>
    </div>
  );
};
