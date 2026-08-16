'use client';

import { motion } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  WhatsappIcon,
  Mail01Icon,
  FacebookIcon,
  InstagramIcon,
  ArrowRight01Icon,
  GlobeIcon,
  SparklesIcon,
} from '@hugeicons/core-free-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ContactDetails() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100 overflow-hidden" id="direct-contact">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header Section */}
        <div className="text-center max-w-[600px] mx-auto mb-12 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[15px] tracking-[0.06em] uppercase rounded-full bg-amber-50 text-amber-700 border border-amber-200 shadow-none mb-4">
            Direct Access
          </span>
          <h2 className="font-heading-two text-[28px] sm:text-[36px] text-gray-950 leading-tight">
            Connect With Our <span className="text-green-600">Advisors Directly</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Prefer a direct conversation? Choose your preferred channel to get in touch with our team instantly.
          </p>
        </div>

        {/* Channels Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {/* Channel 1: WhatsApp */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between group transition-all hover:shadow-lg hover:shadow-green-900/5 hover:border-green-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-5 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <HugeiconsIcon icon={WhatsappIcon} size={24} />
              </div>
              <h3 className="font-heading text-lg text-gray-900 font-bold mb-1.5">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-gray-400 mb-4 font-mono">
                +44 7934 808642
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Connect with our advisors instantly for quick enrollment setup, scheduling adjustments, or cohort inquiries.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-50">
              <a
                href="https://wa.me/447934808642"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading text-sm text-green-600 group-hover:text-green-700 font-semibold no-underline"
              >
                Send a WhatsApp
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Channel 2: Email */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between group transition-all hover:shadow-lg hover:shadow-green-900/5 hover:border-green-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <HugeiconsIcon icon={Mail01Icon} size={24} />
              </div>
              <h3 className="font-heading text-lg text-gray-900 font-bold mb-1.5">
                Email Support
              </h3>
              <p className="text-xs text-gray-400 mb-4 font-mono">
                nativeacada@gmail.com
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                For detailed curriculum reviews, international billing setups, corporate partnerships, or custom school inquiries.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-50">
              <a
                href="mailto:nativeacada@gmail.com"
                className="inline-flex items-center gap-1.5 font-heading text-sm text-amber-600 group-hover:text-amber-700 font-semibold no-underline"
              >
                Write an Email
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Channel 3: WhatsApp Channel (Weekly Updates) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between group transition-all hover:shadow-lg hover:shadow-green-900/5 hover:border-green-300 md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-5 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <HugeiconsIcon icon={SparklesIcon} size={24} />
              </div>
              <h3 className="font-heading text-lg text-gray-900 font-bold mb-1.5">
                Free Weekly Updates
              </h3>
              <p className="text-xs text-gray-400 mb-4 font-sans">
                Join our WhatsApp Channel
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Stay updated with free mini vocabulary guides, cultural stories, cohort availability, and upcoming community workshops for diaspora kids.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-50">
              <a
                href="https://whatsapp.com/channel/0029VaDPn1tH5JM3M6v7iM0L" // Standard fallback channel link format or wa.me redirect, but since we just have details we direct to standard WA
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading text-sm text-green-600 font-semibold no-underline"
              >
                Join Channel
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Social communities divider */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-gray-200/50">
          <span className="text-sm text-gray-400 font-medium">Follow our cultural milestones:</span>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/p/Native-Academy-61578914925330/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-semibold text-gray-600 hover:text-green-600 hover:border-green-200 shadow-xs no-underline"
            >
              <HugeiconsIcon icon={FacebookIcon} size={18} className="text-blue-600" />
              Facebook
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/reel/DNvaD4wYkUf/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-semibold text-gray-600 hover:text-green-600 hover:border-green-200 shadow-xs no-underline"
            >
              <HugeiconsIcon icon={InstagramIcon} size={18} className="text-pink-600" />
              Instagram
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://whatsapp.com/channel/0029VaDPn1tH5JM3M6v7iM0L"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-semibold text-gray-600 hover:text-green-600 hover:border-green-200 shadow-xs no-underline"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={18} className="text-green-600" />
              Whatsapp
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
