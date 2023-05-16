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
  HeroNameBack,
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
          <HeroNameBack>{hero.name}</HeroNameBack>
          <HeroSkills>
            <span>Intelligence: </span>
            <span>{hero.characteristics.intelligence}</span>
          </HeroSkills>
          <HeroSkills>
            <span>Force: </span>
            <span>{hero.characteristics.force}</span>
          </HeroSkills>
          <HeroSkills>
            <span>Speed And Agility: </span>
            <span> {hero.characteristics.speedAndAgility}</span>
          </HeroSkills>
          <HeroSkills>
            <span> Fighting Skills: </span>
            <span> {hero.characteristics.fightingSkills}</span>
          </HeroSkills>
          <HeroSkills>
            <span>Special Skills: </span>
            <span>{hero.characteristics.specialSkills}</span>
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