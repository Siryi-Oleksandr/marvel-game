import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { PlayGame, PlayTeamGame, Home } from 'pages';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const SharedLayout = () => {
  const [homePage, setHomePage] = useState(true);
  return (
    <Box h="100vh" w="100vw">
      {homePage ? (
        <Home setHomePage={setHomePage} />
      ) : (
        <Tabs>
          <TabList display="flex" justifyContent="space-evenly">
            <Tab w="50%">
              <NavLink>Pick your own team</NavLink>
            </Tab>
            <Tab w="50%">
              <NavLink>Choose your team</NavLink>
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
