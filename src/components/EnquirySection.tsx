import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle2,
  MessageCircle,
  RotateCcw,
  Send,
  ShieldAlert,
} from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { AnimatedRule, MaskedLine, Reveal } from './Reveal';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Clearly configurable placeholder WhatsApp number (not a real agency number)
const PLACEHOLDER_WHATSAPP_NUMBER = '910000000000';
const PLACEHOLDER_WHATSAPP_DISPLAY = '+91 00000 00000';

interface EnquirySectionProps {
  preselectedDestination: string;
}

interface FormValues {
  name: string;
  phone: string;
  destination: string;
  travellers: string;
  month: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  destination?: string;
  travellers?: string;
  month?: string;
}

export function EnquirySection({
  preselectedDestination,
}: EnquirySectionProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    destination: preselectedDestination || '',
    travellers: '2',
    month: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSnapshot, setSubmittedSnapshot] = useState<FormValues | null>(
    null
  );

  useEffect(() => {
    if (preselectedDestination) {
      setValues((prev) => ({ ...prev, destination: preselectedDestination }));
      setSubmittedSnapshot(null);
    }
  }, [preselectedDestination]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter a valid name (at least 2 characters).';
    }
    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      nextErrors.phone =
        'Please enter a valid phone number (7 to 15 digits).';
    }
    if (!values.destination) {
      nextErrors.destination = 'Please choose a preferred destination.';
    }
    const count = Number(values.travellers);
    if (!values.travellers || Number.isNaN(count) || count < 1 || count > 30) {
      nextErrors.travellers = 'Please enter between 1 and 30 travellers.';
    }
    if (!values.month) {
      nextErrors.month = 'Please select your preferred travel month.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedSnapshot({ ...values });
    }
  };

  const handleReset = () => {
    setSubmittedSnapshot(null);
    setErrors({});
    setValues({
      name: '',
      phone: '',
      destination: '',
      travellers: '2',
      month: '',
    });
  };

  const whatsappPreviewText = encodeURIComponent(
    `Hello! (Prototype Demo Enquiry) I am interested in exploring ${
      values.destination || 'India'
    } for ${values.travellers || '2'} travellers.`
  );

  return (
    <section
      id="enquiry"
      className="editorial-grain relative overflow-hidden bg-[#102820] py-20 text-[#F7F4EC] sm:py-28 lg:py-36"
    >
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#C6A66B]/12 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:gap-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Left Editorial Column */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.34em] text-[#C6A66B] uppercase">
              <span>06</span>
              <AnimatedRule className="h-px w-8 bg-[#C6A66B]" />
              <span>Trip Enquiry Prototype</span>
            </Reveal>
            <h2 className="font-editorial mt-5 text-[2.5rem] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
              <MaskedLine delay={0.08}>Where will your next</MaskedLine>
              <MaskedLine delay={0.18} className="italic text-[#DCC28E]">
                story begin?
              </MaskedLine>
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-6 text-base font-light leading-relaxed text-[#F7F4EC]/78">
                Share the contours of your ideal Indian escape. This interactive
                form demonstrates how client enquiries can be captured cleanly
                and seamlessly routed to your travel concierge.
              </p>
            </Reveal>
          </div>

          {/* Configurable WhatsApp Concierge Placeholder */}
          <Reveal delay={0.2} className="mt-10">
            <div className="rounded-2xl border border-[#C6A66B]/30 bg-[#18392e]/50 p-7 backdrop-blur-md">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <span className="text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase">
                  Direct Concierge Integration
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#F7F4EC]/55 uppercase">
                  Placeholder
                </span>
              </div>

              <p className="mt-4 text-sm font-light leading-relaxed text-[#F7F4EC]/80">
                Connect directly to your agency&apos;s official WhatsApp
                Business desk. Replace the placeholder below before going live:
              </p>

              <p className="mt-2 font-mono text-xs text-[#DCC28E]">
                Configurable Number: {PLACEHOLDER_WHATSAPP_DISPLAY}
              </p>

              <a
                href={`https://wa.me/${PLACEHOLDER_WHATSAPP_NUMBER}?text=${whatsappPreviewText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#C6A66B] bg-[#C6A66B] px-6 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#102820] uppercase transition duration-300 hover:bg-[#F7F4EC]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Concierge (Placeholder)</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Bespoke Concierge Form Card */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[#C6A66B]/25 bg-[#FCFBF7] p-6 text-[#171B19] shadow-[0_35px_90px_-28px_rgba(0,0,0,0.65)] sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {submittedSnapshot ? (
                  <motion.div
                    key="demo-success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="py-2"
                  >
                    <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] text-[#102820] uppercase">
                      <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" />
                      <span>Demo Form Validation Passed</span>
                    </div>

                    <h3 className="font-editorial mt-4 text-4xl font-normal text-[#102820]">
                      Prototype Preview Ready, {submittedSnapshot.name}.
                    </h3>

                    <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#C6A66B]/55 bg-[#C6A66B]/10 p-4 text-xs leading-relaxed text-[#102820]">
                      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#102820]" />
                      <span>
                        <strong>Prototype Demonstration Notice:</strong> This is
                        a visual demo confirmation.{' '}
                        <strong>
                          No enquiry was actually sent, emailed, or stored
                        </strong>{' '}
                        by this prototype.
                      </span>
                    </div>

                    <dl className="mt-7 grid grid-cols-1 gap-5 border-t border-b border-[#102820]/12 py-6 sm:grid-cols-2">
                      <div>
                        <dt className="text-[10px] font-semibold tracking-[0.22em] text-[#171B19]/50 uppercase">
                          Traveller Name
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-[#102820]">
                          {submittedSnapshot.name}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-semibold tracking-[0.22em] text-[#171B19]/50 uppercase">
                          Phone Number
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-[#102820]">
                          {submittedSnapshot.phone}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-semibold tracking-[0.22em] text-[#171B19]/50 uppercase">
                          Preferred Destination
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-[#102820]">
                          {submittedSnapshot.destination}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-semibold tracking-[0.22em] text-[#171B19]/50 uppercase">
                          Travellers &amp; Month
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-[#102820]">
                          {submittedSnapshot.travellers} Guest(s) &bull;{' '}
                          {submittedSnapshot.month}
                        </dd>
                      </div>
                    </dl>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#102820] px-7 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#F7F4EC] uppercase transition hover:bg-[#C6A66B] hover:text-[#102820]"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Test Another Enquiry</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="enquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-8"
                  >
                    <div className="border-b border-[#102820]/12 pb-5">
                      <h3 className="font-editorial text-3xl text-[#102820] sm:text-4xl">
                        Design Your Journey
                      </h3>
                      <p className="mt-1 text-xs text-[#171B19]/60">
                        Interactive demonstration form &bull; Validates inputs
                        locally without sending data
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="enquiry-name"
                          className="block text-[10px] font-semibold tracking-[0.24em] text-[#102820] uppercase"
                        >
                          Full Name
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          placeholder="e.g. Aarav Mehta"
                          value={values.name}
                          onChange={(e) => {
                            setValues({ ...values, name: e.target.value });
                            if (errors.name)
                              setErrors({ ...errors, name: undefined });
                          }}
                          className="mt-1.5 min-h-[48px] w-full border-0 border-b border-[#102820]/20 bg-transparent px-0 py-3 text-base text-[#171B19] placeholder:text-[#171B19]/35 transition outline-none focus:border-[#C6A66B] sm:text-sm"
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-700">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="enquiry-phone"
                          className="block text-[10px] font-semibold tracking-[0.24em] text-[#102820] uppercase"
                        >
                          Phone Number
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          placeholder="+91 98XXX XXXXX"
                          value={values.phone}
                          onChange={(e) => {
                            setValues({ ...values, phone: e.target.value });
                            if (errors.phone)
                              setErrors({ ...errors, phone: undefined });
                          }}
                          className="mt-1.5 min-h-[48px] w-full border-0 border-b border-[#102820]/20 bg-transparent px-0 py-3 text-base text-[#171B19] placeholder:text-[#171B19]/35 transition outline-none focus:border-[#C6A66B] sm:text-sm"
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-700">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Destination */}
                    <div>
                      <label
                        htmlFor="enquiry-destination"
                        className="block text-[10px] font-semibold tracking-[0.24em] text-[#102820] uppercase"
                      >
                        Preferred Destination
                      </label>
                      <select
                        id="enquiry-destination"
                        value={values.destination}
                        onChange={(e) => {
                          setValues({ ...values, destination: e.target.value });
                          if (errors.destination)
                            setErrors({ ...errors, destination: undefined });
                        }}
                        className="mt-1.5 min-h-[48px] w-full border-0 border-b border-[#102820]/20 bg-transparent px-0 py-3 text-base text-[#171B19] transition outline-none focus:border-[#C6A66B] sm:text-sm"
                      >
                        <option value="">Select an Indian destination...</option>
                        {DESTINATIONS.map((dest) => (
                          <option key={dest.id} value={dest.name}>
                            {dest.name} — {dest.tagline}
                          </option>
                        ))}
                        <option value="Custom Multi-Region Journey">
                          Custom Multi-Region Journey across India
                        </option>
                      </select>
                      {errors.destination && (
                        <p className="mt-1.5 text-xs text-red-700">
                          {errors.destination}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                      {/* Number of Travellers */}
                      <div>
                        <label
                          htmlFor="enquiry-travellers"
                          className="block text-[10px] font-semibold tracking-[0.24em] text-[#102820] uppercase"
                        >
                          Number of Travellers
                        </label>
                        <input
                          id="enquiry-travellers"
                          type="number"
                          min={1}
                          max={30}
                          value={values.travellers}
                          onChange={(e) => {
                            setValues({ ...values, travellers: e.target.value });
                            if (errors.travellers)
                              setErrors({ ...errors, travellers: undefined });
                          }}
                          className="mt-1.5 min-h-[48px] w-full border-0 border-b border-[#102820]/20 bg-transparent px-0 py-3 text-base text-[#171B19] transition outline-none focus:border-[#C6A66B] sm:text-sm"
                        />
                        {errors.travellers && (
                          <p className="mt-1.5 text-xs text-red-700">
                            {errors.travellers}
                          </p>
                        )}
                      </div>

                      {/* Travel Month */}
                      <div>
                        <label
                          htmlFor="enquiry-month"
                          className="block text-[10px] font-semibold tracking-[0.24em] text-[#102820] uppercase"
                        >
                          Preferred Travel Month
                        </label>
                        <select
                          id="enquiry-month"
                          value={values.month}
                          onChange={(e) => {
                            setValues({ ...values, month: e.target.value });
                            if (errors.month)
                              setErrors({ ...errors, month: undefined });
                          }}
                          className="mt-1.5 min-h-[48px] w-full border-0 border-b border-[#102820]/20 bg-transparent px-0 py-3 text-base text-[#171B19] transition outline-none focus:border-[#C6A66B] sm:text-sm"
                        >
                          <option value="">Select month...</option>
                          {MONTHS.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        {errors.month && (
                          <p className="mt-1.5 text-xs text-red-700">
                            {errors.month}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#102820] px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-[#F7F4EC] uppercase shadow-lg transition-all duration-300 hover:bg-[#C6A66B] hover:text-[#102820]"
                      >
                        <Send className="h-4 w-4" />
                        <span>Preview Trip Enquiry (Demo)</span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
