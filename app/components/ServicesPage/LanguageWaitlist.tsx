'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon, SparklesIcon } from '@hugeicons/core-free-icons';

interface LanguageOption {
  code: string;
  name: string;
  votes: number;
}

const initialLanguages: LanguageOption[] = [
  { code: 'swahili', name: 'Swahili (East Africa)', votes: 124 },
  { code: 'igbo', name: 'Igbo (Nigeria)', votes: 92 },
  { code: 'zulu', name: 'Zulu (South Africa)', votes: 48 },
  { code: 'twi', name: 'Twi (Ghana)', votes: 36 },
  { code: 'hausa', name: 'Hausa (West Africa)', votes: 24 },
];

export default function LanguageWaitlist() {
  const [languages, setLanguages] = useState<LanguageOption[]>(initialLanguages);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('swahili');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);

    // Simulate server action/form submission
    setTimeout(() => {
      setLanguages((prev) =>
        prev.map((lang) =>
          lang.code === selectedLanguage ? { ...lang, votes: lang.votes + 1 } : lang
        )
      );
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  // Find max votes to calculate percentage bar width
  const maxVotes = Math.max(...languages.map((l) => l.votes));

  return (
    <section className="py-16 md:py-[100px] bg-white overflow-hidden border-t border-gray-100" id="waitlist">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Form Container */}
        <div className="flex flex-col gap-6 items-start w-full">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            Coming Soon
          </span>
          <h2 className="font-heading-two text-[30px] md:text-[44px] text-gray-950 leading-[1.1] tracking-tighter">
            Expanding the <span className="text-green-600">Native Map</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-[480px]">
            We are actively preparing to launch additional native African language tracks. Sign up for our waitlist to be notified when your native tongue goes live, and help us prioritize which language to launch next.
          </p>

          <div className="w-full max-w-[480px] bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 w-full"
                >
                  <h3 className="font-heading text-lg text-gray-900 font-bold mb-2">
                    Join the Language Waitlist
                  </h3>

                  <div>
                    <label htmlFor="waitlist-name" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="waitlist-name"
                      required
                      placeholder="e.g. Chinua Achebe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="waitlist-email" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="waitlist-email"
                      required
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="waitlist-lang" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Select Native Tongue
                    </label>
                    <div className="relative">
                      <select
                        id="waitlist-lang"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="w-full px-4.5 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer text-gray-800 font-medium"
                      >
                        {languages.map((l) => (
                          <option key={l.code} value={l.code}>
                            {l.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3.5 h-auto rounded-full transition-all shadow-none"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2 justify-center">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      'Vote & Join Waitlist'
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center gap-4 py-8"
                >
                  <div className="p-4 bg-green-50 text-green-600 rounded-full animate-bounce">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={36} />
                  </div>
                  <h3 className="font-heading text-xl text-gray-900 font-bold">
                    Moró/Thank you, {name.split(' ')[0]}!
                  </h3>
                  <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                    You have successfully voted for <strong className="text-gray-800">{languages.find((l) => l.code === selectedLanguage)?.name.split(' ')[0]}</strong> and joined our priority waitlist. We will notify you at <strong className="text-gray-800">{email}</strong> once slots open!
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                    }}
                    variant="outline"
                    className="mt-4 px-6 border-gray-200 rounded-full"
                  >
                    Submit Another Vote
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Scoreboard Container */}
        <div className="w-full bg-gray-50/50 border border-gray-100 rounded-3xl p-6 sm:p-8 cursor-default">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-lg text-gray-900 font-bold">
              Current Waitlist Demands
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] font-heading font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
              <HugeiconsIcon icon={SparklesIcon} size={12} className="text-amber-500" />
              Live Leaderboard
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {languages
              .sort((a, b) => b.votes - a.votes)
              .map((l, index) => {
                const percentage = maxVotes > 0 ? (l.votes / maxVotes) * 100 : 0;
                const isSelected = submitted && selectedLanguage === l.code;
                
                return (
                  <div key={l.code} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-medium text-gray-800 flex items-center gap-2">
                        <span className="text-gray-400 font-mono text-[11px]">#{index + 1}</span>
                        {l.name}
                        {isSelected && (
                          <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold uppercase tracking-wider animate-pulse">
                            Voted
                          </span>
                        )}
                      </span>
                      <span className="font-mono font-semibold text-gray-900">
                        {l.votes} votes
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        className={`h-full rounded-full transition-colors duration-300 ${
                          isSelected ? 'bg-green-600' : 'bg-gray-400/80 group-hover:bg-green-500'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          <p className="text-[11px] text-gray-400 mt-6 text-center leading-relaxed">
            * Leaderboard updates dynamically based on diaspora IP locations and waitlist form submissions.
          </p>
        </div>

      </div>
    </section>
  );
}
