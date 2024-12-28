import { CodeBlockProps } from '@upskill-app/shared';
import { CodeBlock } from '@upskill-app/ui/web';
import { highlight } from 'codehike/code';
import { createTwoslasher } from 'twoslash';

const twoslasher = createTwoslasher({
  fsMap: new Map(),
  compilerOptions: {},
});

export async function Code({ codeblock, tooltips }: CodeBlockProps) {
  const { hovers, code, queries, errors } = twoslasher(
    codeblock.value,
    codeblock.lang
  );

  const highlighted = await highlight(
    { ...codeblock, value: code },
    'github-from-css'
  );

  hovers.forEach(({ text, line, character, length }) => {
    highlighted.annotations.push({
      name: 'tooltip',
      query: text,
      lineNumber: line + 1,
      fromColumn: character + 1,
      toColumn: character + length,
    });
  });

  queries.forEach(({ text, line, character }) => {
    highlighted.annotations.push({
      name: 'callout',
      query: text,
      fromLineNumber: line + 1,
      toLineNumber: line + 1,
      data: { character, isTsCode: true },
    });
  });

  errors.forEach(({ text, line, character }) => {
    highlighted.annotations.push({
      name: 'callout',
      query: text,
      fromLineNumber: line + 1,
      toLineNumber: line + 1,
      data: { character, className: 'text-red-400', isTsCode: true },
    });
  });

  return (
    <CodeBlock
      code={highlighted}
      className="bg-content2"
      tooltips={tooltips}
      showCopyButton
    />
  );
}
