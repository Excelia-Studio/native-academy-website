'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';

const contactFaqs = [
  {
    q: 'Can I enroll a student mid-cohort?',
    a: 'Our flagship Yoruba Academy cohorts launch on the 1st of every month. Because we cap classes at 6 students to guarantee individual attention, mid-month enrollments are rarely possible. We recommend completing this contact form to secure your child’s seat for the upcoming month.',
  },
  {
    q: 'What if the class schedules conflict with our timezone?',
    a: 'We teach children in the UK, USA, Canada, and Europe. Once you register, we look at your timezone and match your child with a cohort that has convenient weekend or weekday evening hours in your local time.',
  },
  {
    q: 'What is your refund or trial policy?',
    a: 'We want you and your child to feel completely confident. We offer a 7-day money-back guarantee from the date of the first class. If you feel the program, curriculum, or tutor is not a great fit, we will issue a full refund.',
  },
  {
    q: 'How are new languages prioritized on the waitlist?',
    a: 'We analyze waitlist numbers weekly. Once a language track (such as Swahili, Igbo, Zulu, Twi, or Hausa) reaches 20 qualified waitlist registrations in a matching timezone, we schedule a cohort and notify waitlisted families with exclusive early-bird scheduling slots.',
  },
];

export default function ContactFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden" id="contact-faqs">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none mb-4">
            Enrollment Help
          </span>
          <h2 className="font-heading-two text-[26px] sm:text-[32px] text-gray-950 leading-tight">
            Frequently Asked <span className="text-green-600">Enrollment Questions</span>
          </h2>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-3.5 w-full">
          {contactFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -1 }}
                className={`rounded-2xl bg-gray-50 border overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-green-400 ring-1 ring-green-400 bg-white' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 bg-transparent border-none cursor-pointer text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  id={`contact-faq-q-${i}`}
                >
                  <span className="font-heading text-[15px] sm:text-base text-gray-900 leading-snug font-bold">
                    {faq.q}
                  </span>
                  <motion.div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-green-600 text-white' : 'bg-white border border-gray-200 text-gray-500'
                    }`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  >
                    <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
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
                      <p className="px-5 pb-5 text-sm sm:text-[15px] leading-relaxed text-gray-500 border-t border-gray-100/50 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
