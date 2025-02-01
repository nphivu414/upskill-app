'use server';

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';

export async function generateTypeScriptExamples(context: string) {
  const stream = createStreamableValue('');

  (async () => {
    const { textStream } = streamText({
      model: openai('gpt-4o-mini'),
      system:
        'You are a TypeScript expert especially dealing with Generics concept. Generate practical, real-world examples that demonstrate the concept being discussed. Include comments explaining the code.',
      prompt: `Generate 3 additional examples related to this TypeScript concept: ${context}.
      The examples should be real-world scenario, easy to understand. They should demonstrate how the current concept is beneficial in specific scenarios.
      Each example should cover different topics like functions, classes, interfaces, etc.
      In each example, when creating types or variables, avoid names that can be conflicted with built-in types or global vars in web api and nodejs api like "Event", "Storage", "ResponseType", "name",...
      Return the result as code snippets with comments explaining the code in detail.
      At the top, include a comment that describes the concept being demonstrated.
      Each example will be separated by 1 blank line and a comment like this: "// Example 1", "// Example 2", "// Example 3".
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
