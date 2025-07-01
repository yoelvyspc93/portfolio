'use client';

import { ProjectItem } from '@/components/common/ProjectItem';
import { projectList } from '@/constants/projects';

import styles from './ProjectsList.module.scss';
import { useEffect, useRef } from 'react';

export const ProjectsList = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              once: true,
            },
          },
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    })();
  }, []);

  return (
    <section className={styles.section}>
      {projectList.map(
        (
          { id, title, detailedDescription, imageUrl, techStack, websiteUrl },
          index,
        ) => (
          <div
            key={id}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
          >
            <ProjectItem
              id={id}
              title={title}
              description={detailedDescription}
              imageUrl={imageUrl}
              technologies={techStack}
              align={index % 2 === 0 ? 'right' : 'left'}
              website={websiteUrl}
            />
          </div>
        ),
      )}
    </section>
  );
};
