'use client';

import { motion } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, SparklesIcon } from '@hugeicons/core-free-icons';
import { Button } from '@/components/ui/button';

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

const languageListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const languages = [
  { name: 'Yorùbá', status: 'active', region: 'West Africa' },
  { name: 'Igbo', status: 'coming-soon', region: 'West Africa' },
  { name: 'Hausa', status: 'coming-soon', region: 'West Africa' },
  { name: 'Swahili', status: 'coming-soon', region: 'East Africa' },
  { name: 'Zulu', status: 'coming-soon', region: 'Southern Africa' },
  { name: 'Amharic', status: 'coming-soon', region: 'Horn of Africa' },
];

export default function AboutLookingForward() {
  return (
    <section className="py-16 md:py-[100px] bg-gray-950 relative overflow-hidden" id="about-looking-forward">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col gap-5 items-start text-left">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-600/10 border border-green-600/20 text-green-400 shadow-xs"
          >
            <HugeiconsIcon icon={SparklesIcon} size={12} className="text-green-400" />
            Looking Forward
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-heading-two text-[30px] sm:text-[40px] lg:text-[48px] text-white leading-[1.08]"
          >
            Expanding the <span className="text-green-400 font-normal italic">Horizon</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base md:text-[17px] leading-[1.7] max-w-[480px]"
          >
            While our flagship live Yorùbá classes are actively thriving, our ultimate blueprint is to welcome more native African languages to our digital academy, serving families across the entire diaspora.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild size="lg" className="w-auto px-7 py-3.5 h-auto bg-green-400 hover:bg-green-300 text-gray-950 font-medium rounded-full shadow-lg shadow-green-400/20 transition-all">
                <a href="/services" id="about-looking-forward-cta">
                  View current classes
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Language Grid */}
        <div className="flex flex-col gap-6 w-full">
          <motion.div
            variants={itemVariants}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 text-xs font-heading tracking-wider uppercase mb-2"
          >
            Linguistic Roadmap & Coverage
          </motion.div>

          <motion.div
            variants={languageListVariants}
            className="grid grid-cols-2 gap-4"
          >
            {languages.map((lang, idx) => {
              const isActive = lang.status === 'active';
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: isActive ? 'rgba(74, 222, 128, 0.08)' : 'rgba(255, 255, 255, 0.05)',
                    borderColor: isActive ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-default ${isActive
                    ? 'bg-green-950/20 border-green-500/20 text-white'
                    : 'bg-white/[0.02] border-white/5 text-gray-300'
                    }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-heading text-lg font-bold">{lang.name}</span>
                    {isActive ? (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-heading text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                        Soon
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 font-heading">{lang.region}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
