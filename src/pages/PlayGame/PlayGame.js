import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './PlayGame.scss';
import {
  addCardToTeam,
  deleteCardFromTeam,
  setAllTeam,
} from 'redux/cards/slice';
import { setFightStatistics } from 'redux/statistics/slice';
import { getRandomTeam, calculateTotalPowerTeam } from 'services';
import { useCardsState } from 'hooks/useCardsState';

import {
  CardsList,
  FightRing,
  TeamSceleton,
  Loader,
  GoToRingBtn,
  VinnerModal,
  FightAnimation,
} from 'components';

import { nanoid } from 'nanoid';

export const PlayGame = () => {
  const {
    userTeam,
    cards,
    filteredCards,
    userTeamTitle = null,
  } = useCardsState();
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [goToFight, setGoToFight] = useState(false);
  const [isFight, setIsFight] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [infoVinner, setInfoVinner] = useState({});
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

    let vinnerObj = {
      powerUserTeam,
      powerEnemyTeam,
      userTeam,
      enemyTeam,
      id: nanoid(),
    };
    if (powerUserTeam >= powerEnemyTeam) {
      vinnerObj.winner = userTeamTitle ?? 'User Team';
      setInfoVinner({
        ...vinnerObj,
        messageTitle: `Congratulations 🎉`,
        messageBody: `${vinnerObj.winner} won with the score:`,
      });
    } else {
      vinnerObj.winner = 'Enemy Team';
      setInfoVinner({
        ...vinnerObj,
        messageTitle: `Unfortunately your team lost 😥`,
        messageBody: `"Enemy Team" won with the score:`,
      });
    }

    setTimeout(() => {
      setIsFight(false);
      toggleModal();
      dispatch(setFightStatistics(vinnerObj));
    }, 4000);
  };

  const onBack = () => {
    setGoToFight(false);
    setEnemyTeam([]);
    dispatch(setAllTeam([]));
  };

  const onGoToGing = () => {
    setIsLoading(true);
    setEnemyTeam(() => getRandomTeam(cards, userTeam));

    setTimeout(() => {
      setIsLoading(false);
      setGoToFight(true);
    }, 1000);
  };

  const toggleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  if (isFight) {
    return <FightAnimation userTeam={userTeam} enemyTeam={enemyTeam} />;
  }

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

      <VinnerModal
        isOpen={isOpenModal}
        onClose={toggleModal}
        infoVinner={infoVinner}
        back={onBack}
      />
      {isLoading && <Loader />}
    </div>
  );
};
