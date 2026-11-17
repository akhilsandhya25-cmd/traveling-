/**
 * Business Information & Concierge Configuration
 * Bhargavi Tour and Travels — Spiritual Tourism & Pilgrimage Tours
 */
export const BUSINESS_INFO = {
  name: 'Bhargavi Tour and Travels',
  tagline: 'Spiritual Tourism & Pilgrimage Travel Services',
  phone: '+91 7893999764',
  phoneRaw: '917893999764',
  phoneTel: 'tel:+917893999764',
  email: 'bhargavitoursandtravels014@gmail.com',
  emailMailto: 'mailto:bhargavitoursandtravels014@gmail.com',
  address: {
    line1: 'House No. 402, Street No. 4',
    line2: 'Balakrishna Nagar, Ramanthapur',
    area: 'Uppal, Medchal-Malkajgiri District',
    state: 'Telangana',
    country: 'India',
    full: 'House No. 402, Street No. 4, Balakrishna Nagar, Ramanthapur, Uppal, Medchal-Malkajgiri District, Telangana, India.',
  },
  referenceInspiration: 'https://srikrishnatravelshyd.com/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Balakrishna+Nagar+Ramanthapur+Uppal+Telangana',
} as const;

export const WHATSAPP_CONFIG = {
  number: BUSINESS_INFO.phoneRaw,
  displayNumber: BUSINESS_INFO.phone,
  defaultGreeting:
    'Namaste! I would like to enquire about spiritual pilgrimage tours and temple packages with Bhargavi Tour and Travels.',
} as const;

/**
 * Builds a properly formatted https://wa.me/ deep link with URL-encoded message text.
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Builds a tailored spiritual pilgrimage WhatsApp enquiry link.
 */
export function buildPilgrimageWhatsAppUrl(params: {
  destination?: string;
  name?: string;
  travelDate?: string;
  travellers?: string;
  notes?: string;
}): string {
  const lines: string[] = [
    `Namaste Bhargavi Tour and Travels,`,
    `I am interested in planning a spiritual pilgrimage.`,
  ];

  if (params.destination) {
    lines.push(`• Destination: ${params.destination}`);
  }
  if (params.name) {
    lines.push(`• Name: ${params.name}`);
  }
  if (params.travelDate) {
    lines.push(`• Preferred Date: ${params.travelDate}`);
  }
  if (params.travellers) {
    lines.push(`• Travellers: ${params.travellers}`);
  }
  if (params.notes) {
    lines.push(`• Requirements: ${params.notes}`);
  }

  lines.push(`Please share quotation and itinerary details. Thank you!`);

  return buildWhatsAppUrl(lines.join('\n'));
}
