import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, ArrowDown } from 'lucide-react';
import { smoothScrollTo } from '@/utils/scroll';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Picture */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
              <img
                src="/assets/profilePic.png"
                alt="Matheus Souza"
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-border object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Matheus Souza
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground">
              de Oliveira
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Fullstack Developer & Game Developer
          </motion.p>

          {/* Company Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span>🏢</span>
              <span>Fundador - Patitow Labs</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Criando experiências digitais incríveis com React, Node.js, Unity e Godot.
            Focado em soluções que combinam funcionalidade e estética.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => {
                smoothScrollTo('#contact', 1500);
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Entre em Contato
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                smoothScrollTo('#projects', 1500);
              }}
            >
              Ver Projetos
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={() => {
                smoothScrollTo('#about', 2000);
              }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              aria-label="Scroll down"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
