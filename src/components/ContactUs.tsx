import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/navigation';
import { submitContactInquiry, ContactSubmissionResult } from '../services/contactService';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export const ContactUs: React.FC = () => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<keyof FormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    name: string;
    result: ContactSubmissionResult;
  } | null>(null);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    const emailTrimmed = data.email.trim();
    if (!emailTrimmed) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    const phoneDigits = data.phone.replace(/\D/g, '');
    if (!data.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      nextErrors.phone = 'Please enter a valid phone number (7–15 digits).';
    }

    if (!data.message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (data.message.trim().length < 10) {
      nextErrors.message = 'Please enter at least 10 characters in your message.';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field as keyof FormErrors];
        return updated;
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
    if (submissionFeedback) {
      setSubmissionFeedback(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitError(null);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactInquiry(values);
      setSubmissionFeedback({
        name: values.name.trim(),
        result,
      });
      setValues(INITIAL_VALUES);
    } catch {
      setSubmitError(
        `Unable to reach the form endpoint right now. Please write directly to ${CONTACT_DETAILS.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (!isSubmitting && e.currentTarget.form) {
        e.currentTarget.form.requestSubmit();
      }
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-gradient-to-b from-[#FAFBFD] to-white py-9 sm:py-11 overflow-hidden"
    >
      {/* Architectural high-rise wireframe motif in bottom-right matching reference */}
      <svg
        aria-hidden="true"
        viewBox="0 0 260 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block absolute right-0 bottom-0 w-[220px] xl:w-[250px] h-auto text-[#5E93D6]/35 pointer-events-none select-none"
      >
        <path
          d="M148 220V74L212 34L258 66V220"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M212 34V220" stroke="currentColor" strokeWidth="1.1" />
        <path
          d="M148 92L212 52L258 84M148 110L212 70L258 102M148 128L212 88L258 120M148 146L212 106L258 138M148 164L212 124L258 156M148 182L212 142L258 174M148 200L212 160L258 192"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M168 62V220M188 49V220M234 49V220"
          stroke="currentColor"
          strokeWidth="0.85"
        />
        <path
          d="M84 220V132L126 108L164 134V220"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path d="M126 108V220" stroke="currentColor" strokeWidth="1" />
        <path
          d="M84 150L126 126L164 152M84 168L126 144L164 170M84 186L126 162L164 188M84 204L126 180L164 206"
          stroke="currentColor"
          strokeWidth="0.85"
        />
        <path d="M104 120V220M145 121V220" stroke="currentColor" strokeWidth="0.8" />
        <path
          d="M28 220V172L68 154L92 168V220"
          stroke="currentColor"
          strokeWidth="1.05"
        />
        <path
          d="M68 154V220M28 190L68 172L92 186M28 208L68 190L92 204M48 163V220"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>

      <div className="onycon-container relative z-10">
        {/* Centered Header matching reference spacing */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center gap-4 mb-1.5">
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#087CF0]" aria-hidden="true" />
            <h2
              id="contact-heading"
              className="font-heading font-extrabold text-[21px] sm:text-[24px] tracking-[0.03em] text-[#071E4B] uppercase"
            >
              CONTACT US
            </h2>
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#087CF0]" aria-hidden="true" />
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#071E4B]/85 leading-snug">
            We&apos;d love to hear from you. Get in touch for project inquiries, collaborations or general information.
          </p>
        </div>

        {/* 3-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-0 items-start">
          {/* Column 1 — Registered Office */}
          <div className="lg:col-span-3 lg:border-r lg:border-[#B8CEE6] lg:pr-6 lg:py-1">
            <div className="flex items-start gap-3">
              <MapPin
                className="w-5 h-5 text-[#062B60] shrink-0 mt-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-bold text-[14.5px] text-[#071E4B] mb-1">
                  {CONTACT_DETAILS.officeName}
                </h3>
                <address className="not-italic text-[12.5px] leading-[1.55] text-[#071E4B]/85">
                  {CONTACT_DETAILS.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>

          {/* Column 2 — Contact Information */}
          <div className="lg:col-span-3 lg:border-r lg:border-[#B8CEE6] lg:px-7 lg:py-2 space-y-5">
            <div className="flex items-center gap-3">
              <Phone
                className="w-5 h-5 text-[#062B60] shrink-0"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <a
                href={CONTACT_DETAILS.phoneHref}
                className="text-[13.5px] font-medium text-[#071E4B] hover:text-[#075BC7] transition-colors whitespace-nowrap"
              >
                {CONTACT_DETAILS.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail
                className="w-5 h-5 text-[#062B60] shrink-0"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <a
                href={CONTACT_DETAILS.emailHref}
                className="text-[13.5px] font-medium text-[#071E4B] hover:text-[#075BC7] transition-colors break-all"
              >
                {CONTACT_DETAILS.email}
              </a>
            </div>
          </div>

          {/* Column 3 — Contact Form preserving approved UI without visible Submit CTA button */}
          <div className="lg:col-span-5 lg:pl-7">
            <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting} className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5 gap-y-2.5">
                {/* Name */}
                <div>
                  <div className="relative">
                    <label
                      htmlFor="contact-name"
                      className={`absolute left-3 top-1/2 -translate-y-1/2 text-[12.5px] text-[#071E4B]/85 pointer-events-none transition-opacity duration-100 ${
                        values.name || focusedField === 'name' ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      Name <span className="text-red-600 font-semibold">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : 'contact-keyboard-hint'}
                      value={values.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full h-[35px] rounded-md border bg-white px-3 text-[13px] text-[#071E4B] focus:border-[#087CF0] focus:ring-2 focus:ring-[#087CF0]/20 focus:outline-none transition-colors disabled:opacity-60 ${
                        errors.name ? 'border-red-500' : 'border-[#C8D7E8]'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="mt-1 flex items-center gap-1 text-[11.5px] text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <label
                      htmlFor="contact-email"
                      className={`absolute left-3 top-1/2 -translate-y-1/2 text-[12.5px] text-[#071E4B]/85 pointer-events-none transition-opacity duration-100 ${
                        values.email || focusedField === 'email' ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      Email <span className="text-red-600 font-semibold">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      disabled={isSubmitting}
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : 'contact-keyboard-hint'}
                      value={values.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full h-[35px] rounded-md border bg-white px-3 text-[13px] text-[#071E4B] focus:border-[#087CF0] focus:ring-2 focus:ring-[#087CF0]/20 focus:outline-none transition-colors disabled:opacity-60 ${
                        errors.email ? 'border-red-500' : 'border-[#C8D7E8]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      role="alert"
                      className="mt-1 flex items-center gap-1 text-[11.5px] text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <div className="relative">
                    <label
                      htmlFor="contact-phone"
                      className={`absolute left-3 top-1/2 -translate-y-1/2 text-[12.5px] text-[#071E4B]/85 pointer-events-none transition-opacity duration-100 ${
                        values.phone || focusedField === 'phone' ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      Phone <span className="text-red-600 font-semibold">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      disabled={isSubmitting}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'contact-phone-error' : 'contact-keyboard-hint'}
                      value={values.phone}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full h-[35px] rounded-md border bg-white px-3 text-[13px] text-[#071E4B] focus:border-[#087CF0] focus:ring-2 focus:ring-[#087CF0]/20 focus:outline-none transition-colors disabled:opacity-60 ${
                        errors.phone ? 'border-red-500' : 'border-[#C8D7E8]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p
                      id="contact-phone-error"
                      role="alert"
                      className="mt-1 flex items-center gap-1 text-[11.5px] text-red-600"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="relative">
                  <label
                    htmlFor="contact-subject"
                    className={`absolute left-3 top-1/2 -translate-y-1/2 text-[12.5px] text-[#071E4B]/85 pointer-events-none transition-opacity duration-100 ${
                      values.subject || focusedField === 'subject' ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    disabled={isSubmitting}
                    value={values.subject}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full h-[35px] rounded-md border border-[#C8D7E8] bg-white px-3 text-[13px] text-[#071E4B] focus:border-[#087CF0] focus:ring-2 focus:ring-[#087CF0]/20 focus:outline-none transition-colors disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="relative">
                  <label
                    htmlFor="contact-message"
                    className={`absolute left-3 top-2.5 text-[12.5px] text-[#071E4B]/85 pointer-events-none transition-opacity duration-100 ${
                      values.message || focusedField === 'message' ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Message <span className="text-red-600 font-semibold">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : 'contact-keyboard-hint'}
                    value={values.message}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onKeyDown={handleTextareaKeyDown}
                    className={`w-full h-[80px] rounded-md border bg-white px-3 py-2 text-[13px] text-[#071E4B] focus:border-[#087CF0] focus:ring-2 focus:ring-[#087CF0]/20 focus:outline-none transition-colors resize-none disabled:opacity-60 ${
                      errors.message ? 'border-red-500' : 'border-[#C8D7E8]'
                    }`}
                  />
                </div>
                {errors.message && (
                  <p
                    id="contact-message-error"
                    role="alert"
                    className="mt-1 flex items-center gap-1 text-[11.5px] text-red-600"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Accessible keyboard/screen-reader submit trigger without visible CTA button */}
              <button type="submit" disabled={isSubmitting} className="sr-only">
                {isSubmitting ? 'Submitting inquiry' : 'Submit contact inquiry'}
              </button>

              <p id="contact-keyboard-hint" className="sr-only">
                Press Enter in any text field or Ctrl plus Enter in the message box to submit. If VITE_CONTACT_FORM_ENDPOINT is unset, the form runs in frontend-only validation mode.
              </p>

              {submitError && (
                <div
                  role="alert"
                  className="rounded-md bg-red-50 border border-red-200 p-3 flex items-start gap-2.5 text-[12.5px] text-red-800"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{submitError}</p>
                </div>
              )}

              {submissionFeedback && (
                <div
                  role="status"
                  className="rounded-md bg-[#EAF4FF] border border-[#087CF0]/40 p-3 flex items-start gap-2.5 text-[12.5px] text-[#071E4B]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#075BC7] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-heading font-semibold text-[#062B60]">
                      {submissionFeedback.result.delivered
                        ? `Inquiry Sent (${submissionFeedback.name})`
                        : `Inquiry Validated — Frontend Demo Mode (${submissionFeedback.name})`}
                    </p>
                    <p className="text-[#30415D] mt-0.5">
                      {submissionFeedback.result.message}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
