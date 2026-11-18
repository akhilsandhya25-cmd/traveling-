import { motion } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { SRISAILAM_SPECIAL_PACKAGES } from '../data/travelData';
import { AnimatedRule, MaskedLine, Reveal } from './Reveal';

interface SrisailamSpotlightProps {
  onPlanTrip: (packageName: string) => void;
}

export function SrisailamSpotlight({ onPlanTrip }: SrisailamSpotlightProps) {
  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/917893999764?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="srisailam-packages"
      className="relative overflow-hidden bg-[#10241E] py-16 text-[#F6F3ED] sm:py-24 lg:py-28"
    >
      {/* Subtle background ambient gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.24em] text-white uppercase backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-white" />
            <span>Featured Sacred Packages</span>
            <AnimatedRule className="h-px w-5 bg-white/40" />
            <span>VIP Spotlight</span>
          </Reveal>

          <h2 className="font-editorial mt-4 text-[clamp(2.1rem,5.5vw,3.8rem)] font-normal leading-[1.1] tracking-tight text-white">
            <MaskedLine delay={0.08}>Srisailam Special Holy Yatra Packages</MaskedLine>
          </h2>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-3 max-w-2xl text-[14.5px] font-light leading-relaxed text-white/80 sm:text-base">
              Direct, comfortable pilgrimage packages to Mallikarjuna Swamy Jyotirlinga &amp;
              Bhramaramba Devi Shakti Peeth with sanitized AC vehicles, experienced devotional
              drivers, and doorstep pickup from Hyderabad.
            </p>
          </Reveal>
        </div>

        {/* 2 Special Packages Grid (1 Day & 2 Day Packages) */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {SRISAILAM_SPECIAL_PACKAGES.map((pkg, idx) => {
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.07] hover:shadow-2xl"
              >
                {/* Visual Header Image from User's Uploaded Package Photos */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1612]">
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10241E] via-[#10241E]/40 to-transparent" />

                  {/* Badge & Duration Overlays */}
                  <div className="absolute top-4 right-4 left-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#0B1A15]/85 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md">
                      <Calendar className="h-3 w-3 text-white" />
                      <span>{pkg.duration}</span>
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-wider text-[#10241E] uppercase shadow-md">
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Title overlay inside photo */}
                  <div className="absolute right-4 bottom-3 left-4">
                    <h3 className="font-editorial text-2xl font-normal text-white sm:text-3xl">
                      {pkg.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/80">{pkg.tagline}</p>
                  </div>
                </div>

                {/* Package Sightseeing List */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-center gap-2 border-b border-white/15 pb-3">
                      <Compass className="h-4 w-4 text-white" />
                      <h4 className="text-xs font-bold tracking-wider text-white uppercase">
                        Included Sightseeing &amp; Sacred Places
                      </h4>
                      <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-mono text-white">
                        {pkg.sightseeing.length} Places
                      </span>
                    </div>

                    <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {pkg.sightseeing.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[13px] font-light text-white/90"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="mt-8 border-t border-white/15 pt-5">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {/* WhatsApp Instant Booking Button */}
                      <a
                        href={getWhatsAppLink(pkg.whatsappMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold tracking-wider text-[#10241E] uppercase shadow-md transition-all hover:bg-neutral-100 hover:scale-[1.02]"
                      >
                        <MessageCircle className="h-4 w-4 text-[#10241E]" />
                        <span>Book Now</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </a>

                      {/* Online Enquiry Button */}
                      <button
                        type="button"
                        onClick={() => onPlanTrip(pkg.title)}
                        className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-4 py-2.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white"
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Plan Your Journey</span>
                      </button>
                    </div>

                    <p className="mt-3 text-center text-[11px] text-white/60">
                      Doorstep pickup from Hyderabad &bull; Personalized travel timings &bull; Transparent quotations
                    </p>
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
