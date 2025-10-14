import { useState, useEffect } from 'react';
import { UseScrollReturn } from '@/types';

/**
 * Custom hook for tracking scroll position and direction
 */
export function useScroll(): UseScrollReturn {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastScrollX = window.scrollX;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      // Update scroll position
      setScrollY(currentScrollY);
      setScrollX(currentScrollX);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      // Check if scrolled (more than 10px)
      setIsScrolled(currentScrollY > 10);

      lastScrollY = currentScrollY;
      lastScrollX = currentScrollX;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollDirection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollY,
    scrollX,
    scrollDirection,
    isScrolled,
  };
}
