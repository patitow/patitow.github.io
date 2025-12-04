import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects, featuredProjects, webProjects, gameProjects, mobileProjects } from '@/data/projects';
import { Button } from '@/components/ui/Button';

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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Meus Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos projetos que desenvolvi, desde aplicações web modernas até jogos interativos.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category.id as any)}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
            <p className="text-muted-foreground">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
