'use client';

import { ExperienceCard } from '@/components/common/ExperienceCard';
import styles from './Experience.module.scss';
import { experiencesData } from '@/constants/experience';
import { useRef, useEffect } from 'react';
import { useTranslation } from '../../../../hooks/useTranslation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export const Experience = () => {
  const { t } = useTranslation('experience');
  const prefersReducedMotion = usePrefersReducedMotion();
  const titleRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const title = titleRef.current;

    // Hide elements initially
    gsap.set(title, { opacity: 0, y: 50 });
    for (const item of itemsRef.current) {
      if (item) gsap.set(item, { opacity: 0, y: 50 });
    }

    // Animate title
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
      },
    });

    // Animate items
    for (const [index, item] of itemsRef.current.entries()) {
      if (item) {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });
      }
    }
  }, [prefersReducedMotion]);

  return (
    <section id="experience" className={styles.experience}>
      <h2
        ref={titleRef}
        className={styles.experience__title}
        dangerouslySetInnerHTML={{ __html: t('title') }}
      />
      <div className={styles.experience__grid}>
        {experiencesData.map((expData, index) => {
          const expTranslation = t.raw(`list.${expData.id}`) as {
            period: string;
            company: string;
            summary: string;
            details: string[];
          };
          return (
            <div
              key={expData.id}
              className={styles.experience__grid__item}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
            >
              <ExperienceCard
                number={expData.id}
                title={expTranslation.company}
                description={expTranslation.summary}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
