import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Info,
  MapPin,
  Navigation,
  Send,
  Sparkles,
} from 'lucide-react';
import { DESTINATIONS, type Destination } from '../data/travelData';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

interface SpiritualMapProps {
  onPlanTrip: (destinationName: string) => void;
  onExploreMore: (destination: Destination) => void;
}

export function SpiritualMap({ onPlanTrip, onExploreMore }: SpiritualMapProps) {
  const [selectedId, setSelectedId] = useState<string>('tirupati');
  const [filterRegion, setFilterRegion] = useState<string>('All');

  const selectedDest =
    DESTINATIONS.find((d) => d.id === selectedId) || DESTINATIONS[0];

  const filteredList =
    filterRegion === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === filterRegion);

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    selectedDest.mapQuery
  )}`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    selectedDest.mapQuery
  )}`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    selectedDest.mapQuery
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="spiritual-map"
      className="editorial-grain relative overflow-hidden bg-[#102820] py-16 text-[#F7F4EC] sm:py-24 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>05</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Interactive Pilgrimage Map</span>
            </Reveal>
            <h2 className="font-editorial mt-3.5 text-[clamp(2.2rem,6.8vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:mt-4">
              <MaskedLine delay={0.08}>Explore India&apos;s Spiritual Map</MaskedLine>
            </h2>
            <Reveal delay={0.16}>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-[#F7F4EC]/80 sm:mt-4 sm:text-base">
                Click any sacred destination marker across India to inspect
                temple highlights, open live satellite coordinates in Google
                Maps, and get direct route directions.
              </p>
            </Reveal>
          </div>

          {/* Region Quick Filter */}
          <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:px-0">
            {['All', 'South India', 'West & Central India', 'North India'].map(
              (reg) => {
                const isActive = filterRegion === reg;
                return (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => setFilterRegion(reg)}
                    className={`min-h-[38px] shrink-0 cursor-pointer rounded-full border px-3.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase transition-colors sm:text-[11px] ${
                      isActive
                        ? 'border-[#C6A66B] bg-[#C6A66B] text-[#102820]'
                        : 'border-white/20 bg-white/5 text-[#F7F4EC]/75 hover:border-[#C6A66B]/60 hover:text-white'
                    }`}
                  >
                    {reg}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Main Interactive Map Layout: Marker Rail (Left) + Detail & Embed (Right) */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Interactive Sacred Destination Markers Rail */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between pb-3 text-xs text-[#DCC28E]">
              <span className="font-semibold uppercase tracking-wider">
                Select Sacred Destination ({filteredList.length})
              </span>
              <span className="text-[10px] text-[#F7F4EC]/60">
                Click to update map
              </span>
            </div>

            <div className="custom-scrollbar flex max-h-[580px] flex-col gap-2 overflow-y-auto pr-1">
              {filteredList.map((dest) => {
                const isSelected = dest.id === selectedDest.id;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedId(dest.id)}
                    className={`group flex cursor-pointer items-center justify-between rounded-xl border p-3 text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-[#C6A66B] bg-[#18392e]/90 text-white shadow-lg ring-1 ring-[#C6A66B]'
                        : 'border-white/10 bg-[#10221c]/60 text-[#F7F4EC]/80 hover:border-[#C6A66B]/40 hover:bg-[#18392e]/40'
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isSelected
                            ? 'bg-[#C6A66B] text-[#102820]'
                            : 'border border-white/15 bg-white/5 text-[#C6A66B] group-hover:border-[#C6A66B]'
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold tracking-wide text-white">
                          {dest.name}
                        </p>
                        <p className="truncate text-[11px] text-[#DCC28E]/85">
                          {dest.primaryDeity} &bull; {dest.state}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] uppercase tracking-wider shrink-0 font-medium ${
                        isSelected ? 'text-[#C6A66B]' : 'text-white/40'
                      }`}
                    >
                      {dest.region.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Destination Card & Live Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Active Destination Information Header Card */}
            <motion.div
              key={selectedDest.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
              className="rounded-2xl border border-[#C6A66B]/35 bg-[#18392e]/75 p-5 shadow-xl ring-1 ring-inset ring-white/10 backdrop-blur-md sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C6A66B] text-[#102820]">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C6A66B] uppercase">
                    {selectedDest.primaryDeity}
                  </span>
                </div>

                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[9px] font-medium tracking-wider text-[#DCC28E] uppercase">
                  {selectedDest.state} &bull; {selectedDest.region}
                </span>
              </div>

              <div className="mt-3.5">
                <h3 className="font-editorial text-2xl font-normal text-white sm:text-3xl">
                  {selectedDest.name}
                </h3>
                <p className="font-editorial text-sm italic text-[#DCC28E]">
                  {selectedDest.tagline}
                </p>
                <p className="mt-2 text-[13.5px] font-light leading-relaxed text-[#F7F4EC]/82">
                  {selectedDest.shortDescription}
                </p>
              </div>

              {/* Action Buttons: Open in Google Maps & Get Directions */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-[#C6A66B] bg-[#C6A66B] px-4 py-2 text-[11px] font-semibold tracking-wider text-[#102820] uppercase shadow transition hover:bg-[#F7F4EC]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-wider text-[#F7F4EC] uppercase transition hover:border-[#C6A66B] hover:text-[#C6A66B]"
                >
                  <Navigation className="h-3.5 w-3.5 text-[#C6A66B]" />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={() => onExploreMore(selectedDest)}
                  className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-semibold tracking-wider text-[#F7F4EC] uppercase transition hover:border-[#C6A66B] hover:text-[#C6A66B]"
                >
                  <Info className="h-3.5 w-3.5 text-[#C6A66B]" />
                  <span>Temple Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onPlanTrip(selectedDest.name)}
                  className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#102820]/90 px-4 py-2 text-[11px] font-semibold tracking-wider text-[#DCC28E] uppercase transition hover:border-[#C6A66B]"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Plan Pilgrimage</span>
                </button>
              </div>
            </motion.div>

            {/* Embedded Responsive Free Google Map Container */}
            <div className="relative aspect-[16/10] w-full min-h-[300px] overflow-hidden rounded-2xl border border-white/15 bg-[#0a1813] shadow-2xl sm:min-h-[360px]">
              <iframe
                title={`Map of ${selectedDest.name} - Bhargavi Tour and Travels`}
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full opacity-92 filter grayscale-[18%] contrast-[105%]"
              />

              <div className="pointer-events-none absolute bottom-2 right-2 rounded-lg bg-[#102820]/85 px-2.5 py-1 text-[9px] tracking-wider text-[#DCC28E] backdrop-blur-md">
                Live Google Maps View &bull; Zero API Key Required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
