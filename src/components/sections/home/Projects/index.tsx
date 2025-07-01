'use client';

import { projectList } from '@/constants/projects';
import styles from './Projects.module.scss';
import { ProjectsCard } from '@/components/common/ProjectsCard';
import { GradientButton } from '@/components/common/GradientButton';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const Projects = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const button = buttonRef.current;
      if (!section || !button) return;

      // Hide elements initially
      gsap.set(section.querySelector('h2'), { opacity: 0, y: 50 });
      gsap.set(button, { opacity: 0, y: 50 });
      cardsRef.current.forEach((card) => {
        if (card) gsap.set(card, { opacity: 0, y: 50 });
      });

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
      cardsRef.current.forEach((card) => {
        if (!card) return;
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
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    })();
  }, []);

  const latestProjects = projectList.filter((project) => project.isFavorite);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <h2>
        4 Latest <span>Projects</span>
      </h2>
      <div className={styles.list}>
        {latestProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => router.push(`/all_projects/?#${project.id}`)}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <ProjectsCard
              number={project.id}
              title={project.title}
              content={project.shortDescription}
            />
          </div>
        ))}
      </div>
      <div ref={buttonRef}>
        <GradientButton onClick={() => router.push('/all_projects')}>
          See More
        </GradientButton>
      </div>
    </section>
  );
};
