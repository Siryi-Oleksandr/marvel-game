import React from 'react';
import { GoBtn } from './Buttons.styled';

export function FightBtn({ fight }) {
  return <GoBtn onClick={fight}>Fight</GoBtn>;
}
