'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';

const menuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] py-3.5 transition-all duration-300 ease-out ${menuOpen || scrolled
          ? 'bg-white border-b border-gray-100 py-2.5'
          : 'bg-transparent'
          }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 shrink-0 no-underline group" id="nav-logo">
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              whileHover={{ scale: 1.1, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <circle cx="16" cy="16" r="15" fill="var(--green-600)" />
              <path d="M10 22V10l6 4 6-4v12l-6-4-6 4z" fill="#fff" />
            </motion.svg>
            <span className="font-heading text-xl text-gray-900">
              Native<span className="text-green-600">Academy</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about-us' },
              { label: 'Services', href: '/services' },
              { label: 'Media', href: '/media' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => {
              const active = pathname === link.href;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`font-heading font-medium text-sm px-3.5 py-1.5 rounded-full transition-colors no-underline ${
                    active
                      ? 'text-green-600 bg-green-50/50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50/50'
                  }`}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </div>

          <motion.div
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="hidden lg:inline-flex"
          >
            <Button
              asChild
              size="default"
              className="shrink-0 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-none px-6 py-2.5 h-auto text-sm transition-all"
            >
              <a href="https://docs.google.com/forms/d/1ejqCIsjfUUijEPy1lPxpxlF18NJtwbXSZybKH-6OSD0/viewform?edit_requested=true" id="nav-cta" target='_blank' rel='noopener noreferrer'>Enroll Now</a>
            </Button>
          </motion.div>

          <button
            className="lg:hidden flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer z-[1100]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span
              className={`block w-5 h-[1.5px] bg-gray-900 rounded-sm transition-all duration-300 ease-out origin-center ${menuOpen ? 'translate-y-[5.5px] rotate-45' : ''
                }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-gray-900 rounded-sm transition-all duration-300 ease-out origin-center ${menuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-gray-900 rounded-sm transition-all duration-300 ease-out origin-center ${menuOpen ? '-translate-y-[5.5px] -rotate-45' : ''
                }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[999] flex flex-col pt-24 px-6 pb-10"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col gap-0.5 max-w-md w-full mx-auto">
              {[
                { label: 'What We Do', href: '/#what-we-do' },
                { label: 'Who We Are', href: '/#who-we-are' },
                { label: 'Programmes', href: '/services' },
                { label: 'Media', href: '/media' },
                { label: 'Testimonials', href: '/#testimonials' },
                { label: 'FAQ', href: '/faq' },
              ].map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.a
                    key={item.label}
                    variants={menuItemVariants}
                    href={item.href}
                    className={`font-heading font-semibold text-xl py-3.5 border-b border-gray-100 transition-colors no-underline flex items-center justify-between ${
                      active
                        ? 'text-green-600'
                        : 'text-gray-900 hover:text-green-600'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    <span className={`text-sm font-normal transition-colors ${active ? 'text-green-600' : 'text-gray-300'}`}>→</span>
                  </motion.a>
                );
              })}
              <motion.div variants={menuItemVariants} className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold w-full shadow-md py-3.5 h-auto"
                >
                  <a href="/contact" onClick={() => setMenuOpen(false)}>
                    Enroll Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
