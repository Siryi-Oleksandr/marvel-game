import React from 'react';
import { TeamSceletonWrapper } from './TeamSceleton.styled';
import CardSceleton from 'components/CardSceleton/CardSceleton';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import intelligence from 'images/skeleton-3.png';
import force from 'images/skeleton-2.png';
import fight from 'images/skeleton-1.png';
import { useCardsState } from 'hooks/useCardsState';

function TeamSceleton() {
  const { userTeam } = useCardsState();

  console.log(userTeam);
  return (
    <>
      <SectionTitle>Gather your team here</SectionTitle>
      <TeamSceletonWrapper>
        {/* {userTeam} */}
        <CardSceleton name="Intelligence" bgImg={intelligence} />
        <CardSceleton name="Force" bgImg={force} />
        <CardSceleton name="Fighting" bgImg={fight} />
      </TeamSceletonWrapper>
    </>
  );
}

export default TeamSceleton;
