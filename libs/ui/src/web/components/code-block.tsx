import React from 'react';
import { Pre } from 'codehike/code';

import {
  bgHandler,
  borderHandler,
  calloutHandler,
  cn,
  codeLineMarkHander,
  tooltipHandler,
} from '../utils';
import { CopyButton } from './copy-button';

type CodeBlockProps = React.ComponentPropsWithoutRef<typeof Pre> & {
  showCopyButton?: boolean;
  tooltips?: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
};

export const CodeBlock = React.forwardRef<
  React.ElementRef<typeof Pre>,
  CodeBlockProps
>(
  (
    { className, showCopyButton, code: highlightedCode, tooltips, ...props },
    ref
  ) => {
    highlightedCode.annotations = highlightedCode.annotations.map((a) => {
      const tooltip = tooltips?.find((t) => t.title === a.query);
      if (!tooltip) return a;
      return {
        ...a,
        data: { ...a.data, children: tooltip.children },
      };
    });

    return (
      <div className="relative">
        <div className="absolute right-2 top-2">
          {showCopyButton && <CopyButton text={highlightedCode.code} />}
        </div>
        <Pre
          ref={ref}
          className={cn('bg-content1 text-xs scrollbar-thin py-4', className)}
          code={highlightedCode}
          handlers={[
            codeLineMarkHander,
            bgHandler,
            borderHandler,
            calloutHandler,
            tooltipHandler,
          ]}
          {...props}
        />
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
