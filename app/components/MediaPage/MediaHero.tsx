'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, PlayIcon, CameraVideoIcon, SparklesIcon } from '@hugeicons/core-free-icons';

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

export default function MediaHero() {
  return (
    <section className="relative pt-[130px] pb-16 lg:pt-[150px] lg:pb-[90px] bg-white overflow-hidden animate-fade-in" id="media-hero">
      {/* Background blobs matching the general aesthetics */}
      <div className="absolute top-[15%] left-[-5%] w-[450px] h-[450px] rounded-full bg-green-50/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-amber-50/60 blur-3xl pointer-events-none -z-10" />

      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Left Column: Title & Text */}
        <div className="flex flex-col items-start">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none"
          >
            <HugeiconsIcon icon={CameraVideoIcon} size={12} className="text-green-600 animate-pulse" />
            Èdè Aládùn Series
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-heading-hero leading-[1.1] text-gray-950 my-5"
          >
            Èdè Aládùn: <span className="text-green-600">Sweet Language</span> Series
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-base md:text-[17px] leading-[1.7] text-gray-500 max-w-[520px] mb-8"
          >
            Explore our weekly bite-sized video series teaching the fundamentals of the rich and vibrant Yorùbá language. Crafted specifically to engage young minds and make learning feel like play.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild size="lg" className="w-full sm:w-auto px-7 bg-green-600 hover:bg-green-700 text-white font-medium shadow-none rounded-full h-auto py-3.5 transition-all">
                <a href="#video-hub">
                  Start watching
                  <HugeiconsIcon icon={PlayIcon} size={16} />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-7 border-gray-200 hover:border-green-300 hover:bg-green-50/80 text-green-800 font-medium rounded-full h-auto py-3.5 transition-all">
                <a href="#quizzes">
                  Try interactive quizzes
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-start gap-10 pt-8 mt-8 border-t border-gray-100 w-full flex-wrap sm:flex-nowrap"
          >
            <div className="flex flex-col">
              <span className="font-heading text-lg text-gray-900 font-bold">Bite-Sized</span>
              <span className="text-[13px] text-gray-400">3–5 mins episodes</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg text-gray-900 font-bold">Digital Quizzes</span>
              <span className="text-[13px] text-gray-400">Reinforce learnings</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg text-gray-900 font-bold">100% Free</span>
              <span className="text-[13px] text-gray-400">Open resources</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Creative Interactive Deck */}
        <motion.div
          variants={visualVariants}
          className="relative max-w-[480px] lg:max-w-none mx-auto w-full h-[400px] sm:h-[460px] flex items-center justify-center"
        >
          {/* Main Video Overlay Mockup */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-4 left-4 right-4 sm:left-10 sm:right-10 md:left-4 md:right-16 bg-white border border-gray-100 rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,123,55,0.08)] overflow-hidden z-20 cursor-default"
          >
            <div className="relative h-[180px] sm:h-[220px] bg-gray-950 flex items-center justify-center overflow-hidden group">
              {/* Simulated thumbnail */}
              <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: `url('/images/hero.webp')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

              {/* Play button overlay */}
              <div className="w-14 h-14 rounded-full bg-white/95 text-green-700 flex items-center justify-center shadow-lg group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 z-10">
                <HugeiconsIcon icon={PlayIcon} size={22} className="ml-1" />
              </div>

              {/* Episode pill */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 font-heading text-[10px] tracking-wide uppercase rounded-full bg-green-600/90 text-white font-bold backdrop-blur-xs">
                Episode 1: Ìkíni
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-heading text-lg text-gray-950 font-bold mb-1.5">Interactive Greetings (Ìkíni)</h3>
              <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
                The crucial first step into building real conversation blocks. Learn how to greet elders and peers respectfully.
              </p>
            </div>
          </motion.div>

          {/* Underlapping Floating Quiz Achievement Badge */}
          <motion.div
            style={{ rotate: '8deg', scale: 0.95 }}
            className="absolute bottom-4 right-0 sm:right-6 md:right-0 w-[200px] sm:w-[240px] bg-white border border-gray-100 rounded-2xl shadow-xl p-4.5 z-10 cursor-default"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <HugeiconsIcon icon={SparklesIcon} size={18} />
              </div>
              <div>
                <div className="font-heading text-xs font-semibold text-gray-950">Quiz Champion</div>
                <div className="text-[10px] text-gray-400">Score: 100% (Greetings)</div>
              </div>
            </div>
            <div className="text-[10.5px] text-gray-500 leading-relaxed italic bg-gray-50/50 p-2.5 rounded-lg border border-gray-100/50">
              &ldquo;Quiz unlocked: Èdè Aládùn Star Badge&rdquo;
            </div>
          </motion.div>

          {/* Underlapping Floating Lesson Stats */}
          <motion.div
            style={{ rotate: '-8deg', scale: 0.93 }}
            className="absolute bottom-8 left-0 sm:left-4 md:left-0 w-[180px] sm:w-[220px] bg-white border border-gray-100 rounded-2xl shadow-xl p-4 z-10 cursor-default"
          >
            <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1.5">Weekly Progress</div>
            <div className="font-heading text-sm text-gray-900 font-semibold mb-1">2/2 Episodes Watched</div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-green-600 h-full rounded-full" style={{ width: '100%' }} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
