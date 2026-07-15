'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, PlayIcon } from '@hugeicons/core-free-icons';

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

const imageVariants = {
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

export default function Hero() {
  return (
    <section className="pt-[110px] pb-16 lg:pb-[100px] bg-white overflow-hidden" id="hero">
      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col items-start">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-tight uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none"
          >
            Now Enrolling — Limited Spots
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-heading-hero leading-[1.1] text-gray-950 my-5"
          >
            Native Languages <span className="text-green-600">Flourishing</span> in Foreign Lands
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-base md:text-[17px] leading-[1.7] text-gray-500 max-w-[480px] mb-8"
          >
            Help your children speak confidently, embrace their identity, and
            connect deeply to their roots, no matter where they are in the world.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start mb-10 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild size="lg" className="w-full sm:w-auto px-7 bg-green-600 hover:bg-green-700 text-white font-medium shadow-none rounded-full h-auto py-3.5 transition-all">
                <a href="https://docs.google.com/forms/d/1ejqCIsjfUUijEPy1lPxpxlF18NJtwbXSZybKH-6OSD0/viewform?edit_requested=true" id="hero-cta-primary" target="_blank" rel="noopener noreferrer">
                  Save your child&apos;s spot
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-7 border-gray-200 hover:border-green-300 hover:bg-green-50/80 text-green-800 font-medium rounded-full h-auto py-3.5 transition-all">
                <a href="/media" id="hero-cta-secondary">
                  <HugeiconsIcon icon={PlayIcon} size={18} />
                  Watch free lesson
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-start gap-16 pt-6 border-t border-gray-100 w-full flex-wrap sm:flex-nowrap"
          >
            <motion.div whileHover={{ y: -2 }} className="flex flex-col gap-0.5 transition-transform">
              <span className="font-heading text-[22px] text-gray-900">500+</span>
              <span className="text-[13px] text-gray-400">Students Enrolled</span>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="flex flex-col gap-0.5 transition-transform">
              <span className="font-heading text-[22px] text-gray-900">12+</span>
              <span className="text-[13px] text-gray-400">Countries</span>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="flex flex-col gap-0.5 transition-transform">
              <span className="font-heading text-[22px] text-gray-900">4.9★</span>
              <span className="text-[13px] text-gray-400">Parent Rating</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="relative max-w-[480px] md:max-w-none mx-auto w-full"
        >
          <div className="overflow-hidden rounded-[24px] shadow-xl shadow-green-900/5 group">
            <Image
              src="/images/hero.webp"
              alt="Smiling young African girl"
              width={800}
              height={800}
              priority
              className="w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] block rounded-[24px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-4 py-2 bg-white/92 backdrop-blur-md rounded-full font-heading text-[13px] text-gray-800 border border-white/60 shadow-lg shadow-black/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Live classes in session
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

