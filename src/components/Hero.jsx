import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiEye, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (!personalInfo.roles || personalInfo.roles.length === 0) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--grid-pattern)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Radial glow layer for Apple/Stripe aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] lg:w-[800px] h-[350px] md:h-[600px] lg:h-[800px] bg-gradient-to-r from-accent-blue/10 via-accent-cyan/10 to-accent-purple/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center lg:text-left z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
        
        {/* Profile Photo (Positioned above introduction on mobile, right side on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex items-center justify-center shrink-0 relative select-none"
        >
          {/* Ambient backlight glow matching cyan & purple portfolio theme */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue/30 via-accent-cyan/30 to-accent-purple/30 blur-2xl md:blur-3xl animate-pulse-glow pointer-events-none" />

          {/* Glowing animated border ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple opacity-70 blur-[3px] animate-border-glow pointer-events-none" />

          {/* Softly rounded circular glass frame container */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-2 md:p-2.5 glass-panel border border-[var(--border-glass)] shadow-[0_0_40px_rgba(6,182,212,0.25)] flex items-center justify-center overflow-hidden group hover:shadow-[0_0_60px_rgba(139,92,246,0.35)] transition-all duration-500">
            {/* JPG Profile Photo with object-fit: cover */}
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} - Profile Photo`}
              className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              fetchPriority="high"
            />
            {/* Natural gradient overlay tint to blend seamlessly with background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-space-black/35 via-transparent to-accent-cyan/10 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
          </div>
        </motion.div>

        {/* Text Details (Left side on desktop, under photo on mobile) */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-2xl xl:max-w-3xl">
          {/* Intro Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full glass-panel-light text-accent-cyan text-xs font-mono tracking-widest uppercase mb-6 flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.1)] border border-accent-cyan/15 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            {personalInfo.tag}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl tracking-tight leading-tight mb-6 text-text-primary"
          >
            Hi, I'm <span className="text-gradient whitespace-nowrap">{personalInfo.name}</span>
          </motion.h1>

          {/* Animated Typing Roles */}
          <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6 overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="font-heading text-xl md:text-3xl text-gradient-cyan-purple font-semibold tracking-wide"
              >
                {personalInfo.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-sm md:text-base text-text-secondary max-w-xl leading-relaxed mb-10"
          >
            {personalInfo.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-white font-semibold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.45)] hover:scale-105 active:scale-95 cursor-none clickable"
            >
              View Projects
            </button>
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full glass-panel border border-[var(--border-glass)] hover:border-accent-cyan/30 text-text-primary font-semibold text-sm transition-all duration-300 hover:bg-accent-cyan/5 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-none clickable"
              title="View Resume in Browser"
            >
              <FiEye className="w-4 h-4 text-accent-cyan" />
              View Resume
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Kathiravan_SP_Resume.pdf"
              className="px-6 py-3.5 rounded-full glass-panel border border-[var(--border-glass)] hover:border-accent-cyan/30 text-text-primary font-semibold text-sm transition-all duration-300 hover:bg-accent-cyan/5 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-none clickable"
              title="Download Resume PDF"
            >
              <FiDownload className="w-4 h-4 text-accent-purple" />
              Download Resume
            </a>

            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-6 py-3.5 rounded-full glass-panel-light border border-[var(--border-subtle)] hover:border-accent-purple/35 text-text-secondary hover:text-text-primary font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-none clickable"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex space-x-6 justify-center lg:justify-start"
          >
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-panel border border-[var(--border-subtle)] flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-none clickable"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-panel border border-[var(--border-subtle)] flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-none clickable"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            )}
            {personalInfo.socialLinks.email && (
              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                className="w-11 h-11 rounded-full glass-panel border border-[var(--border-subtle)] flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-none clickable"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
