import React from 'react';
import { TeamListWrapper } from './TeamList.styled';

import TeamItem from 'components/TeamItem/TeamItem';

function TeamList({ team, deleteFromTeam }) {
  if (team.length === 0) {
    return <p>you haven't team yet</p>;
  }

  return (
    <TeamListWrapper>
      {team.map(hero => (
        <TeamItem key={hero.id} hero={hero} deleteFromTeam={deleteFromTeam} />
      ))}
    </TeamListWrapper>
  );
}

export default TeamList;
