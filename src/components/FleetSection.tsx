import { motion } from 'framer-motion';
import {
  Car,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  Wind,
} from 'lucide-react';
import { CAR_FLEET } from '../data/travelData';
import { AnimatedRule, MaskedLine, Reveal } from './Reveal';

interface FleetSectionProps {
  onSelectCar?: (carName: string) => void;
}

export function FleetSection({ onSelectCar }: FleetSectionProps) {
  const phoneNumber = '+917893999764';

  const getCarWhatsAppLink = (carName: string) => {
    const text = `Hello Bhargavi Tour and Travels, I am interested in booking the ${carName} for our pilgrimage trip. Please share rate per km and package details.`;
    return `https://wa.me/917893999764?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-[#FFFDF9] py-16 text-[#171B19] sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#102820]/15 pb-7 sm:gap-10 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#10241E]/75 uppercase sm:tracking-[0.34em]">
              <Car className="h-3.5 w-3.5 text-[#10241E]" />
              <AnimatedRule className="h-px w-7 bg-[#10241E]/30 sm:w-8" />
              <span>Pilgrim Fleet</span>
            </Reveal>

            <h2 className="font-editorial mt-3.5 text-[clamp(2.2rem,6.8vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[#1A1813] sm:mt-4">
              <MaskedLine delay={0.08}>Our Fleet Of Cars</MaskedLine>
            </h2>

            <Reveal delay={0.18}>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-[#171B19]/75 sm:mt-4 sm:text-base md:text-lg">
                Safe, clean, and sanitized AC cars and group travellers for comfortable temple
                journeys across Telangana, Andhra Pradesh, Maharashtra, and all of India.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#102820]/20 bg-white px-5 py-2 text-xs font-bold tracking-wider text-[#10241E] uppercase shadow-xs transition hover:bg-[#F2EFE8]"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call +91 7893999764</span>
              </a>
              <a
                href={getCarWhatsAppLink('Custom Pilgrimage Vehicle')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#10241E] px-5 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#18392E]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Enquire Fleet</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* 6 Cars Grid from User's Image 3 */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {CAR_FLEET.map((car, index) => {
            return (
              <motion.article
                key={car.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-[#E7DFD0] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#10241E]/40 hover:shadow-lg"
              >
                <div>
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between border-b border-[#102820]/10 pb-3">
                    <span className="rounded-full bg-[#102820]/5 px-3 py-1 text-[10px] font-bold tracking-wider text-[#10241E] uppercase">
                      {car.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Sanitized</span>
                    </span>
                  </div>

                  {/* Car Name */}
                  <h3 className="font-editorial mt-4 text-2xl font-medium tracking-tight text-[#10241E] transition-colors group-hover:text-[#18392E]">
                    {car.name}
                  </h3>

                  {/* Key Specifications */}
                  <div className="mt-4 space-y-2.5 rounded-xl bg-[#FAF7F2] p-3.5 text-xs text-[#171B19]/80">
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-[#10241E]" />
                      <span>
                        <strong>Capacity:</strong> {car.capacity}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Wind className="h-3.5 w-3.5 text-[#10241E]" />
                      <span>
                        <strong>AC:</strong> {car.acType}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Car className="h-3.5 w-3.5 text-[#10241E]" />
                      <span>
                        <strong>Luggage:</strong> {car.luggage}
                      </span>
                    </div>
                  </div>

                  {/* Best For Description */}
                  <p className="mt-3.5 text-xs leading-relaxed text-[#171B19]/70">
                    <strong>Ideal for:</strong> {car.bestFor}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-3 space-y-1.5 border-t border-[#102820]/10 pt-3 text-[11.5px] text-[#171B19]/75">
                    {car.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10241E]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking & Quotation Buttons */}
                <div className="mt-6 grid grid-cols-1 gap-2 pt-4 border-t border-[#102820]/10 sm:grid-cols-2">
                  <a
                    href={getCarWhatsAppLink(car.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#10241E] px-3 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#18392E]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onSelectCar?.(`Car Rental - ${car.name}`)}
                    className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#10241E]/20 bg-white px-3 py-2 text-xs font-semibold tracking-wider text-[#10241E] uppercase transition hover:bg-[#F2EFE8]"
                  >
                    <span>Get Quote</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
