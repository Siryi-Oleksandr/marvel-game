import { Button } from '@chakra-ui/react';
import TeamList from 'components/TeamList/TeamList';
import React from 'react';

function FightRing({ userTeam, enemyTeam, fight, back }) {
  return (
    <div>
      Figth Ring
      <br />
      <Button colorScheme="blue" size="lg" onClick={back}>
        Back
      </Button>
      <h2>User Team</h2>
      <TeamList team={userTeam} />
      <Button colorScheme="red" size="lg" onClick={fight}>
        Fight
      </Button>
      <h2>Enemy Team</h2>
      <TeamList team={enemyTeam} />
    </div>
  );
}

export default FightRing;
