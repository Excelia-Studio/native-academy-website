'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowRight01Icon,
  Globe02Icon,
  UserGroupIcon,
  Target02Icon,
} from '@hugeicons/core-free-icons';

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

const pillarListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const pillars = [
  {
    num: '01',
    icon: Globe02Icon,
    title: 'Rooted in Culture',
    desc: 'Preserving identity, heritage, and tradition through natural language learning.',
  },
  {
    num: '02',
    icon: UserGroupIcon,
    title: 'Community First',
    desc: 'Building vibrant bridges of connection across borders and diaspora families.',
  },
  {
    num: '03',
    icon: Target02Icon,
    title: 'Purpose Driven',
    desc: 'Empowering every child with the gift of speaking their native mother tongue with pride.',
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-[100px] bg-gray-950 relative overflow-hidden" id="who-we-are">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10"
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
            Who We Are
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-heading-two text-[30px] sm:text-[40px] lg:text-[48px] text-white leading-[1.08]"
          >
            The Place of the <span className="text-green-400">First Language</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base md:text-[17px] leading-[1.7] max-w-[480px]"
          >
            Native Academy was born from a simple, profound idea: creating a dedicated space for studying the first language. We believe that the mother tongue is the key to cultural identity, family connection, and self-confidence.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="w-full max-w-[480px] md:max-w-none mt-2"
          >
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 group shadow-2xl shadow-green-950/40">
              <Image
                src="/images/about-us.webp"
                alt="Children engaging in cultural learning"
                width={520}
                height={340}
                className="w-full h-[200px] sm:h-[260px] md:h-[280px] block rounded-[20px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-gray-950/80 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Preserving Heritage & Identity
                </span>
                <span className="text-green-400 font-semibold">100% Native Speakers</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-2"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild size="lg" className="w-auto px-7 py-3.5 h-auto bg-green-400 hover:bg-green-300 text-gray-950 font-medium rounded-full shadow-lg shadow-green-400/20 transition-all">
                <a href="#" id="whoweare-cta">
                  Know more
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: 3 Pillars Stack */}
        <motion.div variants={pillarListVariants} className="flex flex-col gap-3 w-full">
          {pillars.map((p, i) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  x: 6,
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(74, 222, 128, 0.4)',
                  boxShadow: '0 12px 30px -10px rgba(34, 197, 94, 0.2)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-xs border border-white/5 transition-all duration-300 flex items-start gap-5 cursor-default group"
              >
                <div className="p-3 rounded-2xl bg-green-500/10 text-green-400 border border-green-500/20 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                  <HugeiconsIcon icon={IconComp} size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-heading text-base sm:text-lg text-white">{p.title}</h3>

                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-[1.6]">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
