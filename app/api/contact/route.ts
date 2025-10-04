import { sendContactEmail } from '@/lib/mail';
import { validateContactPayload } from '@/lib/validations';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    // Validate the payload
    const validation = validateContactPayload({ name, email, message });
    if (!validation.valid) {
      return NextResponse.json({ ok: false, error: validation.errors.join(', ') }, { status: 400 });
    }

    // Send the email
    const result = await sendContactEmail({
      name: name!,
      email: email!,
      message: `Subject: ${subject || 'No subject'}\n\n${message!}`,
    });

    if (!result.ok) {
      console.error('Failed to send email:', result.error);
      return NextResponse.json(
        { ok: false, error: 'Failed to send message. Please try again.' },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: 'Message sent successfully!',
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { ok: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    );
  }
}
