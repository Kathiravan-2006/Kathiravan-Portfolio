import React, { useState, useEffect, Suspense, lazy } from 'react';
import Preloader from './components/Preloader';
import CanvasBg from './components/CanvasBg';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

// Lazy loaded components for optimized bundle size & Lighthouse scores
const Certificates = lazy(() => import('./components/Certificates'));
const GithubSection = lazy(() => import('./components/GithubSection'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Footer = lazy(() => import('./components/Footer'));

// Glass skeleton loader representation for lazy fallback states
function SkeletonLoader() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 animate-pulse space-y-8 select-none">
      {/* Skeleton Title */}
      <div className="h-8 glass-panel-light rounded-xl w-[200px] mx-auto border border-[var(--border-subtle)]" />
      {/* Skeleton Subtext */}
      <div className="h-4 glass-panel-light rounded-xl w-[320px] mx-auto border border-[var(--border-subtle)]" />
      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        <div className="h-56 glass-panel-light border border-[var(--border-subtle)] rounded-2xl" />
        <div className="h-56 glass-panel-light border border-[var(--border-subtle)] rounded-2xl" />
        <div className="h-56 glass-panel-light border border-[var(--border-subtle)] rounded-2xl" />
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock body scroll while preloader is active to prevent early scrolling
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      {/* Premium preloader display */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main content container (rendered at full opacity behind preloader overlay) */}
      <div className="relative min-h-screen">
        {/* Interactive Custom Cursor */}
        <CustomCursor />

        {/* Dynamic 3D Particle/Shape Background */}
        <CanvasBg />

        {/* Navigation Control Panel */}
        <Navbar />

        {/* Scrolling Contents */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          
          <Suspense fallback={<SkeletonLoader />}>
            <Certificates />
          </Suspense>

          <Suspense fallback={<SkeletonLoader />}>
            <GithubSection />
          </Suspense>

          <Suspense fallback={<SkeletonLoader />}>
            <Achievements />
          </Suspense>

          <Suspense fallback={<SkeletonLoader />}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer info panels */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* Back to top scroll button */}
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
      </div>
    </>
  );
}
