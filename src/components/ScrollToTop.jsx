import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        setProgress((scrolled / totalHeight) * 100);
      }

      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const circumference = 2 * Math.PI * 18; // radius = 18

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full glass-panel border border-[var(--border-glass)] text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:text-text-primary hover:border-accent-cyan/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-500 group clickable ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="var(--border-subtle)"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="url(#progress-gradient)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          className="transition-all duration-100"
        />
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      <FiArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 z-10" />
    </button>
  );
}
