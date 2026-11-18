import { motion } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  MapPin,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Star,
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

  const oneDayPkg = SRISAILAM_SPECIAL_PACKAGES.find((p) => p.duration === '1 Day') || SRISAILAM_SPECIAL_PACKAGES[0];
  const twoDayPkg = SRISAILAM_SPECIAL_PACKAGES.find((p) => p.duration === '2 Day') || SRISAILAM_SPECIAL_PACKAGES[1];

  return (
    <section
      id="srisailam-packages"
      className="relative overflow-hidden bg-[#0A1813] py-16 text-[#F6F3ED] sm:py-24 lg:py-28"
    >
      {/* Background ambient sacred illumination */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute top-10 left-1/3 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-emerald-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-4 py-1.5 text-[11px] font-bold tracking-[0.24em] text-emerald-300 uppercase backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            <span>Featured Sacred Packages</span>
            <AnimatedRule className="h-px w-5 bg-emerald-400/40" />
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

        {/* =========================================================================
            CARD 1: 1 DAY PACKAGE - PROMINENTLY HIGHLIGHTED & SEEN MORE
            Matches User's Image 1 Layout (Image Left, Details Right)
           ========================================================================= */}
        {oneDayPkg && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative mt-12 overflow-hidden rounded-3xl border-2 border-emerald-400 bg-white text-[#111827] shadow-[0_20px_60px_rgba(16,185,129,0.28)] ring-4 ring-emerald-500/20"
          >
            {/* Prominent Floating "MOST POPULAR • SRISAILAM SPECIAL" Highlight Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 px-6 py-2.5 text-white shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <Star className="h-4 w-4 fill-white text-white" />
                <span>⭐ MOST POPULAR &bull; SRISAILAM SPECIAL PACKAGE</span>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-0.5 text-[11px] font-semibold tracking-wide backdrop-blur-xs">
                Most Booked by Hyderabad Devotees
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Image matching User's Image 1 */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A1612] sm:aspect-[16/10] lg:col-span-5 lg:aspect-auto">
                <img
                  src={oneDayPkg.image}
                  alt={oneDayPkg.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                
                {/* Floating Image Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0A1612]/90 px-3 py-1 text-xs font-bold tracking-wider text-emerald-300 uppercase shadow-md backdrop-blur-md">
                    <Calendar className="h-3 w-3" />
                    <span>1 Day (Same Day Return)</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 z-10 text-white lg:hidden">
                  <p className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                    Mallikarjuna Swamy Temple Sanctum
                  </p>
                </div>
              </div>

              {/* Right Column: Content matching User's Image 1 */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div>
                  {/* Package Meta Header */}
                  <div className="flex flex-wrap items-center gap-2 pb-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-extrabold tracking-wider text-emerald-900 uppercase">
                      1 Day Package
                    </span>
                    <span className="rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-extrabold tracking-wider text-white uppercase shadow-xs">
                      Srisailam Special
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Same-Day Holy Yatra</span>
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F1E19] sm:text-4xl lg:text-[2.65rem]">
                    1 Day Package
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-emerald-800 uppercase sm:text-base">
                    Srisailam Special Same-Day Darshan &amp; Scenic Forest Tour
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Comfortable, private doorstep pickup from Hyderabad. Early morning forest drive through scenic Nallamala Ghats, peaceful temple darshan, sightseeing spots, and same-day return.
                  </p>

                  {/* Sightseeing List matching exact User Image 1 */}
                  <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                    <h4 className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-emerald-950 uppercase">
                      <Compass className="h-4 w-4 text-emerald-700" />
                      <span>Included Sightseeing &amp; Temples (8 Places)</span>
                    </h4>

                    <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {oneDayPkg.sightseeing.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[13.5px] font-medium text-neutral-800"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="mt-8 border-t border-neutral-200 pt-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    {/* Cyan "Book Now" Button matching User Image 1 */}
                    <a
                      href={getWhatsAppLink(oneDayPkg.whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-7 py-3 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-sky-500/25 transition-all hover:bg-[#0369A1] hover:scale-[1.02] sm:w-auto"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Book Now</span>
                      <ChevronRight className="h-4 w-4" />
                    </a>

                    {/* Online Enquiry Button */}
                    <button
                      type="button"
                      onClick={() => onPlanTrip('1 Day Package - Srisailam Special')}
                      className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold tracking-wider text-neutral-800 uppercase shadow-xs transition-all hover:bg-neutral-50 hover:border-neutral-400 sm:w-auto"
                    >
                      <Calendar className="h-4 w-4 text-neutral-600" />
                      <span>Plan Your Journey</span>
                    </button>

                    <a
                      href="tel:+917893999764"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-xs font-bold text-emerald-800 uppercase transition hover:bg-emerald-100 sm:ml-auto"
                    >
                      <PhoneCall className="h-4 w-4 text-emerald-700" />
                      <span>+91 7893999764</span>
                    </a>
                  </div>

                  <p className="mt-3 text-xs text-neutral-500">
                    &bull; Doorstep pickup in Hyderabad &bull; AC vehicle with devotional driver &bull; Customized departure timing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            CARD 2: 2 DAY PACKAGE
            Matches User's Image 2 Layout (Details Left, Image Right)
           ========================================================================= */}
        {twoDayPkg && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white text-[#111827] shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Content matching User's Image 2 */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div>
                  {/* Package Meta Header */}
                  <div className="flex flex-wrap items-center gap-2 pb-2">
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-extrabold tracking-wider text-neutral-800 uppercase">
                      2 Day Package
                    </span>
                    <span className="rounded-full bg-teal-800 px-3 py-1 text-[11px] font-extrabold tracking-wider text-white uppercase shadow-xs">
                      Srisailam Special
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>River Boating &amp; Tiger Reserve</span>
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F1E19] sm:text-4xl lg:text-[2.65rem]">
                    2 Day Package
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-teal-800 uppercase sm:text-base">
                    Srisailam Complete Yatra, Boating &amp; Tiger Reserve Experience
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Comprehensive 2-day spiritual pilgrimage covering all sacred shrines, scenic Krishna river boat cruise to Akka Mahadevi Caves, ropeway ride, and Srisailam Tiger Reserve.
                  </p>

                  {/* Sightseeing List matching exact User Image 2 */}
                  <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5">
                    <h4 className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-neutral-900 uppercase">
                      <Compass className="h-4 w-4 text-teal-700" />
                      <span>Included Sightseeing &amp; Temples (12 Places)</span>
                    </h4>

                    <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {twoDayPkg.sightseeing.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[13.5px] font-medium text-neutral-800"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="mt-8 border-t border-neutral-200 pt-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    {/* Cyan "Book Now" Button matching User Image 2 */}
                    <a
                      href={getWhatsAppLink(twoDayPkg.whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-7 py-3 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-sky-500/25 transition-all hover:bg-[#0369A1] hover:scale-[1.02] sm:w-auto"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Book Now</span>
                      <ChevronRight className="h-4 w-4" />
                    </a>

                    {/* Online Enquiry Button */}
                    <button
                      type="button"
                      onClick={() => onPlanTrip('2 Day Package - Srisailam Special')}
                      className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold tracking-wider text-neutral-800 uppercase shadow-xs transition-all hover:bg-neutral-50 hover:border-neutral-400 sm:w-auto"
                    >
                      <Calendar className="h-4 w-4 text-neutral-600" />
                      <span>Plan Your Journey</span>
                    </button>

                    <a
                      href="tel:+917893999764"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-3 text-xs font-bold text-neutral-800 uppercase transition hover:bg-neutral-100 sm:ml-auto"
                    >
                      <PhoneCall className="h-4 w-4 text-neutral-700" />
                      <span>+91 7893999764</span>
                    </a>
                  </div>

                  <p className="mt-3 text-xs text-neutral-500">
                    &bull; River boating &amp; ropeway guidance &bull; Hotel stay recommendations in Srisailam &bull; Sanitized AC vehicle
                  </p>
                </div>
              </div>

              {/* Right Column: Boat Image matching User's Image 2 */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A1612] sm:aspect-[16/10] lg:col-span-5 lg:aspect-auto">
                <img
                  src={twoDayPkg.image}
                  alt={twoDayPkg.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

                {/* Floating Image Badges */}
                <div className="absolute top-4 right-4 z-10 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0A1612]/90 px-3 py-1 text-xs font-bold tracking-wider text-teal-300 uppercase shadow-md backdrop-blur-md">
                    <Calendar className="h-3 w-3" />
                    <span>2 Days / 1 Night</span>
                  </span>
                </div>

                <div className="absolute bottom-3 right-4 z-10 text-white lg:hidden">
                  <p className="text-xs font-semibold tracking-wider text-teal-300 uppercase">
                    Krishna River Cruise &amp; Boating
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
