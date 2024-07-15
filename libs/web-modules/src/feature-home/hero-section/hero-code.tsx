import { CodeBock } from '@upskill-app/ui/web';
import {
  AnnotationHandler,
  highlight,
  InnerLine,
  RawCode,
} from 'codehike/code';

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

export async function HeroCode({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, 'github-dark');
  return <CodeBock code={highlighted} handlers={[mark]} />;
}
