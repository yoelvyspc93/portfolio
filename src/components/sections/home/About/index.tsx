'use client';
import { useEffect, useMemo, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './About.module.scss';

interface SegmenterOptions {
  granularity: 'grapheme' | 'word' | 'sentence';
}

interface SegmentData {
  segment: string;
  index: number;
  input: string;
}

interface Segmenter {
  segment(input: string): Iterable<SegmentData>;
}

interface IntlWithSegmenter {
  Segmenter: {
    new (locale?: string, options?: SegmenterOptions): Segmenter;
  };
}

const normalize = (s: string) =>
  String(s ?? '')
    .normalize('NFC')
    .replaceAll('\u00A0', ' ');

const toGraphemes = (s: string) => {
  const str = normalize(s);
  if (typeof (Intl as IntlWithSegmenter)?.Segmenter === 'function') {
    const seg = new (Intl as IntlWithSegmenter).Segmenter(undefined, {
      granularity: 'grapheme',
    });
    return Array.from(seg.segment(str), (x: SegmentData) => x.segment);
  }
  return [...str];
};

export function About() {
  const { t } = useTranslation('about');
  const refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef<HTMLElement | null>(null);

  const setRef = useCallback(
    (index: number) => (el: HTMLSpanElement | null) => {
      if (el) refs.current[index] = el;
    },
    [],
  );

  const renderContent = (phrase: string) => {
    refs.current.length = 0;
    const words = normalize(phrase).split(/\s+/);
    let idx = 0;

    return words.map((w, wi) => (
      <p key={`w-${wi}`}>
        {toGraphemes(w).map((g) => {
          const i = idx++;
          return (
            <span key={`c-${i}`} ref={setRef(i)}>
              {g}
            </span>
          );
        })}
      </p>
    ));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(refs.current, {
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: '50% 90%',
          end: `+=${window.innerHeight / 2.5}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const phrase = t('description');
  const content = useMemo(() => renderContent(phrase), [phrase]);

  return (
    <section ref={container} className={styles.about}>
      <div className={styles.content}>{content}</div>
    </section>
  );
}
