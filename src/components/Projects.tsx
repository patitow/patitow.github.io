import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import ProjectCard from '@/components/ProjectCard';
import { projects, featuredProjects, webProjects, gameProjects, mobileProjects } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'featured' | 'web' | 'game' | 'mobile'>('featured');

  const getProjectsByCategory = () => {
    switch (activeCategory) {
      case 'featured':
        return featuredProjects;
      case 'web':
        return webProjects;
      case 'game':
        return gameProjects;
      case 'mobile':
        return mobileProjects;
      default:
        return projects;
    }
  };

  const categories = [
    { id: 'featured', label: 'Destaques', count: featuredProjects.length },
    { id: 'web', label: 'Web Apps', count: webProjects.length },
    { id: 'game', label: 'Jogos', count: gameProjects.length },
    { id: 'mobile', label: 'Mobile', count: mobileProjects.length },
    { id: 'all', label: 'Todos', count: projects.length },
  ];

  return (
    <div className="gradient-projects section-auto px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Meus Projetos
          </h2>
          <p className="text-lg sm:text-xl text-body-contrast max-w-3xl mx-auto px-4 sm:px-0">
            Uma seleção dos projetos que desenvolvi, desde aplicações web modernas até jogos interativos.
            Cada projeto representa um desafio único e uma oportunidade de aprender algo novo.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "glass" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id as any)}
              className="relative"
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {getProjectsByCategory().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {getProjectsByCategory().length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-medium-contrast text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
