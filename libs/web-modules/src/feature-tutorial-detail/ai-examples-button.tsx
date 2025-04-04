'use client';

import React from 'react';
import {
  Alert,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Spinner,
  useDisclosure,
} from '@heroui/react';
import { cn, CodeEditor, useResponsive } from '@upskill-app/ui/web';
import { readStreamableValue } from 'ai/rsc';
import { RefreshCcw, WandSparkles } from 'lucide-react';

import { generateTypeScriptExamples } from './action/generate-examples';

interface AiExamplesButtonProps {
  topic: string;
  defaultLanguage?: string;
}

export const AiExamplesButton = ({
  topic,
  defaultLanguage,
}: AiExamplesButtonProps) => {
  const { isMobile } = useResponsive();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isStreaming, setIsStreaming] = React.useState<boolean>(false);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [generation, setGeneration] = React.useState<string>('');

  React.useEffect(() => {
    if (generation && isLoading) {
      setIsLoading(false);
    }
  }, [generation, isLoading]);

  const generateExamples = async (isRegenerate = false) => {
    onOpen();

    if (generation && !isRegenerate) {
      return;
    }

    setIsLoading(true);
    setIsStreaming(true);

    try {
      const context = `Main topic: ${topic}`;
      const { output } = await generateTypeScriptExamples(context);
      setIsLoaded(true);

      for await (const delta of readStreamableValue(output)) {
        setGeneration((currentGeneration) => {
          return `${currentGeneration}${delta}`;
        });
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    } finally {
      setIsStreaming(false);
      setIsLoaded(true);
    }
  };

  const regenerateExamples = async () => {
    setGeneration('');
    await generateExamples(true);
  };

  const handleOnOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setIsError(false);
    }

    onOpenChange();
  };

  const onViewMoreExamples = () => {
    generateExamples();
  };

  return (
    <>
      <Button
        variant="shadow"
        color="primary"
        size="sm"
        startContent={
          <span className="duration-250 inline-block transition-transform group-hover:scale-110">
            <WandSparkles
              size={14}
              className="group-hover:animate-wiggle group-hover:animate-infinite animate-duration-200 animate-none"
            />
          </span>
        }
        onPress={onViewMoreExamples}
        data-track={`view_ai_examples_${topic
          .toLowerCase()
          .replace(/\s+/g, '_')}_click`}
      >
        View more examples
      </Button>

      <Drawer
        isOpen={isOpen}
        placement={isMobile ? 'bottom' : 'right'}
        size="4xl"
        onOpenChange={handleOnOpenChange}
        classNames={{
          base: 'h-full max-h-full',
        }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                AI-Generated Examples
              </DrawerHeader>
              <DrawerBody className="relative">
                {isLoading && (
                  <div className="bg-background absolute inset-0 z-10 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
                    <Spinner variant="dots" label="Generating examples..." />
                  </div>
                )}
                {isError ? (
                  <div className="flex h-auto justify-center">
                    <Alert
                      color="danger"
                      title="Failed to generate examples. Please try again later!"
                    />
                  </div>
                ) : isLoaded ? (
                  <CodeEditor
                    code={generation}
                    defaultLanguage={defaultLanguage}
                  />
                ) : null}
              </DrawerBody>
              <DrawerFooter>
                <div className="flex w-full items-center justify-between">
                  <p className="text-muted text-xs">
                    Examples are generated by AI. Please refer with discretion.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      color="primary"
                      variant="flat"
                      onPress={regenerateExamples}
                      isLoading={isStreaming}
                      spinner={<Spinner variant="dots" size="sm" />}
                      spinnerPlacement="end"
                      isDisabled={isStreaming}
                    >
                      {isStreaming ? 'Generating' : 'Regenerate'}
                    </Button>
                    <Button color="default" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </div>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
