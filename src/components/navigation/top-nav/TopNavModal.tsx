import { Box } from '@chakra-ui/layout';
import {
    Modal,
    Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import React, { ReactElement, useRef } from 'react'

interface Props {
    isOpen: boolean
    onClose: () => void
}

//TODO maybe should be refactored to useCallback component
export default function TopNavModal({isOpen, onClose}: Props): (ReactElement) {
    const modalRef = useRef();

    return (
        <div>
            <Box ref={modalRef} tabIndex={-1} aria-label="Focus moved to this box">
                 <Modal finalFocusRef={modalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           Coming soon
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

              </Box>
        </div>
    )
}
