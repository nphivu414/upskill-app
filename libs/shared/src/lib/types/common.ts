import React from 'react';
import { HighlightedCode } from 'codehike/code';

export type ComponentWithChildren<T = {}> = T & { children?: React.ReactNode };

export type CodeBlockProps = {
  codeblock: HighlightedCode;
  className?: string;
  showCopyButton?: boolean;
  showToolbar?: boolean;
  tooltips?: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
};
