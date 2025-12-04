import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { skillCategories, getSkillsByCategory } from '@/data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>('ai');

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'expert':
        return 'Especialista';
      case 'advanced':
        return 'Avançado';
      case 'intermediate':
        return 'Intermediário';
      case 'beginner':
        return 'Iniciante';
      default:
        return 'Iniciante';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Habilidades & Tecnologias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino, organizadas por categoria.
            Sempre aprendendo e evoluindo.
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
          {Object.entries(skillCategories).map(([key, label]) => (
            <Button
              key={key}
              variant={activeCategory === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(key as keyof typeof skillCategories)}
            >
              {label}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getSkillsByCategory(activeCategory).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            skill.level === 'expert'
                              ? '100%'
                              : skill.level === 'advanced'
                              ? '80%'
                              : skill.level === 'intermediate'
                              ? '60%'
                              : '40%',
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Sempre Aprendendo</h3>
              <p className="text-muted-foreground mb-6">
                Constantemente explorando novas tecnologias e melhorando minhas habilidades.
                Atualmente focado em IA, Cloud Computing e desenvolvimento mobile.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['🚀 Golang & Rust', '🤖 AI Integration', '☁️ Cloud & DevOps'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
