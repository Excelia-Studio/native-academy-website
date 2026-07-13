'use client';

import { motion } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import { SparklesIcon } from '@hugeicons/core-free-icons';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ContactHero() {
  return (
    <section className="relative pt-[120px] pb-10 lg:pt-[140px] lg:pb-12 bg-white overflow-hidden" id="contact-hero">
      {/* Decorative background gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] rounded-full bg-green-50/60 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[5%] left-[-10%] w-[320px] h-[320px] rounded-full bg-amber-50/40 blur-3xl pointer-events-none -z-10" />

      <motion.div
        className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none mb-6"
        >
          <HugeiconsIcon icon={SparklesIcon} size={12} className="text-green-500 animate-pulse" />
          Enrollment & Inquiries
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-[34px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-heading-hero leading-[1.1] text-gray-950 max-w-2xl mb-4"
        >
          Let&apos;s Begin Your Child&apos;s <span className="text-green-600">Journey Home</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-[17px] leading-[1.65] text-gray-500 max-w-[580px]"
        >
          Connecting young minds in the African diaspora with their heritage, identity, and mother tongue. Let us know how we can support your child&apos;s learning path today.
        </motion.p>
      </motion.div>
    </section>
  );
}
