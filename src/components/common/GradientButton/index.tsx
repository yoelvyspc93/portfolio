'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './GradientButton.module.scss';
import ArrowIcon from '../Icons/ArrowIcon';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

export const GradientButton = ({
  type = 'button',
  children,
  onClick,
  href,
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (arrowRef.current && contentRef.current) {
      gsap.set(arrowRef.current, { opacity: 0, x: 8, y: 1 });
      gsap.set(contentRef.current, { x: 10 });
    }
  }, []);

  const handleMouseEnter = () => {
    if (contentRef.current && arrowRef.current) {
      gsap.to(contentRef.current, { duration: 0.3, x: 0 });
      gsap.to(arrowRef.current, { duration: 0.3, opacity: 1, x: 0 });
    }
  };

  const handleMouseLeave = () => {
    if (contentRef.current && arrowRef.current) {
      gsap.to(contentRef.current, { duration: 0.3, x: 10 });
      gsap.to(arrowRef.current, { duration: 0.3, opacity: 0, x: 8 });
    }
  };

  if (href) {
    return (
      <a
        ref={anchorRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="gradient button"
        href={href}
        className={styles.gradient_button}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span ref={contentRef}>{children}</span>
        <span ref={arrowRef}>
          <ArrowIcon width={16} height={16} color="#fff" />
        </span>
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="gradient button"
      type={type}
      className={styles.gradient_button}
      onClick={onClick}
    >
      <span ref={contentRef}>{children}</span>
      <span ref={arrowRef}>
        <ArrowIcon width={16} height={16} color="#fff" />
      </span>
    </button>
  );
};
