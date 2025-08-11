'use client';
import styles from './About.module.scss';
import { useRef, useEffect } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useTranslation } from '@/hooks/useTranslation';

export function About() {
  const { t } = useTranslation('about');
  const refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => createAnimation(), container);
    return () => ctx.revert();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,

        scrub: true,

        start: `top`,

        end: `+=${window.innerHeight / 1.5}`,
      },

      opacity: 1,

      ease: 'none',

      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string) => {
    const body = [];
    for (const [i, word] of phrase.split(' ').entries()) {
      const letters = splitLetters(word);
      body.push(<p key={word + '_' + i}>{letters}</p>);
    }
    return body;
  };

  const splitLetters = (word: string) => {
    const letters = [];
    for (const [i, letter] of word.split('').entries()) {
      letters.push(
        <span
          key={letter + '_' + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    }
    return letters;
  };

  const phrase = t('description');

  return (
    <section ref={container} className={styles.about}>
      <div className={styles.content}>{splitWords(phrase)}</div>
    </section>
  );
}
