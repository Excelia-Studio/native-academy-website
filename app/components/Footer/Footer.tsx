'use client';

import FooterCTA from './FooterCTA';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@hugeicons/core-free-icons';

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/p/Native-Academy-61578914925330/' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/reel/DNvaD4wYkUf/' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Footer CTA component */}
      <FooterCTA />

      {/* Main footer */}
      <div className="bg-gray-950 pt-14 pb-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 lg:gap-10 pb-10 border-b border-white/10">
            <div className="flex flex-col gap-4 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" fill="var(--green-400)" />
                  <path d="M10 22V10l6 4 6-4v12l-6-4-6 4z" fill="var(--gray-950)" />
                </svg>
                <span className="font-heading text-lg text-white">
                  Native<span className="text-green-400">Academy</span>
                </span>
              </div>
              <p className="text-sm leading-[1.6] text-gray-500 max-w-[280px]">
                A dedicated digital school promoting native languages for African children in the diaspora.
              </p>
              <div className="flex gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className="w-8 h-8 rounded-[6px] bg-white/5 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors no-underline"
                      aria-label={s.label}
                    >
                      <HugeiconsIcon icon={Icon} size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {[
              {
                title: 'Programs',
                links: [
                  { label: 'Yorùbá Classes', href: '/services#yoruba-academy' },
                  { label: 'Age 3–6 Track', href: '/services#yoruba-academy' },
                  { label: 'Age 7–12 Track', href: '/services#yoruba-academy' },
                  { label: 'Teen & Young Adult', href: '/services#yoruba-academy' },
                  { label: 'Free Trial', href: '/services#yoruba-academy' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'About Us', href: '/about-us' },
                  { label: 'Our Tutors', href: '#' },
                  { label: 'Blog', href: '#' },
                  { label: 'Careers', href: '#' },
                  { label: 'Contact', href: '/contact' },
                ],
              },
              {
                title: 'Support',
                links: [
                  { label: 'Help Center', href: '#' },
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms of Service', href: '#' },
                  { label: 'Parent Guide', href: '#' },
                ],
              },
            ].map((col) => (
              <div key={col.title} className="flex flex-col gap-2">
                <h3 className="font-heading text-[13px] text-gray-400 uppercase tracking-[0.06em] mb-1">
                  {col.title}
                </h3>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-green-400 transition-colors leading-[1.5] no-underline">
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-1.5 text-center">
            <p className="text-[13px] text-gray-600">© {new Date().getFullYear()} Native Academy. All rights reserved.</p>
            <p className="text-[13px] text-gray-600">Made with 💚 for the African diaspora</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
