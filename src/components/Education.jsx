import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward, FiBookmark } from 'react-icons/fi';
import { educationData } from '../data/portfolioData';

const ICON_MAP = {
  FiAward,
  FiBookOpen,
  FiBookmark,
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-space-black/50">
      {/* Background glow highlights */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl tracking-tight mb-4"
          >
            Academic <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            My academic credentials, key coursework focus areas, and milestones.
          </motion.p>
        </div>

        {/* Education Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline divider line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan opacity-20 pointer-events-none" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const Icon = ICON_MAP[edu.iconKey] || FiBookOpen;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Glowing Node Icon */}
                  <div className="absolute left-1 md:left-5 top-1.5 w-8 h-8 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="w-full h-full bg-space-black rounded-[11px] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white group-hover:text-accent-cyan transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 glow-card relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan" />

                    {/* Degree and period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-base md:text-lg text-white group-hover:text-accent-cyan transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="font-sans text-xs text-accent-cyan font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-secondary text-[11px] font-mono whitespace-nowrap">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                    </div>

                    {/* Grade indicator */}
                    <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/5 text-accent-purple text-xs font-semibold mb-4 tracking-wider">
                      {edu.score}
                    </div>

                    {/* Details Bullet List */}
                    <ul className="space-y-2">
                      {edu.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="font-sans text-xs text-text-secondary flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

