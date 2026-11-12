import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, X } from 'lucide-react';
import type { Destination } from '../data/travelData';
import { getResponsiveImageProps } from '../utils/responsiveMedia';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onEnquire: (destinationName: string) => void;
}

export function DestinationModal({
  destination,
  onClose,
  onEnquire,
}: DestinationModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (destination) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [destination, onClose]);

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-[#102820]/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-[#FCFBF7] pb-[env(safe-area-inset-bottom)] text-[#171B19] shadow-2xl sm:max-h-[90vh] sm:rounded-2xl sm:pb-0"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close destination overview"
              className="absolute top-4 right-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#102820]/80 text-white backdrop-blur-md transition hover:bg-[#C6A66B] hover:text-[#102820] sm:top-5 sm:right-5"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero Image Header */}
            <div className="relative h-64 w-full overflow-hidden sm:h-88">
              <img
                {...getResponsiveImageProps(
                  destination.image,
                  '(max-width: 768px) 100vw, 896px'
                )}
                alt={destination.alt}
                decoding="async"
                referrerPolicy="no-referrer"
                className="photo-grade h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102820] via-[#102820]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A66B]/50 bg-[#102820]/65 px-3.5 py-1 text-[10px] font-medium tracking-[0.22em] text-[#DCC28E] uppercase backdrop-blur-sm">
                  <MapPin className="h-3 w-3" />
                  {destination.region}
                </span>
                <p className="font-editorial mt-3 text-xl italic text-[#DCC28E]">
                  {destination.tagline}
                </p>
                <h3 className="font-editorial text-4xl font-normal text-white sm:text-5xl">
                  {destination.name}
                </h3>
              </div>
            </div>

            {/* Editorial Body */}
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap gap-3 border-b border-[#102820]/10 pb-6">
                <div className="flex items-center gap-2 rounded-full bg-[#102820]/5 px-4 py-2 text-xs text-[#102820]">
                  <Calendar className="h-3.5 w-3.5 text-[#C6A66B]" />
                  <span>
                    <strong className="font-semibold">Best Time:</strong>{' '}
                    {destination.bestSeason}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#102820]/5 px-4 py-2 text-xs text-[#102820]">
                  <Clock className="h-3.5 w-3.5 text-[#C6A66B]" />
                  <span>
                    <strong className="font-semibold">Ideal Pace:</strong>{' '}
                    {destination.idealDuration}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-base font-light leading-relaxed text-[#171B19]/85 sm:text-lg">
                {destination.editorialStory}
              </p>

              {/* Mood Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {destination.moodTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#C6A66B]/50 bg-[#C6A66B]/10 px-3.5 py-1 text-[11px] font-medium tracking-wider text-[#102820]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Curated Highlights */}
              <div className="mt-8 rounded-2xl bg-white/80 p-6 ring-1 ring-[#102820]/8">
                <h4 className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#102820] uppercase">
                  <Sparkles className="h-4 w-4 text-[#C6A66B]" />
                  Illustrative Destination Highlights
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {destination.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-light text-[#171B19]/85"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A66B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Bar */}
              <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#102820]/10 pt-6 sm:flex-row sm:items-center">
                <p className="text-xs text-[#171B19]/60">
                  Prototype editorial preview &bull; Customisable for your
                  agency&apos;s destinations
                </p>
                <button
                  type="button"
                  onClick={() => onEnquire(destination.name)}
                  className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#102820] px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-[#F7F4EC] uppercase transition hover:bg-[#C6A66B] hover:text-[#102820] sm:w-auto"
                >
                  <span>Enquire About {destination.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
