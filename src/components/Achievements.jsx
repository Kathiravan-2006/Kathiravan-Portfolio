import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheckSquare, FiCpu, FiGithub, FiCode, FiAward } from 'react-icons/fi';
import { achievementsData } from '../data/portfolioData';

const ICON_MAP = {
  FiCheckSquare,
  FiCpu,
  FiGithub,
  FiCode,
  FiAward,
};

function Counter({ to, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(to, 10);
    if (isNaN(end) || end === 0) return;

    const totalSteps = end;
    const stepTime = Math.max(Math.floor((duration * 1000) / totalSteps), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 60); // Speed up for large numbers
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievementsData.map((stat, index) => {
            const Icon = ICON_MAP[stat.iconKey] || FiAward;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)] glow-card text-center flex flex-col items-center justify-center hover:border-[var(--border-glass)]"
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl p-[1px] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <div className="w-full h-full bg-[var(--icon-box-bg)] rounded-xl flex items-center justify-center border border-[var(--border-glass)]">
                    <Icon className="w-5 h-5 text-text-primary" />
                  </div>
                </div>

                {/* Counter */}
                <h3 className="font-heading font-black text-3xl md:text-4xl text-text-primary mb-2 tracking-tight select-none">
                  <Counter to={stat.value} />
                  <span className="text-gradient-cyan-purple">{stat.suffix}</span>
                </h3>

                {/* Label */}
                <p className="font-sans text-[10px] text-text-secondary uppercase tracking-widest leading-normal">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
