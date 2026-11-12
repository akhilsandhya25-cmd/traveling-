import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  DESTINATIONS,
  type Destination,
  type RegionFilter,
} from '../data/travelData';
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
      className="relative bg-[#F7F4EC] py-20 text-[#171B19] sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Editorial Chapter Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#102820]/15 pb-8 sm:gap-10 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.34em] text-[#C6A66B] uppercase">
              <span>01</span>
              <AnimatedRule className="h-px w-8 bg-[#C6A66B]" />
              <span>Destination Discovery</span>
            </Reveal>
            <h2 className="font-editorial mt-4 text-[2.6rem] font-normal leading-[1.04] tracking-[-0.02em] text-[#102820] sm:text-6xl lg:text-[4.5rem]">
              <MaskedLine delay={0.08}>Find Your Somewhere.</MaskedLine>
            </h2>
            <Reveal delay={0.18}>
              <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-[#171B19]/75 sm:mt-4 sm:text-base md:text-lg">
                From the mountains to the ocean, discover the many faces of
                India.
              </p>
            </Reveal>
          </div>

          {/* Editorial Underlined Region Tabs (Swipeable Row on Mobile) */}
          <Reveal
            delay={0.14}
            className="no-scrollbar -mx-5 flex flex-nowrap gap-x-6 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:gap-y-3 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {REGIONS.map((region) => {
              const isActive = activeRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`relative shrink-0 cursor-pointer py-2.5 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-[#102820]'
                      : 'text-[#171B19]/50 hover:text-[#102820]'
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

        {/* Asymmetrical Interactive Destination Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-12 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => {
              const spanClass =
                activeRegion === 'All'
                  ? dest.gridClass
                  : 'md:col-span-6 min-h-[320px] sm:min-h-[390px]';

              return (
                <motion.article
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, y: 26, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
                  viewport={{ once: true, amount: 'some' }}
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.75,
                    delay: Math.min(index * 0.05, 0.25),
                    ease: EDITORIAL_EASE,
                  }}
                  onClick={() => onSelectDestination(dest)}
                  className={`group relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-[#102820] shadow-[0_24px_60px_-28px_rgba(16,40,32,0.45)] ${spanClass}`}
                >
                  {/* Destination Image with Silky GPU Hover Zoom */}
                  <img
                    src={dest.image}
                    alt={dest.alt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="photo-grade absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                  />

                  {/* Refined Multi-Stop Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/95 via-[#102820]/30 to-[#102820]/20 transition-opacity duration-500 group-hover:via-[#102820]/45" />

                  {/* Whisper-Thin Editorial Header Line */}
                  <div className="absolute top-6 right-6 left-6 z-10 flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-[10px] font-medium tracking-[0.26em] text-[#F7F4EC]/85 uppercase">
                      {dest.region}
                    </span>
                    <span className="font-editorial text-lg italic text-[#DCC28E] transition-transform duration-500 group-hover:translate-x-0.5">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Editorial Card Typography with Gentle Lift on Hover */}
                  <div className="relative z-10 p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 sm:p-8">
                    <p className="font-editorial text-lg italic tracking-wide text-[#DCC28E] sm:text-xl">
                      {dest.tagline}
                    </p>
                    <h3 className="font-editorial mt-1 text-3xl font-normal tracking-tight text-white sm:text-4xl">
                      {dest.name}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm font-light leading-relaxed text-[#F7F4EC]/80 line-clamp-2">
                      {dest.shortDescription}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="text-[10px] tracking-[0.22em] text-[#F7F4EC]/65 uppercase">
                        {dest.idealDuration}
                      </span>
                      <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] text-[#DCC28E] uppercase transition-colors group-hover:text-white">
                        Explore
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C6A66B]/60 transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-[#102820]">
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
