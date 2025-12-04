import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Navigation from '@/components/Navigation';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

// Lazy load components for better performance
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Projects = lazy(() => import('@/components/Projects'));
const Skills = lazy(() => import('@/components/Skills'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <h2 className="text-xl font-semibold mb-2">Carregando...</h2>
      <p className="text-muted-foreground">Preparando sua experiência</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground dark">
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
      </div>
    </ErrorBoundary>
  );
}

export default App;
