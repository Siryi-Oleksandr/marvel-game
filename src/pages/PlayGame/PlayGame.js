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
import { setFightStatistics } from 'redux/statistics/slice';
import GoToRingBtn from 'components/Buttons/GoToRingBtn';
import { useCardsState } from 'hooks/useCardsState';
import TeamSceleton from 'components/TeamSceleton/TeamSceleton';
import Loader from 'components/Loader2';
import { VinnerModal } from 'components/Modal/Modal';
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
        infoVinner={infoVinner}
        back={onBack}
      />
    </div>
  );
};
