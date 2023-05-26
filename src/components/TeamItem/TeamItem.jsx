import React, { useEffect, useState } from 'react';
import {
  CardItemWrapper,
  HeroName,
  HeroSkills,
  HeroDescription,
  CardBack,
  CardFront,
  Card,
  DeleteButton,
  InfoButton,
  BackButton,
  HeroDescriptionTitle,
  HeroNameBack,
  MainSkillIcon,
} from 'components/CardItem/CardItem.styled';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BsInfoLg } from 'react-icons/bs';
import { TbArrowBackUp } from 'react-icons/tb';

import power from 'images/power-2.png';
import intelligence from 'images/intelligence-3.png';
import fight from 'images/fight-2.png';

export function TeamItem({ hero, deleteFromTeam, removeFromSceleton }) {
  const [flipped, setFlipped] = useState(false);
  const [skillIcon, setSkillIcon] = useState(null);

  useEffect(() => {
    switch (hero.type) {
      case 'intelligence':
        setSkillIcon(intelligence);
        break;
      case 'force':
        setSkillIcon(power);
        break;
      case 'fightingSkills':
        setSkillIcon(fight);
        break;

      default:
        break;
    }
  }, [hero.type]);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const onDelete = () => {
    deleteFromTeam(hero.id);
    removeFromSceleton(hero.type);
  };

  return (
    <CardItemWrapper>
      <Card flipped={flipped}>
        <CardFront imgUrl={hero.imgUrl}>
          {deleteFromTeam && (
            <DeleteButton onClick={onDelete}>
              <RiDeleteBin2Line color="white" size="2em" />
            </DeleteButton>
          )}

          <InfoButton onClick={handleFlip}>
            <BsInfoLg color="white" size="2em" />
          </InfoButton>
          <MainSkillIcon style={{ backgroundImage: `url(${skillIcon})` }} />
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
