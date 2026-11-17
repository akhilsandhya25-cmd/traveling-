import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '../config/concierge';
import { EDITORIAL_EASE } from './Reveal';

interface FloatingWhatsAppProps {
  hidden?: boolean;
}

/**
 * Mobile-friendly floating WhatsApp concierge shortcut.
 * Uses configurable placeholder agency number and automatically yields when
 * modals/drawers open or when the inline #enquiry concierge card is visible.
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
        <motion.a
          href={buildWhatsAppUrl(WHATSAPP_CONFIG.defaultGreeting)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Bhargavi Tour and Travels (+91 7893999764)"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
          whileTap={{ scale: 0.94 }}
          className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-[52px] min-w-[52px] items-center justify-center gap-2.5 rounded-full border border-emerald-300/40 bg-gradient-to-r from-[#25D366] via-[#1EB859] to-[#0E7A66] px-3.5 text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_36px_rgba(37,211,102,0.6)] sm:right-6 sm:bottom-6 sm:h-auto sm:px-5 sm:py-3.5"
        >
          <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 duration-1000"></span>
            <MessageCircle className="relative h-5 w-5 shrink-0 text-white sm:h-4 sm:w-4" />
          </span>
          <span className="hidden text-[11px] font-bold tracking-[0.16em] uppercase text-white drop-shadow-sm sm:inline">
            WhatsApp Enquiry
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
