'use client';

import { projectList } from '@/constants/projects';
import styles from './Projects.module.scss';
import { ProjectsCard } from '@/components/common/ProjectsCard';
import { GradientButton } from '@/components/common/GradientButton';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useTranslation } from '../../../../hooks/useTranslation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/hook/usePrefersReducedMotion';

export const Projects = () => {
  const router = useRouter();
  const { t } = useTranslation('projects');
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const button = buttonRef.current;
    if (!section || !button) return;

    // Hide elements initially
    gsap.set(section.querySelector('h2'), { opacity: 0, y: 50 });
    gsap.set(button, { opacity: 0, y: 50 });
    for (const card of cardsRef.current) {
      if (card) gsap.set(card, { opacity: 0, y: 50 });
    }

    // Animate section title
    gsap.to(section.querySelector('h2'), {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        once: true,
      },
    });

    // Animate button
    gsap.to(button, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: button,
        start: 'top 90%',
        once: true,
      },
    });

    // Animate each card
    for (const card of cardsRef.current) {
      if (!card) continue;
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true,
        },
      });
    }

    return () => {
      for (const trigger of ScrollTrigger.getAll()) trigger.kill();
    };
  }, [prefersReducedMotion]);

  const latestProjects = projectList.filter((project) => project.isFavorite);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <h2 dangerouslySetInnerHTML={{ __html: t('latest') }} />
      <div className={styles.list}>
        {latestProjects.map((project, index) => (
          <button
            type="button"
            key={project.id}
            onClick={() => router.push(`/all_projects/?#${project.id}`)}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={styles.projectButton}
          >
            <ProjectsCard
              number={project.id}
              title={project.title}
              content={project.shortDescription}
            />
          </button>
        ))}
      </div>
      <div ref={buttonRef}>
        <GradientButton onClick={() => router.push('/all_projects')}>
          {t('seeMore')}
        </GradientButton>
      </div>
    </section>
  );
};
