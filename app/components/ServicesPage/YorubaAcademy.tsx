'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CameraVideoIcon,
  BookOpen01Icon,
  UserGroupIcon,
  Target02Icon,
  Analytics01Icon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from '@hugeicons/core-free-icons';

const tracks = [
  {
    id: 'irawo',
    title: 'Ìràwọ̀ (Little Stars)',
    age: 'Ages 3 to 6',
    tagline: 'Play-based immersive learning for early learners.',
    description: 'We believe early exposure is key to natural accent acquisition. In this track, children learn through interactive play, colorful animations, nursery rhymes, and basic vocabulary cards.',
    curriculum: [
      'Interactive Greetings (Ìkíni)',
      'Numbers 1–10 & Basic Colors',
      'Animals, Fruits & Everyday Objects',
      'Traditional Children Songs & Rhymes'
    ],
    accentColor: 'green',
    bgClass: 'bg-green-50/30 border-green-200/40',
    textClass: 'text-green-700',
    badgeClass: 'bg-green-100/50 text-green-800'
  },
  {
    id: 'akanse',
    title: 'Àkànṣe (Special Leaders)',
    age: 'Ages 7 to 12',
    tagline: 'Building confident conversationalists and storytellers.',
    description: 'At this stage, we focus on grammar construction, simple sentence building, and cultural values. We introduce storytelling (Àlọ́) and structured games to build vocabulary in context.',
    curriculum: [
      'Introducing Oneself & Family Members',
      'Everyday Sentence Formations',
      'Yorùbá Folk Tales & Cultural Ethics (Ìwà)',
      'Basic Command Verbs & Questions'
    ],
    accentColor: 'amber',
    bgClass: 'bg-amber-50/30 border-amber-200/40',
    textClass: 'text-amber-700',
    badgeClass: 'bg-amber-100/50 text-amber-800'
  },
  {
    id: 'gbajumo',
    title: 'Gbajúmọ̀ (Popular Youth)',
    age: 'Ages 13 to 25',
    tagline: 'Advanced dialogue, proverbs, and identity integration.',
    description: 'Designed for teens and young adults to build conversational fluency, writing proficiency, and a mature understanding of Yorùbá history, proverbs (Òwe), and global contemporary culture.',
    curriculum: [
      'Advanced Conversational Debates & Slangs',
      'Use of Metaphors & Proverbs (Òwe)',
      'Yorùbá History, Geography & Kingship (Adé)',
      'Reading and Writing Accent Marks (Àmì)'
    ],
    accentColor: 'gray',
    bgClass: 'bg-gray-50/50 border-gray-200/40',
    textClass: 'text-gray-800',
    badgeClass: 'bg-gray-200/60 text-gray-800'
  }
];

