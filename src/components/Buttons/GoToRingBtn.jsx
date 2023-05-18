import React from 'react';
import { GoBtn } from './Buttons.styled';

function GoToRingBtn({ children, openRing }) {
  return <GoBtn onClick={openRing}>{children}</GoBtn>;
}

export default GoToRingBtn;
