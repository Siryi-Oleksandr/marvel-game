import './Home.scss';
import React from 'react';
import {
  Curtain,
  WelcomeBtn,
  Logo,
  Container,
  Title,
  DescrGallery,
} from 'components';
import { Box, Text } from '@chakra-ui/react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { animateCurtains } from 'services/animateCurtains';

export const Home = ({ setHomePage }) => {
  return (
    <Curtain setHomePage={setHomePage}>
      <Box h="100vh" w="100vw" position="relative" className="descrPage">
        <Container>
          <Box display="flex" justifyContent="space-between" py="20px">
            <Logo />
            <Text color="whitesmoke">
              with
              <BsFillSuitHeartFill
                fill="red"
                style={{
                  display: 'inline-flex',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
              />
              from DevDoodles
            </Text>
          </Box>
          <Box
            color="#ffd700"
            textAlign="center"
            fontWeight="bold"
            maxW="650px"
            mx="auto"
          >
            <Title>Superhero Power App</Title>

            <Text fontSize="20px" mb="20px">
              the ultimate tool for assessing the strength of your superhero
              team!
            </Text>
          </Box>
          <DescrGallery />
          <Box
            justifyContent="center"
            alignItems="center"
            display="flex"
            className="buttonContainer"
          >
            <WelcomeBtn
              onClick={() => {
                animateCurtains();
                setTimeout(() => setHomePage(false), 3000);
              }}
            >
              Let's Play!
            </WelcomeBtn>
          </Box>
        </Container>
      </Box>
    </Curtain>
  );
};
