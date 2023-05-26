import React from 'react';
import { Button } from '@chakra-ui/react';
import { TeamList, SectionTitle, FightBtn } from 'components';
import { RingWrapper } from './FightRing.styled';
import { pallete } from 'helpers/variables';

export function FightRing({ userTeam, enemyTeam, fight, back }) {
  return (
    <div>
      <SectionTitle>Fight Ring</SectionTitle>

      <Button
        colorScheme="red"
        backgroundColor={pallete.primaryRed}
        size="lg"
        ml={8}
        onClick={back}
      >
        Back
      </Button>
      <RingWrapper>
        <TeamList team={userTeam} title="User team" />
        <FightBtn fight={fight} />
        <TeamList team={enemyTeam} title="Enemy Team" />
      </RingWrapper>
    </div>
  );
}
