import React from 'react';
import './Accordeon.scss';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useCardsState } from 'hooks/useCardsState';
import TeamItemSmall from 'components/ChooseTeamList/TeamItemSmall/TeamItemSmall';
import {
  TeamBox,
  TeamHeader,
  TeamItemCommand,
} from 'components/ChooseTeamList/ChooseTeamList.styled';

export const Accordeon = () => {
  const { statistics } = useCardsState();

  return (
    <Box className="AccordeonContainer">
      {statistics.length > 0
        ? statistics
            .map((item, idx) => (
              <Box className="AccordeonTab" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  className="AccordeonInput"
                />
                <label
                  style={
                    item.winner.includes('Enemy')
                      ? { background: '#c61818' }
                      : { background: '#030250' }
                  }
                  className="TabLabel"
                  htmlFor={item.id}
                >
                  {item.winner.includes('Enemy') ? (
                    <Text textAlign="left"> Fight #{idx + 1} - Defeat</Text>
                  ) : (
                    <Text textAlign="left">Fight #{idx + 1} - Victory</Text>
                  )}
                </label>
                <Box className="TabContent">
                  {item.winner.includes('Enemy') ? (
                    <Heading className="FightResult" color="#dd1a1a" mx="auto">
                      Defeat
                    </Heading>
                  ) : (
                    <Heading className="FightResult" color="green" mx="auto">
                      Victory
                    </Heading>
                  )}
                  <Box display="flex">
                    <Box
                      name="user-team"
                      transform="scale(0.7)"
                      w="calc((100%-10px)/2)"
                    >
                      <TeamItemCommand key={item.id}>
                        <TeamHeader>Your Team</TeamHeader>
                        <TeamBox>
                          {item.userTeam.map(hero => {
                            return <TeamItemSmall key={hero.id} hero={hero} />;
                          })}
                        </TeamBox>
                      </TeamItemCommand>
                      <Box className="TeamScoreFigure">
                        <p>{item.powerUserTeam} points</p>
                      </Box>
                    </Box>
                    <Box
                      name="enemy-team"
                      transform="scale(0.7)"
                      w="calc((100%-10px)/2)"
                    >
                      <TeamItemCommand key={item.id}>
                        <TeamHeader>Enemy Team</TeamHeader>
                        <TeamBox>
                          {item.enemyTeam.map(hero => {
                            return <TeamItemSmall key={hero.id} hero={hero} />;
                          })}
                        </TeamBox>
                      </TeamItemCommand>
                      <Box className="TeamScoreFigure">
                        <p>{item.powerEnemyTeam} points</p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))
            .reverse()
        : null}
    </Box>
  );
};
