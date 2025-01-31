'use client';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from '@heroui/react';
import { SquarePen } from 'lucide-react';

import { useResponsive } from '../hooks';
import { cn } from '../utils';
import { CodeEditor } from './code-editor';

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
                <CodeEditor code={code} defaultLanguage={defaultLanguage} />
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
