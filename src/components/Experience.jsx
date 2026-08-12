import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

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
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            A timeline detailing practical engineering experience, freelance consulting, and collaborative work.
          </motion.p>
        </div>

        {/* Timeline Stack */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple -translate-x-[1px] opacity-20 pointer-events-none" />

          {/* Experience list */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.role}
                  className={`relative flex flex-col md:flex-row items-stretch justify-between ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${exp.dotBg} border-2 border-[var(--color-space-black)] -translate-x-1/2 top-6 z-10`}
                  />

                  {/* Empty space filler for desktop spacing alignment */}
                  <div className="hidden md:block w-[45%] pointer-events-none" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, type: 'spring' }}
                    className={`w-full md:w-[45%] ml-10 md:ml-0 glass-panel p-6 md:p-8 rounded-2xl border border-[var(--border-subtle)] glow-card ${exp.color} relative overflow-hidden`}
                  >
                    <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple" />
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-base md:text-lg text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="font-sans text-xs text-accent-cyan font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-secondary text-[11px] font-mono whitespace-nowrap">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Location Info */}
                    <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-4">
                      <FiMapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 md:space-y-3">
                      {exp.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="font-sans text-xs text-text-secondary flex items-start gap-2 leading-relaxed"
                        >
                          <FiBriefcase className="w-3 h-3 text-accent-purple shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
