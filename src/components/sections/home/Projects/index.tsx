'use client';

import { projectsData } from '@/constants/projects';
import styles from './Projects.module.scss';
import { ProjectsCard } from '@/components/common/ProjectsCard';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { Button } from '@/components/common/Button';
import { useTranslation } from '@/hooks/useTranslation';

export const Projects = () => {
  const router = useRouter();
  const { t } = useTranslation('projects');
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([]);
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

  const latestProjects = projectsData.filter((project) => project.isFavorite);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <h2>
        {t('latest')} <span>{t('latestHighlight')}</span>
      </h2>
      <div className={styles.list}>
        {latestProjects.map((projectData, index) => {
          const project = t.raw(`list.${projectData.id}`) as {
            title: string;
            shortDescription: string;
            detailedDescription: string[];
          };
          return (
            <button
              type="button"
              key={projectData.id}
              onClick={() => router.push(`/all_projects/?#${projectData.id}`)}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <ProjectsCard
                number={projectData.id}
                title={project.title}
                content={project.shortDescription}
              />
            </button>
          );
        })}
      </div>
      <div ref={buttonRef}>
        <Button onClick={() => router.push('/all_projects')}>
          {t('seeMore')}
        </Button>
      </div>
    </section>
  );
};
