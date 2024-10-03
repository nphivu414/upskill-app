import { CodeBlockProps } from '@upskill-app/shared';
import { CodeBlock } from '@upskill-app/ui/web';
import { highlight } from 'codehike/code';

export async function Code({ codeblock, tooltips }: CodeBlockProps) {
  const highlighted = await highlight(codeblock, 'github-from-css');
  return (
    <CodeBlock
      code={highlighted}
      className="bg-content2"
      tooltips={tooltips}
      showCopyButton
    />
  );
}
