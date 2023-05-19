import React from 'react';
import { GoBtn } from './Buttons.styled';

function GoToRingBtn({ openRing }) {
  return <GoBtn onClick={openRing}>Go to Ring</GoBtn>;
}

export default GoToRingBtn;
