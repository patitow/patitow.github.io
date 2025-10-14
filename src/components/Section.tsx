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
      {/* Subtle background gradient for each section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
