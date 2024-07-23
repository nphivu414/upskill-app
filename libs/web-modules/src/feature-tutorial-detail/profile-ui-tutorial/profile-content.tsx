import React from 'react';
import { CodeBlockProps } from '@upskill-app/types';
import { CodeBlock, codeLineMark } from '@upskill-app/ui/web';

import { CodeWithAccoridions } from './code/tutorial-code';
import ProfileMdx from './content.mdx';

function Code({ codeblock }: CodeBlockProps) {
  return <CodeBlock code={codeblock} handlers={[codeLineMark]} />;
}

export const ProfileContent = () => {
  return (
    <>
      <ProfileMdx components={{ CodeWithAccoridions, Code }} />
    </>
  );
};
