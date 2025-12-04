import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
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
      work: 'Oportunidade de Trabalho',
      collaboration: 'Colaboração',
      question: 'Pergunta',
      other: 'Outro',
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
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'patitowdev@gmail.com',
      href: 'mailto:patitowdev@gmail.com',
      description: 'Para propostas de trabalho e colaborações',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/patitow',
      href: 'https://www.linkedin.com/in/patitow/',
      description: 'Conecte-se comigo profissionalmente',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/patitow',
      href: 'https://github.com/patitow',
      description: 'Veja meus projetos e contribuições',
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'itch.io',
      value: 'patitow.itch.io',
      href: 'https://patitow.itch.io/',
      description: 'Jogue meus jogos independentes',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Vamos Conversar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sempre aberto a novas oportunidades, colaborações e conversas interessantes.
            Não hesite em entrar em contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold mb-1">{method.label}</h3>
                        <p className="text-sm font-medium text-primary mb-1">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-sm text-green-700 dark:text-green-400">
                      Mensagem preparada! Seu cliente de email será aberto.
                    </p>
                  </motion.div>
                )}

                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                      Nome <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                        errors.name ? 'border-destructive' : 'border-input'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-destructive flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">
                      Assunto <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className={`w-full px-4 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                        errors.subject ? 'border-destructive' : 'border-input'
                      }`}
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="work">Oportunidade de Trabalho</option>
                      <option value="collaboration">Colaboração</option>
                      <option value="question">Pergunta</option>
                      <option value="other">Outro</option>
                    </select>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-destructive flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.subject}</span>
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                      Mensagem <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none ${
                        errors.message ? 'border-destructive' : 'border-input'
                      }`}
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-destructive flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </motion.p>
                    )}
                  </div>

                  <Button
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground inline-block mr-2"></div>
                        Preparando...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Recife, Pernambuco, Brasil</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Geralmente respondo em até 24 horas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
