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
              width: 120,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 32,
              position: 'relative',
            }}
          >
            {/* Ocean waves triangle base */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              style={{ position: 'absolute' }}
            >
              {/* Triangle with ocean waves */}
              <path
                d="M60 25 L25 85 L95 85 Z"
                fill="url(#oceanGrad)"
                stroke="#0ea5e9"
                strokeWidth="2"
              />
              
              {/* Satellite */}
              <g transform="translate(60, 35)">
                <rect x="-6" y="-4" width="12" height="8" fill="#1e40af" rx="1" />
                <rect x="-10" y="-2" width="4" height="4" fill="#3b82f6" />
                <rect x="6" y="-2" width="4" height="4" fill="#3b82f6" />
              </g>
              
              {/* Signal beams */}
              <path d="M60 35 L60 70" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
              <path d="M60 35 L40 65" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
              <path d="M60 35 L80 65" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
              
              {/* Bermuda marker */}
              <circle cx="60" cy="70" r="3" fill="#dc2626" />
              
              <defs>
                <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
                </linearGradient>
              </defs>
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