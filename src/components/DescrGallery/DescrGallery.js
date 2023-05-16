import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ImPower } from 'react-icons/im';
import { GiGears } from 'react-icons/gi';
import './DescrGallery.scss';

export const DescrGallery = () => {
  return (
    <Box display="flex" justifyContent="space-between" gap="15px">
      <Box className="GalleryItem">
        <GiGears size={100} fill="whitesmoke" />
        <Text mt="20px" color="whitesmoke">
          Intelligence
        </Text>
      </Box>
      <Box className="GalleryItem">
        <ImPower size={100} fill="whitesmoke" />
        <Text mt="20px" color="whitesmoke">
          Force
        </Text>
      </Box>
      <Box className="GalleryItem">
        <ImPower size={100} fill="whitesmoke" />
        <Text mt="20px" color="whitesmoke">
          Speed and Agility
        </Text>
      </Box>
      <Box className="GalleryItem">
        <ImPower size={100} fill="whitesmoke" />
        <Text mt="20px" color="whitesmoke">
          Fighting Skills
        </Text>
      </Box>
      <Box className="GalleryItem">
        <ImPower size={100} fill="whitesmoke" />
        <Text mt="20px" color="whitesmoke">
          Special Skills
        </Text>
      </Box>
    </Box>
  );
};
