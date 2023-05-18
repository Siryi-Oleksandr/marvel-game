import './Home.scss';
import React from 'react';
import { WelcomeBtn, Logo, Container, Title, DescrGallery } from 'components';
import { Box, Text } from '@chakra-ui/react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { closeCurtains, openCurtains } from 'services/animateCurtains';

export const Home = ({ setHomePage, setSharedLay }) => {
  return (
    <Box h="100vh" w="100vw" className="descrPage">
      <Box as={Container} display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" pt="20px">
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
        <Box display="flex" flexDirection="column" className="ContentBox">
          <Box
            color="#ffd700"
            textAlign="center"
            fontWeight="bold"
            maxW="650px"
            mx="auto"
          >
            <Title>Superhero Power App</Title>
            <Text fontSize="20px">
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
              setHomePage={setHomePage}
              onClick={() => {
                closeCurtains();

                setTimeout(() => {
                  setHomePage(false);
                  setSharedLay(true);
                  openCurtains();
                }, 3000);
              }}
            >
              Let's Play!
            </WelcomeBtn>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
