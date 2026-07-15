'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

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

export default function AboutHero() {
  return (
    <section className="pt-[130px] pb-16 lg:pb-[100px] bg-white overflow-hidden" id="about-hero">
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
            The Origin Story
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-heading-hero leading-[1.1] text-gray-950 my-5"
          >
            The Place of the <span className="text-green-600 font-normal">First Language</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-5 text-gray-500 max-w-[540px] mb-8">
            <p className="text-[15px] sm:text-base md:text-[17px] leading-[1.7]">
              Native Academy was born from a simple, profound idea: creating a dedicated space for studying the first language. We recognise that identity begins with speech.
            </p>
            <p className="text-[15px] sm:text-base md:text-[17px] leading-[1.7]">
              For families living globally, preserving that linguistic thread requires more than app exercises, it requires a living, breathing community.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-100 max-w-[540px] relative overflow-hidden group shadow-xs"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/20 rounded-full blur-xl -mr-6 -mt-6 group-hover:scale-125 transition-transform duration-500" />
            <p className="text-amber-800 font-heading text-base leading-[1.4] relative z-10">
              &ldquo;We treat language education with the passion of someone who truly says, &lsquo;Love my language!&rsquo;&rdquo;
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="relative max-w-[480px] lg:max-w-none mx-auto w-full"
        >
          {/* Background Decorative Blob */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-amber-100 rounded-[32px] blur-2xl opacity-60 -z-10 animate-pulse duration-[8s]" />

          {/* Main Image Stack */}
          <div className="relative overflow-hidden rounded-[24px] shadow-xl shadow-green-900/5 group border border-gray-100 bg-gray-50">
            <Image
              src="/images/about-us.webp"
              alt="African children learning native language with pride"
              width={800}
              height={800}
              priority
              className="w-full h-[320px] sm:h-[420px] md:h-[460px] block rounded-[24px] object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floater Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 right-4 sm:right-6 inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-full font-heading text-[13px] text-gray-800 border border-gray-150 shadow-lg shadow-black/5"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_var(--color-green-400)]" />
            <span>Rooted in Identity</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
