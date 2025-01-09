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
} from '@nextui-org/react';
import { Code, FilePenLine, SquarePen } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useResponsive } from '../hooks';
import { cn } from '../utils';

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
        size="3xl"
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
