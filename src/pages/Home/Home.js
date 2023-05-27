import './Home.scss';
import React, { useEffect, useState } from 'react';
import {
  WelcomeBtn,
  Logo,
  Container,
  Title,
  DescrGallery,
  MobileVersion,
  Loader,
} from 'components';
import { Box, Text } from '@chakra-ui/react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { closeCurtains, openCurtains } from 'services/animateCurtains';
import { useDispatch } from 'react-redux';
import { fetchCards } from 'redux/cards/operations';
import { useNavigate } from 'react-router-dom';

export const Home = ({ setSharedLay }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box h="100vh" w="100vw" className="descrPage">
      <Box as={Container} display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" pt="20px">
          <Logo />

          <Text color="red.700">
            with
            <BsFillSuitHeartFill
              color="red"
              fill="currentColor"
              style={{
                display: 'inline-flex',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
            from DevDoodles
          </Text>
        </Box>
        {screenWidth < 768 ? (
          <MobileVersion />
        ) : (
          <Box display="flex" flexDirection="column" className="ContentBox">
            <Box
              color="whitesmoke"
              textShadow="#000 1px 0 5px"
              textAlign="center"
              fontWeight="bold"
              maxW="650px"
              mx="auto"
            >
              <Title>Superhero Power App</Title>
              <Text fontSize="20px" fontWeight="normal">
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
                  closeCurtains();
                  dispatch(fetchCards());
                  setTimeout(() => {
                    navigate('/play');
                    setSharedLay(true);
                  }, 2000);
                  setTimeout(() => {
                    openCurtains();
                  }, 3000);
                }}
              >
                Let's Play!
              </WelcomeBtn>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
