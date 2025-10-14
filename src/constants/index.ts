import { AppConfig, NavigationItem, ProjectCategory, SkillCategory } from '@/types';

// App Configuration
export const APP_CONFIG: AppConfig = {
  name: 'Matheus Souza de Oliveira - Portfolio',
  version: '1.0.0',
  author: {
    name: 'Matheus Souza de Oliveira',
    email: 'patitowdev@gmail.com',
    github: 'https://github.com/patitow',
    linkedin: 'https://www.linkedin.com/in/patitow/',
  },
  seo: {
    title: 'Matheus Souza de Oliveira - Fullstack Developer & Game Developer',
    description: 'Desenvolvedor Fullstack e Game Developer especializado em React, Node.js, Unity e Godot. Engenheiro da Computação formado na UPE com foco em Ciência de Dados e IA.',
    keywords: [
      'Matheus Souza de Oliveira',
      'Fullstack Developer',
      'Game Developer',
      'React',
      'Node.js',
      'Unity',
      'Godot',
      'TypeScript',
      'Portfolio',
      'Engenheiro da Computação',
      'UPE',
      'Ciência de Dados',
      'IA',
      'Machine Learning',
    ],
  },
};

// Navigation Items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

// Project Categories
export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
  web: 'Web Apps',
  game: 'Jogos',
  mobile: 'Mobile',
  ai: 'AI & Data Science',
};

// Skill Categories
export const SKILL_CATEGORIES: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI & Data Science',
  mobile: 'Mobile',
  game: 'Game Development',
  design: 'Design',
  tools: 'Tools & DevOps',
};

// Animation Configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeInOut: 'ease-in-out',
    easeOut: 'ease-out',
    easeIn: 'ease-in',
  },
  delays: {
    stagger: 0.1,
    sequential: 0.2,
  },
};

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-Index Layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
  validator: 9999,
} as const;

// Color Palette
export const COLORS = {
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
} as const;

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/patitow',
  linkedin: 'https://www.linkedin.com/in/patitow/',
  itch: 'https://patitow.itch.io/',
  email: 'mailto:patitowdev@gmail.com',
} as const;

// Validation Messages
export const VALIDATION_MESSAGES = {
  required: 'Este campo é obrigatório',
  email: 'Por favor, insira um email válido',
  minLength: (min: number) => `Mínimo de ${min} caracteres`,
  maxLength: (max: number) => `Máximo de ${max} caracteres`,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Algo deu errado. Tente novamente.',
  network: 'Erro de conexão. Verifique sua internet.',
  validation: 'Por favor, verifique os dados inseridos.',
  notFound: 'Recurso não encontrado.',
  unauthorized: 'Acesso não autorizado.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  contactSent: 'Mensagem enviada com sucesso!',
  dataLoaded: 'Dados carregados com sucesso!',
  actionCompleted: 'Ação realizada com sucesso!',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-language',
  preferences: 'portfolio-preferences',
} as const;

// API Endpoints (if needed in the future)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  analytics: '/api/analytics',
} as const;

// Performance Thresholds
export const PERFORMANCE_THRESHOLDS = {
  maxLoadTime: 3000, // 3 seconds
  maxRenderTime: 100, // 100ms
  maxInteractionTime: 50, // 50ms
} as const;
