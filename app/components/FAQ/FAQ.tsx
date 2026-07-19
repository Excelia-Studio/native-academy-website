'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';

const faqs = [
  {
    q: 'What age groups do you cater to?',
    a: 'We provide specialised curriculum tracks fitting for learners aged 3 to 25. Classes are grouped appropriately by age and initial proficiency levels.',
  },
  {
    q: 'How are the live classes conducted?',
    a: 'All classes are hosted entirely online through secure, interactive video learning spaces. Tutors guide students using live dialogues, shared visual learning aids, and group activities.',
  },
  // {
  //   q: 'My child speaks zero African languages right now. Can they join?',
  //   a: 'Absolutely. Our curriculum is specifically built to accommodate beginners, giving them a comfortable, low-pressure foundation to build confidence step-by-step.',
  // },

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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-[100px] bg-gray-50 overflow-hidden" id="faq">
      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-4 items-start text-left lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100">
            FAQ
          </span>
          <h2 className="font-heading-two text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-gray-950 leading-[1.15]">
            Got Questions? <span className="text-green-600">We Have Answers.</span>
          </h2>
          <p className="text-sm sm:text-[15px] leading-[1.7] text-gray-500 mb-2">
            Everything you need to know about our programs.
          </p>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
            <Button asChild size="lg" className="w-auto px-7 py-3 h-auto bg-green-600 hover:bg-green-700 text-white font-medium shadow-none rounded-full transition-all">
              <Link href="/faq" id="whatwedo-cta">
                See more
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-3 w-full">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`rounded-lg bg-white border overflow-hidden transition-colors ${isOpen ? 'border-green-400/50 ring-1 ring-green-400' : 'border-gray-100 hover:border-gray-200'
                  }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-4.5 px-5 bg-transparent border-none cursor-pointer text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  id={`faq-q-${i}`}
                >
                  <span className="font-heading text-base text-gray-900 leading-[1.4] flex-1">
                    {faq.q}
                  </span>
                  <motion.div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-green-600 text-white' : 'bg-gray-50 text-gray-500'
                      }`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  >
                    <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-5 pb-4.5 text-[15px] leading-[1.7] text-gray-500 border-t border-gray-50 pt-3">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

