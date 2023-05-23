import React from 'react';
import { Card, HeroSkill } from './CardTeamPlaySceleton.styled';

function CardTeamPlaySceleton({ name, bgImg, color }) {
  return (
    <Card imgUrl={bgImg}>
      <HeroSkill style={{ color: color }}>{name}</HeroSkill>
    </Card>
  );
}

export default CardTeamPlaySceleton;
