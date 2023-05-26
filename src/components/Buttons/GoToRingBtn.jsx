import React from 'react';
import { GoBtn } from './Buttons.styled';

export function GoToRingBtn({ openRing }) {
  return <GoBtn onClick={openRing}>Go to Ring</GoBtn>;
}
