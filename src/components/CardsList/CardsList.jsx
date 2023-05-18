import React from 'react';
import { CardListWrapper } from './CardsList.styled';

// import heroes from 'db/heroes.json';
import CardItem from 'components/CardItem/CardItem';

function CardsList({ filteredHeroes, addToTeam }) {
  return (
    <CardListWrapper>
      {filteredHeroes.map(hero => (
        <CardItem key={hero.id} hero={hero} addToTeam={addToTeam} />
      ))}
    </CardListWrapper>
  );
}

export default CardsList;
