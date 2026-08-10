import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle blur on scroll
      setScrolled(window.scrollY > 20);

      // Calculate progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check current visible section
      const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 120; // 120px offset to trigger early

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(NAV_ITEMS[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 75, // Adjust for navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-black/75 backdrop-blur-lg border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple shadow-[0_0_10px_#06B6D4] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="font-heading font-black text-xl text-gradient-cyan-purple tracking-wider uppercase select-none clickable"
        >
          {personalInfo.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`font-sans text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 clickable ${
                activeSection === item.href.substring(1)
                  ? 'text-accent-cyan font-bold'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          {personalInfo.socialLinks.github && (
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 clickable"
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
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 clickable"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-[18px] h-[18px]" />
            </a>
          )}
          {personalInfo.socialLinks.email && (
            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 clickable"
              aria-label="Email"
            >
              <FiMail className="w-[18px] h-[18px]" />
            </a>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-accent-cyan transition-colors duration-300 clickable p-1 rounded-md"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[69px] left-0 w-full h-[calc(100vh-69px)] bg-space-black/95 backdrop-blur-xl border-t border-white/5 transition-all duration-500 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`font-heading text-lg tracking-widest uppercase transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-accent-cyan font-bold scale-110'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-6 border-t border-white/10 w-full max-w-[200px] justify-center">
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-300"
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
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            )}
            {personalInfo.socialLinks.email && (
              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

