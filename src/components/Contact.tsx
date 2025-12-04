import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, Github, MapPin, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; subject?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const validateForm = () => {
    const newErrors: { name?: string; subject?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Por favor, selecione um assunto';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const assuntoMap: Record<string, string> = {
      'work': 'Oportunidade de Trabalho',
      'collaboration': 'Colaboração',
      'question': 'Pergunta',
      'other': 'Outro'
    };
    
    const assuntoTexto = assuntoMap[formData.subject] || 'Contato';
    const subject = encodeURIComponent(`${assuntoTexto} - ${formData.name}`);
    const body = encodeURIComponent(
      `Olá Matheus!\n\nMeu nome é ${formData.name}.\n\nMensagem:\n${formData.message}\n\nAtenciosamente,\n${formData.name}`
    );
    
    window.location.href = `mailto:patitowdev@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 500);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "patitowdev@gmail.com",
      href: "mailto:patitowdev@gmail.com",
      description: "Para propostas de trabalho e colaborações",
      ariaLabel: "Enviar email para patitowdev@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/patitow",
      href: "https://www.linkedin.com/in/patitow/",
      description: "Conecte-se comigo profissionalmente",
      ariaLabel: "Visitar perfil do LinkedIn"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/patitow",
      href: "https://github.com/patitow",
      description: "Veja meus projetos e contribuições",
      ariaLabel: "Visitar perfil do GitHub"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "itch.io",
      value: "patitow.itch.io",
      href: "https://patitow.itch.io/",
      description: "Jogue meus jogos independentes",
      ariaLabel: "Visitar perfil no itch.io"
    }
  ];

  return (
    <div className="gradient-contact section-auto px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Vamos Conversar
          </h2>
          <p className="text-lg sm:text-xl text-medium-contrast max-w-3xl mx-auto px-4 sm:px-0">
            Estou sempre aberto a novas oportunidades, colaborações e conversas interessantes. 
            Não hesite em entrar em contato!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                  aria-label={method.ariaLabel}
                  className="block glass rounded-2xl p-6 glass-hover group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 glass rounded-xl flex items-center justify-center text-purple group-hover:text-white transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-high-contrast mb-1">
                        {method.label}
                      </h3>
                      <p className="text-purple font-medium mb-2">
                        {method.value}
                      </p>
                      <p className="text-sm text-high-contrast">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              className="glass rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">
                Envie uma Mensagem
              </h3>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 glass rounded-lg border border-green-500/30 bg-green-500/10 flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-300 text-sm">Mensagem preparada! Seu cliente de email será aberto.</p>
                </motion.div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-high-contrast mb-2">
                    Nome <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 glass rounded-lg border bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10'
                    }`}
                    placeholder="Seu nome completo"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-high-contrast mb-2">
                    Assunto <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-3 glass rounded-lg border bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.subject ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10'
                    }`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  >
                    <option value="" className="bg-gray-900 text-gray-300">Selecione um assunto</option>
                    <option value="work" className="bg-gray-900 text-white">Oportunidade de Trabalho</option>
                    <option value="collaboration" className="bg-gray-900 text-white">Colaboração</option>
                    <option value="question" className="bg-gray-900 text-white">Pergunta</option>
                    <option value="other" className="bg-gray-900 text-white">Outro</option>
                  </select>
                  {errors.subject && (
                    <motion.p
                      id="subject-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.subject}</span>
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-high-contrast mb-2">
                    Mensagem <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-3 glass rounded-lg border bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10'
                    }`}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </motion.p>
                  )}
                </div>

                <Button 
                  variant="glass" 
                  size="lg" 
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  type="button"
                  aria-label="Enviar mensagem de contato"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Preparando...' : 'Enviar Mensagem'}
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-high-contrast text-sm">
                  <MapPin className="w-4 h-4 text-purple" />
                  <span>Recife, Pernambuco, Brasil</span>
                </div>
                <p className="text-high-contrast text-sm mt-2">
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
