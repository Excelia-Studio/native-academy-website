'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CameraVideoIcon,
  BookOpen01Icon,
  UserGroupIcon,
  Target02Icon,
  Analytics01Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';

const features = [
  { icon: CameraVideoIcon, title: 'Live Interactive Classrooms', desc: 'Real-time video sessions with expert tutors.' },
  { icon: BookOpen01Icon, title: 'Cultural Context Integration', desc: 'Lessons woven with stories, proverbs, and songs.' },
  { icon: UserGroupIcon, title: 'Small Class Sizes', desc: 'Personalised attention for every child.' },
  { icon: Target02Icon, title: 'Age-Aligned Cohorts', desc: 'Classes tailored from toddlers to young adults.' },
  { icon: Analytics01Icon, title: 'Scaffolded Pathways', desc: 'Progressive curriculum building to fluency.' },
];

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

const featureListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Services() {
  return (
    <section className="py-16 md:py-[100px] bg-white overflow-hidden" id="services">
      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col gap-4 items-start text-left">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading font-semibold text-[15px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none"
          >
            Our Flagship
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-heading-two text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-gray-950"
          >
            Live Online <span className="text-green-600">Yorùbá</span> Classes
          </motion.h2>
          <motion.p variants={itemVariants} className="font-heading text-lg text-amber-500">
            Ages 3 to 25
          </motion.p>
          <motion.p variants={itemVariants} className="text-sm sm:text-base leading-[1.7] text-gray-500 max-w-[440px]">
            Our signature program takes kids from zero vocabulary to confident, fluid
            conversations. We don&apos;t just teach words — we celebrate the culture.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-2 w-full max-w-[440px] md:max-w-none"
          >
            <div className="overflow-hidden rounded-[16px] shadow-lg shadow-black/5 group">
              <Image
                src="/images/class.webp"
                alt="Young student learning on laptop"
                width={480}
                height={320}
                className="w-full h-[200px] sm:h-[260px] md:h-[320px] block rounded-[16px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 items-start w-full">
          <motion.div variants={featureListVariants} className="flex flex-col gap-3 w-full">
            {features.map((f, i) => {
              const IconComp = f.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 6, backgroundColor: 'rgba(240, 253, 244, 0.8)', borderColor: 'rgba(187, 247, 208, 1)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex gap-3.5 py-5 px-5 rounded-2xl border border-gray-100 bg-white shadow-none transition-shadow items-start cursor-default"
                >
                  <div className="p-2.5 rounded-2xl bg-green-50 text-green-600 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <HugeiconsIcon icon={IconComp} size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm leading-[1.5] text-gray-500">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
            <Button asChild size="lg" className="w-auto px-7 py-3 h-auto bg-green-600 hover:bg-green-700 text-white font-medium shadow-none rounded-full transition-all">
              <Link href="/services" id="services-cta">
                Learn more
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


