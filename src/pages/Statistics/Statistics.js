import { Box } from '@chakra-ui/react';
import { Accordeon, Title } from 'components';
import React from 'react';

export const Statistics = () => {
  return (
    <Box px="50px">
      <Box mt="20px" maxW="30vw" mx="auto" textAlign="center">
        <Title>Statistics</Title>
      </Box>
      <Accordeon />
    </Box>
  );
};
