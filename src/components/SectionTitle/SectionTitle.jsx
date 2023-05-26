import React from 'react';
import { SceletonTitle } from './SectionTitle.styled';

export function SectionTitle({ children }) {
  return <SceletonTitle>{children}</SceletonTitle>;
}
