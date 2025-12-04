import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { ExternalLink, Github, Gamepad2 } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'game':
        return <Gamepad2 className="w-4 h-4" />;
      case 'web':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'game':
        return 'text-gray-300';
      case 'web':
        return 'text-gray-300';
      case 'mobile':
        return 'text-gray-300';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full glass glass-hover card-hover">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className={`flex items-center space-x-2 ${getCategoryColor(project.category)}`}>
              {getCategoryIcon(project.category)}
              <span className="text-sm font-medium capitalize">{project.category}</span>
            </div>
            <span className="text-sm text-medium-contrast">{project.year}</span>
          </div>
          <CardTitle className="text-xl text-high-contrast">{project.title}</CardTitle>
          <CardDescription className="text-medium-contrast">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs glass rounded-full text-medium-contrast"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs glass rounded-full text-medium-contrast">
                +{project.technologies.length - 4} mais
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium ${
              project.status === 'completed' ? 'text-gray-300' : 
              project.status === 'in-progress' ? 'text-purple-light' : 
              'text-gray-400'
            }`}>
              {project.status === 'completed' ? '✅ Concluído' : 
               project.status === 'in-progress' ? '🔄 Em desenvolvimento' : 
               '📋 Planejado'}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-3 pt-4">
          {project.links.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo do projeto ${project.title}`}
              className="flex-1 min-w-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="glass rounded-xl p-3 text-center glass-hover">
                <ExternalLink className="w-5 h-5 mx-auto mb-2 text-purple group-hover:text-purple-light transition-colors" />
                <span className="text-sm font-medium text-high-contrast group-hover:text-white transition-colors">
                  Demo
                </span>
              </div>
            </motion.a>
          )}
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
              className="flex-1 min-w-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="glass rounded-xl p-3 text-center glass-hover">
                <Github className="w-5 h-5 mx-auto mb-2 text-medium-contrast group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-high-contrast group-hover:text-white transition-colors">
                  GitHub
                </span>
              </div>
            </motion.a>
          )}
          {project.links.itch && (
            <motion.a
              href={project.links.itch}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Jogar ${project.title} no itch.io`}
              className="flex-1 min-w-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="glass rounded-xl p-3 text-center glass-hover">
                <Gamepad2 className="w-5 h-5 mx-auto mb-2 text-purple group-hover:text-purple-light transition-colors" />
                <span className="text-sm font-medium text-high-contrast group-hover:text-white transition-colors">
                  itch.io
                </span>
              </div>
            </motion.a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
