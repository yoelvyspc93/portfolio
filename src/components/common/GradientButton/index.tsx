'use client';

import { ReactNode } from 'react';
import styles from './GradientButton.module.scss';

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
  if (href) {
    return (
      <a
        aria-label="gradient button"
        href={href}
        className={styles.gradient_button}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label="gradient button"
      type={type}
      className={styles.gradient_button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
