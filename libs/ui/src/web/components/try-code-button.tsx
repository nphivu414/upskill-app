'use client';

import { Editor } from '@monaco-editor/react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import { SquarePen } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useResponsive } from '../hooks';
import { cn, getFileExtension } from '../utils';

type TryCodeButtonProps = {
  code: string;
  className?: string;
  defaultLanguage?: string;
};

export function TryCodeButton({
  code,
  className,
  defaultLanguage,
}: TryCodeButtonProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme } = useTheme();
  const { isMobile } = useResponsive();

  return (
    <>
      <Button
        isIconOnly
        size="sm"
        aria-label="Try in code editor"
        className={cn('opacity-50 hover:opacity-100', className)}
        onPress={onOpen}
      >
        <SquarePen size={14} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={isMobile ? 'bottom' : 'right'}
        size="4xl"
        onOpenChange={onOpenChange}
        classNames={{
          base: 'h-full max-h-full',
        }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Playground
              </DrawerHeader>
              <DrawerBody>
                <Editor
                  defaultLanguage={defaultLanguage}
                  value={code}
                  theme={theme === 'dark' ? 'vs-dark' : 'light'}
                  onMount={async (editor, monaco) => {
                    const defaultFileExtension =
                      getFileExtension(defaultLanguage);
                    const defaultFileName = `file:///main.${defaultFileExtension}`;
                    monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
                      {
                        target: monaco.languages.typescript.ScriptTarget.Latest,
                        // allowNonTsExtensions: true,
                        moduleResolution:
                          monaco.languages.typescript.ModuleResolutionKind
                            .NodeJs,
                        module: monaco.languages.typescript.ModuleKind.CommonJS,
                        noEmit: true,
                        esModuleInterop: true,
                        jsx: monaco.languages.typescript.JsxEmit.React,
                        reactNamespace: 'React',
                        allowJs: true,
                        typeRoots: ['node_modules/@types'],
                      }
                    );

                    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
                      {
                        noSemanticValidation: false,
                        noSyntaxValidation: false,
                      }
                    );

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
              </DrawerBody>
              <DrawerFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
