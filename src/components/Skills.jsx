import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaBrain, FaDatabase
} from 'react-icons/fa';
import { 
  SiDjango, SiExpress, SiMongodb, SiMysql, SiCplusplus, SiC, SiPostman, SiOpencv, SiNumpy, SiPandas, SiScikitlearn 
} from 'react-icons/si';
import { FiLayout, FiServer, FiDatabase as FiDb, FiCode, FiBriefcase, FiCpu } from 'react-icons/fi';
import { skillsCategories, skillsData } from '../data/portfolioData';

const ICON_MAP = {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaBrain, FaDatabase,
  SiDjango, SiExpress, SiMongodb, SiMysql, SiCplusplus, SiC, SiPostman, SiOpencv, SiNumpy, SiPandas, SiScikitlearn,
  FiLayout, FiServer, FiDb, FiCode, FiBriefcase, FiCpu
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillsCategories[0]?.id || 'frontend');

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

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
            Technical <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            A compilation of frameworks, languages, databases, and deployment utilities that form my core engineering toolkit.
          </motion.p>
        </div>

        {/* Tab & Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category Selection Bar */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 no-scrollbar select-none">
            {skillsCategories.map((category) => {
              const Icon = ICON_MAP[category.iconKey] || FiCode;
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-3.5 px-5 py-4 rounded-xl border font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-none clickable w-full ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-blue/15 via-accent-cyan/15 to-accent-purple/15 border-accent-cyan/40 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                      : 'glass-panel-light border-[var(--border-subtle)] text-text-secondary hover:text-text-primary hover:border-accent-cyan/20'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-accent-cyan' : 'text-text-secondary'}`} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Right Skills Grid Box */}
          <div className="lg:col-span-8 glass-panel p-8 rounded-3xl border border-[var(--border-glass)] min-h-[380px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple animate-border-glow" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {(skillsData[activeTab] || []).map((skill, index) => {
                  const Icon = ICON_MAP[skill.iconKey] || FiCode;
                  return (
                    <div 
                      key={skill.name}
                      className="glass-panel-light p-5 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-glass)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between group"
                    >
                      {/* Name & Icon header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-[var(--border-subtle)] rounded-lg transition-colors duration-300`}>
                            <Icon className={`w-5 h-5 ${skill.color}`} />
                          </div>
                          <span className="font-heading font-semibold text-sm tracking-wide text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-semibold text-text-secondary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated level indicator */}
                      <div className="w-full h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-full shadow-[0_0_8px_#06B6D4]"
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
