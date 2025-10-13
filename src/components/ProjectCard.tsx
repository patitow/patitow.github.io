import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
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
        return 'text-purple-400';
      case 'web':
        return 'text-blue-400';
      case 'mobile':
        return 'text-green-400';
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
      <Card variant="glass" className="h-full glass-hover">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className={`flex items-center space-x-2 ${getCategoryColor(project.category)}`}>
              {getCategoryIcon(project.category)}
              <span className="text-sm font-medium capitalize">{project.category}</span>
            </div>
            <span className="text-sm text-gray-400">{project.year}</span>
          </div>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="text-gray-300">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs glass rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs glass rounded-full text-gray-400">
                +{project.technologies.length - 4} mais
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium ${
              project.status === 'completed' ? 'text-green-400' : 
              project.status === 'in-progress' ? 'text-yellow-400' : 
              'text-gray-400'
            }`}>
              {project.status === 'completed' ? '✅ Concluído' : 
               project.status === 'in-progress' ? '🔄 Em desenvolvimento' : 
               '📋 Planejado'}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2">
          {project.links.demo && (
            <Button variant="glass" size="sm" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {project.links.itch && (
            <Button variant="glass" size="sm" asChild>
              <a href={project.links.itch} target="_blank" rel="noopener noreferrer">
                <Gamepad2 className="w-4 h-4 mr-2" />
                itch.io
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
