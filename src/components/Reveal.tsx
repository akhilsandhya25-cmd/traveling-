import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

/**
 * Editorial scroll-triggered reveal wrapper with gentle upward glide.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  yOffset = 28,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{
        duration: 0.85,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MaskedLineProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Masked editorial typography reveal: glides up cleanly from behind a clip mask.
 */
export function MaskedLine({
  children,
  className = '',
  delay = 0,
}: MaskedLineProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: '108%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{
          duration: 0.95,
          delay,
          ease: EDITORIAL_EASE,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface HairlineProps {
  className?: string;
  delay?: number;
}

/**
 * Draws a crisp horizontal hairline rule from left to right on scroll reveal.
 */
export function AnimatedRule({ className = '', delay = 0.1 }: HairlineProps) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.8, delay, ease: EDITORIAL_EASE }}
      className={`block origin-left ${className}`}
    />
  );
}
