import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Build a Flight Booking UI with React, Tailwind, and HeroUI';
export const size = {
  width: 800,
  height: 418,
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
          backgroundColor: '#27272a',
          padding: '30px 40px',
          fontFamily: 'Inter, sans-serif',
          width: '100%',
          height: '100%',
          position: 'relative', // To allow absolute positioning of the logo
        }}
      >
        {/* Website Logo in the top-right corner */}
        <img
          src="https://upskills.dev/app-logo.png" // Replace with the actual logo URL
          alt="Upskills logo"
          width={80} // Adjust the width as needed
          height={80}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            borderRadius: '8px',
            border: '1px solid white',
          }}
        />

        <h1
          style={{
            marginBottom: '24px',
            fontSize: '42px',
            fontWeight: 'bold',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            color: 'white',
            marginTop: 0,
            maxWidth: '90%',
          }}
        >
          Build a Flight Booking UI with React, Tailwind, and HeroUI
        </h1>
        <p
          style={{
            marginBottom: '30px',
            fontSize: '18px',
            color: '#D1D5DB',
            maxWidth: '80%',
          }}
        >
          A comprehensive guide to creating a modern, interactive flight booking
          page using React, Tailwind, and HeroUI.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/22409039?v=4"
            alt="Author Avatar"
            width={44}
            height={44}
            style={{
              marginRight: '12px',
              borderRadius: '50%',
              border: '2px solid #ffffff',
            }}
          />
          <span
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
            }}
          >
            Vu Nguyen
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
