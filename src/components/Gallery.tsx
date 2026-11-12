import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(1);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setDirection(1);
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setDirection(-1);
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  const activeItem =
    selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  const stepNext = () => {
    setDirection(1);
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
    );
  };

  const stepPrev = () => {
    setDirection(-1);
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  };

  return (
    <section
      id="gallery"
      className="relative bg-[#F7F4EC] py-16 text-[#171B19] sm:py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Heading */}
        <div className="flex flex-col justify-between gap-5 border-b border-[#102820]/15 pb-8 sm:gap-6 sm:pb-12 md:flex-row md:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>05</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Visual Journal</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.15rem,6.8vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#102820] sm:mt-4">
              <MaskedLine delay={0.08}>Frames From Across India.</MaskedLine>
            </h2>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-xs text-[14px] font-light leading-relaxed text-[#171B19]/70 sm:text-sm">
              Tap any photograph to inspect it in the fullscreen editorial
              lightbox.
            </p>
          </Reveal>
        </div>

        {/* Staggered Masonry-Inspired Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:mt-14 sm:gap-5 md:grid-cols-4 md:grid-flow-dense">
          {GALLERY_ITEMS.map((item, idx) => {
            const responsiveImg = getResponsiveImageProps(
              item.image,
              '(max-width: 431px) 94vw, (max-width: 767px) 47vw, 35vw'
            );

            return (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 'some' }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(idx * 0.05, 0.25),
                  ease: EDITORIAL_EASE,
                }}
                onClick={() => {
                  setDirection(1);
                  setSelectedIndex(idx);
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-[#102820] shadow-[0_20px_45px_-24px_rgba(16,40,32,0.45)] ${item.spanClass}`}
              >
                <img
                  {...responsiveImg}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/92 via-[#102820]/18 to-transparent opacity-80 transition-opacity duration-400 group-hover:opacity-95" />

                {/* Expand Badge (visible cue on touch devices, hover reveal on desktop) */}
                <div className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#102820]/60 text-white opacity-95 backdrop-blur-md transition-all duration-300 group-hover:scale-105 md:top-4 md:right-4 md:opacity-0 md:group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5" />
                </div>

                {/* Caption */}
                <figcaption className="absolute right-0 bottom-0 left-0 p-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-6 md:group-hover:-translate-y-1">
                  <span className="text-[10px] font-medium tracking-[0.22em] text-[#DCC28E] uppercase sm:tracking-[0.26em]">
                    {item.location}
                  </span>
                  <p className="font-editorial mt-0.5 text-[1.35rem] font-normal leading-snug text-white sm:mt-1 sm:text-2xl">
                    {item.title}
                  </p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox with Touch-Friendly Controls */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#102820]/95 p-4 backdrop-blur-lg sm:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-[#C6A66B] hover:text-[#102820] sm:top-5 sm:right-5"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                stepPrev();
              }}
              aria-label="Previous photograph"
              className="absolute left-4 z-20 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#C6A66B] hover:text-[#102820] sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                stepNext();
              }}
              aria-label="Next photograph"
              className="absolute right-4 z-20 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#C6A66B] hover:text-[#102820] sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeItem.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 28, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -28, scale: 0.97 }}
                transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[58vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl sm:max-h-[75vh]"
                />
                <div className="mt-4 text-center sm:mt-5">
                  <p className="text-[11px] font-medium tracking-[0.24em] text-[#C6A66B] uppercase sm:tracking-[0.26em]">
                    {activeItem.location} &bull; {selectedIndex + 1} /{' '}
                    {GALLERY_ITEMS.length}
                  </p>
                  <p className="font-editorial mt-1 text-2xl text-white sm:text-3xl">
                    {activeItem.title}
                  </p>

                  {/* Mobile Prev / Next Lightbox Controls (44px+ Tap Targets) */}
                  <div className="mt-4 flex items-center justify-center gap-5 sm:hidden">
                    <button
                      type="button"
                      onClick={stepPrev}
                      aria-label="Previous photograph"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white active:scale-95"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={stepNext}
                      aria-label="Next photograph"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white active:scale-95"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
