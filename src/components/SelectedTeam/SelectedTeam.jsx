import React, { useState } from 'react';
import './SelectedTeam.scss';
import { useCardsState } from 'hooks/useCardsState';
import { useDispatch } from 'react-redux';
import { setAllTeam } from 'redux/cards/slice';

import {
  ButtonGoToPlayPage,
  HeroesPowers,
  TeamItem,
  Title,
  CardSceleton,
} from 'components';

import {
  ButtonWrapper,
  CardWrapper,
  ClearTeamButton,
  SceletonWrapper,
  SelectedTeamWrapper,
} from './SelectedTeam.styled';

import intelligence from 'images/skeleton-3.webp';
import force from 'images/skeleton-2.webp';
import fight from 'images/skeleton-1.webp';

export const SelectedTeam = ({ deleteFromTeam }) => {
  const { userTeam } = useCardsState();
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);

  const dispatch = useDispatch();

  function onClearTeam() {
    if (userTeam.length === 0) {
      return;
    }
    dispatch(setAllTeam([]));
  }

  function showSelectedPowers(index) {
    setSelectedHeroIndex(index);
  }

  return (
    <>
      <div className="titleWrapper">
        <Title>Choose your team</Title>
      </div>
      <ButtonWrapper>
        <ClearTeamButton onClick={onClearTeam} disabled={!userTeam.length}>
          Clear team
        </ClearTeamButton>
      </ButtonWrapper>

      {!userTeam.length ? (
        <>
          <SceletonWrapper id="selectedTeam">
            <CardSceleton
              name="Intelligence"
              bgImg={intelligence}
              color="yellow"
            />
            <CardSceleton name="Force" bgImg={force} color="green" />
            <CardSceleton name="Fighting" bgImg={fight} color="red" />
          </SceletonWrapper>
        </>
      ) : (
        <SelectedTeamWrapper>
          {userTeam.map((hero, index) => (
            <CardWrapper
              className={selectedHeroIndex === index ? 'selected-hero' : ''}
              key={hero.id}
              onClick={() => showSelectedPowers(index)}
            >
              <TeamItem hero={hero} deleteFromTeam={deleteFromTeam} />
            </CardWrapper>
          ))}
        </SelectedTeamWrapper>
      )}
      {!!userTeam.length && <HeroesPowers heroIndex={selectedHeroIndex} />}
      {!!userTeam.length && <ButtonGoToPlayPage />}
    </>
  );
};
