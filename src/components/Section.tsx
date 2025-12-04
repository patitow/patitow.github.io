import { motion } from 'framer-motion';
import { SectionProps } from '@/types';
import { animationConfigs } from '@/utils/animations';
import { cn } from '@/lib/utils';

export default function Section({ 
  id, 
  children, 
  className = '' 
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn('relative', className)}
      initial={animationConfigs.section.initial}
      whileInView={animationConfigs.section.whileInView}
      viewport={animationConfigs.section.viewport}
      transition={animationConfigs.section.transition}
    >
      {children}
    </motion.section>
  );
}
