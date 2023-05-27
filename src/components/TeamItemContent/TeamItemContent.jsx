import React from 'react';
import { TeamBox, TeamHeader, TeamItemCommand } from 'components';
import { TeamItemSmall } from 'components';

export const TeamItemContent = ({ team, teamName, statisticPage = false }) => {
  return (
    <>
      <TeamItemCommand>
        <TeamHeader>{teamName}</TeamHeader>
        <TeamBox>
          {team.map(hero => {
            return (
              <TeamItemSmall
                statisticPage={statisticPage}
                key={hero.id}
                hero={hero}
              />
            );
          })}
        </TeamBox>
      </TeamItemCommand>
    </>
  );
};
