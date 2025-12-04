import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code, Gamepad2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export default function About() {
  const stats = [
    { icon: <Code className="w-5 h-5" />, label: "Projetos Web", value: "15+" },
    { icon: <Gamepad2 className="w-5 h-5" />, label: "Jogos", value: "4+" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Anos de Experiência", value: "4+" },
    { icon: <Code className="w-5 h-5" />, label: "Projetos Acadêmicos", value: "10+" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Sobre Mim
            </motion.h2>

            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg">
                Olá! Sou <span className="text-foreground font-semibold">Matheus Souza de Oliveira</span>,
                também conhecido como <span className="text-foreground font-semibold">Patitow</span>.
                Desenvolvedor fullstack apaixonado por criar experiências digitais únicas.
              </p>

              <p>
                Com mais de <span className="text-foreground font-semibold">4 anos de experiência</span>,
                trabalho com React, Node.js, Unity e Godot. Foco em Ciência de Dados e IA,
                criando soluções que combinam funcionalidade e estética.
              </p>

              <p>
                <span className="text-foreground font-semibold">Engenheiro da Computação (UPE)</span> e
                <span className="text-foreground font-semibold"> mestrando em Engenharia da Computação</span>.
                Entusiasta do desenvolvimento de jogos independentes.
              </p>
            </motion.div>

            {/* Location & Education */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Recife, Pernambuco, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>UPE - Eng. Computação (Formado + Mestrado)</span>
              </div>
            </motion.div>
          </div>

          {/* Stats & Interests */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Interesses & Paixões</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🎮 Game Development",
                      "🤖 AI & Machine Learning",
                      "☁️ Cloud Computing",
                      "🎨 UI/UX Design",
                      "🚀 Startups & Innovation",
                      "📚 Lifelong Learning",
                    ].map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1.5 text-sm bg-secondary rounded-full text-secondary-foreground"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
