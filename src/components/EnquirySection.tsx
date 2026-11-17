import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  RotateCcw,
  Send,
  Sparkles,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  buildPilgrimageWhatsAppUrl,
} from '../config/concierge';
import { DESTINATIONS } from '../data/travelData';
import { AnimatedRule, EDITORIAL_EASE, MaskedLine, Reveal } from './Reveal';

interface EnquirySectionProps {
  preselectedDestination: string;
}

interface FormValues {
  name: string;
  phone: string;
  destination: string;
  travelDate: string;
  travellers: string;
  requirements: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  destination?: string;
  travelDate?: string;
  travellers?: string;
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
    travelDate: '',
    travellers: '2',
    requirements: '',
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
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      nextErrors.phone =
        'Please enter a valid 10-digit mobile number for WhatsApp & booking.';
    }
    if (!values.destination) {
      nextErrors.destination = 'Please choose a preferred pilgrimage destination.';
    }
    const count = Number(values.travellers);
    if (!values.travellers || Number.isNaN(count) || count < 1 || count > 50) {
      nextErrors.travellers = 'Please enter between 1 and 50 travellers.';
    }
    return nextErrors;
  };

  const adjustTravellers = (delta: number) => {
    const current = Number(values.travellers) || 1;
    const next = Math.min(50, Math.max(1, current + delta));
    setValues((prev) => ({ ...prev, travellers: String(next) }));
    if (errors.travellers) setErrors({ ...errors, travellers: undefined });
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
      travelDate: '',
      travellers: '2',
      requirements: '',
    });
  };

  const dynamicWhatsAppUrl = buildPilgrimageWhatsAppUrl({
    destination: values.destination || undefined,
    name: values.name || undefined,
    travelDate: values.travelDate || undefined,
    travellers: values.travellers || '2',
    notes: values.requirements || undefined,
  });

  return (
    <section
      id="contact"
      className="editorial-grain relative overflow-hidden bg-[#102820] py-16 text-[#F7F4EC] sm:py-24 lg:py-36"
    >
      <div id="enquiry" className="absolute -top-12 left-0" />

      {/* Ambient Lighting */}
      <div className="atelier-glow pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#C6A66B]/16 blur-[140px]" />
      <div className="atelier-glow pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#C6A66B]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:gap-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Left Column: Business Contact Information & Direct WhatsApp */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <Reveal className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] text-[#C6A66B] uppercase sm:tracking-[0.34em]">
              <span>06</span>
              <AnimatedRule className="h-px w-7 bg-[#C6A66B] sm:w-8" />
              <span>Contact &amp; Enquiry</span>
            </Reveal>
            <h2 className="font-editorial mt-4 text-[clamp(2.15rem,6.8vw,3.85rem)] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:mt-5">
              <MaskedLine delay={0.08}>Plan Your Sacred</MaskedLine>
              <MaskedLine delay={0.18} className="italic text-[#DCC28E]">
                Pilgrimage Journey
              </MaskedLine>
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-[#F7F4EC]/80 sm:mt-6 sm:text-base">
                Connect directly with <strong>Bhargavi Tour and Travels</strong>.
                Whether you are arranging a family darshan, Jyotirlinga yatra, or
                senior citizen pilgrimage, we provide transparent quotations and
                devoted travel arrangements.
              </p>
            </Reveal>

            {/* Official Contact Cards */}
            <div className="mt-8 space-y-4">
              {/* Phone */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#18392e]/50 p-4 transition-all duration-300 hover:border-[#C6A66B] hover:bg-[#18392e]/80"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C6A66B] text-[#102820]">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-[#C6A66B] uppercase">
                    Call Us (Direct)
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-white group-hover:text-[#DCC28E]">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-xs text-[#F7F4EC]/65">
                    Monday to Sunday &bull; 24/7 Enquiry Support
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={BUSINESS_INFO.emailMailto}
                className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#18392e]/50 p-4 transition-all duration-300 hover:border-[#C6A66B] hover:bg-[#18392e]/80"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A66B]/50 bg-white/5 text-[#C6A66B]">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold tracking-wider text-[#C6A66B] uppercase">
                    Email Enquiries
                  </p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-white group-hover:text-[#DCC28E]">
                    {BUSINESS_INFO.email}
                  </p>
                  <p className="text-xs text-[#F7F4EC]/65">
                    Written Quotations &amp; Custom Itinerary Requests
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#18392e]/50 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A66B]/50 bg-white/5 text-[#C6A66B]">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-[#C6A66B] uppercase">
                    Office Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white">
                    {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2},{' '}
                    {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.state},{' '}
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Link Card */}
          <Reveal delay={0.2} className="mt-8">
            <div className="rounded-2xl border border-[#C6A66B]/40 bg-[#18392e]/80 p-5 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase">
                <MessageCircle className="h-4 w-4" />
                <span>Instant WhatsApp Enquiry</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#F7F4EC]/80">
                Chat with our pilgrimage coordinator directly on WhatsApp.
                Prefilled with your selected destination:
              </p>
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-sheen mt-4 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#C6A66B] px-5 py-3 text-[11px] font-semibold tracking-wider text-[#102820] uppercase shadow transition hover:bg-[#F7F4EC]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Pilgrimage Enquiry Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-[#C6A66B]/35 bg-[#FCFBF7] p-6 text-[#171B19] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)] sm:p-9 lg:p-10">
              <div className="flex items-center justify-between border-b border-[#102820]/10 pb-4">
                <div>
                  <h3 className="font-editorial text-2xl font-normal text-[#102820] sm:text-3xl">
                    Request a Pilgrimage Quotation
                  </h3>
                  <p className="mt-1 text-xs text-[#171B19]/65">
                    Fill in your details for a transparent, customized itinerary.
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C6A66B]/20 text-[#9A7B3E]">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>

              {/* Success / Quotation Summary State */}
              <AnimatePresence mode="wait">
                {submittedSnapshot ? (
                  <motion.div
                    key="submitted-card"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                    className="py-6"
                  >
                    <div className="rounded-2xl border border-emerald-600/30 bg-emerald-50/70 p-6">
                      <div className="flex items-center gap-3 text-emerald-800">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
                        <div>
                          <h4 className="text-base font-semibold">
                            Enquiry Received with Reverence!
                          </h4>
                          <p className="text-xs text-emerald-700">
                            Thank you, {submittedSnapshot.name}. Our pilgrimage
                            concierge will review your requirements.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-2 border-t border-emerald-200/60 pt-4 text-xs text-emerald-900">
                        <p>
                          <strong>Destination:</strong>{' '}
                          {submittedSnapshot.destination}
                        </p>
                        <p>
                          <strong>Contact Mobile:</strong>{' '}
                          {submittedSnapshot.phone}
                        </p>
                        {submittedSnapshot.travelDate && (
                          <p>
                            <strong>Preferred Travel Date:</strong>{' '}
                            {submittedSnapshot.travelDate}
                          </p>
                        )}
                        <p>
                          <strong>Number of Travellers:</strong>{' '}
                          {submittedSnapshot.travellers}
                        </p>
                        {submittedSnapshot.requirements && (
                          <p>
                            <strong>Requirements:</strong>{' '}
                            {submittedSnapshot.requirements}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={buildPilgrimageWhatsAppUrl({
                            destination: submittedSnapshot.destination,
                            name: submittedSnapshot.name,
                            travelDate: submittedSnapshot.travelDate,
                            travellers: submittedSnapshot.travellers,
                            notes: submittedSnapshot.requirements,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] via-[#1EB859] to-[#0E7A66] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_8px_20px_rgba(37,211,102,0.4)] transition hover:brightness-110"
                        >
                          <MessageCircle className="h-4 w-4 text-white" />
                          <span>Forward on WhatsApp Now</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-emerald-800/20 bg-white px-5 py-2.5 text-xs font-semibold tracking-wider text-emerald-900 uppercase transition hover:bg-emerald-100"
                        >
                          <RotateCcw className="h-4 w-4" />
                          <span>New Enquiry</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Pilgrimage Form */
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-6 space-y-5"
                  >
                    {/* 1. Customer Name */}
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-xs font-semibold tracking-wider text-[#102820] uppercase"
                      >
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(e) => {
                          setValues({ ...values, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Ramesh Sharma"
                        className={INPUT_CLASS}
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* 2. Phone Number */}
                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-xs font-semibold tracking-wider text-[#102820] uppercase"
                      >
                        Mobile / WhatsApp Number{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(e) => {
                          setValues({ ...values, phone: e.target.value });
                          if (errors.phone)
                            setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. 9876543210"
                        className={INPUT_CLASS}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* 3. Destination Selector */}
                    <div>
                      <label
                        htmlFor="enquiry-destination"
                        className="block text-xs font-semibold tracking-wider text-[#102820] uppercase"
                      >
                        Pilgrimage Destination{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="enquiry-destination"
                          value={values.destination}
                          onChange={(e) => {
                            setValues({ ...values, destination: e.target.value });
                            if (errors.destination)
                              setErrors({ ...errors, destination: undefined });
                          }}
                          className={`${INPUT_CLASS} appearance-none pr-10`}
                        >
                          <option value="">Select Sacred Destination</option>
                          <optgroup label="South India Temples">
                            {DESTINATIONS.filter(
                              (d) => d.region === 'South India'
                            ).map((d) => (
                              <option key={d.id} value={d.name}>
                                {d.name} ({d.primaryDeity})
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="North India Yatras">
                            {DESTINATIONS.filter(
                              (d) => d.region === 'North India'
                            ).map((d) => (
                              <option key={d.id} value={d.name}>
                                {d.name} ({d.primaryDeity})
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Maharashtra & West India Temples">
                            {DESTINATIONS.filter(
                              (d) => d.region === 'West & Central India'
                            ).map((d) => (
                              <option key={d.id} value={d.name}>
                                {d.name} ({d.primaryDeity})
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Special Circuits">
                            <option value="12 Jyotirlinga Darshan">
                              12 Jyotirlinga Darshan Circuit
                            </option>
                            <option value="Himalayan Char Dham Yatra">
                              Himalayan Char Dham Yatra
                            </option>
                            <option value="Shirdi Sai Baba & Shani Shingnapur">
                              Shirdi Sai Baba &amp; Shani Shingnapur
                            </option>
                            <option value="Telangana Temple Tour">
                              Telangana Temple Tour (Yadagirigutta, Swarnagiri)
                            </option>
                            <option value="Custom Spiritual Pilgrimage">
                              Custom Spiritual Pilgrimage (Other)
                            </option>
                          </optgroup>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-5 h-4 w-4 text-[#102820]/60" />
                      </div>
                      {errors.destination && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.destination}</span>
                        </p>
                      )}
                    </div>

                    {/* 4. Travel Date & Number of Travellers */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="enquiry-date"
                          className="block text-xs font-semibold tracking-wider text-[#102820] uppercase"
                        >
                          Preferred Travel Date
                        </label>
                        <div className="relative">
                          <input
                            id="enquiry-date"
                            type="date"
                            min={todayIso}
                            value={values.travelDate}
                            onChange={(e) =>
                              setValues({ ...values, travelDate: e.target.value })
                            }
                            className={INPUT_CLASS}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-travellers"
                          className="block text-xs font-semibold tracking-wider text-[#102820] uppercase"
                        >
                          Number of Travellers
                        </label>
                        <div className="mt-2 flex items-center rounded-xl border border-[#102820]/18 bg-white p-1">
                          <button
                            type="button"
                            onClick={() => adjustTravellers(-1)}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[#102820] hover:bg-neutral-100"
                            aria-label="Decrease travellers"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            id="enquiry-travellers"
                            type="number"
                            min="1"
                            max="50"
                            value={values.travellers}
                            onChange={(e) =>
                              setValues({ ...values, travellers: e.target.value })
                            }
                            className="w-full text-center text-sm font-semibold text-[#102820] outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => adjustTravellers(1)}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[#102820] hover:bg-neutral-100"
                            aria-label="Increase travellers"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 5. Additional Requirements */}
                    <div>
                      <label
                        htmlFor="enquiry-requirements"
                        className="block text-xs font-semibold tracking-wider text-[#102820] uppercase"
                      >
                        Additional Requirements
                      </label>
                      <textarea
                        id="enquiry-requirements"
                        rows={3}
                        value={values.requirements}
                        onChange={(e) =>
                          setValues({ ...values, requirements: e.target.value })
                        }
                        placeholder="e.g. Senior citizens travelling, special darshan guidance, AC vehicle preference, pure veg food stops..."
                        className="mt-2 w-full rounded-xl border border-[#102820]/18 bg-white px-4 py-3 text-sm text-[#171B19] placeholder:text-[#171B19]/40 outline-none focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20"
                      />
                    </div>

                    {/* Submit Button & Direct WhatsApp Trigger */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="luxury-sheen flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#D97706] px-6 py-3.5 text-xs font-bold tracking-wider text-[#10241E] uppercase shadow-[0_10px_24px_rgba(245,158,11,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_14px_30px_rgba(245,158,11,0.5)]"
                      >
                        <Send className="h-4 w-4 text-[#10241E]" />
                        <span>Request Custom Quotation</span>
                      </button>
                    </div>

                    <p className="text-center text-[10px] text-[#171B19]/55">
                      Bhargavi Tour and Travels &bull; Phone: {BUSINESS_INFO.phone} &bull; Email:{' '}
                      {BUSINESS_INFO.email}
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
