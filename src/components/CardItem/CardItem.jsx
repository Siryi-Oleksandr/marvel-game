import React from 'react';
import {
  CardInfoWrapper,
  CardItemWrapper,
  SkillIconIntelligence,
  SkillQuantity,
} from './CardItem.styled';
import heroes from 'db/heroes.json';

const card = {
  id: 1,
  name: 'Captain America',
  description:
    'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
  imgUrl: 'https://cdn.marvel.com/content/1x/003cap_com_crd_01.jpg',
  characteristics: {
    intelligence: 100,
    force: 100,
    speedAndAgility: 100,
    specialSkills: 100,
    fightingSkills: 100,
  },
};

function CardItem() {
  return (
    <CardItemWrapper>
      <CardInfoWrapper>
        <SkillIconIntelligence>
          <SkillQuantity>100</SkillQuantity>
        </SkillIconIntelligence>
      </CardInfoWrapper>
    </CardItemWrapper>
  );
}

export default CardItem;
