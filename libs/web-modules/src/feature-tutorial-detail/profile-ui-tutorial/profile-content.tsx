import React from 'react';
import { CodeBlockProps } from '@upskill-app/types';
import { CodeBlock } from '@upskill-app/ui/web';

import { CodeWithAccoridions } from './code/tutorial-code';
import ProfileMdx from './content/main-content.mdx';

export function Code({ codeblock }: CodeBlockProps) {
  return <CodeBlock code={codeblock} className="bg-content2" />;
}

export const ProfileContent = () => {
  return <ProfileMdx components={{ CodeWithAccoridions, Code }} />;
};
