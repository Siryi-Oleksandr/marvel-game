import { Button } from '@chakra-ui/react';
import FightBtn from 'components/Buttons/FightBtn';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import TeamList from 'components/TeamList/TeamList';
import React from 'react';
import { RingWrapper } from './FightRing.styled';

function FightRing({ userTeam, enemyTeam, fight, back }) {
  return (
    <div>
      <SectionTitle>Figth Ring</SectionTitle>

      <Button colorScheme="blue" size="lg" onClick={back}>
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

export default FightRing;
