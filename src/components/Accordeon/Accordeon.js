import React from 'react';
import './Accordeon.scss';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useCardsState } from 'hooks/useCardsState';
import { TeamItemContent } from 'components';
import { pallete } from 'helpers/variables';

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
                      ? { background: pallete.primaryRed }
                      : { background: pallete.primaryBlue }
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
                    <Heading
                      className="FightResult"
                      color={pallete.primaryBlue}
                      mx="auto"
                    >
                      Victory
                    </Heading>
                  )}
                  <Box display="flex">
                    <Box
                      name="user-team"
                      transform="scale(0.7)"
                      w="calc((100%-10px)/2)"
                    >
                      <TeamItemContent
                        teamName='Your Team'
                        statisticPage={true}
                        team={item.userTeam}
                      />
                      <Box className="TeamScoreFigure">
                        <p>{item.powerUserTeam} points</p>
                      </Box>
                    </Box>
                    <Box
                      name="enemy-team"
                      transform="scale(0.7)"
                      w="calc((100%-10px)/2)"
                    >
                      <TeamItemContent
                        teamName='Enemy Team'
                        statisticPage={true}
                        team={item.enemyTeam}
                      />

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
