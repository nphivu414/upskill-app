import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';
import { Code } from 'lucide-react';

export const ShowCodeModal = ({ children }: ComponentWithChildren) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="sticky bottom-4 flex w-full justify-end lg:hidden">
      <Button
        variant="shadow"
        startContent={<Code size={14} />}
        onPress={onOpen}
      >
        Show code
      </Button>
      <Modal
        isOpen={isOpen}
        size="sm"
        hideCloseButton
        onOpenChange={onOpenChange}
        placement="bottom-center"
        classNames={{
          base: 'max-w-full',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Preview & Code</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
