import React from 'react';
import './Curtain.scss';
import { Box } from '@chakra-ui/react';
import { WelcomeBtn } from 'components';

export const Curtain = ({ setHomePage }) => {
  return (
    <Box className="curtainBody" overflow="hidden" w="100vw" h="100vh">
      <Box
        w="50vw"
        h="100vh"
        position="absolute"
        id="leftCurtain"
        left="-50vw"
        zIndex="10"
        className="curtainContainer"
        scroll="no-scroll"
      >
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
      </Box>
      <Box
        h="100vh"
        w="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="buttonContainer"
        position="relative"
      >
        <WelcomeBtn setHomePage={setHomePage} />
      </Box>
      <Box
        w="50vw"
        h="100vh"
        position="absolute"
        zIndex="10"
        right="-50vw"
        className="curtainContainer"
        id="rightCurtain"
      >
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
        <Box className="unCurtain"></Box>
      </Box>
    </Box>
  );
};
