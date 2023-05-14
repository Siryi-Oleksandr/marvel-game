import React from 'react';
import CardItem from 'components/CardItem/CardItem';
import { CardListWrapper } from 'components/CardsList/CardsList.styled';
import heroes from 'db/heroes.json';

export const PlayGame = () => {
  return (
    <div>
      PlayGames
      <CardListWrapper>
        <CardItem />
      </CardListWrapper>
    </div>
  );
};
