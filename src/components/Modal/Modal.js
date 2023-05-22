import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import './Modal.scss';

export function VinnerModal({ isOpen, onClose, infoVinner }) {
  const { messageTitle, messageBody, powerUserTeam, powerEnemyTeam } =
    infoVinner;
  const isUserVinner = powerUserTeam >= powerEnemyTeam;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          backgroundColor={isUserVinner ? '#5c82e18c' : '#ff000048'}
        />
        <ModalContent>
          <ModalHeader textAlign="center">{messageTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modalBody">
            <Text>{messageBody}</Text>
            <Box display="flex" gap={2} alignItems="center">
              <Box className="score">
                <Text color={isUserVinner ? 'red' : 'gray'}>
                  {' '}
                  {powerUserTeam}{' '}
                </Text>
              </Box>
              <Text> : </Text>
              <Box className="score">
                <Text color={!isUserVinner ? 'red' : 'gray'}>
                  {powerEnemyTeam}{' '}
                </Text>
              </Box>
            </Box>
            {/* <Text>Try again!</Text> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
