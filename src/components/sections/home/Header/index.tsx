'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { GradientButton } from '@/components/common/GradientButton';
import { CustomImage } from '@/components/common/CustomImage';
import { useTranslation } from '@/hooks/useTranslation';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './Header.module.scss';

type Props = {
  onDownloadCv?: () => void;
  onContact?: () => void;
};

const backgroundImages = [
  {
    label: 'storybook',
    url: '/images/header/storybook.webp',
    width: 262,
    height: 262,
  },
  {
    label: 'chromatic',
    url: '/images/header/chromatic.webp',
    width: 115,
    height: 115,
  },
  {
    label: 'nextjs',
    url: '/images/header/nextjs.webp',
    width: 288,
    height: 288,
  },
  {
    label: 'cypress',
    url: '/images/header/cypress.webp',
    width: 134,
    height: 134,
  },
  {
    label: 'react',
    url: '/images/header/react.webp',
    width: 250,
    height: 250,
  },
  {
    label: 'typescript',
    url: '/images/header/typescript.webp',
    width: 260,
    height: 260,
  },
];

export function Header({ onDownloadCv, onContact }: Props) {
  const { t } = useTranslation('header');
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.9, ease: 'power2.out' },
    });

    if (!prefersReducedMotion) {
      tl.fromTo(`#hero-title`, { y: 24, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          `#hero-desc`,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1 },
          '-=0.6',
        )
        .fromTo(
          `.${styles.buttons} > *`,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, stagger: 0.12 },
          '-=0.5',
        )
        .fromTo(
          `.${styles.brands} > *`,
          { opacity: 0, y: 20 },
          { opacity: 0.18, y: 0, stagger: 0.08 },
          '-=0.6',
        );
    }

    return () => {
      tl?.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <header id="header" className={styles.header}>
      <ul className={styles.brands} aria-hidden="true">
        {backgroundImages.map((image) => (
          <li key={image.label} className={styles.brandItem}>
            <CustomImage
              className={styles.brand}
              src={image.url}
              alt={image.label}
              width={image.width}
              height={image.height}
              priority
            />
          </li>
        ))}
      </ul>
      <div className={styles.inner}>
        <div className={styles.content}>
          {/* Un solo h1 por página */}
          <h1 id="hero-title" className={styles.title}>
            {t('hello')} <span>{t('name')}</span>
          </h1>
          <p id="hero-desc" className={styles.description}>
            {t('description')}
          </p>

          <div className={styles.buttons}>
            <GradientButton aria-label={t('download')} onClick={onDownloadCv}>
              {t('download')}
            </GradientButton>

            <GradientButton aria-label={t('contact')} onClick={onContact}>
              {t('contact')}
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
}
