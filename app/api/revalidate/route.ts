import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path') || '/';

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: 'Invalid token' }, { status: 401 });
  }

  revalidatePath(path);
  return NextResponse.json({ ok: true, revalidated: true, path });
}
