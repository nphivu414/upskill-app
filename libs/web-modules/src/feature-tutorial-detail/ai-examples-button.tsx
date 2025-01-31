'use client';

import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from '@heroui/react';
import { CodeEditor, useResponsive } from '@upskill-app/ui/web';
import { readStreamableValue } from 'ai/rsc';

import { generateTypeScriptExamples } from './action/generate-examples';

interface AiExamplesButtonProps {
  sectionTitle: string;
  sectionContent: string;
  defaultLanguage?: string;
}

export const AiExamplesButton = ({
  sectionTitle,
  sectionContent,
  defaultLanguage,
}: AiExamplesButtonProps) => {
  const { isMobile } = useResponsive();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [generation, setGeneration] = React.useState<string>('');

  return (
    <>
      <Button
        variant="shadow"
        color="primary"
        onPress={async () => {
          const context = `Section: ${sectionTitle}\n\nContent: ${sectionContent}`;
          onOpen();

          if (generation) {
            return;
          }

          const { output } = await generateTypeScriptExamples(context);

          for await (const delta of readStreamableValue(output)) {
            setGeneration(
              (currentGeneration) => `${currentGeneration}${delta}`
            );
          }
        }}
      >
        View more AI examples
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
                <CodeEditor
                  code={generation}
                  defaultLanguage={defaultLanguage}
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
};
