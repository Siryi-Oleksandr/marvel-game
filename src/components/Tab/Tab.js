import React from 'react';
import { Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './Tab.scss';

export const Tab = ({ children, to }) => {
  return (
    <Box w="100%" as={NavLink} to={to} className="nav-link">
      {children}
    </Box>
  );
};
