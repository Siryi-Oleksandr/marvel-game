import React from 'react';
import './Curtain.scss';
import { Box } from '@chakra-ui/react';

export const Curtain = ({ children }) => {
  return (
    <Box className="curtainBody" overflowX="hidden" w="100vw" h="100vh">
      <Box
        w="50vw"
        h="100vh"
        position="absolute"
        id="leftCurtain"
        left="-50vw"
        zIndex="10"
        className="curtainContainer"
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
      {children}
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
