'use client';

import { skills, skills_mobile } from '@/constants/skills';
import styles from './Skills.module.scss';
import { clsx } from 'clsx';
import { useViewports } from '@/hook/useViewports';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlowingEffect } from '@/components/common/GlowingEffect';
import { usePrefersReducedMotion } from '@/hook/usePrefersReducedMotion';

export const Skills = () => {
  const { breakpoint } = useViewports();
  const prefersReducedMotion = usePrefersReducedMotion();
  const titleRef = useRef(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  const skillsToRender = breakpoint === 'mobile' ? skills_mobile : skills;

  useEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const title = titleRef.current;

    // Hide elements initially
    gsap.set(title, { opacity: 0, y: 50 });
    for (const skill of skillsRef.current) {
      if (skill) gsap.set(skill, { opacity: 0, scale: 0.8 });
    }

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
    for (const skill of skillsRef.current) {
      if (!skill) continue;
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
    }

    return () => {
      for (const trigger of ScrollTrigger.getAll()) trigger.kill();
    };
  }, [prefersReducedMotion]);

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
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={100}
                glow={true}
                disabled={false}
                proximity={40}
                inactiveZone={0.3}
                movementDuration={2}
              />
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
