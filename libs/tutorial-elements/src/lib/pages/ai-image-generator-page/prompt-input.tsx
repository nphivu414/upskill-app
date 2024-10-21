'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  ScrollShadow,
  Textarea,
} from '@nextui-org/react';
import { ChevronDown, Forward, WandSparkles } from 'lucide-react';

export const PromptInput = () => {
  return (
    <div className="relative">
      <ScrollShadow
        orientation="horizontal"
        hideScrollBar
        className="max-w-full"
      >
        <div className="flex w-max flex-nowrap gap-3 p-2">
          <Button
            radius="full"
            size="sm"
            variant="flat"
            endContent={<Forward size={14} />}
          >
            A city of light
          </Button>
          <Button
            radius="full"
            size="sm"
            variant="flat"
            endContent={<Forward size={14} />}
          >
            A city of light
          </Button>
          <Button
            radius="full"
            size="sm"
            variant="flat"
            endContent={<Forward size={14} />}
          >
            A city of light
          </Button>
          <Button
            radius="full"
            size="sm"
            variant="flat"
            endContent={<Forward size={14} />}
          >
            A city of light
          </Button>
        </div>
      </ScrollShadow>
      <Textarea
        placeholder="Lets build something"
        classNames={{
          input: 'min-h-[100px]',
          inputWrapper: 'pb-16',
        }}
        isMultiline
        minRows={5}
      />
      <div className="absolute bottom-0 flex w-full justify-between p-4">
        <div>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="bordered" endContent={<ChevronDown size={14} />}>
                Art Style
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Action event example">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Button
          variant="shadow"
          color="primary"
          endContent={<WandSparkles size={14} />}
        >
          Generate
        </Button>
      </div>
    </div>
  );
};
