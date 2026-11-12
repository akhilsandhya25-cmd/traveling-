import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  DESTINATIONS,
  type Destination,
  type RegionFilter,
} from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

const REGIONS: RegionFilter[] = [
  'All',
  'Himalayas & North',
  'Royal & Spiritual',
  'Coast & South',
  'Northeast',
];

interface DestinationsProps {
  onSelectDestination: (destination: Destination) => void;
}

export function Destinations({ onSelectDestination }: DestinationsProps) {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('All');

  const filteredDestinations =
    activeRegion === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <section
      id="destinations"
      className="relative bg-[#F7F4EC] py-16 text-[#171B19] sm:py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Chapter Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#102820]/15 pb-7 sm:gap-10 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>01</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Destination Discovery</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.2rem,6.8vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#102820] sm:mt-4">
              <MaskedLine delay={0.08}>Find Your Somewhere.</MaskedLine>
            </h2>
            <Reveal delay={0.18}>
              <p className="mt-3 max-w-xl text-[15px] font-light leading-relaxed text-[#171B19]/75 sm:mt-4 sm:text-base md:text-lg">
                From the mountains to the ocean, discover the many faces of
                India.
              </p>
            </Reveal>
          </div>

          {/* Editorial Underlined Region Tabs (One-Handed Scroll Strip on Mobile) */}
          <Reveal
            delay={0.14}
            className="no-scrollbar -mx-4 flex flex-nowrap gap-x-5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {REGIONS.map((region) => {
              const isActive = activeRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`relative min-h-[44px] shrink-0 cursor-pointer py-2.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 sm:tracking-[0.2em] ${
                    isActive
                      ? 'text-[#102820]'
                      : 'text-[#171B19]/55 hover:text-[#102820]'
                  }`}
                >
                  {region}
                  {isActive && (
                    <motion.span
                      layoutId="region-underline"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute right-0 bottom-0 left-0 h-[1.5px] bg-[#C6A66B]"
                    />
                  )}
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Responsive Grid: 1-col Phones -> 2-col Large Phones -> 12-col Asymmetrical Desktop */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:mt-12 sm:gap-6 md:grid-cols-12 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => {
              const desktopSpanClass =
                activeRegion === 'All'
                  ? dest.gridClass
                  : 'md:col-span-6 md:min-h-[390px]';

              const responsiveImg = getResponsiveImageProps(
                dest.image,
                '(max-width: 431px) 94vw, (max-width: 767px) 47vw, (max-width: 1024px) 50vw, 45vw'
              );

              return (
                <motion.article
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  viewport={{ once: true, amount: 'some' }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{
                    duration: 0.65,
                    delay: Math.min(index * 0.04, 0.2),
                    ease: EDITORIAL_EASE,
                  }}
                  onClick={() => onSelectDestination(dest)}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-[#102820] shadow-[0_24px_60px_-28px_rgba(16,40,32,0.45)] md:justify-end ${desktopSpanClass}`}
                >
                  {/* Smartphone / Tablet (< md): Consistent 4:3 Image Frame | Desktop (md+): Full-Bleed Fill */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden md:static md:aspect-auto">
                    <img
                      {...responsiveImg}
                      alt={dest.alt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07] md:absolute md:inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/70 via-transparent to-[#102820]/25 md:bg-gradient-to-t md:from-[#102820]/95 md:via-[#102820]/30 md:to-[#102820]/20 md:group-hover:via-[#102820]/45" />

                    {/* Editorial Region Header Strip */}
                    <div className="absolute top-3.5 right-3.5 left-3.5 z-10 flex items-center justify-between border-b border-white/20 pb-2 md:top-6 md:right-6 md:left-6 md:pb-3">
                      <span className="rounded-full bg-[#102820]/55 px-2.5 py-0.5 text-[9px] font-medium tracking-[0.18em] text-[#F7F4EC]/95 uppercase backdrop-blur-sm md:rounded-none md:bg-transparent md:px-0 md:py-0 md:text-[10px] md:tracking-[0.26em] md:backdrop-blur-none">
                        {dest.region}
                      </span>
                      <span className="font-editorial text-base italic text-[#DCC28E] transition-transform duration-500 group-hover:translate-x-0.5 md:text-lg">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Typography Body: Dedicated Solid Panel on Mobile, Overlay on Desktop */}
                  <div className="relative z-10 flex flex-1 flex-col justify-between p-4 pt-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex-none md:p-8 md:group-hover:-translate-y-1">
                    <div>
                      <p className="font-editorial text-[1.05rem] italic tracking-wide text-[#DCC28E] sm:text-xl">
                        {dest.tagline}
                      </p>
                      <h3 className="font-editorial mt-0.5 text-[clamp(1.65rem,4.5vw,2.35rem)] font-normal leading-tight tracking-tight text-white">
                        {dest.name}
                      </h3>
                      <p className="mt-2 max-w-md text-[13.5px] font-light leading-relaxed text-[#F7F4EC]/82 line-clamp-2 sm:text-sm">
                        {dest.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 border-t border-white/15 pt-3.5 md:mt-5 md:flex-row md:items-center md:justify-between md:pt-4">
                      <span className="text-[10px] tracking-[0.18em] text-[#F7F4EC]/70 uppercase md:tracking-[0.22em]">
                        Ideal: {dest.idealDuration}
                      </span>
                      <span className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#C6A66B]/45 bg-[#18392e]/75 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-[#DCC28E] uppercase transition-colors group-hover:text-white md:min-h-0 md:w-auto md:justify-start md:border-0 md:bg-transparent md:px-0 md:py-0 md:tracking-[0.22em]">
                        <span>Explore</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C6A66B]/60 transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-[#102820] md:h-7 md:w-7">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
