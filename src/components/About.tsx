import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

const MAIN_ABOUT_IMAGE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Krishansar_Lake%2C_Sonmarg%2C_Kashmir_valley%2C_India_01.jpg/1920px-Krishansar_Lake%2C_Sonmarg%2C_Kashmir_valley%2C_India_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail';

const SECONDARY_ABOUT_IMAGE =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Houseboat_on_Alleppey_backwaters_%28Kerala%2C_India_2023%29_%2852703799667%29.jpg/1920px-Houseboat_on_Alleppey_backwaters_%28Kerala%2C_India_2023%29_%2852703799667%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail';

const PILLARS = [
  {
    number: '01',
    title: 'Unhurried Pacing',
    text: 'Space to breathe in misty valleys, linger over morning chai, and truly arrive in every place.',
  },
  {
    number: '02',
    title: 'Soulful Stays',
    text: 'Heritage havelis, cedar houseboats, and quiet mountain retreats chosen for character and warmth.',
  },
  {
    number: '03',
    title: 'Local Stories',
    text: 'Intimate encounters with regional craft, cuisine, and landscapes far beyond the usual tourist trail.',
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const primaryY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  const floatingY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const floatingRotate = useTransform(scrollYProgress, [0, 1], [1.2, -1.2]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="editorial-grain relative overflow-hidden bg-[#171B19] py-20 text-[#F7F4EC] sm:py-28 lg:py-40"
    >
      {/* Subtle Decorative Vertical Hairline */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 1.2, ease: EDITORIAL_EASE }}
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-px origin-top bg-gradient-to-b from-transparent via-[#C6A66B]/20 to-transparent lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:gap-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Left Asymmetrical Dual-Layer Parallax Imagery */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 1, ease: EDITORIAL_EASE }}
            className="relative overflow-hidden rounded-2xl bg-[#102820] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75)]"
          >
            <motion.div style={{ y: primaryY }} className="will-change-transform">
              <img
                src={MAIN_ABOUT_IMAGE}
                alt="High-altitude Krishansar alpine lake nestled in Kashmir mountains"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="photo-grade h-[360px] w-full scale-110 object-cover sm:h-[560px]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/65 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Overlapping Detail Card */}
          <motion.div
            style={{ y: floatingY, rotate: floatingRotate }}
            className="relative z-10 -mt-14 ml-auto w-[78%] max-w-[260px] overflow-hidden rounded-2xl border border-[#C6A66B]/40 bg-[#102820] p-2 shadow-2xl will-change-transform sm:-mt-20 sm:-mr-6 sm:w-72 sm:max-w-none sm:p-2.5"
          >
            <img
              src={SECONDARY_ABOUT_IMAGE}
              alt="Peaceful wooden houseboat along Kerala backwaters"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="photo-grade h-40 w-full rounded-xl object-cover"
            />
            <div className="px-2 py-3">
              <p className="text-[9px] font-medium tracking-[0.28em] text-[#C6A66B] uppercase">
                From Peaks to Palms
              </p>
              <p className="font-editorial mt-1 text-lg italic text-white">
                Crafted with feeling, never hurried.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Editorial Storytelling */}
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.34em] text-[#C6A66B] uppercase">
            <span>04</span>
            <AnimatedRule className="h-px w-8 bg-[#C6A66B]" />
            <span>Our Philosophy</span>
          </Reveal>

          <h2 className="font-editorial mt-5 text-[2.3rem] font-normal leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl lg:text-[3.75rem]">
            <MaskedLine delay={0.08}>We believe travel should</MaskedLine>
            <MaskedLine delay={0.18} className="italic text-[#DCC28E]">
              change the way you see the world.
            </MaskedLine>
          </h2>

          <Reveal delay={0.22}>
            <blockquote className="mt-8 border-l border-[#C6A66B]/55 pl-6 text-base font-light leading-relaxed text-[#F7F4EC]/84 sm:text-lg">
              Every journey has a story. Every destination holds an experience
              waiting to be discovered. We help travellers explore India&apos;s
              extraordinary landscapes, cultures and hidden treasures.
            </blockquote>
          </Reveal>

          {/* Editorial Brand Pillars */}
          <div className="mt-12 space-y-7 border-t border-[#C6A66B]/20 pt-9">
            {PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.number} delay={0.22 + idx * 0.08}>
                <div className="group flex items-start gap-5">
                  <span className="font-editorial text-2xl italic text-[#C6A66B] transition-transform duration-300 group-hover:translate-x-0.5">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.22em] text-white uppercase">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-[#F7F4EC]/70">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
