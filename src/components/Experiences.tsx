import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/travelData';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

interface ExperiencesProps {
  onSelectExperience?: (title: string) => void;
}

export function Experiences({ onSelectExperience }: ExperiencesProps) {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section
      id="experiences"
      className="editorial-grain relative overflow-hidden bg-[#102820] py-20 text-[#F7F4EC] sm:py-28 lg:py-36"
    >
      {/* Subtle Ambient Gold Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#C6A66B]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#C6A66B]/20 pb-10 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.34em] text-[#C6A66B] uppercase">
              <span>02</span>
              <AnimatedRule className="h-px w-8 bg-[#C6A66B]" />
              <span>Signature Experiences</span>
            </Reveal>
            <h2 className="font-editorial mt-4 text-[2.5rem] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.5rem]">
              <MaskedLine delay={0.08}>Travel Beyond the Ordinary.</MaskedLine>
            </h2>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-sm font-light leading-relaxed text-[#F7F4EC]/75 sm:text-base">
              Curated travel moods designed around how you wish to feel—from
              silent Himalayan passes to candlelit palace courtyards.
            </p>
          </Reveal>
        </div>

        {/* Staggered Editorial Lookbook Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:pb-10">
          {EXPERIENCES.map((exp, idx) => {
            const isActive = activeId === exp.id;
            const staggerOffset =
              idx % 3 === 1
                ? 'lg:translate-y-8'
                : idx % 3 === 2
                  ? 'lg:translate-y-4'
                  : '';

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.07,
                  ease: EDITORIAL_EASE,
                }}
                onMouseEnter={() => setActiveId(exp.id)}
                onClick={() => {
                  setActiveId(exp.id);
                  onSelectExperience?.(exp.title);
                }}
                className={`group relative flex min-h-[360px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border transition-colors duration-500 sm:min-h-[430px] lg:min-h-[450px] ${staggerOffset} ${
                  isActive
                    ? 'border-[#C6A66B]/65 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.65)]'
                    : 'border-white/10'
                }`}
              >
                {/* Background Photo */}
                <img
                  src={exp.image}
                  alt={exp.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="photo-grade absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                />

                {/* Cinematic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/96 via-[#102820]/35 to-[#102820]/25 transition-opacity duration-500 group-hover:via-[#102820]/50" />

                {/* Top Hairline Index */}
                <div className="relative z-10 mx-6 mt-6 flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-[10px] font-medium tracking-[0.24em] text-[#DCC28E] uppercase">
                    {exp.pairedDestinations}
                  </span>
                  <span className="font-editorial text-lg italic text-[#C6A66B]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom Overlay Typography */}
                <div className="relative z-10 p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 sm:p-7">
                  <div className="mb-3 h-px w-8 bg-[#C6A66B] transition-all duration-500 group-hover:w-16" />
                  <p className="text-[10px] font-medium tracking-[0.26em] text-[#C6A66B] uppercase">
                    {exp.subtitle}
                  </p>
                  <h3 className="font-editorial mt-1.5 text-3xl font-normal tracking-tight text-white sm:text-4xl">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#F7F4EC]/82">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-[#DCC28E] uppercase transition-transform duration-300 group-hover:translate-x-1.5">
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
