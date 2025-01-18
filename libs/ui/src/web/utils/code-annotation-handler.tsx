import React from 'react';
import { Tooltip } from "@heroui/react";
import {
  AnnotationHandler,
  getPreRef,
  highlight,
  InlineAnnotation,
  InnerLine,
  InnerPre,
  Pre,
} from 'codehike/code';

import { cn } from './tailwind';

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
    const borderColor = annotation.query || '#F5A524';
    return <div style={{ border: '1px solid', borderColor }}>{children}</div>;
  },
  Inline: ({ annotation, children }) => {
    const borderColor = annotation.query || '#F5A524';
    return <span style={{ border: '1px solid', borderColor }}>{children}</span>;
  },
};

export const bgHandler: AnnotationHandler = {
  name: 'bg',
  Inline: ({ annotation, children }) => {
    const background = annotation.query || '#f5a52475';
    return <span style={{ background }}>{children}</span>;
  },
};

export const calloutHandler: AnnotationHandler = {
  name: 'callout',
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation;
    if (data?.isTsCode) {
      return annotation;
    }
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    };
  },
  Block: ({ annotation, children }) => {
    const { column, className, character } = annotation.data;
    return (
      <>
        {children}
        <div
          style={{ minWidth: `${character ? character + 2 : column + 4}ch` }}
          className={cn(
            'bg-content3 text-muted border-current relative mt-1 w-fit whitespace-break-spaces rounded border px-2 py-1',
            className
          )}
        >
          <div
            style={{ left: `${character ? character + 2 : column + 1}ch` }}
            className="bg-content3 absolute -top-px size-2 -translate-y-1/2 rotate-45 border-l border-t border-current"
          />
          {annotation.query}
        </div>
      </>
    );
  },
};

export const tooltipHandler: AnnotationHandler = {
  name: 'tooltip',
  Inline: async ({ children, annotation }) => {
    const { query, data } = annotation;
    const highlighted = await highlight(
      { value: query, lang: 'ts', meta: '' },
      'github-from-css'
    );
    return (
      <Tooltip
        showArrow={true}
        classNames={{
          content: 'bg-content1 shadow-lg p-2',
        }}
        content={
          <>
            {data?.children || (
              <Pre code={highlighted} className="m-0 bg-transparent p-1" />
            )}
          </>
        }
      >
        <span className="text-warning underline decoration-dashed">
          {children}
        </span>
      </Tooltip>
    );
  },
};

export const focusHandler: AnnotationHandler = {
  name: 'focus',
  onlyIfAnnotated: true,
  PreWithRef: (props) => {
    const ref = getPreRef(props);
    useScrollToFocus(ref);
    return <InnerPre merge={props} />;
  },
  Line: (props) => <InnerLine merge={props} className="..." />,
  AnnotatedLine: ({ annotation, ...props }) => (
    <InnerLine merge={props} data-focus={true} className="..." />
  ),
};

function useScrollToFocus(ref: React.RefObject<HTMLPreElement>) {
  const firstRender = React.useRef(true);
  React.useLayoutEffect(() => {
    if (ref.current) {
      // find all descendants whith data-focus="true"
      const focusedElements = ref.current.querySelectorAll(
        '[data-focus=true]'
      ) as NodeListOf<HTMLElement>;

      // find top and bottom of the focused elements
      const containerRect = ref.current.getBoundingClientRect();
      let top = Infinity;
      let bottom = -Infinity;
      focusedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        top = Math.min(top, rect.top - containerRect.top);
        bottom = Math.max(bottom, rect.bottom - containerRect.top);
      });

      // scroll to the focused elements if any part of them is not visible
      if (bottom > containerRect.height || top < 0) {
        ref.current.scrollTo({
          top: ref.current.scrollTop + top - 10,
          behavior: firstRender.current ? 'instant' : 'smooth',
        });
      }
      firstRender.current = false;
    }
  });
}
