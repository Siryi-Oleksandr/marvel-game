import React from 'react';
import { GoBtn } from './Buttons.styled';

function FightBtn({ fight }) {
  return <GoBtn onClick={fight}>Fight</GoBtn>;
}

export default FightBtn;
