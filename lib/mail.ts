/**
 * Simple mail helper using Resend's HTTP API (no SDK dependency).
 * Set RESEND_API_KEY in your environment for production use.
 *
 * NOTE: This should be called from a Server Action or Route Handler.
 */

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'you@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

  // If no API key, just log and pretend OK (useful in dev)
  if (!apiKey) {
    console.log('[mail] (dev) sendContactEmail', { to, from, payload });
    return { ok: true, dev: true };
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New portfolio message from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    return { ok: false, error: err || res.statusText };
  }

  return { ok: true };
}
