import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiActivity, FiUsers } from 'react-icons/fi';
import { aboutData } from '../data/portfolioData';

const ICON_MAP = {
  FiCpu,
  FiCode,
  FiActivity,
  FiUsers,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl tracking-tight mb-4 text-text-primary"
          >
            Engineering with <span className="text-gradient">Purpose &amp; Passion</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            {aboutData.subtitle}
          </motion.p>
        </div>

        {/* Narrative & Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-[var(--border-glass)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple" />
              
              <h3 className="font-heading font-bold text-xl md:text-2xl text-text-primary mb-4">
                {aboutData.storyTitle}
              </h3>
              
              <div className="font-sans text-sm md:text-base text-text-secondary space-y-4 leading-relaxed">
                {aboutData.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Quick Quote Widget */}
            <div className="glass-panel-light p-6 rounded-2xl border border-[var(--border-subtle)] flex items-center gap-4">
              <span className="text-3xl text-accent-cyan select-none">“</span>
              <p className="font-sans text-xs italic text-text-secondary leading-normal">
                {aboutData.quote}
              </p>
            </div>
          </motion.div>

          {/* Right Core Pillars Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutData.pillars.map((pillar, index) => {
              const Icon = ICON_MAP[pillar.iconKey] || FiCode;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)] glow-card flex flex-col justify-between group hover:border-[var(--border-glass)]"
                >
                  <div>
                    {/* Icon container with glowing gradient backdrop */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.color} p-[1px] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300`}>
                      <div className="w-full h-full bg-[var(--icon-box-bg)] rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-text-primary group-hover:text-accent-cyan transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <h4 className="font-heading font-bold text-base text-text-primary mb-2 tracking-wide group-hover:text-accent-cyan transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">
                      {pillar.desc}
                    </p>
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
