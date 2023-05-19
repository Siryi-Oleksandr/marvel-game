import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsList from 'components/CardsList/CardsList';
import './PlayGame.scss';
import { getRandomTeam } from 'services/ramdomTeam';
import FightRing from 'components/FightRing/FightRing';
import { calculateTotalPowerTeam } from 'services/calculatorService';
import { addCardToTeam, deleteCardFromTeam } from 'redux/cards/slice';
import GoToRingBtn from 'components/Buttons/GoToRingBtn';
import { useCardsState } from 'hooks/useCardsState';
import TeamSceleton from 'components/TeamSceleton/TeamSceleton';

export const PlayGame = () => {
  const { userTeam, cards, filteredCards } = useCardsState();
  const [isFight, setIsFight] = useState(false);

  const dispatch = useDispatch();

  const noTeam = !userTeam.length;
  const isTeam = userTeam.length === 3;
  const enemyTeam = getRandomTeam(cards);

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
    <div className="playPage">
      {isFight ? (
        <FightRing
          userTeam={userTeam}
          enemyTeam={enemyTeam}
          fight={onFight}
          back={onBack}
        />
      ) : (
        <div>
          <TeamSceleton deleteFromTeam={deleteFromTeam} />

          {!isTeam ? (
            <CardsList filteredHeroes={filteredCards} addToTeam={addToTeam} />
          ) : (
            <GoToRingBtn openRing={() => setIsFight(true)} />
          )}
        </div>
      )}
      {/* <div className="animated-background "></div> */}
    </div>
  );
};
