'use client';

import React from 'react';
import Editor from '@monaco-editor/react';

import { CodeWithAccoridions } from '../code-renderer';
import { Code } from '../content-ts-code-block';
import TypescriptGenericsMdx from './content/main-content.mdx';

export const TypescriptGenericsContent = () => {
  return (
    <>
      <TypescriptGenericsMdx components={{ CodeWithAccoridions, Code }} />
      <Editor
        height="90vh"
        defaultLanguage="typescript"
        defaultValue="const a: string = 'test'"
      />
    </>
  );
};
