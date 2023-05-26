import { Box } from '@chakra-ui/react';
import { SectionTitle } from 'components';
import React from 'react';

export const MobileVersion = () => {
  return (
    <Box display="flex" alignItems="center" h="80vh" mx="auto">
      <SectionTitle>
        We are glad to see you here! Please, use larger device to play our
        marvelous game.
      </SectionTitle>
    </Box>
  );
};
