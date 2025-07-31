'use client';

import { memo } from 'react';
import { clsx } from 'clsx';
import styles from './GlowingEffect.module.scss';

interface GlowingEffectProps {
  variant?: 'default' | 'white';
  glow?: boolean;
  className?: string;
  disabled?: boolean;
}

const GlowingEffect = memo(
  ({
    variant = 'default',
    glow = false,
    className,
    disabled = true,
  }: GlowingEffectProps) => (
    <>
      <div
        className={clsx(
          styles.border,
          glow && styles.glow,
          variant === 'white' && styles.white,
          disabled && styles.disabled,
        )}
      />
      <div
        className={clsx(
          styles.container,
          glow && styles.glow,
          className,
          disabled && styles.disabled,
        )}
      >
        <div className={styles.glowEffect} />
      </div>
    </>
  ),
);

GlowingEffect.displayName = 'GlowingEffect';

export { GlowingEffect };
