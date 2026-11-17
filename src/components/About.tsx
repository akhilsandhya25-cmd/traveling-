import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { CheckCircle2, HeartHandshake, MapPin, Shield, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../config/concierge';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { getResponsiveImageProps } from '../utils/responsiveMedia';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

const MAIN_ABOUT_IMAGE = '/images/destinations/ayodhya.jpg';
const SECONDARY_ABOUT_IMAGE = '/images/destinations/shirdi.jpg';

const WHY_CHOOSE_US_PILLARS = [
  {
    number: '01',
    title: 'Personalised Pilgrimage Planning',
    text: 'Every devotee has unique spiritual intentions. We tailor darshan queues, special seva timings, and sacred river snan rituals to your family’s preferences.',
    icon: Sparkles,
    color: 'text-amber-400 border-amber-500/40 bg-amber-950/40',
  },
  {
    number: '02',
    title: 'Comfortable Travel Arrangements',
    text: 'Clean, sanitized AC vehicles, experienced courteous drivers, senior-citizen friendly pacing with wheelchair guidance, and hygienic pure-vegetarian dining stops.',
    icon: Shield,
    color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40',
  },
  {
    number: '03',
    title: 'Customised Spiritual Journeys',
    text: 'From Telangana hill shrines to South Indian gopurams, Maharashtra Jyotirlingas, and Ayodhya Dham, we craft circuits around your sacred schedule.',
    icon: MapPin,
    color: 'text-sky-400 border-sky-500/40 bg-sky-950/40',
  },
  {
    number: '04',
    title: 'Dedicated Customer Support',
    text: 'Attentive telephone assistance and continuous coordination before, during, and after your pilgrimage so you can focus entirely on divine contemplation.',
    icon: HeartHandshake,
    color: 'text-rose-400 border-rose-500/40 bg-rose-950/40',
  },
  {
    number: '05',
    title: 'Transparent Quotations',
    text: 'Honest, itemized quotations with zero hidden surprises or forced commercial stops. We never invent package prices or claim unverified guarantees.',
    icon: CheckCircle2,
    color: 'text-[#FDE047] border-amber-500/40 bg-amber-950/40',
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const prefersReduced = useReducedMotion();
  const disableParallax = isMobile || Boolean(prefersReduced);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const primaryY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  const floatingY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const floatingRotate = useTransform(scrollYProgress, [0, 1], [1.2, -1.2]);

  const mainImgProps = getResponsiveImageProps(
    MAIN_ABOUT_IMAGE,
    '(max-width: 1023px) 94vw, 48vw'
  );
  const secondaryImgProps = getResponsiveImageProps(
    SECONDARY_ABOUT_IMAGE,
    '(max-width: 639px) 75vw, 300px'
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="editorial-grain relative overflow-hidden bg-[#171B19] py-16 text-[#F7F4EC] sm:py-28 lg:py-40"
    >
      {/* Subtle Decorative Vertical Hairline */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 1.2, ease: EDITORIAL_EASE }}
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-px origin-top bg-gradient-to-b from-transparent via-[#C6A66B]/20 to-transparent lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Left Asymmetrical Dual-Layer Imagery */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.85, ease: EDITORIAL_EASE }}
            className="relative overflow-hidden rounded-2xl bg-[#102820] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75)]"
          >
            <motion.div
              style={disableParallax ? undefined : { y: primaryY }}
              className="will-change-transform"
            >
              <img
                {...mainImgProps}
                alt="Shri Ram Janmabhoomi Mandir illuminated in Ayodhya"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className={`photo-grade aspect-[4/3] w-full object-cover object-center sm:aspect-auto sm:h-[520px] lg:h-[560px] ${
                  disableParallax ? '' : 'scale-110'
                }`}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#102820]/75 via-transparent to-transparent" />

            <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/10 bg-[#102820]/90 p-3.5 backdrop-blur-md sm:right-6 sm:bottom-6 sm:left-6 sm:p-5">
              <p className="text-[10px] font-semibold tracking-[0.24em] text-[#C6A66B] uppercase">
                Based in Telangana &bull; Serving Devotees Pan-India
              </p>
              <p className="font-editorial mt-1 text-base text-white sm:text-xl">
                {BUSINESS_INFO.address.full}
              </p>
            </div>
          </motion.div>

          {/* Floating Overlapping Detail Card */}
          <motion.div
            style={
              disableParallax
                ? undefined
                : { y: floatingY, rotate: floatingRotate }
            }
            className="relative z-10 -mt-10 ml-auto w-[82%] max-w-[265px] overflow-hidden rounded-2xl border border-[#C6A66B]/40 bg-[#102820] p-2 shadow-2xl will-change-transform sm:-mt-20 sm:-mr-6 sm:w-72 sm:max-w-none sm:p-2.5"
          >
            <img
              {...secondaryImgProps}
              alt="Ancient stone gopuram of Srisailam Mallikarjuna Swamy Temple"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="photo-grade aspect-[16/10] w-full rounded-xl object-cover sm:aspect-auto sm:h-40"
            />
            <div className="px-2 py-2.5 sm:py-3">
              <p className="text-[9px] font-medium tracking-[0.24em] text-[#C6A66B] uppercase sm:tracking-[0.28em]">
                Spiritual Travel Service
              </p>
              <p className="font-editorial mt-1 text-base italic text-white sm:text-lg">
                Devotion, comfort &amp; peace of mind.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Editorial Storytelling */}
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
            <span>02</span>
            <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
            <span>About Bhargavi Tour and Travels</span>
          </Reveal>

          <h2 className="font-editorial mt-4 text-[clamp(2rem,6vw,3.75rem)] font-normal leading-[1.09] tracking-[-0.015em] text-white sm:mt-5">
            <MaskedLine delay={0.08}>Facilitating sacred</MaskedLine>
            <MaskedLine delay={0.18} className="italic text-[#DCC28E]">
              darshans with care &amp; reverence.
            </MaskedLine>
          </h2>

          <Reveal delay={0.22}>
            <blockquote className="mt-6 border-l border-[#C6A66B]/55 pl-5 text-[15px] font-light leading-relaxed text-[#F7F4EC]/84 sm:mt-8 sm:pl-6 sm:text-lg">
              <strong>Bhargavi Tour and Travels</strong> specialises in spiritual
              tourism, temple visits, pilgrimage tours and religious travel
              throughout India. Headquartered in Balakrishna Nagar, Ramanthapur,
              Uppal (Telangana), our mission is to ensure every family and
              elderly devotee travels in safety, peace, and spiritual comfort.
            </blockquote>
          </Reveal>

          {/* Section: Why Choose Us */}
          <div className="mt-8 border-t border-[#C6A66B]/20 pt-6 sm:mt-10 sm:pt-8">
            <p className="text-[11px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase">
              Why Devotees Choose Us
            </p>

            <div className="mt-6 space-y-5 sm:space-y-6">
              {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.number} delay={0.15 + idx * 0.05}>
                    <div className="group flex items-start gap-3.5 sm:gap-4.5">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-9 sm:w-9 ${pillar.color}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-xs font-semibold tracking-[0.16em] text-white uppercase sm:tracking-[0.18em]">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-[13.5px] font-light leading-relaxed text-[#F7F4EC]/75 sm:text-sm">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
