export interface ContactInquiryPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResult {
  mode: 'live' | 'demo';
  delivered: boolean;
  message: string;
}

/**
 * Clean integration point for a real form submission provider (e.g., Formspree,
 * Web3Forms, Basin, or a custom serverless endpoint).
 *
 * Set VITE_CONTACT_FORM_ENDPOINT in Vercel Environment Variables (or .env.local)
 * to enable live HTTP POST delivery. When unset, the form operates safely in
 * frontend-only validation mode without falsely claiming email delivery.
 */
export async function submitContactInquiry(
  payload: ContactInquiryPayload
): Promise<ContactSubmissionResult> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();

  if (!endpoint) {
    return {
      mode: 'demo',
      delivered: false,
      message:
        'Frontend validation succeeded (demo mode). Live email delivery is not configured yet — set VITE_CONTACT_FORM_ENDPOINT or write directly to ho@onyconinfra.com.',
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      subject: payload.subject.trim() || 'Website Inquiry',
      message: payload.message.trim(),
      source: 'ONYCON Infrastructure Website',
    }),
  });

  if (!response.ok) {
    throw new Error(`Submission request failed with status ${response.status}`);
  }

  return {
    mode: 'live',
    delivered: true,
    message: 'Thank you. Your inquiry has been transmitted successfully.',
  };
}
