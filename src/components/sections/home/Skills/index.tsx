'use client';

import { skills, skills_mobile } from '@/constants/skills';
import styles from './Skills.module.scss';
import { clsx } from 'clsx';
import { useViewports } from '@/hook/useViewports';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Skills = () => {
  const { breakpoint } = useViewports();
  const titleRef = useRef(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  const skillsToRender = breakpoint === 'mobile' ? skills_mobile : skills;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = titleRef.current;

    // Hide elements initially
    gsap.set(title, { opacity: 0, y: 50 });
    skillsRef.current.forEach((skill) => {
      if (skill) gsap.set(skill, { opacity: 0, scale: 0.8 });
    });

    // Animate section title
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        once: true,
      },
    });

    // Animate each skill individually when it becomes visible, only once
    skillsRef.current.forEach((skill) => {
      if (!skill) return;
      gsap.to(skill, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: skill,
          start: 'top 80%',
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    const skill = skillsRef.current[index];
    if (skill) {
      gsap.to(skill, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const skill = skillsRef.current[index];
    if (skill) {
      gsap.to(skill, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <h2 ref={titleRef}>
        My main <span>Skills</span>
      </h2>
      <div className={styles.grid}>
        {skillsToRender.map((skill, index) =>
          skill ? (
            <div
              key={index}
              className={clsx(styles.item, skill.favorite && styles.large)}
              ref={(el) => {
                skillsRef.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {skill.icon}
            </div>
          ) : (
            <div key={index} className={styles.empty}></div>
          ),
        )}
      </div>
    </section>
  );
};
