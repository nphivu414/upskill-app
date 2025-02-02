import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_STORY_BASE_URL: z.string().min(1),
  },
  server: {
    RESEND_API_KEY: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_STORY_BASE_URL: process.env.NEXT_PUBLIC_STORY_BASE_URL,
  },
});
