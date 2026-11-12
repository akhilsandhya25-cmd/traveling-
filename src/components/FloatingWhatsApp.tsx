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
          aria-label="Chat on WhatsApp Concierge (Configurable Placeholder)"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
          whileTap={{ scale: 0.94 }}
          className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-[52px] min-w-[52px] items-center justify-center gap-2.5 rounded-full border border-[#C6A66B]/60 bg-[#102820]/95 px-3.5 text-[#F7F4EC] shadow-[0_14px_34px_-6px_rgba(16,40,32,0.65)] backdrop-blur-md transition-colors hover:bg-[#C6A66B] hover:text-[#102820] sm:right-6 sm:bottom-6 sm:h-auto sm:px-5 sm:py-3.5"
        >
          <MessageCircle className="h-5 w-5 shrink-0 text-[#C6A66B] transition-colors group-hover:text-[#102820] sm:h-4 sm:w-4" />
          <span className="hidden text-[11px] font-semibold tracking-[0.18em] uppercase sm:inline">
            WhatsApp Concierge
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
