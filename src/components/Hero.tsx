import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Compass } from 'lucide-react';
import { EDITORIAL_EASE } from './Reveal';

const HERO_IMAGE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/View_of_Aru_Village_enclosed_by_snow_clad_mountains_from_top_of_Birzamal.jpg/1920px-View_of_Aru_Village_enclosed_by_snow_clad_mountains_from_top_of_Birzamal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.16]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], ['0%', '18%']);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#102820] text-white"
    >
      {/* Parallax + Slow Ken Burns Himalayan / Kashmir Background */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <motion.img
          src={HERO_IMAGE}
          alt="Snow-clad Himalayan peaks rising above Aru Valley in Kashmir, India"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.14, opacity: 0.7 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ duration: 2.2, ease: EDITORIAL_EASE }}
          className="photo-grade h-full w-full object-cover object-center will-change-transform"
        />
      </motion.div>

      {/* Dark Cinematic Multi-layer Scrim */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#102820]/75 via-[#171B19]/42 to-[#102820]/92" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#102820]/65 via-transparent to-[#102820]/55" />

      {/* Hero Editorial Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pt-24 pb-28 text-center sm:px-6 sm:pb-28 lg:px-10"
      >
        {/* Architectural Hairline Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.85, ease: EDITORIAL_EASE }}
          className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EDITORIAL_EASE }}
            className="h-px w-6 origin-right bg-[#C6A66B]/75 sm:w-12"
          />
          <span className="text-[10px] font-medium tracking-[0.3em] text-[#DCC28E] uppercase sm:text-[11px] sm:tracking-[0.38em]">
            THE ART OF TRAVELLING
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EDITORIAL_EASE }}
            className="h-px w-6 origin-left bg-[#C6A66B]/75 sm:w-12"
          />
        </motion.div>

        {/* Masked Kinetic Headline */}
        <h1 className="font-editorial max-w-5xl text-[2.35rem] font-normal leading-[1.03] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-[5.75rem]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '108%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.95, ease: EDITORIAL_EASE }}
              className="block will-change-transform"
            >
              India is not just a destination.
            </motion.span>
          </span>
          <span className="block overflow-hidden pt-1">
            <motion.span
              initial={{ y: '108%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1, delay: 1.12, ease: EDITORIAL_EASE }}
              className="block italic text-[#DCC28E] will-change-transform"
            >
              It&apos;s a feeling.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.28, ease: EDITORIAL_EASE }}
          className="mt-6 max-w-xl text-sm font-light leading-relaxed tracking-wide text-[#F7F4EC]/85 sm:mt-8 sm:text-base md:text-lg"
        >
          Discover extraordinary places, unforgettable journeys and the beauty of
          India.
        </motion.p>

        {/* Dual Luxury CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.42, ease: EDITORIAL_EASE }}
          className="mt-9 flex w-full max-w-xs flex-col items-center gap-3.5 sm:mt-11 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5"
        >
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#destinations')}
            className="group inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#F7F4EC] px-8 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-[#102820] uppercase shadow-[0_20px_45px_-12px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:bg-[#C6A66B] hover:text-[#102820] sm:w-auto sm:py-4"
          >
            <span>Explore India</span>
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#experiences')}
            className="group inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-[#F7F4EC]/40 bg-[#102820]/30 px-8 py-3.5 text-[11px] font-medium tracking-[0.22em] text-[#F7F4EC] uppercase backdrop-blur-md transition-colors duration-300 hover:border-[#C6A66B] hover:bg-[#102820]/75 hover:text-[#DCC28E] sm:w-auto sm:py-4"
          >
            <Compass className="h-4 w-4 text-[#C6A66B] transition-transform duration-700 group-hover:rotate-45" />
            <span>Discover Experiences</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Architectural Bottom Bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-7xl items-end justify-between px-6 pb-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.65, duration: 0.8 }}
          className="hidden items-center gap-3 text-[10px] tracking-[0.28em] text-[#F7F4EC]/55 uppercase md:flex"
        >
          <span className="h-px w-6 bg-[#C6A66B]/60" />
          <span>34.08&deg; N, 74.79&deg; E &bull; Kashmir</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          onClick={() => scrollToSection('#destinations')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55, duration: 0.8 }}
          aria-label="Scroll down to destinations"
          className="pointer-events-auto group mx-auto flex cursor-pointer flex-col items-center gap-2 focus:outline-none md:mx-0"
        >
          <span className="text-[9px] font-medium tracking-[0.36em] text-[#F7F4EC]/65 uppercase transition-colors group-hover:text-[#C6A66B]">
            Scroll
          </span>
          <span className="relative flex h-11 w-px overflow-hidden bg-white/20">
            <motion.span
              animate={{ y: ['-100%', '200%'] }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: 'easeInOut',
              }}
              className="h-1/2 w-full bg-gradient-to-b from-transparent via-[#C6A66B] to-[#F7F4EC]"
            />
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.65, duration: 0.8 }}
          className="hidden items-center gap-3 text-[10px] tracking-[0.28em] text-[#F7F4EC]/55 uppercase md:flex"
        >
          <span>Visual Concept Prototype</span>
          <span className="h-px w-6 bg-[#C6A66B]/60" />
        </motion.div>
      </div>
    </section>
  );
}
