import React from 'react';
import { Card, HeroSkill } from './CardSceleton.styled';

function CardSceleton({ name, bgImg }) {
  return (
    <Card imgUrl={bgImg}>
      <HeroSkill>{name}</HeroSkill>
    </Card>
  );
}

export default CardSceleton;
