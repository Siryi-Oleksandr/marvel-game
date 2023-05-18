import React, { createRef } from 'react';
import { createPortal } from 'react-dom';
import './Curtain.scss';
import { Box } from '@chakra-ui/react';
const MODAL_ROOT = document.querySelector('#modal-root');

export const Curtain = () => {
  const modalRef = createRef();

  return createPortal(
    <Box
      className="curtainBody"
      id="curtainBody"
      position="absolute"
      top="0px"
      ref={modalRef}
      overflowX="hidden"
      role="curtains"
      h="100vh"
      w="100vw"
      visibility="hidden"
    >
      <Box
        w="50vw"
        h="100vh"
        position="absolute"
        id="leftCurtain"
        left="-50vw"
        zIndex="10"
        className="curtainContainer curtainContainer--left"
      ></Box>
      <Box
        w="50vw"
        h="100vh"
        position="absolute"
        zIndex="10"
        right="-50vw"
        className="curtainContainer curtainContainer--right"
        id="rightCurtain"
      ></Box>
    </Box>,
    MODAL_ROOT
  );
};
