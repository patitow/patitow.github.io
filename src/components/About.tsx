import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Code, Gamepad2 } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Code className="w-6 h-6" />, label: "Projetos Web", value: "15+" },
    { icon: <Gamepad2 className="w-6 h-6" />, label: "Jogos Desenvolvidos", value: "4+" },
    { icon: <Calendar className="w-6 h-6" />, label: "Anos de Experiência", value: "4+" },
    { icon: <GraduationCap className="w-6 h-6" />, label: "Projetos Acadêmicos", value: "10+" },
  ];

  return (
    <div className="gradient-about section-full px-6">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Sobre Mim
            </motion.h2>

            <motion.div
              className="space-y-4 text-body-contrast leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                Olá! Sou <span className="text-white font-semibold">Matheus Souza de Oliveira</span>, 
                também conhecido como <span className="gradient-text font-semibold">Patitow</span> (MSO). 
                Sou um desenvolvedor fullstack apaixonado por tecnologia e criador de experiências digitais únicas.
              </p>

              <p>
                Com mais de 4 anos de experiência em desenvolvimento, trabalho principalmente com 
                <span className="text-purple font-medium"> React</span>, 
                <span className="text-purple font-medium"> Node.js</span>, 
                <span className="text-purple-400 font-medium"> Unity</span> e 
                <span className="text-purple-light font-medium"> Godot</span>. 
                Meu foco está em <span className="text-purple font-medium">Ciência de Dados e IA</span>, 
                criando soluções inovadoras que combinam funcionalidade e estética.
              </p>

              <p>
                Sou <span className="text-purple font-medium">Engenheiro da Computação formado na UPE</span> 
                e atualmente cursando <span className="text-purple-400 font-medium">mestrado em Engenharia da Computação</span>. 
                Além do desenvolvimento web, sou um entusiasta do desenvolvimento de jogos, 
                tendo criado vários títulos independentes.
              </p>
            </motion.div>

            {/* Location & Education */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-medium-contrast"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Recife, Pernambuco, Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">UPE - Eng. Computação (Formado + Mestrado)</span>
              </div>
            </motion.div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-2xl p-6 text-center glass-hover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-3 text-purple">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-medium-contrast">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Visual Element */}
            <motion.div
              className="glass rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Interesses & Paixões
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "🎮 Game Development",
                  "🤖 AI & Machine Learning", 
                  "☁️ Cloud Computing",
                  "🎨 UI/UX Design",
                  "🚀 Startups & Innovation",
                  "📚 Lifelong Learning"
                ].map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="px-3 py-2 glass rounded-full text-sm text-glass-contrast"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.9 }}
                    viewport={{ once: true }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
