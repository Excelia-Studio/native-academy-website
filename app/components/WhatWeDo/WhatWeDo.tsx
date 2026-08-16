'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { AlertCircleIcon, CheckmarkCircle02Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

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

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-[100px] bg-gray-50 overflow-hidden" id="what-we-do">
      <motion.div
        className="max-w-2xl lg:max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex flex-col gap-6 items-start">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[15px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100"
          >
            What We Do
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-heading-two text-[30px] md:text-[44px] text-gray-950 leading-[1.1] tracking-tighter"
          >
            Distance Shouldn&apos;t Mean <span className="text-green-600">Disconnection</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full">
            {/* The Diaspora Concern Card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-amber-50/50 border border-amber-200/50 cursor-default"
            >
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600 w-10 h-10 mt-0.5">
                <HugeiconsIcon icon={AlertCircleIcon} size={20} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-gray-900 mb-1">The Diaspora Challenge</h3>
                <p className="text-sm leading-[1.6] text-gray-600">
                  As a parent living abroad, it&apos;s natural to worry that your children might lose touch with their heritage, family values, and native mother tongue.
                </p>
              </div>
            </motion.div>

            {/* The Native Academy Solution Card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-green-50/50 border border-green-200/50 cursor-default"
            >
              <div className="p-2.5 rounded-xl bg-green-100 text-green-600 w-10 h-10 mt-0.5">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-gray-900 mb-1">Our Interactive Solution</h3>
                <p className="text-sm leading-[1.6] text-gray-600">
                  We are a dedicated digital school that promotes native languages for African children in the diaspora through vibrant, interactive, live online classes.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
            <Button asChild size="lg" className="w-auto px-7 py-3 h-auto bg-green-600 hover:bg-green-700 text-white font-medium shadow-none rounded-full transition-all">
              <Link href="/services" id="whatwedo-cta">
                Learn more
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 24 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="relative max-w-[440px] md:max-w-none mx-auto w-full"
        >
          <div className="overflow-hidden rounded-[24px] shadow-lg shadow-black/5 group">
            <Image
              src="/images/afri-child.jpg"
              alt="Children learning together"
              width={800}
              height={800}
              className="w-full h-[280px] sm:h-[380px] md:h-[480px] block rounded-[24px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


