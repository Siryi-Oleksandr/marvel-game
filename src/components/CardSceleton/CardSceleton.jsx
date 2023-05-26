import React from 'react';
import { Card, HeroSkill } from './CardSceleton.styled';

export function CardSceleton({ name, bgImg, color }) {
  return (
    <Card imgUrl={bgImg}>
      <HeroSkill style={{ color: color }}>{name}</HeroSkill>
    </Card>
  );
}
