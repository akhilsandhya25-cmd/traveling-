import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { FEATURED_JOURNEYS, type FeaturedJourney } from '../data/travelData';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

interface FeaturedJourneysProps {
  onSelectJourney: (journey: FeaturedJourney) => void;
}

export function FeaturedJourneys({ onSelectJourney }: FeaturedJourneysProps) {
  return (
    <section
      id="journeys"
      className="relative bg-[#F7F4EC] py-20 text-[#171B19] sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header + Demo Prototype Notice */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#102820]/15 pb-10 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.34em] text-[#C6A66B] uppercase">
              <span>03</span>
              <AnimatedRule className="h-px w-8 bg-[#C6A66B]" />
              <span>Featured Journeys</span>
            </Reveal>
            <h2 className="font-editorial mt-4 text-[2.5rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#102820] sm:text-6xl lg:text-[4.25rem]">
              <MaskedLine delay={0.08}>Curated Sample Itineraries.</MaskedLine>
            </h2>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-[#171B19]/75">
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

        {/* 5 Featured Journeys — Editorial 2-Up + 3-Up Cadence */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-7 lg:grid-cols-12">
          {FEATURED_JOURNEYS.map((journey, idx) => {
            const isTopRow = idx < 2;
            return (
              <motion.article
                key={journey.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.08,
                  ease: EDITORIAL_EASE,
                }}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-[#102820]/10 bg-[#FCFBF7] shadow-[0_20px_50px_-28px_rgba(16,40,32,0.22)] transition-colors duration-500 hover:border-[#C6A66B]/55 hover:shadow-[0_32px_70px_-24px_rgba(16,40,32,0.28)] ${
                  isTopRow ? 'lg:col-span-6' : 'lg:col-span-4'
                }`}
              >
                {/* Destination Photography */}
                <div
                  className={`relative overflow-hidden ${
                    isTopRow ? 'h-60 sm:h-84' : 'h-56 sm:h-64'
                  }`}
                >
                  <img
                    src={journey.image}
                    alt={journey.alt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="photo-grade h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/85 via-[#102820]/15 to-transparent" />

                  {/* Clean Editorial Metadata Line */}
                  <div className="absolute inset-x-6 bottom-5 flex items-center justify-between border-t border-white/20 pt-3 text-[10px] font-medium tracking-[0.24em] text-[#DCC28E] uppercase">
                    <span>{journey.destinationName}, India</span>
                    <span className="text-[#F7F4EC]">{journey.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-8">
                  <div>
                    <h3 className="font-editorial text-3xl font-normal tracking-tight text-[#102820]">
                      {journey.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[#171B19]/75">
                      {journey.summary}
                    </p>

                    {/* Numbered Itinerary Highlights */}
                    <ul className="mt-6 grid grid-cols-1 gap-2.5 border-t border-[#102820]/10 pt-5 sm:grid-cols-2">
                      {journey.highlights.map((highlight, hIdx) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs text-[#171B19]/80"
                        >
                          <span className="font-editorial text-sm italic text-[#C6A66B]">
                            0{hIdx + 1}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indicative Demo Pricing + View Journey CTA */}
                  <div className="mt-8 flex flex-col gap-4 border-t border-[#102820]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="block text-[9px] font-semibold tracking-[0.24em] text-[#C6A66B] uppercase">
                        Illustrative Demo Content
                      </span>
                      <span className="mt-0.5 block text-xs font-medium text-[#102820]/80">
                        {journey.sampleEstimate}
                      </span>
                    </div>

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onSelectJourney(journey)}
                      className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#102820] px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#F7F4EC] uppercase transition-colors duration-300 hover:bg-[#C6A66B] hover:text-[#102820] sm:w-auto"
                    >
                      <span>View Journey</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
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
