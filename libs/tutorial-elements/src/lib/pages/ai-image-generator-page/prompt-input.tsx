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
import { ArrowUpRight, ChevronDown, WandSparkles } from 'lucide-react';

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
            radius="lg"
            variant="flat"
            size="lg"
            endContent={<ArrowUpRight size={16} />}
          >
            <div className="flex flex-col items-start gap-px">
              <div className="text-muted text-xs">Fantasy</div>
              <div className="text-sm">A city of light</div>
            </div>
          </Button>
          <Button
            radius="lg"
            variant="flat"
            size="lg"
            endContent={<ArrowUpRight size={16} />}
          >
            <div className="flex flex-col items-start gap-px">
              <div className="text-muted text-xs">Fantasy</div>
              <div className="text-sm">A city of light</div>
            </div>
          </Button>
          <Button
            radius="lg"
            variant="flat"
            size="lg"
            endContent={<ArrowUpRight size={16} />}
          >
            <div className="flex flex-col items-start gap-px">
              <div className="text-muted text-xs">Fantasy</div>
              <div className="text-sm">A city of light</div>
            </div>
          </Button>
        </div>
      </ScrollShadow>
      <Textarea
        placeholder="Lets build something"
        classNames={{
          input: 'min-h-[100px] text-base',
          inputWrapper: 'pb-16',
        }}
        isMultiline
        minRows={3}
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
