import React from 'react';
import { CardListWrapper } from './CardsList.styled';
import CardItem from 'components/CardItem/CardItem';
import SectionTitle from 'components/SectionTitle/SectionTitle';

function CardsList({ filteredHeroes, addToTeam }) {
  return (
    <>
      <SectionTitle>Choose from the following heroes</SectionTitle>
      <CardListWrapper>
        {filteredHeroes.map(hero => (
          <CardItem key={hero.id} hero={hero} addToTeam={addToTeam} />
        ))}
      </CardListWrapper>
    </>
  );
}

export default CardsList;
