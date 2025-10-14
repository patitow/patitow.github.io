import { AnimationVariants, AnimationConfig } from '@/types';
import { ANIMATION_CONFIG } from '@/constants';

/**
 * Common animation variants for Framer Motion
 */
export const fadeInUp: AnimationVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

export const fadeInLeft: AnimationVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

export const fadeInRight: AnimationVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

export const scaleIn: AnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

export const staggerContainer: AnimationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.delays.stagger,
      delayChildren: ANIMATION_CONFIG.delays.sequential,
    },
  },
};

export const staggerItem: AnimationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

/**
 * Animation configurations for common use cases
 */
export const animationConfigs = {
  // Section animations
  section: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: ANIMATION_CONFIG.duration.slow, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 },
  },

  // Card animations
  card: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: ANIMATION_CONFIG.duration.normal, ease: 'easeOut' },
    viewport: { once: true },
  },

  // Button animations
  button: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: ANIMATION_CONFIG.duration.fast },
  },

  // Text animations
  text: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: ANIMATION_CONFIG.duration.normal, ease: 'easeOut' },
    viewport: { once: true },
  },

  // Icon animations
  icon: {
    whileHover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: ANIMATION_CONFIG.duration.fast }
    },
    whileTap: { 
      scale: 0.9,
      transition: { duration: ANIMATION_CONFIG.duration.fast }
    },
  },
};

/**
 * Creates staggered animation delay for multiple items
 */
export function createStaggerDelay(index: number, baseDelay: number = 0.1): number {
  return baseDelay * index;
}

/**
 * Creates sequential animation delay
 */
export function createSequentialDelay(index: number, baseDelay: number = 0.2): number {
  return baseDelay * index;
}
