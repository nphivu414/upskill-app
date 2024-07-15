import React from 'react';
import { Pre } from 'codehike/code';

import { cn } from '../utils';
import { CopyButton } from './copy-button';

type CodeBlockProps = React.ComponentPropsWithoutRef<typeof Pre> & {
  showCopyButton?: boolean;
};

export const CodeBock = React.forwardRef<
  React.ElementRef<typeof Pre>,
  CodeBlockProps
>(({ className, showCopyButton, code: highlightedCode, ...props }, ref) => {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0">
        {showCopyButton && <CopyButton text={highlightedCode.code} />}
      </div>
      <Pre
        ref={ref}
        className={cn('bg-content1', className)}
        code={highlightedCode}
        {...props}
      />
    </div>
  );
});

CodeBock.displayName = 'CodeBock';
