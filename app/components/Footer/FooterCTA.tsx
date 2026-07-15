'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowRight01Icon,
  PlayIcon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  SparklesIcon,
  StarIcon,
} from '@hugeicons/core-free-icons';

const perks = [
  'Live 1-on-1 & Small Group Tutors',
  'Flexible Weekend & Evening Slots',
  '7-Day Risk-Free Guarantee',
];

export default function FooterCTA() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="bg-gray-950 py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Main Glass Card */}
        <div className="relative overflow-hidden rounded-4xl border border-white/10 p-6 sm:p-10 lg:p-16 shadow-2xl backdrop-blur-2xl max-w-2xl lg:max-w-none mx-auto">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline & Interactive Explorer */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-start gap-2 self-start px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-emerald-300 text-xs font-semibold tracking-wide uppercase"
              >
                <HugeiconsIcon icon={SparklesIcon} size={15} className="text-emerald-400 animate-pulse" />
                <span>Join 500+ Diaspora Families Today</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-heading text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tighter"
              >
                Ready to Protect Your Child&apos;s{' '}
                <span className="text-green-400 bg-clip-text">
                  Cultural Heritage?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl"
              >
                Give your children the confidence to speak their native language fluently with engaging, 1-on-1 live lessons designed specifically for diaspora kids.
              </motion.p>
            </div>

            {/* Right Column: CTA Actions & Social Proof */}
            <div className="lg:col-span-5 flex flex-col gap-6 items-start lg:items-end w-full">
              {/* Glass Card Box for Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="w-full max-w-md p-6 sm:p-8 rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-xl shadow-2xl flex flex-col gap-5"
              >
                {/* Social Proof Badging */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex -space-x-2">
                    {['/avatar1.png', '/avatar2.png', '/avatar3.png', '/avatar4.png'].map((src, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                      >
                        {['AO', 'KW', 'TM', 'EF'][idx]}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-start sm:items-end">
                    <div className="flex text-amber-400 gap-0.5 animate-pulse">
                      {[...Array(5)].map((_, i) => (
                        <HugeiconsIcon key={i} icon={StarIcon} size={14} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-300 font-medium">4.9/5 from 500+ parents</span>
                  </div>
                </div>

                {/* Primary Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="w-full py-4 h-auto bg-amber-500 hover:bg-amber-600 text-gray-950 font-medium rounded-full relative overflow-hidden group border-0"
                  >
                    <a href="https://docs.google.com/forms/d/1ejqCIsjfUUijEPy1lPxpxlF18NJtwbXSZybKH-6OSD0/viewform?edit_requested=true" target='_blank' rel='noopener noreferrer' id="footer-cta-primary" className="flex items-center justify-center gap-2">
                      <span>Save your child&apos;s spot</span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </Button>
                </motion.div>

                {/* Secondary Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => setIsVideoModalOpen(true)}
                    variant="outline"
                    size="lg"
                    id="footer-cta-secondary"
                    className="w-full py-3.5 h-auto border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white hover:text-white font-medium text-sm rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <HugeiconsIcon icon={PlayIcon} size={14} className="ml-0.5 fill-emerald-400" />
                    </div>
                    <span>Watch free demo lesson</span>
                  </Button>
                </motion.div>

                {/* Perks Bullet Points */}
                <div className="flex flex-col gap-2 pt-2">
                  {perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <HugeiconsIcon icon={CheckmarkCircle02Icon} size={11} />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Preview */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl border border-white/20 bg-gray-900 overflow-hidden shadow-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <h3 className="font-heading text-lg text-white">
                    Native Academy Demo Lesson Class
                  </h3>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 rounded-lg bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={20} />
                </button>
              </div>

              {/* Video Container placeholder/iframe */}
              <div className="relative aspect-video rounded-xl bg-gray-950 overflow-hidden border border-white/10 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  <HugeiconsIcon icon={PlayIcon} size={32} className="ml-1 fill-amber-400" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">Sample Interactive Yorùbá Class</h4>
                <p className="text-gray-400 text-sm max-w-md">
                  Watch how our certified native tutors make learning engaging, fun, and natural for kids aged 3–16.
                </p>
                <div className="mt-6 flex gap-3">
                  <Button
                    onClick={() => {
                      setIsVideoModalOpen(false);
                      const el = document.getElementById('footer-cta-primary');
                      if (el) el.click();
                    }}
                    className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-6 py-2.5 rounded-lg text-sm"
                  >
                    Enroll in Trial Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
