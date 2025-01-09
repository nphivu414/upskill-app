import React from 'react';

import { CodeWithAccoridions } from '../code-renderer';
import { Code } from '../content-ts-code-block';
import TypescriptGenericsMdx from './content/main-content.mdx';

export const TypescriptGenericsContent = () => {
  return <TypescriptGenericsMdx components={{ CodeWithAccoridions, Code }} />;
};
