import { motion } from 'framer-motion';
import { ArrowRight, Info, Send } from 'lucide-react';
import { FEATURED_JOURNEYS, type FeaturedJourney } from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

interface FeaturedJourneysProps {
  onSelectJourney: (journey: FeaturedJourney) => void;
  onEnquireJourney: (journey: FeaturedJourney) => void;
}

export function FeaturedJourneys({
  onSelectJourney,
  onEnquireJourney,
}: FeaturedJourneysProps) {
  return (
    <section
      id="journeys"
      className="relative bg-[#F7F4EC] py-16 text-[#171B19] sm:py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header + Demo Prototype Notice */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#102820]/15 pb-8 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>03</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Featured Journeys</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.15rem,6.8vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#102820] sm:mt-4">
              <MaskedLine delay={0.08}>Curated Sample Itineraries.</MaskedLine>
            </h2>
            <Reveal delay={0.16}>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-[#171B19]/75 sm:mt-4 sm:text-base">
                Thoughtfully paced sample circuits crafted to demonstrate how
                your agency&apos;s signature tours can be presented online.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="inline-flex max-w-md items-start gap-3 rounded-xl border border-[#C6A66B]/45 bg-[#FCFBF7] px-4 py-3 text-xs leading-relaxed text-[#102820]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
              <span>
                <strong>Prototype Notice:</strong> Packages &amp; estimates
                below are illustrative demo examples, not confirmed commercial
                offers.
              </span>
            </div>
          </Reveal>
        </div>

        {/* 5 Featured Journeys — 1-Col Mobile -> 2-Col Tablet -> 2-Up + 3-Up Desktop */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-7 md:grid-cols-2 lg:grid-cols-12">
          {FEATURED_JOURNEYS.map((journey, idx) => {
            const isTopRow = idx < 2;
            const isLastTablet = idx === FEATURED_JOURNEYS.length - 1;
            const colSpanClass = isTopRow
              ? 'lg:col-span-6'
              : isLastTablet
                ? 'md:col-span-2 lg:col-span-4'
                : 'lg:col-span-4';

            const responsiveImg = getResponsiveImageProps(
              journey.image,
              '(max-width: 767px) 94vw, (max-width: 1023px) 47vw, 45vw'
            );

            return (
              <motion.article
                key={journey.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(idx * 0.06, 0.24),
                  ease: EDITORIAL_EASE,
                }}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-[#102820]/10 bg-[#FCFBF7] shadow-[0_20px_50px_-28px_rgba(16,40,32,0.22)] transition-colors duration-500 hover:border-[#C6A66B]/55 hover:shadow-[0_32px_70px_-24px_rgba(16,40,32,0.28)] ${colSpanClass}`}
              >
                {/* Destination Photography */}
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto ${
                    isTopRow ? 'lg:h-84' : 'lg:h-64'
                  }`}
                >
                  <img
                    {...responsiveImg}
                    alt={journey.alt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="photo-grade h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/88 via-[#102820]/20 to-transparent" />

                  {/* Clean Editorial Metadata Line */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 border-t border-white/20 pt-2.5 text-[10px] font-medium tracking-[0.2em] text-[#DCC28E] uppercase sm:inset-x-6 sm:bottom-5 sm:pt-3 sm:tracking-[0.24em]">
                    <span>{journey.destinationName}, India</span>
                    <span className="shrink-0 text-[#F7F4EC]">
                      {journey.duration}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
                  <div>
                    <h3 className="font-editorial text-[clamp(1.6rem,4.5vw,2rem)] font-normal leading-tight tracking-tight text-[#102820]">
                      {journey.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] font-light leading-relaxed text-[#171B19]/78 sm:mt-3 sm:text-sm">
                      {journey.summary}
                    </p>

                    {/* Numbered Itinerary Highlights */}
                    <ul className="mt-5 grid grid-cols-1 gap-2 border-t border-[#102820]/10 pt-4 sm:mt-6 sm:grid-cols-2 sm:gap-2.5 sm:pt-5">
                      {journey.highlights.map((highlight, hIdx) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-[13px] leading-snug text-[#171B19]/82 sm:text-xs"
                        >
                          <span className="font-editorial text-sm italic text-[#C6A66B]">
                            0{hIdx + 1}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Configured Demo Price + Comfortable View Details & Enquire Now Actions */}
                  <div className="mt-6 border-t border-[#102820]/10 pt-5 sm:mt-8 sm:pt-6">
                    {journey.sampleEstimate && (
                      <div className="mb-4">
                        <span className="block text-[9px] font-semibold tracking-[0.22em] text-[#C6A66B] uppercase">
                          Illustrative Demo Content
                        </span>
                        <span className="mt-0.5 block text-[13px] font-medium text-[#102820]/85 sm:text-xs">
                          {journey.sampleEstimate}
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2">
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelectJourney(journey)}
                        className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#102820] px-5 py-3 text-[11px] font-semibold tracking-[0.16em] text-[#F7F4EC] uppercase transition-colors duration-300 hover:bg-[#C6A66B] hover:text-[#102820]"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </motion.button>

                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onEnquireJourney(journey)}
                        className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#102820]/25 bg-transparent px-5 py-3 text-[11px] font-semibold tracking-[0.16em] text-[#102820] uppercase transition-colors duration-300 hover:border-[#C6A66B] hover:bg-[#C6A66B]/15"
                      >
                        <Send className="h-3.5 w-3.5 text-[#C6A66B]" />
                        <span>Enquire Now</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
