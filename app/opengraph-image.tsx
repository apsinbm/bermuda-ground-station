import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const alt = 'Bermuda Ground Station Hosting';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(45deg, #f0f9ff 25%, transparent 25%), linear-gradient(-45deg, #f0f9ff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f9ff 75%), linear-gradient(-45deg, transparent 75%, #f0f9ff 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#3b82f6',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                fontSize: 60,
                fontWeight: 900,
                color: '#1f2937',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Bermuda
            </h1>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 600,
                color: '#3b82f6',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Ground Station Hosting
            </h2>
          </div>
        </div>
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 800,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 24,
              color: '#6b7280',
              margin: '0 0 20px 0',
              lineHeight: 1.4,
            }}
          >
            Strategic North Atlantic Location for Satellite Communications
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                }}
              />
              <span style={{ color: '#374151', fontSize: 18 }}>
                Hurricane Rated
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                }}
              />
              <span style={{ color: '#374151', fontSize: 18 }}>
                Regulatory Support
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                }}
              />
              <span style={{ color: '#374151', fontSize: 18 }}>
                24/7 Monitoring
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}