import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from 'framer-motion';
import { Compass, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Journeys', href: '#journeys' },
  { label: 'Philosophy', href: '#about' },
  { label: 'Journal', href: '#gallery' },
];

export function Navbar() {
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
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
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
            ? 'border-b border-[#C6A66B]/20 bg-[#102820]/95 py-3.5 shadow-[0_14px_45px_-16px_rgba(0,0,0,0.5)] backdrop-blur-md'
            : 'bg-gradient-to-b from-[#102820]/75 via-[#102820]/30 to-transparent py-6'
        }`}
      >
        {/* Ultra-thin Editorial Scroll Progress Hairline */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-[#C6A66B]"
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Brand Wordmark (Agency Placeholder) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="group flex items-center gap-2.5 text-white focus:outline-none sm:gap-3.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C6A66B]/45 bg-[#102820]/35 text-[#C6A66B] transition-transform duration-700 group-hover:rotate-45">
              <Compass className="h-4 w-4" strokeWidth={1.35} />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-editorial text-xl font-medium tracking-[0.22em] text-white sm:text-2xl sm:tracking-[0.26em]">
                ARANYA
              </span>
              <span className="mt-1 text-[8px] font-medium tracking-[0.28em] text-[#C6A66B]/90 uppercase sm:tracking-[0.38em]">
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
          <div className="flex items-center gap-4">
            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#enquiry');
              }}
              className="hidden rounded-full border border-[#C6A66B]/65 px-6 py-2.5 text-[11px] font-medium tracking-[0.2em] text-[#F7F4EC] uppercase transition-all duration-300 hover:bg-[#C6A66B] hover:text-[#102820] sm:inline-flex"
            >
              Enquire
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-[#C6A66B] hover:text-[#C6A66B] lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="editorial-grain fixed inset-0 z-[60] flex flex-col justify-between gap-8 overflow-y-auto bg-[#102820] px-6 py-6 text-[#F7F4EC] sm:px-8 sm:py-8 lg:hidden"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex flex-col leading-none">
                <span className="font-editorial text-2xl tracking-[0.26em] text-white">
                  ARANYA
                </span>
                <span className="mt-1 text-[9px] tracking-[0.32em] text-[#C6A66B] uppercase">
                  Design Prototype
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A66B]/40 text-[#F7F4EC] transition hover:bg-[#C6A66B] hover:text-[#102820]"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="relative z-10 flex flex-col gap-4" aria-label="Mobile">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.45 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-editorial py-1 text-3xl font-normal tracking-wide text-[#F7F4EC] transition hover:text-[#C6A66B] sm:text-4xl"
                >
                  <span className="mr-4 font-sans text-xs tracking-[0.28em] text-[#C6A66B]/70">
                    0{idx + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="relative z-10 border-t border-[#C6A66B]/20 pt-6">
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#enquiry');
                }}
                className="flex w-full items-center justify-center rounded-full bg-[#C6A66B] px-6 py-3.5 text-xs font-semibold tracking-[0.22em] text-[#102820] uppercase transition hover:bg-[#DCC28E]"
              >
                Begin Trip Enquiry
              </a>
              <p className="mt-4 text-center text-[10px] tracking-[0.28em] text-[#F7F4EC]/45 uppercase">
                India Editorial Travel Showcase
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
