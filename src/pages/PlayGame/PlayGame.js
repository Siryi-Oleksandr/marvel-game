import React, { useState } from 'react';
import CardsList from 'components/CardsList/CardsList';
import TeamSelect from 'components/TeamSelect/TeamSelect';
import { Button } from '@chakra-ui/react';
import TeamList from 'components/TeamList/TeamList';
import { getRandomTeam } from 'services/ramdomTeam';
import heroes from 'db/heroes.json';
import FightRing from 'components/FightRing/FightRing';
import { calculateTotalPowerTeam } from 'services/calculatorService';

export const PlayGame = () => {
  const [userTeam, setUserTeam] = useState([]);
  const [isFight, setIsFight] = useState(false);

  const noTeam = !userTeam.length;
  const isTeam = userTeam.length === 3;
  const enemyTeam = getRandomTeam(heroes);

  const addToTeam = hero => {
    setUserTeam(prev => [...prev, hero]);
  };

  const deleteFromTeam = hero => {
    if (noTeam) {
      return;
    }
    const updatedTeam = userTeam.filter(elem => elem.id !== hero.id);
    setUserTeam(updatedTeam);
  };

  const onFight = () => {
    const powerUserTeam = calculateTotalPowerTeam(userTeam);
    const powerEnemyTeam = calculateTotalPowerTeam(enemyTeam);
    let winner = null;
    if (powerUserTeam > powerEnemyTeam) {
      winner = 'User Team';
    } else {
      winner = 'Enemy Team';
    }
    console.log(
      `Team "${winner}" won with the score  ${powerUserTeam} :  ${powerEnemyTeam}`
    );
    return alert(`Winer: "${winner}" 🎉`);
  };

  const onBack = () => {
    setIsFight(false);
    setUserTeam([]);
  };

  return (
    <>
      {isFight ? (
        <FightRing
          userTeam={userTeam}
          enemyTeam={enemyTeam}
          fight={onFight}
          back={onBack}
        />
      ) : (
        <div>
          {noTeam ? (
            <TeamSelect />
          ) : (
            <>
              <TeamList team={userTeam} deleteFromTeam={deleteFromTeam} />
              <Button
                color="blue.400"
                size="lg"
                onClick={() => setIsFight(true)}
                isDisabled={!isTeam} // todo
              >
                Go to ring
              </Button>
            </>
          )}
          {/*  */}
          <CardsList addToTeam={addToTeam} />
        </div>
      )}
    </>
  );
};
