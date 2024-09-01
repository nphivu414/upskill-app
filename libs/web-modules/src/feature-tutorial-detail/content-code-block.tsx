import { CodeBlockProps } from '@upskill-app/shared';
import { CodeBlock } from '@upskill-app/ui/web';

export const Code = ({ codeblock }: CodeBlockProps) => {
  return <CodeBlock code={codeblock} className="bg-content2" showCopyButton />;
};
