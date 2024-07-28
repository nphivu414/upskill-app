import { AnnotationHandler, InlineAnnotation, InnerLine } from 'codehike/code';

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

export const calloutHandler: AnnotationHandler = {
  name: 'callout',
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation;
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    };
  },
  Block: ({ annotation, children }) => {
    const { column } = annotation.data;
    return (
      <>
        {children}
        <div
          style={{ minWidth: `${column + 4}ch` }}
          className="bg-content2 relative mt-1 w-fit whitespace-break-spaces rounded border border-current px-2"
        >
          <div
            style={{ left: `${column}ch` }}
            className="bg-content2 absolute -top-px size-2 -translate-y-1/2 rotate-45 border-l border-t border-current"
          />
          {annotation.query}
        </div>
      </>
    );
  },
};
