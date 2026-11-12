/**
 * Configurable agency concierge details for prototype demonstration.
 * Replace the placeholder WhatsApp number below before production launch.
 */
export const WHATSAPP_CONFIG = {
  number: '910000000000',
  displayNumber: '+91 00000 00000',
  defaultGreeting:
    'Hello! (Prototype Demo Enquiry) I would like to explore curated journeys across India.',
} as const;

/**
 * Builds a properly formatted https://wa.me/ deep link with URL-encoded message text.
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
    message
  )}`;
}
