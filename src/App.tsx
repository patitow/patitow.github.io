import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Navigation from '@/components/Navigation';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import VisualValidator from '@/components/VisualValidator';

// Lazy load components for better performance
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Projects = lazy(() => import('@/components/Projects'));
const Skills = lazy(() => import('@/components/Skills'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <div className="glass rounded-2xl p-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
      </div>
      <h2 className="text-xl font-bold text-white mb-2">Carregando...</h2>
      <p className="text-gray-300">Preparando sua experiência</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main>
          <section id="home">
            <Suspense fallback={<LoadingFallback />}>
              <Hero />
            </Suspense>
          </section>
          
          <Section id="about">
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          </Section>
          
          <Section id="projects">
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
          </Section>
          
          <Section id="skills">
            <Suspense fallback={<LoadingFallback />}>
              <Skills />
            </Suspense>
          </Section>
          
          <Section id="contact">
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          </Section>
        </main>
        
        <Footer />
        <VisualValidator />
      </div>
    </ErrorBoundary>
  );
}

export default App;
