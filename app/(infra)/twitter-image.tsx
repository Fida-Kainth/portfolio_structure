import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 800, height: 418 }; // Twitter/X summary_large_image
export const contentType = 'image/png';

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg,#0f172a,#1e293b)',
          color: 'white',
          padding: 48,
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 44, fontWeight: 800 }}>Software Engineer Portfolio</div>
          <div style={{ fontSize: 22, opacity: 0.85 }}>By Your Name</div>
        </div>
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 20,
            background: 'rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 56,
          }}
        >
          🚀
        </div>
      </div>
    ),
    { ...size },
  );
}
