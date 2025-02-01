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
        'You are a TypeScript expert especially dealing with Generics concept. Generate practical, real-world examples that demonstrate the concept being discussed.',
      prompt: `Generate 3 additional examples related to this TypeScript concept: ${context}.
      The examples should be simple, straightforward and easy to understand. They should demonstrate how the current concept is beneficial in specific scenarios.
      Each example should demonstrate the topic in function, type and interface.
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
