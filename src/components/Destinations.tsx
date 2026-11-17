import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import {
  DESTINATIONS,
  type Destination,
  type RegionFilter,
} from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

const REGIONS: RegionFilter[] = [
  'All',
  'South India',
  'North India',
  'West & Central India',
  'East India',
];

interface DestinationsProps {
  onSelectDestination: (destination: Destination) => void;
  onPlanTrip: (destinationName: string) => void;
}

export function Destinations({
  onSelectDestination,
  onPlanTrip,
}: DestinationsProps) {
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
              <span>03</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Sacred Sanctuaries</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.2rem,6.8vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#102820] sm:mt-4">
              <MaskedLine delay={0.08}>Popular Spiritual Destinations</MaskedLine>
            </h2>
            <Reveal delay={0.18}>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-[#171B19]/75 sm:mt-4 sm:text-base md:text-lg">
                Revered pilgrimage hubs across South, North, West, Central, and
                East India. Experience timeless temple architecture, divine
                darshans, and comfortable sacred travel.
              </p>
            </Reveal>
          </div>

          {/* Region Tabs (Scroll strip on mobile) */}
          <Reveal
            delay={0.14}
            className="no-scrollbar -mx-4 flex flex-nowrap gap-x-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {REGIONS.map((region) => {
              const isActive = activeRegion === region;
              const count =
                region === 'All'
                  ? DESTINATIONS.length
                  : DESTINATIONS.filter((d) => d.region === region).length;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`relative min-h-[44px] shrink-0 cursor-pointer py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 sm:tracking-[0.2em] ${
                    isActive
                      ? 'text-[#102820]'
                      : 'text-[#171B19]/55 hover:text-[#102820]'
                  }`}
                >
                  <span>{region}</span>
                  <span className="ml-1.5 text-[9px] text-[#C6A66B] font-mono">
                    ({count})
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="region-underline"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#C6A66B]"
                    />
                  )}
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Responsive Grid: 1-col Phones -> 2-col Tablets -> 3-col Desktop */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => {
              const responsiveImg = getResponsiveImageProps(
                dest.image,
                '(max-width: 639px) 94vw, (max-width: 1023px) 47vw, 32vw'
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
                  transition={{
                    duration: 0.6,
                    delay: Math.min((index % 6) * 0.04, 0.2),
                    ease: EDITORIAL_EASE,
                  }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#102820]/10 bg-[#FCFBF7] shadow-[0_20px_50px_-28px_rgba(16,40,32,0.22)] ring-1 ring-inset ring-white/10 transition-all duration-500 hover:border-[#C6A66B]/55 hover:shadow-[0_30px_70px_-22px_rgba(16,40,32,0.3)]"
                >
                  {/* Authentic Destination Photography Frame */}
                  <div
                    className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-[#102820]"
                    onClick={() => onSelectDestination(dest)}
                  >
                    <img
                      {...responsiveImg}
                      alt={dest.alt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/90 via-[#102820]/25 to-transparent" />

                    {/* Region & State Badge */}
                    <div className="absolute top-3.5 right-3.5 left-3.5 z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#102820]/80 px-2.5 py-1 text-[9px] font-medium tracking-wider text-[#F7F4EC] uppercase backdrop-blur-md">
                        <MapPin className="h-2.5 w-2.5 text-[#C6A66B]" />
                        <span>{dest.state}</span>
                      </span>

                      <span className="rounded-full bg-[#C6A66B] px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[#102820] uppercase">
                        {dest.region}
                      </span>
                    </div>

                    {/* Deity Overlay */}
                    <div className="absolute right-3.5 bottom-3 left-3.5 z-10">
                      <p className="flex items-center gap-1.5 text-[10px] font-medium tracking-widest text-[#DCC28E] uppercase">
                        <Sparkles className="h-3 w-3 text-[#C6A66B]" />
                        <span>{dest.primaryDeity}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3
                        onClick={() => onSelectDestination(dest)}
                        className="font-editorial cursor-pointer text-[1.65rem] font-normal leading-tight tracking-tight text-[#102820] transition-colors group-hover:text-[#9A7B3E]"
                      >
                        {dest.name}
                      </h3>
                      <p className="mt-1 font-editorial text-sm italic text-[#8B6C33]">
                        {dest.tagline}
                      </p>
                      <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-[#171B19]/75 line-clamp-3">
                        {dest.shortDescription}
                      </p>
                    </div>

                    {/* Key Attributes */}
                    <div className="mt-4 border-t border-[#102820]/10 pt-3 text-[11px] text-[#171B19]/65">
                      <span className="font-medium text-[#102820]">Ideal Duration:</span>{' '}
                      {dest.idealDuration} &bull; {dest.bestSeason}
                    </div>

                    {/* Dual Action Buttons: Explore More & Plan Your Trip */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={() => onSelectDestination(dest)}
                        className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#102820]/25 bg-white px-3 py-2 text-[10px] font-semibold tracking-wider text-[#102820] uppercase transition hover:border-[#C6A66B] hover:bg-[#F7F4EC]"
                      >
                        <span>Explore More</span>
                        <ArrowUpRight className="h-3 w-3 text-[#C6A66B]" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onPlanTrip(dest.name)}
                        className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#C6A66B] px-3 py-2 text-[10px] font-semibold tracking-wider text-[#102820] uppercase shadow transition hover:bg-[#DCC28E]"
                      >
                        <span>Plan Your Trip</span>
                      </button>
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
