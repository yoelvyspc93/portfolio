'use client';

import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  className?: string;
}

export const Button = ({
  type = 'button',
  children,
  onClick,
  href,
  className,
}: Props) => {
  if (href) {
    return (
      <a
        aria-label="button"
        href={href}
        className={`${styles.button} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.button__dot} />
        <span className={styles.button__content}>{children}</span>
      </a>
    );
  }

  return (
    <button
      aria-label="button"
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      <span className={styles.button__dot} />
      <span className={styles.button__content}>{children}</span>
    </button>
  );
};
