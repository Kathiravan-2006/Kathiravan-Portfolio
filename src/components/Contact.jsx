import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiCheckCircle, FiLoader, FiAlertCircle } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { contactData } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMessage('Please fill in all the input fields.');
      setStatus('error');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMessage('Please provide a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          publicKey
        );
      } else {
        // Fallback simulation delay for preview environments without env keys
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      // Trigger celebration confetti blast
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#06B6D4', '#8B5CF6'],
      });

      setStatus('success');
      setForm({ name: '', email: '', message: '' });

      // Reset back to idle status after 5s
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email submission error:', error);
      setErrorMessage('Could not send email automatically. Please feel free to email directly using the link on the left.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            className="font-heading font-black text-4xl md:text-5xl tracking-tight mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
          >
            {contactData.subtitle}
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-4">
                  {contactData.connectTitle}
                </h3>
                <p className="font-sans text-xs md:text-sm text-text-secondary leading-relaxed mb-8">
                  {contactData.connectText}
                </p>

                {/* Direct contact info */}
                <div className="space-y-4">
                  {contactData.email && (
                    <a
                      href={`mailto:${contactData.email}`}
                      className="flex items-center gap-4 text-text-secondary hover:text-accent-cyan transition-colors duration-300 font-sans text-xs group cursor-none clickable"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 group-hover:border-accent-cyan/20 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                        <FiMail className="w-4 h-4 text-white group-hover:text-accent-cyan transition-colors duration-300" />
                      </div>
                      <span>{contactData.email}</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-8">
                <h4 className="font-heading font-semibold text-[10px] text-text-secondary uppercase tracking-widest mb-4">
                  Social Channels
                </h4>
                <div className="flex gap-4">
                  {contactData.githubUrl && (
                    <a
                      href={contactData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full glass-panel border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-none clickable"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  )}
                  {contactData.linkedinUrl && (
                    <a
                      href={contactData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full glass-panel border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-none clickable"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-heading font-semibold text-[10px] text-text-secondary uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-accent-cyan/40 text-white font-sans text-xs focus:bg-white/[0.08] focus:outline-none transition-all duration-300"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-heading font-semibold text-[10px] text-text-secondary uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-accent-cyan/40 text-white font-sans text-xs focus:bg-white/[0.08] focus:outline-none transition-all duration-300"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-heading font-semibold text-[10px] text-text-secondary uppercase tracking-widest mb-2">
                    Message Content
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-accent-cyan/40 text-white font-sans text-xs focus:bg-white/[0.08] focus:outline-none transition-all duration-300 resize-none"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>

                {/* Form Alerts feedback */}
                <AnimatePresence mode="wait">
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 font-sans text-xs"
                    >
                      <FiAlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-sans text-xs"
                    >
                      <FiCheckCircle className="w-4 h-4 shrink-0 animate-pulse" />
                      <span>Your message has been sent successfully! Thank you.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple hover:shadow-[0_4px_20px_rgba(6,182,212,0.25)] text-white font-semibold text-xs transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:scale-100 disabled:opacity-50 disabled:shadow-none cursor-none clickable"
                >
                  {status === 'sending' ? (
                    <>
                      <FiLoader className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

