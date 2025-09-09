/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg,#0f172a,#1e293b)',
          color: 'white',
          padding: 64,
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 800 }}>Software Engineer Portfolio</div>
          <div style={{ fontSize: 28, opacity: 0.85 }}>
            Projects • Education • Experience • Contact
          </div>
          <div style={{ fontSize: 20, opacity: 0.7 }}>your-domain.example</div>
        </div>
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: 24,
            background: 'rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 64,
          }}
        >
          🛠️
        </div>
      </div>
    ),
    { ...size },
  );
}
