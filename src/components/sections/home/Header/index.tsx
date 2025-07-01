'use client';

import { useEffect } from 'react';
import styles from './Header.module.scss';
import { GradientButton } from '@/components/common/GradientButton';
import { HeaderCard } from '@/components/common/HeaderCard';
import { CustomImage } from '@/components/common/CustomImage';

export const Header = () => {
  useEffect(() => {
    (async () => {
      const { default: gsap } = await import('gsap');
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'power2.out' },
      });
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
    })();
  }, []);

  return (
    <header id="header" className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Yoelvys <div>Perez Cabrera</div>
        </h1>
        <p className={styles.paragraph}>
          Passionate about transforming ideas into unique digital experiences,
          combining design, advanced animations, and SEO optimization.
        </p>
        <div className={styles.button}>
          <GradientButton onClick={() => console.log('Download CV')}>
            Download CV
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
        <HeaderCard number="6+" label="Years of experience" />
        <HeaderCard number="12+" label="Complete projects" />
        <HeaderCard number="2" label="Companies worked" />
      </div>
    </header>
  );
};
