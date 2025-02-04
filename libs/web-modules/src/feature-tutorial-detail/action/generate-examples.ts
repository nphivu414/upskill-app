'use server';

import { headers } from 'next/headers';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';

const rateLimit = new Map<string, { count: number; timestamp: number }>();
const LIMIT_PER_MINUTE = 10;

export async function generateTypeScriptExamples(context: string) {
  const ip = headers().get('x-forwarded-for') || 'unknown';

  const now = Date.now();
  const userRateLimit = rateLimit.get(ip) || { count: 0, timestamp: now };

  if (now - userRateLimit.timestamp > 60000) {
    userRateLimit.count = 0;
    userRateLimit.timestamp = now;
  }

  if (userRateLimit.count >= LIMIT_PER_MINUTE) {
    throw new Error('Rate limit exceeded. Please try again in a minute.');
  }

  userRateLimit.count++;
  rateLimit.set(ip, userRateLimit);

  const stream = createStreamableValue('');

  (async () => {
    const variations = [
      'focusing on practical business scenarios',
      'with emphasis on data processing patterns',
      'demonstrating common web development use cases',
      'showing real-world application architecture',
      'highlighting modern TypeScript patterns',
    ];

    const randomVariation =
      variations[Math.floor(Math.random() * variations.length)];
    const timestamp = Date.now();

    const { textStream } = streamText({
      model: openai('gpt-4o-mini'),
      temperature: 0.8, // Add randomness to responses
      system:
        'You are a TypeScript expert especially dealing with Generics concept. Generate practical, real-world examples that demonstrate the concept being discussed.',
      prompt: `Generate 3 unique and different examples related to this TypeScript concept: ${context} ${randomVariation}.
      Seed: ${timestamp}
      The examples should be simple, straightforward and easy to understand. They should demonstrate how the current concept is beneficial in specific scenarios.
      Each example should demonstrate the topic in function, type and interface. You should avoid fetch API topics or Storage topics.
      In each example, when creating types or variables, avoid names that can be conflicted with built-in types or global vars in web api and nodejs api like "Event", "Storage", "ResponseType", "name", "length", etc.
      You must not add any comments or explanations along with the code.
      Return the result as code snippets with comments explaining the code in detail.
      At the top, include 1 comment that describes the concept being demonstrated.
      Each example will be separated by 1 blank line and a comment like this: "// Example 1: <description>", "// Example 2: <description>", "// Example 3: <description>".
      You must return the result as a pure code string without wrapping it in code blocks or markdown.
      `,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
