import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@nextui-org/react';
import { ArrowDownNarrowWide, SlidersHorizontal } from 'lucide-react';

import { FlightFooterProps } from '../types';
import { FlightFilterForm } from './flight-filter-form';

export const FlightFooter = ({ portalContainer }: FlightFooterProps) => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-content1 border-t-1 border-divider sticky bottom-0 z-10 flex flex-1 items-center justify-between gap-2 p-4">
      <Popover
        placement="top-start"
        offset={-34}
        crossOffset={-14}
        backdrop="blur"
        portalContainer={portalContainer?.current || undefined}
      >
        <PopoverTrigger>
          <Button
            fullWidth
            variant="bordered"
            size="sm"
            color="primary"
            startContent={<SlidersHorizontal size={14} />}
          >
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          {(titleProps) => (
            <div className="w-full px-1 py-2">
              <p
                className="text-small text-foreground font-bold"
                {...titleProps}
              >
                Filters
              </p>
              <FlightFilterForm />
            </div>
          )}
        </PopoverContent>
      </Popover>

      <Button
        fullWidth
        variant="bordered"
        size="sm"
        color="primary"
        startContent={<ArrowDownNarrowWide size={14} />}
      >
        Sort
      </Button>

      {/* <Modal
        isOpen={isOpen}
        hideCloseButton
        onOpenChange={onOpenChange}
        placement="bottom-center"
        shouldBlockScroll
        portalContainer={portalContainer?.current || undefined}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Preview & Code</ModalHeader>
              <ModalBody>
                <FlightFilterForm />
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
};
