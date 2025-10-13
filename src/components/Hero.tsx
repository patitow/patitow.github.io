import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient with parallax effect */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Animated background elements with improved performance */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 glass rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 glass rounded-full opacity-10"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.05, 1],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 glass rounded-full opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full glass border-4 border-white/20 overflow-hidden"
            variants={itemVariants}
          >
            <img 
              src="/profilePic.png" 
              alt="Matheus Souza de Oliveira" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
            variants={itemVariants}
          >
            Matheus Souza de Oliveira
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-300 mb-6"
            variants={itemVariants}
          >
            Fullstack Developer & Game Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Desenvolvedor apaixonado por criar experiências digitais incríveis. 
            Especializado em React, Node.js, Unity e Godot, com foco em Ciência de Dados e IA.
            Engenheiro da Computação formado na UPE e mestrando em Engenharia da Computação.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Button variant="glass" size="lg" className="px-8">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="px-8" onClick={() => {
              const contactSection = document.querySelector('#contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Mail className="w-5 h-5 mr-2" />
              Contato
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/patitow"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/patitow/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://patitow.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-bold">🎮</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
