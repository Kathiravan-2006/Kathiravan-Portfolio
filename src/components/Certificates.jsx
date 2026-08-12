import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX, FiCheckCircle, FiMinimize2, FiExternalLink } from 'react-icons/fi';
import { certificatesData, personalInfo } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />
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
            Professional <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            Verified course certifications completed through IIT Spoken Tutorial, NPTEL, and standard educational portals.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)] glow-card flex flex-col justify-between group hover:border-[var(--border-glass)]"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.8 rounded-md glass-panel-light border border-[var(--border-subtle)] text-accent-cyan text-[10px] font-semibold tracking-wider uppercase">
                    {cert.category}
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="font-sans text-xs text-text-secondary font-medium mb-4">
                  {cert.issuer}
                </p>

                <p className="font-sans text-[11px] text-text-secondary/70 leading-relaxed mb-6 line-clamp-2">
                  {cert.syllabus}
                </p>
              </div>

              {/* View Action */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl glass-panel-light border border-[var(--border-subtle)] hover:border-accent-cyan/35 text-text-primary font-medium text-xs transition-all duration-300 hover:bg-accent-cyan/5 cursor-none clickable"
              >
                <FiAward className="w-4 h-4 text-accent-cyan" />
                Inspect Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--modal-overlay)] backdrop-blur-md p-6"
            onClick={() => setSelectedCert(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="glass-panel max-w-2xl w-full p-8 md:p-12 rounded-3xl border border-[var(--border-glass)] shadow-[0_0_50px_rgba(6,182,212,0.2)] text-center relative overflow-hidden group select-none"
              onClick={(e) => e.stopPropagation()} // Prevent close on box click
            >
              {/* Top Neon glowing line */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel-light border border-[var(--border-subtle)] hover:border-accent-cyan/40 text-text-primary transition-all duration-300 clickable cursor-none"
                aria-label="Close details"
              >
                <FiX className="w-4 h-4" />
              </button>

              {/* Certificate layout visual */}
              <div className="border border-[var(--border-subtle)] p-6 rounded-2xl glass-panel-light flex flex-col items-center">
                <FiAward className="w-16 h-16 text-accent-cyan mb-4 animate-float" />
                
                <h4 className="font-heading font-black text-2xl md:text-3xl text-gradient-cyan-purple tracking-wide mb-2 uppercase">
                  Certificate of Completion
                </h4>
                
                <p className="font-sans text-[11px] tracking-widest text-text-secondary uppercase mb-8">
                  This credential is proudly awarded to
                </p>

                <h5 className="font-heading font-black text-2xl text-text-primary tracking-wider mb-6 uppercase">
                  {personalInfo.name}
                </h5>

                <p className="font-sans text-xs text-text-secondary leading-relaxed max-w-md mb-8">
                  for successfully finishing all requirements and assessments for the course{' '}
                  <strong className="text-text-primary">"{selectedCert.title}"</strong>, offered and certified by{' '}
                  <strong className="text-text-primary">{selectedCert.issuer}</strong>.
                </p>

                {/* Foot Details */}
                <div className="grid grid-cols-2 gap-8 border-t border-[var(--border-subtle)] pt-6 w-full text-left font-mono">
                  <div>
                    <span className="block text-[9px] text-text-secondary/60 uppercase tracking-widest mb-1">
                      Credential ID
                    </span>
                    <span className="text-xs text-text-primary font-semibold flex items-center gap-1.5">
                      <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      {selectedCert.id}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-text-secondary/60 uppercase tracking-widest mb-1">
                      Release Date
                    </span>
                    <span className="text-xs text-text-primary font-semibold">
                      {selectedCert.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl glass-panel-light border border-[var(--border-glass)] hover:border-accent-cyan/35 text-text-primary font-medium text-xs transition-all duration-300 hover:bg-accent-cyan/5 cursor-none clickable"
                >
                  <FiMinimize2 className="w-4 h-4" />
                  Dismiss
                </button>
                {selectedCert.verifyUrl ? (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-white font-semibold text-xs transition-all duration-300 hover:scale-105 cursor-none clickable"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Verify Credential
                  </a>
                ) : (
                  <div className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple text-white font-semibold text-xs opacity-80">
                    <span className="w-4 h-4 rounded-full border border-white/70 flex items-center justify-center text-[10px]">i</span>
                    Verify Link Removed
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
