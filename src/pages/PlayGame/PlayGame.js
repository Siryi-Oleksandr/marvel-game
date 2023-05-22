import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsList from 'components/CardsList/CardsList';
import './PlayGame.scss';
import { getRandomTeam } from 'services/ramdomTeam';
import FightRing from 'components/FightRing/FightRing';
import { calculateTotalPowerTeam } from 'services/calculatorService';
import {
  addCardToTeam,
  deleteCardFromTeam,
  setAllTeam,
} from 'redux/cards/slice';
import GoToRingBtn from 'components/Buttons/GoToRingBtn';
import { useCardsState } from 'hooks/useCardsState';
import TeamSceleton from 'components/TeamSceleton/TeamSceleton';
import Loader from 'components/Loader2';
import { VinnerModal } from 'components/Modal/Modal';

export const PlayGame = () => {
  const { userTeam, cards, filteredCards } = useCardsState();
  const [goToFight, setGoToFight] = useState(false);
  const [isFight, setIsFight] = useState(false);
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messages, setMessages] = useState({});
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
    if (powerUserTeam >= powerEnemyTeam) {
      winner = 'User Team';
      setMessages({
        messageTitle: `Congratulations 🎉`,
        messageBody: `Team "${winner}" won with the score  ${powerUserTeam} :  ${powerEnemyTeam}`,
      });
    } else {
      winner = 'Enemy Team';
      setMessages({
        messageTitle: `Unfortunately your team lost 😥`,
        messageBody: `Team "${winner}" won with the score  ${powerUserTeam} :  ${powerEnemyTeam}`,
      });
    }

    setTimeout(() => {
      setIsFight(false);
      toggleModal();
    }, 1500);
  };

  const onBack = () => {
    setGoToFight(false);
    setEnemyTeam([]);
    dispatch(setAllTeam([]));
  };

  const onGoToGing = () => {
    setIsFight(true);
    setEnemyTeam(() => getRandomTeam(cards));

    setTimeout(() => {
      setIsFight(false);
      setGoToFight(true);
    }, 1000);
  };

  const toggleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <div>
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
      <VinnerModal
        isOpen={isOpenModal}
        onClose={toggleModal}
        messages={messages}
      />
      {/* <div className="animated-background "></div> */}
    </div>
  );
};
