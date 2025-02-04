import { CodeBlockProps } from '@upskill-app/shared';
import { cn, CodeBlock } from '@upskill-app/ui/web';
import { highlight } from 'codehike/code';

export async function Code({
  codeblock,
  tooltips,
  className,
  showToolbar,
  showCopyButton = true,
}: CodeBlockProps) {
  const highlighted = await highlight(codeblock, 'github-from-css');
  return (
    <CodeBlock
      code={highlighted}
      className={cn('bg-content2', className)}
      tooltips={tooltips}
      showCopyButton={showCopyButton}
      showToolbar={showToolbar}
    />
  );
}
