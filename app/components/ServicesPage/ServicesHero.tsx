'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, SparklesIcon } from '@hugeicons/core-free-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ServicesHero() {
  return (
    <section className="relative pt-[130px] pb-16 lg:pt-[150px] lg:pb-[90px] bg-white overflow-hidden" id="services-hero">
      {/* Decorative background gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-green-50/55 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-amber-50/40 blur-3xl pointer-events-none -z-10" />

      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Left Column: Heading & Content */}
        <div className="flex flex-col items-start">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[15px] tracking-[0.06em] uppercase rounded-full bg-amber-50 text-amber-700 border border-amber-200 shadow-none"
          >
            <HugeiconsIcon icon={SparklesIcon} size={12} className="text-amber-500" />
            Our Offerings
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-heading-hero leading-[1.1] text-gray-950 my-5"
          >
            Interactive Language Programs Tailored for <span className="text-green-600">Africans in Diaspora</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-base md:text-[17px] leading-[1.7] text-gray-500 max-w-[520px] mb-8"
          >
            Living far from home shouldn&apos;t mean losing your mother tongue. We provide premium, engaging, and culturally-rich live classes that fit into your timezone and curriculum requirements.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild size="lg" className="w-full sm:w-auto px-7 bg-green-600 hover:bg-green-700 text-white font-medium shadow-none rounded-full h-auto py-3.5 transition-all">
                <a href="#yoruba-academy" id="hero-btn-primary">
                  Explore our live classes
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-start gap-12 pt-8 mt-8 border-t border-gray-100 w-full flex-wrap sm:flex-nowrap"
          >
            <div className="flex flex-col">
              <span className="font-heading text-lg text-gray-900 font-bold">100% Live</span>
              <span className="text-[13px] text-gray-400">Interactive Tutors</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg text-gray-900 font-bold">Ages 3–25</span>
              <span className="text-[13px] text-gray-400">Tailored Curriculum</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg text-gray-900 font-bold">Small Cohorts(Max 6)</span>
              <span className="text-[13px] text-gray-400">Individual Attention</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Creative Visual Deck */}
        <motion.div
          variants={visualVariants}
          className="relative max-w-[480px] lg:max-w-none mx-auto w-full h-[400px] sm:h-[460px] flex items-center justify-center"
        >
          {/* Main Yoruba Academy Card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-4 left-4 right-4 sm:left-10 sm:right-10 md:left-4 md:right-16 bg-white border border-gray-100/90 rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,123,55,0.08)] p-6 z-20 cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 font-heading text-[11px] tracking-wide uppercase rounded-full bg-green-50 text-green-700 border border-green-100 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Active Track
              </span>
              <span className="text-[13px] font-heading font-medium text-amber-600 bg-amber-50/50 px-2.5 py-1 rounded-md">Ages 3–25</span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl text-gray-950 font-bold mb-2">Live Online Yorùbá Academy</h3>
            <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed mb-5">
              Our flagship program takes kids from zero vocabulary to confident conversations. Immersive learning, small groups, and cultural context.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <span className="text-[12px] text-gray-400">Next Cohort: <strong className="text-gray-700">Aug 1st</strong></span>
              <a href="#yoruba-academy" className="text-sm font-semibold text-green-600 hover:text-green-700 inline-flex items-center gap-1 transition-colors no-underline">
                Explore Curriculum <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
              </a>
            </div>
          </motion.div>

          {/* Underlapping Coming Soon Card 1 (Igbo) */}
          <motion.div
            style={{ rotate: '4deg', scale: 0.95 }}
            className="absolute bottom-8 right-0 sm:right-6 md:right-0 w-[240px] sm:w-[280px] bg-white/80 border border-gray-100 rounded-2xl shadow-lg p-5 z-10 blur-[0.4px]"
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-heading font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming Soon</span>
              <span className="text-[11px] text-green-600 font-semibold font-heading">85% Voted</span>
            </div>
            <h4 className="font-heading text-sm text-gray-900 font-semibold mb-2">Igbo Language Track</h4>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-green-600 h-full rounded-full" style={{ width: '85%' }} />
            </div>
            <div className="flex justify-between items-center text-[10px] text-gray-400">
              <span>92 Waitlist Submissions</span>
            </div>
          </motion.div>

          {/* Underlapping Coming Soon Card 2 (Swahili) */}
          <motion.div
            style={{ rotate: '-6deg', scale: 0.93 }}
            className="absolute bottom-12 left-0 sm:left-4 md:left-0 w-[220px] sm:w-[260px] bg-white/70 border border-gray-100 rounded-2xl shadow-lg p-5 z-10 blur-[0.6px]"
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-heading font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming Soon</span>
              <span className="text-[11px] text-amber-600 font-semibold font-heading">70% Voted</span>
            </div>
            <h4 className="font-heading text-sm text-gray-900 font-semibold mb-2">Hausa Language Track</h4>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-amber-500 h-full rounded-full" style={{ width: '70%' }} />
            </div>
            <div className="flex justify-between items-center text-[10px] text-gray-400">
              <span>124 Waitlist Submissions</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
