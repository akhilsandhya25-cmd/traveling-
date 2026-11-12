import { Compass, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

interface FooterProps {
  onSelectDestinationName: (name: string) => void;
}

export function Footer({ onSelectDestinationName }: FooterProps) {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="editorial-grain relative border-t border-[#C6A66B]/20 bg-[#171B19] pt-16 pb-10 text-[#F7F4EC] sm:pt-24 sm:pb-12">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:gap-12 sm:pb-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Placeholder */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A66B]/45 text-[#C6A66B]">
                <Compass className="h-5 w-5" strokeWidth={1.35} />
              </span>
              <div>
                <span className="font-editorial block text-2xl tracking-[0.26em] text-white">
                  ARANYA
                </span>
                <span className="block text-[8px] font-medium tracking-[0.34em] text-[#C6A66B] uppercase">
                  Agency Name Placeholder
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-[#F7F4EC]/70">
              An editorial luxury travel website concept showcasing bespoke
              journeys across India&apos;s mountains, palaces, backwaters, and
              sacred rivers.
            </p>

            {/* Social Media Placeholders */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#enquiry');
                }}
                aria-label="Instagram Placeholder"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F7F4EC]/75 transition hover:border-[#C6A66B] hover:text-[#C6A66B]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#enquiry');
                }}
                aria-label="YouTube Placeholder"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F7F4EC]/75 transition hover:border-[#C6A66B] hover:text-[#C6A66B]"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <span className="text-[10px] tracking-[0.24em] text-[#F7F4EC]/45 uppercase">
                Social Placeholders
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A66B] uppercase">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-[#F7F4EC]/75">
              {[
                { label: 'Destinations', href: '#destinations' },
                { label: 'Experiences', href: '#experiences' },
                { label: 'Featured Journeys', href: '#journeys' },
                { label: 'Philosophy', href: '#about' },
                { label: 'Visual Journal', href: '#gallery' },
                { label: 'Trip Enquiry', href: '#enquiry' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="transition hover:text-[#C6A66B]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A66B] uppercase">
              Popular Destinations
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-light text-[#F7F4EC]/75">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <button
                    type="button"
                    onClick={() => onSelectDestinationName(dest.name)}
                    className="cursor-pointer text-left transition hover:text-[#C6A66B]"
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A66B] uppercase">
              Contact Placeholders
            </h4>
            <ul className="mt-5 space-y-4 text-sm font-light text-[#F7F4EC]/75">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
                <span>+91 00000 00000 (Placeholder)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
                <span>concierge@agency-placeholder.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
                <span>
                  Agency Studio Address Placeholder, New Delhi &amp; Mumbai,
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Prototype Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#F7F4EC]/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} ARANYA (Agency Brand Placeholder).
            All rights reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">
            Visual Demonstration Prototype &bull; Non-Commercial Showcase
          </p>
        </div>
      </div>
    </footer>
  );
}
