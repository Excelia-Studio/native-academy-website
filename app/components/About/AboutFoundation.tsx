'use client';

import { motion } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Target02Icon, EyeIcon, Shield01Icon } from '@hugeicons/core-free-icons';

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

const cardListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const foundations = [
  {
    badge: 'Our Mission',
    icon: Target02Icon,
    title: 'Heritage Preservation',
    desc: 'To become a household name for learning native African languages and a bridge for the preservation of African languages for people of African descent in foreign countries.',
    colorClass: 'text-green-600 bg-green-50 border-green-150',
    hoverBg: 'hover:bg-green-50/40 hover:border-green-300',
    iconColor: 'text-green-600 bg-green-50 border-green-100',
    border: "border-green-100",
  },
  {
    badge: 'Our Vision',
    icon: EyeIcon,
    title: 'To Lead Globally',
    desc: 'To position the school to become one of the leading brands in the provision of online language schooling for Africans in foreign countries.',
    colorClass: 'text-amber-600 bg-amber-50 border-amber-150',
    hoverBg: 'hover:bg-amber-50/40 hover:border-amber-300',
    iconColor: 'text-amber-600 bg-amber-50 border-amber-100',
    border: "border-amber-100"
  },
  {
    badge: 'Our Core Value',
    icon: Shield01Icon,
    title: 'Core Value',
    desc: "Direct preservation of African languages' heritage by providing deep immersion and high-quality native education.",
    colorClass: 'text-green-700 bg-green-50 border-green-150',
    hoverBg: 'hover:bg-green-50/40 hover:border-green-300',
    iconColor: 'text-green-600 bg-green-50 border-green-100',
    border: 'border-green-100'
  },
];

export default function AboutFoundation() {
  return (
    <section className="py-16 md:py-[100px] bg-gray-50 overflow-hidden" id="about-foundation">
      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col items-center max-w-xl mx-auto mb-16">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[15px] tracking-tight uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none mb-4"
          >
            Our Foundation
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-heading-two text-[30px] sm:text-[38px] lg:text-[44px] text-gray-950 leading-[1.1] mb-5"
          >
            Built on <span className="text-green-600 font-normal">Purpose</span> & <span className="text-green-600 font-normal">Heritage</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-[17px] leading-[1.7] text-gray-500"
          >
            Every live class, every interactive story, and every conversation is guided by a strong foundation of values.
          </motion.p>
        </div>

        {/* Foundation cards grid */}
        <motion.div
          variants={cardListVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {foundations.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`p-8 rounded-[24px] bg-white border border-gray-100 transition-all duration-300 flex flex-col justify-between h-full group ${item.hoverBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className={`inline-flex items-center px-3 py-1 font-heading text-[11px] tracking-tight uppercase rounded-full border ${item.border} ${item.colorClass}`}>
                      {item.badge}
                    </span>
                    <div className={`p-3 rounded-2xl border shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}>
                      <HugeiconsIcon icon={IconComp} size={20} />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl text-gray-950 mb-3 group-hover:text-green-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-[15px] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-heading">
                  <span>Native Academy</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-green-600 font-semibold">Learn more &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
