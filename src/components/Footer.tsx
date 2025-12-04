import { Github, Linkedin, MessageSquare } from 'lucide-react';
import { handleSmoothScroll } from '@/utils/scroll';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Matheus Souza</h3>
            <p className="text-sm text-muted-foreground">
              Fullstack Developer & Game Developer
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre
              </a>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projetos
              </a>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, '#skills')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/patitow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/patitow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://patitow.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="itch.io"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Matheus Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
