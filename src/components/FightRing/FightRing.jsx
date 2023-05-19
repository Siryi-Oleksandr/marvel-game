import { Button } from '@chakra-ui/react';
import FightBtn from 'components/Buttons/FightBtn';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import TeamList from 'components/TeamList/TeamList';
import React from 'react';

function FightRing({ userTeam, enemyTeam, fight, back }) {
  return (
    <div>
      <SectionTitle>Figth Ring</SectionTitle>

      <Button colorScheme="blue" size="lg" onClick={back}>
        Back
      </Button>
      <SectionTitle>User Team</SectionTitle>
      <TeamList team={userTeam} />
      <FightBtn fight={fight} />
      <SectionTitle>Enemy Team</SectionTitle>
      <TeamList team={enemyTeam} />
    </div>
  );
}

export default FightRing;
