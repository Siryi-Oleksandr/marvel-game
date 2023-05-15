import { Button, Box } from '@chakra-ui/react';
import './Home.scss';
import React from 'react';
import { animateCurtains } from 'services/animateCurtains';

export const Home = ({ setHomePage }) => {
  return (
    <Box class="curtainBody" overflow="hidden" w="100vw" h="100vh">
      <Box
        w="50vw"
        h="100vh"
        bg="green.900"
        position="absolute"
        id="leftCurtain"
        left="-50vw"
        zIndex="10"
        className="curtainContainer"
        scroll="no-scroll"
      >
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
      </Box>
      <Box
        h="100vh"
        w="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          p="20px"
          display="block"
          onClick={() => {
            animateCurtains();
            setTimeout(() => setHomePage(false), 3000);
          }}
        >
          Let's Play
        </Button>
      </Box>
      <Box
        w="50vw"
        h="100vh"
        bg="green.900"
        position="absolute"
        zIndex="10"
        right="-50vw"
        className="curtainContainer"
        id="rightCurtain"
      >
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
        <Box class="unCurtain" bg="green.900"></Box>
      </Box>
    </Box>
  );
};
