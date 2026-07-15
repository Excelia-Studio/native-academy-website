'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserGroupIcon,
  CameraVideoIcon,
  SparklesIcon,
  GlobeIcon,
  Search01Icon,
  Cancel01Icon,
  ArrowRight01Icon,
  ArrowDown01Icon,
  WhatsappIcon,
  Mail01Icon,
} from '@hugeicons/core-free-icons';

interface FAQItem {
  id: string;
  q: string;
  a: string;
  topic: string;
  category: 'curriculum' | 'classroom' | 'future';
  icon: any;
  color: 'green' | 'amber';
}

const faqsData: FAQItem[] = [
  {
    id: 'faq-01',
    q: 'What age groups do you cater to?',
    a: 'We provide specialised curriculum tracks fitting for learners aged 3 to 25. Classes are grouped appropriately by age and initial proficiency levels.',
    topic: 'Age Groups & Placement',
    category: 'curriculum',
    icon: UserGroupIcon,
    color: 'green',
  },
  {
    id: 'faq-02',
    q: 'How are the live classes conducted?',
    a: 'All classes are hosted entirely online through secure, interactive video learning spaces. Tutors guide students using live dialogues, shared visual learning aids, and group activities.',
    topic: 'Classroom Environment',
    category: 'classroom',
    icon: CameraVideoIcon,
    color: 'amber',
  },
  {
    id: 'faq-03',
    q: 'My child speaks zero African languages right now. Can they join?',
    a: 'Absolutely. Our curriculum is specifically built to accommodate beginners, giving them a comfortable, low-pressure foundation to build confidence step-by-step.',
    topic: 'Language Prereqs',
    category: 'curriculum',
    icon: SparklesIcon,
    color: 'green',
  },
  {
    id: 'faq-04',
    q: 'Are there plans to introduce other languages?',
    a: 'Yes! While our live Yorùbá track is fully operational, our explicit vision is to build an inclusive online portal offering multiple native African languages for diaspora children globally',
    topic: 'Our Future Vision',
    category: 'future',
    icon: GlobeIcon,
    color: 'amber',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'faq-01': true, // Open the first one by default
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesSearch =
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.topic.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'curriculum', label: 'Curriculum & Placement' },
    { id: 'classroom', label: 'Virtual Experience' },
    { id: 'future', label: 'Expansion & Vision' },
  ];

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <div className="relative min-h-screen bg-gray-50 pt-28 pb-16 lg:pt-[140px] lg:pb-24 overflow-hidden">
      {/* Visual Mesh Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700 shadow-none">
              FAQ & Help Center
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] sm:text-[44px] md:text-[52px] font-heading-hero leading-[1.1] text-gray-950 mb-6"
          >
            Got Questions? <span className="text-green-600">We Have Answers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] sm:text-base md:text-[17px] leading-[1.7] text-gray-500"
          >
            Find helpful responses regarding our class delivery, curriculum, age groups, and language roadmap.
          </motion.p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="max-w-3xl mx-auto mb-12 flex flex-col gap-6 items-center">
          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="absolute inset-y-0 left-4.5 flex items-center pointer-events-none text-gray-400">
              <HugeiconsIcon icon={Search01Icon} size={20} />
            </div>
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-white border border-gray-100 rounded-full text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-green-300 focus:ring-2 focus:ring-green-300/10 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-none p-1"
                aria-label="Clear search"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={18} />
              </button>
            )}
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 max-w-full"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4.5 py-2 text-xs font-heading font-medium tracking-wide rounded-full border cursor-pointer transition-all duration-200 ${isActive
                    ? 'bg-green-600 border-green-600 text-white shadow-sm'
                    : 'bg-white border-gray-150 text-gray-600 hover:border-green-200 hover:bg-green-50/50'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* FAQs Display Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isExpanded = !!expandedCards[faq.id];
              const IconComponent = faq.icon;
              const isGreen = faq.color === 'green';

              return (
                <motion.div
                  key={faq.id}
                  variants={cardVariants}
                  layout
                  whileHover={{ y: -4 }}
                  className={`relative flex flex-col p-6 lg:p-7 bg-white border rounded-3xl transition-all duration-300 ${isExpanded ? 'border-green-600/35' : 'border-gray-100 hover:border-gray-200'
                    }`}
                >
                  {/* Decorative Border Accent */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${isGreen ? 'from-green-500 to-green-600' : 'from-amber-400 to-amber-500'
                      }`}
                  />

                  {/* Top Row: Badge & Index */}
                  <div className="flex justify-between items-center mb-5 mt-1">
                    <span
                      className={`text-[10px] tracking-[0.06em] font-heading font-semibold uppercase px-2.5 py-1 rounded-full ${isGreen ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                        }`}
                    >
                      {faq.topic}
                    </span>
                    <span className="font-heading text-xs text-gray-300 font-medium">
                      {faq.id.replace('faq-', '#')}
                    </span>
                  </div>

                  {/* Header: Icon & Question */}
                  <div className="flex gap-4 items-start mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isGreen ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
                        }`}
                    >
                      <HugeiconsIcon icon={IconComponent} size={20} />
                    </div>
                    <button
                      onClick={() => toggleExpand(faq.id)}
                      className="text-left font-heading text-[17px] lg:text-lg text-gray-900 font-semibold leading-[1.3] pt-1 flex-1 cursor-pointer bg-transparent border-none p-0 focus:outline-none hover:text-green-600 transition-colors"
                    >
                      {faq.q}
                    </button>
                  </div>

                  {/* Body Content (Answer) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[14.5px] leading-[1.65] text-gray-500 border-t border-gray-50 pt-4 mt-1">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Indicator Button */}
                  <div className="flex justify-end mt-4 pt-3 border-t border-gray-50">
                    <button
                      onClick={() => toggleExpand(faq.id)}
                      className={`flex items-center gap-1 text-[11px] font-heading font-semibold uppercase tracking-wider transition-colors cursor-pointer bg-transparent border-none ${isExpanded ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                      {isExpanded ? 'Hide Details' : 'Show Details'}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      >
                        <HugeiconsIcon icon={ArrowDown01Icon} size={12} />
                      </motion.div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white border border-gray-100 rounded-2xl max-w-xl mx-auto shadow-sm"
          >
            <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <HugeiconsIcon icon={Search01Icon} size={24} />
            </div>
            <h3 className="font-heading text-lg text-gray-900 mb-2">No matching questions found</h3>
            <p className="text-sm text-gray-500 px-6 max-w-sm mx-auto mb-6">
              We couldn&apos;t find any answers for &quot;{searchQuery}&quot; in the selected category.
            </p>
            <Button
              onClick={resetFilters}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full font-medium shadow-none px-5 py-2.5 h-auto text-xs"
            >
              Reset Filters
            </Button>
          </motion.div>
        )}

        {/* Bottom CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 lg:mt-24 max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gray-900 overflow-hidden py-10 px-8 sm:p-12 lg:p-14 text-center">
            {/* Ambient Circle Backgrounds */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 font-heading text-[10px] tracking-[0.06em] uppercase rounded-full bg-white/5 text-green-400 border border-white/10 mb-4">
                Support
              </span>
              <h2 className="font-heading-two text-[26px] sm:text-[32px] text-white leading-tight mb-4">
                Still Have Questions?
              </h2>
              <p className="text-sm sm:text-[15px] leading-[1.6] text-gray-400 mb-8">
                We are dedicated to helping your child succeed. If you need any assistance, reach out directly or submit our quick intake form.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="w-full sm:w-auto">
                  <Button asChild size="default" className="w-full sm:w-auto px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-none py-3.5 h-auto text-sm transition-all">
                    <a href="https://docs.google.com/forms/d/1ejqCIsjfUUijEPy1lPxpxlF18NJtwbXSZybKH-6OSD0/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
                      Enrollment Form
                      <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="w-full sm:w-auto">
                  <Button asChild variant="outline" size="default" className="w-full sm:w-auto px-6 border-white/10 hover:border-green-500 hover:bg-green-500/10 text-white font-medium rounded-full py-3.5 h-auto text-sm transition-all bg-transparent">
                    <a href="/contact">
                      <HugeiconsIcon icon={Mail01Icon} size={16} />
                      Contact Support
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
