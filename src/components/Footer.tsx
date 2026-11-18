import { Compass, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../config/concierge';
import { DESTINATIONS } from '../data/travelData';

interface FooterProps {
  onSelectDestinationName: (name: string) => void;
}

export function Footer({ onSelectDestinationName }: FooterProps) {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const popularPicks = DESTINATIONS;

  return (
    <footer className="editorial-grain relative border-t border-[#C6A66B]/20 bg-[#171B19] pt-14 pb-24 text-[#F7F4EC] sm:pt-24 sm:pb-12">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-10 sm:gap-12 sm:pb-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A66B]/45 text-[#C6A66B]">
                <Compass className="h-5 w-5" strokeWidth={1.35} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-editorial block text-xl font-bold tracking-[0.14em] text-white sm:text-2xl">
                    BHARGAVI
                  </span>
                  <span className="rounded border border-white/30 bg-white/10 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.18em] text-white uppercase shadow-sm">
                    TOUR &amp; TRAVELS
                  </span>
                </div>
                <span className="mt-1 block text-[8px] font-medium tracking-[0.28em] text-white/70 uppercase">
                  Sacred India Pilgrimages &bull; Telangana
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-[#F7F4EC]/75">
              Specialising in spiritual tourism, temple visits, Jyotirlinga
              yatras, sacred darshan circuits, and holy pilgrimages across India
              with comfort, devotion, and transparent quotations.
            </p>

            <div className="mt-6 space-y-1.5 text-xs text-[#DCC28E]">
              <p className="font-medium text-white">Office Headquarters:</p>
              <p className="text-[#F7F4EC]/70 leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A66B] uppercase">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-[#F7F4EC]/75">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Srisailam Special', href: '#srisailam-packages' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Tour Packages', href: '#packages' },
                { label: 'Our Fleet', href: '#fleet' },
                { label: 'Spiritual Map', href: '#spiritual-map' },
                { label: 'Contact Us', href: '#contact' },
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

          {/* Popular Spiritual Destinations */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A66B] uppercase">
              Popular Holy Shrines
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1 text-sm font-light text-[#F7F4EC]/75">
              {popularPicks.map((dest) => (
                <li key={dest.id}>
                  <button
                    type="button"
                    onClick={() => onSelectDestinationName(dest.name)}
                    className="inline-flex min-h-[36px] cursor-pointer items-center text-left transition hover:text-[#C6A66B]"
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A66B] uppercase">
              Official Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm font-light text-[#F7F4EC]/75">
              <li>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-start gap-3 transition hover:text-[#C6A66B]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.emailMailto}
                  className="flex items-start gap-3 transition hover:text-[#C6A66B]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
                  <span className="break-all">{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
                <span className="leading-relaxed">
                  Balakrishna Nagar, Ramanthapur, Uppal, Medchal-Malkajgiri
                  District, Telangana, India.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#F7F4EC]/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights
            reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">
            Spiritual Tourism &bull; Pilgrimage Tours &bull; Telangana &amp; Pan-India
          </p>
        </div>
      </div>
    </footer>
  );
}
