import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Build a User Profile Page with React and NextUI';
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: 'black',
          paddingLeft: '20px',
          paddingRight: '20px',
          fontFamily: 'sans-serif',
          width: '100%',
          height: '100%',
        }}
      >
        <h1
          style={{
            marginBottom: '24px',
            fontSize: '48px',
            fontWeight: 'bold',
            lineHeight: '1.2',
            letterSpacing: '-0.05em',
            color: 'white',
            marginTop: 0,
          }}
        >
          Build a Flight Booking UI with React, Tailwind and NextUI
        </h1>
        <p
          style={{
            marginBottom: '40px',
            fontSize: '24px',
            color: '#9CA3AF',
          }}
        >
          This comprehensive tutorial guides you through creating a modern,
          interactive flight booking page using React and NextUI.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/22409039?v=4"
            alt="Author Avatar"
            width={46}
            height={46}
            style={{
              marginRight: '16px',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: 'white',
            }}
          >
            By Vu Nguyen
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
