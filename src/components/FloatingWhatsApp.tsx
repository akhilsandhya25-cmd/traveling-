import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import {
  BUSINESS_INFO,
  WHATSAPP_CONFIG,
  buildWhatsAppUrl,
} from '../config/concierge';
import { EDITORIAL_EASE } from './Reveal';

interface FloatingWhatsAppProps {
  hidden?: boolean;
}

/**
 * Mobile-friendly floating direct contact bar:
 * Provides direct 1-tap Phone Call and direct WhatsApp concierge shortcuts.
 * Automatically yields when modals/drawers open or when the inline #enquiry concierge card is visible.
 */
export function FloatingWhatsApp({ hidden = false }: FloatingWhatsAppProps) {
  const [pastHero, setPastHero] = useState(false);
  const [enquiryInView, setEnquiryInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const enquiryEl = document.querySelector('#enquiry');
    if (!enquiryEl || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => setEnquiryInView(entry.isIntersecting),
      { threshold: 0.12 }
    );

    observer.observe(enquiryEl);
    return () => observer.disconnect();
  }, []);

  const isVisible = pastHero && !hidden && !enquiryInView;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.92 }}
          transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
          className="fixed right-3 bottom-[max(0.85rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-2 sm:right-6 sm:bottom-6 sm:gap-2.5"
        >
          {/* Direct Phone Call Button */}
          <motion.a
            href={BUSINESS_INFO.phoneTel}
            aria-label={`Call Bhargavi Tour and Travels directly at ${BUSINESS_INFO.phone}`}
            whileTap={{ scale: 0.92 }}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#10241E] text-white shadow-lg transition-all duration-200 hover:bg-[#18392E] sm:h-12 sm:w-auto sm:gap-2 sm:px-4.5"
          >
            <Phone className="h-4.5 w-4.5 shrink-0 text-white sm:h-4 sm:w-4" />
            <span className="hidden text-[11px] font-bold tracking-[0.14em] uppercase text-white sm:inline">
              Call Now
            </span>
          </motion.a>

          {/* WhatsApp Concierge Button */}
          <motion.a
            href={buildWhatsAppUrl(WHATSAPP_CONFIG.defaultGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Bhargavi Tour and Travels (+91 7893999764)"
            whileTap={{ scale: 0.92 }}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-[#16A34A] text-white shadow-lg transition-all duration-200 hover:bg-[#15803D] sm:h-12 sm:w-auto sm:gap-2 sm:px-4.5"
          >
            <MessageCircle className="h-4.5 w-4.5 shrink-0 text-white sm:h-4 sm:w-4" />
            <span className="hidden text-[11px] font-bold tracking-[0.14em] uppercase text-white sm:inline">
              WhatsApp
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
