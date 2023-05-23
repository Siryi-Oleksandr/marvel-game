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

export function VinnerModal({ isOpen, onClose, infoVinner, back }) {
  const { messageTitle, messageBody, powerUserTeam, powerEnemyTeam } =
    infoVinner;
  const isUserVinner = powerUserTeam >= powerEnemyTeam;

  const onPlayAgain = () => {
    back();
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          padding={5}
          background={
            isUserVinner
              ? 'radial-gradient(at center, #ffffff 40%, #1e2cf3)'
              : 'radial-gradient(at center, #ffffff 40%, #ff0000)'
          }
        >
          <ModalHeader
            className="modalHeader"
            color={isUserVinner ? 'blue' : 'red'}
          >
            {isUserVinner ? 'Victory' : 'Defeat'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modalBody">
            <Text>{messageTitle}</Text>
            <Text>{messageBody}</Text>
            <Box display="flex" gap={5} alignItems="center">
              <Box className="scoreWrapper">
                <Text>User Team</Text>
                <Box className="score">
                  <Text color={isUserVinner ? 'red' : 'gray'}>
                    {' '}
                    {powerUserTeam}{' '}
                  </Text>
                </Box>
              </Box>

              <Text> : </Text>

              <Box className="scoreWrapper">
                <Text>Enemy Team</Text>
                <Box className="score">
                  <Text color={!isUserVinner ? 'red' : 'gray'}>
                    {powerEnemyTeam}{' '}
                  </Text>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              colorScheme="red"
              alignItems="center"
              mr={3}
              onClick={onPlayAgain}
            >
              Play again
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
