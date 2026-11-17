import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, Reveal } from './Reveal';

interface GalleryProps {
  onPlanTrip?: (destinationName: string) => void;
}

export function Gallery({ onPlanTrip }: GalleryProps) {
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
      className="editorial-grain relative overflow-hidden bg-gradient-to-b from-[#0A1813] via-[#10241E] to-[#0A1813] py-18 text-[#F7F4EC] sm:py-28 lg:py-38"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#C6A66B]/25 pb-8 sm:gap-8 sm:pb-12 md:flex-row md:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>08</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Sacred Visual Journal</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.15rem,6.8vw,4.35rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:mt-4">
              <span>Sanctums of <span className="text-[#DCC28E]">Sacred India</span></span>
            </h2>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-md text-[14px] font-light leading-relaxed text-[#F7F4EC]/85 sm:text-base">
              Fourteen sanctified shrines, golden temple vimanas, and holy
              riverbanks. Tap any photo to inspect temple architecture in the
              cinematic fullscreen lightbox.
            </p>
          </Reveal>
        </div>

        {/* Responsive Attractive Grid - All 14 Sacred Shrines Styled Luxuriously */}
        <div className="mt-8 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:mt-12 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {GALLERY_ITEMS.map((item, idx) => {
            const responsiveImg = getResponsiveImageProps(
              item.image,
              '(max-width: 479px) 94vw, (max-width: 1023px) 47vw, (max-width: 1279px) 31vw, 23vw'
            );

            return (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 'some' }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(idx * 0.04, 0.25),
                  ease: EDITORIAL_EASE,
                }}
                onClick={() => {
                  setDirection(1);
                  setSelectedIndex(idx);
                }}
                className="group relative flex aspect-[16/11] w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12241D] shadow-lg transition-all duration-300 hover:border-[#C6A66B] hover:shadow-2xl"
              >
                <img
                  {...responsiveImg}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1813]/95 via-[#0A1813]/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Top Badges: Location & Expand Button */}
                <div className="absolute top-3.5 right-3.5 left-3.5 z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-[#0B1A15]/90 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                    <MapPin className="h-2.5 w-2.5 text-white/70" />
                    <span className="truncate max-w-[140px]">{item.location}</span>
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0A1813] shadow transition-transform duration-300 group-hover:scale-105">
                    <Expand className="h-3.5 w-3.5 text-[#0A1813]" />
                  </div>
                </div>

                {/* Caption */}
                <figcaption className="absolute right-0 bottom-0 left-0 z-10 p-4 transition-transform duration-300 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5 text-[8.5px] font-bold tracking-wider text-white/90 uppercase backdrop-blur-md">
                      <Sparkles className="h-2.5 w-2.5 text-white/70" />
                      <span>{item.category}</span>
                    </span>
                  </div>
                  <p className="font-editorial mt-1.5 text-[1.25rem] font-medium leading-tight text-white transition-colors group-hover:text-white line-clamp-1 sm:text-[1.35rem]">
                    {item.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold tracking-wider text-white/80 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Inspect Sanctum View</span>
                    <span>&rarr;</span>
                  </p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox with Touch-Friendly Controls & Direct Planning CTA */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#07130F]/96 p-4 backdrop-blur-xl sm:p-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#0A1813] sm:top-5 sm:right-5"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Desktop Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                stepPrev();
              }}
              aria-label="Previous photograph"
              className="absolute left-4 z-20 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#0A1813] sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Desktop Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                stepNext();
              }}
              aria-label="Next photograph"
              className="absolute right-4 z-20 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#0A1813] sm:flex"
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
                className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.alt}
                    referrerPolicy="no-referrer"
                    className="max-h-[58vh] w-auto max-w-full rounded-2xl object-contain sm:max-h-[72vh]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>

                <div className="mt-4 text-center sm:mt-5">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-full border border-white/20 bg-white/15 px-3 py-0.5 text-[9px] font-bold uppercase text-white shadow-sm">
                      {activeItem.category}
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.24em] text-white/80 uppercase">
                      {activeItem.location} &bull; {selectedIndex + 1} / {GALLERY_ITEMS.length}
                    </span>
                  </div>

                  <p className="font-editorial mt-1.5 text-2xl font-medium text-white sm:text-3xl">
                    {activeItem.title}
                  </p>

                  {/* Direct Plan Pilgrimage CTA from Lightbox */}
                  {onPlanTrip && (
                    <div className="mt-3.5">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedIndex(null);
                          onPlanTrip(activeItem.title.replace('Temple', '').trim());
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold tracking-wider text-[#0A1813] uppercase shadow transition hover:bg-[#F2EFE8]"
                      >
                        <Send className="h-3.5 w-3.5 text-[#0A1813]" />
                        <span>Plan Pilgrimage to this Sanctum</span>
                      </button>
                    </div>
                  )}

                  {/* Mobile Prev / Next Lightbox Controls (44px+ Tap Targets) */}
                  <div className="mt-4 flex items-center justify-center gap-5 sm:hidden">
                    <button
                      type="button"
                      onClick={stepPrev}
                      aria-label="Previous photograph"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white active:scale-95"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={stepNext}
                      aria-label="Next photograph"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white active:scale-95"
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
