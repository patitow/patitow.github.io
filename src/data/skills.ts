import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'expert', category: 'frontend' },
  { name: 'Next.js', level: 'advanced', category: 'frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { name: 'JavaScript', level: 'expert', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
  { name: 'Angular', level: 'advanced', category: 'frontend' },
  { name: 'React Native', level: 'intermediate', category: 'frontend' },
  { name: 'Svelte', level: 'intermediate', category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 'advanced', category: 'backend' },
  { name: 'Express', level: 'advanced', category: 'backend' },
  { name: 'Python', level: 'advanced', category: 'backend' },
  { name: 'PostgreSQL', level: 'intermediate', category: 'backend' },
  { name: 'MongoDB', level: 'intermediate', category: 'backend' },
  { name: 'Redis', level: 'intermediate', category: 'backend' },

  // AI & Data Science
  { name: 'Machine Learning', level: 'intermediate', category: 'ai' },
  { name: 'Deep Learning', level: 'intermediate', category: 'ai' },
  { name: 'TensorFlow', level: 'intermediate', category: 'ai' },
  { name: 'PyTorch', level: 'intermediate', category: 'ai' },
  { name: 'Pandas', level: 'advanced', category: 'ai' },
  { name: 'NumPy', level: 'advanced', category: 'ai' },
  { name: 'Scikit-learn', level: 'intermediate', category: 'ai' },
  { name: 'OpenCV', level: 'beginner', category: 'ai' },

  // Mobile
  { name: 'React Native', level: 'intermediate', category: 'mobile' },
  { name: 'Flutter', level: 'beginner', category: 'mobile' },

  // Game Development
  { name: 'Unity', level: 'advanced', category: 'game' },
  { name: 'Godot', level: 'advanced', category: 'game' },
  { name: 'C#', level: 'advanced', category: 'game' },
  { name: 'GDScript', level: 'advanced', category: 'game' },
  { name: 'Blender', level: 'intermediate', category: 'game' },

  // Design & Tools
  { name: 'Figma', level: 'intermediate', category: 'design' },
  { name: 'Photoshop', level: 'intermediate', category: 'design' },
  { name: 'Illustrator', level: 'intermediate', category: 'design' },
  { name: 'Docker', level: 'intermediate', category: 'tools' },
  { name: 'Git', level: 'advanced', category: 'tools' },
  { name: 'AWS', level: 'intermediate', category: 'tools' },
  { name: 'Firebase', level: 'intermediate', category: 'tools' },
];

export const skillCategories = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI & Data Science',
  mobile: 'Mobile',
  game: 'Game Development',
  design: 'Design',
  tools: 'Tools & DevOps'
};

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};
