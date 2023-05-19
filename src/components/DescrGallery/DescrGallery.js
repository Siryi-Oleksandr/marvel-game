import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ImPower } from 'react-icons/im';
import { GoGear } from 'react-icons/go';
import { FaHandPointUp } from 'react-icons/fa';
import { GiAxeSword } from 'react-icons/gi';
import { TbMoodHappy } from 'react-icons/tb';
import './DescrGallery.scss';

export const DescrGallery = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap="15px"
      color="#ffd700"
    >
      <Box className="GalleryItem">
        <Box className="ItemContainer">
          <GoGear size={50} className="GearLeft" />
          <GoGear size={80} className="GearRight" />
        </Box>
        <Text mt="20px">Unleash the full potential</Text>
      </Box>
      <Box className="GalleryItem">
        <Box className="ItemContainer">
          <ImPower size={80} className="Lightening" />
        </Box>
        <Text mt="20px">Analyze the power</Text>
      </Box>
      <Box className="GalleryItem">
        <Box className="ItemContainer">
          <FaHandPointUp size={80} className="HandPick" />
        </Box>
        <Text mt="20px">Choose your team</Text>
      </Box>
      <Box className="GalleryItem">
        <Box className="ItemContainer">
          <GiAxeSword size={80} className="Swords" />
        </Box>
        <Text mt="20px">Win marvelous battles</Text>
      </Box>
      <Box className="GalleryItem">
        <Box className="ItemContainer">
          <TbMoodHappy size={80} className="HandPick" />
        </Box>
        <Text mt="20px">Have fun with your heroes</Text>
      </Box>
    </Box>
  );
};
