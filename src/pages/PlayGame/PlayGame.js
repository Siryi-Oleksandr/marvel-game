import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsList from 'components/CardsList/CardsList';
import TeamList from 'components/TeamList/TeamList';
import { getRandomTeam } from 'services/ramdomTeam';
import heroes from 'db/heroes.json';
import FightRing from 'components/FightRing/FightRing';
import { calculateTotalPowerTeam } from 'services/calculatorService';
import { addCardToTeam, deleteCardFromTeam } from 'redux/cards/slice';
// import { getUserTeam } from 'redux/cards/selectors';
import { filterHeroes } from 'services/filterHeroes';
import GoToRingBtn from 'components/Buttons/GoToRingBtn';
import { useCardsState } from 'hooks/useCardsState';

export const PlayGame = () => {
  const { userTeam } = useCardsState();
  const [isFight, setIsFight] = useState(false);

  const dispatch = useDispatch();

  const noTeam = !userTeam.length;
  const isTeam = userTeam.length === 3;
  const enemyTeam = getRandomTeam(heroes);

  const filteredHeroes = filterHeroes(heroes, userTeam);

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
            </>
          )}
          {!isTeam ? (
            <CardsList filteredHeroes={filteredHeroes} addToTeam={addToTeam} />
          ) : (
            <GoToRingBtn openRing={() => setIsFight(true)}>
              Go to ring
            </GoToRingBtn>
          )}
        </div>
      )}
    </>
  );
};
