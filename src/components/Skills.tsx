import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>('ai');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'text-green-400';
      case 'advanced':
        return 'text-blue-400';
      case 'intermediate':
        return 'text-yellow-400';
      case 'beginner':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'expert':
        return 'w-full';
      case 'advanced':
        return 'w-4/5';
      case 'intermediate':
        return 'w-3/5';
      case 'beginner':
        return 'w-2/5';
      default:
        return 'w-1/5';
    }
  };

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
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Habilidades & Tecnologias
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino, organizadas por categoria. 
            Estou sempre aprendendo e evoluindo para acompanhar as últimas tendências do mercado.
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
          {Object.entries(skillCategories).map(([key, label]) => (
            <Button
              key={key}
              variant={activeCategory === key ? "glass" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(key as keyof typeof skillCategories)}
            >
              {label}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="glass rounded-2xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getSkillsByCategory(activeCategory).map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className={`text-sm ${getLevelColor(skill.level)}`}>
                    {getLevelLabel(skill.level)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${getLevelWidth(skill.level)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: getLevelWidth(skill.level).replace('w-', '').replace('/', '') + '%' }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Sempre Aprendendo
            </h3>
            <p className="text-gray-400 mb-4">
              Estou constantemente explorando novas tecnologias e melhorando minhas habilidades. 
              Atualmente focado em IA, Cloud Computing e desenvolvimento mobile.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 glass rounded-full text-sm text-gray-300">
                🚀 Next Steps: Golang & Rust
              </span>
              <span className="px-3 py-1 glass rounded-full text-sm text-gray-300">
                🤖 AI Integration
              </span>
              <span className="px-3 py-1 glass rounded-full text-sm text-gray-300">
                ☁️ Cloud & DevOps
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
