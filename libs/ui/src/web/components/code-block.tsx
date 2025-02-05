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
import { TryCodeButton } from './try-code-button';

type CodeBlockProps = React.ComponentPropsWithoutRef<typeof Pre> & {
  showCopyButton?: boolean;
  showTryCodeButton?: boolean;
  showToolbar?: boolean;
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
    {
      className,
      showCopyButton,
      showTryCodeButton,
      showToolbar,
      code: highlightedCode,
      tooltips,
      ...props
    },
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
      <div className={cn('relative', { 'mockup-browser': showToolbar })}>
        {showToolbar ? <div className="mockup-browser-toolbar" /> : null}
        <div className="absolute right-2 top-2">
          <div className="flex gap-2">
            {showTryCodeButton && (
              <TryCodeButton
                defaultLanguage={highlightedCode.lang}
                code={highlightedCode.code}
              />
            )}
            {showCopyButton && <CopyButton text={highlightedCode.code} />}
          </div>
        </div>

        <Pre
          ref={ref}
          className={cn('bg-content1 scrollbar-thin py-4 text-sm', className)}
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
