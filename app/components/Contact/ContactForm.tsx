'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  SparklesIcon,
  GlobeIcon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';

export default function ContactForm() {
  const [inviteRef, setInviteRef] = useState('');

  useEffect(() => {
    // Generate a unique cohort registration reference code on client mount
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setInviteRef(`YA-${randomNum}`);
  }, []);

  const googleFormUrl = "https://docs.google.com/forms/d/1ejqCIsjfUUijEPy1lPxpxlF18NJtwbXSZybKH-6OSD0/viewform?edit_requested=true";

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden" id="contact-form-section">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main Grid: Onboarding Left, Invitation Pass Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Onboarding Gateway Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Tag Badge */}
            <div className="flex">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[12px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 shadow-none">
                <HugeiconsIcon icon={SparklesIcon} size={12} className="text-green-500 animate-pulse" />
                Yorùbá Cohort Registration
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading-two text-3xl sm:text-4xl lg:text-[42px] text-gray-950 leading-[1.15]">
              Embark on an Exciting <span className="text-green-600 font-medium">Yorùbá Learning Journey</span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-500 leading-relaxed max-w-xl">
              Thank you for your interest in enrolling your kids in our online Yorùbá language sessions! Complete our brief enrollment form to initiate your child's onboarding.
            </p>

            {/* Onboarding Pathway Timeline */}
            <div className="relative flex flex-col gap-8 my-4 pl-4 border-l-2 border-green-100">
              
              {/* Step 1 */}
              <div className="relative pl-6">
                {/* Timeline Dot */}
                <div className="absolute left-[-23px] top-0.5 w-4 h-4 rounded-full bg-green-600 ring-4 ring-green-50 border border-white flex items-center justify-center" />
                <h4 className="font-heading text-base font-bold text-gray-900 leading-none mb-2">
                  01. Tell Us About Your Kids
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  Submit the Google Form with your child's age, language exposure level, and preferred timezone. It takes less than 2 minutes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-6">
                {/* Timeline Dot */}
                <div className="absolute left-[-23px] top-0.5 w-4 h-4 rounded-full bg-green-200 border border-white flex items-center justify-center" />
                <h4 className="font-heading text-base font-bold text-gray-900 leading-none mb-2">
                  02. Cohort Group Chat Invite
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  Once we receive your details, we will invite you to join our dedicated WhatsApp cohort group chat.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-6">
                {/* Timeline Dot */}
                <div className="absolute left-[-23px] top-0.5 w-4 h-4 rounded-full bg-green-200 border border-white flex items-center justify-center" />
                <h4 className="font-heading text-base font-bold text-gray-900 leading-none mb-2">
                  03. Meet Your Tutors & Begin
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  Meet our experienced native-speaking tutors, confirm your cohort slot, and let your kid(s) start exploring the rich and vibrant Yorùbá language.
                </p>
              </div>

            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <Button
                asChild
                className="rounded-full px-8 py-3.5 h-auto bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg shadow-green-600/10 hover:shadow-green-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-base cursor-pointer"
              >
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                  Register for Yorùbá Cohort
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </a>
              </Button>
              
              <div className="text-xs text-gray-400 font-medium flex items-center gap-2 px-1 py-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block shrink-0" />
                Registrations active for {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
              </div>
            </div>

            {/* Trust Info */}
            <div className="text-xs text-gray-400 mt-2 flex flex-wrap gap-x-6 gap-y-2 border-t border-gray-100 pt-5">
              <span className="flex items-center gap-1.5">
                ⚡ Completion Time: ~2 mins
              </span>
              <span className="flex items-center gap-1.5">
                💬 Group Chat Invite Sent Promptly
              </span>
              <span className="flex items-center gap-1.5">
                🔒 Safe & Private Data
              </span>
            </div>

          </motion.div>

          {/* Right Side: Creative Registration Ticket */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center items-center"
          >
            <a 
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[420px] block no-underline focus:outline-none"
            >
              <motion.div
                whileHover={{ y: -8, rotate: 1, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="bg-green-950 rounded-3xl border border-green-800 text-white relative overflow-hidden shadow-2xl shadow-green-950/20 group cursor-pointer"
              >
                {/* Glossy Overlay effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,184,106,0.15)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
                
                {/* Gold Pattern background accent */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-1/4 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Main Ticket Container */}
                <div className="p-6 md:p-8 flex flex-col justify-between min-h-[460px]">
                  
                  {/* Top section: Header & Logo */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5 relative">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-400/25 flex items-center justify-center shrink-0">
                        {/* Custom Sparkles/Education SVG */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-green-400">
                          <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor"/>
                          <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-heading text-xs uppercase tracking-widest text-green-400 block leading-none">NATIVE ACADEMY</span>
                        <span className="text-[10px] text-gray-300 font-mono tracking-wider block mt-1">YORÙBÁ ACADEMY ADMISSIONS</span>
                      </div>
                    </div>

                    <div className="font-mono text-[10px] text-gray-300 bg-white/5 border border-white/10 rounded-md px-2.5 py-1">
                      {inviteRef || 'YA-2026'}
                    </div>
                  </div>

                  {/* Program Detail Ticket Body */}
                  <div className="space-y-6">
                    {/* Hero Title inside Ticket */}
                    <div className="text-center">
                      <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-400/80 mb-1">SESSION REGISTRATION</div>
                      <h3 className="font-heading text-xl md:text-2xl text-white font-normal uppercase tracking-wide">
                        Yorùbá Cohort Invite
                      </h3>
                      <p className="text-[11px] text-gray-400 font-mono italic mt-1">Interactive Language & Culture Sessions</p>
                    </div>

                    {/* Program Detail Grid */}
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-b border-white/5 py-5 font-mono text-xs">
                      <div>
                        <span className="text-[9px] text-gray-500 block mb-0.5">LEARNING TRACK</span>
                        <span className="text-white font-bold tracking-wide">ONLINE YORÙBÁ</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-500 block mb-0.5">CLASS SIZE</span>
                        <span className="text-amber-400 font-bold tracking-wide">INTIMATE (MAX 6)</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-500 block mb-0.5">TUTORS</span>
                        <span className="text-white font-bold tracking-wide">EXPERIENCED NATIVE</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-500 block mb-0.5">STATUS</span>
                        <span className="text-green-400 font-bold tracking-wide flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                          INTAKE ACTIVE
                        </span>
                      </div>
                    </div>

                    {/* Pathway description inside ticket */}
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border border-white/10 rounded-2xl relative">
                      <div className="text-left">
                        <span className="text-[14px] font-heading text-white block leading-none font-bold">REGISTER</span>
                        <span className="text-[9px] text-gray-400 font-mono">STEP 1</span>
                      </div>
                      
                      {/* Connecting Line with Globe */}
                      <div className="flex-1 flex items-center justify-center px-4 relative">
                        <div className="w-full h-[1px] border-t border-dashed border-white/20" />
                        <div className="absolute flex items-center justify-center p-1 rounded-full bg-green-950 border border-white/10 text-green-400 transform group-hover:translate-x-3 transition-transform duration-700">
                          <HugeiconsIcon icon={GlobeIcon} size={14} className="animate-spin-slow" />
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[14px] font-heading text-green-400 block leading-none font-bold">GROUP CHAT</span>
                        <span className="text-[9px] text-gray-400 font-mono">STEP 2</span>
                      </div>
                    </div>
                  </div>

                  {/* Dotted Tear-off Coupon Line */}
                  <div className="relative my-6 select-none pointer-events-none">
                    <div className="absolute left-[-32px] top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-r-full border-r border-t border-b border-green-800" />
                    <div className="absolute right-[-32px] top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-l-full border-l border-t border-b border-green-800" />
                    <div className="w-full border-t-2 border-dashed border-white/20" />
                  </div>

                  {/* Bottom Coupon Section */}
                  <div className="flex items-center justify-between relative">
                    <div className="space-y-1">
                      <span className="text-[9px] text-gray-500 block font-mono uppercase">Gate Invitation</span>
                      <span className="text-xs font-heading font-medium text-gray-200 group-hover:text-green-400 transition-colors flex items-center gap-1.5">
                        Register via Google Form 
                        <span className="group-hover:translate-x-1 transition-transform">➔</span>
                      </span>
                    </div>

                    {/* Stylized Barcode SVG */}
                    <div className="bg-white/95 rounded-lg p-2 flex flex-col items-center gap-1 shrink-0 group-hover:bg-white transition-colors">
                      <svg width="72" height="26" viewBox="0 0 72 26" fill="black">
                        {/* Barcode lines */}
                        <rect x="2" y="2" width="2" height="22" />
                        <rect x="6" y="2" width="1" height="22" />
                        <rect x="8" y="2" width="3" height="22" />
                        <rect x="13" y="2" width="1" height="22" />
                        <rect x="16" y="2" width="2" height="22" />
                        <rect x="20" y="2" width="4" height="22" />
                        <rect x="26" y="2" width="1" height="22" />
                        <rect x="29" y="2" width="2" height="22" />
                        <rect x="33" y="2" width="1" height="22" />
                        <rect x="36" y="2" width="3" height="22" />
                        <rect x="41" y="2" width="2" height="22" />
                        <rect x="45" y="2" width="1" height="22" />
                        <rect x="48" y="2" width="4" height="22" />
                        <rect x="54" y="2" width="1" height="22" />
                        <rect x="57" y="2" width="2" height="22" />
                        <rect x="61" y="2" width="3" height="22" />
                        <rect x="66" y="2" width="1" height="22" />
                        <rect x="68" y="2" width="2" height="22" />
                      </svg>
                      <span className="text-[7px] text-gray-800 font-mono tracking-widest leading-none font-bold uppercase">JOIN COHORT</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            </a>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
