import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  FileText,
  Info,
  MapPin,
  Send,
} from 'lucide-react';
import {
  FEATURED_JOURNEYS,
  type FeaturedJourney,
  type PackageCategory,
} from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

const CATEGORIES: PackageCategory[] = [
  'All Packages',
  'Srisailam Special Packages',
  'Telangana Temple Tours',
  'Maharashtra Pilgrimages',
  'Jyotirlinga Special Tours',
  'Ayodhya Dham Yatra',
  'Custom Spiritual Tours',
];

interface FeaturedJourneysProps {
  onSelectJourney: (journey: FeaturedJourney) => void;
  onEnquireJourney: (journey: FeaturedJourney) => void;
}

export function FeaturedJourneys({
  onSelectJourney,
  onEnquireJourney,
}: FeaturedJourneysProps) {
  const [activeCategory, setActiveCategory] =
    useState<PackageCategory>('All Packages');

  const filteredPackages =
    activeCategory === 'All Packages'
      ? FEATURED_JOURNEYS
      : FEATURED_JOURNEYS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#F8F5EE] py-16 text-[#171B19] sm:py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header + Transparent Quotation Notice */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#102820]/15 pb-8 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#10241E]/75 uppercase sm:tracking-[0.34em]">
              <span>04</span>
              <AnimatedRule className="h-px w-7 bg-[#10241E]/30 sm:w-8" />
              <span>Spiritual Tour Packages</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.15rem,6.8vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#1A1813] sm:mt-4">
              <MaskedLine delay={0.08}>Sacred Pilgrimage Circuits</MaskedLine>
            </h2>
            <Reveal delay={0.16}>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-[#171B19]/75 sm:mt-4 sm:text-base">
                Curated temple circuits crafted with devotion, unhurried pacing,
                senior-friendly comfort, and transparent quotations on request.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="inline-flex max-w-md items-start gap-3 rounded-2xl border border-[#102820]/15 bg-white p-4 text-xs leading-relaxed text-[#10241E] shadow-sm">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#10241E]/70" />
              <span>
                <strong>Transparent Pricing:</strong> We do not publish fixed or
                artificial prices. Every quote is custom-calculated with an honest,
                itemized quotation based on group size, vehicle choice, and exact dates.
              </span>
            </div>
          </Reveal>
        </div>

        {/* Category Filter Pills (Scrollable on Mobile) */}
        <div className="no-scrollbar -mx-4 mt-8 flex flex-nowrap gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:gap-2.5 sm:overflow-visible sm:px-0 sm:pb-0">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[40px] shrink-0 cursor-pointer rounded-full border px-4 py-2 text-[11px] font-semibold tracking-wider transition-all duration-300 sm:text-xs ${
                  isActive
                    ? 'border-[#10241E] bg-[#10241E] text-white font-bold shadow-sm'
                    : 'border-neutral-200 bg-white text-[#171B19]/75 hover:border-[#10241E] hover:text-[#10241E]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Package Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((journey, idx) => {
              const responsiveImg = getResponsiveImageProps(
                journey.image,
                '(max-width: 639px) 94vw, (max-width: 1023px) 47vw, 32vw'
              );

              return (
                <motion.article
                  key={journey.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  viewport={{ once: true, amount: 'some' }}
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min((idx % 6) * 0.05, 0.2),
                    ease: EDITORIAL_EASE,
                  }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E7DFD0] bg-[#FFFDF9] shadow-sm transition-all duration-300 hover:border-[#C6A66B] hover:shadow-lg"
                >
                  {/* Package Photography */}
                  <div
                    className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-[#102820]"
                    onClick={() => onSelectJourney(journey)}
                  >
                    <img
                      {...responsiveImg}
                      alt={journey.alt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/90 via-[#102820]/25 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-3.5 right-3.5 left-3.5 z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-full bg-white/95 px-3 py-1 text-[9px] font-bold tracking-wider text-[#10241E] uppercase shadow-sm">
                          {journey.category}
                        </span>
                        {journey.isSpecialHighlight && (
                          <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
                            ⭐ Special Package
                          </span>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#0B1A15]/85 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur-md">
                        <Clock className="h-2.5 w-2.5 text-white/80" />
                        <span>Custom ({journey.duration})</span>
                      </span>
                    </div>

                    <div className="absolute right-3.5 bottom-3 left-3.5 z-10">
                      <p className="flex items-center gap-1.5 text-[10px] tracking-wider text-white uppercase">
                        <MapPin className="h-3 w-3 text-white/80" />
                        <span className="truncate">{journey.destinationName}</span>
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3
                        onClick={() => onSelectJourney(journey)}
                        className="font-editorial cursor-pointer text-[1.65rem] font-medium leading-tight tracking-tight text-[#102820] transition-colors group-hover:text-[#18392E]"
                      >
                        {journey.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] font-semibold tracking-wider text-[#4A5550] uppercase">
                        {journey.routeSummary}
                      </p>
                      <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-[#171B19]/75 line-clamp-3">
                        {journey.summary}
                      </p>

                      {/* Package Highlights */}
                      <ul className="mt-4 space-y-1.5 border-t border-[#102820]/10 pt-3">
                        {journey.highlights.slice(0, 3).map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[12.5px] text-[#171B19]/80"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#10241E]/70" />
                            <span className="line-clamp-1">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quotation Status & Action Buttons */}
                    <div className="mt-5 border-t border-[#102820]/10 pt-4">
                      <div className="mb-3 flex items-center justify-between text-xs">
                        <span className="text-[#171B19]/60">Quotation:</span>
                        <span className="font-semibold text-[#102820]">
                          {journey.sampleEstimate}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => onSelectJourney(journey)}
                          className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#102820]/20 bg-white px-3 py-2 text-[10px] font-semibold tracking-wider text-[#10241E] uppercase transition hover:bg-[#F2EFE8]"
                        >
                          <FileText className="h-3 w-3 text-[#10241E]/60" />
                          <span>View Itinerary</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onEnquireJourney(journey)}
                          className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#10241E] px-3 py-2 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#18392E]"
                        >
                          <Send className="h-3 w-3 text-white" />
                          <span>Get Quotation</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
