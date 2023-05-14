import { Button, Box } from '@chakra-ui/react';
import React from 'react';

export const Home = ({ setHomePage }) => {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button p="20px" display="block" onClick={() => setHomePage(false)}>
        Let's Play
      </Button>
    </Box>
  );
};
