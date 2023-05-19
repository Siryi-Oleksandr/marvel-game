import React from 'react';
import { SceletonTitle } from './SectionTitle.styled';

function SectionTitle({ children }) {
  return <SceletonTitle>{children}</SceletonTitle>;
}

export default SectionTitle;
