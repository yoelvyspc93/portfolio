'use client';

import { ProjectItem } from '@/components/common/ProjectItem';
import { projectsData } from '@/constants/projects';
import { useTranslation } from '@/hooks/useTranslation';

import styles from './ProjectsList.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const ProjectsList = () => {
  const { t } = useTranslation('projects');
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clean animation
    gsap.set(itemsRef.current, { opacity: 0, y: 50 });

    for (const [index, item] of itemsRef.current.entries()) {
      if (!item) continue;
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true,
        },
      });
    }

    return () => {
      for (const trigger of ScrollTrigger.getAll()) trigger.kill();
    };
  }, []);

  return (
    <section className={styles.section}>
      {projectsData.map((projectData, index) => {
        const project = t.raw(`list.${projectData.id}`) as {
          title: string;
          shortDescription: string;
          detailedDescription: string[];
        };
        return (
          <div
            key={projectData.id}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
          >
            <ProjectItem
              id={projectData.id}
              title={project.title}
              description={project.detailedDescription}
              imagesUrl={projectData.imagesUrl}
              technologies={projectData.techStack}
              align={index % 2 === 0 ? 'right' : 'left'}
              website={projectData.websiteUrl}
            />
          </div>
        );
      })}
    </section>
  );
};
