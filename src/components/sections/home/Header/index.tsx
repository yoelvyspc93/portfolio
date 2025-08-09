'use client';

import { useEffect } from 'react';
import { useTranslation } from '../../../../hooks/useTranslation';
import styles from './Header.module.scss';
import { GradientButton } from '@/components/common/GradientButton';
import { HeaderCard } from '@/components/common/HeaderCard';
import { gsap } from 'gsap';
import { CustomImage } from '@/components/common/CustomImage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export const Header = () => {
  const { t } = useTranslation('common');
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) return;
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
    tl.fromTo(
      `h1`,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 },
      '<',
    )
      .fromTo(
        `.${styles.paragraph}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        '<',
      )
      .fromTo(
        `.${styles.button}`,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        '<',
      )
      .fromTo(
        `.${styles.image}`,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 },
        '<',
      )
      .fromTo(
        `.${styles.cards} > *`,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3 },
        '<',
      );
  }, [prefersReducedMotion]);

  return (
    <header id="header" className={styles.header}>
      <div className={styles.content}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: t('header.intro') }}
        />
        <p className={styles.paragraph}>{t('header.description')}</p>
        <div className={styles.button}>
          <GradientButton onClick={() => {}}>
            {t('header.downloadCv')}
          </GradientButton>
        </div>
      </div>
      <div className={styles.image}>
        <CustomImage
          src="/images/header/avatar.webp"
          alt="Yoelvys Perez Cabrera"
          fill
          priority
        />
      </div>
      <div className={styles.cards}>
        <HeaderCard number="6+" label={t('header.cardYears')} />
        <HeaderCard number="12+" label={t('header.cardProjects')} />
        <HeaderCard number="2" label={t('header.cardCompanies')} />
      </div>
    </header>
  );
};
