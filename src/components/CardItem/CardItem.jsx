import React, { useState } from 'react';
import {
  CardItemWrapper,
  HeroName,
  HeroSkills,
  HeroDescription,
  CardBack,
  CardFront,
  Card,
  AddButton,
  InfoButton,
  BackButton,
  HeroDescriptionTitle,
} from './CardItem.styled';
import { GoPlus } from 'react-icons/go';
import { BsInfoLg } from 'react-icons/bs';
import { TbArrowBackUp } from 'react-icons/tb';

function CardItem({ hero }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <CardItemWrapper>
      <Card flipped={flipped}>
        <CardFront imgUrl={hero.imgUrl}>
          <AddButton onClick={() => alert('added to team')}>
            <GoPlus color="white" size="2em" />
          </AddButton>
          <InfoButton onClick={handleFlip}>
            <BsInfoLg color="white" size="2em" />
          </InfoButton>
          <HeroName>{hero.name}</HeroName>
        </CardFront>

        <CardBack className="overley">
          <BackButton onClick={handleFlip}>
            <TbArrowBackUp color="white" size="2em" />
          </BackButton>
          <HeroSkills> Name: {hero.name}</HeroSkills>
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
            <HeroDescriptionTitle>Description: </HeroDescriptionTitle>

            {hero.description}
          </HeroDescription>
        </CardBack>
      </Card>
    </CardItemWrapper>
  );
}

export default CardItem;
