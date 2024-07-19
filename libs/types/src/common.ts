import React = require("react");
import { HighlightedCode } from 'codehike/code';

export type ComponentWithChildren<T = {}> = T & { children?: React.ReactNode };

export type CodeBlockProps = {
  codeblock: HighlightedCode
}
