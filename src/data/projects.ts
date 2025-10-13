export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'game' | 'mobile' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  links: {
    demo?: string;
    github?: string;
    itch?: string;
    website?: string;
  };
  image?: string;
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'fifty-imobi',
    title: 'Fifty Imobi',
    description: 'Plataforma imobiliária completa com sistema de busca avançada, gestão de propriedades e integração com APIs de localização.',
    longDescription: 'Fifty Imobi é uma plataforma web completa para o mercado imobiliário, desenvolvida com tecnologias modernas. O sistema oferece funcionalidades avançadas de busca, filtros inteligentes, visualização de propriedades em 360°, integração com mapas interativos e sistema de agendamento de visitas.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    category: 'web',
    status: 'in-progress',
    links: {
      demo: 'https://fiftyimobi.com'
    },
    featured: true,
    year: 2024
  },
  {
    id: 'polimap',
    title: 'Polimap',
    description: 'Navegador 3D interativo do campus da POLI/UPE com sistema de roteamento inteligente e modo autopilot.',
    longDescription: 'Polimap é um jogo de navegação 3D desenvolvido em Godot que permite explorar o campus da POLI/UPE de forma imersiva. Com sistema de busca por salas, roteamento automático, modo autopilot e interface intuitiva, facilita a locomoção de estudantes e visitantes pelo campus.',
    technologies: ['Godot', 'GDScript', '3D Modeling', 'Blender'],
    category: 'game',
    status: 'completed',
    links: {
      demo: 'https://polimap.vercel.app',
      itch: 'https://patitow.itch.io/polimap',
      github: 'https://github.com/patitow/polimap'
    },
    featured: true,
    year: 2024
  },
  {
    id: 'polimon',
    title: 'Polimon',
    description: 'JRPG estilo Pocket Monsters ambientado no campus da universidade, desenvolvido para projeto acadêmico.',
    longDescription: 'Polimon é um jogo de RPG por turnos inspirado em Pokémon, completamente ambientado no campus da universidade. Desenvolvido em Unity durante o curso de Engenharia de Software, o jogo apresenta mecânicas de captura de monstros, batalhas estratégicas e uma história divertida envolvendo o ambiente acadêmico.',
    technologies: ['Unity', 'C#', '2D Art', 'Game Design'],
    category: 'game',
    status: 'completed',
    links: {
      itch: 'https://joaogabrieltg.itch.io/polimon'
    },
    featured: true,
    year: 2022
  },
  {
    id: 'avenge-mst',
    title: 'A Vingança do MST',
    description: 'Jogo 3D de fazenda educacional focado em sustentabilidade e agricultura, desenvolvido para disciplina de Computação Gráfica.',
    longDescription: 'A Vingança do MST é um jogo 3D de simulação de fazenda que ensina sobre os Objetivos de Desenvolvimento Sustentável (ODS 2 - Fome Zero) e agricultura sustentável. Os jogadores podem plantar, colher, arar terras, vender produtos e fazer doações, tudo enquanto aprendem sobre práticas agrícolas sustentáveis.',
    technologies: ['Godot', 'GDScript', '3D Graphics', 'Educational Game Design'],
    category: 'game',
    status: 'completed',
    links: {
      itch: 'https://patitow.itch.io/a-vinganca-do-mst'
    },
    featured: false,
    year: 2024
  },
  {
    id: 'conflicts-dev',
    title: 'Conflicts.Dev',
    description: 'Jogo mobile educativo sobre resolução de conflitos para desenvolvedores, desenvolvido durante pesquisa científica.',
    longDescription: 'Conflicts.Dev é um jogo mobile educativo que simula situações de conflito no ambiente de desenvolvimento de software. Os jogadores recebem cartas com diferentes cenários de conflito e devem escolher respostas não ofensivas. O jogo foi desenvolvido como parte de uma pesquisa científica para mestrado em Engenharia de Conflitos.',
    technologies: ['Unity', 'C#', 'Mobile Development', 'Educational Design'],
    category: 'mobile',
    status: 'completed',
    links: {
      itch: 'https://patitow.itch.io/conflicts-dev'
    },
    featured: false,
    year: 2021
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    description: 'Clone do Spotify desenvolvido em colaboração, com interface moderna e funcionalidades de reprodução de música.',
    longDescription: 'Clone do Spotify desenvolvido em colaboração com Alexandre Rodolfo, Lucas Maciel e Samuel Lima. O projeto replica as principais funcionalidades do Spotify com interface moderna, sistema de reprodução de música, playlists e busca avançada.',
    technologies: ['JavaScript', 'Python', 'Flask', 'HTML', 'CSS'],
    category: 'web',
    status: 'completed',
    links: {
      github: 'https://github.com/patitow/SpotifyClone'
    },
    featured: false,
    year: 2023
  },
  {
    id: 'nlw-agents',
    title: 'NLW Agents',
    description: 'Sistema completo de IA com agentes inteligentes, desenvolvido com React, Node.js e integração com APIs de IA.',
    longDescription: 'Sistema completo de agentes de IA desenvolvido durante o NLW (Next Level Week). O projeto inclui uma aplicação web moderna com React, backend robusto em Node.js e integração com APIs de inteligência artificial para criar agentes conversacionais inteligentes.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AI Integration', 'Prisma'],
    category: 'web',
    status: 'completed',
    links: {
      github: 'https://github.com/patitow/nlw-agents-server'
    },
    featured: false,
    year: 2024
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export const webProjects = projects.filter(project => project.category === 'web');
export const gameProjects = projects.filter(project => project.category === 'game');
export const mobileProjects = projects.filter(project => project.category === 'mobile');
