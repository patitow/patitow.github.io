import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { ExternalLink, Github, Gamepad2 } from 'lucide-react';
import { Project } from '@/types';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-10">{getCategoryIcon(project.category)}</div>
          </div>
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                project.category === 'game'
                  ? 'bg-purple-500/20 text-purple-700 dark:text-purple-300'
                  : project.category === 'web'
                  ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
                  : 'bg-green-500/20 text-green-700 dark:text-green-300'
              }`}
            >
              {project.category === 'game' ? '🎮 Jogo' : project.category === 'web' ? '🌐 Web' : '📱 Mobile'}
            </span>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 5).map((tech: string) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 text-xs text-muted-foreground">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                project.status === 'completed'
                  ? 'bg-green-500/20 text-green-700 dark:text-green-300'
                  : project.status === 'in-progress'
                  ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
                  : 'bg-gray-500/20 text-gray-700 dark:text-gray-300'
              }`}
            >
              {project.status === 'completed'
                ? '✅ Concluído'
                : project.status === 'in-progress'
                ? '🔄 Em desenvolvimento'
                : '📋 Planejado'}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full sm:w-auto"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          )}
          {project.links.itch && (
            <a
              href={project.links.itch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full sm:w-auto"
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              itch.io
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
