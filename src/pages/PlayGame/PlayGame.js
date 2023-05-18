import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from 'components/CardsList/CardsList';
import TeamSelect from 'components/TeamSelect/TeamSelect';
import { Button } from '@chakra-ui/react';
import TeamList from 'components/TeamList/TeamList';
import { getRandomTeam } from 'services/ramdomTeam';
import heroes from 'db/heroes.json';
import FightRing from 'components/FightRing/FightRing';
import { calculateTotalPowerTeam } from 'services/calculatorService';
import { addCardToTeam, deleteCardFromTeam } from 'redux/cards/slice';
import { getUserTeam } from 'redux/cards/selectors';

export const PlayGame = () => {
  const userTeam = useSelector(getUserTeam);
  const [isFight, setIsFight] = useState(false);

  console.log('userTeam', userTeam);

  const dispatch = useDispatch();

  const noTeam = !userTeam.length;
  const isTeam = userTeam.length === 3;
  const enemyTeam = getRandomTeam(heroes);

  const addToTeam = hero => {
    dispatch(addCardToTeam(hero));
  };

  const deleteFromTeam = id => {
    if (noTeam) {
      return;
    }
    dispatch(deleteCardFromTeam(id));
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
            // <TeamSelect />
            <p>choose smth</p>
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
