import React, { createRef } from 'react';
import { createPortal } from 'react-dom';
import './Curtain.scss';
import { Box, Image } from '@chakra-ui/react';
import Shield from 'images/shield.svg';
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
      <Image src={Shield} alt="Shield" className="Shield" id="Shield" />
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
