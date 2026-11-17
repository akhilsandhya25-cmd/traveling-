import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';
import {
  DESTINATIONS,
  type Destination,
  type RegionFilter,
} from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { MiniCartoonTourist } from './MiniCartoonTourist';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

const REGIONS: RegionFilter[] = [
  'All',
  'South India',
  'West & Central India',
  'North India',
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
  const [activeTouristIndex, setActiveTouristIndex] = useState(0);

  const filteredDestinations =
    activeRegion === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === activeRegion);

  const handleRegionChange = (region: RegionFilter) => {
    setActiveRegion(region);
    setActiveTouristIndex(0);
  };

  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-[#FAF7F2] py-16 text-[#171B19] sm:py-24 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Chapter Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#102820]/15 pb-7 sm:gap-10 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#10241E]/75 uppercase sm:tracking-[0.34em]">
              <span>03</span>
              <AnimatedRule className="h-px w-7 bg-[#10241E]/30 sm:w-8" />
              <span>Sacred Sanctuaries</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.2rem,6.8vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#1A1813] sm:mt-4">
              <MaskedLine delay={0.08}>Popular Spiritual Destinations</MaskedLine>
            </h2>
            <Reveal delay={0.18}>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-[#171B19]/75 sm:mt-4 sm:text-base md:text-lg">
                Fourteen revered pilgrimage destinations across South India,
                Maharashtra, and Ayodhya. Experience authentic temple architecture,
                divine darshans, and comfortable sacred travel.
              </p>
            </Reveal>
          </div>

          {/* Region Tabs (Scroll strip on mobile) */}
          <Reveal
            delay={0.14}
            className="no-scrollbar -mx-4 flex flex-nowrap gap-x-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:gap-x-3 sm:overflow-visible sm:px-0 sm:pb-0"
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
                  onClick={() => handleRegionChange(region)}
                  className={`relative min-h-[42px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-[#10241E] text-white shadow-sm'
                      : 'border border-[#102820]/15 bg-white text-[#171B19]/70 hover:border-[#102820] hover:text-[#10241E]'
                  }`}
                >
                  <span>{region}</span>
                  <span className={`ml-1.5 text-[10px] font-mono ${isActive ? 'text-white/70' : 'text-[#10241E]/60'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Playful Mini Cartoon Tourist Guide Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#10241E]/10 bg-white/90 px-4 py-2.5 shadow-xs sm:mt-8 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#10241E] text-xs">
              🎒
            </span>
            <p className="text-xs font-medium text-[#10241E]">
              <strong>Mini Tourist Guide:</strong> Currently visiting{' '}
              <span className="font-bold underline decoration-[#10241E]/30 underline-offset-2">
                {filteredDestinations[activeTouristIndex]?.name}
              </span>
              <span className="hidden text-neutral-500 sm:inline">
                {' '}&bull; Scroll through the slides to watch him hop from card to card!
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveTouristIndex(
                (prev) => (prev + 1) % filteredDestinations.length
              )
            }
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#10241E] px-3.5 py-1 text-[11px] font-bold text-white shadow-xs transition hover:bg-[#18392E]"
          >
            <span>Hop to Next</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Responsive Grid: 1-col Phones -> 2-col Tablets -> 3-col Desktop */}
        <motion.div
          layout
          className="mt-6 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => {
              const responsiveImg = getResponsiveImageProps(
                dest.image,
                '(max-width: 639px) 94vw, (max-width: 1023px) 47vw, 32vw'
              );
              const isTouristHere = activeTouristIndex === index;

              return (
                <motion.article
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  onViewportEnter={() => {
                    // Automatically trigger mini tourist jump as visitor scrolls down
                    setActiveTouristIndex(index);
                  }}
                  onMouseEnter={() => setActiveTouristIndex(index)}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  viewport={{ once: false, amount: 0.35 }}
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min((index % 3) * 0.08, 0.24),
                    ease: EDITORIAL_EASE,
                  }}
                  className="group relative flex flex-col pt-10"
                >
                  {/* Mini Cartoon Tourist perched atop the active card */}
                  {isTouristHere && (
                    <div className="absolute -top-4 left-1/2 z-30 -translate-x-1/2">
                      <MiniCartoonTourist
                        currentCardIndex={activeTouristIndex}
                        destinationName={dest.name}
                        tagline={dest.tagline}
                        onJumpNext={() =>
                          setActiveTouristIndex(
                            (prev) => (prev + 1) % filteredDestinations.length
                          )
                        }
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#E7DFD0] bg-[#FFFDF9] shadow-sm transition-all duration-300 group-hover:border-[#10241E]/40 group-hover:shadow-lg">
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
                        className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A15]/90 via-[#0B1A15]/20 to-transparent" />

                      {/* Region & State Badge */}
                      <div className="absolute top-3.5 right-3.5 left-3.5 z-10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#0B1A15]/85 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                          <MapPin className="h-2.5 w-2.5 text-white/70" />
                          <span>{dest.state}</span>
                        </span>

                        <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-[#10241E] uppercase shadow-sm">
                          {dest.region}
                        </span>
                      </div>

                      {/* Deity Overlay */}
                      <div className="absolute right-3.5 bottom-3 left-3.5 z-10">
                        <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-white uppercase">
                          <Sparkles className="h-3.5 w-3.5 text-white/80" />
                          <span>{dest.primaryDeity}</span>
                        </p>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <h3
                          onClick={() => onSelectDestination(dest)}
                          className="font-editorial cursor-pointer text-[1.65rem] font-medium leading-tight tracking-tight text-[#10241E] transition-colors group-hover:text-[#18392E]"
                        >
                          {dest.name}
                        </h3>
                        <p className="mt-1 font-editorial text-sm italic font-normal text-[#4A5550]">
                          {dest.tagline}
                        </p>
                        <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-[#171B19]/75 line-clamp-3">
                          {dest.shortDescription}
                        </p>
                      </div>

                      {/* Custom Tour Duration */}
                      <div className="mt-4 flex items-center justify-between border-t border-[#102820]/10 pt-3 text-[11.5px]">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-[#10241E]">
                          <Clock className="h-3.5 w-3.5 text-[#10241E]/70" />
                          <span>Custom Tour Duration</span>
                        </span>
                        <span className="rounded-full bg-[#102820]/5 px-2.5 py-0.5 text-[10px] font-medium text-[#102820]/80">
                          {dest.bestSeason}
                        </span>
                      </div>

                      {/* Dual Action Buttons */}
                      <div className="mt-5 grid grid-cols-2 gap-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => onSelectDestination(dest)}
                          className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#102820]/20 bg-white px-3 py-2 text-[10px] font-semibold tracking-wider text-[#10241E] uppercase transition hover:bg-[#F2EFE8]"
                        >
                          <span>Explore More</span>
                          <ArrowUpRight className="h-3 w-3 text-[#10241E]/60" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onPlanTrip(dest.name)}
                          className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#10241E] px-3 py-2 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#18392E]"
                        >
                          <span>Plan Your Trip</span>
                        </button>
                      </div>
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
