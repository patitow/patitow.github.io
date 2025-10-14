// Core Types
export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Project Types
export type ProjectCategory = 'web' | 'game' | 'mobile' | 'ai';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'on-hold';

export interface ProjectLinks {
  demo?: string;
  github?: string;
  itch?: string;
  playstore?: string;
  appstore?: string;
}

export interface Project extends BaseEntity {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  links: ProjectLinks;
  featured: boolean;
  year: number;
  image?: string;
  tags?: string[];
}

// Skill Types
export type SkillCategory = 'frontend' | 'backend' | 'ai' | 'mobile' | 'game' | 'design' | 'tools';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill extends BaseEntity {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon?: string;
  yearsOfExperience?: number;
}

// Contact Types
export interface ContactMethod {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  description: string;
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Animation Types
export interface AnimationVariants {
  hidden: object;
  visible: object;
  exit?: object;
}

export interface AnimationConfig {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  whileInView?: object;
  viewport?: object;
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system';

// API Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  subject: string;
  message: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

// Component Props Types
export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Validation Types
export interface ValidationResult {
  category: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
}

export interface ValidationTest {
  name: string;
  status: 'PASS' | 'FAIL' | 'WARNING' | 'PENDING';
  message: string;
  details?: any;
}

// Constants Types
export interface AppConfig {
  name: string;
  version: string;
  author: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Hook Types
export interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T) => void;
  removeValue: () => void;
}

export interface UseScrollReturn {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

// Performance Types
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}
