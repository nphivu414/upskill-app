import { cookies } from 'next/headers';

const WINDOW_SIZE = 1 * 60 * 1000; // 1 minutes in milliseconds
const MAX_REQUESTS = 5;

interface RateLimitData {
  count: number;
  timestamp: number;
}

export async function checkRateLimit() {
  const cookieStore = await cookies();
  const rateLimitCookie = cookieStore.get('rate_limit');

  let rateLimitData: RateLimitData = rateLimitCookie
    ? JSON.parse(rateLimitCookie.value)
    : { count: 0, timestamp: Date.now() };

  const currentTime = Date.now();

  if (currentTime - rateLimitData.timestamp > WINDOW_SIZE) {
    rateLimitData = { count: 1, timestamp: currentTime };
  } else {
    rateLimitData.count++;
  }

  cookieStore.set('rate_limit', JSON.stringify(rateLimitData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: WINDOW_SIZE / 1000, // convert to seconds
  });

  return rateLimitData.count <= MAX_REQUESTS;
}
