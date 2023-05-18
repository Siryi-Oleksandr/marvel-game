import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ImPower } from 'react-icons/im';
import { GoGear } from 'react-icons/go';
import './DescrGallery.scss';

export const DescrGallery = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap="15px"
      color="#ffd700"
      mb="40px"
    >
      <Box className="GalleryItem">
        <Box className="ItemContainer">
          <GoGear size={50} fill="currentColor" className="GearLeft" />
          <GoGear size={80} fill="currentColor" className="GearRight" />
        </Box>
        <Text mt="20px">Unleash the full potential</Text>
      </Box>
      <Box className="GalleryItem">
        <Box className="ItemContainer">
          <ImPower size={80} fill="currentColor" className="Lightening" />
        </Box>
        <Text mt="20px">Analyze the power</Text>
      </Box>
      <Box className="GalleryItem">
        <ImPower size={100} fill="currentColor" />
        <Text mt="20px">Choose your team</Text>
      </Box>
      <Box className="GalleryItem">
        <ImPower size={100} fill="currentColor" />
        <Text mt="20px">Win marvelous battles</Text>
      </Box>
      <Box className="GalleryItem">
        <ImPower size={100} fill="currentColor" />
        <Text mt="20px">Have fun with your heroes</Text>
      </Box>
    </Box>
  );
};
