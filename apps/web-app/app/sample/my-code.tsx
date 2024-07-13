import {
  AnnotationHandler,
  highlight,
  InnerLine,
  Pre,
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
      className="px-2 border-l-2 border-transparent data-[mark]:border-blue-400 data-[mark]:bg-blue-400/10"
    />
  ),
};
export async function MyCode({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, 'github-dark');
  return <Pre code={highlighted} handlers={[mark]} />;
}
