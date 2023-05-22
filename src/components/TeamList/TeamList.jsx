import React from 'react';
import { TeamListWrapper } from './TeamList.styled';

import TeamItem from 'components/TeamItem/TeamItem';
import SectionTitle from 'components/SectionTitle/SectionTitle';

function TeamList({ team, deleteFromTeam, title }) {
  if (team.length === 0) {
    return <p>you haven't team yet</p>;
  }

  return (
    <TeamListWrapper>
      <SectionTitle>{title}</SectionTitle>
      {team.map(hero => (
        <TeamItem key={hero.id} hero={hero} deleteFromTeam={deleteFromTeam} />
      ))}
    </TeamListWrapper>
  );
}

export default TeamList;
