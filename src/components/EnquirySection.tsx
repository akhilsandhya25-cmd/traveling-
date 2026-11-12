import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  Send,
  ShieldAlert,
} from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '../config/concierge';
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

interface EnquirySectionProps {
  preselectedDestination: string;
}

interface FormValues {
  name: string;
  phone: string;
  destination: string;
  travellers: string;
  travelDate: string;
  month: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  destination?: string;
  travellers?: string;
  month?: string;
}

const INPUT_CLASS =
  'mt-2 min-h-[50px] w-full rounded-xl border border-[#102820]/18 bg-white px-4 py-3 text-base text-[#171B19] placeholder:text-[#171B19]/40 shadow-[0_1px_2px_rgba(16,40,32,0.04)] transition outline-none focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20';

export function EnquirySection({
  preselectedDestination,
}: EnquirySectionProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    destination: preselectedDestination || '',
    travellers: '2',
    travelDate: '',
    month: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSnapshot, setSubmittedSnapshot] = useState<FormValues | null>(
    null
  );

  const todayIso = new Date().toISOString().split('T')[0];

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

  const adjustTravellers = (delta: number) => {
    const current = Number(values.travellers) || 1;
    const next = Math.min(30, Math.max(1, current + delta));
    setValues((prev) => ({ ...prev, travellers: String(next) }));
    if (errors.travellers) setErrors({ ...errors, travellers: undefined });
  };

  const handleDateChange = (dateStr: string) => {
    let derivedMonth = values.month;
    if (dateStr) {
      const parsed = new Date(`${dateStr}T00:00:00`);
      if (!Number.isNaN(parsed.getTime())) {
        derivedMonth = MONTHS[parsed.getMonth()];
      }
    }
    setValues((prev) => ({
      ...prev,
      travelDate: dateStr,
      month: derivedMonth,
    }));
    if (errors.month && derivedMonth) {
      setErrors((prev) => ({ ...prev, month: undefined }));
    }
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
      travelDate: '',
      month: '',
    });
  };

  const whatsappMessage = `Hello! (Prototype Demo Enquiry) I am interested in exploring ${
    values.destination || 'India'
  } for ${values.travellers || '2'} travellers${
    values.month ? ` around ${values.month}` : ''
  }.`;

  return (
    <section
      id="enquiry"
      className="editorial-grain relative overflow-hidden bg-[#102820] py-16 text-[#F7F4EC] sm:py-24 lg:py-36"
    >
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#C6A66B]/12 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:gap-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Left Editorial Column */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>06</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Trip Enquiry Prototype</span>
            </Reveal>
            <h2 className="font-editorial mt-4 text-[clamp(2.15rem,6.8vw,3.85rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:mt-5">
              <MaskedLine delay={0.08}>Where will your next</MaskedLine>
              <MaskedLine delay={0.18} className="italic text-[#DCC28E]">
                story begin?
              </MaskedLine>
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-[#F7F4EC]/80 sm:mt-6 sm:text-base">
                Share the contours of your ideal Indian escape. This interactive
                form demonstrates how client enquiries can be captured cleanly
                and seamlessly routed to your travel concierge.
              </p>
            </Reveal>
          </div>

          {/* Configurable WhatsApp Concierge Placeholder */}
          <Reveal delay={0.2} className="mt-8 sm:mt-10">
            <div className="rounded-2xl border border-[#C6A66B]/30 bg-[#18392e]/55 p-5 backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#C6A66B] uppercase sm:tracking-[0.26em]">
                  Direct Concierge Integration
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#F7F4EC]/55 uppercase">
                  Placeholder
                </span>
              </div>

              <p className="mt-4 text-sm font-light leading-relaxed text-[#F7F4EC]/82">
                Connect directly to your agency&apos;s official WhatsApp
                Business desk. Replace the placeholder below before going live:
              </p>

              <p className="mt-2 font-mono text-xs text-[#DCC28E]">
                Configurable Number: {WHATSAPP_CONFIG.displayNumber}
              </p>

              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border border-[#C6A66B] bg-[#C6A66B] px-6 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase transition duration-300 active:scale-[0.98] hover:bg-[#F7F4EC] sm:mt-6 sm:tracking-[0.2em]"
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
            <div className="rounded-2xl border border-[#C6A66B]/25 bg-[#FCFBF7] p-5 text-[#171B19] shadow-[0_35px_90px_-28px_rgba(0,0,0,0.65)] sm:p-9 lg:p-12">
              <AnimatePresence mode="wait">
                {submittedSnapshot ? (
                  <motion.div
                    key="demo-success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="py-1"
                  >
                    <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-[#102820] uppercase sm:tracking-[0.24em]">
                      <CheckCircle2 className="h-4 w-4 text-[#C6A66B]" />
                      <span>Demo Form Validation Passed</span>
                    </div>

                    <h3 className="font-editorial mt-3 text-[clamp(1.85rem,5vw,2.5rem)] font-normal leading-tight text-[#102820] sm:mt-4">
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

                    <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-b border-[#102820]/12 py-5 sm:mt-7 sm:grid-cols-2 sm:gap-5 sm:py-6">
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
                          Travellers &amp; Timing
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-[#102820]">
                          {submittedSnapshot.travellers} Guest(s) &bull;{' '}
                          {submittedSnapshot.month}
                          {submittedSnapshot.travelDate
                            ? ` (${submittedSnapshot.travelDate})`
                            : ''}
                        </dd>
                      </div>
                    </dl>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-7 inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#102820] px-7 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#F7F4EC] uppercase transition hover:bg-[#C6A66B] hover:text-[#102820] sm:mt-8 sm:w-auto"
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
                    className="space-y-6 sm:space-y-7"
                  >
                    <div className="border-b border-[#102820]/12 pb-4 sm:pb-5">
                      <h3 className="font-editorial text-[clamp(1.75rem,5vw,2.25rem)] text-[#102820]">
                        Design Your Journey
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#171B19]/65">
                        Interactive demonstration form &bull; Validates inputs
                        locally without sending data
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="enquiry-name"
                          className="block text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase"
                        >
                          Full Name
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Aarav Mehta"
                          aria-invalid={Boolean(errors.name)}
                          value={values.name}
                          onChange={(e) => {
                            setValues({ ...values, name: e.target.value });
                            if (errors.name)
                              setErrors({ ...errors, name: undefined });
                          }}
                          className={`${INPUT_CLASS} ${
                            errors.name ? 'border-red-600 focus:border-red-600' : ''
                          }`}
                        />
                        {errors.name && (
                          <p
                            role="alert"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="enquiry-phone"
                          className="block text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase"
                        >
                          Phone Number
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+91 98XXX XXXXX"
                          aria-invalid={Boolean(errors.phone)}
                          value={values.phone}
                          onChange={(e) => {
                            setValues({ ...values, phone: e.target.value });
                            if (errors.phone)
                              setErrors({ ...errors, phone: undefined });
                          }}
                          className={`${INPUT_CLASS} ${
                            errors.phone
                              ? 'border-red-600 focus:border-red-600'
                              : ''
                          }`}
                        />
                        {errors.phone && (
                          <p
                            role="alert"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Destination */}
                    <div>
                      <label
                        htmlFor="enquiry-destination"
                        className="block text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase"
                      >
                        Preferred Destination
                      </label>
                      <div className="relative mt-2">
                        <select
                          id="enquiry-destination"
                          aria-invalid={Boolean(errors.destination)}
                          value={values.destination}
                          onChange={(e) => {
                            setValues({
                              ...values,
                              destination: e.target.value,
                            });
                            if (errors.destination)
                              setErrors({ ...errors, destination: undefined });
                          }}
                          className={`min-h-[50px] w-full appearance-none rounded-xl border border-[#102820]/18 bg-white py-3 pr-11 pl-4 text-base text-[#171B19] shadow-[0_1px_2px_rgba(16,40,32,0.04)] transition outline-none focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20 ${
                            errors.destination
                              ? 'border-red-600 focus:border-red-600'
                              : ''
                          }`}
                        >
                          <option value="">
                            Select an Indian destination...
                          </option>
                          {DESTINATIONS.map((dest) => (
                            <option key={dest.id} value={dest.name}>
                              {dest.name} — {dest.tagline}
                            </option>
                          ))}
                          <option value="Custom Multi-Region Journey">
                            Custom Multi-Region Journey across India
                          </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#102820]/60" />
                      </div>
                      {errors.destination && (
                        <p
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.destination}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                      {/* One-Handed Number of Travellers Stepper */}
                      <div>
                        <label
                          htmlFor="enquiry-travellers"
                          className="block text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase"
                        >
                          Number of Travellers
                        </label>
                        <div className="mt-2 flex min-h-[50px] items-center overflow-hidden rounded-xl border border-[#102820]/18 bg-white shadow-[0_1px_2px_rgba(16,40,32,0.04)] focus-within:border-[#C6A66B] focus-within:ring-2 focus-within:ring-[#C6A66B]/20">
                          <button
                            type="button"
                            onClick={() => adjustTravellers(-1)}
                            aria-label="Decrease number of travellers"
                            className="flex h-[50px] w-12 shrink-0 cursor-pointer items-center justify-center border-r border-[#102820]/10 text-[#102820] transition active:bg-[#102820]/10 hover:bg-[#102820]/5"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            id="enquiry-travellers"
                            type="number"
                            inputMode="numeric"
                            min={1}
                            max={30}
                            aria-invalid={Boolean(errors.travellers)}
                            value={values.travellers}
                            onChange={(e) => {
                              setValues({
                                ...values,
                                travellers: e.target.value,
                              });
                              if (errors.travellers)
                                setErrors({ ...errors, travellers: undefined });
                            }}
                            className="h-[50px] w-full bg-transparent text-center text-base font-medium text-[#171B19] outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => adjustTravellers(1)}
                            aria-label="Increase number of travellers"
                            className="flex h-[50px] w-12 shrink-0 cursor-pointer items-center justify-center border-l border-[#102820]/10 text-[#102820] transition active:bg-[#102820]/10 hover:bg-[#102820]/5"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        {errors.travellers && (
                          <p
                            role="alert"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.travellers}</span>
                          </p>
                        )}
                      </div>

                      {/* Native Mobile-Friendly Start Date (Auto-syncs Travel Month) */}
                      <div>
                        <label
                          htmlFor="enquiry-date"
                          className="block text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase"
                        >
                          Preferred Start Date{' '}
                          <span className="font-normal text-[#171B19]/45 lowercase">
                            (optional)
                          </span>
                        </label>
                        <div className="relative mt-2">
                          <input
                            id="enquiry-date"
                            type="date"
                            min={todayIso}
                            value={values.travelDate}
                            onChange={(e) => handleDateChange(e.target.value)}
                            className="min-h-[50px] w-full rounded-xl border border-[#102820]/18 bg-white px-4 py-3 text-base text-[#171B19] shadow-[0_1px_2px_rgba(16,40,32,0.04)] transition outline-none focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20"
                          />
                          <Calendar className="pointer-events-none absolute top-1/2 right-3.5 hidden h-4 w-4 -translate-y-1/2 text-[#102820]/45 sm:block" />
                        </div>
                      </div>
                    </div>

                    {/* Preferred Travel Month Dropdown */}
                    <div>
                      <label
                        htmlFor="enquiry-month"
                        className="block text-[11px] font-semibold tracking-[0.18em] text-[#102820] uppercase"
                      >
                        Preferred Travel Month
                      </label>
                      <div className="relative mt-2">
                        <select
                          id="enquiry-month"
                          aria-invalid={Boolean(errors.month)}
                          value={values.month}
                          onChange={(e) => {
                            setValues({ ...values, month: e.target.value });
                            if (errors.month)
                              setErrors({ ...errors, month: undefined });
                          }}
                          className={`min-h-[50px] w-full appearance-none rounded-xl border border-[#102820]/18 bg-white py-3 pr-11 pl-4 text-base text-[#171B19] shadow-[0_1px_2px_rgba(16,40,32,0.04)] transition outline-none focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20 ${
                            errors.month
                              ? 'border-red-600 focus:border-red-600'
                              : ''
                          }`}
                        >
                          <option value="">Select month...</option>
                          {MONTHS.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#102820]/60" />
                      </div>
                      {errors.month && (
                        <p
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.month}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#102820] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#F7F4EC] uppercase shadow-lg transition-all duration-300 active:scale-[0.99] hover:bg-[#C6A66B] hover:text-[#102820]"
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
