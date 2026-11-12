import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight, Compass, Menu, X } from 'lucide-react';
import { EDITORIAL_EASE } from './Reveal';

const NAV_LINKS = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Journeys', href: '#journeys' },
  { label: 'Philosophy', href: '#about' },
  { label: 'Journal', href: '#gallery' },
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
            ? 'border-b border-[#C6A66B]/20 bg-[#102820]/95 py-2.5 shadow-[0_14px_45px_-16px_rgba(0,0,0,0.5)] backdrop-blur-md sm:py-3.5'
            : 'bg-gradient-to-b from-[#102820]/80 via-[#102820]/35 to-transparent py-3.5 sm:py-6'
        }`}
      >
        {/* Ultra-thin Editorial Scroll Progress Hairline */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-[#C6A66B]"
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Compact Brand Wordmark on Mobile, Editorial on Desktop */}
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
              <span className="font-editorial text-lg font-medium tracking-[0.2em] text-white sm:text-2xl sm:tracking-[0.26em]">
                ARANYA
              </span>
              <span className="mt-0.5 text-[7px] font-medium tracking-[0.24em] text-[#C6A66B]/90 uppercase sm:mt-1 sm:text-[8px] sm:tracking-[0.38em]">
                Private India &bull; Prototype
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="group relative text-[11px] font-medium tracking-[0.22em] text-[#F7F4EC]/88 uppercase transition-colors hover:text-[#DCC28E]"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#C6A66B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#enquiry');
              }}
              className="luxury-sheen hidden min-h-[40px] items-center justify-center rounded-full border border-[#C6A66B]/65 px-5 py-2 text-[10px] font-medium tracking-[0.18em] text-[#F7F4EC] uppercase transition-all duration-300 hover:bg-[#C6A66B] hover:text-[#102820] xs:inline-flex sm:px-6 sm:py-2.5 sm:text-[11px] sm:tracking-[0.2em]"
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

            {/* Slide-Out Panel (Full width on smartphones, max-w-md on tablets) */}
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
                    <span className="font-editorial text-xl tracking-[0.22em] text-white sm:text-2xl">
                      ARANYA
                    </span>
                    <span className="mt-1 text-[8px] tracking-[0.28em] text-[#C6A66B] uppercase">
                      Private India &bull; Prototype
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
                      delay: 0.06 + idx * 0.045,
                      duration: 0.35,
                      ease: EDITORIAL_EASE,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="group flex min-h-[58px] items-center justify-between py-3 text-[#F7F4EC] transition active:opacity-75 hover:text-[#DCC28E]"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-[11px] font-medium tracking-[0.26em] text-[#C6A66B]/80">
                        0{idx + 1}
                      </span>
                      <span className="font-editorial text-[1.75rem] font-normal tracking-wide sm:text-[2.15rem]">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#C6A66B]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </nav>

              {/* Prominent Mobile Trip Action */}
              <div className="relative z-10 border-t border-[#C6A66B]/20 pt-5">
                <a
                  href="#enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#enquiry');
                  }}
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#C6A66B] px-6 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#102820] uppercase shadow-lg transition active:scale-[0.98] hover:bg-[#DCC28E]"
                >
                  <span>Plan Your Trip</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="mt-3.5 text-center text-[10px] tracking-[0.24em] text-[#F7F4EC]/50 uppercase">
                  Curated India Travel Showcase
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
