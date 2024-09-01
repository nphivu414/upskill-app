import React from 'react';
import { CodeBlockProps } from '@upskill-app/shared';
import { CodeBlock } from '@upskill-app/ui/web';

import { CodeWithAccoridions } from '../code-renderer';
import FlightBookingMdx from './content/main-content.mdx';

function Code({ codeblock }: CodeBlockProps) {
  return <CodeBlock code={codeblock} className="bg-content2" showCopyButton />;
}

export const FlightBookingContent = () => {
  return <FlightBookingMdx components={{ CodeWithAccoridions, Code }} />;
};
