import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';
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

  const filteredDestinations =
    activeRegion === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF7ED] via-[#FDF2E7] to-[#FCECDC] py-16 text-[#171B19] sm:py-24 lg:py-36"
    >
      {/* Sunset Theme Ambient Glowing Orbs & Atmosphere */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#F59E0B]/22 via-[#FB923C]/18 to-[#E11D48]/12 blur-[130px] animate-pulse" />
      <div className="pointer-events-none absolute top-1/2 -left-32 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-[#EA580C]/18 via-[#FBBF24]/16 to-[#F59E0B]/12 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-tl from-[#E11D48]/16 via-[#F59E0B]/14 to-[#FBBF24]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Chapter Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#EA580C]/20 pb-7 sm:gap-10 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#D97706] uppercase sm:tracking-[0.34em]">
              <span>03</span>
              <AnimatedRule className="h-px w-7 bg-[#D97706] sm:w-8" />
              <span>Sacred Sanctuaries</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.2rem,6.8vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#1A1813] sm:mt-4">
              <MaskedLine delay={0.08}>Popular Spiritual Destinations</MaskedLine>
            </h2>
            <Reveal delay={0.18}>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-[#4A3B2C] sm:mt-4 sm:text-base md:text-lg">
                Fourteen revered pilgrimage destinations across South India,
                Maharashtra, and Ayodhya. Experience authentic temple architecture,
                divine darshans, and comfortable sacred travel bathed in the warmth
                of devotion.
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
                  onClick={() => setActiveRegion(region)}
                  className={`relative min-h-[42px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F59E0B] via-[#FB923C] to-[#EA580C] text-white shadow-[0_4px_16px_rgba(234,88,12,0.35)]'
                      : 'border border-amber-900/15 bg-white/70 text-[#5C4533] hover:border-amber-500 hover:bg-white hover:text-[#1A1813]'
                  }`}
                >
                  <span>{region}</span>
                  <span className={`ml-1.5 text-[10px] font-mono ${isActive ? 'text-amber-100' : 'text-[#D97706]'}`}>
                    ({count})
                  </span>
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
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  viewport={{ once: true, amount: 'some' }}
                  whileHover={{ y: -6, scale: 1.012 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min((index % 6) * 0.04, 0.2),
                    ease: EDITORIAL_EASE,
                  }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-amber-300/60 bg-gradient-to-b from-[#FFFBF5] via-[#FFF5EA] to-[#FEEED8] shadow-[0_16px_40px_-14px_rgba(217,119,6,0.22)] ring-1 ring-inset ring-white/60 transition-all duration-400 hover:border-amber-500 hover:shadow-[0_28px_65px_-12px_rgba(234,88,12,0.36)]"
                >
                  {/* Top Sunset Glow Gradient Accent Bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#F59E0B] via-[#FB923C] to-[#E11D48] transition-all duration-300 group-hover:h-2" />

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
                      className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A15]/95 via-[#0B1A15]/30 to-transparent" />

                    {/* Region & State Badge */}
                    <div className="absolute top-3.5 right-3.5 left-3.5 z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-[#0B1A15]/85 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-[#FEF3C7] uppercase backdrop-blur-md shadow-sm">
                        <MapPin className="h-2.5 w-2.5 text-[#F59E0B]" />
                        <span>{dest.state}</span>
                      </span>

                      <span className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
                        {dest.region}
                      </span>
                    </div>

                    {/* Deity Overlay */}
                    <div className="absolute right-3.5 bottom-3 left-3.5 z-10">
                      <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#FDE047] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        <Sparkles className="h-3.5 w-3.5 text-[#FBBF24]" />
                        <span>{dest.primaryDeity}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Content Body with Sunset Warmth */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3
                        onClick={() => onSelectDestination(dest)}
                        className="font-editorial cursor-pointer text-[1.65rem] font-semibold leading-tight tracking-tight text-[#1A1813] transition-colors group-hover:text-[#D97706]"
                      >
                        {dest.name}
                      </h3>
                      <p className="mt-1 font-editorial text-sm italic font-medium text-[#C2410C]">
                        {dest.tagline}
                      </p>
                      <p className="mt-2.5 text-[13.5px] font-normal leading-relaxed text-[#4A3B2C] line-clamp-3">
                        {dest.shortDescription}
                      </p>
                    </div>

                    {/* Custom Tour Duration (Replaced static Deal Duration per user request) */}
                    <div className="mt-4 flex items-center justify-between border-t border-amber-900/15 pt-3 text-[11.5px]">
                      <span className="inline-flex items-center gap-1.5 font-bold text-[#C2410C]">
                        <Clock className="h-3.5 w-3.5 text-[#EA580C]" />
                        <span>Custom Tour Duration</span>
                      </span>
                      <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-amber-950">
                        {dest.bestSeason}
                      </span>
                    </div>

                    {/* Dual Action Buttons: Explore More & Plan Your Trip */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={() => onSelectDestination(dest)}
                        className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-amber-600/30 bg-white/80 px-3 py-2 text-[10px] font-bold tracking-wider text-[#7C2D12] uppercase transition hover:border-amber-500 hover:bg-amber-100"
                      >
                        <span>Explore More</span>
                        <ArrowUpRight className="h-3 w-3 text-[#EA580C]" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onPlanTrip(dest.name)}
                        className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#D97706] px-3 py-2 text-[10px] font-black tracking-wider text-[#0F172A] uppercase shadow-[0_4px_14px_rgba(245,158,11,0.4)] transition-all hover:shadow-[0_8px_24px_rgba(245,158,11,0.6)] hover:brightness-105"
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
