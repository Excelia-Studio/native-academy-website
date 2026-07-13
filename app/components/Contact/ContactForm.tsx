'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
  SparklesIcon,
  UserIcon,
  Mail01Icon,
  WhatsappIcon,
  GlobeIcon,
  ArrowRightIcon,
  StarIcon,
} from '@hugeicons/core-free-icons';

interface FormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  relation: string;
  studentName: string;
  ageGroup: string;
  languageLevel: string;
  languageOfInterest: string;
  goal: string;
  message: string;
}

const initialFormData: FormData = {
  parentName: '',
  parentEmail: '',
  parentPhone: '',
  relation: 'Parent',
  studentName: '',
  ageGroup: '3-6',
  languageLevel: 'Beginner',
  languageOfInterest: 'yoruba',
  goal: 'identity',
  message: '',
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate backend submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  // Determine destination name based on language selection
  const getDestinationName = (lang: string) => {
    switch (lang) {
      case 'yoruba':
        return 'Yorùbáland (Nigeria)';
      case 'igbo':
        return 'Igboland (Nigeria)';
      case 'swahili':
        return 'East Africa (Swahili Track)';
      case 'zulu':
        return 'South Africa (Zulu Track)';
      case 'twi':
        return 'Ghana (Twi Track)';
      case 'hausa':
        return 'West Africa (Hausa Track)';
      default:
        return 'African Cultural Hub';
    }
  };

  // Determine stamp status based on flagship vs waitlist
  const isWaitlist = formData.languageOfInterest !== 'yoruba';

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden" id="contact-form-section">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main Grid: Form Left, Passport Preview Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Animated Form Card */}
          <div className="w-full bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs relative">
            
            {/* Stepper Progress Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200/60">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      if (!submitted && num < step) setStep(num);
                    }}
                    disabled={submitted || num > step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-sm transition-all cursor-pointer ${
                      step === num
                        ? 'bg-green-600 text-white ring-4 ring-green-100 font-bold'
                        : step > num
                        ? 'bg-green-100 text-green-700 font-bold'
                        : 'bg-white text-gray-400 border border-gray-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <span className="text-xs font-heading font-medium text-gray-400 uppercase tracking-widest">
                {!submitted ? `Step ${step} of 3` : 'Submission Complete'}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  onSubmit={step === 3 ? handleSubmit : handleNext}
                  className="flex flex-col gap-6"
                >
                  {/* STEP 1: Parent/Guardian Contact Info */}
                  {step === 1 && (
                    <>
                      <div>
                        <h2 className="font-heading text-xl text-gray-900 font-bold mb-1">
                          Parent & Guardian Details
                        </h2>
                        <p className="text-xs text-gray-400">Please provide your contact details so we can reach you.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="p-name" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            Full Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="p-name"
                              required
                              placeholder="e.g. Dr. Kemi Cole"
                              value={formData.parentName}
                              onChange={(e) => updateField('parentName', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-800"
                            />
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                              <HugeiconsIcon icon={UserIcon} size={16} />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="p-relation" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            Relationship to Student
                          </label>
                          <div className="relative">
                            <select
                              id="p-relation"
                              value={formData.relation}
                              onChange={(e) => updateField('relation', e.target.value)}
                              className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer text-gray-800 font-medium"
                            >
                              <option value="Parent">Parent</option>
                              <option value="Guardian">Guardian</option>
                              <option value="Adult Student">Adult Student (Self)</option>
                              <option value="Sponsor">Sponsor/Relative</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                              ▼
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="p-email" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            Email Address
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              id="p-email"
                              required
                              placeholder="name@domain.com"
                              value={formData.parentEmail}
                              onChange={(e) => updateField('parentEmail', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-800"
                            />
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                              <HugeiconsIcon icon={Mail01Icon} size={16} />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="p-phone" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            WhatsApp Phone Number
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              id="p-phone"
                              required
                              placeholder="e.g. +44 7934 808642"
                              value={formData.parentPhone}
                              onChange={(e) => updateField('parentPhone', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-800"
                            />
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                              <HugeiconsIcon icon={WhatsappIcon} size={16} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* STEP 2: Student Profile Info */}
                  {step === 2 && (
                    <>
                      <div>
                        <h2 className="font-heading text-xl text-gray-900 font-bold mb-1">
                          Student Profile
                        </h2>
                        <p className="text-xs text-gray-400">Provide details about the learner joining Native Academy.</p>
                      </div>

                      <div>
                        <label htmlFor="s-name" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                          Student&apos;s Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="s-name"
                            required
                            placeholder="e.g. Adewale Cole"
                            value={formData.studentName}
                            onChange={(e) => updateField('studentName', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-800"
                          />
                          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                            <HugeiconsIcon icon={UserIcon} size={16} />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="s-age" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            Age Bracket
                          </label>
                          <div className="relative">
                            <select
                              id="s-age"
                              value={formData.ageGroup}
                              onChange={(e) => updateField('ageGroup', e.target.value)}
                              className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer text-gray-800 font-medium"
                            >
                              <option value="3-6">Ages 3–6 (Toddler Track)</option>
                              <option value="7-12">Ages 7–12 (Junior Academy)</option>
                              <option value="13-17">Ages 13–17 (Teens & Youth)</option>
                              <option value="18+">Ages 18+ (Young Adult/Self)</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                              ▼
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="s-level" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            Current Language Exposure
                          </label>
                          <div className="relative">
                            <select
                              id="s-level"
                              value={formData.languageLevel}
                              onChange={(e) => updateField('languageLevel', e.target.value)}
                              className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer text-gray-800 font-medium"
                            >
                              <option value="Beginner">Absolute Beginner (Zero words)</option>
                              <option value="Receptive">Understands, but does not speak</option>
                              <option value="Basic">Speaks simple words/greetings</option>
                              <option value="Intermediate">Comfortable with basic sentences</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                              ▼
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* STEP 3: Language Track & Goals */}
                  {step === 3 && (
                    <>
                      <div>
                        <h2 className="font-heading text-xl text-gray-900 font-bold mb-1">
                          Academy Track & Goals
                        </h2>
                        <p className="text-xs text-gray-400">Select the native language programs you wish to enroll in.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="s-lang" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            Select Language Track
                          </label>
                          <div className="relative">
                            <select
                              id="s-lang"
                              value={formData.languageOfInterest}
                              onChange={(e) => updateField('languageOfInterest', e.target.value)}
                              className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer text-gray-800 font-medium"
                            >
                              <option value="yoruba">Yorùbá Academy (Active Enrollment)</option>
                              <option value="igbo">Igbo (Join Priority Waitlist)</option>
                              <option value="swahili">Swahili (Join Priority Waitlist)</option>
                              <option value="zulu">Zulu (Join Priority Waitlist)</option>
                              <option value="twi">Twi (Join Priority Waitlist)</option>
                              <option value="hausa">Hausa (Join Priority Waitlist)</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                              ▼
                            </div>
                          </div>
                          {formData.languageOfInterest !== 'yoruba' && (
                            <p className="text-[11px] text-amber-600 font-medium mt-1">
                              * You will vote on this language and join the waitlist!
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="s-goal" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                            Primary Goal of Enrollment
                          </label>
                          <div className="relative">
                            <select
                              id="s-goal"
                              value={formData.goal}
                              onChange={(e) => updateField('goal', e.target.value)}
                              className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer text-gray-800 font-medium"
                            >
                              <option value="identity">Connect with cultural identity & heritage</option>
                              <option value="conversation">Speak confidently with home family</option>
                              <option value="understanding">Understand parent/grandparent dialogues</option>
                              <option value="relocation">Prepare for future visits or relocation</option>
                              <option value="general">A broad educational appreciation</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                              ▼
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="s-msg" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                          Questions, Concerns, or Special Requirements
                        </label>
                        <textarea
                          id="s-msg"
                          rows={3}
                          placeholder="e.g. Any scheduling conflicts, specific learning objectives, or prior tutor experience..."
                          value={formData.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-800"
                        />
                      </div>
                    </>
                  )}

                  {/* Buttons Navigation */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/60">
                    {step > 1 ? (
                      <Button
                        type="button"
                        onClick={handlePrev}
                        variant="outline"
                        className="rounded-full px-6 py-2.5 h-auto border-gray-200 hover:bg-gray-100 text-gray-600 transition-all shadow-none"
                      >
                        Previous Step
                      </Button>
                    ) : (
                      <div />
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="rounded-full px-7 py-3 h-auto bg-green-600 hover:bg-green-700 text-white font-medium transition-all shadow-none flex items-center gap-1.5"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : step === 3 ? (
                        <>
                          Submit Registration
                          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />
                        </>
                      ) : (
                        <>
                          Next Step
                          <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-10 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600 mb-6 animate-bounce">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={40} />
                  </div>
                  <h3 className="font-heading text-2xl text-gray-950 font-normal mb-3">
                    Ẹ kú àbọ̀! (Welcome!)
                  </h3>
                  <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-8">
                    Thank you for initiating your child&apos;s journey back to their heritage. We have received your inquiry for <strong className="text-gray-900">{formData.studentName || 'your child'}</strong>. 
                    A curriculum advisor will review your passport application and contact you at <strong className="text-gray-900">{formData.parentEmail}</strong> or via WhatsApp at <strong className="text-gray-900">{formData.parentPhone}</strong> within 24 hours.
                  </p>
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                        setFormData(initialFormData);
                      }}
                      variant="outline"
                      className="rounded-full px-6 py-2.5"
                    >
                      Fill Another Form
                    </Button>
                    
                    <Button
                      asChild
                      className="rounded-full px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a href="/">Back to Home</a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Side: Passport Preview Component */}
          <div className="w-full lg:sticky lg:top-28">
            <motion.div
              whileHover={{ y: -6, rotate: 0.5 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-green-950 rounded-3xl border border-green-800 p-6 md:p-8 text-white relative overflow-hidden shadow-xl shadow-green-950/15"
            >
              {/* Pattern Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--green-900)_0%,transparent_75%)] pointer-events-none opacity-80" />
              <div className="absolute bottom-[-100px] right-[-100px] w-52 h-52 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Passport Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="var(--green-400)" />
                    <path d="M10 22V10l6 4 6-4v12l-6-4-6 4z" fill="var(--green-950)" />
                  </svg>
                  <div>
                    <h3 className="font-heading text-sm text-white leading-none">NATIVE ACADEMY</h3>
                    <p className="text-[10px] text-green-400 font-mono tracking-widest leading-none mt-1">PASSPORT OFFICE</p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[9px] text-gray-300">
                  REF: NA-{1000 + Math.floor(Math.random() * 9000)}
                </div>
              </div>

              {/* Passport Title */}
              <div className="relative z-10 mb-6 text-center">
                <h4 className="font-heading text-lg font-bold text-green-300 uppercase tracking-[0.06em]">
                  Diaspora Learner Passport
                </h4>
                <p className="text-[11px] text-gray-400 italic">Connecting African Roots & Generations</p>
              </div>

              {/* Passport Bio Area */}
              <div className="relative z-10 grid grid-cols-[100px_1fr] gap-5 items-start">
                
                {/* Photo Placeholder */}
                <div className="w-[100px] h-[125px] bg-green-900/50 border border-white/15 rounded-xl overflow-hidden flex flex-col items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <HugeiconsIcon icon={UserIcon} size={36} className="text-green-300/40" />
                  <span className="text-[9px] text-green-400 font-mono mt-2 select-none uppercase tracking-wide">
                    {formData.studentName ? 'VALID PHOTO' : 'PHOTO STAMP'}
                  </span>

                  {/* Confirmed Stamp Overlay */}
                  {formData.studentName && (
                    <motion.div
                      initial={{ scale: 2, opacity: 0, rotate: -20 }}
                      animate={{ scale: 1, opacity: 1, rotate: -15 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 border-2 rounded-md font-heading font-black text-[10px] text-center select-none uppercase tracking-wider backdrop-blur-[1px] ${
                        isWaitlist
                          ? 'border-amber-500/80 text-amber-400 bg-amber-950/70'
                          : 'border-green-400/80 text-green-400 bg-green-950/70'
                      }`}
                    >
                      {isWaitlist ? 'WAITLISTED' : 'CONFIRMED'}
                    </motion.div>
                  )}
                </div>

                {/* Passport Fields */}
                <div className="flex flex-col gap-3 font-mono text-[12px]">
                  <div>
                    <span className="text-[10px] text-gray-500 block leading-tight font-sans">FULL NAME</span>
                    <span className="font-semibold text-gray-100 uppercase tracking-wide truncate block max-w-[180px]">
                      {formData.studentName || '• • • • • • • • • •'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-500 block leading-tight font-sans">AGE CATEGORY</span>
                    <span className="font-semibold text-gray-100 uppercase block">
                      {formData.ageGroup ? `${formData.ageGroup} YEARS` : '• • • •'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-500 block leading-tight font-sans">DESTINATION</span>
                    <span className="font-semibold text-green-400 uppercase tracking-wide block truncate max-w-[180px]">
                      {getDestinationName(formData.languageOfInterest)}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-500 block leading-tight font-sans">LANGUAGE LEVEL</span>
                    <span className="font-semibold text-gray-100 uppercase block">
                      {formData.languageLevel || '• • • •'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Passport Footer Info / Stamp */}
              <div className="relative z-10 mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-gray-500 block font-mono">PASSPORT STATUS</span>
                  <span className="text-xs font-semibold text-gray-200 flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${formData.studentName ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
                    {formData.studentName
                      ? isWaitlist
                        ? 'Priority Waitlist Active'
                        : 'Cohort Intake Open'
                      : 'Awaiting Application'}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-green-400/60 font-mono">
                  <HugeiconsIcon icon={GlobeIcon} size={14} className="animate-spin-slow" />
                  DIASPORA HUB
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
