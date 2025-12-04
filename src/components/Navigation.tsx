import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useScroll } from '@/hooks';
import { NAVIGATION_ITEMS } from '@/constants';
import { animationConfigs } from '@/utils/animations';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScroll();

  const navItems = NAVIGATION_ITEMS;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'navbar-glass' : 'bg-transparent'
      )}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={animationConfigs.button.transition}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold gradient-text hidden sm:block">
              Matheus Souza de Oliveira
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-medium-contrast hover:text-high-contrast transition-colors duration-200 font-medium"
                aria-label={`Navegar para seção ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/patitow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil do GitHub"
              className="glass rounded-lg p-2 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-medium-contrast" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/patitow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil do LinkedIn"
              className="glass rounded-lg p-2 glass-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5 text-purple" />
            </motion.a>
            <Button 
              variant="glass" 
              size="sm" 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Navegar para seção de contato"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden glass rounded-lg p-2 glass-hover"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden mt-4 glass rounded-2xl p-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            role="menu"
            aria-label="Menu de navegação mobile"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-medium-contrast hover:text-high-contrast transition-colors duration-200 font-medium py-2"
                  role="menuitem"
                  aria-label={`Navegar para seção ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <motion.a
                  href="https://github.com/patitow"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar perfil do GitHub"
                  className="glass rounded-lg p-2 glass-hover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5 text-medium-contrast" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/patitow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar perfil do LinkedIn"
                  className="glass rounded-lg p-2 glass-hover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5 text-purple" />
                </motion.a>
                <Button 
                  variant="glass" 
                  size="sm" 
                  className="flex-1" 
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Navegar para seção de contato"
                >
                  Contato
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
