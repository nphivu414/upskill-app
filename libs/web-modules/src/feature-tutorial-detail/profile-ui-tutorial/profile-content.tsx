import React from 'react';
import { CodeBlockProps } from '@upskill-app/shared';
import { CodeBlock } from '@upskill-app/ui/web';

import { CodeWithAccoridions } from './code/tutorial-code';
import ProfileMdx from './content/main-content.mdx';

export function Code({ codeblock }: CodeBlockProps) {
  return <CodeBlock code={codeblock} className="bg-content2" showCopyButton />;
}

export const ProfileContent = () => {
  return <ProfileMdx components={{ CodeWithAccoridions, Code }} />;
};
