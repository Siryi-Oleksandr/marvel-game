import { Box } from '@chakra-ui/react';
import { Accordeon, Container, Title } from 'components';
import React from 'react';

export const Statistics = () => {
  return (
    <Container>
      <Box mt="20px" maxW="30vw" mx="auto" textAlign="center">
        <Title>Statistics</Title>
      </Box>
      <Accordeon />
    </Container>
  );
};
