import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';

function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 25, stiffness: 250 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 250 });
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl tracking-tight mb-4 text-text-primary"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            Explore a selection of systems built to address specific, critical problems with optimal architecture and design.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <TiltCard className="glass-panel rounded-3xl overflow-hidden border border-[var(--border-glass)] h-full flex flex-col glow-card select-none group">
                {/* Project Image Panel */}
                <div className="relative h-56 md:h-64 overflow-hidden border-b border-[var(--border-subtle)]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Glass Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-space-black)] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Info Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.8 rounded-md glass-panel-light border border-[var(--border-subtle)] text-text-secondary text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 hover:border-accent-cyan/20 hover:text-text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary mb-6 tracking-wide group-hover:text-accent-cyan transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Problem Statement */}
                    <div className="flex gap-3 mb-4">
                      <FiAlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-semibold text-xs text-text-primary uppercase tracking-wider mb-1">
                          Problem
                        </h4>
                        <p className="font-sans text-xs text-text-secondary leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>

                    {/* Solution Statement */}
                    <div className="flex gap-3 mb-6">
                      <FiCheckCircle className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-semibold text-xs text-accent-cyan uppercase tracking-wider mb-1">
                          Solution
                        </h4>
                        <p className="font-sans text-xs text-text-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Features Drop */}
                    <div className="border-t border-[var(--border-subtle)] pt-4 mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FiInfo className="w-4 h-4 text-accent-purple" />
                        <h4 className="font-heading font-semibold text-xs text-text-primary uppercase tracking-wider">
                          Key Capabilities
                        </h4>
                      </div>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feat) => (
                          <li key={feat} className="font-sans text-[11px] text-text-secondary flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent-purple mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-[var(--border-subtle)]">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-glass)] hover:border-accent-cyan/30 text-text-primary font-medium text-xs transition-all duration-300 glass-panel-light hover:bg-accent-cyan/5 cursor-none clickable"
                      >
                        <FiGithub className="w-4 h-4 text-accent-cyan" />
                        Source Code
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] text-text-secondary font-medium text-xs opacity-80">
                        <FiGithub className="w-4 h-4" />
                        Source Code Removed
                      </div>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-white font-semibold text-xs transition-all duration-300 hover:scale-105 cursor-none clickable"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-white font-semibold text-xs opacity-80">
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo Removed
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
