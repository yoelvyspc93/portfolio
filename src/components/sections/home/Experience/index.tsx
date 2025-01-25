'use client';

import { ExperienceCard } from '@/components/common/ExperienceCard';
import styles from './Experience.module.scss';
import { workExperiences } from '@/constants/experience';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Experience = () => {
  const titleRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = titleRef.current;

    // Hide elements initially
    gsap.set(title, { opacity: 0, y: 50 });
    itemsRef.current.forEach((item) => {
      if (item) gsap.set(item, { opacity: 0, y: 50 });
    });

    // Animate title
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 70%',
        once: true,
      },
    });

    // Animate each experience item
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 60%',
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className={styles.experience}>
      <h2 ref={titleRef} className={styles.experience__title}>
        My <span>Experience</span>
      </h2>
      <div className={styles.experience__grid}>
        {workExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className={styles.experience__grid__item}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
          >
            <ExperienceCard
              number={exp.id}
              title={exp.company}
              description={exp.summary}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
