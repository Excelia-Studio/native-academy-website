'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowRight01Icon,
  CameraVideoIcon,
  UserGroupIcon,
  CheckmarkCircle02Icon,
  StarIcon,
} from '@hugeicons/core-free-icons';

const reasons = [
  {
    num: '01',
    icon: CameraVideoIcon,
    title: 'Interactive Live Environments',
    desc: 'No boring pre-recorded video loops. Real-time engagement with passionate tutors who bring language and culture to life.',
  },
  {
    num: '02',
    icon: UserGroupIcon,
    title: 'Peer Connection',
    desc: 'Your children learn alongside other diaspora kids, building a community of global peers who share their heritage.',
  },
  {
    num: '03',
    icon: CheckmarkCircle02Icon,
    title: 'Peace of Mind for Parents',
    desc: "Rest easy knowing the future of your family's native language and culture is fully protected and nurtured.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
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

const reasonListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function WhyTrust() {
  return (
    <section className="py-16 md:py-[100px] bg-gray-50 overflow-hidden" id="why-trust">
      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Left Side: Badge, Title, Description, Image & CTA */}
        <div className="flex flex-col gap-5 items-start text-left">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none"
          >
            Why Us
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-heading-two text-[30px] sm:text-[38px] lg:text-[44px] text-gray-950 leading-[1.1]"
          >
            Why Parents Trust <span className="text-green-600">Native Academy</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-[17px] leading-[1.7] text-gray-500 max-w-[460px]"
          >
            We provide an immersive, supportive environment where children don&apos;t just memorize words — they build lifelong connections to their roots and heritage.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="relative w-full max-w-[460px] md:max-w-none mt-2"
          >
            <div className="overflow-hidden rounded-[20px] shadow-lg shadow-black/5 group border border-gray-100">
              <Image
                src="/images/parent.webp"
                alt="Mother helping child learn online"
                width={500}
                height={330}
                className="w-full h-[200px] sm:h-[260px] md:h-[280px] block rounded-[20px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-3 right-4 inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full font-heading text-[13px] text-gray-800 border border-gray-200/80 shadow-lg shadow-black/5"
            >
              <HugeiconsIcon icon={StarIcon} size={16} className="text-amber-500 fill-amber-500" />
              <span>4.9/5 Parent Rating</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Button asChild variant="outline" size="lg" className="w-auto px-7 py-3.5 h-auto border-gray-200 hover:border-green-300 hover:bg-green-50/80 text-green-800 font-medium rounded-full shadow-none transition-all">
                <a href="#" id="whytrust-cta">
                  Learn more
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Stack of 3 Cards */}
        <motion.div variants={reasonListVariants} className="flex flex-col gap-3 w-full">
          {reasons.map((r, i) => {
            const IconComp = r.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  x: 6,
                  backgroundColor: 'rgba(240, 253, 244, 0.7)',
                  borderColor: 'rgba(187, 247, 208, 1)',
                  boxShadow: '0 12px 28px -8px rgba(0, 0, 0, 0.06)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-100 cursor-default transition-all duration-300 flex items-start gap-4.5 group"
              >
                <div className="p-3 rounded-2xl bg-green-50 text-green-600 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                  <HugeiconsIcon icon={IconComp} size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading text-base sm:text-lg text-gray-900 leading-[1.3]">{r.title}</h3>
                  </div>
                  <p className="text-sm sm:text-[15px] leading-[1.6] text-gray-500">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}


