import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { PlayGame, PlayTeamGame, Home } from 'pages';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const SharedLayout = () => {
  const [homePage, setHomePage] = useState(true);
  const [sharedLay, setSharedLay] = useState(false);
  return (
    <Box h="100vh" w="100vw" overflowX="hidden">
      {homePage && (
        <Home setHomePage={setHomePage} setSharedLay={setSharedLay} />
      )}
      {sharedLay && (
        <Tabs>
          <TabList display="flex" justifyContent="space-evenly">
            <Tab w="50%">
              <NavLink path="/play">Pick your own team</NavLink>
            </Tab>
            <Tab w="50%">
              <NavLink path="/teamplay">Choose your team</NavLink>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PlayGame />
            </TabPanel>
            <TabPanel>
              <PlayTeamGame />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Box>
  );
};
