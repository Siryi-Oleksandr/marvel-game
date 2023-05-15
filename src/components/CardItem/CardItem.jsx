import React from 'react';
import {
  CardInfoWrapper,
  CardItemWrapper,
  SkillIconIntelligence,
  SkillQuantity,
  SkillIconFight,
  SkillIconSpeed,
  SkillIconForce,
  CardOverlay,
  HeroName,
  HeroSkills,
  HeroDescription,
} from './CardItem.styled';

function CardItem({ hero }) {
  return (
    <CardItemWrapper>
      <CardInfoWrapper imgUrl={hero.imgUrl}>
        <HeroName>{hero.name}</HeroName>
        <SkillIconIntelligence>
          <SkillQuantity>{hero.characteristics.intelligence}</SkillQuantity>
        </SkillIconIntelligence>
        <SkillIconForce>
          <SkillQuantity>{hero.characteristics.force}</SkillQuantity>
        </SkillIconForce>
        <SkillIconSpeed>
          <SkillQuantity>{hero.characteristics.speedAndAgility}</SkillQuantity>
        </SkillIconSpeed>
        <SkillIconFight>
          <SkillQuantity>{hero.characteristics.fightingSkills}</SkillQuantity>
        </SkillIconFight>
      </CardInfoWrapper>

      <CardOverlay className="overley">
        <HeroSkills>
          {' '}
          Intelligence: {hero.characteristics.intelligence}
        </HeroSkills>
        <HeroSkills> Force: {hero.characteristics.force}</HeroSkills>
        <HeroSkills>
          {' '}
          Speed And Agility: {hero.characteristics.speedAndAgility}
        </HeroSkills>
        <HeroSkills>
          {' '}
          Fighting Skills: {hero.characteristics.fightingSkills}
        </HeroSkills>
        <HeroSkills>
          {' '}
          Special Skills: {hero.characteristics.specialSkills}
        </HeroSkills>

        <HeroDescription>
          Description:
          {hero.description}
        </HeroDescription>
      </CardOverlay>
    </CardItemWrapper>
  );
}

export default CardItem;

// intelligence: 100,
//   force: 100,
//   speedAndAgility: 100,
//   specialSkills: 100,
//   fightingSkills: 100,
