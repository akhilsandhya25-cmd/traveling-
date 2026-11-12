import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Info, MapPin, X } from 'lucide-react';
import type { FeaturedJourney } from '../data/travelData';

interface JourneyModalProps {
  journey: FeaturedJourney | null;
  onClose: () => void;
  onCustomise: (destinationName: string) => void;
}

export function JourneyModal({
  journey,
  onClose,
  onCustomise,
}: JourneyModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (journey) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [journey, onClose]);

  return (
    <AnimatePresence>
      {journey && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#102820]/80 p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-[#FCFBF7] text-[#171B19] shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close journey itinerary"
              className="absolute top-5 right-5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#102820]/80 text-white backdrop-blur-md transition hover:bg-[#C6A66B] hover:text-[#102820]"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero Cover */}
            <div className="relative h-64 w-full overflow-hidden sm:h-80">
              <img
                src={journey.image}
                alt={journey.alt}
                decoding="async"
                referrerPolicy="no-referrer"
                className="photo-grade h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102820] via-[#102820]/45 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C6A66B] px-3.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#102820] uppercase">
                    <CalendarDays className="h-3 w-3" />
                    {journey.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#102820]/60 px-3.5 py-1 text-[10px] font-medium tracking-[0.2em] text-white uppercase backdrop-blur-sm">
                    <MapPin className="h-3 w-3 text-[#C6A66B]" />
                    {journey.destinationName}
                  </span>
                </div>
                <h3 className="font-editorial mt-3 text-4xl font-normal text-white sm:text-5xl">
                  {journey.title}
                </h3>
              </div>
            </div>

            {/* Itinerary Content */}
            <div className="p-6 sm:p-10">
              <div className="flex items-start gap-3 rounded-2xl border border-[#C6A66B]/45 bg-white/90 p-4 text-xs leading-relaxed text-[#102820]">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A66B]" />
                <span>
                  <strong>Illustrative Prototype Package:</strong>{' '}
                  {journey.sampleEstimate}. Shown for visual concept
                  demonstration only—every route, stay, and pace is customisable
                  for your agency clients.
                </span>
              </div>

              <p className="mt-6 text-base font-light leading-relaxed text-[#171B19]/85">
                {journey.summary}
              </p>

              {/* Day-by-Day Editorial Timeline */}
              <div className="mt-8">
                <h4 className="text-xs font-semibold tracking-[0.24em] text-[#102820] uppercase">
                  Sample Day-by-Day Flow
                </h4>
                <div className="mt-5 space-y-4">
                  {journey.itinerary.map((step) => (
                    <div
                      key={step.day}
                      className="flex flex-col gap-2 rounded-2xl bg-white/80 p-5 ring-1 ring-[#102820]/8 sm:flex-row sm:items-start sm:gap-6"
                    >
                      <span className="shrink-0 rounded-full bg-[#102820]/8 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] text-[#102820] uppercase">
                        {step.day}
                      </span>
                      <div>
                        <h5 className="font-editorial text-xl font-medium text-[#102820]">
                          {step.title}
                        </h5>
                        <p className="mt-1 text-sm font-light leading-relaxed text-[#171B19]/75">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#102820]/10 pt-6 sm:flex-row sm:items-center">
                <span className="text-xs text-[#171B19]/60">
                  Interactive prototype preview &bull; No live booking
                  commitment
                </span>
                <button
                  type="button"
                  onClick={() => onCustomise(journey.destinationName)}
                  className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#102820] px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-[#F7F4EC] uppercase transition hover:bg-[#C6A66B] hover:text-[#102820] sm:w-auto"
                >
                  <span>Customise This Journey</span>
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
