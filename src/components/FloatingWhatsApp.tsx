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
            whileTap={{ scale: 0.93 }}
            className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-full border border-amber-300/50 bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#D97706] px-3.5 text-[#0F1D17] shadow-[0_10px_26px_rgba(245,158,11,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:brightness-110 sm:h-[50px] sm:px-4"
          >
            <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 duration-1000"></span>
              <Phone className="relative h-4 w-4 shrink-0 text-[#0F1D17]" />
            </span>
            <span className="text-[11px] font-black tracking-[0.14em] uppercase text-[#0F1D17] drop-shadow-xs">
              Call Now
            </span>
          </motion.a>

          {/* WhatsApp Concierge Button */}
          <motion.a
            href={buildWhatsAppUrl(WHATSAPP_CONFIG.defaultGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Bhargavi Tour and Travels (+91 7893999764)"
            whileTap={{ scale: 0.93 }}
            className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-full border border-emerald-300/40 bg-gradient-to-r from-[#25D366] via-[#1EB859] to-[#0E7A66] px-3.5 text-white shadow-[0_10px_26px_rgba(37,211,102,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:brightness-110 sm:h-[50px] sm:px-4"
          >
            <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 duration-1000"></span>
              <MessageCircle className="relative h-4 w-4 shrink-0 text-white" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white drop-shadow-xs">
              WhatsApp
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
