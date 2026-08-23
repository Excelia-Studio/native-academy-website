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



const curriculumLevels = [
  {
    id: 'level-1',
    title: 'Level 1',
    subtitle: 'First Words & Proud Moments',
    tagline: 'Building confident first connections with Yorùbá.',
    description: 'Watch your child light up as they master their first Yorùbá words and phrases — from greeting grandma with pride to naming the world around them through songs and play.',
    items: [
      { label: 'Say Hello to Grandma:', text: 'Master traditional greetings (Ìkíni) so kids can proudly greet elders with confidence the next time they call or visit home.' },
      { label: 'Identify Their World:', text: 'Name classroom items (Gègé, Tàbìlì) and everyday household objects with ease.' },
      { label: 'Sing & Learn:', text: 'Master body parts (Orí, Èjìká) and action words through interactive songs and games.' },
    ],
    accentColor: 'green',
    bgClass: 'bg-green-50/30 border-green-200/40',
    badgeClass: 'bg-green-100/50 text-green-800',
  },
  {
    id: 'level-2',
    title: 'Level 2',
    subtitle: 'Real Conversations & Market Play',
    tagline: 'From single words to full sentences and real-life scenarios.',
    description: 'Children graduate from one-word replies to expressing feelings, bargaining at the market, and navigating everyday routines — all in Yorùbá.',
    items: [
      { label: 'Full Sentence Fluency:', text: 'Move past one-word replies to express feelings (Inú mi ń dùn...) and food preferences (Mo nìfẹ́ dodo!).' },
      { label: 'Interactive Market Games:', text: 'Practice bargaining, asking prices (Èló ni?), and role-playing in real-life settings.' },
      { label: 'Daily Routines & Directions:', text: 'Describe daily habits and guide others (Lọ síwájú, Yà sí ọwọ́ òsì) with confidence.' },
    ],
    accentColor: 'amber',
    bgClass: 'bg-amber-50/30 border-amber-200/40',
    badgeClass: 'bg-amber-100/50 text-amber-800',
  },
  {
    id: 'level-3',
    title: 'Level 3',
    subtitle: 'Deep Heritage & Cultural Mastery',
    tagline: 'Unlocking proverbs, folklore, and unshakable cultural identity.',
    description: 'At this pinnacle stage, learners command Yorùbá proverbs, explore rich cultural traditions, and achieve complete conversational fluency with deep cultural pride.',
    items: [
      { label: 'Speak with Wisdom:', text: 'Unlock Yorùbá proverbs (Òwe), rich folklore (Àlọ́ àti Ìtán), and storytelling art.' },
      { label: 'Explore Cultural Roots:', text: 'Discover traditional marriage customs (Àṣà Ìgbéyàwó), historical heritage, and ceremonial attire (Aṣọ Wíwọ̀).' },
      { label: 'Unshakable Identity:', text: 'Achieve complete conversational fluency, cultural pride, and a lifelong connection to home.' },
    ],
    accentColor: 'gray',
    bgClass: 'bg-gray-50/50 border-gray-200/40',
    badgeClass: 'bg-gray-200/60 text-gray-800',
  },
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
  const [activeLevelTab, setActiveLevelTab] = useState('level-1');
  const activeLevel = curriculumLevels.find((l) => l.id === activeLevelTab) || curriculumLevels[0];

  return (
    <section className="py-16 md:py-[100px] bg-gray-50 overflow-hidden border-t border-gray-100" id="yoruba-academy">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[15px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 mb-4">
            Flagship Program
          </span>
          <h2 className="font-heading-two text-[30px] md:text-[44px] text-gray-950 leading-[1.1] mb-5">
            Live Online <span className="text-green-600">Yorùbá Classes</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Our specialized curriculum takes kids and teens from zero vocabulary to confident, fluid conversations. We do not just teach translations; we celebrate culture and identity.
          </p>
        </div>

        {/* Explore Curriculum Section */}
        <div id="yoruba-curriculum" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h3 className="font-heading-two text-[24px] sm:text-[30px] md:text-[36px] text-gray-950 leading-[1.15] mb-5 font-bold">
              Our Interactive <span className="text-green-600">Yorùbá Learning</span> Pathways
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl mb-10">
              Watch your child&apos;s confidence bloom through live gamified challenges, cultural storytelling, peer role-plays, and interactive quizzes designed to make learning Yorùbá second nature. Here is a glimpse of how their journey unfolds:
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex gap-2.5 p-1.5 bg-gray-200/50 rounded-2xl max-w-xl mb-8 overflow-x-auto scrollbar-none">
            {curriculumLevels.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveLevelTab(l.id)}
                className={`flex-1 min-w-[120px] py-3.5 px-4 font-heading text-sm font-semibold rounded-xl border-none cursor-pointer transition-all duration-300 ${activeLevelTab === l.id
                  ? 'bg-white text-gray-900 shadow-md shadow-black/5 scale-[1.02]'
                  : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {l.title}
              </button>
            ))}
          </div>

          {/* Active Level Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevelTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={`p-6 sm:p-8 rounded-[24px] border ${activeLevel.bgClass} grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start backdrop-blur-xs`}
            >
              <div className="flex flex-col items-start gap-4">

                <h4 className="font-heading text-xl sm:text-2xl font-bold text-gray-950 leading-tight">
                  {activeLevel.subtitle}
                </h4>
                {/* <p className="text-[15px] text-gray-600 leading-relaxed max-w-[620px]">
                  {activeLevel.description}
                </p> */}

                <div className="pt-4 w-full">
                  {/* <h5 className="font-heading text-[14px] font-bold text-gray-900 uppercase tracking-widest mb-3.5">
                    What your child will learn:
                  </h5> */}
                  <div className="flex flex-col gap-3 w-full">
                    {activeLevel.items.map((item, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <div className={`p-1 rounded-full ${activeLevel.badgeClass} shrink-0 mt-0.5`}>
                          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} />
                        </div>
                        <div>
                          <span className="text-sm sm:text-[15px] font-semibold text-gray-800">{item.label}</span>
                          <span className="text-sm sm:text-[15px] text-gray-500 ml-1">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative sidebar */}
              <div className="hidden lg:flex flex-col gap-3.5 p-6 rounded-2xl bg-white border border-gray-100 w-full cursor-default">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Pathway Preview</span>
                <div className="flex gap-3 items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${activeLevel.badgeClass}`}>
                    YA
                  </div>
                  <div>
                    <div className="font-heading text-[13px] font-semibold text-gray-900">{activeLevel.subtitle}</div>
                    <div className="text-[10px] text-gray-400">Guided by Native-Speaking Tutors</div>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden my-1">
                  <div className={`h-full rounded-full ${activeLevel.accentColor === 'green' ? 'bg-green-600' : activeLevel.accentColor === 'amber' ? 'bg-amber-500' : 'bg-gray-800'
                    }`} style={{ width: activeLevel.id === 'level-1' ? '33%' : activeLevel.id === 'level-2' ? '66%' : '100%' }} />
                </div>
                <div className="text-[11px] text-gray-500 leading-relaxed italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                  &ldquo;{activeLevel.tagline}&rdquo;
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* And Lots More */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 mt-10 justify-center"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-200" />
            <span className="font-heading text-base sm:text-lg text-gray-400 font-semibold tracking-wide">And Lots More!</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-200" />
          </motion.div>
        </div>

        {/* Part 2: Program Features Grid */}
        <div className="mb-20">
          <h3 className="font-heading text-xl sm:text-2xl text-gray-950 font-bold mb-8">
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

          <span className="inline-flex items-center gap-1.5 px-3 py-1 font-heading text-[12px] tracking-widest uppercase rounded-full bg-green-950 text-green-400 border border-green-900 font-bold mb-5">
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
                  Enroll in yoruba live classes
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
