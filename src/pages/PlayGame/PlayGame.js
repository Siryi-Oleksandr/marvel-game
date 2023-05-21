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
import Loader from 'components/Loader2';

export const PlayGame = () => {
  const { userTeam, cards, filteredCards } = useCardsState();
  const [goToFight, setGoToFight] = useState(false);
  const [isFight, setIsFight] = useState(false);
  const [enemyTeam, setEnemyTeam] = useState([]);

  const dispatch = useDispatch();

  const noTeam = !userTeam.length;
  const isTeam = userTeam.length === 3;

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
    setIsFight(true);
    const powerUserTeam = calculateTotalPowerTeam(userTeam);
    const powerEnemyTeam = calculateTotalPowerTeam(enemyTeam);
    let winner = null;
    if (powerUserTeam > powerEnemyTeam) {
      winner = 'User Team';
    } else {
      winner = 'Enemy Team';
    }

    setTimeout(() => {
      setIsFight(false);
      console.log(
        `Team "${winner}" won with the score  ${powerUserTeam} :  ${powerEnemyTeam}`
      );
      return alert(`Winer: "${winner}" 🎉`);
    }, 2000);
  };

  const onBack = () => {
    setGoToFight(false);
    setEnemyTeam([]);
  };

  const onGoToGing = () => {
    setGoToFight(true);
    setEnemyTeam(() => getRandomTeam(cards));
  };

  return (
    <div className="playPage">
      {goToFight ? (
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
            <GoToRingBtn openRing={onGoToGing} />
          )}
        </div>
      )}
      {isFight && <Loader />}
      {/* <div className="animated-background "></div> */}
    </div>
  );
};
