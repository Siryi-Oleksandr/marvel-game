import React, { useState } from 'react';
import CardsList from 'components/CardsList/CardsList';
import TeamSelect from '../../components/TeamSelect/TeamSelect';
import { Button } from '@chakra-ui/react';

export const PlayGame = () => {
  const [userTeam, setUserTeam] = useState([]);

  const addToTeam = hero => {
    setUserTeam(prev => [...prev, hero]);
  };

  console.log('userTeam', userTeam);

  return (
    <div>
      PlayGame
      <TeamSelect />
      <CardsList addToTeam={addToTeam} />
    </div>
  );
};
