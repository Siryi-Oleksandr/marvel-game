import React from 'react';
import { CardListWrapper } from './CardsList.styled';

import heroes from 'db/heroes.json';
import CardItem from 'components/CardItem/CardItem';

console.log(heroes);

function CardsList() {
  return (
    <CardListWrapper>
      {heroes.map(hero => (
        <CardItem key={hero.id} hero={hero} />
      ))}
    </CardListWrapper>
  );
}

export default CardsList;
