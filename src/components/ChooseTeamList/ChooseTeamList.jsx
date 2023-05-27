import React from 'react';

import { useCardsState } from 'hooks/useCardsState';
import { setAllTeam } from 'redux/cards/slice';
import { useDispatch } from 'react-redux';
import { ListWrapper } from './ChooseTeamList.styled';
import { TeamItemContent } from 'components';

export const ChooseTeamList = ({ refUp }) => {
  const { cards } = useCardsState();

  const dispatch = useDispatch();

  function mergeHeroesIntoTeams(heroes) {
    const mergedHeroes = {};
    heroes.forEach(hero => {
      if (!mergedHeroes[hero.team]) {
        mergedHeroes[hero.team] = [];
      }
      mergedHeroes[hero.team].push(hero);
    });

    return Object.values(mergedHeroes);
  }

  const mergedHeroes = mergeHeroesIntoTeams(cards);

  function onSetTeam(team) {
    dispatch(setAllTeam([]));
    dispatch(setAllTeam(team));
    smoothScroll(refUp.current);
  }
  function smoothScroll(target) {
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <ListWrapper>
      {mergedHeroes.map(team => {
        return (
          <div onClick={() => onSetTeam(team)} key={team[0].team}>
            <TeamItemContent teamName={team[0].team} team={team} />
          </div>
        );
      })}
    </ListWrapper>
  );
};
