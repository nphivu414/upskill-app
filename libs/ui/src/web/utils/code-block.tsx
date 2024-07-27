import { AnnotationHandler, InnerLine } from 'codehike/code';

export const codeLineMarkHander: AnnotationHandler = {
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

export const borderHandler: AnnotationHandler = {
  name: 'border',
  Block: ({ annotation, children }) => {
    const borderColor = annotation.query || '#006FEE';
    return <div style={{ border: '1px solid', borderColor }}>{children}</div>;
  },
};

export const bgHandler: AnnotationHandler = {
  name: 'bg',
  Inline: ({ annotation, children }) => {
    const background = annotation.query || '#17C964';
    return <span style={{ background }}>{children}</span>;
  },
};
