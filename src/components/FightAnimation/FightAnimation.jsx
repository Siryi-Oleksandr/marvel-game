import React from 'react';
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  RingWrapper,
} from './FightAnimation.styled';
import { TeamItemSmall } from 'components';

export const FightAnimation = ({ userTeam, enemyTeam }) => {
  const [hero1, hero2, hero3] = userTeam;
  const [hero4, hero5, hero6] = enemyTeam;
  return (
    <RingWrapper>
      <Card1>
        <TeamItemSmall hero={hero1} />
      </Card1>
      <Card2>
        <TeamItemSmall hero={hero2} />
      </Card2>
      <Card3>
        <TeamItemSmall hero={hero3} />
      </Card3>
      <Card4>
        <TeamItemSmall hero={hero4} />
      </Card4>
      <Card5>
        <TeamItemSmall hero={hero5} />
      </Card5>
      <Card6>
        <TeamItemSmall hero={hero6} />
      </Card6>
    </RingWrapper>
  );
};
