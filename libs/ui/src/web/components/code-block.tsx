import React from 'react';
import { Pre } from 'codehike/code';

import {
  bgHandler,
  borderHandler,
  calloutHandler,
  cn,
  codeLineMarkHander,
} from '../utils';
import { CopyButton } from './copy-button';

type CodeBlockProps = React.ComponentPropsWithoutRef<typeof Pre> & {
  showCopyButton?: boolean;
};

export const CodeBlock = React.forwardRef<
  React.ElementRef<typeof Pre>,
  CodeBlockProps
>(({ className, showCopyButton, code: highlightedCode, ...props }, ref) => {
  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        {showCopyButton && <CopyButton text={highlightedCode.code} />}
      </div>
      <Pre
        ref={ref}
        className={cn('bg-content1 text-sm scrollbar-thin py-4', className)}
        code={highlightedCode}
        handlers={[
          codeLineMarkHander,
          bgHandler,
          borderHandler,
          calloutHandler,
        ]}
        {...props}
      />
    </div>
  );
});

CodeBlock.displayName = 'CodeBlock';
