import React, { useEffect, useState } from 'react';
import { TeamSceletonWrapper } from './TeamSceleton.styled';
import CardSceleton from 'components/CardSceleton/CardSceleton';
import intelligence from 'images/skeleton-3.png';
import force from 'images/skeleton-2.png';
import fight from 'images/skeleton-1.png';
import { useCardsState } from 'hooks/useCardsState';
import TeamItem from 'components/TeamItem/TeamItem';
import { Title } from 'components/Title/Title';

function TeamSceleton({ deleteFromTeam }) {
  const { userTeam } = useCardsState();
  const [isIntelligence, setIsIntelligence] = useState(null);
  const [isForce, setIsForce] = useState(null);
  const [isFighting, setIsFighting] = useState(null);

  useEffect(() => {
    userTeam.forEach(hero => {
      switch (hero.type) {
        case 'intelligence':
          setIsIntelligence(hero);
          break;
        case 'force':
          setIsForce(hero);
          break;
        case 'fightingSkills':
          setIsFighting(hero);
          break;

        default:
          break;
      }
    });
  }, [userTeam]);

  const removeFromSceleton = type => {
    switch (type) {
      case 'intelligence':
        setIsIntelligence(null);
        break;
      case 'force':
        setIsForce(null);
        break;
      case 'fightingSkills':
        setIsFighting(null);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="titleWrapper">
        <Title>Gather your team here</Title>
      </div>

      <TeamSceletonWrapper>
        {isIntelligence ? (
          <TeamItem
            hero={isIntelligence}
            removeFromSceleton={removeFromSceleton}
            deleteFromTeam={deleteFromTeam}
          />
        ) : (
          <CardSceleton
            name="Intelligence"
            bgImg={intelligence}
            color="yellow"
          />
        )}

        {isForce ? (
          <TeamItem
            hero={isForce}
            removeFromSceleton={removeFromSceleton}
            deleteFromTeam={deleteFromTeam}
          />
        ) : (
          <CardSceleton name="Force" bgImg={force} color="green" />
        )}

        {isFighting ? (
          <TeamItem
            hero={isFighting}
            removeFromSceleton={removeFromSceleton}
            deleteFromTeam={deleteFromTeam}
          />
        ) : (
          <CardSceleton name="Fighting" bgImg={fight} color="red" />
        )}
      </TeamSceletonWrapper>
    </>
  );
}

export default TeamSceleton;
