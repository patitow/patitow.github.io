import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Logo & Description */}
          <div className="mb-8">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold gradient-text">Matheus Souza de Oliveira</span>
            </motion.div>
            <p className="text-medium-contrast max-w-2xl mx-auto">
              Desenvolvedor Fullstack e Game Developer apaixonado por criar 
              experiências digitais únicas e inovadoras.
            </p>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/patitow"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 text-medium-contrast" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/patitow/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-purple" />
            </motion.a>
            <motion.a
              href="mailto:patitowdev@gmail.com"
              className="glass rounded-full p-3 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6 text-purple-light" />
            </motion.a>
            <motion.a
              href="https://patitow.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl">🎮</span>
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="#about" className="text-medium-contrast hover:text-high-contrast transition-colors">
              Sobre
            </a>
            <a href="#projects" className="text-medium-contrast hover:text-high-contrast transition-colors">
              Projetos
            </a>
            <a href="#skills" className="text-medium-contrast hover:text-high-contrast transition-colors">
              Habilidades
            </a>
            <a href="#contact" className="text-medium-contrast hover:text-high-contrast transition-colors">
              Contato
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-medium-contrast text-sm flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span>© {currentYear} Matheus Souza de Oliveira. Feito com</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>em Recife, Brasil.</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
