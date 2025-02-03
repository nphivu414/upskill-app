'use client';

import { Editor } from '@monaco-editor/react';
import { useTheme } from 'next-themes';

import { getFileExtension } from '../utils';
import { Spinner } from '@heroui/react';

type CodeEditorProps = {
  code: string;
  defaultLanguage?: string;
};

export const CodeEditor = ({ code, defaultLanguage }: CodeEditorProps) => {
  const { theme } = useTheme();

  return (
    <Editor
      defaultLanguage={defaultLanguage}
      value={code}
      theme={theme === 'dark' ? 'vs-dark' : 'light'}
      loading={<Spinner label="Loading" />}
      onMount={async (editor, monaco) => {
        const defaultFileExtension = getFileExtension(defaultLanguage);
        const defaultFileName = `file:///main.${defaultFileExtension}`;
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          target: monaco.languages.typescript.ScriptTarget.Latest,
          moduleResolution:
            monaco.languages.typescript.ModuleResolutionKind.NodeJs,
          module: monaco.languages.typescript.ModuleKind.CommonJS,
          noEmit: true,
          esModuleInterop: true,
          jsx: monaco.languages.typescript.JsxEmit.React,
          reactNamespace: 'React',
          allowJs: true,
          typeRoots: ['node_modules/@types'],
        });

        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: false,
          noSyntaxValidation: false,
        });

        const codelib = await fetch(
          'https://unpkg.com/@types/react@18.3.18/index.d.ts'
        ).then((res) => res.text());

        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          codelib,
          `file:///node_modules/@react/types/index.d.ts`
        );

        const model = monaco.editor.createModel(
          code,
          'typescript',
          monaco.Uri.parse(defaultFileName)
        );

        editor.setModel(model);
      }}
    />
  );
};
