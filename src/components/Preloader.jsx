import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    // Smooth progress increment
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 12) + 3;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        
        // GSAP animate out timeline
        const tl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
        
        tl.to('.preloader-content', {
          opacity: 0,
          y: -40,
          duration: 0.5,
          ease: 'power2.inOut',
        });
        tl.to('.preloader-container', {
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', // Slide up wipe effect
          duration: 0.8,
          ease: 'power4.inOut',
        }, '-=0.2');
      }
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className="preloader-container fixed inset-0 bg-[var(--color-space-black)] z-[99999] flex flex-col items-center justify-center"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
    >
      <div className="preloader-content flex flex-col items-center max-w-xs w-full px-4">
        {/* Terminal loading text */}
        <div className="font-mono text-xs text-accent-cyan mb-2 self-start tracking-wider uppercase">
          &gt; BOOTING_PORTFOLIO_OS...
        </div>
        
        {/* Large Counter */}
        <div className="font-heading font-black text-6xl text-gradient-cyan-purple mb-6 select-none tracking-tighter">
          {progress}%
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-[var(--border-subtle)] rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple shadow-[0_0_12px_#06B6D4] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Subtitle */}
        <div className="font-mono text-[10px] text-text-secondary mt-3 tracking-widest uppercase">
          Kathiravan S P &bull; STACK ACTIVE
        </div>
      </div>
    </div>
  );
}
