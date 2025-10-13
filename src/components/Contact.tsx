import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, Github, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "patitowdev@gmail.com",
      href: "mailto:patitowdev@gmail.com",
      description: "Para propostas de trabalho e colaborações"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/patitow",
      href: "https://www.linkedin.com/in/patitow/",
      description: "Conecte-se comigo profissionalmente"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/patitow",
      href: "https://github.com/patitow",
      description: "Veja meus projetos e contribuições"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "itch.io",
      value: "patitow.itch.io",
      href: "https://patitow.itch.io/",
      description: "Jogue meus jogos independentes"
    }
  ];

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
            Vamos Conversar
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações e conversas interessantes. 
            Não hesite em entrar em contato!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass rounded-2xl p-6 glass-hover group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-400 group-hover:text-white transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {method.label}
                      </h3>
                      <p className="text-blue-400 font-medium mb-2">
                        {method.value}
                      </p>
                      <p className="text-sm text-gray-400">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Envie uma Mensagem
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 glass rounded-lg border border-white/10 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 glass rounded-lg border border-white/10 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <select className="w-full px-4 py-3 glass rounded-lg border border-white/10 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option value="" className="bg-gray-900">Selecione um assunto</option>
                    <option value="work" className="bg-gray-900">Oportunidade de Trabalho</option>
                    <option value="collaboration" className="bg-gray-900">Colaboração</option>
                    <option value="question" className="bg-gray-900">Pergunta</option>
                    <option value="other" className="bg-gray-900">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 glass rounded-lg border border-white/10 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>

                <Button variant="glass" size="lg" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Recife, Pernambuco, Brasil</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Geralmente respondo em até 24 horas. 
                  Para propostas urgentes, prefira o LinkedIn ou WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
