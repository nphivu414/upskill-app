import { CodeBlockProps } from '@upskill-app/shared';
import { CodeBlock } from '@upskill-app/ui/web';
import { AnnotationHandler, InnerLine } from 'codehike/code';

const mark: AnnotationHandler = {
  name: 'mark',
  AnnotatedLine: ({ annotation, ...props }) => (
    <InnerLine merge={props} data-mark={true} />
  ),
  Line: (props) => (
    <InnerLine
      merge={props}
      className="border-l-2 border-transparent px-2 data-[mark]:border-blue-400 data-[mark]:bg-blue-400/10"
    />
  ),
};

export function HeroCode({ codeblock }: CodeBlockProps) {
  return <CodeBlock code={codeblock} handlers={[mark]} />;
}
