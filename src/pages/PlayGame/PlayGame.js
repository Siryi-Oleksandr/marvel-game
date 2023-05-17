import React, { useEffect, useState } from 'react';
import CardsList from 'components/CardsList/CardsList';
import TeamSelect from 'components/TeamSelect/TeamSelect';
import { Button } from '@chakra-ui/react';
import TeamList from 'components/TeamList/TeamList';
import { getRandomTeam } from 'services/ramdomTeam';
import heroes from 'db/heroes.json';

export const PlayGame = () => {
  const [userTeam, setUserTeam] = useState([]);
  const [isFight, setIsFight] = useState(false);

  const enemyTeam = getRandomTeam(heroes);

  const addToTeam = hero => {
    setUserTeam(prev => [...prev, hero]);
  };

  const noTeam = !userTeam.length;

  const deleteFromTeam = hero => {
    if (noTeam) {
      return;
    }
    const updatedTeam = userTeam.filter(elem => elem.id !== hero.id);
    setUserTeam(updatedTeam);
  };

  return (
    <div>
      PlayGame
      {noTeam ? (
        <TeamSelect />
      ) : (
        <>
          <TeamList team={userTeam} deleteFromTeam={deleteFromTeam} />
          <Button colorScheme="teal" size="lg" onClick={() => setIsFight(true)}>
            Go to ring
          </Button>
        </>
      )}
      {/*  */}
      <CardsList addToTeam={addToTeam} />
    </div>
  );
};
