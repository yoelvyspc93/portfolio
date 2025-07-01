'use client';

import { CustomImage } from '@/components/common/CustomImage';
import styles from './About.module.scss';
import { GradientButton } from '@/components/common/GradientButton';
import { aboutInfo } from '@/constants/about';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { Modal } from '@/components/common/Modal';
import { AboutModal } from '@/components/common/AboutModal';
import { createPortal } from 'react-dom';

const list: string[] = [
  '/images/images.webp',
  '/images/images.webp',
  '/images/images.webp',
  '/images/images.webp',
  '/images/images.webp',
  '/images/images.webp',
];

export const About: React.FC = () => {
  const list1Ref = useRef<HTMLDivElement | null>(null);
  const list2Ref = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (list1Ref.current && list2Ref.current) {
        gsap.to(list1Ref.current, {
          y: '-30%',
          ease: 'none',
          scrollTrigger: {
            trigger: list1Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(list2Ref.current, {
          y: '30%',
          ease: 'none',
          scrollTrigger: {
            trigger: list2Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      gsap.from([titleRef.current, descRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const aboutButton = () => {
    setOpenModal(true);
  };

  return (
    <>
      <section ref={sectionRef} id="about" className={styles.about}>
        <div className={styles.about__info}>
          <h2 ref={titleRef} className={styles.title}>
            <span className={styles.title__small}>I AM</span>{' '}
            <span className={styles.title__gradient}>FRONTEND DEVELOPER</span>{' '}
            <span className={styles.title__small}>and</span> INSPIRED{' '}
            <span className={styles.title__small}>by</span> TECHNOLOGY{' '}
            <span className={styles.title__small}>and</span> INNOVATION
          </h2>
          <p ref={descRef}>{aboutInfo.shortDescription}</p>
          <div ref={buttonRef} data-blendy-from="modal-about">
            <GradientButton onClick={aboutButton}>See More</GradientButton>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.gallery__section} ref={list1Ref}>
            {list.map((item, index) => (
              <div key={index} className={styles.gallery__item}>
                <CustomImage src={item} alt="about project" fill blur />
              </div>
            ))}
          </div>
          <div className={styles.gallery__section} ref={list2Ref}>
            {list.map((item, index) => (
              <div key={index} className={styles.gallery__item}>
                <CustomImage src={item} alt="about project" fill blur />
              </div>
            ))}
          </div>
        </div>
      </section>
      {isOpenModal &&
        createPortal(
          <Modal title="About" isOpen>
            <AboutModal />
          </Modal>,
          document.body,
        )}
    </>
  );
};