const features = [
  {
    icon: CameraVideoIcon,
    title: 'Live Interactive Classrooms',
    desc: 'Highly engaging real-time sessions featuring conversational practices, vocabulary building, and immersive exercises. Your child is speaking from day one.',
  },
  {
    icon: BookOpen01Icon,
    title: 'Cultural Context Integration',
    desc: 'Lessons incorporate traditional greetings (Ìkíni), societal values, songs, and understanding everyday cultural norms that define identity.',
  },
  {
    icon: UserGroupIcon,
    title: 'Small Class Sizes',
    desc: 'Ensuring every child receives targeted feedback and personal attention. Tutors guide classes with a maximum of 5–6 students.',
  },
  {
    icon: Target02Icon,
    title: 'Age-Aligned Pedagogical Cohorts',
    desc: 'Students are segmented into distinct age groups to optimise collaborative learning dynamics and ensure peer-to-peer interactions are developmentally appropriate.',
  },
  {
    icon: Analytics01Icon,
    title: 'Scaffolded Competency Pathways',
    desc: 'Our proprietary, multi-tiered framework dynamically meets learners at their precise entry proficiency level, ensuring continuous linguistic growth from foundational exposure to advanced conversation.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function YorubaAcademy() {
  const [activeTab, setActiveTab] = useState('irawo');
  const activeTrack = tracks.find((t) => t.id === activeTab) || tracks[0];

  return (
    <section className="py-16 md:py-[100px] bg-gray-50 overflow-hidden border-t border-gray-100" id="yoruba-academy">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 mb-4">
            Flagship Program
          </span>
          <h2 className="font-heading-two text-[30px] md:text-[44px] text-gray-950 leading-[1.1] mb-5">
            Live Online <span className="text-green-600">Yorùbá Academy</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Our specialized curriculum takes kids and teens from zero vocabulary to confident, fluid conversations. We do not just teach translations; we celebrate culture and identity.
          </p>
        </div>

        {/* Part 1: Interactive Age Bracket Tracks */}
        {/* <div className="mb-20"> */}
        {/* <h3 className="font-heading text-lg sm:text-xl text-gray-950 font-bold mb-6">
            Customised Tracks for Learners Aged 3 to 25
          </h3> */}

        {/* Tabs Navigation */}
        {/* <div className="flex gap-2.5 p-1.5 bg-gray-200/50 rounded-2xl max-w-xl mb-8 overflow-x-auto scrollbar-none">
            {tracks.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex-1 min-w-[120px] py-3.5 px-4 font-heading text-xs font-semibold rounded-xl border-none cursor-pointer transition-all duration-300 ${activeTab === t.id
                  ? 'bg-white text-gray-900 shadow-md shadow-black/5 scale-[1.02]'
                  : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {t.title}
              </button>
            ))}
          </div> */}

        {/* Active Tab Content Panel */}
        {/* <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={`p-6 sm:p-8 rounded-[24px] border ${activeTrack.bgClass} grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start backdrop-blur-xs`}
            >
              <div className="flex flex-col items-start gap-4">
                <span className={`inline-block font-heading text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md ${activeTrack.badgeClass}`}>
                  {activeTrack.age}
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-gray-950 leading-tight">
                  {activeTrack.tagline}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-[620px]">
                  {activeTrack.description}
                </p>

                <div className="pt-4 w-full">
                  <h5 className="font-heading text-xs font-bold text-gray-900 uppercase tracking-widest mb-3.5">
                    What we cover in this track:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                    {activeTrack.curriculum.map((item, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <div className={`p-1 rounded-full ${activeTrack.badgeClass} shrink-0 mt-0.5`}>
                          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} />
                        </div>
                        <span className="text-[13px] sm:text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

        {/* Decorative custom mockup inside the tab panel */}
        {/* <div className="hidden lg:flex flex-col gap-3.5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm w-full cursor-default">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Class Preview</span>
                <div className="flex gap-3 items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${activeTrack.badgeClass}`}>
                    YA
                  </div>
                  <div>
                    <div className="font-heading text-[13px] font-semibold text-gray-900">Yorùbá Academy Cohort</div>
                    <div className="text-[10px] text-gray-400">Taught by Morayo A. (Expert Native Speaker)</div>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden my-1">
                  <div className={`h-full rounded-full ${activeTrack.accentColor === 'green' ? 'bg-green-600' : activeTrack.accentColor === 'amber' ? 'bg-amber-500' : 'bg-gray-800'
                    }`} style={{ width: '40%' }} />
                </div>
                <div className="text-[11px] text-gray-500 leading-relaxed italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                  &ldquo;Ìkíni: We start with proper greetings to adults. In Yoruba culture, respect is woven directly into how we say hello.&rdquo;
                </div>
              </div> */}
        {/* </motion.div>
          </AnimatePresence>
        </div> */}
        {/* </div> */}

        {/* Part 2: Program Features Grid */}
        <div className="mb-20">
          <h3 className="font-heading text-lg sm:text-xl text-gray-950 font-bold mb-8">
            Program Key Pillars
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {features.map((f, idx) => {
              const IconComp = f.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(221, 228, 223, 0.8)',
                    boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.04)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="p-6 sm:p-7 rounded-[22px] border border-gray-100/80 bg-white/70 cursor-default transition-all duration-300 flex flex-col gap-4.5 group"
                >
                  <div className="p-3 rounded-xl bg-green-50 text-green-600 shrink-0 self-start group-hover:scale-110 transition-transform duration-300">
                    <HugeiconsIcon icon={IconComp} size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base sm:text-lg text-gray-900 font-bold mb-2 group-hover:text-green-600 transition-colors">
                      {f.title}
                    </h4>
                    <p className="text-[13px] sm:text-sm leading-relaxed text-gray-500">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Part 3: Enrollment Urgency CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] overflow-hidden bg-gray-950 p-8 sm:p-10 lg:p-12 text-center flex flex-col items-center border border-white/5 shadow-2xl"
        >
          {/* Subtle background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-green-700/10 blur-3xl pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 px-3 py-1 font-heading text-[10px] tracking-widest uppercase rounded-full bg-green-950 text-green-400 border border-green-900 font-bold mb-5">
            Limited Spots Available
          </span>

          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-4 max-w-2xl leading-tight">
            Secure a Seat for the Next Cohort
          </h3>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mb-8 leading-relaxed">
            Our cohorts start on the 1st of every month. Classes are capped at 6 students to guarantee individual conversational feedback from our native-speaking tutors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-4">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full py-3.5 h-auto transition-all shadow-md shadow-green-900/10">
                <a href="https://docs.google.com/forms/d/1ejqCIsjfUUijEPy1lPxpxlF18NJtwbXSZybKH-6OSD0/viewform?edit_requested=true" id="yoruba-cta-enroll" target='_blank' rel='noopener noreferrer'>
                  Enroll in yoruba academy
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </a>
              </Button>
            </motion.div>
            {/* <span className="text-[12px] sm:text-xs text-gray-500 font-medium italic">
              * Includes a 7-day money-back guarantee
            </span> */}
          </div>

          {/* <div className="flex gap-6 mt-8 pt-8 border-t border-white/5 w-full justify-center text-left max-w-md flex-wrap sm:flex-nowrap">
            <div>
              <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Current Availability</div>
              <div className="text-xs font-semibold text-amber-400">Ìràwọ̀ (3–6): 2 spots left</div>
            </div>
            <div className="w-[1px] bg-white/5 self-stretch hidden sm:block" />
            <div>
              <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Cohort Start</div>
              <div className="text-xs font-semibold text-green-400">Starts August 1, 2026</div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
