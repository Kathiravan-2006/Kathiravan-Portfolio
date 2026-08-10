import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-space-black py-12 overflow-hidden z-10 select-none">
      {/* Subtle bottom glows */}
      <div className="absolute bottom-0 left-[20%] w-[300px] h-[100px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[100px] bg-accent-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Author Note */}
        <div className="text-center sm:text-left">
          <p className="font-heading font-black text-sm text-gradient-cyan-purple tracking-wider uppercase mb-1">
            {personalInfo.name}
          </p>
          <p className="font-sans text-[10px] text-text-secondary tracking-widest uppercase">
            Designed &amp; Developed by {personalInfo.name}
          </p>
        </div>

        <div className="flex gap-4">
          {personalInfo.socialLinks.github && (
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 cursor-none clickable"
              aria-label="GitHub"
            >
              <FiGithub className="w-[18px] h-[18px]" />
            </a>
          )}
          {personalInfo.socialLinks.linkedin && (
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 cursor-none clickable"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-[18px] h-[18px]" />
            </a>
          )}
          {personalInfo.socialLinks.email && (
            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 cursor-none clickable"
              aria-label="Email"
            >
              <FiMail className="w-[18px] h-[18px]" />
            </a>
          )}
        </div>

        {/* Copyright notice */}
        <div className="text-center sm:text-right font-mono text-[10px] text-text-secondary/60">
          &copy; {currentYear} &bull; All rights reserved.
        </div>
      </div>
    </footer>
  );
}

