import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight, Compass, Menu, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../config/concierge';
import { EDITORIAL_EASE } from './Reveal';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Tour Packages', href: '#packages' },
  { label: 'Spiritual Map', href: '#spiritual-map' },
  { label: 'Contact Us', href: '#contact' },
];

interface NavbarProps {
  onMobileMenuChange?: (open: boolean) => void;
}

export function Navbar({ onMobileMenuChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    onMobileMenuChange?.(mobileOpen);
  }, [mobileOpen, onMobileMenuChange]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-[#F59E0B]/30 bg-[#0B1A15]/95 py-2.5 shadow-[0_14px_45px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md sm:py-3.5'
            : 'bg-gradient-to-b from-[#0B1A15]/85 via-[#0B1A15]/40 to-transparent py-3.5 sm:py-6'
        }`}
      >
        {/* Radiant Saffron, Marigold & Crimson Header Accent Bar */}
        <div className="absolute top-0 right-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D97706] via-[#F59E0B] via-[#E11D48] to-[#D97706]" />

        {/* Ultra-thin Editorial Scroll Progress Hairline */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 right-0 left-0 z-50 h-[2.5px] origin-left bg-gradient-to-r from-[#F59E0B] via-[#FDE047] to-[#E11D48]"
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Brand Wordmark & Spiritual Seal */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="group flex min-h-[44px] items-center gap-2.5 text-white focus:outline-none sm:gap-3.5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6A66B]/50 bg-[#102820]/45 text-[#C6A66B] transition-transform duration-700 group-hover:rotate-45 sm:h-9 sm:w-9">
              <Compass className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.35} />
            </span>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-editorial text-lg font-bold tracking-[0.12em] text-white sm:text-2xl sm:tracking-[0.16em]">
                  BHARGAVI
                </span>
                <span className="rounded bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] px-1.5 py-0.5 text-[8.5px] font-black tracking-[0.18em] text-[#0A1813] uppercase shadow-sm sm:px-2 sm:text-[10px] sm:tracking-[0.2em]">
                  TOUR &amp; TRAVELS
                </span>
              </div>
              <span className="mt-1 text-[7px] font-semibold tracking-[0.24em] text-[#FDE047]/90 uppercase sm:text-[8px] sm:tracking-[0.3em]">
                Sacred India Pilgrimages
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 xl:gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="group relative text-[11px] font-medium tracking-[0.2em] text-[#F7F4EC]/88 uppercase transition-colors hover:text-[#DCC28E]"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#C6A66B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Direct Phone */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="hidden items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-3.5 py-2 text-[11px] font-semibold tracking-wider text-[#FEF3C7] transition-all hover:border-[#F59E0B] hover:bg-[#F59E0B]/25 hover:text-white md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-[#F59E0B]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#enquiry');
              }}
              className="hidden min-h-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#D97706] px-5 py-2 text-[10px] font-bold tracking-[0.18em] text-[#0F172A] uppercase shadow-[0_4px_16px_rgba(245,158,11,0.45)] transition-all duration-300 hover:shadow-[0_6px_22px_rgba(245,158,11,0.65)] hover:brightness-105 xs:inline-flex sm:px-6 sm:py-2.5 sm:text-[11px] sm:tracking-[0.2em]"
            >
              Plan Your Trip
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#102820]/45 text-white backdrop-blur-sm transition active:scale-95 hover:border-[#C6A66B] hover:text-[#C6A66B] lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Editorial Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[65] lg:hidden">
            {/* Tap-to-close Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#091612]/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-Out Panel */}
            <motion.aside
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: EDITORIAL_EASE }}
              className="editorial-grain fixed inset-y-0 right-0 flex w-full max-w-md flex-col justify-between overflow-y-auto border-l border-[#C6A66B]/20 bg-[#102820] px-5 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-[#F7F4EC] shadow-2xl sm:px-8 sm:pt-7"
            >
              {/* Top Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3 leading-none">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C6A66B]/50 text-[#C6A66B]">
                    <Compass className="h-4 w-4" strokeWidth={1.35} />
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-editorial text-xl font-bold tracking-[0.14em] text-white sm:text-2xl">
                        BHARGAVI
                      </span>
                      <span className="rounded bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] px-1.5 py-0.5 text-[9px] font-black tracking-[0.16em] text-[#0A1813] uppercase shadow-sm">
                        TOUR &amp; TRAVELS
                      </span>
                    </div>
                    <span className="mt-1 text-[8px] font-semibold tracking-[0.26em] text-[#FDE047]/90 uppercase">
                      Sacred India Pilgrimages
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#C6A66B]/45 bg-white/5 text-[#F7F4EC] transition active:scale-95 hover:bg-[#C6A66B] hover:text-[#102820]"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Touch-Friendly Vertical Menu Links */}
              <nav
                className="relative z-10 my-auto flex flex-col divide-y divide-white/10 py-4"
                aria-label="Mobile"
              >
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + idx * 0.04,
                      duration: 0.35,
                      ease: EDITORIAL_EASE,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="group flex min-h-[52px] items-center justify-between py-3 text-[#F7F4EC] transition active:opacity-75 hover:text-[#DCC28E]"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-[11px] font-medium tracking-[0.26em] text-[#C6A66B]/80">
                        0{idx + 1}
                      </span>
                      <span className="font-editorial text-[1.55rem] font-normal tracking-wide sm:text-[1.95rem]">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#C6A66B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Quick Contact & Plan Your Trip Button */}
              <div className="relative z-10 space-y-3 border-t border-[#C6A66B]/20 pt-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs tracking-wider text-[#F7F4EC] transition hover:border-[#C6A66B]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C6A66B]" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href="#enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#enquiry');
                  }}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#C6A66B] px-6 py-3 text-xs font-semibold tracking-[0.2em] text-[#102820] uppercase shadow-lg transition active:scale-[0.98] hover:bg-[#DCC28E]"
                >
                  <span>Plan Your Trip</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <p className="pt-1 text-center text-[9px] tracking-[0.2em] text-[#F7F4EC]/60 uppercase">
                  Bhargavi Tour and Travels &bull; Telangana
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
