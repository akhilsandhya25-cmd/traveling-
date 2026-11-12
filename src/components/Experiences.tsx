import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

interface ExperiencesProps {
  onSelectExperience?: (title: string) => void;
}

export function Experiences({ onSelectExperience }: ExperiencesProps) {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section
      id="experiences"
      className="editorial-grain relative overflow-hidden bg-[#102820] py-16 text-[#F7F4EC] sm:py-24 lg:py-36"
    >
      {/* Subtle Ambient Gold Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#C6A66B]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#C6A66B]/20 pb-8 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>02</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Signature Experiences</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.15rem,6.8vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:mt-4">
              <MaskedLine delay={0.08}>Travel Beyond the Ordinary.</MaskedLine>
            </h2>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-[15px] font-light leading-relaxed text-[#F7F4EC]/78 sm:text-base">
              Curated travel moods designed around how you wish to feel—from
              silent Himalayan passes to candlelit palace courtyards.
            </p>
          </Reveal>
        </div>

        {/* Staggered Editorial Lookbook Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:gap-7 lg:pb-10">
          {EXPERIENCES.map((exp, idx) => {
            const isActive = activeId === exp.id;
            const staggerOffset =
              idx % 3 === 1
                ? 'lg:translate-y-8'
                : idx % 3 === 2
                  ? 'lg:translate-y-4'
                  : '';

            const responsiveImg = getResponsiveImageProps(
              exp.image,
              '(max-width: 431px) 94vw, (max-width: 1023px) 47vw, 31vw'
            );

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                whileTap={{ scale: 0.99 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(idx * 0.06, 0.25),
                  ease: EDITORIAL_EASE,
                }}
                onMouseEnter={() => setActiveId(exp.id)}
                onClick={() => {
                  setActiveId(exp.id);
                  onSelectExperience?.(exp.title);
                }}
                className={`group relative flex min-h-[340px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border transition-colors duration-500 xs:min-h-[360px] sm:min-h-[410px] lg:min-h-[450px] ${staggerOffset} ${
                  isActive
                    ? 'border-[#C6A66B]/65 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.65)]'
                    : 'border-white/10'
                }`}
              >
                {/* Background Photo */}
                <img
                  {...responsiveImg}
                  alt={exp.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="photo-grade absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                />

                {/* Cinematic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/96 via-[#102820]/42 to-[#102820]/30 transition-opacity duration-500 group-hover:via-[#102820]/55" />

                {/* Top Hairline Index */}
                <div className="relative z-10 mx-4 mt-4 flex items-center justify-between gap-2 border-b border-white/15 pb-2.5 sm:mx-6 sm:mt-6 sm:pb-3">
                  <span className="truncate text-[9px] font-medium tracking-[0.18em] text-[#DCC28E] uppercase sm:text-[10px] sm:tracking-[0.24em]">
                    {exp.pairedDestinations}
                  </span>
                  <span className="font-editorial shrink-0 text-base italic text-[#C6A66B] sm:text-lg">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom Overlay Typography */}
                <div className="relative z-10 p-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:-translate-y-1 sm:p-7">
                  <div className="mb-2.5 h-px w-8 bg-[#C6A66B] transition-all duration-500 group-hover:w-16 sm:mb-3" />
                  <p className="text-[10px] font-medium tracking-[0.22em] text-[#C6A66B] uppercase sm:tracking-[0.26em]">
                    {exp.subtitle}
                  </p>
                  <h3 className="font-editorial mt-1 text-[clamp(1.6rem,4.4vw,2.3rem)] font-normal leading-tight tracking-tight text-white">
                    {exp.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-[#F7F4EC]/84 sm:mt-3 sm:text-sm">
                    {exp.description}
                  </p>

                  <div className="mt-4 inline-flex min-h-[40px] items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-[#DCC28E] uppercase transition-transform duration-300 group-hover:translate-x-1.5 sm:mt-6">
                    <span>Inspire a Journey</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
