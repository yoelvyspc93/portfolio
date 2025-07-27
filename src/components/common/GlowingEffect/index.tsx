'use client';

import { memo, useCallback, useEffect, useRef } from 'react';
import styles from './GlowingEffect.module.scss';
import { clsx } from 'clsx';
import gsap from 'gsap';

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: 'default' | 'white';
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = 'default',
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current || !glowRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          const glowElement = glowRef.current;
          if (!element || !glowElement) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1],
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            gsap.to(glowElement, {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          if (isActive) {
            gsap.to(glowElement, {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
            });

            const currentAngle = Number.parseFloat(
              glowElement.style.getPropertyValue('--start') || '0',
            );
            let targetAngle =
              (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
                Math.PI +
              90;

            const angleDiff = targetAngle - currentAngle;

            if (angleDiff > 180) {
              targetAngle -= 360;
            } else if (angleDiff < -180) {
              targetAngle += 360;
            }

            gsap.to(glowElement, {
              '--start': targetAngle,
              duration: movementDuration,
              ease: 'power2.out',
            });
          } else {
            gsap.to(glowElement, {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
      },
      [inactiveZone, proximity, movementDuration],
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener('scroll', handleScroll, { passive: true });
      document.body.addEventListener('pointermove', handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener('scroll', handleScroll);
        document.body.removeEventListener('pointermove', handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
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
          ref={containerRef}
          style={
            {
              '--blur': `${blur}px`,
              '--spread': spread,
              '--start': '0',
              '--active': '0',
              '--glowingeffect-border-width': `${borderWidth}px`,
              '--repeating-conic-gradient-times': '5',
            } as React.CSSProperties
          }
          className={clsx(
            styles.container,
            glow && styles.glow,
            blur > 0 && styles.blur,
            className,
            disabled && styles.disabled,
          )}
        >
          <div
            ref={glowRef}
            className={clsx(styles.glowEffect)}
            style={
              {
                '--start': '0',
                '--active': '0',
              } as React.CSSProperties
            }
          />
        </div>
      </>
    );
  },
);

GlowingEffect.displayName = 'GlowingEffect';

export { GlowingEffect };
