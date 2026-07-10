'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

const testimonials = [
  {
    quote: "Living in the UK, I was deeply worried my 8-year-old would lose our language entirely. After just a few weeks with Native Academy's live classes, he is greeting family members confidently in Yorùbá. It's an invaluable gift.",
    name: 'Oluwaseun A.',
    location: 'London, UK',
    tag: 'Invaluable gift',
  },
  {
    quote: "My teenage daughter actually looks forward to her weekend classes. The interaction with other diaspora kids makes it feel less like regular school and more like a cultural club. Highly recommend!",
    name: 'Tunde W.',
    location: 'Houston, USA',
    tag: 'Engaging and deeply interactive',
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

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-[100px] bg-white overflow-hidden" id="testimonials">
      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={itemVariants} className="text-left max-w-[600px] mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100">
            Testimonials
          </span>
          <h2 className="font-heading-two text-[26px] sm:text-[32px] md:text-[38px] lg:text-[46px] text-gray-950 mt-4 mb-3.5">
            Stories of <span className="text-green-600">Pride</span>, Connection, and Confidence
          </h2>
          <p className="text-sm sm:text-base leading-[1.7] text-gray-500">
            See how diaspora parents are experiencing the ultimate peace of mind knowing
            their children&apos;s cultural heritage is secure.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`p-7 rounded-2xl border cursor-pointer transition-all duration-300 bg-white relative overflow-hidden ${isActive
                  ? 'border-green-400 shadow-xl shadow-green-500/5'
                  : 'border-gray-100 hover:border-gray-200 shadow-none'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-testimonial-border"
                    className="absolute inset-0 border border-green-400 rounded-2xl pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <p className="inline-block px-2.5 py-1 bg-green-50 text-green-700 font-heading text-[12px] rounded-full mb-3.5">
                  {t.tag}
                </p>
                <blockquote className="text-sm sm:text-base text-gray-600 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-[36px] h-[36px] rounded-full bg-green-50 text-green-700 font-heading text-sm flex items-center justify-center">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-sm text-gray-900">{t.name}</p>
                    <p className="text-[13px] text-gray-400">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 mb-8">
          {testimonials.map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                className="relative h-2 rounded-full border-none cursor-pointer p-0 bg-gray-200 overflow-hidden w-6"
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-testimonial-dot"
                    className="absolute inset-0 bg-green-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.div className="inline-block" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
            <Button asChild variant="outline" size="lg" className="w-auto px-7 py-3 h-auto border-gray-200 hover:border-green-300 hover:bg-green-50/80 text-green-800 font-medium rounded-full shadow-none transition-all">
              <a href="#" id="testimonials-cta">
                View more
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

