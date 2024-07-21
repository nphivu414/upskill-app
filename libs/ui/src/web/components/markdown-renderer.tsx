import React from 'react';
import Markdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MemoizedRenderer = React.memo(
  Markdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

export const MarkdownRenderer = ({ children, ...rest }: Options) => {
  return (
    <MemoizedRenderer
      remarkPlugins={[remarkGfm]}
      components={{
        p({ children }) {
          return <p className="mb-2 last:mb-0">{children}</p>;
        },
      }}
      {...rest}
    >
      {children}
    </MemoizedRenderer>
  );
};
