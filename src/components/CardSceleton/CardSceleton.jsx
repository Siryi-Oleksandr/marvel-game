import React from 'react';
import { Card } from './CardSceleton.styled';

function CardSceleton({ name, bgImg }) {
  return <Card imgUrl={bgImg}>{name}</Card>;
}

export default CardSceleton;
