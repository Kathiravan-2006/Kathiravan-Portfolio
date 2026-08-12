import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiBookOpen, FiActivity } from 'react-icons/fi';
import { githubData } from '../data/portfolioData';

export default function GithubSection() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    // Generate simulated commit matrix (53 weeks x 7 days = 371 blocks)
    const blocks = [];
    for (let i = 0; i < 371; i++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.85) level = 4;
      else if (rand > 0.65) level = 3;
      else if (rand > 0.4) level = 2;
      else if (rand > 0.15) level = 1;
      blocks.push(level);
    }
    setContributions(blocks);
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-cyan-200 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-900/30';
      case 2:
        return 'bg-cyan-300 dark:bg-cyan-800/50 border border-cyan-400 dark:border-cyan-700/30';
      case 3:
        return 'bg-cyan-500 dark:bg-cyan-600/70 border border-cyan-600 dark:border-cyan-500/20';
      case 4:
        return 'bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_#06B6D4]';
      default:
        return 'bg-[var(--border-subtle)]';
    }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

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
            GitHub <span className="text-gradient">Activity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            A visual overview of open-source repository structures, code additions, and commit patterns.
          </motion.p>
        </div>

        {/* GitHub Terminal Board */}
        <div className="glass-panel rounded-3xl border border-[var(--border-glass)] overflow-hidden relative mb-12">
          {/* Header Bar */}
          <div className="glass-panel-light border-b border-[var(--border-subtle)] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiGithub className="w-5 h-5 text-accent-cyan" />
              <a
                href={githubData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-primary tracking-wider hover:text-accent-cyan transition-colors duration-300"
              >
                github.com/{githubData.username}
              </a>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {githubData.stats.map((st) => (
                <div key={st.label} className="glass-panel-light p-4 rounded-xl border border-[var(--border-subtle)]">
                  <span className="block font-heading font-black text-2xl text-text-primary mb-1">{st.value}</span>
                  <span className="block font-sans text-[10px] text-text-secondary uppercase tracking-widest">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Contribution Calendar Graph */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-xs text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <FiActivity className="w-4 h-4 text-accent-cyan" />
                  Contributions Calendar
                </h3>
                <span className="font-sans text-[10px] text-text-secondary">
                  371 Days of Activity
                </span>
              </div>

              {/* Grid scroll wrapper */}
              <div className="overflow-x-auto no-scrollbar border border-[var(--border-subtle)] rounded-xl p-4 glass-panel-light">
                <div 
                  className="grid grid-flow-col gap-1.5 select-none"
                  style={{ gridTemplateRows: 'repeat(7, minmax(0, 1fr))', width: 'max-content' }}
                >
                  {contributions.map((lvl, index) => (
                    <div
                      key={index}
                      className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-300 hover:scale-125 ${getLevelColor(lvl)}`}
                      title={`Commit depth level: ${lvl}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex justify-end gap-1.5 items-center mt-3 text-[9px] text-text-secondary font-mono">
                <span>Less</span>
                <div className="w-[8px] h-[8px] rounded-[2px] bg-[var(--border-subtle)]" />
                <div className="w-[8px] h-[8px] rounded-[2px] bg-cyan-200 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-900/30" />
                <div className="w-[8px] h-[8px] rounded-[2px] bg-cyan-300 dark:bg-cyan-800/50 border border-cyan-400 dark:border-cyan-700/30" />
                <div className="w-[8px] h-[8px] rounded-[2px] bg-cyan-500 dark:bg-cyan-600/70 border border-cyan-600 dark:border-cyan-500/20" />
                <div className="w-[8px] h-[8px] rounded-[2px] bg-cyan-600 dark:bg-cyan-400" />
                <span>More</span>
              </div>
            </div>

            {/* Pinned Repos Grid */}
            <div>
              <h3 className="font-heading font-bold text-xs text-text-primary uppercase tracking-wider flex items-center gap-2 mb-4">
                <FiBookOpen className="w-4 h-4 text-accent-purple" />
                Pinned Repositories
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {githubData.pinnedRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={githubData.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel-light p-5 rounded-xl border border-[var(--border-subtle)] hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300 flex flex-col justify-between cursor-none clickable group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                          {repo.name}
                        </span>
                        <FiGithub className="w-4 h-4 text-text-secondary group-hover:text-accent-cyan transition-colors duration-300" />
                      </div>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
                        {repo.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[10px] text-text-secondary border-t border-[var(--border-subtle)] pt-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                        <span>{repo.lang}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FiStar className="w-3.5 h-3.5" />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiGitBranch className="w-3.5 h-3.5" />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
