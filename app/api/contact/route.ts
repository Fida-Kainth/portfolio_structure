import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: name, email, message' },
        { status: 400 },
      );
    }

    // TODO: integrate an email provider (e.g., Resend, SendGrid).
    // Example (pseudo):
    // await resend.emails.send({ from, to, subject, text });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 });
  }
}
